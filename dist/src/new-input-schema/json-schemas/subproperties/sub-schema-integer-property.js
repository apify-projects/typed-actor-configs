const subSchemaIntegerProperty = {
    $id: 'subSchemaIntegerProperty',
    title: 'Sub-schema: Integer property',
    type: 'object',
    additionalProperties: false,
    properties: {
        type: { enum: ['integer'] },
        title: { type: 'string' },
        description: { type: 'string' },
        nullable: { type: 'boolean' },
        minimum: { type: 'integer' },
        maximum: { type: 'integer' },
        unit: { type: 'string' },
        editor: { enum: ['number', 'hidden'] },
    },
    required: ['type', 'title', 'description'],
};
export default {
    schema: subSchemaIntegerProperty,
};
//# sourceMappingURL=sub-schema-integer-property.js.map