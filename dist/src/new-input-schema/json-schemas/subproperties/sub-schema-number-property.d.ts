import { FromSchema } from 'json-schema-to-ts';
declare const subSchemaNumberProperty: {
    readonly $id: "subSchemaNumberProperty";
    readonly title: "Sub-schema: Number property";
    readonly type: "object";
    readonly additionalProperties: false;
    readonly properties: {
        readonly type: {
            readonly enum: readonly ["number"];
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
            readonly type: "number";
        };
        readonly maximum: {
            readonly type: "number";
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
export type SubSchemaNumberProperty = FromSchema<typeof subSchemaNumberProperty, {
    keepDefaultedPropertiesOptional: true;
    parseIfThenElseKeywords: true;
    parseNotKeyword: true;
}>;
export type InferSubSchemaNumberProperty<T extends {
    type: 'number';
    nullable?: boolean;
}> = T['nullable'] extends true ? number | null : number;
export type SubSchemaNumberPropertyDependencies = [];
declare const _default: {
    schema: {
        readonly $id: "subSchemaNumberProperty";
        readonly title: "Sub-schema: Number property";
        readonly type: "object";
        readonly additionalProperties: false;
        readonly properties: {
            readonly type: {
                readonly enum: readonly ["number"];
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
                readonly type: "number";
            };
            readonly maximum: {
                readonly type: "number";
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
//# sourceMappingURL=sub-schema-number-property.d.ts.map