import { FromSchema } from 'json-schema-to-ts';
import subObjectPropertyProxy, { InferSubObjectPropertyProxy, SubObjectPropertyProxy, SubObjectPropertyProxyDependencies } from './subproperties/sub-object-property-proxy.ts';
import subObjectProperty, { type InferSubObjectProperty, type SubObjectProperty, type SubObjectPropertyDependencies } from './subproperties/sub-object-property.ts';
import { RequiredKeys } from './types.ts';
declare const objectProperty: {
    readonly $id: "objectProperty";
    readonly title: "Object property";
    readonly type: "object";
    readonly properties: {
        readonly type: {
            readonly enum: readonly ["object"];
        };
        readonly title: {
            readonly type: "string";
        };
        readonly description: {
            readonly type: "string";
        };
        readonly editor: {
            readonly enum: readonly ["json", "proxy", "schemaBased", "hidden"];
        };
        readonly isSecret: {
            readonly type: "boolean";
        };
    };
    readonly required: readonly ["type", "title", "description", "editor"];
    readonly if: {
        readonly properties: {
            readonly isSecret: {
                readonly not: {
                    readonly const: true;
                };
            };
        };
    };
    readonly then: {
        readonly properties: {
            readonly type: {
                readonly enum: readonly ["object"];
            };
            readonly title: {
                readonly type: "string";
            };
            readonly description: {
                readonly type: "string";
            };
            readonly prefill: {
                readonly type: "object";
            };
            readonly example: {
                readonly type: "object";
            };
            readonly patternKey: {
                readonly type: "string";
            };
            readonly patternValue: {
                readonly type: "string";
            };
            readonly nullable: {
                readonly type: "boolean";
            };
            readonly minProperties: {
                readonly type: "integer";
            };
            readonly maxProperties: {
                readonly type: "integer";
            };
            readonly editor: {
                readonly enum: readonly ["json", "proxy", "schemaBased", "hidden"];
            };
            readonly sectionCaption: {
                readonly type: "string";
            };
            readonly sectionDescription: {
                readonly type: "string";
            };
            readonly isSecret: {
                readonly enum: readonly [false];
            };
            readonly required: {
                readonly type: "array";
                readonly minItems: 0;
                readonly items: {
                    readonly type: "string";
                };
                readonly uniqueItems: true;
            };
            readonly additionalProperties: {
                readonly type: "boolean";
            };
        };
        readonly unevaluatedProperties: false;
        readonly allOf: readonly [{
            readonly oneOf: readonly [{
                readonly properties: {
                    readonly editor: {
                        readonly enum: readonly ["proxy"];
                    };
                    readonly properties: {
                        readonly $ref: "subObjectPropertiesProxy";
                    };
                };
            }, {
                readonly properties: {
                    readonly editor: {
                        readonly enum: readonly ["json", "schemaBased", "hidden"];
                    };
                    readonly properties: {
                        readonly $ref: "subObjectProperties";
                    };
                };
            }];
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
                        readonly type: "object";
                    };
                };
            };
            readonly else: {
                readonly properties: {
                    readonly default: {
                        readonly type: readonly ["object", "null"];
                    };
                };
            };
        }];
    };
    readonly else: {
        readonly additionalProperties: false;
        readonly properties: {
            readonly type: {
                readonly enum: readonly ["object"];
            };
            readonly title: {
                readonly type: "string";
            };
            readonly description: {
                readonly type: "string";
            };
            readonly prefill: {
                readonly type: "object";
            };
            readonly example: {
                readonly type: "object";
            };
            readonly patternKey: {
                readonly type: "string";
            };
            readonly patternValue: {
                readonly type: "string";
            };
            readonly nullable: {
                readonly type: "boolean";
            };
            readonly minProperties: {
                readonly type: "integer";
            };
            readonly maxProperties: {
                readonly type: "integer";
            };
            readonly editor: {
                readonly enum: readonly ["json", "hidden"];
            };
            readonly sectionCaption: {
                readonly type: "string";
            };
            readonly sectionDescription: {
                readonly type: "string";
            };
            readonly properties: {
                readonly $ref: "subObjectProperties";
            };
            readonly isSecret: {
                readonly enum: readonly [true];
            };
            readonly required: {
                readonly type: "array";
                readonly minItems: 0;
                readonly items: {
                    readonly type: "string";
                };
                readonly uniqueItems: true;
            };
            readonly additionalProperties: {
                readonly type: "boolean";
            };
        };
    };
};
export type ObjectProperty = FromSchema<typeof objectProperty, {
    keepDefaultedPropertiesOptional: true;
    parseIfThenElseKeywords: true;
    parseNotKeyword: true;
    references: [
        typeof subObjectPropertyProxy.schema,
        ...SubObjectPropertyProxyDependencies,
        typeof subObjectProperty.schema,
        ...SubObjectPropertyDependencies
    ];
}>;
export type InferObjectProperty<T extends ObjectProperty> = T extends {
    properties: object;
} ? T['properties'] extends SubObjectProperty ? InferSubObjectProperty<T['properties'], RequiredKeys<T>> : T['properties'] extends SubObjectPropertyProxy ? InferSubObjectPropertyProxy<T['properties']> : never : unknown;
export type ObjectPropertyDependencies = [
    typeof subObjectPropertyProxy.schema,
    ...SubObjectPropertyProxyDependencies,
    typeof subObjectProperty.schema,
    ...SubObjectPropertyDependencies
];
declare const _default: {
    schema: {
        readonly $id: "objectProperty";
        readonly title: "Object property";
        readonly type: "object";
        readonly properties: {
            readonly type: {
                readonly enum: readonly ["object"];
            };
            readonly title: {
                readonly type: "string";
            };
            readonly description: {
                readonly type: "string";
            };
            readonly editor: {
                readonly enum: readonly ["json", "proxy", "schemaBased", "hidden"];
            };
            readonly isSecret: {
                readonly type: "boolean";
            };
        };
        readonly required: readonly ["type", "title", "description", "editor"];
        readonly if: {
            readonly properties: {
                readonly isSecret: {
                    readonly not: {
                        readonly const: true;
                    };
                };
            };
        };
        readonly then: {
            readonly properties: {
                readonly type: {
                    readonly enum: readonly ["object"];
                };
                readonly title: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly prefill: {
                    readonly type: "object";
                };
                readonly example: {
                    readonly type: "object";
                };
                readonly patternKey: {
                    readonly type: "string";
                };
                readonly patternValue: {
                    readonly type: "string";
                };
                readonly nullable: {
                    readonly type: "boolean";
                };
                readonly minProperties: {
                    readonly type: "integer";
                };
                readonly maxProperties: {
                    readonly type: "integer";
                };
                readonly editor: {
                    readonly enum: readonly ["json", "proxy", "schemaBased", "hidden"];
                };
                readonly sectionCaption: {
                    readonly type: "string";
                };
                readonly sectionDescription: {
                    readonly type: "string";
                };
                readonly isSecret: {
                    readonly enum: readonly [false];
                };
                readonly required: {
                    readonly type: "array";
                    readonly minItems: 0;
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly uniqueItems: true;
                };
                readonly additionalProperties: {
                    readonly type: "boolean";
                };
            };
            readonly unevaluatedProperties: false;
            readonly allOf: readonly [{
                readonly oneOf: readonly [{
                    readonly properties: {
                        readonly editor: {
                            readonly enum: readonly ["proxy"];
                        };
                        readonly properties: {
                            readonly $ref: "subObjectPropertiesProxy";
                        };
                    };
                }, {
                    readonly properties: {
                        readonly editor: {
                            readonly enum: readonly ["json", "schemaBased", "hidden"];
                        };
                        readonly properties: {
                            readonly $ref: "subObjectProperties";
                        };
                    };
                }];
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
                            readonly type: "object";
                        };
                    };
                };
                readonly else: {
                    readonly properties: {
                        readonly default: {
                            readonly type: readonly ["object", "null"];
                        };
                    };
                };
            }];
        };
        readonly else: {
            readonly additionalProperties: false;
            readonly properties: {
                readonly type: {
                    readonly enum: readonly ["object"];
                };
                readonly title: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly prefill: {
                    readonly type: "object";
                };
                readonly example: {
                    readonly type: "object";
                };
                readonly patternKey: {
                    readonly type: "string";
                };
                readonly patternValue: {
                    readonly type: "string";
                };
                readonly nullable: {
                    readonly type: "boolean";
                };
                readonly minProperties: {
                    readonly type: "integer";
                };
                readonly maxProperties: {
                    readonly type: "integer";
                };
                readonly editor: {
                    readonly enum: readonly ["json", "hidden"];
                };
                readonly sectionCaption: {
                    readonly type: "string";
                };
                readonly sectionDescription: {
                    readonly type: "string";
                };
                readonly properties: {
                    readonly $ref: "subObjectProperties";
                };
                readonly isSecret: {
                    readonly enum: readonly [true];
                };
                readonly required: {
                    readonly type: "array";
                    readonly minItems: 0;
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly uniqueItems: true;
                };
                readonly additionalProperties: {
                    readonly type: "boolean";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=object-property.d.ts.map