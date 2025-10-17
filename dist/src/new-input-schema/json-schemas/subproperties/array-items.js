import subSchemaStringProperty from "./sub-schema-string-property.js";
import subSchemaStringEnumProperty from "./sub-schema-string-enum-property.js";
import subSchemaIntegerProperty from "./sub-schema-integer-property.js";
import subSchemaNumberProperty from "./sub-schema-number-property.js";
import subSchemaBooleanProperty from "./sub-schema-boolean-property.js";
import subSchemaResourceProperty from "./sub-schema-resource-property.js";
const arrayItems = {
    $id: 'arrayItems',
    title: 'Utils: Array items definition',
    type: 'object',
    properties: {
        type: { enum: ['string', 'integer', 'boolean', 'object'] },
        // type: { enum: ['string', 'integer', 'boolean', 'object', 'array'] },
    },
    required: ['type'],
    if: {
        properties: {
            type: { enum: ['object'] },
        },
    },
    then: {
        additionalProperties: false,
        properties: {
            type: { enum: ['object'] },
            properties: {
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
                            // { $ref: subSchemaResourceArrayProperty.schema.$id },
                            // { $ref: '#/definitions/subSchemaStringEnumProperty' },
                            // { $ref: '#/definitions/subSchemaArrayProperty' },
                            // { $ref: '#/definitions/subSchemaObjectProperty' },
                            // { $ref: '#/definitions/subSchemaIntegerProperty' },
                            // { $ref: '#/definitions/subSchemaNumberProperty' },
                            // { $ref: '#/definitions/subSchemaBooleanProperty' },
                            // { $ref: '#/definitions/subSchemaResourceProperty' },
                            // { $ref: '#/definitions/subSchemaResourceArrayProperty' },
                        ],
                    },
                },
                additionalProperties: false,
            },
            required: {
                type: 'array',
                minItems: 0,
                items: { type: 'string' },
                uniqueItems: true,
            },
            additionalProperties: {
                type: 'boolean',
            },
        },
    },
    else: {
        // if: {
        //     properties: { type: { const: 'array' } },
        // },
        // then: {
        //     additionalProperties: false,
        //     properties: {
        //         type: { enum: ['array'] },
        //         items: {
        //             $ref: '#/definitions/arrayItems',
        //         },
        //     },
        // },
        // else: {
        additionalProperties: false,
        properties: {
            type: { enum: ['string', 'integer', 'boolean'] },
        },
        // },
    },
};
export default {
    schema: arrayItems,
};
//# sourceMappingURL=array-items.js.map