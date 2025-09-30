import z from 'zod';

const baseIntegerSchema = z.object({
    // required
    type: z.enum(['integer']),
    title: z.string(),
    description: z.string(),
    // optional
    prefill: z.int().optional(),
    example: z.number().optional(),
    nullable: z.boolean().optional(),
    minimum: z.int().optional(),
    maximum: z.int().optional(),
    unit: z.string().optional(),
    editor: z.enum(['number', 'hidden']).optional(),
    sectionCaption: z.string().optional(),
    sectionDescription: z.string().optional(),
});

const nullableIntegerSchema = z.object({
    nullable: z.literal(true),
    default: z.number().nullable().optional(),
});

const nonNullableIntegerSchema = z.object({
    nullable: z.literal(false).optional(),
    default: z.number().optional(),
});

export const integerPropertySchema = baseIntegerSchema.and(z.union([nonNullableIntegerSchema, nullableIntegerSchema]));
export type IntegerPropertyInput = number;
