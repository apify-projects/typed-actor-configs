import { FromSchema } from 'json-schema-to-ts';
declare const arrayItemsSelect: {
    readonly $id: "arrayItemsSelect";
    readonly title: "Utils: Array items select definition";
    readonly type: "object";
    readonly additionalProperties: false;
    readonly properties: {
        readonly type: {
            readonly enum: readonly ["string"];
        };
        readonly enum: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
            readonly uniqueItems: true;
        };
        readonly enumTitles: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
        };
    };
    readonly required: readonly ["type", "enum"];
};
export type ArrayItemsSelect = FromSchema<typeof arrayItemsSelect, {
    keepDefaultedPropertiesOptional: true;
    parseIfThenElseKeywords: true;
    parseNotKeyword: true;
}>;
export type InferArrayItemsSelect<T extends {
    type: 'string';
    enum: string[];
    nullable?: boolean;
} | undefined> = T extends {
    enum: (infer E)[];
    nullable?: boolean;
} ? T['nullable'] extends true ? E | null : E : string;
export type ArrayItemsSelectDependencies = [];
declare const _default: {
    schema: {
        readonly $id: "arrayItemsSelect";
        readonly title: "Utils: Array items select definition";
        readonly type: "object";
        readonly additionalProperties: false;
        readonly properties: {
            readonly type: {
                readonly enum: readonly ["string"];
            };
            readonly enum: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                };
                readonly uniqueItems: true;
            };
            readonly enumTitles: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                };
            };
        };
        readonly required: readonly ["type", "enum"];
    };
};
export default _default;
//# sourceMappingURL=array-items-select.d.ts.map