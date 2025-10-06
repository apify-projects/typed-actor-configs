import z from 'zod';
export declare const integerPropertySchema: z.ZodIntersection<z.ZodObject<{
    type: z.ZodEnum<{
        integer: "integer";
    }>;
    title: z.ZodString;
    description: z.ZodString;
    prefill: z.ZodOptional<z.ZodInt>;
    example: z.ZodOptional<z.ZodNumber>;
    nullable: z.ZodOptional<z.ZodBoolean>;
    minimum: z.ZodOptional<z.ZodInt>;
    maximum: z.ZodOptional<z.ZodInt>;
    unit: z.ZodOptional<z.ZodString>;
    editor: z.ZodOptional<z.ZodEnum<{
        number: "number";
        hidden: "hidden";
    }>>;
    sectionCaption: z.ZodOptional<z.ZodString>;
    sectionDescription: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
    nullable: z.ZodOptional<z.ZodLiteral<false>>;
    default: z.ZodOptional<z.ZodNumber>;
}, z.z.core.$strip>, z.ZodObject<{
    nullable: z.ZodLiteral<true>;
    default: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.z.core.$strip>]>>;
export type IntegerPropertyInput = number;
//# sourceMappingURL=index.d.ts.map