import { FromSchema } from 'json-schema-to-ts';
import { SubPropertySchema } from './types.ts';
import { PropertyExport } from '../types.ts';

const subSchemaNumberProperty = {
    $id: 'subSchemaNumberProperty',
    title: 'Sub-schema: Number property',
    type: 'object',
    additionalProperties: false,
    properties: {
        type: { enum: ['number'] },
        title: { type: 'string' },
        description: { type: 'string' },
        nullable: { type: 'boolean' },
        minimum: { type: 'number' },
        maximum: { type: 'number' },
        unit: { type: 'string' },
        editor: { enum: ['number', 'hidden'] },
    },
    required: ['type', 'title', 'description'],
} as const satisfies SubPropertySchema;

export type SubSchemaNumberProperty = FromSchema<
    typeof subSchemaNumberProperty,
    { keepDefaultedPropertiesOptional: true; parseIfThenElseKeywords: true; parseNotKeyword: true }
>;

export type InferSubSchemaNumberProperty<T extends { type: 'number'; nullable?: boolean }> = T['nullable'] extends true
    ? number | null
    : number;

export type SubSchemaNumberPropertyDependencies = [];

export default {
    schema: subSchemaNumberProperty,
} satisfies PropertyExport;
