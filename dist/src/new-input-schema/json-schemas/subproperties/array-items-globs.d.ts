import { FromSchema } from 'json-schema-to-ts';
import { RequiredKeys, Resolve } from '../types.ts';
declare const arrayItemsGlobs: {
    readonly $id: "arrayItemsGlobs";
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
export type ArrayItemsGlobs = FromSchema<typeof arrayItemsGlobs, {
    keepDefaultedPropertiesOptional: true;
    parseIfThenElseKeywords: true;
    parseNotKeyword: true;
}>;
type InferGlobFields<T extends Exclude<ArrayItemsGlobs['properties'], undefined>, RequiredKeys extends string | never> = Resolve<{
    [Key in keyof T & RequiredKeys]: T[Key] extends {
        type: 'string';
    } ? string : object;
} & {
    [Key in Exclude<keyof T, RequiredKeys>]?: T[Key] extends {
        type: 'string';
    } ? string : object;
}>;
export type InferArrayItemsGlobs<T extends ArrayItemsGlobs | undefined> = T extends {
    properties: object;
} ? InferGlobFields<T['properties'], RequiredKeys<T>> : {
    glob?: string;
    method?: string;
    payload?: string;
    userData?: object;
    headers?: object;
};
export type ArrayItemsGlobsDependencies = [];
declare const _default: {
    schema: {
        readonly $id: "arrayItemsGlobs";
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
};
export default _default;
//# sourceMappingURL=array-items-globs.d.ts.map