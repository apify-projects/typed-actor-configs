import z from 'zod';
import { minimalStringSchema, type StringPropertyInput } from './string-property/index.ts';
import { minimalBooleanSchema, type BooleanPropertyInput } from './boolean-property/index.ts';
import { minimalIntegerSchema, type IntegerPropertyInput } from './integer-property/index.ts';
import { minimalEnumSchema } from './enum-property/index.ts';
import { type CollapseIntersection } from '../utility-types/collapse-intersection/index.ts';
import { minimalArraySchema, type ArrayPropertyType } from './array-property/index.ts';
import { type DefaultedFields } from '../utility-types/nullability.ts';
declare const propertyTypes: z.ZodUnion<(z.ZodIntersection<z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
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
}, z.z.core.$strip>]>> | z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
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
}, z.z.core.$strip>> | z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
    type: z.ZodEnum<{
        integer: "integer";
    }>;
}, z.z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
    nullable: z.ZodOptional<z.ZodLiteral<false>>;
    default: z.ZodOptional<z.ZodNumber>;
}, z.z.core.$strip>, z.ZodObject<{
    nullable: z.ZodLiteral<true>;
    default: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.z.core.$strip>]>>, z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    prefill: z.ZodOptional<z.ZodInt>;
    example: z.ZodOptional<z.ZodNumber>;
    minimum: z.ZodOptional<z.ZodInt>;
    maximum: z.ZodOptional<z.ZodInt>;
    unit: z.ZodOptional<z.ZodString>;
    editor: z.ZodOptional<z.ZodEnum<{
        number: "number";
        hidden: "hidden";
    }>>;
    sectionCaption: z.ZodOptional<z.ZodString>;
    sectionDescription: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>> | z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
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
}, z.z.core.$strip>> | z.ZodIntersection<z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
    type: z.ZodEnum<{
        array: "array";
    }>;
    nullable: z.ZodOptional<z.ZodBoolean>;
    default: z.ZodOptional<z.ZodNever>;
}, z.z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
    editor: z.ZodLiteral<"stringList">;
    items: z.ZodObject<{
        type: z.ZodLiteral<"string">;
    }, z.z.core.$strip>;
}, z.z.core.$strip>]>>, z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    editor: z.ZodEnum<{
        stringList: "stringList";
        hidden: "hidden";
        select: "select";
        json: "json";
        requestListSources: "requestListSources";
        pseudoUrls: "pseudoUrls";
        globs: "globs";
        keyValue: "keyValue";
        schemaBased: "schemaBased";
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
}, z.z.core.$strip>]>>)[]>;
type AnyProperty = z.infer<typeof propertyTypes>;
declare const inputSchema: z.ZodObject<{
    $schema: z.ZodOptional<z.ZodLiteral<"https://apify-projects.github.io/actor-json-schemas/input.schema.json?v=0.1">>;
    title: z.ZodString;
    schemaVersion: z.ZodLiteral<1>;
    type: z.ZodLiteral<"object">;
    properties: z.ZodRecord<z.ZodString, z.ZodUnion<(z.ZodIntersection<z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
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
    }, z.z.core.$strip>]>> | z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
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
    }, z.z.core.$strip>> | z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
        type: z.ZodEnum<{
            integer: "integer";
        }>;
    }, z.z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
        nullable: z.ZodOptional<z.ZodLiteral<false>>;
        default: z.ZodOptional<z.ZodNumber>;
    }, z.z.core.$strip>, z.ZodObject<{
        nullable: z.ZodLiteral<true>;
        default: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.z.core.$strip>]>>, z.ZodObject<{
        title: z.ZodString;
        description: z.ZodString;
        prefill: z.ZodOptional<z.ZodInt>;
        example: z.ZodOptional<z.ZodNumber>;
        minimum: z.ZodOptional<z.ZodInt>;
        maximum: z.ZodOptional<z.ZodInt>;
        unit: z.ZodOptional<z.ZodString>;
        editor: z.ZodOptional<z.ZodEnum<{
            number: "number";
            hidden: "hidden";
        }>>;
        sectionCaption: z.ZodOptional<z.ZodString>;
        sectionDescription: z.ZodOptional<z.ZodString>;
    }, z.z.core.$strip>> | z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
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
    }, z.z.core.$strip>> | z.ZodIntersection<z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
        type: z.ZodEnum<{
            array: "array";
        }>;
        nullable: z.ZodOptional<z.ZodBoolean>;
        default: z.ZodOptional<z.ZodNever>;
    }, z.z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
        editor: z.ZodLiteral<"stringList">;
        items: z.ZodObject<{
            type: z.ZodLiteral<"string">;
        }, z.z.core.$strip>;
    }, z.z.core.$strip>]>>, z.ZodObject<{
        title: z.ZodString;
        description: z.ZodString;
        editor: z.ZodEnum<{
            stringList: "stringList";
            hidden: "hidden";
            select: "select";
            json: "json";
            requestListSources: "requestListSources";
            pseudoUrls: "pseudoUrls";
            globs: "globs";
            keyValue: "keyValue";
            schemaBased: "schemaBased";
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
export declare function defineInputConfiguration<InputConfiguration extends InputSchema, Properties extends string, Requireds extends Properties>(path: `${string}/input_schema.json`, input: consistentRequired<InputConfiguration & {
    properties: {
        [Key in Properties]: AnyProperty;
    };
}> & {
    required?: Requireds[];
} & InputSchema): InputConfiguration & {
    required?: Requireds[];
};
type requiredKeys<T extends MinimalInputSchema> = T extends {
    required: (infer R)[];
} ? R : '';
declare const allMinimalSchemas: (z.ZodIntersection<z.ZodObject<{
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
}, z.z.core.$strip>]>> | z.ZodIntersection<z.ZodObject<{
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
}, z.z.core.$strip>]>> | z.ZodIntersection<z.ZodObject<{
    type: z.ZodEnum<{
        array: "array";
    }>;
    nullable: z.ZodOptional<z.ZodBoolean>;
    default: z.ZodOptional<z.ZodNever>;
}, z.z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
    editor: z.ZodLiteral<"stringList">;
    items: z.ZodObject<{
        type: z.ZodLiteral<"string">;
    }, z.z.core.$strip>;
}, z.z.core.$strip>]>> | z.ZodIntersection<z.ZodObject<{
    type: z.ZodEnum<{
        boolean: "boolean";
    }>;
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
}, z.z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
    nullable: z.ZodOptional<z.ZodLiteral<false>>;
    default: z.ZodOptional<z.ZodNumber>;
}, z.z.core.$strip>, z.ZodObject<{
    nullable: z.ZodLiteral<true>;
    default: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.z.core.$strip>]>>)[];
