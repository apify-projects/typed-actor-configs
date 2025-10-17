import { FromSchema } from 'json-schema-to-ts';
import { PropertyExport } from '../types.ts';
import { SubPropertySchema } from './types.ts';

const subSchemaBooleanProperty = {
    $id: 'subSchemaBooleanProperty',
    title: 'Sub-schema: Boolean property',
    type: 'object',
    additionalProperties: false,
    properties: {
        type: { enum: ['boolean'] },
        title: { type: 'string' },
        description: { type: 'string' },
        nullable: { type: 'boolean' },
        groupCaption: { type: 'string' },
        groupDescription: { type: 'string' },
        editor: { enum: ['checkbox', 'hidden'] },
    },
    required: ['type', 'title', 'description'],
} as const satisfies SubPropertySchema;

export type SubSchemaBooleanProperty = FromSchema<
    typeof subSchemaBooleanProperty,
    { keepDefaultedPropertiesOptional: true; parseIfThenElseKeywords: true; parseNotKeyword: true }
>;

export type InferSubSchemaBooleanProperty<T extends { type: 'boolean'; nullable?: boolean }> =
    T['nullable'] extends true ? boolean | null : boolean;

export type SubSchemaBooleanPropertyDependencies = [];

export default {
    schema: subSchemaBooleanProperty,
} satisfies PropertyExport;
