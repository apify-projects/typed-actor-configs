const subSchemaBooleanProperty = {
    $id: 'subSchemaBooleanProperty',
    title: 'Sub-schema: Boolean property',
    type: 'object',
    additionalProperties: false,
    properties: {
        type: { enum: ['boolean'] },
        title: { type: 'string' },
        description: { type: 'string' },
        nullable: { type: 'boolean' },
        groupCaption: { type: 'string' },
        groupDescription: { type: 'string' },
        editor: { enum: ['checkbox', 'hidden'] },
    },
    required: ['type', 'title', 'description'],
};
export default {
    schema: subSchemaBooleanProperty,
};
//# sourceMappingURL=sub-schema-boolean-property.js.map