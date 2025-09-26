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
