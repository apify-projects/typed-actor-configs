import { FromSchema } from 'json-schema-to-ts';
declare const arrayItemsFileupload: {
    readonly $id: "arrayItemsFileupload";
    readonly title: "Utils: Array items fileupload definition";
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
export type ArrayItemsFileupload = FromSchema<typeof arrayItemsFileupload, {
    keepDefaultedPropertiesOptional: true;
    parseIfThenElseKeywords: true;
    parseNotKeyword: true;
}>;
export type InferArrayItemsFileupload<T extends object> = T extends {
    type: 'string';
} ? string : never;
export type ArrayItemsFileuploadDependencies = [];
declare const _default: {
    schema: {
        readonly $id: "arrayItemsFileupload";
        readonly title: "Utils: Array items fileupload definition";
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
//# sourceMappingURL=array-items-file-upload.d.ts.map