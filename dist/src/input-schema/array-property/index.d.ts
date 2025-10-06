import z from 'zod';
declare const stringListSchema: z.ZodObject<{
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
}, z.z.core.$strip>;
export declare const arrayPropertySchema: z.ZodIntersection<z.ZodObject<{
    type: z.ZodEnum<{
        array: "array";
    }>;
    title: z.ZodString;
    description: z.ZodString;
    editor: z.ZodEnum<{
        hidden: "hidden";
        select: "select";
        json: "json";
        requestListSources: "requestListSources";
        pseudoUrls: "pseudoUrls";
        globs: "globs";
        keyValue: "keyValue";
        stringList: "stringList";
        schemaBased: "schemaBased";
    }>;
    isSecret: z.ZodOptional<z.ZodBoolean>;
    prefill: z.ZodOptional<z.ZodArray<z.ZodAny>>;
    example: z.ZodOptional<z.ZodArray<z.ZodAny>>;
    nullable: z.ZodOptional<z.ZodBoolean>;
    minItems: z.ZodOptional<z.ZodNumber>;
    maxItems: z.ZodOptional<z.ZodNumber>;
    uniqueItems: z.ZodOptional<z.ZodBoolean>;
    sectionCaption: z.ZodOptional<z.ZodString>;
    sectionDescription: z.ZodOptional<z.ZodString>;
    placeholderKey: z.ZodOptional<z.ZodString>;
    placeholderValue: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
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
export type ArrayPropertyType<Input extends z.infer<typeof arrayPropertySchema>> = Input extends z.infer<typeof stringListSchema> ? string[] : never;
export {};
//# sourceMappingURL=index.d.ts.map