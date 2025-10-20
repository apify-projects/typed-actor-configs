import type { FromSchema, JSONSchema } from 'json-schema-to-ts';
import type { Dataset } from './schema.ts';
type consistentRequired<T extends JSONSchema> = T extends {
    properties: Record<infer R, any>;
} ? T & {
    required?: R[];
} : never;
export declare function checkDatasetFields<PassthroughType extends Dataset['fields'], Fields extends JSONSchema, Properties extends string | never, Requireds extends Properties>(config: {
    fields: object;
}, input: PassthroughType & {
    fields: consistentRequired<Fields & {
        properties?: {
            [Key in Properties]: JSONSchema;
        };
    }> & {
        required?: Requireds[];
    };
}): PassthroughType;
export type InferDataset<T extends {
    fields?: JSONSchema;
}> = T extends {
    fields: infer Fields extends JSONSchema;
} ? FromSchema<Fields, {
    keepDefaultedPropertiesOptional: true;
}> : unknown;
export {};
//# sourceMappingURL=index.d.ts.map