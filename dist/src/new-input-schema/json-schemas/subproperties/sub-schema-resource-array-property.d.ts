import { FromSchema } from 'json-schema-to-ts';
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
export type SubSchemaResourceArrayProperty = FromSchema<typeof subSchemaResourceArrayProperty, {
    keepDefaultedPropertiesOptional: true;
    parseIfThenElseKeywords: true;
    parseNotKeyword: true;
}>;
export type InferSubSchemaResourceArrayProperty<T extends {
    type: 'array';
    resourceType: string;
    nullable?: boolean;
}> = T['nullable'] extends true ? string[] | null : string[];
export type SubSchemaResourceArrayPropertyDependencies = [];
declare const _default: {
    schema: {
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
};
export default _default;
//# sourceMappingURL=sub-schema-resource-array-property.d.ts.map