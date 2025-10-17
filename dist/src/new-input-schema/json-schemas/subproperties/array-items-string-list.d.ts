import { FromSchema } from 'json-schema-to-ts';
declare const arrayItemsStringList: {
    readonly $id: "arrayItemsStringList";
    readonly title: "Utils: Array items stringList definition";
    readonly type: "object";
    readonly additionalProperties: false;
    readonly properties: {
        readonly type: {
            readonly enum: readonly ["string"];
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
export type ArrayItemsStringList = FromSchema<typeof arrayItemsStringList, {
    keepDefaultedPropertiesOptional: true;
    parseIfThenElseKeywords: true;
    parseNotKeyword: true;
}>;
export type InferArrayItemsStringList<T extends object> = T extends {
    type: 'string';
} ? string : never;
export type ArrayItemsStringListDependencies = [];
declare const _default: {
    schema: {
        readonly $id: "arrayItemsStringList";
        readonly title: "Utils: Array items stringList definition";
        readonly type: "object";
        readonly additionalProperties: false;
        readonly properties: {
            readonly type: {
                readonly enum: readonly ["string"];
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
export default _default;
//# sourceMappingURL=array-items-string-list.d.ts.map