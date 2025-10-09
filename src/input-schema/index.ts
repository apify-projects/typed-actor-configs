import z from 'zod';
import { minimalStringSchema, stringPropertySchema, type StringPropertyInput } from './string-property/index.ts';
import { booleanPropertySchema, minimalBooleanSchema, type BooleanPropertyInput } from './boolean-property/index.ts';
import { integerPropertySchema, minimalIntegerSchema, type IntegerPropertyInput } from './integer-property/index.ts';
import { enumPropertySchema, minimalEnumSchema, type EnumPropertyInput } from './enum-property/index.ts';
import { type CollapseIntersection } from '../utility-types/collapse-intersection/index.ts';
import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs';
import { checkIntegrity, hashConfigurationFile, type Hashed } from '../versioning/config-file-hash/index.ts';
import { diffConfigurations } from '../versioning/config-diff/index.ts';
import { arrayPropertySchema, minimalArraySchema, type ArrayPropertyType } from './array-property/index.ts';
import { execArgs, initializeExecArgs } from './exec-args.ts';
import { greenBG, redBG, yellowBG } from '../text-coloring/index.ts';
import { type DefaultedFields } from '../utility-types/nullability.ts';

const propertyTypesSchemas = [
    stringPropertySchema,
    booleanPropertySchema,
    integerPropertySchema,
    enumPropertySchema,
    arrayPropertySchema,
];
const propertyTypes = z.union(propertyTypesSchemas);

type AnyProperty = z.infer<typeof propertyTypes>;

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

function writeSchemaFile(path: string, content: Hashed<InputSchema>) {
    const { _hash, ...rest } = content;
    writeFileSync(path, JSON.stringify(rest, null, 4));
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
    path: `${string}/input_schema.json`,
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
    const configExists = existsSync(path);
    const hashedInput = hashConfigurationFile(input, inputSchema);
    if (!configExists) {
        console.log('No input schema found, will write to .actor/input_schema.json');
        if (execArgs.noDiff()) {
            process.exit(1);
        }
        createPathToFile(path);
        writeSchemaFile(path, hashedInput);
        return input;
    }
    const previousConfig = readFileSync(path, 'utf-8');
    const integrity = checkIntegrity(previousConfig, inputSchema);
    const parsedPreviousConfig = inputSchema.safeParse(JSON.parse(previousConfig));
    if (!parsedPreviousConfig.success) {
        console.log('Previous input schema is invalid, overwriting');
        if (execArgs.noDiff()) {
            process.exit(1);
        }
        writeSchemaFile(path, hashedInput);
        return input;
    }

    const diff = diffConfigurations(parsedPreviousConfig.data, input);

    if (diff && execArgs.noDiff()) {
        console.log('Schema differences found, but --no-diff was set, exiting');
        process.exit(1);
    }

    if (integrity === 'Passed') {
        if (diff) {
            console.log(`Writing new input schema to ${path}`);
            if (execArgs.dryRun()) {
                console.log('Dry run, not writing file');
            } else {
                console.log('Updating input schema');
                writeSchemaFile(path, hashedInput);
            }
        } else {
            console.log('No changes found.');
        }
    } else {
        console.log('Integrity check failed, schema was modified manually');
        if (execArgs.overwrite()) {
            console.log('--overwrite was set, overwriting file');
            writeSchemaFile(path, hashedInput);
        } else {
            console.warn(`${yellowBG('WARNING:')} Input schema changed manually, check changes`);
            process.exit(1);
        }
    }
    return input;
}

// For { required: ['a', 'b'] } it will return 'a' | 'b'
type requiredKeys<T extends MinimalInputSchema> = T extends { required: (infer R)[] } ? R : '';

const allMinimalSchemas = [
    minimalEnumSchema,
    minimalStringSchema,
    minimalArraySchema,
    minimalBooleanSchema,
    minimalIntegerSchema,
];
const minimalPropertyTypesSchema = z.union(allMinimalSchemas);
export type MinimalProperty = z.infer<typeof minimalPropertyTypesSchema>;

const minimalInputSchema = z.object({
    properties: z.record(z.string(), minimalPropertyTypesSchema),
    required: z.array(z.string()).optional(),
});
export type MinimalInputSchema = z.infer<typeof minimalInputSchema>;

export function defineMinimalInputConfiguration<
    Properties extends string,
    Requireds extends Properties,
    Schema extends MinimalInputSchema
>(
    path: `${string}/input_schema.json` | `${string}/INPUT_SCHEMA.json`,
    input: Schema & {
        properties: { [Key in Properties]: MinimalProperty };
        required?: Requireds[];
    } & MinimalInputSchema
): Schema {
    const configExists = existsSync(path);
    if (!configExists) {
        console.log('No input schema found, nothing to check integrity against');
        process.exit(1);
    }
    const previousConfig = readFileSync(path, 'utf-8');
    checkIntegrity(previousConfig, minimalInputSchema, true);

    const parsedPreviousConfig = minimalInputSchema.safeParse(JSON.parse(previousConfig));
    if (!parsedPreviousConfig.success) {
        console.log('Previous input schema is invalid, cannot check integrity');
        process.exit(1);
    }
    const hasDiff = diffConfigurations(parsedPreviousConfig.data, input);
    if (hasDiff) {
        console.log(`\n${redBG('FAILED')}: Type-critical fields dont match, check changes`);
        process.exit(1);
    }
    console.log(`\n${greenBG('PASSED')}: No differences found on type-critical fields`);
    return input;
}

type inferMinimalProperty<Input extends z.input<(typeof allMinimalSchemas)[number]>> = Input extends z.infer<
    typeof minimalEnumSchema
> & { enum: readonly (infer Item)[] }
    ? Item
    : Input extends z.infer<typeof minimalStringSchema>
    ? StringPropertyInput
    : Input extends z.infer<typeof minimalBooleanSchema>
    ? BooleanPropertyInput
    : Input extends z.infer<typeof minimalIntegerSchema>
    ? IntegerPropertyInput
    : Input extends z.infer<typeof minimalArraySchema>
    ? ArrayPropertyType<Input>
    : never;

type inferMinimalPropertyTypesSchemas<Input extends z.infer<(typeof allMinimalSchemas)[number]>> = Input extends {
    nullable: true;
}
    ? inferMinimalProperty<Input> | null
    : inferMinimalProperty<Input>;

// CollapseIntersection is used to go from {...} & {...} to {...}
export type inferInput<Input extends MinimalInputSchema> = CollapseIntersection<
    {
        [Key in keyof Input['properties'] &
            (requiredKeys<Input> | DefaultedFields<Input>)]: inferMinimalPropertyTypesSchemas<Input['properties'][Key]>;
    } & {
        [Key in Exclude<
            keyof Input['properties'],
            requiredKeys<Input> | DefaultedFields<Input>
        >]?: inferMinimalPropertyTypesSchemas<Input['properties'][Key]>;
    }
>;
