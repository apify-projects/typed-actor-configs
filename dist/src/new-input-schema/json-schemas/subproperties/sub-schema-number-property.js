const subSchemaNumberProperty = {
    $id: 'subSchemaNumberProperty',
    title: 'Sub-schema: Number property',
    type: 'object',
    additionalProperties: false,
    properties: {
        type: { enum: ['number'] },
        title: { type: 'string' },
        description: { type: 'string' },
        nullable: { type: 'boolean' },
        minimum: { type: 'number' },
        maximum: { type: 'number' },
        unit: { type: 'string' },
        editor: { enum: ['number', 'hidden'] },
    },
    required: ['type', 'title', 'description'],
};
export default {
    schema: subSchemaNumberProperty,
};
//# sourceMappingURL=sub-schema-number-property.js.map