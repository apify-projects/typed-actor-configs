import { FromSchema } from 'json-schema-to-ts';
declare const booleanProperty: {
    readonly $id: "booleanProperty";
    readonly title: "Boolean property";
    readonly type: "object";
    readonly unevaluatedProperties: false;
    readonly properties: {
        readonly type: {
            readonly enum: readonly ["boolean"];
        };
        readonly title: {
            readonly type: "string";
        };
        readonly description: {
            readonly type: "string";
        };
        readonly prefill: {
            readonly type: "boolean";
        };
        readonly example: {
            readonly type: "boolean";
        };
        readonly nullable: {
            readonly type: "boolean";
        };
        readonly groupCaption: {
            readonly type: "string";
        };
        readonly groupDescription: {
            readonly type: "string";
        };
        readonly editor: {
            readonly enum: readonly ["checkbox", "hidden"];
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
                readonly type: "boolean";
            };
        };
    };
    readonly else: {
        readonly properties: {
            readonly default: {
                readonly type: readonly ["boolean", "null"];
            };
        };
    };
};
export type BooleanProperty = FromSchema<typeof booleanProperty, {
    keepDefaultedPropertiesOptional: true;
    parseIfThenElseKeywords: true;
    parseNotKeyword: true;
}>;
export type InferBooleanProperty<T extends {
    readonly type: 'boolean';
    readonly nullable?: boolean;
}> = T['nullable'] extends true ? boolean | null : boolean;
export type BooleanPropertyDependencies = [];
declare const _default: {
    schema: {
        readonly $id: "booleanProperty";
        readonly title: "Boolean property";
        readonly type: "object";
        readonly unevaluatedProperties: false;
        readonly properties: {
            readonly type: {
                readonly enum: readonly ["boolean"];
            };
            readonly title: {
                readonly type: "string";
            };
            readonly description: {
                readonly type: "string";
            };
            readonly prefill: {
                readonly type: "boolean";
            };
            readonly example: {
                readonly type: "boolean";
            };
            readonly nullable: {
                readonly type: "boolean";
            };
            readonly groupCaption: {
                readonly type: "string";
            };
            readonly groupDescription: {
                readonly type: "string";
            };
            readonly editor: {
                readonly enum: readonly ["checkbox", "hidden"];
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
                    readonly type: "boolean";
                };
            };
        };
        readonly else: {
            readonly properties: {
                readonly default: {
                    readonly type: readonly ["boolean", "null"];
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=boolean-property.d.ts.map