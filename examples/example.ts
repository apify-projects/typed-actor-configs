import { defineActorInput, InferInput } from '../index.ts';

export const input = defineActorInput('.actor/input_schema.json', {
    title: 'Scrape data from a web page',
    schemaVersion: 1,
    type: 'object',
    properties: {
        meme: {
            type: 'string',
            title: 'meeme',
            description: 'Some are good, yours are bad',
            editor: 'textfield',
        },
        nullableProp: {
            type: 'string',
            title: 'some nullable prop',
            description: 'some nullable prop',
            nullable: true,
            editor: 'datepicker',
            default: '2023-02-09T01:25:37',
            dateType: 'absolute',
        },
        booleanProp: {
            type: 'boolean',
            title: 'some boolean prop',
            description: 'some boolean prop',
            nullable: true,
            editor: 'checkbox',
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
            type: 'array',
            title: 'some array prop',
            description: 'some array prop',
            editor: 'stringList',
            items: {
                type: 'string',
            },
        },
    },
    required: ['booleanProp', 'numberProp', 'enumProp'],
} as const);

export type Input = InferInput<typeof input>;
