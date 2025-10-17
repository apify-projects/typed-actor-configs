import { FromSchema, JSONSchema } from 'json-schema-to-ts';
import { PropertyExport } from './types.ts';

const booleanProperty = {
    $id: 'booleanProperty',
    title: 'Boolean property',
    type: 'object',
    unevaluatedProperties: false,
    properties: {
        type: { enum: ['boolean'] },
        title: { type: 'string' },
        description: { type: 'string' },
        prefill: { type: 'boolean' },
        example: { type: 'boolean' },
        nullable: { type: 'boolean' },
        groupCaption: { type: 'string' },
        groupDescription: { type: 'string' },
        editor: { enum: ['checkbox', 'hidden'] },
        sectionCaption: { type: 'string' },
        sectionDescription: { type: 'string' },
    },
    required: ['type', 'title', 'description'],
    if: {
        properties: { nullable: { const: false } },
    },
    then: {
        properties: { default: { type: 'boolean' } },
    },
    else: {
        properties: { default: { type: ['boolean', 'null'] } },
    },
} as const satisfies JSONSchema;
export type BooleanProperty = FromSchema<
    typeof booleanProperty,
    { keepDefaultedPropertiesOptional: true; parseIfThenElseKeywords: true; parseNotKeyword: true }
>;

export type InferBooleanProperty<T extends { readonly type: 'boolean'; readonly nullable?: boolean }> =
    T['nullable'] extends true ? boolean | null : boolean;

export type BooleanPropertyDependencies = [];

export default {
    schema: booleanProperty,
} satisfies PropertyExport;
