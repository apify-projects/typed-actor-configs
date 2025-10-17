const arrayItemsGlobs = {
    $id: 'arrayItemsGlobs',
    title: 'Utils: Array items globs definition',
    type: 'object',
    additionalProperties: false,
    properties: {
        type: { enum: ['object'] },
        properties: {
            type: 'object',
            additionalProperties: false,
            properties: {
                glob: {
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
                method: {
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
                payload: {
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
                userData: {
                    type: 'object',
                    additionalProperties: false,
                    properties: {
                        type: { enum: ['object'] },
                        title: { type: 'string' },
                        description: { type: 'string' },
                        properties: { type: 'object' },
                    },
                    required: ['type'],
                },
                headers: {
                    type: 'object',
                    additionalProperties: false,
                    properties: {
                        type: { enum: ['object'] },
                        title: { type: 'string' },
                        description: { type: 'string' },
                        properties: { type: 'object' },
                    },
                    required: ['type'],
                },
            },
        },
        required: {
            type: 'array',
            minItems: 0,
            items: { type: 'string' },
            uniqueItems: true,
        },
        additionalProperties: { type: 'boolean' },
    },
    required: ['type'],
};
export default {
    schema: arrayItemsGlobs,
};
//# sourceMappingURL=array-items-globs.js.map