declare const minimalPropertyTypesSchema: z.ZodUnion<(z.ZodIntersection<z.ZodObject<{
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
}, z.z.core.$strip>]>> | z.ZodIntersection<z.ZodObject<{
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
}, z.z.core.$strip>]>> | z.ZodIntersection<z.ZodObject<{
    type: z.ZodEnum<{
        array: "array";
    }>;
    nullable: z.ZodOptional<z.ZodBoolean>;
    default: z.ZodOptional<z.ZodNever>;
}, z.z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
    editor: z.ZodLiteral<"stringList">;
    items: z.ZodObject<{
        type: z.ZodLiteral<"string">;
    }, z.z.core.$strip>;
}, z.z.core.$strip>]>> | z.ZodIntersection<z.ZodObject<{
    type: z.ZodEnum<{
        boolean: "boolean";
    }>;
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
}, z.z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
    nullable: z.ZodOptional<z.ZodLiteral<false>>;
    default: z.ZodOptional<z.ZodNumber>;
}, z.z.core.$strip>, z.ZodObject<{
    nullable: z.ZodLiteral<true>;
    default: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.z.core.$strip>]>>)[]>;
export type MinimalProperty = z.infer<typeof minimalPropertyTypesSchema>;
declare const minimalInputSchema: z.ZodObject<{
    properties: z.ZodRecord<z.ZodString, z.ZodUnion<(z.ZodIntersection<z.ZodObject<{
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
    }, z.z.core.$strip>]>> | z.ZodIntersection<z.ZodObject<{
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
    }, z.z.core.$strip>]>> | z.ZodIntersection<z.ZodObject<{
        type: z.ZodEnum<{
            array: "array";
        }>;
        nullable: z.ZodOptional<z.ZodBoolean>;
        default: z.ZodOptional<z.ZodNever>;
    }, z.z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
        editor: z.ZodLiteral<"stringList">;
        items: z.ZodObject<{
            type: z.ZodLiteral<"string">;
        }, z.z.core.$strip>;
    }, z.z.core.$strip>]>> | z.ZodIntersection<z.ZodObject<{
        type: z.ZodEnum<{
            boolean: "boolean";
        }>;
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
    }, z.z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
        nullable: z.ZodOptional<z.ZodLiteral<false>>;
        default: z.ZodOptional<z.ZodNumber>;
    }, z.z.core.$strip>, z.ZodObject<{
        nullable: z.ZodLiteral<true>;
        default: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.z.core.$strip>]>>)[]>>;
    required: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.z.core.$strip>;
export type MinimalInputSchema = z.infer<typeof minimalInputSchema>;
export declare function defineMinimalInputConfiguration<Properties extends string, Requireds extends Properties, Schema extends MinimalInputSchema>(path: `${string}/input_schema.json`, input: Schema & {
    properties: {
        [Key in Properties]: MinimalProperty;
    };
    required?: Requireds[];
} & MinimalInputSchema): Schema;
type inferMinimalProperty<Input extends z.input<(typeof allMinimalSchemas)[number]>> = Input extends z.infer<typeof minimalEnumSchema> & {
    enum: readonly (infer Item)[];
} ? Item : Input extends z.infer<typeof minimalStringSchema> ? StringPropertyInput : Input extends z.infer<typeof minimalBooleanSchema> ? BooleanPropertyInput : Input extends z.infer<typeof minimalIntegerSchema> ? IntegerPropertyInput : Input extends z.infer<typeof minimalArraySchema> ? ArrayPropertyType<Input> : never;
type inferMinimalPropertyTypesSchemas<Input extends z.infer<(typeof allMinimalSchemas)[number]>> = Input extends {
    nullable: true;
} ? inferMinimalProperty<Input> | null : inferMinimalProperty<Input>;
export type inferInput<Input extends MinimalInputSchema> = CollapseIntersection<{
    [Key in keyof Input['properties'] & (requiredKeys<Input> | DefaultedFields<Input>)]: inferMinimalPropertyTypesSchemas<Input['properties'][Key]>;
} & {
    [Key in Exclude<keyof Input['properties'], requiredKeys<Input> | DefaultedFields<Input>>]?: inferMinimalPropertyTypesSchemas<Input['properties'][Key]>;
}>;
export {};
//# sourceMappingURL=index.d.ts.map