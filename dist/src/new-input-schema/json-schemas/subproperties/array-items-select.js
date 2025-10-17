const arrayItemsSelect = {
    $id: 'arrayItemsSelect',
    title: 'Utils: Array items select definition',
    type: 'object',
    additionalProperties: false,
    properties: {
        type: { enum: ['string'] },
        enum: {
            type: 'array',
            items: { type: 'string' },
            uniqueItems: true,
        },
        enumTitles: {
            type: 'array',
            items: { type: 'string' },
        },
    },
    required: ['type', 'enum'],
};
export default {
    schema: arrayItemsSelect,
};
//# sourceMappingURL=array-items-select.js.map