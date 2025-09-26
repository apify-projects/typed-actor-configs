import z from 'zod';

const baseStringPropertySchema = z.object({
    type: z.enum(['string']),
    title: z.string(),
    description: z.string(),
    nullable: z.boolean().optional(),
    editor: z.enum(['textfield', 'javascript', 'python', 'textarea', 'datepicker', 'hidden', 'fileupload']),
    isSecret: z.boolean().optional(),
});
const notSecretStringPropertySchema = z.object({
    isSecret: z.literal(false).optional(),
    type: z.enum(['string']),
    title: z.string(),
    description: z.string(),
    prefill: z.string().optional(),
    example: z.string().optional(),
    pattern: z.string().optional(),
    nullable: z.boolean().optional(),
    minLength: z.number().optional(),
    maxLength: z.number().optional(),
    sectionCaption: z.string().optional(),
    sectionDescription: z.string().optional(),
});
const secretStringPropertySchema = z.object({
    isSecret: z.literal(true),
});

export const stringPropertySchema = z.intersection(
    baseStringPropertySchema,
    z.union([notSecretStringPropertySchema, secretStringPropertySchema])
);

export type StringPropertyInput = string;
