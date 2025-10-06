import z from 'zod';
import { minimalStringSchema, stringPropertySchema } from "./string-property/index.js";
import { booleanPropertySchema, minimalBooleanSchema } from "./boolean-property/index.js";
import { integerPropertySchema, minimalIntegerSchema } from "./integer-property/index.js";
import { enumPropertySchema, minimalEnumSchema } from "./enum-property/index.js";
import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs';
import { checkIntegrity, hashConfigurationFile } from "../versioning/config-file-hash/index.js";
import { diffConfigurations } from "../versioning/config-diff/index.js";
import { arrayPropertySchema, minimalArraySchema } from "./array-property/index.js";
import { execArgs, initializeExecArgs } from "./exec-args.js";
import { greenBG, redBG, yellowBG } from "../text-coloring/index.js";
const propertyTypesSchemas = [
    stringPropertySchema,
    booleanPropertySchema,
    integerPropertySchema,
    enumPropertySchema,
    arrayPropertySchema,
];
const propertyTypes = z.union(propertyTypesSchemas);
const inputSchema = z.object({
    $schema: z.literal('https://apify-projects.github.io/actor-json-schemas/input.schema.json?v=0.1').optional(),
    title: z.string(),
    schemaVersion: z.literal(1),
    type: z.literal('object'),
    properties: z.record(z.string(), z.union(propertyTypesSchemas)),
    required: z.array(z.string()).optional(),
});
function createPathToFile(path) {
    const splitPath = path.split('/');
    for (let i = 0; i < splitPath.length - 1; i++) {
        const folder = splitPath.slice(0, i + 1).join('/');
        if (!existsSync(folder)) {
            mkdirSync(folder, { recursive: true });
        }
    }
}
function writeSchemaFile(path, content) {
    const { _hash, ...rest } = content;
    writeFileSync(path, JSON.stringify(rest, null, 4));
}
/**
 * @param input The input schema to be emmited
 * @returns The same input schema, to be used for input type inference
 */
export function defineInputConfiguration(path, 
// `consistentRequired` forces the required fields to be a subset of the property keys
// Allowing for intellisense to recommend the required fields based on the properties
input
// | { required?: Properties[] }
// `InputConfiguration` is not specific enough, so we need to add the required fields explicitly
// using the `consistentRequired` type would end up with a union of all property keys (which breaks the inference)
) {
    initializeExecArgs();
    const configExists = existsSync(path);
    const hashedInput = hashConfigurationFile(input, inputSchema);
    if (!configExists) {
        console.log('No input schema found, will write to .actor/input_schema.json');
        if (execArgs.noDiff()) {
            process.exit(1);
        }
        createPathToFile(path);
        writeSchemaFile(path, hashedInput);
        return input;
    }
    const previousConfig = readFileSync(path, 'utf-8');
    const integrity = checkIntegrity(previousConfig, inputSchema);
    const parsedPreviousConfig = inputSchema.safeParse(JSON.parse(previousConfig));
    if (!parsedPreviousConfig.success) {
        console.log('Previous input schema is invalid, overwriting');
        if (execArgs.noDiff()) {
            process.exit(1);
        }
        writeSchemaFile(path, hashedInput);
        return input;
    }
    const diff = diffConfigurations(parsedPreviousConfig.data, input);
    if (diff && execArgs.noDiff()) {
        console.log('Schema differences found, but --no-diff was set, exiting');
        process.exit(1);
    }
    if (integrity === 'Passed') {
        if (diff) {
            console.log(`Writing new input schema to ${path}`);
            if (execArgs.dryRun()) {
                console.log('Dry run, not writing file');
            }
            else {
                console.log('Updating input schema');
                writeSchemaFile(path, hashedInput);
            }
        }
        else {
            console.log('No changes found.');
        }
    }
    else {
        console.log('Integrity check failed, schema was modified manually');
        if (execArgs.overwrite()) {
            console.log('--overwrite was set, overwriting file');
            writeSchemaFile(path, hashedInput);
        }
        else {
            console.warn(`${yellowBG('WARNING:')} Input schema changed manually, check changes`);
            process.exit(1);
        }
    }
    return input;
}
const allMinimalSchemas = [
    minimalEnumSchema,
    minimalStringSchema,
    minimalArraySchema,
    minimalBooleanSchema,
    minimalIntegerSchema,
];
const minimalPropertyTypesSchema = z.union(allMinimalSchemas);
const minimalInputSchema = z.object({
    properties: z.record(z.string(), minimalPropertyTypesSchema),
    required: z.array(z.string()).optional(),
});
export function defineMinimalInputConfiguration(path, input) {
    const configExists = existsSync(path);
    if (!configExists) {
        console.log('No input schema found, nothing to check integrity against');
        process.exit(1);
    }
    const previousConfig = readFileSync(path, 'utf-8');
    checkIntegrity(previousConfig, minimalInputSchema);
    const parsedPreviousConfig = minimalInputSchema.safeParse(JSON.parse(previousConfig));
    if (!parsedPreviousConfig.success) {
        console.log('Previous input schema is invalid, cannot check integrity');
        process.exit(1);
    }
    const hasDiff = diffConfigurations(parsedPreviousConfig.data, input);
    if (hasDiff) {
        console.log(`\n${redBG('FAILED')}: Type-critical fields dont match, check changes`);
        process.exit(1);
    }
    console.log(`\n${greenBG('PASSED')}: No differences found on type-critical fields`);
    return input;
}
//# sourceMappingURL=index.js.map