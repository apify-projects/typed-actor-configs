import { FromSchema, JSONSchema } from 'json-schema-to-ts';
import { PropertyExport } from './types.ts';

const resourceArrayProperty = {
    $id: 'resourceArrayProperty',
    title: 'Resource array property',
    type: 'object',
    unevaluatedProperties: false,
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
        prefill: { type: 'array' },
        example: { type: 'array' },
        nullable: { type: 'boolean' },
        minItems: { type: 'integer' },
        maxItems: { type: 'integer' },
        uniqueItems: { type: 'boolean' },
        resourceType: { enum: ['dataset', 'keyValueStore', 'requestQueue'] },
        sectionCaption: { type: 'string' },
        sectionDescription: { type: 'string' },
    },
    required: ['type', 'title', 'description', 'resourceType'],
    allOf: [
        {
            if: {
                required: ['resourcePermissions'],
            },
            then: {
                not: {
                    anyOf: [{ required: ['prefill'] }, { required: ['default'] }],
                },
            },
        },
        {
            if: {
                properties: { nullable: { const: false } },
            },
            then: {
                properties: { default: { type: 'array' } },
            },
            else: {
                properties: { default: { type: ['array', 'null'] } },
            },
        },
    ],
} as const satisfies JSONSchema;
export type ResourceArrayProperty = FromSchema<
    typeof resourceArrayProperty,
    { keepDefaultedPropertiesOptional: true; parseIfThenElseKeywords: true; parseNotKeyword: true }
>;

export type InferResourceArrayProperty<
    T extends {
        readonly type: 'array';
        resourceType: string;
        readonly nullable?: boolean;
    }
> = T['nullable'] extends true ? string[] | null : string[];

export type ResourceArrayPropertyDependencies = [];

export default {
    schema: resourceArrayProperty,
} satisfies PropertyExport;
