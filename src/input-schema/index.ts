import z from 'zod';
import { stringPropertySchema, type StringPropertyInput } from './string-property/index.ts';
import { booleanPropertySchema, type BooleanPropertyInput } from './boolean-property/index.ts';
import { integerPropertySchema, type IntegerPropertyInput } from './integer-property/index.ts';
import { enumPropertySchema, type EnumPropertyInput } from './enum-property/index.ts';
import { type CollapseIntersection } from '../utility-types/collapse-intersection/index.ts';
import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs';
import { checkIntegrity, hashConfigurationFile } from '../versioning/config-file-hash/index.ts';
import { diffConfigurations } from '../versioning/config-diff/index.ts';
import { arrayPropertySchema, type ArrayPropertyType } from './array-property/index.ts';
import { execArgs, initializeExecArgs } from './exec-args.ts';
import { yellowBG } from '../text-coloring/index.ts';
import { exit } from 'process';

const propertyTypesSchemas = [
    stringPropertySchema,
    booleanPropertySchema,
    integerPropertySchema,
    enumPropertySchema,
    arrayPropertySchema,
];
const propertyTypes = z.union(propertyTypesSchemas);

type AnyProperty = z.infer<typeof propertyTypes>;

type inferProperty<Input extends z.infer<(typeof propertyTypesSchemas)[number]>> = Input extends z.infer<
    typeof stringPropertySchema
>
    ? StringPropertyInput
    : Input extends z.infer<typeof booleanPropertySchema>
    ? BooleanPropertyInput
    : Input extends z.infer<typeof integerPropertySchema>
    ? IntegerPropertyInput
    : Input extends z.infer<typeof enumPropertySchema> & { enum: (infer Item)[] }
    ? Item
    : Input extends z.infer<typeof arrayPropertySchema>
    ? ArrayPropertyType<Input>
    : never;

type inferPropertyTypesSchemas<Input extends z.infer<(typeof propertyTypesSchemas)[number]>> = Input extends {
    nullable: true;
}
    ? inferProperty<Input> | null
    : inferProperty<Input>;

const inputSchema = z.object({
    $schema: z.literal('https://apify-projects.github.io/actor-json-schemas/input.schema.json?v=0.1').optional(),
    title: z.string(),
    schemaVersion: z.literal(1),
    type: z.literal('object'),
    properties: z.record(z.string(), z.union(propertyTypesSchemas)),
    required: z.array(z.string()).optional(),
});

type InputSchema = z.input<typeof inputSchema>;

// Used to make sure that the strings in required match the keys of the properties
type consistentRequired<T extends InputSchema> = T extends { properties: Record<infer R, any> }
    ? T & { required?: R[] }
    : never;

function createPathToFile(path: string) {
    const splitPath = path.split('/');
    for (let i = 0; i < splitPath.length - 1; i++) {
        const folder = splitPath.slice(0, i + 1).join('/');
        if (!existsSync(folder)) {
            mkdirSync(folder, { recursive: true });
        }
    }
}
/**
 * @param input The input schema to be emmited
 * @returns The same input schema, to be used for input type inference
 */
export function defineInputConfiguration<
    // `InputConfiguration` is the input schema, with all properties and required fields
    InputConfiguration extends InputSchema,
    // `Properties` is the type of all properties, used to allow for intellisense to suggest properties for required fields
    Properties extends string,
    // `Requireds` is the type of all required fields, used to make them pass untouched
    Requireds extends Properties
>(
    // `consistentRequired` forces the required fields to be a subset of the property keys
    // Allowing for intellisense to recommend the required fields based on the properties
    input: consistentRequired<InputConfiguration & { properties: { [Key in Properties]: AnyProperty } }> & {
        required?: Requireds[];
    } & InputSchema
    // | { required?: Properties[] }
    // `InputConfiguration` is not specific enough, so we need to add the required fields explicitly
    // using the `consistentRequired` type would end up with a union of all property keys (which breaks the inference)
): InputConfiguration & { required?: Requireds[] } {
    initializeExecArgs();
    const path = '.actor/input_schema.json';
    const configExists = existsSync(path);
    const hashedInput = hashConfigurationFile(input, inputSchema);
    if (!configExists) {
        console.log('No input schema found, will write to .actor/input_schema.json');
        createPathToFile(path);
        if (execArgs.dryRun()) {
            process.exit(1);
        }
        writeFileSync('.actor/input_schema.json', JSON.stringify(hashedInput, null, 4));
        return input;
    }
    const previousConfig = readFileSync('.actor/input_schema.json', 'utf-8');
    const integrity = checkIntegrity(previousConfig, inputSchema);
    const parsedPreviousConfig = inputSchema.safeParse(JSON.parse(previousConfig));
    if (integrity === 'Passed') {
        diffConfigurations(parsedPreviousConfig, input);
    } else {
        diffConfigurations(parsedPreviousConfig, input);
        if (execArgs.overwrite()) {
            console.log('Input schema changed manually, overwriting');
            writeFileSync('.actor/input_schema.json', JSON.stringify(hashedInput, null, 4));
        } else {
            console.warn(`${yellowBG('WARNING:')} Input schema changed manually, check changes`);
            process.exit(1);
        }
    }
    return input;
}

// For { required: ['a', 'b'] } it will return 'a' | 'b'
type requiredKeys<T extends InputSchema> = T extends { required: (infer R)[] } ? R : '';

// CollapseIntersection is used to go from {...} & {...} to {...}
export type inferInput<Input extends InputSchema> = CollapseIntersection<
    {
        [Key in keyof Input['properties'] & requiredKeys<Input>]: inferPropertyTypesSchemas<Input['properties'][Key]>;
    } & {
        [Key in Exclude<keyof Input['properties'], requiredKeys<Input>>]?: inferPropertyTypesSchemas<
            Input['properties'][Key]
        >;
    }
>;
