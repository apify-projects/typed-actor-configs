import { FromSchema } from 'json-schema-to-ts';
declare const subSchemaBooleanProperty: {
    readonly $id: "subSchemaBooleanProperty";
    readonly title: "Sub-schema: Boolean property";
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
        readonly nullable: {
            readonly type: "boolean";
        };
        readonly groupCaption: {
            readonly type: "string";
        };
        readonly groupDescription: {
            readonly type: "string";
        };
        readonly editor: {
            readonly enum: readonly ["checkbox", "hidden"];
        };
    };
    readonly required: readonly ["type", "title", "description"];
};
export type SubSchemaBooleanProperty = FromSchema<typeof subSchemaBooleanProperty, {
    keepDefaultedPropertiesOptional: true;
    parseIfThenElseKeywords: true;
    parseNotKeyword: true;
}>;
export type InferSubSchemaBooleanProperty<T extends {
    type: 'boolean';
    nullable?: boolean;
}> = T['nullable'] extends true ? boolean | null : boolean;
export type SubSchemaBooleanPropertyDependencies = [];
declare const _default: {
    schema: {
        readonly $id: "subSchemaBooleanProperty";
        readonly title: "Sub-schema: Boolean property";
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
            readonly nullable: {
                readonly type: "boolean";
            };
            readonly groupCaption: {
                readonly type: "string";
            };
            readonly groupDescription: {
                readonly type: "string";
            };
            readonly editor: {
                readonly enum: readonly ["checkbox", "hidden"];
            };
        };
        readonly required: readonly ["type", "title", "description"];
    };
};
export default _default;
//# sourceMappingURL=sub-schema-boolean-property.d.ts.map