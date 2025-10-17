import { FromSchema } from 'json-schema-to-ts';
declare const numberProperty: {
    readonly $id: "numberProperty";
    readonly title: "Number property";
    readonly type: "object";
    readonly unevaluatedProperties: false;
    readonly properties: {
        readonly type: {
            readonly enum: readonly ["number"];
        };
        readonly title: {
            readonly type: "string";
        };
        readonly description: {
            readonly type: "string";
        };
        readonly prefill: {
            readonly type: "number";
        };
        readonly example: {
            readonly type: "number";
        };
        readonly nullable: {
            readonly type: "boolean";
        };
        readonly minimum: {
            readonly type: "number";
        };
        readonly maximum: {
            readonly type: "number";
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
                readonly type: "number";
            };
        };
    };
    readonly else: {
        readonly properties: {
            readonly default: {
                readonly type: readonly ["number", "null"];
            };
        };
    };
};
export type NumberProperty = FromSchema<typeof numberProperty, {
    keepDefaultedPropertiesOptional: true;
    parseIfThenElseKeywords: true;
    parseNotKeyword: true;
}>;
export type InferNumberProperty<T extends {
    readonly type: 'number';
    readonly nullable?: boolean;
}> = T['nullable'] extends true ? number | null : number;
export type NumberPropertyDependencies = [];
declare const _default: {
    schema: {
        readonly $id: "numberProperty";
        readonly title: "Number property";
        readonly type: "object";
        readonly unevaluatedProperties: false;
        readonly properties: {
            readonly type: {
                readonly enum: readonly ["number"];
            };
            readonly title: {
                readonly type: "string";
            };
            readonly description: {
                readonly type: "string";
            };
            readonly prefill: {
                readonly type: "number";
            };
            readonly example: {
                readonly type: "number";
            };
            readonly nullable: {
                readonly type: "boolean";
            };
            readonly minimum: {
                readonly type: "number";
            };
            readonly maximum: {
                readonly type: "number";
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
                    readonly type: "number";
                };
            };
        };
        readonly else: {
            readonly properties: {
                readonly default: {
                    readonly type: readonly ["number", "null"];
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=number-property.d.ts.map