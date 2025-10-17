const integerProperty = {
    $id: 'integerProperty',
    title: 'Integer property',
    type: 'object',
    unevaluatedProperties: false,
    properties: {
        type: { enum: ['integer'] },
        title: { type: 'string' },
        description: { type: 'string' },
        prefill: { type: 'integer' },
        example: { type: 'integer' },
        nullable: { type: 'boolean' },
        minimum: { type: 'integer' },
        maximum: { type: 'integer' },
        unit: { type: 'string' },
        editor: { enum: ['number', 'hidden'] },
        sectionCaption: { type: 'string' },
        sectionDescription: { type: 'string' },
    },
    required: ['type', 'title', 'description'],
    if: {
        properties: { nullable: { const: false } },
    },
    then: {
        properties: { default: { type: 'integer' } },
    },
    else: {
        properties: { default: { type: ['integer', 'null'] } },
    },
};
export default {
    schema: integerProperty,
};
//# sourceMappingURL=integer-property.js.map