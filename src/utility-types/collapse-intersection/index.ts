/**
 * Utility type to collapse intersections of objects
 *
 * Merges the properties of the intersection into a single object,
 * optional types get `| undefined` added to the property
 * @example
 * ```ts
 * type A = { a?: string, b?: string }
 * type B = { b: string, c: number }
 * type C = CollapseIntersection<A & B> // { a?: string | undefined, b: string, c: number }
 */
export type CollapseIntersection<T extends object> = { [K in keyof T]: T[K] };
