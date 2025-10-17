import { FromSchema } from 'json-schema-to-ts';
import { RequiredKeys, Resolve } from '../types.ts';
declare const arrayItemsRequestListSources: {
    readonly $id: "arrayItemsRequestListSources";
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
export type ArrayItemsRequestListSources = FromSchema<typeof arrayItemsRequestListSources, {
    keepDefaultedPropertiesOptional: true;
    parseIfThenElseKeywords: true;
    parseNotKeyword: true;
}>;
type InferArrayItemsRequestListSourcesProps<T extends Exclude<ArrayItemsRequestListSources['properties'], undefined>, RequiredKeys extends string | never> = Resolve<{
    [Key in keyof T & RequiredKeys]: T[Key] extends {
        type: 'string';
    } ? string : object;
} & {
    [Key in Exclude<keyof T, RequiredKeys>]?: T[Key] extends {
        type: 'string';
    } ? string : object;
}>;
export type InferArrayItemsRequestListSources<T extends ArrayItemsRequestListSources | undefined> = T extends {
    properties: object;
} ? InferArrayItemsRequestListSourcesProps<T['properties'], RequiredKeys<T>> : {
    url?: string;
    method?: string;
    payload?: string;
    userData?: object;
    headers?: object;
};
export type ArrayItemsRequestListSourcesDependencies = [];
declare const _default: {
    schema: {
        readonly $id: "arrayItemsRequestListSources";
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
export default _default;
//# sourceMappingURL=array-items-request-list-sources.d.ts.map