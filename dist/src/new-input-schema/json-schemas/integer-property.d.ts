import { FromSchema } from 'json-schema-to-ts';
declare const integerProperty: {
    readonly $id: "integerProperty";
    readonly title: "Integer property";
    readonly type: "object";
    readonly unevaluatedProperties: false;
    readonly properties: {
        readonly type: {
            readonly enum: readonly ["integer"];
        };
        readonly title: {
            readonly type: "string";
        };
        readonly description: {
            readonly type: "string";
        };
        readonly prefill: {
            readonly type: "integer";
        };
        readonly example: {
            readonly type: "integer";
        };
        readonly nullable: {
            readonly type: "boolean";
        };
        readonly minimum: {
            readonly type: "integer";
        };
        readonly maximum: {
            readonly type: "integer";
        };
        readonly unit: {
            readonly type: "string";
        };
        readonly editor: {
            readonly enum: readonly ["number", "hidden"];
        };
        readonly sectionCaption: {
            readonly type: "string";
        };
        readonly sectionDescription: {
            readonly type: "string";
        };
    };
    readonly required: readonly ["type", "title", "description"];
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
                readonly type: "integer";
            };
        };
    };
    readonly else: {
        readonly properties: {
            readonly default: {
                readonly type: readonly ["integer", "null"];
            };
        };
    };
};
export type IntegerProperty = FromSchema<typeof integerProperty, {
    keepDefaultedPropertiesOptional: true;
    parseIfThenElseKeywords: true;
    parseNotKeyword: true;
}>;
export type InferIntegerProperty<T extends {
    readonly type: 'integer';
    readonly nullable?: boolean;
}> = T['nullable'] extends true ? number | null : number;
export type IntegerPropertyDependencies = [];
declare const _default: {
    schema: {
        readonly $id: "integerProperty";
        readonly title: "Integer property";
        readonly type: "object";
        readonly unevaluatedProperties: false;
        readonly properties: {
            readonly type: {
                readonly enum: readonly ["integer"];
            };
            readonly title: {
                readonly type: "string";
            };
            readonly description: {
                readonly type: "string";
            };
            readonly prefill: {
                readonly type: "integer";
            };
            readonly example: {
                readonly type: "integer";
            };
            readonly nullable: {
                readonly type: "boolean";
            };
            readonly minimum: {
                readonly type: "integer";
            };
            readonly maximum: {
                readonly type: "integer";
            };
            readonly unit: {
                readonly type: "string";
            };
            readonly editor: {
                readonly enum: readonly ["number", "hidden"];
            };
            readonly sectionCaption: {
                readonly type: "string";
            };
            readonly sectionDescription: {
                readonly type: "string";
            };
        };
        readonly required: readonly ["type", "title", "description"];
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
                    readonly type: "integer";
                };
            };
        };
        readonly else: {
            readonly properties: {
                readonly default: {
                    readonly type: readonly ["integer", "null"];
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=integer-property.d.ts.map