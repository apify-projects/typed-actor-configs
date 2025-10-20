import type { FromSchema, JSONSchema } from 'json-schema-to-ts';
import type { Dataset } from './schema.ts';
import { diffConfigurations } from '../versioning/config-diff/index.ts';
import { greenBG, redBG } from '../text-coloring/index.ts';

type consistentRequired<T extends JSONSchema> = T extends { properties: Record<infer R, any> }
    ? T & { required?: R[] }
    : never;

function defineDataset<
    PassthroughType extends Dataset,
    Fields extends JSONSchema,
    Properties extends string | never,
    Requireds extends Properties
>(
    path: `${string}/dataset.json` | `${string}/DATASET.json`,
    input: PassthroughType &
        Dataset & {
            fields: consistentRequired<Fields & { properties?: { [Key in Properties]: JSONSchema } }> & {
                required?: Requireds[];
            };
        }
): PassthroughType {
    console.log(path);
    return input;
}
export function checkDatasetFields<
    PassthroughType extends Dataset['fields'],
    Fields extends JSONSchema,
    Properties extends string | never,
    Requireds extends Properties
>(
    config: { fields: object },
    input: PassthroughType & {
        fields: consistentRequired<Fields & { properties?: { [Key in Properties]: JSONSchema } }> & {
            required?: Requireds[];
        };
    }
): PassthroughType {
    const diff = diffConfigurations(config.fields, input.fields);
    if (diff) {
        console.log(`\n${redBG('FAILED')}: Type-critical fields dont match, check changes`);
        process.exit(1);
    }
    console.log(`\n${greenBG('PASSED')}: No differences found on type-critical fields`);
    return input;
}

export type InferDataset<T extends { fields?: JSONSchema }> = T extends {
    fields: infer Fields extends JSONSchema;
}
    ? FromSchema<Fields, { keepDefaultedPropertiesOptional: true }>
    : unknown;
