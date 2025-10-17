import { FromSchema, JSONSchema } from 'json-schema-to-ts';
declare const datasetSchema: {
    readonly $id: "https://apify.com/schemas/v1/dataset.json";
    readonly title: "JSON schema of Apify Actor dataset schema";
    readonly type: "object";
    readonly properties: {
        readonly $schema: {
            readonly type: "string";
        };
        readonly actorSpecification: {
            readonly type: "integer";
            readonly minimum: 1;
            readonly maximum: 1;
        };
        readonly title: {
            readonly type: "string";
        };
        readonly description: {
            readonly type: "string";
        };
        readonly fields: {
            readonly type: "object";
        };
        readonly views: {
            readonly type: "object";
            readonly patternProperties: {
                readonly '^': {
                    readonly type: "object";
                    readonly properties: {
                        readonly title: {
                            readonly type: "string";
                        };
                        readonly description: {
                            readonly type: "string";
                        };
                        readonly transformation: {
                            readonly type: "object";
                            readonly properties: {
                                readonly fields: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "string";
                                    };
                                    readonly minItems: 1;
                                    readonly uniqueItems: true;
                                };
                                readonly clean: {
                                    readonly type: "boolean";
                                    readonly default: false;
                                };
                                readonly omit: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "string";
                                    };
                                    readonly minItems: 1;
                                    readonly uniqueItems: true;
                                };
                                readonly unwind: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "string";
                                    };
                                    readonly minItems: 1;
                                    readonly uniqueItems: true;
                                };
                                readonly flatten: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "string";
                                    };
                                    readonly minItems: 1;
                                    readonly uniqueItems: true;
                                };
                                readonly desc: {
                                    readonly type: "boolean";
                                };
                                readonly skipHidden: {
                                    readonly type: "boolean";
                                };
                                readonly skipEmpty: {
                                    readonly type: "boolean";
                                };
                            };
                        };
                        readonly display: {
                            readonly type: "object";
                            readonly properties: {
                                readonly component: {
                                    readonly type: "string";
                                    readonly enum: readonly ["table", "grid"];
                                };
                                readonly options: {
                                    readonly type: "object";
                                };
                                readonly properties: {
                                    readonly type: "object";
                                };
                            };
                            readonly required: readonly ["component"];
                        };
                    };
                    readonly anyOf: readonly [{
                        readonly required: readonly ["title", "transformation"];
                    }, {
                        readonly required: readonly ["title", "display"];
                    }];
                };
            };
        };
    };
    readonly anyOf: readonly [{
        readonly required: readonly ["actorSpecification", "views"];
    }, {
        readonly required: readonly ["actorSpecification", "fields"];
    }];
    readonly additionalProperties: false;
};
export type Dataset = FromSchema<typeof datasetSchema, {
    keepDefaultedPropertiesOptional: true;
}> & {
    fields?: JSONSchema;
};
export {};
//# sourceMappingURL=schema.d.ts.map