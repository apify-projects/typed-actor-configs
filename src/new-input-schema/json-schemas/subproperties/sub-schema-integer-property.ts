import { FromSchema } from 'json-schema-to-ts';
import { SubPropertySchema } from './types.ts';
import { PropertyExport } from '../types.ts';

const subSchemaIntegerProperty = {
    $id: 'subSchemaIntegerProperty',
    title: 'Sub-schema: Integer property',
    type: 'object',
    additionalProperties: false,
    properties: {
        type: { enum: ['integer'] },
        title: { type: 'string' },
        description: { type: 'string' },
        nullable: { type: 'boolean' },
        minimum: { type: 'integer' },
        maximum: { type: 'integer' },
        unit: { type: 'string' },
        editor: { enum: ['number', 'hidden'] },
    },
    required: ['type', 'title', 'description'],
} as const satisfies SubPropertySchema;

export type SubSchemaIntegerProperty = FromSchema<
    typeof subSchemaIntegerProperty,
    { keepDefaultedPropertiesOptional: true; parseIfThenElseKeywords: true; parseNotKeyword: true }
>;

export type InferSubSchemaIntegerProperty<T extends { type: 'integer'; nullable?: boolean }> =
    T['nullable'] extends true ? number | null : number;

export type SubSchemaIntegerPropertyDependencies = [];

export default {
    schema: subSchemaIntegerProperty,
} satisfies PropertyExport;
