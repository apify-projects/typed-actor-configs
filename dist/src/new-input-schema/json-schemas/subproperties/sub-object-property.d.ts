import { FromSchema } from 'json-schema-to-ts';
import subSchemaStringProperty, { type InferSubSchemaStringProperty, type SubSchemaStringProperty, type SubSchemaStringPropertyDependencies } from './sub-schema-string-property.ts';
import subSchemaStringEnumProperty, { type InferSubSchemaStringEnumProperty, type SubSchemaStringEnumProperty, type SubSchemaStringEnumPropertyDependencies } from './sub-schema-string-enum-property.ts';
import subSchemaIntegerProperty, { type InferSubSchemaIntegerProperty, type SubSchemaIntegerProperty, type SubSchemaIntegerPropertyDependencies } from './sub-schema-integer-property.ts';
import subSchemaNumberProperty, { type InferSubSchemaNumberProperty, type SubSchemaNumberProperty, type SubSchemaNumberPropertyDependencies } from './sub-schema-number-property.ts';
import subSchemaBooleanProperty, { type InferSubSchemaBooleanProperty, type SubSchemaBooleanProperty, type SubSchemaBooleanPropertyDependencies } from './sub-schema-boolean-property.ts';
import subSchemaResourceProperty, { type InferSubSchemaResourceProperty, type SubSchemaResourceProperty, type SubSchemaResourcePropertyDependencies } from './sub-schema-resource-property.ts';
import subSchemaResourceArrayProperty, { type SubSchemaResourceArrayPropertyDependencies } from './sub-schema-resource-array-property.ts';
import { Resolve } from '../types.ts';
declare const subObjectProperties: {
    readonly $id: "subObjectProperties";
    readonly title: "Utils: Sub-object properties definition";
    readonly type: "object";
    readonly patternProperties: {
        readonly '^': {
            readonly oneOf: readonly [{
                readonly $ref: "subSchemaStringProperty";
            }, {
                readonly $ref: "subSchemaStringEnumProperty";
            }, {
                readonly $ref: "subSchemaIntegerProperty";
            }, {
                readonly $ref: "subSchemaNumberProperty";
            }, {
                readonly $ref: "subSchemaBooleanProperty";
            }, {
                readonly $ref: "subSchemaResourceProperty";
            }, {
                readonly $ref: "subSchemaResourceArrayProperty";
            }];
        };
    };
    readonly additionalProperties: false;
};
export type SubObjectProperty = FromSchema<typeof subObjectProperties, {
    keepDefaultedPropertiesOptional: true;
    parseIfThenElseKeywords: true;
    parseNotKeyword: true;
    references: [
        typeof subSchemaStringProperty.schema,
        ...SubSchemaStringPropertyDependencies,
        typeof subSchemaStringEnumProperty.schema,
        ...SubSchemaStringEnumPropertyDependencies,
        typeof subSchemaIntegerProperty.schema,
        ...SubSchemaIntegerPropertyDependencies,
        typeof subSchemaNumberProperty.schema,
        ...SubSchemaNumberPropertyDependencies,
        typeof subSchemaBooleanProperty.schema,
        ...SubSchemaBooleanPropertyDependencies,
        typeof subSchemaResourceProperty.schema,
        ...SubSchemaResourcePropertyDependencies,
        typeof subSchemaResourceArrayProperty.schema,
        ...SubSchemaResourceArrayPropertyDependencies
    ];
}>;
export type SubObjectPropertyDependencies = [
    typeof subSchemaStringProperty.schema,
    ...SubSchemaStringPropertyDependencies,
    typeof subSchemaStringEnumProperty.schema,
    ...SubSchemaStringEnumPropertyDependencies,
    typeof subSchemaIntegerProperty.schema,
    ...SubSchemaIntegerPropertyDependencies,
    typeof subSchemaNumberProperty.schema,
    ...SubSchemaNumberPropertyDependencies,
    typeof subSchemaBooleanProperty.schema,
    ...SubSchemaBooleanPropertyDependencies,
    typeof subSchemaResourceProperty.schema,
    ...SubSchemaResourcePropertyDependencies,
    typeof subSchemaResourceArrayProperty.schema,
    ...SubSchemaResourceArrayPropertyDependencies
];
type InferSubObjectPropertyProp<T extends SubObjectProperty[string]> = T extends SubSchemaStringEnumProperty ? InferSubSchemaStringEnumProperty<T> : T extends SubSchemaIntegerProperty ? InferSubSchemaIntegerProperty<T> : T extends SubSchemaNumberProperty ? InferSubSchemaNumberProperty<T> : T extends SubSchemaBooleanProperty ? InferSubSchemaBooleanProperty<T> : T extends SubSchemaResourceProperty ? InferSubSchemaResourceProperty<T> : T extends SubSchemaStringProperty ? InferSubSchemaStringProperty<T> : never;
export type InferSubObjectProperty<T extends SubObjectProperty, RequiredKeys extends string | never> = Resolve<{
    [Key in RequiredKeys]: InferSubObjectPropertyProp<T[Key]>;
} & {
    [Key in Exclude<keyof T, RequiredKeys>]?: InferSubObjectPropertyProp<T[Key]>;
}>;
declare const _default: {
    schema: {
        readonly $id: "subObjectProperties";
        readonly title: "Utils: Sub-object properties definition";
        readonly type: "object";
        readonly patternProperties: {
            readonly '^': {
                readonly oneOf: readonly [{
                    readonly $ref: "subSchemaStringProperty";
                }, {
                    readonly $ref: "subSchemaStringEnumProperty";
                }, {
                    readonly $ref: "subSchemaIntegerProperty";
                }, {
                    readonly $ref: "subSchemaNumberProperty";
                }, {
                    readonly $ref: "subSchemaBooleanProperty";
                }, {
                    readonly $ref: "subSchemaResourceProperty";
                }, {
                    readonly $ref: "subSchemaResourceArrayProperty";
                }];
            };
        };
        readonly additionalProperties: false;
    };
};
export default _default;
//# sourceMappingURL=sub-object-property.d.ts.map