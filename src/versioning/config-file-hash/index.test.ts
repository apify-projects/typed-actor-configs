import { describe, expect, it, test } from 'vitest';
import z from 'zod';
import { checkIntegrity, hashConfigurationFile } from './index.ts';

const schema = z.object({
    meme: z.string(),
    field2: z.string(),
});

describe('checkIntegrity', () => {
    it("Should pass files that don't have a hash", () => {
        const fileContents = {
            meme: '🤡',
            field2: '2',
        };
        const actual = checkIntegrity(JSON.stringify(fileContents), schema);
        expect(actual).toBe('Passed');
    });
    it('Should fail files that have a non-matching hash', () => {
        const fileContents = {
            meme: '🤡',
            field2: '2',
            _hash: 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3',
        };
        const actual = checkIntegrity(JSON.stringify(fileContents), schema);
        expect(actual).toBe('Failed');
    });
    it('Should pass files that have a matching hash', () => {
        const fileContents = {
            meme: '🤡',
            field2: '2',
            _hash: '4106eea85f9140105b3cf6044dd0e9207aba6c4c',
        };
        const actual = checkIntegrity(JSON.stringify(fileContents), schema);
        expect(actual).toBe('Passed');
    });
});

test('files should have same hash when JSON stringified then parsed back', () => {
    const fileContents = {
        field2: '2',
        meme: '🤡',
    };
    const hashedFile = hashConfigurationFile(fileContents, schema);
    const actual = checkIntegrity(JSON.stringify(hashedFile), schema);
    expect(actual).toBe('Passed');
});
