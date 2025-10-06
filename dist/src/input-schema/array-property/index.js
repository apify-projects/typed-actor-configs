import z from 'zod';
const arrayTypesSchema = z.object({
    type: z.enum(['array']),
    nullable: z.boolean().optional(),
    default: z.never().optional(),
});
const minimalStringArraySchema = z.object({
    editor: z.literal('stringList'),
    items: z
        .object({
        type: z.literal('string'),
    })
        .optional(),
});
export const minimalArraySchema = arrayTypesSchema.and(z.union([minimalStringArraySchema]));
const baseArrayPropertySchema = minimalArraySchema.and(z.object({
    title: z.string(),
    description: z.string(),
    editor: z.enum([
        'json',
        'requestListSources',
        'pseudoUrls',
        'globs',
        'keyValue',
        'stringList',
        'select',
        'schemaBased',
        'hidden',
    ]),
    // optional
    isSecret: z.boolean().optional(),
    prefill: z.array(z.any()).optional(),
    example: z.array(z.any()).optional(),
    minItems: z.number().optional(),
    maxItems: z.number().optional(),
    uniqueItems: z.boolean().optional(),
    sectionCaption: z.string().optional(),
    sectionDescription: z.string().optional(),
    placeholderKey: z.string().optional(),
    placeholderValue: z.string().optional(),
}));
const stringListSchema = z.object({
    editor: z.enum(['stringList']),
    items: z.object({
        type: z.enum(['string']),
        pattern: z.string().optional(),
        minLength: z.int().optional(),
        maxLength: z.int().optional(),
    }),
});
export const arrayPropertySchema = baseArrayPropertySchema.and(z.union([stringListSchema]));
//# sourceMappingURL=index.js.map