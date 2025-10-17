const arrayItemsStringList = {
    $id: 'arrayItemsStringList',
    title: 'Utils: Array items stringList definition',
    type: 'object',
    additionalProperties: false,
    properties: {
        type: { enum: ['string'] },
        pattern: { type: 'string' },
        minLength: { type: 'integer' },
        maxLength: { type: 'integer' },
    },
    required: ['type'],
};
export default {
    schema: arrayItemsStringList,
};
//# sourceMappingURL=array-items-string-list.js.map