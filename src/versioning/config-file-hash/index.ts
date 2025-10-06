import { hash } from 'crypto';
import z, { ZodObject } from 'zod';
import { green, red, redBG, yellowBG } from '../../text-coloring/index.ts';

export type Hashed<T extends {}> = T & { _hash: string };

function toHashedSchema<Schema extends ZodObject>(schema: Schema) {
    return z.object({ _hash: z.hash('sha1').optional() }).and(schema);
}

export function hashConfigurationFile<Schema extends ZodObject>(
    config: z.infer<Schema>,
    schema: Schema
): Hashed<z.infer<Schema>> {
    const parsedConfig = schema.parse(config);
    return { ...parsedConfig, _hash: hash('sha1', JSON.stringify(parsedConfig)) };
}

export function checkIntegrity<Schema extends ZodObject>(file: string, schema: Schema) {
    const jsonContents = JSON.parse(file);
    const parsedFile = toHashedSchema(schema).parse(jsonContents);
    if (!parsedFile._hash) {
        console.log(`${yellowBG('WARNING:')} No hash found, integrity passed.`);
        return 'Passed';
    }
    const { _hash, ...fileContents } = parsedFile;

    // @ts-expect-error _hash is not a property of the schema, so its type is the same as the schema output
    const hashedByContent = hashConfigurationFile(fileContents, schema);
    if (hashedByContent._hash === _hash) {
        console.log('Hashes match, integrity passed.');
        return 'Passed';
    }
    console.log(
        `${redBG('ALERT')}\nHashes do not match, integrity failed.\nExpected SHA1:\t${green(
            hashedByContent._hash
        )}\nFound SHA1:\t${red(_hash)}`
    );
    return 'Failed';
}
