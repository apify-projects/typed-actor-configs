import { FromSchema } from 'json-schema-to-ts';
import { SubPropertySchema } from './types.ts';

const subSchemaResourceProperty = {
    $id: 'subSchemaResourceProperty',
    title: 'Sub-schema: Resource property',
    type: 'object',
    additionalProperties: false,
    properties: {
        type: { enum: ['string'] },
        title: { type: 'string' },
        description: { type: 'string' },
        editor: { enum: ['resourcePicker', 'hidden'] },
        resourceType: { enum: ['dataset', 'keyValueStore', 'requestQueue'] },
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
    },
    required: ['type', 'title', 'description', 'resourceType'],
} as const satisfies SubPropertySchema;

export type SubSchemaResourceProperty = FromSchema<
    typeof subSchemaResourceProperty,
    { keepDefaultedPropertiesOptional: true; parseIfThenElseKeywords: true; parseNotKeyword: true }
>;

export type InferSubSchemaResourceProperty<T extends { type: 'string'; resourceType: string; nullable?: boolean }> =
    T['nullable'] extends true ? string | null : string;

export type SubSchemaResourcePropertyDependencies = [];

export default {
    schema: subSchemaResourceProperty,
};
