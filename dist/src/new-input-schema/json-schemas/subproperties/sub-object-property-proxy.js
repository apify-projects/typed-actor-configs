const subObjectPropertiesProxy = {
    $id: 'subObjectPropertiesProxy',
    title: 'Utils: Sub-object properties proxy definition',
    type: 'object',
    additionalProperties: false,
    properties: {
        useApifyProxy: {
            type: 'object',
            additionalProperties: false,
            properties: {
                type: { enum: ['boolean'] },
                title: { type: 'string' },
                description: { type: 'string' },
            },
            required: ['type'],
        },
        apifyProxyGroups: {
            type: 'object',
            additionalProperties: false,
            properties: {
                type: { enum: ['array'] },
                title: { type: 'string' },
                description: { type: 'string' },
                items: {
                    type: ['object'],
                    properties: {
                        type: { enum: ['string'] },
                    },
                    additionalProperties: false,
                    required: ['type'],
                },
            },
            required: ['type'],
        },
        proxyUrls: {
            type: 'object',
            additionalProperties: false,
            properties: {
                type: { enum: ['array'] },
                title: { type: 'string' },
                description: { type: 'string' },
                items: {
                    type: ['object'],
                    properties: {
                        type: { enum: ['string'] },
                    },
                    additionalProperties: false,
                    required: ['type'],
                },
            },
            required: ['type'],
        },
        apifyProxyCountry: {
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
};
export default {
    schema: subObjectPropertiesProxy,
};
//# sourceMappingURL=sub-object-property-proxy.js.map