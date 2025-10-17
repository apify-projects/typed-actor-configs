import { FromSchema } from 'json-schema-to-ts';
type Minimal<T extends {
    title: string;
    description: string;
}> = Omit<T, 'title' | 'description' | 'sectionCaption' | 'sectionDescription' | 'prefill' | 'example'>;
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
export type MinimalStringEnumProperty = Minimal<StringEnumProperty>;
declare const stringProperty: {
    readonly $id: "stringProperty";
    readonly title: "String property";
    readonly type: "object";
    readonly additionalProperties: true;
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
        readonly nullable: {
            readonly type: "boolean";
        };
        readonly editor: {
            readonly enum: readonly ["javascript", "python", "textfield", "textarea", "datepicker", "hidden", "fileupload"];
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
                readonly enum: readonly ["string"];
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
            readonly pattern: {
                readonly type: "string";
            };
            readonly nullable: {
                readonly type: "boolean";
            };
            readonly minLength: {
                readonly type: "integer";
            };
            readonly maxLength: {
                readonly type: "integer";
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
        };
        readonly unevaluatedProperties: false;
        readonly allOf: readonly [{
            readonly if: {
                readonly properties: {
                    readonly editor: {
                        readonly const: "datepicker";
                    };
                };
            };
            readonly then: {
                readonly properties: {
                    readonly editor: {
                        readonly enum: readonly ["datepicker"];
                    };
                    readonly dateType: {
                        readonly enum: readonly ["absolute", "relative", "absoluteOrRelative"];
                    };
                };
            };
            readonly else: {
                readonly properties: {
                    readonly editor: {
                        readonly enum: readonly ["javascript", "python", "textfield", "textarea", "hidden", "fileupload"];
                    };
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
    readonly else: {
        readonly additionalProperties: false;
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
            readonly prefill: {
                readonly type: "string";
            };
            readonly example: {
                readonly type: "string";
            };
            readonly nullable: {
                readonly type: "boolean";
            };
            readonly editor: {
                readonly enum: readonly ["textfield", "textarea", "hidden"];
            };
            readonly isSecret: {
                readonly enum: readonly [true];
            };
            readonly sectionCaption: {
                readonly type: "string";
            };
            readonly sectionDescription: {
                readonly type: "string";
            };
        };
    };
};
export type StringProperty = FromSchema<typeof stringProperty, {
    keepDefaultedPropertiesOptional: true;
    parseIfThenElseKeywords: true;
    parseNotKeyword: true;
}>;
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
declare const arrayProperty: {
    readonly $id: "arrayProperty";
    readonly title: "Array property";
    readonly type: "object";
    readonly properties: {
        readonly type: {
            readonly enum: readonly ["array"];
        };
        readonly editor: {
            readonly enum: readonly ["json", "requestListSources", "pseudoUrls", "globs", "keyValue", "stringList", "fileupload", "select", "schemaBased", "hidden"];
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
                readonly enum: readonly ["array"];
            };
            readonly title: {
                readonly type: "string";
            };
            readonly description: {
                readonly type: "string";
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
            readonly sectionCaption: {
                readonly type: "string";
            };
            readonly sectionDescription: {
                readonly type: "string";
            };
            readonly placeholderKey: {
                readonly type: "string";
            };
            readonly placeholderValue: {
                readonly type: "string";
            };
            readonly patternKey: {
                readonly type: "string";
            };
            readonly patternValue: {
                readonly type: "string";
            };
            readonly isSecret: {
                readonly enum: readonly [false];
            };
        };
        readonly unevaluatedProperties: false;
        readonly allOf: readonly [{
            readonly oneOf: readonly [{
                readonly required: readonly ["editor"];
                readonly properties: {
                    readonly editor: {
                        readonly enum: readonly ["select"];
                    };
                    readonly items: {
                        readonly $ref: "#/definitions/arrayItemsSelect";
                    };
                };
            }, {
                readonly required: readonly ["editor"];
                readonly properties: {
                    readonly editor: {
                        readonly enum: readonly ["keyValue"];
                    };
                    readonly items: {
                        readonly $ref: "#/definitions/arrayItemsKeyValue";
                    };
                };
            }, {
                readonly required: readonly ["editor"];
                readonly properties: {
                    readonly editor: {
                        readonly enum: readonly ["fileupload"];
                    };
                    readonly items: {
                        readonly $ref: "#/definitions/arrayItemsFileupload";
                    };
                };
            }, {
                readonly required: readonly ["editor"];
                readonly properties: {
                    readonly editor: {
                        readonly enum: readonly ["stringList"];
                    };
                    readonly items: {
                        readonly $ref: "#/definitions/arrayItemsStringList";
                    };
                };
            }, {
                readonly required: readonly ["editor"];
                readonly properties: {
                    readonly editor: {
                        readonly enum: readonly ["globs"];
                    };
                    readonly items: {
                        readonly $ref: "#/definitions/arrayItemsGlobs";
                    };
                };
            }, {
                readonly required: readonly ["editor"];
                readonly properties: {
                    readonly editor: {
                        readonly enum: readonly ["pseudoUrls"];
                    };
                    readonly items: {
                        readonly $ref: "#/definitions/arrayItemsPseudoUrls";
                    };
                };
            }, {
                readonly required: readonly ["editor"];
                readonly properties: {
                    readonly editor: {
                        readonly enum: readonly ["requestListSources"];
                    };
                    readonly items: {
                        readonly $ref: "#/definitions/arrayItemsRequestListSources";
                    };
                };
            }, {
                readonly required: readonly ["editor"];
                readonly properties: {
                    readonly editor: {
                        readonly enum: readonly ["json", "schemaBased", "hidden"];
                    };
                    readonly items: {
                        readonly $ref: "#/definitions/arrayItems";
                    };
                };
            }, {
                readonly not: {
                    readonly required: readonly ["editor"];
                };
                readonly properties: {
                    readonly items: {
                        readonly $ref: "#/definitions/arrayItems";
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
    readonly else: {
        readonly additionalProperties: false;
        readonly properties: {
            readonly type: {
                readonly enum: readonly ["array"];
            };
            readonly editor: {
                readonly enum: readonly ["json", "hidden"];
            };
            readonly title: {
                readonly type: "string";
            };
            readonly description: {
                readonly type: "string";
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
            readonly sectionCaption: {
                readonly type: "string";
            };
            readonly sectionDescription: {
                readonly type: "string";
            };
            readonly items: {
                readonly $ref: "#/definitions/arrayItems";
            };
            readonly isSecret: {
                readonly enum: readonly [true];
            };
        };
    };
    readonly definitions: {
        readonly arrayItems: {
            readonly title: "Utils: Array items definition";
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly enum: readonly ["string", "integer", "boolean", "object"];
                };
            };
            readonly required: readonly ["type"];
            readonly if: {
                readonly properties: {
                    readonly type: {
                        readonly enum: readonly ["object"];
                    };
                };
            };
            readonly then: {
                readonly additionalProperties: false;
                readonly properties: {
                    readonly type: {
                        readonly enum: readonly ["object"];
                    };
                    readonly properties: {
                        readonly type: "object";
                        readonly patternProperties: {
                            readonly '^': {
                                readonly oneOf: readonly [{
                                    readonly $ref: "#/definitions/subSchemaStringProperty";
                                }, {
                                    readonly $ref: "#/definitions/subSchemaStringEnumProperty";
                                }, {
                                    readonly $ref: "#/definitions/subSchemaArrayProperty";
                                }, {
                                    readonly $ref: "#/definitions/subSchemaObjectProperty";
                                }, {
                                    readonly $ref: "#/definitions/subSchemaIntegerProperty";
                                }, {
                                    readonly $ref: "#/definitions/subSchemaNumberProperty";
                                }, {
                                    readonly $ref: "#/definitions/subSchemaBooleanProperty";
                                }, {
                                    readonly $ref: "#/definitions/subSchemaResourceProperty";
                                }, {
                                    readonly $ref: "#/definitions/subSchemaResourceArrayProperty";
                                }];
                            };
                        };
                        readonly additionalProperties: false;
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
            readonly else: {
                readonly additionalProperties: false;
                readonly properties: {
                    readonly type: {
                        readonly enum: readonly ["string", "integer", "boolean"];
                    };
                };
            };
        };
        readonly arrayItemsSelect: {
            readonly title: "Utils: Array items select definition";
            readonly type: "object";
            readonly additionalProperties: false;
            readonly properties: {
                readonly type: {
                    readonly enum: readonly ["string"];
                };
                readonly enum: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly uniqueItems: true;
                };
                readonly enumTitles: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
            };
            readonly required: readonly ["type", "enum"];
        };
        readonly arrayItemsKeyValue: {
            readonly title: "Utils: Array items keyValue definition";
            readonly type: "object";
            readonly additionalProperties: false;
            readonly properties: {
                readonly type: {
                    readonly enum: readonly ["object"];
                };
                readonly properties: {
                    readonly type: "object";
                    readonly properties: {
                        readonly key: {
                            readonly type: "object";
                            readonly additionalProperties: false;
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
                                readonly pattern: {
                                    readonly type: "string";
                                };
                                readonly minLength: {
                                    readonly type: "integer";
                                };
                                readonly maxLength: {
                                    readonly type: "integer";
                                };
                            };
                            readonly required: readonly ["type"];
                        };
                        readonly value: {
                            readonly type: "object";
                            readonly additionalProperties: false;
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
                                readonly pattern: {
                                    readonly type: "string";
                                };
                                readonly minLength: {
                                    readonly type: "integer";
                                };
                                readonly maxLength: {
                                    readonly type: "integer";
                                };
                            };
                            readonly required: readonly ["type"];
                        };
                    };
                    readonly required: readonly ["key", "value"];
                    readonly additionalProperties: false;
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
            readonly required: readonly ["type", "properties"];
        };
        readonly arrayItemsStringList: {
            readonly title: "Utils: Array items stringList definition";
            readonly type: "object";
            readonly additionalProperties: false;
            readonly properties: {
                readonly type: {
                    readonly enum: readonly ["string"];
                };
                readonly pattern: {
                    readonly type: "string";
                };
                readonly minLength: {
                    readonly type: "integer";
                };
                readonly maxLength: {
                    readonly type: "integer";
                };
            };
            readonly required: readonly ["type"];
        };
        readonly arrayItemsFileupload: {
            readonly title: "Utils: Array items fileupload definition";
            readonly type: "object";
            readonly additionalProperties: false;
            readonly properties: {
                readonly type: {
                    readonly enum: readonly ["string"];
                };
                readonly pattern: {
                    readonly type: "string";
                };
                readonly minLength: {
                    readonly type: "integer";
                };
                readonly maxLength: {
                    readonly type: "integer";
                };
            };
            readonly required: readonly ["type"];
        };
        readonly arrayItemsGlobs: {
            readonly title: "Utils: Array items globs definition";
            readonly type: "object";
            readonly additionalProperties: false;
            readonly properties: {
                readonly type: {
                    readonly enum: readonly ["object"];
                };
                readonly properties: {
                    readonly type: "object";
                    readonly additionalProperties: false;
                    readonly properties: {
                        readonly glob: {
                            readonly type: "object";
                            readonly additionalProperties: false;
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
                                readonly pattern: {
                                    readonly type: "string";
                                };
                                readonly minLength: {
                                    readonly type: "integer";
                                };
                                readonly maxLength: {
                                    readonly type: "integer";
                                };
                            };
                            readonly required: readonly ["type"];
                        };
                        readonly method: {
                            readonly type: "object";
                            readonly additionalProperties: false;
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
                                readonly pattern: {
                                    readonly type: "string";
                                };
                                readonly minLength: {
                                    readonly type: "integer";
                                };
                                readonly maxLength: {
                                    readonly type: "integer";
                                };
                            };
                            readonly required: readonly ["type"];
                        };
                        readonly payload: {
                            readonly type: "object";
                            readonly additionalProperties: false;
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
                                readonly pattern: {
                                    readonly type: "string";
                                };
                                readonly minLength: {
                                    readonly type: "integer";
                                };
                                readonly maxLength: {
                                    readonly type: "integer";
                                };
                            };
                            readonly required: readonly ["type"];
                        };
                        readonly userData: {
                            readonly type: "object";
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
                                readonly properties: {
                                    readonly type: "object";
                                };
                            };
                            readonly required: readonly ["type"];
                        };
                        readonly headers: {
                            readonly type: "object";
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
                                readonly properties: {
                                    readonly type: "object";
                                };
                            };
                            readonly required: readonly ["type"];
                        };
                    };
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
            readonly required: readonly ["type"];
        };
        readonly arrayItemsPseudoUrls: {
            readonly title: "Utils: Array items pseudoUrls definition";
            readonly type: "object";
            readonly additionalProperties: false;
            readonly properties: {
                readonly type: {
                    readonly enum: readonly ["object"];
                };
                readonly properties: {
                    readonly type: "object";
                    readonly additionalProperties: false;
                    readonly properties: {
                        readonly purl: {
                            readonly type: "object";
                            readonly additionalProperties: false;
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
                                readonly pattern: {
                                    readonly type: "string";
                                };
                                readonly minLength: {
                                    readonly type: "integer";
                                };
                                readonly maxLength: {
                                    readonly type: "integer";
                                };
                            };
                            readonly required: readonly ["type"];
                        };
                        readonly method: {
                            readonly type: "object";
                            readonly additionalProperties: false;
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
                                readonly pattern: {
                                    readonly type: "string";
                                };
                                readonly minLength: {
                                    readonly type: "integer";
                                };
                                readonly maxLength: {
                                    readonly type: "integer";
                                };
                            };
                            readonly required: readonly ["type"];
                        };
                        readonly payload: {
                            readonly type: "object";
                            readonly additionalProperties: false;
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
                                readonly pattern: {
                                    readonly type: "string";
                                };
                                readonly minLength: {
                                    readonly type: "integer";
                                };
                                readonly maxLength: {
                                    readonly type: "integer";
                                };
                            };
                            readonly required: readonly ["type"];
                        };
                        readonly userData: {
                            readonly type: "object";
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
                                readonly properties: {
                                    readonly type: "object";
                                };
                            };
                            readonly required: readonly ["type"];
                        };
                        readonly headers: {
                            readonly type: "object";
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
                                readonly properties: {
                                    readonly type: "object";
                                };
                            };
                            readonly required: readonly ["type"];
                        };
                    };
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
            readonly required: readonly ["type"];
        };
        readonly arrayItemsRequestListSources: {
            readonly title: "Utils: Array items requestListSources definition";
            readonly type: "object";
            readonly additionalProperties: false;
            readonly properties: {
                readonly type: {
                    readonly enum: readonly ["object"];
                };
                readonly properties: {
                    readonly type: "object";
                    readonly additionalProperties: false;
                    readonly properties: {
                        readonly url: {
                            readonly type: "object";
                            readonly additionalProperties: false;
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
                                readonly pattern: {
                                    readonly type: "string";
                                };
                                readonly minLength: {
                                    readonly type: "integer";
                                };
                                readonly maxLength: {
                                    readonly type: "integer";
                                };
                            };
                            readonly required: readonly ["type"];
                        };
                        readonly method: {
                            readonly type: "object";
                            readonly additionalProperties: false;
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
                                readonly pattern: {
                                    readonly type: "string";
                                };
                                readonly minLength: {
                                    readonly type: "integer";
                                };
                                readonly maxLength: {
                                    readonly type: "integer";
                                };
                            };
                            readonly required: readonly ["type"];
                        };
                        readonly payload: {
                            readonly type: "object";
                            readonly additionalProperties: false;
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
                                readonly pattern: {
                                    readonly type: "string";
                                };
                                readonly minLength: {
                                    readonly type: "integer";
                                };
                                readonly maxLength: {
                                    readonly type: "integer";
                                };
                            };
                            readonly required: readonly ["type"];
                        };
                        readonly userData: {
                            readonly type: "object";
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
                                readonly properties: {
                                    readonly type: "object";
                                };
                            };
                            readonly required: readonly ["type"];
                        };
                        readonly headers: {
                            readonly type: "object";
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
                                readonly properties: {
                                    readonly type: "object";
                                };
                            };
                            readonly required: readonly ["type"];
                        };
                    };
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
            readonly required: readonly ["type"];
        };
    };
};
export type ArrayProperty = FromSchema<typeof arrayProperty, {
    keepDefaultedPropertiesOptional: true;
    parseIfThenElseKeywords: true;
    parseNotKeyword: true;
}>;
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
declare const subObjectPropertiesProxy: {
    readonly $id: "subObjectPropertiesProxy";
    readonly title: "Utils: Sub-object properties proxy definition";
    readonly type: "object";
    readonly additionalProperties: false;
    readonly properties: {
        readonly useApifyProxy: {
            readonly type: "object";
            readonly additionalProperties: false;
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
            };
            readonly required: readonly ["type"];
        };
        readonly apifyProxyGroups: {
            readonly type: "object";
            readonly additionalProperties: false;
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
                readonly items: {
                    readonly type: readonly ["object"];
                    readonly properties: {
                        readonly type: {
                            readonly enum: readonly ["string"];
                        };
                    };
                    readonly additionalProperties: false;
                    readonly required: readonly ["type"];
                };
            };
            readonly required: readonly ["type"];
        };
        readonly proxyUrls: {
            readonly type: "object";
            readonly additionalProperties: false;
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
                readonly items: {
                    readonly type: readonly ["object"];
                    readonly properties: {
                        readonly type: {
                            readonly enum: readonly ["string"];
                        };
                    };
                    readonly additionalProperties: false;
                    readonly required: readonly ["type"];
                };
            };
            readonly required: readonly ["type"];
        };
        readonly apifyProxyCountry: {
            readonly type: "object";
            readonly additionalProperties: false;
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
                readonly pattern: {
                    readonly type: "string";
                };
                readonly minLength: {
                    readonly type: "integer";
                };
                readonly maxLength: {
                    readonly type: "integer";
                };
            };
            readonly required: readonly ["type"];
        };
    };
};
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
declare const subSchemaStringProperty: {
    readonly $id: "subSchemaStringProperty";
    readonly title: "Sub-schema: String property";
    readonly type: "object";
    readonly additionalProperties: true;
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
        readonly nullable: {
            readonly type: "boolean";
        };
        readonly editor: {
            readonly enum: readonly ["javascript", "python", "textfield", "textarea", "datepicker", "hidden", "fileupload"];
        };
    };
    readonly required: readonly ["type", "title", "description"];
    readonly if: {
        readonly properties: {
            readonly editor: {
                readonly const: "datepicker";
            };
        };
    };
    readonly then: {
        readonly additionalProperties: false;
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
            readonly pattern: {
                readonly type: "string";
            };
            readonly nullable: {
                readonly type: "boolean";
            };
            readonly minLength: {
                readonly type: "integer";
            };
            readonly maxLength: {
                readonly type: "integer";
            };
            readonly editor: {
                readonly enum: readonly ["datepicker"];
            };
            readonly dateType: {
                readonly enum: readonly ["absolute", "relative", "absoluteOrRelative"];
            };
        };
    };
    readonly else: {
        readonly additionalProperties: false;
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
            readonly pattern: {
                readonly type: "string";
            };
            readonly nullable: {
                readonly type: "boolean";
            };
            readonly minLength: {
                readonly type: "integer";
            };
            readonly maxLength: {
                readonly type: "integer";
            };
            readonly editor: {
                readonly enum: readonly ["javascript", "python", "textfield", "textarea", "hidden", "fileupload"];
            };
        };
    };
};
declare const subSchemaArrayProperty: {
    readonly $id: "subSchemaArrayProperty";
    readonly title: "Sub-schema: Array property";
    readonly type: "object";
    readonly properties: {
        readonly type: {
            readonly enum: readonly ["array"];
        };
        readonly editor: {
            readonly enum: readonly ["json", "requestListSources", "pseudoUrls", "globs", "keyValue", "stringList", "fileupload", "select", "hidden"];
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
        readonly minItems: {
            readonly type: "integer";
        };
        readonly maxItems: {
            readonly type: "integer";
        };
        readonly uniqueItems: {
            readonly type: "boolean";
        };
        readonly placeholderKey: {
            readonly type: "string";
        };
        readonly placeholderValue: {
            readonly type: "string";
        };
        readonly patternKey: {
            readonly type: "string";
        };
        readonly patternValue: {
            readonly type: "string";
        };
    };
    readonly required: readonly ["type", "title", "description"];
    readonly unevaluatedProperties: false;
    readonly oneOf: readonly [{
        readonly required: readonly ["editor"];
        readonly properties: {
            readonly editor: {
                readonly enum: readonly ["select"];
            };
            readonly items: {
                readonly $ref: "#/definitions/arrayItemsSelect";
            };
        };
    }, {
        readonly required: readonly ["editor"];
        readonly properties: {
            readonly editor: {
                readonly enum: readonly ["keyValue"];
            };
            readonly items: {
                readonly $ref: "#/definitions/arrayItemsKeyValue";
            };
        };
    }, {
        readonly required: readonly ["editor"];
        readonly properties: {
            readonly editor: {
                readonly enum: readonly ["fileupload"];
            };
            readonly items: {
                readonly $ref: "#/definitions/arrayItemsFileupload";
            };
        };
    }, {
        readonly required: readonly ["editor"];
        readonly properties: {
            readonly editor: {
                readonly enum: readonly ["stringList"];
            };
            readonly items: {
                readonly $ref: "#/definitions/arrayItemsStringList";
            };
        };
    }, {
        readonly required: readonly ["editor"];
        readonly properties: {
            readonly editor: {
                readonly enum: readonly ["globs"];
            };
            readonly items: {
                readonly $ref: "#/definitions/arrayItemsGlobs";
            };
        };
    }, {
        readonly required: readonly ["editor"];
        readonly properties: {
            readonly editor: {
                readonly enum: readonly ["pseudoUrls"];
            };
            readonly items: {
                readonly $ref: "#/definitions/arrayItemsPseudoUrls";
            };
        };
    }, {
        readonly required: readonly ["editor"];
        readonly properties: {
            readonly editor: {
                readonly enum: readonly ["requestListSources"];
            };
            readonly items: {
                readonly $ref: "#/definitions/arrayItemsRequestListSources";
            };
        };
    }, {
        readonly required: readonly ["editor"];
        readonly properties: {
            readonly editor: {
                readonly enum: readonly ["json", "schemaBased", "hidden"];
            };
            readonly items: {
                readonly $ref: "#/definitions/arrayItems";
            };
        };
    }, {
        readonly not: {
            readonly required: readonly ["editor"];
        };
        readonly properties: {
            readonly items: {
                readonly $ref: "#/definitions/arrayItems";
            };
        };
    }];
};
declare const subSchemaIntegerProperty: {
    readonly $id: "subSchemaIntegerProperty";
    readonly title: "Sub-schema: Integer property";
    readonly type: "object";
    readonly additionalProperties: false;
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
    };
    readonly required: readonly ["type", "title", "description"];
};
declare const subSchemaNumberProperty: {
    readonly $id: "subSchemaNumberProperty";
    readonly title: "Sub-schema: Number property";
    readonly type: "object";
    readonly additionalProperties: false;
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
    };
    readonly required: readonly ["type", "title", "description"];
};
declare const subSchemaBooleanProperty: {
    readonly $id: "subSchemaBooleanProperty";
    readonly title: "Sub-schema: Boolean property";
    readonly type: "object";
    readonly additionalProperties: false;
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
    };
    readonly required: readonly ["type", "title", "description"];
};
declare const subSchemaObjectProperty: {
    readonly $id: "subSchemaObjectProperty";
    readonly title: "Sub-schema: Object property";
    readonly type: "object";
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
            readonly enum: readonly ["json", "proxy", "hidden"];
        };
        readonly properties: {
            readonly $ref: "#/definitions/subObjectProperties";
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
    readonly required: readonly ["type", "title", "description"];
};
declare const subSchemaResourceProperty: {
    readonly $id: "subSchemaResourceProperty";
    readonly title: "Sub-schema: Resource property";
    readonly type: "object";
    readonly additionalProperties: false;
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
        readonly nullable: {
            readonly type: "boolean";
        };
    };
    readonly required: readonly ["type", "title", "description", "resourceType"];
};
declare const subSchemaResourceArrayProperty: {
    readonly $id: "subSchemaResourceArrayProperty";
    readonly title: "Sub-schema: Resource array property";
    readonly type: "object";
    readonly additionalProperties: false;
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
    };
    readonly required: readonly ["type", "title", "description", "resourceType"];
};
declare const subObjectProperties: {
    readonly $id: "subObjectProperties";
    readonly title: "Utils: Sub-object properties definition";
    readonly type: "object";
    readonly patternProperties: {
        readonly '^': {
            readonly oneOf: readonly [{
                readonly $ref: "subSchemaStringProperty";
            }, {
                readonly $ref: "subSchemaStringEnumProperty";
            }, {
                readonly $ref: "subSchemaArrayProperty";
            }, {
                readonly $ref: "subSchemaObjectProperty";
            }, {
                readonly $ref: "subSchemaIntegerProperty";
            }, {
                readonly $ref: "subSchemaNumberProperty";
            }, {
                readonly $ref: "subSchemaBooleanProperty";
            }, {
                readonly $ref: "subSchemaResourceProperty";
            }, {
                readonly $ref: "subSchemaResourceArrayProperty";
            }];
        };
    };
    readonly additionalProperties: false;
};
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
        typeof subObjectPropertiesProxy,
        typeof subObjectProperties,
        typeof subSchemaStringProperty,
        typeof subSchemaStringEnumProperty,
        typeof subSchemaArrayProperty,
        typeof subSchemaObjectProperty,
        typeof subSchemaIntegerProperty,
        typeof subSchemaNumberProperty,
        typeof subSchemaBooleanProperty,
        typeof subSchemaResourceProperty,
        typeof subSchemaResourceArrayProperty
    ];
}>;
export {};
//# sourceMappingURL=json-schemas.d.ts.map