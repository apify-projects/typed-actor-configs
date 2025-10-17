import { FromSchema } from 'json-schema-to-ts';
import { SubPropertySchema } from './types.ts';

const arrayItemsStringList = {
    $id: 'arrayItemsStringList',
    title: 'Utils: Array items stringList definition',
    type: 'object',
    additionalProperties: false,
    properties: {
        type: { enum: ['string'] },
        pattern: { type: 'string' },
        minLength: { type: 'integer' },
        maxLength: { type: 'integer' },
    },
    required: ['type'],
} as const satisfies SubPropertySchema;

export type ArrayItemsStringList = FromSchema<
    typeof arrayItemsStringList,
    { keepDefaultedPropertiesOptional: true; parseIfThenElseKeywords: true; parseNotKeyword: true }
>;

export type InferArrayItemsStringList<T extends object> = T extends { type: 'string' } ? string : never;

export type ArrayItemsStringListDependencies = [];

export default {
    schema: arrayItemsStringList,
};
