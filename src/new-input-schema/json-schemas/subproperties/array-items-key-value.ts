import { FromSchema } from 'json-schema-to-ts';
import { SubPropertySchema } from './types.ts';

const arrayItemsKeyValue = {
    $id: 'arrayItemsKeyValue',
    title: 'Utils: Array items keyValue definition',
    type: 'object',
    additionalProperties: false,
    properties: {
        type: { enum: ['object'] },
        properties: {
            type: 'object',
            properties: {
                key: {
                    type: 'object',
                    additionalProperties: false,
                    properties: {
                        type: { enum: ['string'] },
                        title: { type: 'string' },
                        description: { type: 'string' },
                        pattern: { type: 'string' },
                        minLength: { type: 'integer' },
                        maxLength: { type: 'integer' },
                    },
                    required: ['type'],
                },
                value: {
                    type: 'object',
                    additionalProperties: false,
                    properties: {
                        type: { enum: ['string'] },
                        title: { type: 'string' },
                        description: { type: 'string' },
                        pattern: { type: 'string' },
                        minLength: { type: 'integer' },
                        maxLength: { type: 'integer' },
                    },
                    required: ['type'],
                },
            },
            required: ['key', 'value'],
            additionalProperties: false,
        },
        required: {
            type: 'array',
            minItems: 0,
            items: { type: 'string' },
            uniqueItems: true,
        },
        additionalProperties: { type: 'boolean' },
    },
    required: ['type', 'properties'],
} as const satisfies SubPropertySchema;

export type ArrayItemsKeyValue = FromSchema<
    typeof arrayItemsKeyValue,
    { keepDefaultedPropertiesOptional: true; parseIfThenElseKeywords: true; parseNotKeyword: true }
>;

export type InferArrayItemsKeyValue<T extends { type: 'object'; properties: object } | undefined> = T extends {
    type: 'object';
}
    ? Record<string, string>
    : Record<string, string>;

export type ArrayItemsKeyValueDependencies = [];

export default {
    schema: arrayItemsKeyValue,
};
