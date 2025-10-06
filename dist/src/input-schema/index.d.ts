import z from 'zod';
import { stringPropertySchema, type StringPropertyInput } from './string-property/index.ts';
import { booleanPropertySchema, type BooleanPropertyInput } from './boolean-property/index.ts';
import { integerPropertySchema, type IntegerPropertyInput } from './integer-property/index.ts';
import { enumPropertySchema } from './enum-property/index.ts';
import { type CollapseIntersection } from '../utility-types/collapse-intersection/index.ts';
import { arrayPropertySchema, type ArrayPropertyType } from './array-property/index.ts';
declare const propertyTypesSchemas: (z.ZodIntersection<z.ZodObject<{
    type: z.ZodEnum<{
        string: "string";
    }>;
    title: z.ZodString;
    description: z.ZodString;
    nullable: z.ZodOptional<z.ZodBoolean>;
    editor: z.ZodEnum<{
        textfield: "textfield";
        javascript: "javascript";
        python: "python";
        textarea: "textarea";
        datepicker: "datepicker";
        hidden: "hidden";
        fileupload: "fileupload";
    }>;
}, z.z.core.$strip>, z.ZodUnion<readonly [z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
    prefill: z.ZodOptional<z.ZodString>;
    example: z.ZodOptional<z.ZodString>;
    pattern: z.ZodOptional<z.ZodString>;
    minLength: z.ZodOptional<z.ZodNumber>;
    maxLength: z.ZodOptional<z.ZodNumber>;
    sectionCaption: z.ZodOptional<z.ZodString>;
    sectionDescription: z.ZodOptional<z.ZodString>;
    isSecret: z.ZodOptional<z.ZodLiteral<false>>;
}, z.z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
    nullable: z.ZodOptional<z.ZodLiteral<false>>;
    default: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>, z.ZodObject<{
    nullable: z.ZodLiteral<true>;
    default: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>]>>, z.ZodUnion<readonly [z.ZodObject<{
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
}, z.z.core.$strip>]>> | z.ZodIntersection<z.ZodObject<{
    type: z.ZodEnum<{
        boolean: "boolean";
    }>;
    title: z.ZodString;
    description: z.ZodString;
    prefill: z.ZodOptional<z.ZodBoolean>;
    example: z.ZodOptional<z.ZodBoolean>;
    nullable: z.ZodOptional<z.ZodBoolean>;
    groupCaption: z.ZodOptional<z.ZodString>;
    groupDescription: z.ZodOptional<z.ZodString>;
    editor: z.ZodOptional<z.ZodEnum<{
        hidden: "hidden";
        checkbox: "checkbox";
    }>>;
    sectionCaption: z.ZodOptional<z.ZodString>;
    sectionDescription: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
    nullable: z.ZodOptional<z.ZodLiteral<false>>;
    default: z.ZodOptional<z.ZodBoolean>;
}, z.z.core.$strip>, z.ZodObject<{
    nullable: z.ZodLiteral<true>;
    default: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
}, z.z.core.$strip>]>> | z.ZodIntersection<z.ZodObject<{
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
}, z.z.core.$strip>]>> | z.ZodIntersection<z.ZodObject<{
    type: z.ZodEnum<{
        string: "string";
    }>;
    title: z.ZodString;
    description: z.ZodString;
    enum: z.ZodArray<z.ZodString>;
    editor: z.ZodOptional<z.ZodEnum<{
        select: "select";
    }>>;
    prefill: z.ZodOptional<z.ZodString>;
    example: z.ZodOptional<z.ZodString>;
    nullable: z.ZodOptional<z.ZodBoolean>;
    sectionCaption: z.ZodOptional<z.ZodString>;
    sectionDescription: z.ZodOptional<z.ZodString>;
    enumTitles: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
    nullable: z.ZodOptional<z.ZodLiteral<false>>;
    default: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>, z.ZodObject<{
    nullable: z.ZodLiteral<true>;
    default: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.z.core.$strip>]>> | z.ZodIntersection<z.ZodObject<{
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
}, z.z.core.$strip>]>>)[];
declare const propertyTypes: z.ZodUnion<(z.ZodIntersection<z.ZodObject<{
    type: z.ZodEnum<{
        string: "string";
    }>;
    title: z.ZodString;
    description: z.ZodString;
    nullable: z.ZodOptional<z.ZodBoolean>;
    editor: z.ZodEnum<{
        textfield: "textfield";
        javascript: "javascript";
        python: "python";
        textarea: "textarea";
        datepicker: "datepicker";
        hidden: "hidden";
        fileupload: "fileupload";
    }>;
}, z.z.core.$strip>, z.ZodUnion<readonly [z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
    prefill: z.ZodOptional<z.ZodString>;
    example: z.ZodOptional<z.ZodString>;
    pattern: z.ZodOptional<z.ZodString>;
    minLength: z.ZodOptional<z.ZodNumber>;
    maxLength: z.ZodOptional<z.ZodNumber>;
    sectionCaption: z.ZodOptional<z.ZodString>;
    sectionDescription: z.ZodOptional<z.ZodString>;
    isSecret: z.ZodOptional<z.ZodLiteral<false>>;
}, z.z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
    nullable: z.ZodOptional<z.ZodLiteral<false>>;
    default: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>, z.ZodObject<{
    nullable: z.ZodLiteral<true>;
    default: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>]>>, z.ZodUnion<readonly [z.ZodObject<{
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
}, z.z.core.$strip>]>> | z.ZodIntersection<z.ZodObject<{
    type: z.ZodEnum<{
        boolean: "boolean";
    }>;
    title: z.ZodString;
    description: z.ZodString;
    prefill: z.ZodOptional<z.ZodBoolean>;
    example: z.ZodOptional<z.ZodBoolean>;
    nullable: z.ZodOptional<z.ZodBoolean>;
    groupCaption: z.ZodOptional<z.ZodString>;
    groupDescription: z.ZodOptional<z.ZodString>;
    editor: z.ZodOptional<z.ZodEnum<{
        hidden: "hidden";
        checkbox: "checkbox";
    }>>;
    sectionCaption: z.ZodOptional<z.ZodString>;
    sectionDescription: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
    nullable: z.ZodOptional<z.ZodLiteral<false>>;
    default: z.ZodOptional<z.ZodBoolean>;
}, z.z.core.$strip>, z.ZodObject<{
    nullable: z.ZodLiteral<true>;
    default: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
}, z.z.core.$strip>]>> | z.ZodIntersection<z.ZodObject<{
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
}, z.z.core.$strip>]>> | z.ZodIntersection<z.ZodObject<{
    type: z.ZodEnum<{
        string: "string";
    }>;
    title: z.ZodString;
    description: z.ZodString;
    enum: z.ZodArray<z.ZodString>;
    editor: z.ZodOptional<z.ZodEnum<{
        select: "select";
    }>>;
    prefill: z.ZodOptional<z.ZodString>;
    example: z.ZodOptional<z.ZodString>;
    nullable: z.ZodOptional<z.ZodBoolean>;
    sectionCaption: z.ZodOptional<z.ZodString>;
    sectionDescription: z.ZodOptional<z.ZodString>;
    enumTitles: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
    nullable: z.ZodOptional<z.ZodLiteral<false>>;
    default: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>, z.ZodObject<{
    nullable: z.ZodLiteral<true>;
    default: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.z.core.$strip>]>> | z.ZodIntersection<z.ZodObject<{
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
}, z.z.core.$strip>]>>)[]>;
type AnyProperty = z.infer<typeof propertyTypes>;
type inferProperty<Input extends z.infer<(typeof propertyTypesSchemas)[number]>> = Input extends z.infer<typeof stringPropertySchema> ? StringPropertyInput : Input extends z.infer<typeof booleanPropertySchema> ? BooleanPropertyInput : Input extends z.infer<typeof integerPropertySchema> ? IntegerPropertyInput : Input extends z.infer<typeof enumPropertySchema> & {
    enum: (infer Item)[];
} ? Item : Input extends z.infer<typeof arrayPropertySchema> ? ArrayPropertyType<Input> : never;
type inferPropertyTypesSchemas<Input extends z.infer<(typeof propertyTypesSchemas)[number]>> = Input extends {
    nullable: true;
} ? inferProperty<Input> | null : inferProperty<Input>;
declare const inputSchema: z.ZodObject<{
    $schema: z.ZodOptional<z.ZodLiteral<"https://apify-projects.github.io/actor-json-schemas/input.schema.json?v=0.1">>;
    title: z.ZodString;
    schemaVersion: z.ZodLiteral<1>;
    type: z.ZodLiteral<"object">;
    properties: z.ZodRecord<z.ZodString, z.ZodUnion<(z.ZodIntersection<z.ZodObject<{
        type: z.ZodEnum<{
            string: "string";
        }>;
        title: z.ZodString;
        description: z.ZodString;
        nullable: z.ZodOptional<z.ZodBoolean>;
        editor: z.ZodEnum<{
            textfield: "textfield";
            javascript: "javascript";
            python: "python";
            textarea: "textarea";
            datepicker: "datepicker";
            hidden: "hidden";
            fileupload: "fileupload";
        }>;
    }, z.z.core.$strip>, z.ZodUnion<readonly [z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
        prefill: z.ZodOptional<z.ZodString>;
        example: z.ZodOptional<z.ZodString>;
        pattern: z.ZodOptional<z.ZodString>;
        minLength: z.ZodOptional<z.ZodNumber>;
        maxLength: z.ZodOptional<z.ZodNumber>;
        sectionCaption: z.ZodOptional<z.ZodString>;
        sectionDescription: z.ZodOptional<z.ZodString>;
        isSecret: z.ZodOptional<z.ZodLiteral<false>>;
    }, z.z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
        nullable: z.ZodOptional<z.ZodLiteral<false>>;
        default: z.ZodOptional<z.ZodString>;
    }, z.z.core.$strip>, z.ZodObject<{
        nullable: z.ZodLiteral<true>;
        default: z.ZodOptional<z.ZodString>;
    }, z.z.core.$strip>]>>, z.ZodUnion<readonly [z.ZodObject<{
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
    }, z.z.core.$strip>]>> | z.ZodIntersection<z.ZodObject<{
        type: z.ZodEnum<{
            boolean: "boolean";
        }>;
        title: z.ZodString;
        description: z.ZodString;
        prefill: z.ZodOptional<z.ZodBoolean>;
        example: z.ZodOptional<z.ZodBoolean>;
        nullable: z.ZodOptional<z.ZodBoolean>;
        groupCaption: z.ZodOptional<z.ZodString>;
        groupDescription: z.ZodOptional<z.ZodString>;
        editor: z.ZodOptional<z.ZodEnum<{
            hidden: "hidden";
            checkbox: "checkbox";
        }>>;
        sectionCaption: z.ZodOptional<z.ZodString>;
        sectionDescription: z.ZodOptional<z.ZodString>;
    }, z.z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
        nullable: z.ZodOptional<z.ZodLiteral<false>>;
        default: z.ZodOptional<z.ZodBoolean>;
    }, z.z.core.$strip>, z.ZodObject<{
        nullable: z.ZodLiteral<true>;
        default: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    }, z.z.core.$strip>]>> | z.ZodIntersection<z.ZodObject<{
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
    }, z.z.core.$strip>]>> | z.ZodIntersection<z.ZodObject<{
        type: z.ZodEnum<{
            string: "string";
        }>;
        title: z.ZodString;
        description: z.ZodString;
        enum: z.ZodArray<z.ZodString>;
        editor: z.ZodOptional<z.ZodEnum<{
            select: "select";
        }>>;
        prefill: z.ZodOptional<z.ZodString>;
        example: z.ZodOptional<z.ZodString>;
        nullable: z.ZodOptional<z.ZodBoolean>;
        sectionCaption: z.ZodOptional<z.ZodString>;
        sectionDescription: z.ZodOptional<z.ZodString>;
        enumTitles: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
        nullable: z.ZodOptional<z.ZodLiteral<false>>;
        default: z.ZodOptional<z.ZodString>;
    }, z.z.core.$strip>, z.ZodObject<{
        nullable: z.ZodLiteral<true>;
        default: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.z.core.$strip>]>> | z.ZodIntersection<z.ZodObject<{
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
    }, z.z.core.$strip>]>>)[]>>;
    required: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.z.core.$strip>;
type InputSchema = z.input<typeof inputSchema>;
type consistentRequired<T extends InputSchema> = T extends {
    properties: Record<infer R, any>;
} ? T & {
    required?: R[];
} : never;
/**
 * @param input The input schema to be emmited
 * @returns The same input schema, to be used for input type inference
 */
export declare function defineInputConfiguration<InputConfiguration extends InputSchema, Properties extends string, Requireds extends Properties>(input: consistentRequired<InputConfiguration & {
    properties: {
        [Key in Properties]: AnyProperty;
    };
}> & {
    required?: Requireds[];
} & InputSchema): InputConfiguration & {
    required?: Requireds[];
};
type requiredKeys<T extends InputSchema> = T extends {
    required: (infer R)[];
} ? R : '';
export type inferInput<Input extends InputSchema> = CollapseIntersection<{
    [Key in keyof Input['properties'] & requiredKeys<Input>]: inferPropertyTypesSchemas<Input['properties'][Key]>;
} & {
    [Key in Exclude<keyof Input['properties'], requiredKeys<Input>>]?: inferPropertyTypesSchemas<Input['properties'][Key]>;
}>;
export {};
//# sourceMappingURL=index.d.ts.map