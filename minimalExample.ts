import { defineMinimalInputConfiguration, type inferInput } from './index.ts';

const minimalInput = defineMinimalInputConfiguration({
    properties: {
        meme: {
            type: 'string',
        },
        nullableProp: {
            type: 'string',
            nullable: true,
            default: '2023-02-09T01:25:37',
        },
        booleanProp: {
            type: 'boolean',
            nullable: true,
            default: null,
        },
        numberProp: {
            type: 'integer',
        },
        enumProp: {
            type: 'string',
            enum: ['a', 'b', 'c', 'd'] as const,
            nullable: true,
        },
        arrayProp: {
            type: 'array',
            editor: 'stringList',
            items: {
                type: 'string',
            },
        },
    },
    required: ['booleanProp', 'numberProp', 'enumProp'],
});

export type MinimalInput = inferInput<typeof minimalInput>;
