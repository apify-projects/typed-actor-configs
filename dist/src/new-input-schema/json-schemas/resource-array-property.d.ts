import { FromSchema } from 'json-schema-to-ts';
declare const resourceArrayProperty: {
    readonly $id: "resourceArrayProperty";
    readonly title: "Resource array property";
    readonly type: "object";
    readonly unevaluatedProperties: false;
    readonly properties: {
        readonly type: {
            readonly enum: readonly ["array"];
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
            readonly type: "array";
        };
        readonly example: {
            readonly type: "array";
        };
        readonly nullable: {
            readonly type: "boolean";
        };
        readonly minItems: {
            readonly type: "integer";
        };
        readonly maxItems: {
            readonly type: "integer";
        };
        readonly uniqueItems: {
            readonly type: "boolean";
        };
        readonly resourceType: {
            readonly enum: readonly ["dataset", "keyValueStore", "requestQueue"];
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
                    readonly type: "array";
                };
            };
        };
        readonly else: {
            readonly properties: {
                readonly default: {
                    readonly type: readonly ["array", "null"];
                };
            };
        };
    }];
};
export type ResourceArrayProperty = FromSchema<typeof resourceArrayProperty, {
    keepDefaultedPropertiesOptional: true;
    parseIfThenElseKeywords: true;
    parseNotKeyword: true;
}>;
export type InferResourceArrayProperty<T extends {
    readonly type: 'array';
    resourceType: string;
    readonly nullable?: boolean;
}> = T['nullable'] extends true ? string[] | null : string[];
export type ResourceArrayPropertyDependencies = [];
declare const _default: {
    schema: {
        readonly $id: "resourceArrayProperty";
        readonly title: "Resource array property";
        readonly type: "object";
        readonly unevaluatedProperties: false;
        readonly properties: {
            readonly type: {
                readonly enum: readonly ["array"];
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
                readonly type: "array";
            };
            readonly example: {
                readonly type: "array";
            };
            readonly nullable: {
                readonly type: "boolean";
            };
            readonly minItems: {
                readonly type: "integer";
            };
            readonly maxItems: {
                readonly type: "integer";
            };
            readonly uniqueItems: {
                readonly type: "boolean";
            };
            readonly resourceType: {
                readonly enum: readonly ["dataset", "keyValueStore", "requestQueue"];
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
                        readonly type: "array";
                    };
                };
            };
            readonly else: {
                readonly properties: {
                    readonly default: {
                        readonly type: readonly ["array", "null"];
                    };
                };
            };
        }];
    };
};
export default _default;
//# sourceMappingURL=resource-array-property.d.ts.map