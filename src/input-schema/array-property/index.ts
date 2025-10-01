import z, { array, maxLength, minLength } from 'zod';

const baseArrayPropertySchema = z.object({
    type: z.enum(['array']),
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
    nullable: z.boolean().optional(),
    minItems: z.number().optional(),
    maxItems: z.number().optional(),
    uniqueItems: z.boolean().optional(),
    sectionCaption: z.string().optional(),
    sectionDescription: z.string().optional(),
    placeholderKey: z.string().optional(),
    placeholderValue: z.string().optional(),
});

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

export type ArrayPropertyType<Input extends z.infer<typeof arrayPropertySchema>> = Input extends z.infer<
    typeof stringListSchema
>
    ? string[]
    : never;
