const arrayItemsKeyValue = {
    $id: 'arrayItemsKeyValue',
    title: 'Utils: Array items keyValue definition',
    type: 'object',
    additionalProperties: false,
    properties: {
        type: { enum: ['object'] },
        properties: {
            type: 'object',
            properties: {
                key: {
                    type: 'object',
                    additionalProperties: false,
                    properties: {
                        type: { enum: ['string'] },
                        title: { type: 'string' },
                        description: { type: 'string' },
                        pattern: { type: 'string' },
                        minLength: { type: 'integer' },
                        maxLength: { type: 'integer' },
                    },
                    required: ['type'],
                },
                value: {
                    type: 'object',
                    additionalProperties: false,
                    properties: {
                        type: { enum: ['string'] },
                        title: { type: 'string' },
                        description: { type: 'string' },
                        pattern: { type: 'string' },
                        minLength: { type: 'integer' },
                        maxLength: { type: 'integer' },
                    },
                    required: ['type'],
                },
            },
            required: ['key', 'value'],
            additionalProperties: false,
        },
        required: {
            type: 'array',
            minItems: 0,
            items: { type: 'string' },
            uniqueItems: true,
        },
        additionalProperties: { type: 'boolean' },
    },
    required: ['type', 'properties'],
};
export default {
    schema: arrayItemsKeyValue,
};
//# sourceMappingURL=array-items-key-value.js.map