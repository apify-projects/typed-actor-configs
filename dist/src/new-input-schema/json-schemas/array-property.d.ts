import { FromSchema } from 'json-schema-to-ts';
import arrayItems, { type InferArrayItems, type ArrayItemsDependencies } from './subproperties/array-items.ts';
import arrayItemsSelect, { type InferArrayItemsSelect, type ArrayItemsSelectDependencies } from './subproperties/array-items-select.ts';
import arrayItemsKeyValue, { type InferArrayItemsKeyValue, type ArrayItemsKeyValueDependencies } from './subproperties/array-items-key-value.ts';
import arrayItemsFileupload, { type ArrayItemsFileuploadDependencies } from './subproperties/array-items-file-upload.ts';
import arrayItemsStringList, { type ArrayItemsStringListDependencies } from './subproperties/array-items-string-list.ts';
import arrayItemsGlobs, { type InferArrayItemsGlobs, type ArrayItemsGlobsDependencies } from './subproperties/array-items-globs.ts';
import arrayItemsPseudoUrls, { type InferArrayItemsPseudoUrls, type ArrayItemsPseudoUrlsDependencies } from './subproperties/array-items-pseudo-urls.ts';
import arrayItemsRequestListSources, { type InferArrayItemsRequestListSources, type ArrayItemsRequestListSourcesDependencies } from './subproperties/array-items-request-list-sources.ts';
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
                        readonly $ref: "arrayItemsSelect";
                    };
                };
            }, {
                readonly required: readonly ["editor"];
                readonly properties: {
                    readonly editor: {
                        readonly enum: readonly ["keyValue"];
                    };
                    readonly items: {
                        readonly $ref: "arrayItemsKeyValue";
                    };
                };
            }, {
                readonly required: readonly ["editor"];
                readonly properties: {
                    readonly editor: {
                        readonly enum: readonly ["fileupload"];
                    };
                    readonly items: {
                        readonly $ref: "arrayItemsFileupload";
                    };
                };
            }, {
                readonly required: readonly ["editor"];
                readonly properties: {
                    readonly editor: {
                        readonly enum: readonly ["stringList"];
                    };
                    readonly items: {
                        readonly $ref: "arrayItemsStringList";
                    };
                };
            }, {
                readonly required: readonly ["editor"];
                readonly properties: {
                    readonly editor: {
                        readonly enum: readonly ["globs"];
                    };
                    readonly items: {
                        readonly $ref: "arrayItemsGlobs";
                    };
                };
            }, {
                readonly required: readonly ["editor"];
                readonly properties: {
                    readonly editor: {
                        readonly enum: readonly ["pseudoUrls"];
                    };
                    readonly items: {
                        readonly $ref: "arrayItemsPseudoUrls";
                    };
                };
            }, {
                readonly required: readonly ["editor"];
                readonly properties: {
                    readonly editor: {
                        readonly enum: readonly ["requestListSources"];
                    };
                    readonly items: {
                        readonly $ref: "arrayItemsRequestListSources";
                    };
                };
            }, {
                readonly required: readonly ["editor"];
                readonly properties: {
                    readonly editor: {
                        readonly enum: readonly ["json", "schemaBased", "hidden"];
                    };
                    readonly items: {
                        readonly $ref: "arrayItems";
                    };
                };
            }, {
                readonly not: {
                    readonly required: readonly ["editor"];
                };
                readonly properties: {
                    readonly items: {
                        readonly $ref: "arrayItems";
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
                readonly $ref: "arrayItems";
            };
            readonly isSecret: {
                readonly enum: readonly [true];
            };
        };
    };
};
export type ArrayPropertyDependencies = [
    typeof arrayItemsSelect.schema,
    ...ArrayItemsSelectDependencies,
    typeof arrayItemsKeyValue.schema,
    ...ArrayItemsKeyValueDependencies,
    typeof arrayItemsFileupload.schema,
    ...ArrayItemsFileuploadDependencies,
    typeof arrayItemsStringList.schema,
    ...ArrayItemsStringListDependencies,
    typeof arrayItemsGlobs.schema,
    ...ArrayItemsGlobsDependencies,
    typeof arrayItemsPseudoUrls.schema,
    ...ArrayItemsPseudoUrlsDependencies,
    typeof arrayItemsRequestListSources.schema,
    ...ArrayItemsRequestListSourcesDependencies,
    typeof arrayItems.schema,
    ...ArrayItemsDependencies
];
export type ArrayProperty = FromSchema<typeof arrayProperty, {
    keepDefaultedPropertiesOptional: true;
    parseIfThenElseKeywords: true;
    parseNotKeyword: true;
    references: ArrayPropertyDependencies;
}>;
type Editor<T extends string> = {
    editor: T;
};
export type InferArrayPropertyByEditor<T extends ArrayProperty> = T extends Editor<'select'> ? InferArrayItemsSelect<T['items']>[] : T extends Editor<'keyValue'> ? InferArrayItemsKeyValue<T['items']>[] : T extends Editor<'fileupload'> ? string[] : T extends Editor<'stringList'> ? string[] : T extends Editor<'globs'> ? InferArrayItemsGlobs<T['items']>[] : T extends Editor<'pseudoUrls'> ? InferArrayItemsPseudoUrls<T['items']>[] : T extends Editor<'requestListSources'> ? InferArrayItemsRequestListSources<T['items']>[] : T extends Editor<'json'> ? InferArrayItems<T['items']>[] : T extends Editor<'schemaBased'> ? InferArrayItems<T['items']>[] : T extends Editor<'hidden'> ? InferArrayItems<T['items']>[] : never;
export type InferArrayProperty<T extends ArrayProperty> = InferArrayPropertyByEditor<T>;
declare const _default: {
    schema: {
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
                            readonly $ref: "arrayItemsSelect";
                        };
                    };
                }, {
                    readonly required: readonly ["editor"];
                    readonly properties: {
                        readonly editor: {
                            readonly enum: readonly ["keyValue"];
                        };
                        readonly items: {
                            readonly $ref: "arrayItemsKeyValue";
                        };
                    };
                }, {
                    readonly required: readonly ["editor"];
                    readonly properties: {
                        readonly editor: {
                            readonly enum: readonly ["fileupload"];
                        };
                        readonly items: {
                            readonly $ref: "arrayItemsFileupload";
                        };
                    };
                }, {
                    readonly required: readonly ["editor"];
                    readonly properties: {
                        readonly editor: {
                            readonly enum: readonly ["stringList"];
                        };
                        readonly items: {
                            readonly $ref: "arrayItemsStringList";
                        };
                    };
                }, {
                    readonly required: readonly ["editor"];
                    readonly properties: {
                        readonly editor: {
                            readonly enum: readonly ["globs"];
                        };
                        readonly items: {
                            readonly $ref: "arrayItemsGlobs";
                        };
                    };
                }, {
                    readonly required: readonly ["editor"];
                    readonly properties: {
                        readonly editor: {
                            readonly enum: readonly ["pseudoUrls"];
                        };
                        readonly items: {
                            readonly $ref: "arrayItemsPseudoUrls";
                        };
                    };
                }, {
                    readonly required: readonly ["editor"];
                    readonly properties: {
                        readonly editor: {
                            readonly enum: readonly ["requestListSources"];
                        };
                        readonly items: {
                            readonly $ref: "arrayItemsRequestListSources";
                        };
                    };
                }, {
                    readonly required: readonly ["editor"];
                    readonly properties: {
                        readonly editor: {
                            readonly enum: readonly ["json", "schemaBased", "hidden"];
                        };
                        readonly items: {
                            readonly $ref: "arrayItems";
                        };
                    };
                }, {
                    readonly not: {
                        readonly required: readonly ["editor"];
                    };
                    readonly properties: {
                        readonly items: {
                            readonly $ref: "arrayItems";
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
                    readonly $ref: "arrayItems";
                };
                readonly isSecret: {
                    readonly enum: readonly [true];
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=array-property.d.ts.map