import { defineInputConfiguration, type inferInput } from './src/input-schema/index.ts';

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
            nullable: false,
            default: '2023-02-09T01:25:37',
        },
    },
});

export type Input = inferInput<typeof input>;
