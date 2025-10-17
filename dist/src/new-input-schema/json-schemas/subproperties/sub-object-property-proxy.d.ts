import { FromSchema } from 'json-schema-to-ts';
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
export type SubObjectPropertyProxy = FromSchema<typeof subObjectPropertiesProxy, {
    keepDefaultedPropertiesOptional: true;
    parseIfThenElseKeywords: true;
    parseNotKeyword: true;
}>;
export type InferSubObjectPropertyProxy<T extends SubObjectPropertyProxy> = {
    apifyProxyCountry: T['apifyProxyCountry'] extends object ? string : never;
    useApifyProxy: T['useApifyProxy'] extends object ? boolean : never;
    apifyProxyGroups: T['apifyProxyGroups'] extends object ? string[] : never;
    proxyUrls: T['proxyUrls'] extends object ? string[] : never;
};
export type SubObjectPropertyProxyDependencies = [];
declare const _default: {
    schema: {
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
};
export default _default;
//# sourceMappingURL=sub-object-property-proxy.d.ts.map