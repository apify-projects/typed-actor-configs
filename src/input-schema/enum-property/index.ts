import z from 'zod';

const baseEnumSchema = z.object({
    // required
    type: z.enum(['string']),
    title: z.string(),
    description: z.string(),
    enum: z.array(z.string()).min(1),
    // optional
    editor: z.enum(['select']).optional(),
    prefill: z.string().optional(),
    example: z.string().optional(),
    nullable: z.boolean().optional(),
    sectionCaption: z.string().optional(),
    sectionDescription: z.string().optional(),
    enumTitles: z.array(z.string()).optional(),
});

const nullableEnumSchema = z.object({
    nullable: z.literal(true),
    default: z.string().nullable().optional(),
});
const nonNullableEnumSchema = z.object({
    nullable: z.literal(false).optional(),
    default: z.string().optional(),
});

export const enumPropertySchema = baseEnumSchema.and(z.union([nonNullableEnumSchema, nullableEnumSchema]));
export type EnumPropertyInput = string;
