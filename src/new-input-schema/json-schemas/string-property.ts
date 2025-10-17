import { FromSchema, JSONSchema } from 'json-schema-to-ts';
import { PropertyExport } from './types.ts';

const stringProperty = {
    $id: 'stringProperty',
    title: 'String property',
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
        isSecret: { type: 'boolean' },
    },
    required: ['type', 'title', 'description', 'editor'],
    if: {
        properties: {
            isSecret: {
                not: {
                    const: true,
                },
            },
        },
    },
    then: {
        properties: {
            type: { enum: ['string'] },
            title: { type: 'string' },
            description: { type: 'string' },
            prefill: { type: 'string' },
            example: { type: 'string' },
            pattern: { type: 'string' },
            nullable: { type: 'boolean' },
            minLength: { type: 'integer' },
            maxLength: { type: 'integer' },
            sectionCaption: { type: 'string' },
            sectionDescription: { type: 'string' },
            isSecret: { enum: [false] },
        },
        unevaluatedProperties: false,
        allOf: [
            {
                if: {
                    properties: {
                        editor: { const: 'datepicker' },
                    },
                },
                then: {
                    properties: {
                        editor: { enum: ['datepicker'] },
                        dateType: { enum: ['absolute', 'relative', 'absoluteOrRelative'] },
                    },
                },
                else: {
                    properties: {
                        editor: {
                            enum: ['javascript', 'python', 'textfield', 'textarea', 'hidden', 'fileupload'],
                        },
                    },
                },
            },
            {
                if: {
                    properties: { nullable: { const: false } },
                },
                then: {
                    properties: { default: { type: 'string' } },
                },
                else: {
                    properties: { default: { type: ['string', 'null'] } },
                },
            },
        ],
    },
    else: {
        additionalProperties: false,
        properties: {
            type: { enum: ['string'] },
            title: { type: 'string' },
            description: { type: 'string' },
            prefill: { type: 'string' },
            example: { type: 'string' },
            nullable: { type: 'boolean' },
            editor: { enum: ['textfield', 'textarea', 'hidden'] },
            isSecret: { enum: [true] },
            sectionCaption: { type: 'string' },
            sectionDescription: { type: 'string' },
        },
    },
} as const satisfies JSONSchema;

export type StringProperty = FromSchema<
    typeof stringProperty,
    { keepDefaultedPropertiesOptional: true; parseIfThenElseKeywords: true; parseNotKeyword: true }
>;

export type InferStringProperty<T extends { readonly type: 'string'; readonly nullable?: boolean }> =
    T['nullable'] extends true ? string | null : string;

export type StringPropertyDependencies = [];

export default {
    schema: stringProperty,
} satisfies PropertyExport;
