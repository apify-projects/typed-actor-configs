import { JSONSchema } from 'json-schema-to-ts';

export type PropertyExport = {
    schema: Readonly<JSONSchema>;
};

export type RequiredKeys<T extends { required?: string[] }> = T extends { required: (infer R extends string)[] }
    ? R
    : never;
/**
 * Utility type to get the keys of a configuration that have a default value
 *
 * @example
 * ```ts
 * type Input = {
 *   properties: {
 *     a: { default: string },
 *     b: { default: string },
 *     c: {  },
 *   }
 * }
 * // "a" | "c"
 * type DefaultedFields = GetDefaultedFields<Input>
 * ```
 */
export type DefaultedFields<Input extends { properties: Record<string, { default?: unknown } | {}> }> = {
    [Key in keyof Input['properties']]: 'default' extends keyof Input['properties'][Key]
        ? Input['properties'][Key]['default'] extends undefined
            ? never // key exists but set to undefined
            : Key // key either has a value or is null
        : never; // key is not present
}[keyof Input['properties']];

export type Resolve<T> = T extends Function ? T : { [K in keyof T]: T[K] };
export type Writeable<T> = { -readonly [P in keyof T]: T[P] };
export type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> };
export type DeepReadonly<T> = { readonly [P in keyof T]: DeepReadonly<T[P]> };
