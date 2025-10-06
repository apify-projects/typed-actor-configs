import z from 'zod';

const enumTypesSchema = z.object({
    type: z.enum(['string']),
    enum: z.array(z.string()),
});
type meme = z.infer<typeof minimalEnumSchema>;
const lala = {
    type: 'string',
    enum: ['a', 'b', 'c'] as const,
} satisfies meme;
const nullableEnumSchema = z.object({
    nullable: z.literal(true),
    default: z.string().nullable().optional(),
});
const nonNullableEnumSchema = z.object({
    nullable: z.literal(false).optional(),
    default: z.string().optional(),
});

export const minimalEnumSchema = enumTypesSchema.and(z.union([nonNullableEnumSchema, nullableEnumSchema]));

export const enumPropertySchema = minimalEnumSchema.and(
    z.object({
        // required
        title: z.string(),
        description: z.string(),
        // optional
        editor: z.enum(['select']).optional(),
        prefill: z.string().optional(),
        example: z.string().optional(),
        sectionCaption: z.string().optional(),
        sectionDescription: z.string().optional(),
        enumTitles: z.array(z.string()).optional(),
    })
);

export type EnumPropertyInput = string;
