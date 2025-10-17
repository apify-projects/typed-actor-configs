const subSchemaStringEnumProperty = {
    $id: 'subSchemaStringEnumProperty',
    title: 'Sub-schema: Enum property',
    type: 'object',
    additionalProperties: false,
    properties: {
        type: { enum: ['string'] },
        editor: { enum: ['select'] },
        title: { type: 'string' },
        description: { type: 'string' },
        nullable: { type: 'boolean' },
        enum: {
            type: 'array',
            items: { type: 'string' },
            minItems: 1,
            uniqueItems: true,
        },
        enumTitles: {
            type: 'array',
            items: { type: 'string' },
            minItems: 1,
        },
    },
    required: ['type', 'title', 'description', 'enum'],
};
export default {
    schema: subSchemaStringEnumProperty,
};
//# sourceMappingURL=sub-schema-string-enum-property.js.map