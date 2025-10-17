import { FromSchema } from 'json-schema-to-ts';
declare const arrayItemsKeyValue: {
    readonly $id: "arrayItemsKeyValue";
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
export type ArrayItemsKeyValue = FromSchema<typeof arrayItemsKeyValue, {
    keepDefaultedPropertiesOptional: true;
    parseIfThenElseKeywords: true;
    parseNotKeyword: true;
}>;
export type InferArrayItemsKeyValue<T extends {
    type: 'object';
    properties: object;
} | undefined> = T extends {
    type: 'object';
} ? Record<string, string> : Record<string, string>;
export type ArrayItemsKeyValueDependencies = [];
declare const _default: {
    schema: {
        readonly $id: "arrayItemsKeyValue";
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
};
export default _default;
//# sourceMappingURL=array-items-key-value.d.ts.map