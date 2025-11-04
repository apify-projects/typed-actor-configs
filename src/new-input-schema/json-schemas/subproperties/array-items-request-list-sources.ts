import { FromSchema } from 'json-schema-to-ts';
import { SubPropertySchema } from './types.ts';
import { RequiredKeys, Resolve } from '../types.ts';

const arrayItemsRequestListSources = {
    $id: 'arrayItemsRequestListSources',
    title: 'Utils: Array items requestListSources definition',
    type: 'object',
    additionalProperties: false,
    properties: {
        type: { enum: ['object'] },
        properties: {
            type: 'object',
            additionalProperties: false,
            properties: {
                url: {
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
                method: {
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
                payload: {
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
                userData: {
                    type: 'object',
                    additionalProperties: false,
                    properties: {
                        type: { enum: ['object'] },
                        title: { type: 'string' },
                        description: { type: 'string' },
                        properties: { type: 'object' },
                    },
                    required: ['type'],
                },
                headers: {
                    type: 'object',
                    additionalProperties: false,
                    properties: {
                        type: { enum: ['object'] },
                        title: { type: 'string' },
                        description: { type: 'string' },
                        properties: { type: 'object' },
                    },
                    required: ['type'],
                },
            },
        },
        required: {
            type: 'array',
            minItems: 0,
            items: { type: 'string' },
            uniqueItems: true,
        },
        additionalProperties: { type: 'boolean' },
    },
    required: ['type'],
} as const satisfies SubPropertySchema;

export type ArrayItemsRequestListSources = FromSchema<
    typeof arrayItemsRequestListSources,
    { keepDefaultedPropertiesOptional: true; parseIfThenElseKeywords: true; parseNotKeyword: true }
>;
type Method = 'get' | 'post' | 'put' | 'patch' | 'delete' | 'head' | 'options' | 'trace';

type InferArrayItemsRequestListSourcesProps<
    T extends Exclude<ArrayItemsRequestListSources['properties'], undefined>,
    RequiredKeys extends string | never,
> = Resolve<
    {
        [Key in keyof T & RequiredKeys]: T[Key] extends { type: 'string' }
            ? Key extends 'method'
                ? Method
                : string
            : object;
    } & {
        [Key in Exclude<keyof T, RequiredKeys>]?: T[Key] extends { type: 'string' }
            ? Key extends 'method'
                ? Method
                : string
            : object;
    }
>;

export type InferArrayItemsRequestListSources<T extends ArrayItemsRequestListSources | undefined> = T extends {
    properties: object;
}
    ? InferArrayItemsRequestListSourcesProps<T['properties'], RequiredKeys<T>>
    : {
          url?: string;
          method?: Method;
          payload?: string;
          userData?: object;
          headers?: object;
      };

export type ArrayItemsRequestListSourcesDependencies = [];

export default {
    schema: arrayItemsRequestListSources,
};
