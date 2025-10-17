const stringEnumProperty = {
    $id: 'stringEnumProperty',
    title: 'Enum property',
    type: 'object',
    unevaluatedProperties: false,
    properties: {
        type: { enum: ['string'] },
        editor: { enum: ['select'] },
        title: { type: 'string' },
        description: { type: 'string' },
        prefill: { type: 'string' },
        example: { type: 'string' },
        nullable: { type: 'boolean' },
        sectionCaption: { type: 'string' },
        sectionDescription: { type: 'string' },
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
    if: {
        properties: { nullable: { const: false } },
    },
    then: {
        properties: { default: { type: 'string' } },
    },
    else: {
        properties: { default: { type: ['string', 'null'] } },
    },
};
export default {
    schema: stringEnumProperty,
};
//# sourceMappingURL=string-enum-property.js.map