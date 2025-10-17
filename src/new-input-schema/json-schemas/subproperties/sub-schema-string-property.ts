import { FromSchema } from 'json-schema-to-ts';
import { SubPropertySchema } from './types.ts';

const subSchemaStringProperty = {
    $id: 'subSchemaStringProperty',
    title: 'Sub-schema: String property',
    type: 'object',
    additionalProperties: true,
    properties: {
        type: { enum: ['string'] },
        title: { type: 'string' },
        description: { type: 'string' },
        nullable: { type: 'boolean' },
        editor: {
            enum: ['javascript', 'python', 'textfield', 'textarea', 'datepicker', 'hidden', 'fileupload'],
        },
    },
    required: ['type', 'title', 'description'],
    if: {
        properties: {
            editor: { const: 'datepicker' },
        },
    },
    then: {
        additionalProperties: false,
        properties: {
            type: { enum: ['string'] },
            title: { type: 'string' },
            description: { type: 'string' },
            pattern: { type: 'string' },
            nullable: { type: 'boolean' },
            minLength: { type: 'integer' },
            maxLength: { type: 'integer' },
            editor: { enum: ['datepicker'] },
            dateType: { enum: ['absolute', 'relative', 'absoluteOrRelative'] },
        },
    },
    else: {
        additionalProperties: false,
        properties: {
            type: { enum: ['string'] },
            title: { type: 'string' },
            description: { type: 'string' },
            pattern: { type: 'string' },
            nullable: { type: 'boolean' },
            minLength: { type: 'integer' },
            maxLength: { type: 'integer' },
            editor: { enum: ['javascript', 'python', 'textfield', 'textarea', 'hidden', 'fileupload'] },
        },
    },
} as const satisfies SubPropertySchema;

export type SubSchemaStringProperty = FromSchema<
    typeof subSchemaStringProperty,
    { keepDefaultedPropertiesOptional: true; parseIfThenElseKeywords: true; parseNotKeyword: true }
>;

export type InferSubSchemaStringProperty<T extends { type: 'string'; nullable?: boolean }> = T['nullable'] extends true
    ? string | null
    : string;

export type SubSchemaStringPropertyDependencies = [];

export default {
    schema: subSchemaStringProperty,
};
