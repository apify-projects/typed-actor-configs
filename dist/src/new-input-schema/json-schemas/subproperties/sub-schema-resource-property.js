const subSchemaResourceProperty = {
    $id: 'subSchemaResourceProperty',
    title: 'Sub-schema: Resource property',
    type: 'object',
    additionalProperties: false,
    properties: {
        type: { enum: ['string'] },
        title: { type: 'string' },
        description: { type: 'string' },
        editor: { enum: ['resourcePicker', 'hidden'] },
        resourceType: { enum: ['dataset', 'keyValueStore', 'requestQueue'] },
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
    },
    required: ['type', 'title', 'description', 'resourceType'],
};
export default {
    schema: subSchemaResourceProperty,
};
//# sourceMappingURL=sub-schema-resource-property.js.map