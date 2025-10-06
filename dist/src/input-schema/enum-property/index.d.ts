import z from 'zod';
export declare const minimalEnumSchema: z.ZodIntersection<z.ZodObject<{
    type: z.ZodEnum<{
        string: "string";
    }>;
    enum: z.ZodArray<z.ZodString>;
}, z.z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
    nullable: z.ZodOptional<z.ZodLiteral<false>>;
    default: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>, z.ZodObject<{
    nullable: z.ZodLiteral<true>;
    default: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.z.core.$strip>]>>;
export declare const enumPropertySchema: z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
    type: z.ZodEnum<{
        string: "string";
    }>;
    enum: z.ZodArray<z.ZodString>;
}, z.z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
    nullable: z.ZodOptional<z.ZodLiteral<false>>;
    default: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>, z.ZodObject<{
    nullable: z.ZodLiteral<true>;
    default: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.z.core.$strip>]>>, z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    editor: z.ZodOptional<z.ZodEnum<{
        select: "select";
    }>>;
    prefill: z.ZodOptional<z.ZodString>;
    example: z.ZodOptional<z.ZodString>;
    sectionCaption: z.ZodOptional<z.ZodString>;
    sectionDescription: z.ZodOptional<z.ZodString>;
    enumTitles: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.z.core.$strip>>;
export type EnumPropertyInput = string;
//# sourceMappingURL=index.d.ts.map