import { test, expectTypeOf } from 'vitest';
import { defineInputConfiguration, inferInput } from './index.ts';

test('inferInput', () => {
    const configuration = defineInputConfiguration({
        title: 'Scrape data from a web page',
        type: 'object',
        schemaVersion: 1,
        properties: {
            target: {
                title: 'ID',
                type: 'string',
                description: 'ID code of the container, Bill of lading, or booking number to track.',
                editor: 'textfield',
            },
            nullableProp: {
                title: 'some nullable prop',
                type: 'string',
                description: 'some nullable prop',
                editor: 'textfield',
                nullable: true,
            },
            nullableProp2: {
                title: 'some nullable prop',
                type: 'string',
                description: 'some nullable prop',
                editor: 'textfield',
                nullable: true,
            },
        },
    });

    type actual = inferInput<typeof configuration>;
    type expected = {
        target: string;
        nullableProp?: string;
        nullableProp2?: string;
    };

    expectTypeOf<actual>().toEqualTypeOf<expected>();
});
