import { FromSchema } from 'json-schema-to-ts';
import { SubPropertySchema } from './types.ts';

const arrayItemsFileupload = {
    $id: 'arrayItemsFileupload',
    title: 'Utils: Array items fileupload definition',
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

export type ArrayItemsFileupload = FromSchema<
    typeof arrayItemsFileupload,
    { keepDefaultedPropertiesOptional: true; parseIfThenElseKeywords: true; parseNotKeyword: true }
>;

export type InferArrayItemsFileupload<T extends object> = T extends { type: 'string' } ? string : never;

export type ArrayItemsFileuploadDependencies = [];

export default {
    schema: arrayItemsFileupload,
};
