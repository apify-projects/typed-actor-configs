import z from 'zod';
declare const arrayTypesSchema: z.ZodObject<{
    type: z.ZodEnum<{
        array: "array";
    }>;
    nullable: z.ZodOptional<z.ZodBoolean>;
    default: z.ZodOptional<z.ZodNever>;
}, z.z.core.$strip>;
declare const minimalStringArraySchema: z.ZodObject<{
    editor: z.ZodLiteral<"stringList">;
    items: z.ZodOptional<z.ZodObject<{
        type: z.ZodLiteral<"string">;
    }, z.z.core.$strip>>;
}, z.z.core.$strip>;
export declare const minimalArraySchema: z.ZodIntersection<z.ZodObject<{
    type: z.ZodEnum<{
        array: "array";
    }>;
    nullable: z.ZodOptional<z.ZodBoolean>;
    default: z.ZodOptional<z.ZodNever>;
}, z.z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
    editor: z.ZodLiteral<"stringList">;
    items: z.ZodOptional<z.ZodObject<{
        type: z.ZodLiteral<"string">;
    }, z.z.core.$strip>>;
}, z.z.core.$strip>]>>;
export declare const arrayPropertySchema: z.ZodIntersection<z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
    type: z.ZodEnum<{
        array: "array";
    }>;
    nullable: z.ZodOptional<z.ZodBoolean>;
    default: z.ZodOptional<z.ZodNever>;
}, z.z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
    editor: z.ZodLiteral<"stringList">;
    items: z.ZodOptional<z.ZodObject<{
        type: z.ZodLiteral<"string">;
    }, z.z.core.$strip>>;
}, z.z.core.$strip>]>>, z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    editor: z.ZodEnum<{
        select: "select";
        hidden: "hidden";
        json: "json";
        schemaBased: "schemaBased";
        requestListSources: "requestListSources";
        pseudoUrls: "pseudoUrls";
        globs: "globs";
        keyValue: "keyValue";
        stringList: "stringList";
    }>;
    isSecret: z.ZodOptional<z.ZodBoolean>;
    prefill: z.ZodOptional<z.ZodArray<z.ZodAny>>;
    example: z.ZodOptional<z.ZodArray<z.ZodAny>>;
    minItems: z.ZodOptional<z.ZodNumber>;
    maxItems: z.ZodOptional<z.ZodNumber>;
    uniqueItems: z.ZodOptional<z.ZodBoolean>;
    sectionCaption: z.ZodOptional<z.ZodString>;
    sectionDescription: z.ZodOptional<z.ZodString>;
    placeholderKey: z.ZodOptional<z.ZodString>;
    placeholderValue: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>>, z.ZodUnion<readonly [z.ZodObject<{
    editor: z.ZodEnum<{
        stringList: "stringList";
    }>;
    items: z.ZodObject<{
        type: z.ZodEnum<{
            string: "string";
        }>;
        pattern: z.ZodOptional<z.ZodString>;
        minLength: z.ZodOptional<z.ZodInt>;
        maxLength: z.ZodOptional<z.ZodInt>;
    }, z.z.core.$strip>;
}, z.z.core.$strip>]>>;
export type ArrayPropertyType<Input extends z.infer<typeof arrayTypesSchema>> = Input extends z.infer<typeof minimalStringArraySchema> ? string[] : never;
export {};
//# sourceMappingURL=index.d.ts.map