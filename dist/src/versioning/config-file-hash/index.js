import { hash } from 'crypto';
import z from 'zod';
import { green, red, redBG, yellowBG } from "../../text-coloring/index.js";
function toHashedSchema(schema) {
    return z.object({ _hash: z.hash('sha1').optional() }).and(schema);
}
export function hashConfigurationFile(config, schema) {
    const parsedConfig = schema.parse(config);
    return { ...parsedConfig, _hash: hash('sha1', JSON.stringify(parsedConfig)) };
}
export function checkIntegrity(file, schema, skipHashCheck = false) {
    const jsonContents = JSON.parse(file);
    const parsedFile = toHashedSchema(schema).parse(jsonContents);
    if (!parsedFile._hash || skipHashCheck) {
        if (!skipHashCheck) {
            console.log(`${yellowBG('WARNING:')} No hash found, integrity passed.`);
        }
        return 'Passed';
    }
    const { _hash, ...fileContents } = parsedFile;
    // @ts-expect-error _hash is not a property of the schema, so its type is the same as the schema output
    const hashedByContent = hashConfigurationFile(fileContents, schema);
    if (hashedByContent._hash === _hash) {
        console.log('Hashes match, integrity passed.');
        return 'Passed';
    }
    console.log(`${redBG('ALERT')}\nHashes do not match, integrity failed.\nExpected SHA1:\t${green(hashedByContent._hash)}\nFound SHA1:\t${red(_hash)}`);
    return 'Failed';
}
//# sourceMappingURL=index.js.map