import { FromSchema } from 'json-schema-to-ts';
import { SubPropertySchema } from './types.ts';
import { RequiredKeys, Resolve } from '../types.ts';

const arrayItemsPseudoUrls = {
    $id: 'arrayItemsPseudoUrls',
    title: 'Utils: Array items pseudoUrls definition',
    type: 'object',
    additionalProperties: false,
    properties: {
        type: { enum: ['object'] },
        properties: {
            type: 'object',
            additionalProperties: false,
            properties: {
                purl: {
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

type InferPseudoUrlFields<
    T extends Exclude<ArrayItemsPseudoUrls['properties'], undefined>,
    RequiredKeys extends string | never
> = Resolve<
    {
        [Key in keyof T & RequiredKeys]: T[Key] extends { type: 'string' } ? string : object;
    } & {
        [Key in Exclude<keyof T, RequiredKeys>]?: T[Key] extends { type: 'string' } ? string : object;
    }
>;

export type ArrayItemsPseudoUrls = FromSchema<
    typeof arrayItemsPseudoUrls,
    { keepDefaultedPropertiesOptional: true; parseIfThenElseKeywords: true; parseNotKeyword: true }
>;

export type InferArrayItemsPseudoUrls<T extends ArrayItemsPseudoUrls | undefined> = T extends { properties: object }
    ? InferPseudoUrlFields<T['properties'], RequiredKeys<T>>
    : {
          purl?: string;
          method?: string;
          payload?: string;
          userData?: object;
          headers?: object;
      };

export type ArrayItemsPseudoUrlsDependencies = [];

export default {
    schema: arrayItemsPseudoUrls,
};
