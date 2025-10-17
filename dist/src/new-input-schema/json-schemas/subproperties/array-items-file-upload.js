const arrayItemsFileupload = {
    $id: 'arrayItemsFileupload',
    title: 'Utils: Array items fileupload definition',
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
    schema: arrayItemsFileupload,
};
//# sourceMappingURL=array-items-file-upload.js.map