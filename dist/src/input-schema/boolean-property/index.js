import z from 'zod';
const baseBooleanSchema = z.object({
    // required
    type: z.enum(['boolean']),
    title: z.string(),
    description: z.string(),
    // optional
    prefill: z.boolean().optional(),
    example: z.boolean().optional(),
    nullable: z.boolean().optional(),
    groupCaption: z.string().optional(),
    groupDescription: z.string().optional(),
    editor: z.enum(['checkbox', 'hidden']).optional(),
    sectionCaption: z.string().optional(),
    sectionDescription: z.string().optional(),
});
const nullableBooleanSchema = z.object({
    nullable: z.literal(true),
    // no way to get rid of the | undefined https://github.com/colinhacks/zod/issues/635
    default: z.boolean().nullable().optional(),
});
const nonNullableBooleanSchema = z.object({
    nullable: z.literal(false).optional(),
    default: z.boolean().optional(),
});
export const booleanPropertySchema = baseBooleanSchema.and(z.union([nonNullableBooleanSchema, nullableBooleanSchema]));
//# sourceMappingURL=index.js.map