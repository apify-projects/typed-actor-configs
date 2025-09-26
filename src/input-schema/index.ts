import z from 'zod';
import { stringPropertySchema, StringPropertyInput } from './string-property';
import { CollapseIntersection } from '../utility-types/collapse-intersection';
import { NullableFields } from '../utility-types/nullability';

const propertyTypesSchemas = [stringPropertySchema];
type inferPropertyTypesSchemas<Input extends z.infer<(typeof propertyTypesSchemas)[number]>> = Input extends z.infer<
    typeof stringPropertySchema
>
    ? StringPropertyInput
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
