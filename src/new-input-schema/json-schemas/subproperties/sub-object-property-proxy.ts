import { FromSchema } from 'json-schema-to-ts';
import { PropertyExport } from '../types.ts';
import { SubPropertySchema } from './types.ts';

const subObjectPropertiesProxy = {
    $id: 'subObjectPropertiesProxy',
    title: 'Utils: Sub-object properties proxy definition',
    type: 'object',
    additionalProperties: false,
    properties: {
        useApifyProxy: {
            type: 'object',
            additionalProperties: false,
            properties: {
                type: { enum: ['boolean'] },
                title: { type: 'string' },
                description: { type: 'string' },
            },
            required: ['type'],
        },
        apifyProxyGroups: {
            type: 'object',
            additionalProperties: false,
            properties: {
                type: { enum: ['array'] },
                title: { type: 'string' },
                description: { type: 'string' },
                items: {
                    type: ['object'],
                    properties: {
                        type: { enum: ['string'] },
                    },
                    additionalProperties: false,
                    required: ['type'],
                },
            },
            required: ['type'],
        },
        proxyUrls: {
            type: 'object',
            additionalProperties: false,
            properties: {
                type: { enum: ['array'] },
                title: { type: 'string' },
                description: { type: 'string' },
                items: {
                    type: ['object'],
                    properties: {
                        type: { enum: ['string'] },
                    },
                    additionalProperties: false,
                    required: ['type'],
                },
            },
            required: ['type'],
        },
        apifyProxyCountry: {
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
} as const satisfies SubPropertySchema;

export type SubObjectPropertyProxy = FromSchema<
    typeof subObjectPropertiesProxy,
    { keepDefaultedPropertiesOptional: true; parseIfThenElseKeywords: true; parseNotKeyword: true }
>;

export type InferSubObjectPropertyProxy<T extends SubObjectPropertyProxy> = {
    apifyProxyCountry: T['apifyProxyCountry'] extends object ? string : never;
    useApifyProxy: T['useApifyProxy'] extends object ? boolean : never;
    apifyProxyGroups: T['apifyProxyGroups'] extends object ? string[] : never;
    proxyUrls: T['proxyUrls'] extends object ? string[] : never;
};

export type SubObjectPropertyProxyDependencies = [];

export default {
    schema: subObjectPropertiesProxy,
} satisfies PropertyExport;
