/**
 * Utility type to get the keys of a configuration that are nullable
 *
 * @example
 * ```ts
 * type Input = {
 *   properties: {
 *     a: { nullable: true },
 *     b: { nullable: false },
 *     c: { nullable: true },
 *   }
 * }
 * // "a" | "c"
 * type NullableFields = GetNullableFields<Input>
 * ```
 */
export type NullableFields<Input extends { properties: Record<string, { nullable?: boolean }> }> = {
    [Key in keyof Input['properties']]: Input['properties'][Key]['nullable'] extends true ? Key : never;
}[keyof Input['properties']];

/**
 * Utility type to get the keys of a configuration that are not nullable
 *
 * @example
 * ```ts
 * type Input = {
 *   properties: {
 *     a: { nullable: true },
 *     b: { nullable: false },
 *     c: { nullable: true },
 *   }
 * }
 * // "b"
 * type RequiredFields = GetRequiredFields<Input>
 * ```
 */
export type RequiredFields<Input extends { properties: Record<string, { nullable?: boolean }> }> = {
    [Key in keyof Input['properties']]: Input['properties'][Key]['nullable'] extends true ? never : Key;
}[keyof Input['properties']];

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
