import { FromSchema } from 'json-schema-to-ts';
declare const subSchemaStringEnumProperty: {
    readonly $id: "subSchemaStringEnumProperty";
    readonly title: "Sub-schema: Enum property";
    readonly type: "object";
    readonly additionalProperties: false;
    readonly properties: {
        readonly type: {
            readonly enum: readonly ["string"];
        };
        readonly editor: {
            readonly enum: readonly ["select"];
        };
        readonly title: {
            readonly type: "string";
        };
        readonly description: {
            readonly type: "string";
        };
        readonly nullable: {
            readonly type: "boolean";
        };
        readonly enum: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
            readonly minItems: 1;
            readonly uniqueItems: true;
        };
        readonly enumTitles: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
            readonly minItems: 1;
        };
    };
    readonly required: readonly ["type", "title", "description", "enum"];
};
export type SubSchemaStringEnumProperty = FromSchema<typeof subSchemaStringEnumProperty, {
    keepDefaultedPropertiesOptional: true;
    parseIfThenElseKeywords: true;
    parseNotKeyword: true;
}>;
export type InferSubSchemaStringEnumProperty<T extends {
    readonly enum: readonly string[];
    readonly nullable?: boolean;
}> = T extends {
    enum: (infer E)[];
    nullable?: boolean;
} ? T['nullable'] extends true ? E | null : E : never;
export type SubSchemaStringEnumPropertyDependencies = [];
declare const _default: {
    schema: {
        readonly $id: "subSchemaStringEnumProperty";
        readonly title: "Sub-schema: Enum property";
        readonly type: "object";
        readonly additionalProperties: false;
        readonly properties: {
            readonly type: {
                readonly enum: readonly ["string"];
            };
            readonly editor: {
                readonly enum: readonly ["select"];
            };
            readonly title: {
                readonly type: "string";
            };
            readonly description: {
                readonly type: "string";
            };
            readonly nullable: {
                readonly type: "boolean";
            };
            readonly enum: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                };
                readonly minItems: 1;
                readonly uniqueItems: true;
            };
            readonly enumTitles: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                };
                readonly minItems: 1;
            };
        };
        readonly required: readonly ["type", "title", "description", "enum"];
    };
};
export default _default;
//# sourceMappingURL=sub-schema-string-enum-property.d.ts.map