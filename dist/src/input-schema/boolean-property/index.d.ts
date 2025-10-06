import z from 'zod';
export declare const minimalBooleanSchema: z.ZodIntersection<z.ZodObject<{
    type: z.ZodEnum<{
        boolean: "boolean";
    }>;
}, z.z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
    nullable: z.ZodOptional<z.ZodLiteral<false>>;
    default: z.ZodOptional<z.ZodBoolean>;
}, z.z.core.$strip>, z.ZodObject<{
    nullable: z.ZodLiteral<true>;
    default: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
}, z.z.core.$strip>]>>;
export declare const booleanPropertySchema: z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
    type: z.ZodEnum<{
        boolean: "boolean";
    }>;
}, z.z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
    nullable: z.ZodOptional<z.ZodLiteral<false>>;
    default: z.ZodOptional<z.ZodBoolean>;
}, z.z.core.$strip>, z.ZodObject<{
    nullable: z.ZodLiteral<true>;
    default: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
}, z.z.core.$strip>]>>, z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    prefill: z.ZodOptional<z.ZodBoolean>;
    example: z.ZodOptional<z.ZodBoolean>;
    groupCaption: z.ZodOptional<z.ZodString>;
    groupDescription: z.ZodOptional<z.ZodString>;
    editor: z.ZodOptional<z.ZodEnum<{
        hidden: "hidden";
        checkbox: "checkbox";
    }>>;
    sectionCaption: z.ZodOptional<z.ZodString>;
    sectionDescription: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>>;
export type BooleanPropertyInput = boolean;
//# sourceMappingURL=index.d.ts.map