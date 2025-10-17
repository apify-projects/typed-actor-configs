import { FromSchema, JSONSchema } from 'json-schema-to-ts';
import { PropertyExport } from '../types.ts';
import { SubPropertySchema } from './types.ts';

const subSchemaStringEnumProperty = {
    $id: 'subSchemaStringEnumProperty',
    title: 'Sub-schema: Enum property',
    type: 'object',
    additionalProperties: false,
    properties: {
        type: { enum: ['string'] },
        editor: { enum: ['select'] },
        title: { type: 'string' },
        description: { type: 'string' },
        nullable: { type: 'boolean' },
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
} as const satisfies SubPropertySchema;

export type SubSchemaStringEnumProperty = FromSchema<
    typeof subSchemaStringEnumProperty,
    { keepDefaultedPropertiesOptional: true; parseIfThenElseKeywords: true; parseNotKeyword: true }
>;

export type InferSubSchemaStringEnumProperty<
    T extends { readonly enum: readonly string[]; readonly nullable?: boolean }
> = T extends {
    enum: (infer E)[];
    nullable?: boolean;
}
    ? T['nullable'] extends true
        ? E | null
        : E
    : never;

export type SubSchemaStringEnumPropertyDependencies = [];

export default {
    schema: subSchemaStringEnumProperty,
} satisfies PropertyExport;
