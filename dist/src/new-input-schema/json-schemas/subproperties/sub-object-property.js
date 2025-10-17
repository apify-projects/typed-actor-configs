import subSchemaStringProperty from "./sub-schema-string-property.js";
import subSchemaStringEnumProperty from "./sub-schema-string-enum-property.js";
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
import subSchemaIntegerProperty from "./sub-schema-integer-property.js";
import subSchemaNumberProperty from "./sub-schema-number-property.js";
import subSchemaBooleanProperty from "./sub-schema-boolean-property.js";
import subSchemaResourceProperty from "./sub-schema-resource-property.js";
import subSchemaResourceArrayProperty from "./sub-schema-resource-array-property.js";
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
};
export default {
    schema: subObjectProperties,
};
//# sourceMappingURL=sub-object-property.js.map