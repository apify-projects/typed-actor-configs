import z from 'zod';

const integerTypesSchema = z.object({
    type: z.enum(['integer']),
});
const nullableIntegerSchema = z.object({
    nullable: z.literal(true),
    default: z.number().nullable().optional(),
});
const nonNullableIntegerSchema = z.object({
    nullable: z.literal(false).optional(),
    default: z.number().optional(),
});
export const minimalIntegerSchema = integerTypesSchema.and(z.union([nonNullableIntegerSchema, nullableIntegerSchema]));

export const integerPropertySchema = minimalIntegerSchema.and(
    z.object({
        // required
        title: z.string(),
        description: z.string(),
        // optional
        prefill: z.int().optional(),
        example: z.number().optional(),
        minimum: z.int().optional(),
        maximum: z.int().optional(),
        unit: z.string().optional(),
        editor: z.enum(['number', 'hidden']).optional(),
        sectionCaption: z.string().optional(),
        sectionDescription: z.string().optional(),
    })
);

export type IntegerPropertyInput = number;
