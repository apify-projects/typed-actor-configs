import { FromSchema } from 'json-schema-to-ts';
import { SubPropertySchema } from './types.ts';

const subSchemaResourceArrayProperty = {
    $id: 'subSchemaResourceArrayProperty',
    title: 'Sub-schema: Resource array property',
    type: 'object',
    additionalProperties: false,
    properties: {
        type: { enum: ['array'] },
        title: { type: 'string' },
        description: { type: 'string' },
        editor: { enum: ['resourcePicker', 'hidden'] },
        resourcePermissions: {
            type: 'array',
            items: {
                type: 'string',
                enum: ['READ', 'WRITE'],
            },
            minItems: 1,
            uniqueItems: true,
            contains: {
                const: 'READ',
            },
        },
        nullable: { type: 'boolean' },
        minItems: { type: 'integer' },
        maxItems: { type: 'integer' },
        uniqueItems: { type: 'boolean' },
        resourceType: { enum: ['dataset', 'keyValueStore', 'requestQueue'] },
    },
    required: ['type', 'title', 'description', 'resourceType'],
} as const satisfies SubPropertySchema;

export type SubSchemaResourceArrayProperty = FromSchema<
    typeof subSchemaResourceArrayProperty,
    { keepDefaultedPropertiesOptional: true; parseIfThenElseKeywords: true; parseNotKeyword: true }
>;

export type InferSubSchemaResourceArrayProperty<T extends { type: 'array'; resourceType: string; nullable?: boolean }> =
    T['nullable'] extends true ? string[] | null : string[];

export type SubSchemaResourceArrayPropertyDependencies = [];

export default {
    schema: subSchemaResourceArrayProperty,
};
