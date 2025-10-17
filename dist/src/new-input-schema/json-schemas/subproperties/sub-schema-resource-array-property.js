const subSchemaResourceArrayProperty = {
    $id: 'subSchemaResourceArrayProperty',
    title: 'Sub-schema: Resource array property',
    type: 'object',
    additionalProperties: false,
    properties: {
        type: { enum: ['array'] },
        title: { type: 'string' },
        description: { type: 'string' },
        editor: { enum: ['resourcePicker', 'hidden'] },
        resourcePermissions: {
            type: 'array',
            items: {
                type: 'string',
                enum: ['READ', 'WRITE'],
            },
            minItems: 1,
            uniqueItems: true,
            contains: {
                const: 'READ',
            },
        },
        nullable: { type: 'boolean' },
        minItems: { type: 'integer' },
        maxItems: { type: 'integer' },
        uniqueItems: { type: 'boolean' },
        resourceType: { enum: ['dataset', 'keyValueStore', 'requestQueue'] },
    },
    required: ['type', 'title', 'description', 'resourceType'],
};
export default {
    schema: subSchemaResourceArrayProperty,
};
//# sourceMappingURL=sub-schema-resource-array-property.js.map