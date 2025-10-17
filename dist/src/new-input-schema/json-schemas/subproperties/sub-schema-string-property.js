const subSchemaStringProperty = {
    $id: 'subSchemaStringProperty',
    title: 'Sub-schema: String property',
    type: 'object',
    additionalProperties: true,
    properties: {
        type: { enum: ['string'] },
        title: { type: 'string' },
        description: { type: 'string' },
        nullable: { type: 'boolean' },
        editor: {
            enum: ['javascript', 'python', 'textfield', 'textarea', 'datepicker', 'hidden', 'fileupload'],
        },
    },
    required: ['type', 'title', 'description'],
    if: {
        properties: {
            editor: { const: 'datepicker' },
        },
    },
    then: {
        additionalProperties: false,
        properties: {
            type: { enum: ['string'] },
            title: { type: 'string' },
            description: { type: 'string' },
            pattern: { type: 'string' },
            nullable: { type: 'boolean' },
            minLength: { type: 'integer' },
            maxLength: { type: 'integer' },
            editor: { enum: ['datepicker'] },
            dateType: { enum: ['absolute', 'relative', 'absoluteOrRelative'] },
        },
    },
    else: {
        additionalProperties: false,
        properties: {
            type: { enum: ['string'] },
            title: { type: 'string' },
            description: { type: 'string' },
            pattern: { type: 'string' },
            nullable: { type: 'boolean' },
            minLength: { type: 'integer' },
            maxLength: { type: 'integer' },
            editor: { enum: ['javascript', 'python', 'textfield', 'textarea', 'hidden', 'fileupload'] },
        },
    },
};
export default {
    schema: subSchemaStringProperty,
};
//# sourceMappingURL=sub-schema-string-property.js.map