import { FromSchema } from 'json-schema-to-ts';
import { SubPropertySchema } from './types.ts';

import subSchemaStringProperty, {
    type InferSubSchemaStringProperty,
    type SubSchemaStringProperty,
    type SubSchemaStringPropertyDependencies,
} from './sub-schema-string-property.ts';
import subSchemaStringEnumProperty, {
    type InferSubSchemaStringEnumProperty,
    type SubSchemaStringEnumProperty,
    type SubSchemaStringEnumPropertyDependencies,
} from './sub-schema-string-enum-property.ts';
// import subSchemaArrayProperty, {
//     type InferSubSchemaArrayProperty,
//     type SubSchemaArrayProperty,
//     type SubSchemaArrayPropertyDependencies,
// } from './sub-schema-array-property.ts';
// import subSchemaObjectProperty, {
//     type InferSubSchemaObjectProperty,
//     type SubSchemaObjectProperty,
//     type SubSchemaObjectPropertyDependencies,
// } from './sub-schema-object-property.ts';
import subSchemaIntegerProperty, {
    type InferSubSchemaIntegerProperty,
    type SubSchemaIntegerProperty,
    type SubSchemaIntegerPropertyDependencies,
} from './sub-schema-integer-property.ts';
import subSchemaNumberProperty, {
    type InferSubSchemaNumberProperty,
    type SubSchemaNumberProperty,
    type SubSchemaNumberPropertyDependencies,
} from './sub-schema-number-property.ts';
import subSchemaBooleanProperty, {
    type InferSubSchemaBooleanProperty,
    type SubSchemaBooleanProperty,
    type SubSchemaBooleanPropertyDependencies,
} from './sub-schema-boolean-property.ts';
import subSchemaResourceProperty, {
    type InferSubSchemaResourceProperty,
    type SubSchemaResourceProperty,
    type SubSchemaResourcePropertyDependencies,
} from './sub-schema-resource-property.ts';
import subSchemaResourceArrayProperty, {
    type InferSubSchemaResourceArrayProperty,
    type SubSchemaResourceArrayProperty,
    type SubSchemaResourceArrayPropertyDependencies,
} from './sub-schema-resource-array-property.ts';
import { Resolve } from '../types.ts';

const subObjectProperties = {
    $id: 'subObjectProperties',
    title: 'Utils: Sub-object properties definition',
    type: 'object',
    patternProperties: {
        '^': {
            oneOf: [
                { $ref: subSchemaStringProperty.schema.$id },
                { $ref: subSchemaStringEnumProperty.schema.$id },
                // { $ref: subSchemaArrayProperty.schema.$id },
                // { $ref: subSchemaObjectProperty.schema.$id },
                { $ref: subSchemaIntegerProperty.schema.$id },
                { $ref: subSchemaNumberProperty.schema.$id },
                { $ref: subSchemaBooleanProperty.schema.$id },
                { $ref: subSchemaResourceProperty.schema.$id },
                { $ref: subSchemaResourceArrayProperty.schema.$id },
            ],
        },
    },
    additionalProperties: false,
} as const satisfies SubPropertySchema;

export type SubObjectProperty = FromSchema<
    typeof subObjectProperties,
    {
        keepDefaultedPropertiesOptional: true;
        parseIfThenElseKeywords: true;
        parseNotKeyword: true;
        references: [
            typeof subSchemaStringProperty.schema,
            ...SubSchemaStringPropertyDependencies,
            typeof subSchemaStringEnumProperty.schema,
            ...SubSchemaStringEnumPropertyDependencies,
            // typeof subSchemaArrayProperty.schema,
            // typeof subSchemaObjectProperty.schema,
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
    }
>;

export type SubObjectPropertyDependencies = [
    typeof subSchemaStringProperty.schema,
    ...SubSchemaStringPropertyDependencies,
    typeof subSchemaStringEnumProperty.schema,
    ...SubSchemaStringEnumPropertyDependencies,
    // ...SubSchemaArrayPropertyDependencies,
    // ...SubSchemaObjectPropertyDependencies,
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

type InferSubObjectPropertyProp<T extends SubObjectProperty[string]> = T extends SubSchemaStringEnumProperty
    ? InferSubSchemaStringEnumProperty<T>
    : T extends SubSchemaIntegerProperty
    ? InferSubSchemaIntegerProperty<T>
    : T extends SubSchemaNumberProperty
    ? InferSubSchemaNumberProperty<T>
    : T extends SubSchemaBooleanProperty
    ? InferSubSchemaBooleanProperty<T>
    : T extends SubSchemaResourceProperty
    ? InferSubSchemaResourceProperty<T>
    : T extends SubSchemaStringProperty
    ? InferSubSchemaStringProperty<T>
    : never;

export type InferSubObjectProperty<T extends SubObjectProperty, RequiredKeys extends string | never> = Resolve<
    { [Key in RequiredKeys]: InferSubObjectPropertyProp<T[Key]> } & {
        [Key in Exclude<keyof T, RequiredKeys>]?: InferSubObjectPropertyProp<T[Key]>;
    }
>;

export default {
    schema: subObjectProperties,
};
