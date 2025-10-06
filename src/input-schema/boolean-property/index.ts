import z from 'zod';

const booleanTypesSchema = z.object({
    type: z.enum(['boolean']),
});
const nullableBooleanSchema = z.object({
    nullable: z.literal(true),
    default: z.boolean().nullable().optional(),
});
const nonNullableBooleanSchema = z.object({
    nullable: z.literal(false).optional(),
    default: z.boolean().optional(),
});
export const minimalBooleanSchema = booleanTypesSchema.and(z.union([nonNullableBooleanSchema, nullableBooleanSchema]));

export const booleanPropertySchema = minimalBooleanSchema.and(
    z.object({
        // required
        title: z.string(),
        description: z.string(),
        // optional
        prefill: z.boolean().optional(),
        example: z.boolean().optional(),
        groupCaption: z.string().optional(),
        groupDescription: z.string().optional(),
        editor: z.enum(['checkbox', 'hidden']).optional(),
        sectionCaption: z.string().optional(),
        sectionDescription: z.string().optional(),
    })
);

export type BooleanPropertyInput = boolean;
