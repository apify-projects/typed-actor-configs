import z from 'zod';
export declare const minimalStringSchema: z.ZodIntersection<z.ZodObject<{
    type: z.ZodEnum<{
        string: "string";
    }>;
    enum: z.ZodOptional<z.ZodNever>;
}, z.z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
    nullable: z.ZodOptional<z.ZodLiteral<false>>;
    default: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>, z.ZodObject<{
    nullable: z.ZodLiteral<true>;
    default: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.z.core.$strip>]>>;
export declare const stringPropertySchema: z.ZodIntersection<z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
    type: z.ZodEnum<{
        string: "string";
    }>;
    enum: z.ZodOptional<z.ZodNever>;
}, z.z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
    nullable: z.ZodOptional<z.ZodLiteral<false>>;
    default: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>, z.ZodObject<{
    nullable: z.ZodLiteral<true>;
    default: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.z.core.$strip>]>>, z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    editor: z.ZodEnum<{
        textfield: "textfield";
        javascript: "javascript";
        python: "python";
        textarea: "textarea";
        datepicker: "datepicker";
        hidden: "hidden";
        fileupload: "fileupload";
    }>;
}, z.z.core.$strip>>, z.ZodUnion<readonly [z.ZodIntersection<z.ZodObject<{
    prefill: z.ZodOptional<z.ZodString>;
    example: z.ZodOptional<z.ZodString>;
    pattern: z.ZodOptional<z.ZodString>;
    minLength: z.ZodOptional<z.ZodNumber>;
    maxLength: z.ZodOptional<z.ZodNumber>;
    sectionCaption: z.ZodOptional<z.ZodString>;
    sectionDescription: z.ZodOptional<z.ZodString>;
    isSecret: z.ZodOptional<z.ZodLiteral<false>>;
}, z.z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
    editor: z.ZodEnum<{
        datepicker: "datepicker";
    }>;
    dateType: z.ZodOptional<z.ZodEnum<{
        absolute: "absolute";
        relative: "relative";
        absoluteOrRelative: "absoluteOrRelative";
    }>>;
    isSecret: z.ZodOptional<z.ZodLiteral<false>>;
}, z.z.core.$strip>, z.ZodObject<{
    editor: z.ZodEnum<{
        textfield: "textfield";
        javascript: "javascript";
        python: "python";
        textarea: "textarea";
        hidden: "hidden";
        fileupload: "fileupload";
    }>;
}, z.z.core.$strip>]>>, z.ZodObject<{
    isSecret: z.ZodLiteral<true>;
    prefill: z.ZodOptional<z.ZodString>;
    example: z.ZodOptional<z.ZodString>;
    editor: z.ZodEnum<{
        textfield: "textfield";
        textarea: "textarea";
        hidden: "hidden";
    }>;
}, z.z.core.$strip>]>>;
export type StringPropertyInput = string;
//# sourceMappingURL=index.d.ts.map