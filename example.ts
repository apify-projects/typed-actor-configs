import { defineInputConfiguration, type inferInput } from './index.ts';

export const input = defineInputConfiguration({
    title: 'Scrape data from a web page',
    type: 'object',
    schemaVersion: 1,
    properties: {
        meme: {
            title: 'meeme',
            type: 'string',
            description: 'Some are good, yours are bad',
            editor: 'textfield',
        },
        nullableProp: {
            title: 'some nullable prop',
            type: 'string',
            description: 'some nullable prop',
            editor: 'datepicker',
            dateType: 'absolute',
            nullable: true,
            default: '2023-02-09T01:25:37',
        },
        booleanProp: {
            title: 'some boolean prop',
            type: 'boolean',
            description: 'some boolean prop',
            editor: 'checkbox',
            nullable: true,
            default: null,
        },
        numberProp: {
            type: 'integer',
            title: 'some number prop',
            description: 'some number prop',
            editor: 'number',
        },
        enumProp: {
            type: 'string',
            title: 'some enum prop',
            description: 'some enum prop',
            enum: ['a', 'b', 'c'] as const,
            nullable: true,
        },
        arrayProp: {
            title: 'meme',
            description: 'meeme',
            type: 'array',
            editor: 'stringList',
            items: {
                type: 'string',
            },
        },
    },
    required: ['booleanProp', 'numberProp', 'enumProp', 'arrayProp'],
});

export type Input = inferInput<typeof input>;
