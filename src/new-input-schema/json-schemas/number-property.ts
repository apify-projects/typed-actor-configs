import { FromSchema, JSONSchema } from 'json-schema-to-ts';
import { PropertyExport } from './types.ts';

const numberProperty = {
    $id: 'numberProperty',
    title: 'Number property',
    type: 'object',
    unevaluatedProperties: false,
    properties: {
        type: { enum: ['number'] },
        title: { type: 'string' },
        description: { type: 'string' },
        prefill: { type: 'number' },
        example: { type: 'number' },
        nullable: { type: 'boolean' },
        minimum: { type: 'number' },
        maximum: { type: 'number' },
        unit: { type: 'string' },
        editor: { enum: ['number', 'hidden'] },
        sectionCaption: { type: 'string' },
        sectionDescription: { type: 'string' },
    },
    required: ['type', 'title', 'description'],
    if: {
        properties: { nullable: { const: false } },
    },
    then: {
        properties: { default: { type: 'number' } },
    },
    else: {
        properties: { default: { type: ['number', 'null'] } },
    },
} as const satisfies JSONSchema;
export type NumberProperty = FromSchema<
    typeof numberProperty,
    { keepDefaultedPropertiesOptional: true; parseIfThenElseKeywords: true; parseNotKeyword: true }
>;

export type InferNumberProperty<T extends { readonly type: 'number'; readonly nullable?: boolean }> =
    T['nullable'] extends true ? number | null : number;

export type NumberPropertyDependencies = [];

export default {
    schema: numberProperty,
} satisfies PropertyExport;
