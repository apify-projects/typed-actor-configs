import { FromSchema } from 'json-schema-to-ts';
declare const stringEnumProperty: {
    readonly $id: "stringEnumProperty";
    readonly title: "Enum property";
    readonly type: "object";
    readonly unevaluatedProperties: false;
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
        readonly prefill: {
            readonly type: "string";
        };
        readonly example: {
            readonly type: "string";
        };
        readonly nullable: {
            readonly type: "boolean";
        };
        readonly sectionCaption: {
            readonly type: "string";
        };
        readonly sectionDescription: {
            readonly type: "string";
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
    readonly if: {
        readonly properties: {
            readonly nullable: {
                readonly const: false;
            };
        };
    };
    readonly then: {
        readonly properties: {
            readonly default: {
                readonly type: "string";
            };
        };
    };
    readonly else: {
        readonly properties: {
            readonly default: {
                readonly type: readonly ["string", "null"];
            };
        };
    };
};
export type StringEnumProperty = FromSchema<typeof stringEnumProperty, {
    keepDefaultedPropertiesOptional: true;
    parseIfThenElseKeywords: true;
    parseNotKeyword: true;
}>;
export type InferEnumProperty<T extends {
    readonly enum: readonly string[];
    readonly nullable?: boolean;
}> = T extends {
    enum: (infer E)[];
    nullable?: boolean;
} ? T['nullable'] extends true ? E | null : E : never;
export type StringEnumDependencies = [];
declare const _default: {
    schema: {
        readonly $id: "stringEnumProperty";
        readonly title: "Enum property";
        readonly type: "object";
        readonly unevaluatedProperties: false;
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
            readonly prefill: {
                readonly type: "string";
            };
            readonly example: {
                readonly type: "string";
            };
            readonly nullable: {
                readonly type: "boolean";
            };
            readonly sectionCaption: {
                readonly type: "string";
            };
            readonly sectionDescription: {
                readonly type: "string";
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
        readonly if: {
            readonly properties: {
                readonly nullable: {
                    readonly const: false;
                };
            };
        };
        readonly then: {
            readonly properties: {
                readonly default: {
                    readonly type: "string";
                };
            };
        };
        readonly else: {
            readonly properties: {
                readonly default: {
                    readonly type: readonly ["string", "null"];
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=string-enum-property.d.ts.map