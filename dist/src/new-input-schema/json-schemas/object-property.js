import subObjectPropertyProxy from "./subproperties/sub-object-property-proxy.js";
import subObjectProperty from "./subproperties/sub-object-property.js";
const objectProperty = {
    $id: 'objectProperty',
    title: 'Object property',
    type: 'object',
    properties: {
        type: { enum: ['object'] },
        title: { type: 'string' },
        description: { type: 'string' },
        editor: { enum: ['json', 'proxy', 'schemaBased', 'hidden'] },
        isSecret: { type: 'boolean' },
    },
    required: ['type', 'title', 'description', 'editor'],
    if: {
        properties: {
            isSecret: { not: { const: true } },
        },
    },
    then: {
        properties: {
            type: { enum: ['object'] },
            title: { type: 'string' },
            description: { type: 'string' },
            prefill: { type: 'object' },
            example: { type: 'object' },
            patternKey: { type: 'string' },
            patternValue: { type: 'string' },
            nullable: { type: 'boolean' },
            minProperties: { type: 'integer' },
            maxProperties: { type: 'integer' },
            editor: { enum: ['json', 'proxy', 'schemaBased', 'hidden'] },
            sectionCaption: { type: 'string' },
            sectionDescription: { type: 'string' },
            isSecret: { enum: [false] },
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
        unevaluatedProperties: false,
        allOf: [
            {
                oneOf: [
                    {
                        properties: {
                            editor: { enum: ['proxy'] },
                            properties: { $ref: subObjectPropertyProxy.schema.$id },
                        },
                    },
                    {
                        properties: {
                            editor: { enum: ['json', 'schemaBased', 'hidden'] },
                            properties: { $ref: subObjectProperty.schema.$id },
                        },
                    },
                ],
            },
            {
                if: {
                    properties: { nullable: { const: false } },
                },
                then: {
                    properties: { default: { type: 'object' } },
                },
                else: {
                    properties: { default: { type: ['object', 'null'] } },
                },
            },
        ],
    },
    else: {
        additionalProperties: false,
        properties: {
            type: { enum: ['object'] },
            title: { type: 'string' },
            description: { type: 'string' },
            prefill: { type: 'object' },
            example: { type: 'object' },
            patternKey: { type: 'string' },
            patternValue: { type: 'string' },
            nullable: { type: 'boolean' },
            minProperties: { type: 'integer' },
            maxProperties: { type: 'integer' },
            editor: { enum: ['json', 'hidden'] },
            sectionCaption: { type: 'string' },
            sectionDescription: { type: 'string' },
            properties: { $ref: subObjectProperty.schema.$id },
            isSecret: { enum: [true] },
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
};
export default {
    schema: objectProperty,
};
//# sourceMappingURL=object-property.js.map