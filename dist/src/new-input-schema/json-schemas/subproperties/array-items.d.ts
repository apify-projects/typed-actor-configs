import { FromSchema } from 'json-schema-to-ts';
import subSchemaStringProperty, { type InferSubSchemaStringProperty, type SubSchemaStringProperty, type SubSchemaStringPropertyDependencies } from './sub-schema-string-property.ts';
import subSchemaStringEnumProperty, { type InferSubSchemaStringEnumProperty, type SubSchemaStringEnumProperty, type SubSchemaStringEnumPropertyDependencies } from './sub-schema-string-enum-property.ts';
import subSchemaIntegerProperty, { type InferSubSchemaIntegerProperty, type SubSchemaIntegerProperty, type SubSchemaIntegerPropertyDependencies } from './sub-schema-integer-property.ts';
import subSchemaNumberProperty, { type InferSubSchemaNumberProperty, type SubSchemaNumberProperty, type SubSchemaNumberPropertyDependencies } from './sub-schema-number-property.ts';
import subSchemaBooleanProperty, { type InferSubSchemaBooleanProperty, type SubSchemaBooleanProperty, type SubSchemaBooleanPropertyDependencies } from './sub-schema-boolean-property.ts';
import subSchemaResourceProperty, { type InferSubSchemaResourceProperty, type SubSchemaResourceProperty, type SubSchemaResourcePropertyDependencies } from './sub-schema-resource-property.ts';
import { DefaultedFields, RequiredKeys, Resolve } from '../types.ts';
declare const arrayItems: {
    readonly $id: "arrayItems";
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
                            readonly $ref: "subSchemaStringProperty";
                        }, {
                            readonly $ref: "subSchemaStringEnumProperty";
                        }, {
                            readonly $ref: "subSchemaIntegerProperty";
                        }, {
                            readonly $ref: "subSchemaNumberProperty";
                        }, {
                            readonly $ref: "subSchemaBooleanProperty";
                        }, {
                            readonly $ref: "subSchemaResourceProperty";
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
export type ArrayItems = FromSchema<typeof arrayItems, {
    keepDefaultedPropertiesOptional: true;
    parseIfThenElseKeywords: true;
    parseNotKeyword: true;
    references: [
        typeof subSchemaStringProperty.schema,
        ...SubSchemaStringPropertyDependencies,
        typeof subSchemaStringEnumProperty.schema,
        ...SubSchemaStringEnumPropertyDependencies,
        typeof subSchemaIntegerProperty.schema,
        ...SubSchemaIntegerPropertyDependencies,
        typeof subSchemaNumberProperty.schema,
        ...SubSchemaNumberPropertyDependencies,
        typeof subSchemaBooleanProperty.schema,
        ...SubSchemaBooleanPropertyDependencies,
        typeof subSchemaResourceProperty.schema,
        ...SubSchemaResourcePropertyDependencies
    ];
}>;
type inferArrayObjectProperty<T extends Exclude<(ArrayItems & {
    type: 'object';
})['properties'], undefined>[string]> = T extends SubSchemaStringEnumProperty ? InferSubSchemaStringEnumProperty<T> : T extends SubSchemaIntegerProperty ? InferSubSchemaIntegerProperty<T> : T extends SubSchemaNumberProperty ? InferSubSchemaNumberProperty<T> : T extends SubSchemaBooleanProperty ? InferSubSchemaBooleanProperty<T> : T extends SubSchemaResourceProperty ? InferSubSchemaResourceProperty<T> : T extends SubSchemaStringProperty ? InferSubSchemaStringProperty<T> : never;
type inferArrayObjectItems<T extends ArrayItems & {
    type: 'object';
}> = T extends {
    properties: Record<string, {
        default?: unknown;
    } | {}>;
} ? Resolve<{
    -readonly [Key in keyof T['properties'] & (RequiredKeys<T> | DefaultedFields<T>)]: inferArrayObjectProperty<T['properties'][Key]>;
} & {
    -readonly [Key in Exclude<keyof T['properties'], RequiredKeys<T> | DefaultedFields<T>>]?: inferArrayObjectProperty<T['properties'][Key]>;
}> : unknown;
export type InferArrayItems<T extends ArrayItems | undefined> = T extends {
    type: 'object';
} ? inferArrayObjectItems<T> : T extends {
    type: 'string';
} ? string : T extends {
    type: 'integer';
} ? number : T extends {
    type: 'boolean';
} ? boolean : object | string | number | boolean;
export type ArrayItemsDependencies = [];
declare const _default: {
    schema: {
        readonly $id: "arrayItems";
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
                                readonly $ref: "subSchemaStringProperty";
                            }, {
                                readonly $ref: "subSchemaStringEnumProperty";
                            }, {
                                readonly $ref: "subSchemaIntegerProperty";
                            }, {
                                readonly $ref: "subSchemaNumberProperty";
                            }, {
                                readonly $ref: "subSchemaBooleanProperty";
                            }, {
                                readonly $ref: "subSchemaResourceProperty";
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
};
export default _default;
//# sourceMappingURL=array-items.d.ts.map