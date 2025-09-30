import { expectTypeOf, test } from 'vitest';
import { CollapseIntersection } from './index.ts';

test('CollapseIntersection', () => {
    type A = { a?: string; b?: string };
    type B = { b: string; c: number };
    type C = CollapseIntersection<A & B>;
    expectTypeOf<C>().toEqualTypeOf<{ a?: string; b: string; c: number }>();

    type D = CollapseIntersection<{ a: string; b?: number }>;
    expectTypeOf<D>().toEqualTypeOf<{ a: string; b?: number }>();
});
