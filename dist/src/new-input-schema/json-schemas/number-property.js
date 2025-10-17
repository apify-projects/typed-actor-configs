const numberProperty = {
    $id: 'numberProperty',
    title: 'Number property',
    type: 'object',
    unevaluatedProperties: false,
    properties: {
        type: { enum: ['number'] },
        title: { type: 'string' },
        description: { type: 'string' },
        prefill: { type: 'number' },
        example: { type: 'number' },
        nullable: { type: 'boolean' },
        minimum: { type: 'number' },
        maximum: { type: 'number' },
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
        properties: { default: { type: 'number' } },
    },
    else: {
        properties: { default: { type: ['number', 'null'] } },
    },
};
export default {
    schema: numberProperty,
};
//# sourceMappingURL=number-property.js.map