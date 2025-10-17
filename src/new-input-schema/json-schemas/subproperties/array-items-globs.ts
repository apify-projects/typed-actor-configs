import { FromSchema } from 'json-schema-to-ts';
import { SubPropertySchema } from './types.ts';
import { RequiredKeys, Resolve } from '../types.ts';

const arrayItemsGlobs = {
    $id: 'arrayItemsGlobs',
    title: 'Utils: Array items globs definition',
    type: 'object',
    additionalProperties: false,
    properties: {
        type: { enum: ['object'] },
        properties: {
            type: 'object',
            additionalProperties: false,
            properties: {
                glob: {
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

export type ArrayItemsGlobs = FromSchema<
    typeof arrayItemsGlobs,
    { keepDefaultedPropertiesOptional: true; parseIfThenElseKeywords: true; parseNotKeyword: true }
>;

type InferGlobFields<
    T extends Exclude<ArrayItemsGlobs['properties'], undefined>,
    RequiredKeys extends string | never
> = Resolve<
    {
        [Key in keyof T & RequiredKeys]: T[Key] extends { type: 'string' } ? string : object;
    } & {
        [Key in Exclude<keyof T, RequiredKeys>]?: T[Key] extends { type: 'string' } ? string : object;
    }
>;

export type InferArrayItemsGlobs<T extends ArrayItemsGlobs | undefined> = T extends { properties: object }
    ? InferGlobFields<T['properties'], RequiredKeys<T>>
    : {
          glob?: string;
          method?: string;
          payload?: string;
          userData?: object;
          headers?: object;
      };

export type ArrayItemsGlobsDependencies = [];

export default {
    schema: arrayItemsGlobs,
};
