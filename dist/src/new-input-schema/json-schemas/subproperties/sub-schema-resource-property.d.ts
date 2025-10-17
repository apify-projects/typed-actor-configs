import { FromSchema } from 'json-schema-to-ts';
declare const subSchemaResourceProperty: {
    readonly $id: "subSchemaResourceProperty";
    readonly title: "Sub-schema: Resource property";
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
        readonly editor: {
            readonly enum: readonly ["resourcePicker", "hidden"];
        };
        readonly resourceType: {
            readonly enum: readonly ["dataset", "keyValueStore", "requestQueue"];
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
    };
    readonly required: readonly ["type", "title", "description", "resourceType"];
};
export type SubSchemaResourceProperty = FromSchema<typeof subSchemaResourceProperty, {
    keepDefaultedPropertiesOptional: true;
    parseIfThenElseKeywords: true;
    parseNotKeyword: true;
}>;
export type InferSubSchemaResourceProperty<T extends {
    type: 'string';
    resourceType: string;
    nullable?: boolean;
}> = T['nullable'] extends true ? string | null : string;
export type SubSchemaResourcePropertyDependencies = [];
declare const _default: {
    schema: {
        readonly $id: "subSchemaResourceProperty";
        readonly title: "Sub-schema: Resource property";
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
            readonly editor: {
                readonly enum: readonly ["resourcePicker", "hidden"];
            };
            readonly resourceType: {
                readonly enum: readonly ["dataset", "keyValueStore", "requestQueue"];
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
        };
        readonly required: readonly ["type", "title", "description", "resourceType"];
    };
};
export default _default;
//# sourceMappingURL=sub-schema-resource-property.d.ts.map