import { FromSchema, JSONSchema } from 'json-schema-to-ts';
import { PropertyExport } from './types.ts';

const integerProperty = {
    $id: 'integerProperty',
    title: 'Integer property',
    type: 'object',
    unevaluatedProperties: false,
    properties: {
        type: { enum: ['integer'] },
        title: { type: 'string' },
        description: { type: 'string' },
        prefill: { type: 'integer' },
        example: { type: 'integer' },
        nullable: { type: 'boolean' },
        minimum: { type: 'integer' },
        maximum: { type: 'integer' },
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
        properties: { default: { type: 'integer' } },
    },
    else: {
        properties: { default: { type: ['integer', 'null'] } },
    },
} as const satisfies JSONSchema;
export type IntegerProperty = FromSchema<
    typeof integerProperty,
    { keepDefaultedPropertiesOptional: true; parseIfThenElseKeywords: true; parseNotKeyword: true }
>;

export type InferIntegerProperty<T extends { readonly type: 'integer'; readonly nullable?: boolean }> =
    T['nullable'] extends true ? number | null : number;

export type IntegerPropertyDependencies = [];

export default {
    schema: integerProperty,
} satisfies PropertyExport;
