import { FromSchema } from 'json-schema-to-ts';
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
export type InferStringProperty<T extends {
    readonly type: 'string';
    readonly nullable?: boolean;
}> = T['nullable'] extends true ? string | null : string;
export type StringPropertyDependencies = [];
declare const _default: {
    schema: {
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
};
export default _default;
//# sourceMappingURL=string-property.d.ts.map