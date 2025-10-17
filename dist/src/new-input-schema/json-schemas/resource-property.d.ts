import { FromSchema } from 'json-schema-to-ts';
declare const resourceProperty: {
    readonly $id: "resourceProperty";
    readonly title: "Resource property";
    readonly type: "object";
    readonly unevaluatedProperties: false;
    readonly properties: {
        readonly type: {
            readonly enum: readonly ["string"];
        };
        readonly title: {
            readonly type: "string";
        };
        readonly description: {
            readonly type: "string";
        };
        readonly editor: {
            readonly enum: readonly ["resourcePicker", "hidden"];
        };
        readonly resourceType: {
            readonly enum: readonly ["dataset", "keyValueStore", "requestQueue"];
        };
        readonly resourcePermissions: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
                readonly enum: readonly ["READ", "WRITE"];
            };
            readonly minItems: 1;
            readonly uniqueItems: true;
            readonly contains: {
                readonly const: "READ";
            };
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
    };
    readonly required: readonly ["type", "title", "description", "resourceType"];
    readonly allOf: readonly [{
        readonly if: {
            readonly required: readonly ["resourcePermissions"];
        };
        readonly then: {
            readonly not: {
                readonly anyOf: readonly [{
                    readonly required: readonly ["prefill"];
                }, {
                    readonly required: readonly ["default"];
                }];
            };
        };
    }, {
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
    }];
};
export type ResourceProperty = FromSchema<typeof resourceProperty, {
    keepDefaultedPropertiesOptional: true;
    parseIfThenElseKeywords: true;
    parseNotKeyword: true;
}>;
export type InferResourceProperty<T extends {
    readonly type: 'string';
    resourceType: string;
    readonly nullable?: boolean;
}> = T['nullable'] extends true ? string | null : string;
export type ResourcePropertyDependencies = [];
declare const _default: {
    schema: {
        readonly $id: "resourceProperty";
        readonly title: "Resource property";
        readonly type: "object";
        readonly unevaluatedProperties: false;
        readonly properties: {
            readonly type: {
                readonly enum: readonly ["string"];
            };
            readonly title: {
                readonly type: "string";
            };
            readonly description: {
                readonly type: "string";
            };
            readonly editor: {
                readonly enum: readonly ["resourcePicker", "hidden"];
            };
            readonly resourceType: {
                readonly enum: readonly ["dataset", "keyValueStore", "requestQueue"];
            };
            readonly resourcePermissions: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                    readonly enum: readonly ["READ", "WRITE"];
                };
                readonly minItems: 1;
                readonly uniqueItems: true;
                readonly contains: {
                    readonly const: "READ";
                };
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
        };
        readonly required: readonly ["type", "title", "description", "resourceType"];
        readonly allOf: readonly [{
            readonly if: {
                readonly required: readonly ["resourcePermissions"];
            };
            readonly then: {
                readonly not: {
                    readonly anyOf: readonly [{
                        readonly required: readonly ["prefill"];
                    }, {
                        readonly required: readonly ["default"];
                    }];
                };
            };
        }, {
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
        }];
    };
};
export default _default;
//# sourceMappingURL=resource-property.d.ts.map