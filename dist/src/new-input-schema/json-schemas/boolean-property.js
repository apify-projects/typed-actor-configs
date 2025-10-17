const booleanProperty = {
    $id: 'booleanProperty',
    title: 'Boolean property',
    type: 'object',
    unevaluatedProperties: false,
    properties: {
        type: { enum: ['boolean'] },
        title: { type: 'string' },
        description: { type: 'string' },
        prefill: { type: 'boolean' },
        example: { type: 'boolean' },
        nullable: { type: 'boolean' },
        groupCaption: { type: 'string' },
        groupDescription: { type: 'string' },
        editor: { enum: ['checkbox', 'hidden'] },
        sectionCaption: { type: 'string' },
        sectionDescription: { type: 'string' },
    },
    required: ['type', 'title', 'description'],
    if: {
        properties: { nullable: { const: false } },
    },
    then: {
        properties: { default: { type: 'boolean' } },
    },
    else: {
        properties: { default: { type: ['boolean', 'null'] } },
    },
};
export default {
    schema: booleanProperty,
};
//# sourceMappingURL=boolean-property.js.map