import z from 'zod';
import { stringPropertySchema, type StringPropertyInput } from './string-property/index.ts';
import { booleanPropertySchema, type BooleanPropertyInput } from './boolean-property/index.ts';
import { type CollapseIntersection } from '../utility-types/collapse-intersection/index.ts';
import { type NullableFields } from '../utility-types/nullability.ts';
import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs';
import { checkIntegrity, hashConfigurationFile } from '../versioning/config-file-hash/index.ts';
import { diffConfigurations } from '../versioning/config-diff/index.ts';

const propertyTypesSchemas = [stringPropertySchema, booleanPropertySchema];
type inferPropertyTypesSchemas<Input extends z.infer<(typeof propertyTypesSchemas)[number]>> = Input extends z.infer<
    typeof stringPropertySchema
>
    ? StringPropertyInput
    : Input extends z.infer<typeof booleanPropertySchema>
    ? BooleanPropertyInput
    : never;

const inputSchema = z.object({
    $schema: z.literal('https://apify-projects.github.io/actor-json-schemas/input.schema.json?v=0.1').optional(),
    title: z.string(),
    schemaVersion: z.literal(1),
    type: z.literal('object'),
    properties: z.record(z.string(), z.union(propertyTypesSchemas)),
});

export function defineInputConfiguration<InputConfiguration extends z.infer<typeof inputSchema>>(
    input: InputConfiguration
): InputConfiguration {
    const args = process.argv;
    console.log(args);
    const path = '.actor/input_schema.json';
    const configExists = existsSync(path);
    const hashedInput = hashConfigurationFile(input, inputSchema);
    if (!configExists) {
        console.log('No input schema found, will write to .actor/input_schema.json');
        const splitPath = path.split('/');
        for (let i = 0; i < splitPath.length - 1; i++) {
            const folder = splitPath.slice(0, i + 1).join('/');
            if (!existsSync(folder)) {
                mkdirSync(folder, { recursive: true });
            }
        }
        writeFileSync('.actor/input_schema.json', JSON.stringify(hashedInput, null, 4));
        return input;
    }
    const previousConfig = readFileSync('.actor/input_schema.json', 'utf-8');
    const integrity = checkIntegrity(previousConfig, inputSchema);
    const parsedPreviousConfig = inputSchema.parse(JSON.parse(previousConfig));
    if (integrity === 'Passed') {
        diffConfigurations(parsedPreviousConfig, input);
    } else {
        diffConfigurations(parsedPreviousConfig, input);
        console.warn('Input schema changed manually, check changes');
    }
    return input;
}

export type inferInput<Input extends z.infer<typeof inputSchema>> = CollapseIntersection<
    {
        [Key in NullableFields<Input>]?: inferPropertyTypesSchemas<Input['properties'][Key]>;
    } & {
        [Key in Exclude<keyof Input['properties'], NullableFields<Input>>]: inferPropertyTypesSchemas<
            Input['properties'][Key]
        >;
    }
>;
