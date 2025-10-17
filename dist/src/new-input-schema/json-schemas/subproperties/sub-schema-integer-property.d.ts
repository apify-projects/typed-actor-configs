import { FromSchema } from 'json-schema-to-ts';
declare const subSchemaIntegerProperty: {
    readonly $id: "subSchemaIntegerProperty";
    readonly title: "Sub-schema: Integer property";
    readonly type: "object";
    readonly additionalProperties: false;
    readonly properties: {
        readonly type: {
            readonly enum: readonly ["integer"];
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
        readonly minimum: {
            readonly type: "integer";
        };
        readonly maximum: {
            readonly type: "integer";
        };
        readonly unit: {
            readonly type: "string";
        };
        readonly editor: {
            readonly enum: readonly ["number", "hidden"];
        };
    };
    readonly required: readonly ["type", "title", "description"];
};
export type SubSchemaIntegerProperty = FromSchema<typeof subSchemaIntegerProperty, {
    keepDefaultedPropertiesOptional: true;
    parseIfThenElseKeywords: true;
    parseNotKeyword: true;
}>;
export type InferSubSchemaIntegerProperty<T extends {
    type: 'integer';
    nullable?: boolean;
}> = T['nullable'] extends true ? number | null : number;
export type SubSchemaIntegerPropertyDependencies = [];
declare const _default: {
    schema: {
        readonly $id: "subSchemaIntegerProperty";
        readonly title: "Sub-schema: Integer property";
        readonly type: "object";
        readonly additionalProperties: false;
        readonly properties: {
            readonly type: {
                readonly enum: readonly ["integer"];
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
            readonly minimum: {
                readonly type: "integer";
            };
            readonly maximum: {
                readonly type: "integer";
            };
            readonly unit: {
                readonly type: "string";
            };
            readonly editor: {
                readonly enum: readonly ["number", "hidden"];
            };
        };
        readonly required: readonly ["type", "title", "description"];
    };
};
export default _default;
//# sourceMappingURL=sub-schema-integer-property.d.ts.map