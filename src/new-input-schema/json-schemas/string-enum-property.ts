import { FromSchema, JSONSchema } from 'json-schema-to-ts';
import type { PropertyExport } from './types.ts';

const stringEnumProperty = {
    $id: 'stringEnumProperty',
    title: 'Enum property',
    type: 'object',
    unevaluatedProperties: false,
    properties: {
        type: { enum: ['string'] },
        editor: { enum: ['select'] },
        title: { type: 'string' },
        description: { type: 'string' },
        prefill: { type: 'string' },
        example: { type: 'string' },
        nullable: { type: 'boolean' },
        sectionCaption: { type: 'string' },
        sectionDescription: { type: 'string' },
        enum: {
            type: 'array',
            items: { type: 'string' },
            minItems: 1,
            uniqueItems: true,
        },
        enumTitles: {
            type: 'array',
            items: { type: 'string' },
            minItems: 1,
        },
    },
    required: ['type', 'title', 'description', 'enum'],
    if: {
        properties: { nullable: { const: false } },
    },
    then: {
        properties: { default: { type: 'string' } },
    },
    else: {
        properties: { default: { type: ['string', 'null'] } },
    },
} as const satisfies JSONSchema;

export type StringEnumProperty = FromSchema<
    typeof stringEnumProperty,
    { keepDefaultedPropertiesOptional: true; parseIfThenElseKeywords: true; parseNotKeyword: true }
>;

export type InferEnumProperty<T extends { readonly enum: readonly string[]; readonly nullable?: boolean }> = T extends {
    enum: (infer E)[];
    nullable?: boolean;
}
    ? T['nullable'] extends true
        ? E | null
        : E
    : never;

export type StringEnumDependencies = [];

export default {
    schema: stringEnumProperty,
} satisfies PropertyExport;
