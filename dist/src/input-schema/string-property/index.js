import z from 'zod';
const stringTypesSchema = z.object({
    type: z.enum(['string']),
    enum: z.never().optional(),
});
const nullableStringSchema = z.object({
    nullable: z.literal(true),
    default: z.string().nullable().optional(),
});
const nonNullableStringSchema = z.object({
    nullable: z.literal(false).optional(),
    default: z.string().optional(),
});
export const minimalStringSchema = stringTypesSchema.and(z.union([nonNullableStringSchema, nullableStringSchema]));
// Base schema defined in properties in the JSON schema
const baseStringPropertySchema = minimalStringSchema.and(z.object({
    title: z.string(),
    description: z.string(),
    editor: z.enum(['textfield', 'javascript', 'python', 'textarea', 'datepicker', 'hidden', 'fileupload']),
}));
// Used as discriminated union in the JSON schema
const datepickerStringPropertySchema = z.object({
    editor: z.enum(['datepicker']),
    dateType: z.enum(['absolute', 'relative', 'absoluteOrRelative']).optional(),
    // this is a constraint, not a discriminator
    isSecret: z.literal(false).optional(),
});
const nonDatepickerStringPropertySchema = z.object({
    editor: z.enum(['javascript', 'python', 'textfield', 'textarea', 'hidden', 'fileupload']),
});
const DatePickerDiscriminatorSchema = z.union([datepickerStringPropertySchema, nonDatepickerStringPropertySchema]);
const baseNotSecretStringPropertySchema = z.object({
    prefill: z.string().optional(),
    example: z.string().optional(),
    pattern: z.string().optional(),
    minLength: z.number().optional(),
    maxLength: z.number().optional(),
    sectionCaption: z.string().optional(),
    sectionDescription: z.string().optional(),
    isSecret: z.literal(false).optional(),
});
const notSecretStringPropertySchema = baseNotSecretStringPropertySchema.and(DatePickerDiscriminatorSchema);
const secretStringPropertySchema = z.object({
    isSecret: z.literal(true),
    prefill: z.string().optional(),
    example: z.string().optional(),
    editor: z.enum(['textfield', 'textarea', 'hidden']),
});
export const stringPropertySchema = baseStringPropertySchema.and(z.union([notSecretStringPropertySchema, secretStringPropertySchema]));
//# sourceMappingURL=index.js.map