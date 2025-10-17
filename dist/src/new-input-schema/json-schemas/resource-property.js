const resourceProperty = {
    $id: 'resourceProperty',
    title: 'Resource property',
    type: 'object',
    unevaluatedProperties: false,
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
        prefill: { type: 'string' },
        example: { type: 'string' },
        nullable: { type: 'boolean' },
        sectionCaption: { type: 'string' },
        sectionDescription: { type: 'string' },
    },
    required: ['type', 'title', 'description', 'resourceType'],
    allOf: [
        {
            if: {
                required: ['resourcePermissions'],
            },
            then: {
                not: {
                    anyOf: [{ required: ['prefill'] }, { required: ['default'] }],
                },
            },
        },
        {
            if: {
                properties: { nullable: { const: false } },
            },
            then: {
                properties: { default: { type: 'string' } },
            },
            else: {
                properties: { default: { type: ['string', 'null'] } },
            },
        },
    ],
};
export default {
    schema: resourceProperty,
};
//# sourceMappingURL=resource-property.js.map