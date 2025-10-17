import { FromSchema } from 'json-schema-to-ts';
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
export type SubSchemaStringProperty = FromSchema<typeof subSchemaStringProperty, {
    keepDefaultedPropertiesOptional: true;
    parseIfThenElseKeywords: true;
    parseNotKeyword: true;
}>;
export type InferSubSchemaStringProperty<T extends {
    type: 'string';
    nullable?: boolean;
}> = T['nullable'] extends true ? string | null : string;
export type SubSchemaStringPropertyDependencies = [];
declare const _default: {
    schema: {
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
};
export default _default;
//# sourceMappingURL=sub-schema-string-property.d.ts.map