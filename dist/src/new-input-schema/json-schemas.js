const stringEnumProperty = {
    $id: 'stringEnumProperty',
    title: 'Enum property',
    type: 'object',
    unevaluatedProperties: false,
    properties: {
        type: { enum: ['string'] },
        editor: { enum: ['select'] },
        title: { type: 'string' },
        description: { type: 'string' },
        prefill: { type: 'string' },
        example: { type: 'string' },
        nullable: { type: 'boolean' },
        sectionCaption: { type: 'string' },
        sectionDescription: { type: 'string' },
        enum: {
            type: 'array',
            items: { type: 'string' },
            minItems: 1,
            uniqueItems: true,
        },
        enumTitles: {
            type: 'array',
            items: { type: 'string' },
            minItems: 1,
        },
    },
    required: ['type', 'title', 'description', 'enum'],
    if: {
        properties: { nullable: { const: false } },
    },
    then: {
        properties: { default: { type: 'string' } },
    },
    else: {
        properties: { default: { type: ['string', 'null'] } },
    },
};
const stringProperty = {
    $id: 'stringProperty',
    title: 'String property',
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
        isSecret: { type: 'boolean' },
    },
    required: ['type', 'title', 'description', 'editor'],
    if: {
        properties: {
            isSecret: {
                not: {
                    const: true,
                },
            },
        },
    },
    then: {
        properties: {
            type: { enum: ['string'] },
            title: { type: 'string' },
            description: { type: 'string' },
            prefill: { type: 'string' },
            example: { type: 'string' },
            pattern: { type: 'string' },
            nullable: { type: 'boolean' },
            minLength: { type: 'integer' },
            maxLength: { type: 'integer' },
            sectionCaption: { type: 'string' },
            sectionDescription: { type: 'string' },
            isSecret: { enum: [false] },
        },
        unevaluatedProperties: false,
        allOf: [
            {
                if: {
                    properties: {
                        editor: { const: 'datepicker' },
                    },
                },
                then: {
                    properties: {
                        editor: { enum: ['datepicker'] },
                        dateType: { enum: ['absolute', 'relative', 'absoluteOrRelative'] },
                    },
                },
                else: {
                    properties: {
                        editor: {
                            enum: ['javascript', 'python', 'textfield', 'textarea', 'hidden', 'fileupload'],
                        },
                    },
                },
            },
            {
                if: {
                    properties: { nullable: { const: false } },
                },
                then: {
                    properties: { default: { type: 'string' } },
                },
                else: {
                    properties: { default: { type: ['string', 'null'] } },
                },
            },
        ],
    },
    else: {
        additionalProperties: false,
        properties: {
            type: { enum: ['string'] },
            title: { type: 'string' },
            description: { type: 'string' },
            prefill: { type: 'string' },
            example: { type: 'string' },
            nullable: { type: 'boolean' },
            editor: { enum: ['textfield', 'textarea', 'hidden'] },
            isSecret: { enum: [true] },
            sectionCaption: { type: 'string' },
            sectionDescription: { type: 'string' },
        },
    },
};
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
const resourceProperty = {
    $id: 'resourceProperty',
    title: 'Resource property',
    type: 'object',
    unevaluatedProperties: false,
    properties: {
        type: { enum: ['string'] },
        title: { type: 'string' },
        description: { type: 'string' },
        editor: { enum: ['resourcePicker', 'hidden'] },
        resourceType: { enum: ['dataset', 'keyValueStore', 'requestQueue'] },
        resourcePermissions: {
            type: 'array',
            items: {
                type: 'string',
                enum: ['READ', 'WRITE'],
            },
            minItems: 1,
            uniqueItems: true,
            contains: {
                const: 'READ',
            },
        },
        prefill: { type: 'string' },
        example: { type: 'string' },
        nullable: { type: 'boolean' },
        sectionCaption: { type: 'string' },
        sectionDescription: { type: 'string' },
    },
    required: ['type', 'title', 'description', 'resourceType'],
    allOf: [
        {
            if: {
                required: ['resourcePermissions'],
            },
            then: {
                not: {
                    anyOf: [{ required: ['prefill'] }, { required: ['default'] }],
                },
            },
        },
        {
            if: {
                properties: { nullable: { const: false } },
            },
            then: {
                properties: { default: { type: 'string' } },
            },
            else: {
                properties: { default: { type: ['string', 'null'] } },
            },
        },
    ],
};
const arrayProperty = {
    $id: 'arrayProperty',
    title: 'Array property',
    type: 'object',
    properties: {
        type: { enum: ['array'] },
        editor: {
            enum: [
                'json',
                'requestListSources',
                'pseudoUrls',
                'globs',
                'keyValue',
                'stringList',
                'fileupload',
                'select',
                'schemaBased',
                'hidden',
            ],
        },
        isSecret: { type: 'boolean' },
    },
    required: ['type', 'title', 'description', 'editor'],
    if: {
        properties: {
            isSecret: { not: { const: true } },
        },
    },
    then: {
        properties: {
            type: { enum: ['array'] },
            title: { type: 'string' },
            description: { type: 'string' },
            prefill: { type: 'array' },
            example: { type: 'array' },
            nullable: { type: 'boolean' },
            minItems: { type: 'integer' },
            maxItems: { type: 'integer' },
            uniqueItems: { type: 'boolean' },
            sectionCaption: { type: 'string' },
            sectionDescription: { type: 'string' },
            placeholderKey: { type: 'string' },
            placeholderValue: { type: 'string' },
            patternKey: { type: 'string' },
            patternValue: { type: 'string' },
            isSecret: { enum: [false] },
        },
        unevaluatedProperties: false,
        allOf: [
            {
                oneOf: [
                    {
                        required: ['editor'],
                        properties: {
                            editor: { enum: ['select'] },
                            items: { $ref: '#/definitions/arrayItemsSelect' },
                        },
                    },
                    {
                        required: ['editor'],
                        properties: {
                            editor: { enum: ['keyValue'] },
                            items: { $ref: '#/definitions/arrayItemsKeyValue' },
                        },
                    },
                    {
                        required: ['editor'],
                        properties: {
                            editor: { enum: ['fileupload'] },
                            items: { $ref: '#/definitions/arrayItemsFileupload' },
                        },
                    },
                    {
                        required: ['editor'],
                        properties: {
                            editor: { enum: ['stringList'] },
                            items: { $ref: '#/definitions/arrayItemsStringList' },
                        },
                    },
                    {
                        required: ['editor'],
                        properties: {
                            editor: { enum: ['globs'] },
                            items: { $ref: '#/definitions/arrayItemsGlobs' },
                        },
                    },
                    {
                        required: ['editor'],
                        properties: {
                            editor: { enum: ['pseudoUrls'] },
                            items: { $ref: '#/definitions/arrayItemsPseudoUrls' },
                        },
                    },
                    {
                        required: ['editor'],
                        properties: {
                            editor: { enum: ['requestListSources'] },
                            items: { $ref: '#/definitions/arrayItemsRequestListSources' },
                        },
                    },
                    {
                        required: ['editor'],
                        properties: {
                            editor: { enum: ['json', 'schemaBased', 'hidden'] },
                            items: { $ref: '#/definitions/arrayItems' },
                        },
                    },
                    {
                        not: { required: ['editor'] },
                        properties: { items: { $ref: '#/definitions/arrayItems' } },
                    },
                ],
            },
            {
                if: {
                    properties: { nullable: { const: false } },
                },
                then: {
                    properties: { default: { type: 'array' } },
                },
                else: {
                    properties: { default: { type: ['array', 'null'] } },
                },
            },
        ],
    },
    else: {
        additionalProperties: false,
        properties: {
            type: { enum: ['array'] },
            editor: { enum: ['json', 'hidden'] },
            title: { type: 'string' },
            description: { type: 'string' },
            prefill: { type: 'array' },
            example: { type: 'array' },
            nullable: { type: 'boolean' },
            minItems: { type: 'integer' },
            maxItems: { type: 'integer' },
            uniqueItems: { type: 'boolean' },
            sectionCaption: { type: 'string' },
            sectionDescription: { type: 'string' },
            items: { $ref: '#/definitions/arrayItems' },
            isSecret: { enum: [true] },
        },
    },
    definitions: {
        arrayItems: {
            title: 'Utils: Array items definition',
            type: 'object',
            properties: {
                type: { enum: ['string', 'integer', 'boolean', 'object'] },
                // type: { enum: ['string', 'integer', 'boolean', 'object', 'array'] },
            },
            required: ['type'],
            if: {
                properties: {
                    type: { enum: ['object'] },
                },
            },
            then: {
                additionalProperties: false,
                properties: {
                    type: { enum: ['object'] },
                    properties: {
                        type: 'object',
                        patternProperties: {
                            '^': {
                                oneOf: [
                                    { $ref: '#/definitions/subSchemaStringProperty' },
                                    { $ref: '#/definitions/subSchemaStringEnumProperty' },
                                    { $ref: '#/definitions/subSchemaArrayProperty' },
                                    { $ref: '#/definitions/subSchemaObjectProperty' },
                                    { $ref: '#/definitions/subSchemaIntegerProperty' },
                                    { $ref: '#/definitions/subSchemaNumberProperty' },
                                    { $ref: '#/definitions/subSchemaBooleanProperty' },
                                    { $ref: '#/definitions/subSchemaResourceProperty' },
                                    { $ref: '#/definitions/subSchemaResourceArrayProperty' },
                                ],
                            },
                        },
                        additionalProperties: false,
                    },
                    required: {
                        type: 'array',
                        minItems: 0,
                        items: { type: 'string' },
                        uniqueItems: true,
                    },
                    additionalProperties: {
                        type: 'boolean',
                    },
                },
            },
            else: {
                // if: {
                //     properties: { type: { const: 'array' } },
                // },
                // then: {
                //     additionalProperties: false,
                //     properties: {
                //         type: { enum: ['array'] },
                //         items: {
                //             $ref: '#/definitions/arrayItems',
                //         },
                //     },
                // },
                // else: {
                additionalProperties: false,
                properties: {
                    type: { enum: ['string', 'integer', 'boolean'] },
                },
                // },
            },
        },
        arrayItemsSelect: {
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
        },
        arrayItemsKeyValue: {
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
        },
        arrayItemsStringList: {
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
        },
        arrayItemsFileupload: {
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
        },
        arrayItemsGlobs: {
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
        },
        arrayItemsPseudoUrls: {
            title: 'Utils: Array items pseudoUrls definition',
            type: 'object',
            additionalProperties: false,
            properties: {
                type: { enum: ['object'] },
                properties: {
                    type: 'object',
                    additionalProperties: false,
                    properties: {
                        purl: {
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
        },
        arrayItemsRequestListSources: {
            title: 'Utils: Array items requestListSources definition',
            type: 'object',
            additionalProperties: false,
            properties: {
                type: { enum: ['object'] },
                properties: {
                    type: 'object',
                    additionalProperties: false,
                    properties: {
                        url: {
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
        },
    },
};
const resourceArrayProperty = {
    $id: 'resourceArrayProperty',
    title: 'Resource array property',
    type: 'object',
    unevaluatedProperties: false,
    properties: {
        type: { enum: ['array'] },
        title: { type: 'string' },
        description: { type: 'string' },
        editor: { enum: ['resourcePicker', 'hidden'] },
        resourcePermissions: {
            type: 'array',
            items: {
                type: 'string',
                enum: ['READ', 'WRITE'],
            },
            minItems: 1,
            uniqueItems: true,
            contains: {
                const: 'READ',
            },
        },
        prefill: { type: 'array' },
        example: { type: 'array' },
        nullable: { type: 'boolean' },
        minItems: { type: 'integer' },
        maxItems: { type: 'integer' },
        uniqueItems: { type: 'boolean' },
        resourceType: { enum: ['dataset', 'keyValueStore', 'requestQueue'] },
        sectionCaption: { type: 'string' },
        sectionDescription: { type: 'string' },
    },
    required: ['type', 'title', 'description', 'resourceType'],
    allOf: [
        {
            if: {
                required: ['resourcePermissions'],
            },
            then: {
                not: {
                    anyOf: [{ required: ['prefill'] }, { required: ['default'] }],
                },
            },
        },
        {
            if: {
                properties: { nullable: { const: false } },
            },
            then: {
                properties: { default: { type: 'array' } },
            },
            else: {
                properties: { default: { type: ['array', 'null'] } },
            },
        },
    ],
};
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
const subSchemaStringEnumProperty = {
    $id: 'subSchemaStringEnumProperty',
    title: 'Sub-schema: Enum property',
    type: 'object',
    additionalProperties: false,
    properties: {
        type: { enum: ['string'] },
        editor: { enum: ['select'] },
        title: { type: 'string' },
        description: { type: 'string' },
        nullable: { type: 'boolean' },
        enum: {
            type: 'array',
            items: { type: 'string' },
            minItems: 1,
            uniqueItems: true,
        },
        enumTitles: {
            type: 'array',
            items: { type: 'string' },
            minItems: 1,
        },
    },
    required: ['type', 'title', 'description', 'enum'],
};
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
const subSchemaArrayProperty = {
    $id: 'subSchemaArrayProperty',
    title: 'Sub-schema: Array property',
    type: 'object',
    properties: {
        type: { enum: ['array'] },
        editor: {
            enum: [
                'json',
                'requestListSources',
                'pseudoUrls',
                'globs',
                'keyValue',
                'stringList',
                'fileupload',
                'select',
                'hidden',
            ],
        },
        title: { type: 'string' },
        description: { type: 'string' },
        nullable: { type: 'boolean' },
        minItems: { type: 'integer' },
        maxItems: { type: 'integer' },
        uniqueItems: { type: 'boolean' },
        placeholderKey: { type: 'string' },
        placeholderValue: { type: 'string' },
        patternKey: { type: 'string' },
        patternValue: { type: 'string' },
    },
    required: ['type', 'title', 'description'],
    unevaluatedProperties: false,
    oneOf: [
        {
            required: ['editor'],
            properties: {
                editor: { enum: ['select'] },
                items: { $ref: '#/definitions/arrayItemsSelect' },
            },
        },
        {
            required: ['editor'],
            properties: {
                editor: { enum: ['keyValue'] },
                items: { $ref: '#/definitions/arrayItemsKeyValue' },
            },
        },
        {
            required: ['editor'],
            properties: {
                editor: { enum: ['fileupload'] },
                items: { $ref: '#/definitions/arrayItemsFileupload' },
            },
        },
        {
            required: ['editor'],
            properties: {
                editor: { enum: ['stringList'] },
                items: { $ref: '#/definitions/arrayItemsStringList' },
            },
        },
        {
            required: ['editor'],
            properties: {
                editor: { enum: ['globs'] },
                items: { $ref: '#/definitions/arrayItemsGlobs' },
            },
        },
        {
            required: ['editor'],
            properties: {
                editor: { enum: ['pseudoUrls'] },
                items: { $ref: '#/definitions/arrayItemsPseudoUrls' },
            },
        },
        {
            required: ['editor'],
            properties: {
                editor: { enum: ['requestListSources'] },
                items: { $ref: '#/definitions/arrayItemsRequestListSources' },
            },
        },
        {
            required: ['editor'],
            properties: {
                editor: { enum: ['json', 'schemaBased', 'hidden'] },
                items: { $ref: '#/definitions/arrayItems' },
            },
        },
        {
            not: { required: ['editor'] },
            properties: { items: { $ref: '#/definitions/arrayItems' } },
        },
    ],
}; // falta
const subSchemaIntegerProperty = {
    $id: 'subSchemaIntegerProperty',
    title: 'Sub-schema: Integer property',
    type: 'object',
    additionalProperties: false,
    properties: {
        type: { enum: ['integer'] },
        title: { type: 'string' },
        description: { type: 'string' },
        nullable: { type: 'boolean' },
        minimum: { type: 'integer' },
        maximum: { type: 'integer' },
        unit: { type: 'string' },
        editor: { enum: ['number', 'hidden'] },
    },
    required: ['type', 'title', 'description'],
};
const subSchemaNumberProperty = {
    $id: 'subSchemaNumberProperty',
    title: 'Sub-schema: Number property',
    type: 'object',
    additionalProperties: false,
    properties: {
        type: { enum: ['number'] },
        title: { type: 'string' },
        description: { type: 'string' },
        nullable: { type: 'boolean' },
        minimum: { type: 'number' },
        maximum: { type: 'number' },
        unit: { type: 'string' },
        editor: { enum: ['number', 'hidden'] },
    },
    required: ['type', 'title', 'description'],
};
const subSchemaBooleanProperty = {
    $id: 'subSchemaBooleanProperty',
    title: 'Sub-schema: Boolean property',
    type: 'object',
    additionalProperties: false,
    properties: {
        type: { enum: ['boolean'] },
        title: { type: 'string' },
        description: { type: 'string' },
        nullable: { type: 'boolean' },
        groupCaption: { type: 'string' },
        groupDescription: { type: 'string' },
        editor: { enum: ['checkbox', 'hidden'] },
    },
    required: ['type', 'title', 'description'],
};
const subSchemaObjectProperty = {
    $id: 'subSchemaObjectProperty',
    title: 'Sub-schema: Object property',
    type: 'object',
    additionalProperties: false,
    properties: {
        type: { enum: ['object'] },
        title: { type: 'string' },
        description: { type: 'string' },
        patternKey: { type: 'string' },
        patternValue: { type: 'string' },
        nullable: { type: 'boolean' },
        minProperties: { type: 'integer' },
        maxProperties: { type: 'integer' },
        editor: { enum: ['json', 'proxy', 'hidden'] },
        properties: { $ref: '#/definitions/subObjectProperties' },
        required: {
            type: 'array',
            minItems: 0,
            items: { type: 'string' },
            uniqueItems: true,
        },
        additionalProperties: {
            type: 'boolean',
        },
    },
    required: ['type', 'title', 'description'],
}; // falta
const subSchemaResourceProperty = {
    $id: 'subSchemaResourceProperty',
    title: 'Sub-schema: Resource property',
    type: 'object',
    additionalProperties: false,
    properties: {
        type: { enum: ['string'] },
        title: { type: 'string' },
        description: { type: 'string' },
        editor: { enum: ['resourcePicker', 'hidden'] },
        resourceType: { enum: ['dataset', 'keyValueStore', 'requestQueue'] },
        resourcePermissions: {
            type: 'array',
            items: {
                type: 'string',
                enum: ['READ', 'WRITE'],
            },
            minItems: 1,
            uniqueItems: true,
            contains: {
                const: 'READ',
            },
        },
        nullable: { type: 'boolean' },
    },
    required: ['type', 'title', 'description', 'resourceType'],
};
const subSchemaResourceArrayProperty = {
    $id: 'subSchemaResourceArrayProperty',
    title: 'Sub-schema: Resource array property',
    type: 'object',
    additionalProperties: false,
    properties: {
        type: { enum: ['array'] },
        title: { type: 'string' },
        description: { type: 'string' },
        editor: { enum: ['resourcePicker', 'hidden'] },
        resourcePermissions: {
            type: 'array',
            items: {
                type: 'string',
                enum: ['READ', 'WRITE'],
            },
            minItems: 1,
            uniqueItems: true,
            contains: {
                const: 'READ',
            },
        },
        nullable: { type: 'boolean' },
        minItems: { type: 'integer' },
        maxItems: { type: 'integer' },
        uniqueItems: { type: 'boolean' },
        resourceType: { enum: ['dataset', 'keyValueStore', 'requestQueue'] },
    },
    required: ['type', 'title', 'description', 'resourceType'],
};
const subObjectProperties = {
    $id: 'subObjectProperties',
    title: 'Utils: Sub-object properties definition',
    type: 'object',
    patternProperties: {
        '^': {
            oneOf: [
                { $ref: 'subSchemaStringProperty' },
                { $ref: 'subSchemaStringEnumProperty' },
                { $ref: 'subSchemaArrayProperty' },
                { $ref: 'subSchemaObjectProperty' },
                { $ref: 'subSchemaIntegerProperty' },
                { $ref: 'subSchemaNumberProperty' },
                { $ref: 'subSchemaBooleanProperty' },
                { $ref: 'subSchemaResourceProperty' },
                { $ref: 'subSchemaResourceArrayProperty' },
            ],
        },
    },
    additionalProperties: false,
};
const objectProperty = {
    $id: 'objectProperty',
    title: 'Object property',
    type: 'object',
    properties: {
        type: { enum: ['object'] },
        title: { type: 'string' },
        description: { type: 'string' },
        editor: { enum: ['json', 'proxy', 'schemaBased', 'hidden'] },
        isSecret: { type: 'boolean' },
    },
    required: ['type', 'title', 'description', 'editor'],
    if: {
        properties: {
            isSecret: { not: { const: true } },
        },
    },
    then: {
        properties: {
            type: { enum: ['object'] },
            title: { type: 'string' },
            description: { type: 'string' },
            prefill: { type: 'object' },
            example: { type: 'object' },
            patternKey: { type: 'string' },
            patternValue: { type: 'string' },
            nullable: { type: 'boolean' },
            minProperties: { type: 'integer' },
            maxProperties: { type: 'integer' },
            editor: { enum: ['json', 'proxy', 'schemaBased', 'hidden'] },
            sectionCaption: { type: 'string' },
            sectionDescription: { type: 'string' },
            isSecret: { enum: [false] },
            required: {
                type: 'array',
                minItems: 0,
                items: { type: 'string' },
                uniqueItems: true,
            },
            additionalProperties: {
                type: 'boolean',
            },
        },
        unevaluatedProperties: false,
        allOf: [
            {
                oneOf: [
                    {
                        properties: {
                            editor: { enum: ['proxy'] },
                            properties: { $ref: 'subObjectPropertiesProxy' },
                        },
                    },
                    {
                        properties: {
                            editor: { enum: ['json', 'schemaBased', 'hidden'] },
                            properties: { $ref: 'subObjectProperties' },
                        },
                    },
                ],
            },
            {
                if: {
                    properties: { nullable: { const: false } },
                },
                then: {
                    properties: { default: { type: 'object' } },
                },
                else: {
                    properties: { default: { type: ['object', 'null'] } },
                },
            },
        ],
    },
    else: {
        additionalProperties: false,
        properties: {
            type: { enum: ['object'] },
            title: { type: 'string' },
            description: { type: 'string' },
            prefill: { type: 'object' },
            example: { type: 'object' },
            patternKey: { type: 'string' },
            patternValue: { type: 'string' },
            nullable: { type: 'boolean' },
            minProperties: { type: 'integer' },
            maxProperties: { type: 'integer' },
            editor: { enum: ['json', 'hidden'] },
            sectionCaption: { type: 'string' },
            sectionDescription: { type: 'string' },
            properties: { $ref: 'subObjectProperties' },
            isSecret: { enum: [true] },
            required: {
                type: 'array',
                minItems: 0,
                items: { type: 'string' },
                uniqueItems: true,
            },
            additionalProperties: {
                type: 'boolean',
            },
        },
    },
};
const input_schema = {
    $id: 'https://apify.com/schemas/v1/input.json',
    title: 'JSON schema of Apify Actor input',
    type: 'object',
    properties: {
        $schema: {
            type: 'string',
        },
        title: {
            type: 'string',
        },
        schemaVersion: {
            type: 'integer',
            minimum: 1,
            maximum: 1,
        },
        description: {
            type: 'string',
        },
        type: {
            enum: ['object'],
        },
        required: {
            type: 'array',
            minItems: 0,
            items: { type: 'string' },
            uniqueItems: true,
        },
        additionalProperties: {
            type: 'boolean',
        },
        properties: {
            type: 'object',
            patternProperties: {
                '^': {
                    oneOf: [
                        { $ref: 'stringProperty' },
                        // { $ref: '#/definitions/stringProperty' },
                        { $ref: 'stringEnumProperty' },
                        // { $ref: '#/definitions/stringEnumProperty' },
                        { $ref: 'arrayProperty' },
                        // { $ref: '#/definitions/arrayProperty' },
                        { $ref: 'objectProperty' },
                        // { $ref: '#/definitions/objectProperty' },
                        { $ref: 'integerProperty' },
                        // { $ref: '#/definitions/integerProperty' },
                        { $ref: 'numberProperty' },
                        // { $ref: '#/definitions/numberProperty' },
                        { $ref: 'booleanProperty' },
                        // { $ref: '#/definitions/booleanProperty' },
                        { $ref: 'resourceProperty' },
                        // { $ref: '#/definitions/resourceProperty' },
                        { $ref: 'resourceArrayProperty' },
                        // { $ref: '#/definitions/resourceArrayProperty' },
                        // { $ref: 'anyProperty' },
                        // { $ref: '#/definitions/anyProperty' },
                    ],
                },
            },
        },
    },
    additionalProperties: false,
    required: ['title', 'type', 'properties', 'schemaVersion'],
    // definitions: {
    // objectProperty: {
    //     title: 'Object property',
    //     type: 'object',
    //     properties: {
    //         type: { enum: ['object'] },
    //         title: { type: 'string' },
    //         description: { type: 'string' },
    //         editor: { enum: ['json', 'proxy', 'schemaBased', 'hidden'] },
    //         isSecret: { type: 'boolean' },
    //     },
    //     required: ['type', 'title', 'description', 'editor'],
    //     if: {
    //         properties: {
    //             isSecret: { not: { const: true } },
    //         },
    //     },
    //     then: {
    //         properties: {
    //             type: { enum: ['object'] },
    //             title: { type: 'string' },
    //             description: { type: 'string' },
    //             prefill: { type: 'object' },
    //             example: { type: 'object' },
    //             patternKey: { type: 'string' },
    //             patternValue: { type: 'string' },
    //             nullable: { type: 'boolean' },
    //             minProperties: { type: 'integer' },
    //             maxProperties: { type: 'integer' },
    //             editor: { enum: ['json', 'proxy', 'schemaBased', 'hidden'] },
    //             sectionCaption: { type: 'string' },
    //             sectionDescription: { type: 'string' },
    //             isSecret: { enum: [false] },
    //             required: {
    //                 type: 'array',
    //                 minItems: 0,
    //                 items: { type: 'string' },
    //                 uniqueItems: true,
    //             },
    //             additionalProperties: {
    //                 type: 'boolean',
    //             },
    //         },
    //         unevaluatedProperties: false,
    //         allOf: [
    //             {
    //                 oneOf: [
    //                     {
    //                         properties: {
    //                             editor: { enum: ['proxy'] },
    //                             properties: { $ref: '#/definitions/subObjectPropertiesProxy' },
    //                         },
    //                     },
    //                     {
    //                         properties: {
    //                             editor: { enum: ['json', 'schemaBased', 'hidden'] },
    //                             properties: { $ref: '#/definitions/subObjectProperties' },
    //                         },
    //                     },
    //                 ],
    //             },
    //             {
    //                 if: {
    //                     properties: { nullable: { const: false } },
    //                 },
    //                 then: {
    //                     properties: { default: { type: 'object' } },
    //                 },
    //                 else: {
    //                     properties: { default: { type: ['object', 'null'] } },
    //                 },
    //             },
    //         ],
    //     },
    //     else: {
    //         additionalProperties: false,
    //         properties: {
    //             type: { enum: ['object'] },
    //             title: { type: 'string' },
    //             description: { type: 'string' },
    //             prefill: { type: 'object' },
    //             example: { type: 'object' },
    //             patternKey: { type: 'string' },
    //             patternValue: { type: 'string' },
    //             nullable: { type: 'boolean' },
    //             minProperties: { type: 'integer' },
    //             maxProperties: { type: 'integer' },
    //             editor: { enum: ['json', 'hidden'] },
    //             sectionCaption: { type: 'string' },
    //             sectionDescription: { type: 'string' },
    //             properties: { $ref: '#/definitions/subObjectProperties' },
    //             isSecret: { enum: [true] },
    //             required: {
    //                 type: 'array',
    //                 minItems: 0,
    //                 items: { type: 'string' },
    //                 uniqueItems: true,
    //             },
    //             additionalProperties: {
    //                 type: 'boolean',
    //             },
    //         },
    //     },
    // },
    //     // subproperties here on out
    //     // anyProperty: {
    //     //     title: 'Any property',
    //     //     type: 'object',
    //     //     unevaluatedProperties: false,
    //     //     properties: {
    //     //         type: {
    //     //             type: ['array'],
    //     //             items: {
    //     //                 type: 'string',
    //     //                 enum: ['object', 'array', 'string', 'integer', 'number', 'boolean'],
    //     //             },
    //     //             uniqueItems: true,
    //     //             additionalItems: false,
    //     //             minItems: 1,
    //     //         },
    //     //         title: { type: 'string' },
    //     //         description: { type: 'string' },
    //     //         prefill: { type: ['object', 'array', 'string', 'integer', 'number', 'boolean'] },
    //     //         example: { type: ['object', 'array', 'string', 'integer', 'number', 'boolean'] },
    //     //         nullable: { type: 'boolean' },
    //     //         editor: { enum: ['json', 'hidden'] },
    //     //         sectionCaption: { type: 'string' },
    //     //         sectionDescription: { type: 'string' },
    //     //     },
    //     //     required: ['type', 'title', 'description', 'editor'],
    //     //     if: {
    //     //         properties: { nullable: { const: false } },
    //     //     },
    //     //     then: {
    //     //         properties: { default: { type: ['object', 'array', 'string', 'integer', 'number', 'boolean'] } },
    //     //     },
    //     //     else: {
    //     //         properties: {
    //     //             default: { type: ['object', 'array', 'string', 'integer', 'number', 'boolean', 'null'] },
    //     //         },
    //     //     },
    //     // },
    // subSchemaStringEnumProperty: {
    //     title: 'Sub-schema: Enum property',
    //     type: 'object',
    //     additionalProperties: false,
    //     properties: {
    //         type: { enum: ['string'] },
    //         editor: { enum: ['select'] },
    //         title: { type: 'string' },
    //         description: { type: 'string' },
    //         nullable: { type: 'boolean' },
    //         enum: {
    //             type: 'array',
    //             items: { type: 'string' },
    //             minItems: 1,
    //             uniqueItems: true,
    //         },
    //         enumTitles: {
    //             type: 'array',
    //             items: { type: 'string' },
    //             minItems: 1,
    //         },
    //     },
    //     required: ['type', 'title', 'description', 'enum'],
    // },
    // subSchemaStringProperty: {
    //     title: 'Sub-schema: String property',
    //     type: 'object',
    //     additionalProperties: true,
    //     properties: {
    //         type: { enum: ['string'] },
    //         title: { type: 'string' },
    //         description: { type: 'string' },
    //         nullable: { type: 'boolean' },
    //         editor: {
    //             enum: ['javascript', 'python', 'textfield', 'textarea', 'datepicker', 'hidden', 'fileupload'],
    //         },
    //     },
    //     required: ['type', 'title', 'description'],
    //     if: {
    //         properties: {
    //             editor: { const: 'datepicker' },
    //         },
    //     },
    //     then: {
    //         additionalProperties: false,
    //         properties: {
    //             type: { enum: ['string'] },
    //             title: { type: 'string' },
    //             description: { type: 'string' },
    //             pattern: { type: 'string' },
    //             nullable: { type: 'boolean' },
    //             minLength: { type: 'integer' },
    //             maxLength: { type: 'integer' },
    //             editor: { enum: ['datepicker'] },
    //             dateType: { enum: ['absolute', 'relative', 'absoluteOrRelative'] },
    //         },
    //     },
    //     else: {
    //         additionalProperties: false,
    //         properties: {
    //             type: { enum: ['string'] },
    //             title: { type: 'string' },
    //             description: { type: 'string' },
    //             pattern: { type: 'string' },
    //             nullable: { type: 'boolean' },
    //             minLength: { type: 'integer' },
    //             maxLength: { type: 'integer' },
    //             editor: { enum: ['javascript', 'python', 'textfield', 'textarea', 'hidden', 'fileupload'] },
    //         },
    //     },
    // },
    // subSchemaArrayProperty: {
    //     title: 'Sub-schema: Array property',
    //     type: 'object',
    //     properties: {
    //         type: { enum: ['array'] },
    //         editor: {
    //             enum: [
    //                 'json',
    //                 'requestListSources',
    //                 'pseudoUrls',
    //                 'globs',
    //                 'keyValue',
    //                 'stringList',
    //                 'fileupload',
    //                 'select',
    //                 'hidden',
    //             ],
    //         },
    //         title: { type: 'string' },
    //         description: { type: 'string' },
    //         nullable: { type: 'boolean' },
    //         minItems: { type: 'integer' },
    //         maxItems: { type: 'integer' },
    //         uniqueItems: { type: 'boolean' },
    //         placeholderKey: { type: 'string' },
    //         placeholderValue: { type: 'string' },
    //         patternKey: { type: 'string' },
    //         patternValue: { type: 'string' },
    //     },
    //     required: ['type', 'title', 'description'],
    //     unevaluatedProperties: false,
    //     oneOf: [
    //         {
    //             required: ['editor'],
    //             properties: {
    //                 editor: { enum: ['select'] },
    //                 items: { $ref: '#/definitions/arrayItemsSelect' },
    //             },
    //         },
    //         {
    //             required: ['editor'],
    //             properties: {
    //                 editor: { enum: ['keyValue'] },
    //                 items: { $ref: '#/definitions/arrayItemsKeyValue' },
    //             },
    //         },
    //         {
    //             required: ['editor'],
    //             properties: {
    //                 editor: { enum: ['fileupload'] },
    //                 items: { $ref: '#/definitions/arrayItemsFileupload' },
    //             },
    //         },
    //         {
    //             required: ['editor'],
    //             properties: {
    //                 editor: { enum: ['stringList'] },
    //                 items: { $ref: '#/definitions/arrayItemsStringList' },
    //             },
    //         },
    //         {
    //             required: ['editor'],
    //             properties: {
    //                 editor: { enum: ['globs'] },
    //                 items: { $ref: '#/definitions/arrayItemsGlobs' },
    //             },
    //         },
    //         {
    //             required: ['editor'],
    //             properties: {
    //                 editor: { enum: ['pseudoUrls'] },
    //                 items: { $ref: '#/definitions/arrayItemsPseudoUrls' },
    //             },
    //         },
    //         {
    //             required: ['editor'],
    //             properties: {
    //                 editor: { enum: ['requestListSources'] },
    //                 items: { $ref: '#/definitions/arrayItemsRequestListSources' },
    //             },
    //         },
    //         {
    //             required: ['editor'],
    //             properties: {
    //                 editor: { enum: ['json', 'schemaBased', 'hidden'] },
    //                 items: { $ref: '#/definitions/arrayItems' },
    //             },
    //         },
    //         {
    //             not: { required: ['editor'] },
    //             properties: { items: { $ref: '#/definitions/arrayItems' } },
    //         },
    //     ],
    // },
    // subSchemaIntegerProperty: {
    //     title: 'Sub-schema: Integer property',
    //     type: 'object',
    //     additionalProperties: false,
    //     properties: {
    //         type: { enum: ['integer'] },
    //         title: { type: 'string' },
    //         description: { type: 'string' },
    //         nullable: { type: 'boolean' },
    //         minimum: { type: 'integer' },
    //         maximum: { type: 'integer' },
    //         unit: { type: 'string' },
    //         editor: { enum: ['number', 'hidden'] },
    //     },
    //     required: ['type', 'title', 'description'],
    // },
    // subSchemaNumberProperty: {
    //     title: 'Sub-schema: Number property',
    //     type: 'object',
    //     additionalProperties: false,
    //     properties: {
    //         type: { enum: ['number'] },
    //         title: { type: 'string' },
    //         description: { type: 'string' },
    //         nullable: { type: 'boolean' },
    //         minimum: { type: 'number' },
    //         maximum: { type: 'number' },
    //         unit: { type: 'string' },
    //         editor: { enum: ['number', 'hidden'] },
    //     },
    //     required: ['type', 'title', 'description'],
    // },
    // subSchemaBooleanProperty: {
    //     title: 'Sub-schema: Boolean property',
    //     type: 'object',
    //     additionalProperties: false,
    //     properties: {
    //         type: { enum: ['boolean'] },
    //         title: { type: 'string' },
    //         description: { type: 'string' },
    //         nullable: { type: 'boolean' },
    //         groupCaption: { type: 'string' },
    //         groupDescription: { type: 'string' },
    //         editor: { enum: ['checkbox', 'hidden'] },
    //     },
    //     required: ['type', 'title', 'description'],
    // },
    // subSchemaObjectProperty: {
    //     title: 'Sub-schema: Object property',
    //     type: 'object',
    //     additionalProperties: false,
    //     properties: {
    //         type: { enum: ['object'] },
    //         title: { type: 'string' },
    //         description: { type: 'string' },
    //         patternKey: { type: 'string' },
    //         patternValue: { type: 'string' },
    //         nullable: { type: 'boolean' },
    //         minProperties: { type: 'integer' },
    //         maxProperties: { type: 'integer' },
    //         editor: { enum: ['json', 'proxy', 'hidden'] },
    //         properties: { $ref: '#/definitions/subObjectProperties' },
    //         required: {
    //             type: 'array',
    //             minItems: 0,
    //             items: { type: 'string' },
    //             uniqueItems: true,
    //         },
    //         additionalProperties: {
    //             type: 'boolean',
    //         },
    //     },
    //     required: ['type', 'title', 'description'],
    // },
    // subSchemaResourceProperty: {
    //     title: 'Sub-schema: Resource property',
    //     type: 'object',
    //     additionalProperties: false,
    //     properties: {
    //         type: { enum: ['string'] },
    //         title: { type: 'string' },
    //         description: { type: 'string' },
    //         editor: { enum: ['resourcePicker', 'hidden'] },
    //         resourceType: { enum: ['dataset', 'keyValueStore', 'requestQueue'] },
    //         resourcePermissions: {
    //             type: 'array',
    //             items: {
    //                 type: 'string',
    //                 enum: ['READ', 'WRITE'],
    //             },
    //             minItems: 1,
    //             uniqueItems: true,
    //             contains: {
    //                 const: 'READ',
    //             },
    //         },
    //         nullable: { type: 'boolean' },
    //     },
    //     required: ['type', 'title', 'description', 'resourceType'],
    // },
    // subSchemaResourceArrayProperty: {
    //     title: 'Sub-schema: Resource array property',
    //     type: 'object',
    //     additionalProperties: false,
    //     properties: {
    //         type: { enum: ['array'] },
    //         title: { type: 'string' },
    //         description: { type: 'string' },
    //         editor: { enum: ['resourcePicker', 'hidden'] },
    //         resourcePermissions: {
    //             type: 'array',
    //             items: {
    //                 type: 'string',
    //                 enum: ['READ', 'WRITE'],
    //             },
    //             minItems: 1,
    //             uniqueItems: true,
    //             contains: {
    //                 const: 'READ',
    //             },
    //         },
    //         nullable: { type: 'boolean' },
    //         minItems: { type: 'integer' },
    //         maxItems: { type: 'integer' },
    //         uniqueItems: { type: 'boolean' },
    //         resourceType: { enum: ['dataset', 'keyValueStore', 'requestQueue'] },
    //     },
    //     required: ['type', 'title', 'description', 'resourceType'],
    // },
    //     arrayItems: {
    //         title: 'Utils: Array items definition',
    //         type: 'object',
    //         properties: {
    //             type: { enum: ['string', 'integer', 'boolean', 'object', 'array'] },
    //         },
    //         required: ['type'],
    //         if: {
    //             properties: {
    //                 type: { enum: ['object'] },
    //             },
    //         },
    //         then: {
    //             additionalProperties: false,
    //             properties: {
    //                 type: { enum: ['object'] },
    //                 properties: {
    //                     type: 'object',
    //                     patternProperties: {
    //                         '^': {
    //                             oneOf: [
    //                                 { $ref: '#/definitions/subSchemaStringProperty' },
    //                                 { $ref: '#/definitions/subSchemaStringEnumProperty' },
    //                                 { $ref: '#/definitions/subSchemaArrayProperty' },
    //                                 { $ref: '#/definitions/subSchemaObjectProperty' },
    //                                 { $ref: '#/definitions/subSchemaIntegerProperty' },
    //                                 { $ref: '#/definitions/subSchemaNumberProperty' },
    //                                 { $ref: '#/definitions/subSchemaBooleanProperty' },
    //                                 { $ref: '#/definitions/subSchemaResourceProperty' },
    //                                 { $ref: '#/definitions/subSchemaResourceArrayProperty' },
    //                             ],
    //                         },
    //                     },
    //                     additionalProperties: false,
    //                 },
    //                 required: {
    //                     type: 'array',
    //                     minItems: 0,
    //                     items: { type: 'string' },
    //                     uniqueItems: true,
    //                 },
    //                 additionalProperties: {
    //                     type: 'boolean',
    //                 },
    //             },
    //         },
    //         else: {
    //             if: {
    //                 properties: { type: { const: 'array' } },
    //             },
    //             then: {
    //                 additionalProperties: false,
    //                 properties: {
    //                     type: { enum: ['array'] },
    //                     items: {
    //                         $ref: '#/definitions/arrayItems',
    //                     },
    //                 },
    //             },
    //             else: {
    //                 additionalProperties: false,
    //                 properties: {
    //                     type: { enum: ['string', 'integer', 'boolean'] },
    //                 },
    //             },
    //         },
    //     },
    //     arrayItemsSelect: {
    //         title: 'Utils: Array items select definition',
    //         type: 'object',
    //         additionalProperties: false,
    //         properties: {
    //             type: { enum: ['string'] },
    //             enum: {
    //                 type: 'array',
    //                 items: { type: 'string' },
    //                 uniqueItems: true,
    //             },
    //             enumTitles: {
    //                 type: 'array',
    //                 items: { type: 'string' },
    //             },
    //         },
    //         required: ['type', 'enum'],
    //     },
    //     arrayItemsKeyValue: {
    //         title: 'Utils: Array items keyValue definition',
    //         type: 'object',
    //         additionalProperties: false,
    //         properties: {
    //             type: { enum: ['object'] },
    //             properties: {
    //                 type: 'object',
    //                 properties: {
    //                     key: {
    //                         type: 'object',
    //                         additionalProperties: false,
    //                         properties: {
    //                             type: { enum: ['string'] },
    //                             title: { type: 'string' },
    //                             description: { type: 'string' },
    //                             pattern: { type: 'string' },
    //                             minLength: { type: 'integer' },
    //                             maxLength: { type: 'integer' },
    //                         },
    //                         required: ['type'],
    //                     },
    //                     value: {
    //                         type: 'object',
    //                         additionalProperties: false,
    //                         properties: {
    //                             type: { enum: ['string'] },
    //                             title: { type: 'string' },
    //                             description: { type: 'string' },
    //                             pattern: { type: 'string' },
    //                             minLength: { type: 'integer' },
    //                             maxLength: { type: 'integer' },
    //                         },
    //                         required: ['type'],
    //                     },
    //                 },
    //                 required: ['key', 'value'],
    //                 additionalProperties: false,
    //             },
    //             required: {
    //                 type: 'array',
    //                 minItems: 0,
    //                 items: { type: 'string' },
    //                 uniqueItems: true,
    //             },
    //             additionalProperties: { type: 'boolean' },
    //         },
    //         required: ['type', 'properties'],
    //     },
    //     arrayItemsStringList: {
    //         title: 'Utils: Array items stringList definition',
    //         type: 'object',
    //         additionalProperties: false,
    //         properties: {
    //             type: { enum: ['string'] },
    //             pattern: { type: 'string' },
    //             minLength: { type: 'integer' },
    //             maxLength: { type: 'integer' },
    //         },
    //         required: ['type'],
    //     },
    //     arrayItemsFileupload: {
    //         title: 'Utils: Array items fileupload definition',
    //         type: 'object',
    //         additionalProperties: false,
    //         properties: {
    //             type: { enum: ['string'] },
    //             pattern: { type: 'string' },
    //             minLength: { type: 'integer' },
    //             maxLength: { type: 'integer' },
    //         },
    //         required: ['type'],
    //     },
    //     arrayItemsGlobs: {
    //         title: 'Utils: Array items globs definition',
    //         type: 'object',
    //         additionalProperties: false,
    //         properties: {
    //             type: { enum: ['object'] },
    //             properties: {
    //                 type: 'object',
    //                 additionalProperties: false,
    //                 properties: {
    //                     glob: {
    //                         type: 'object',
    //                         additionalProperties: false,
    //                         properties: {
    //                             type: { enum: ['string'] },
    //                             title: { type: 'string' },
    //                             description: { type: 'string' },
    //                             pattern: { type: 'string' },
    //                             minLength: { type: 'integer' },
    //                             maxLength: { type: 'integer' },
    //                         },
    //                         required: ['type'],
    //                     },
    //                     method: {
    //                         type: 'object',
    //                         additionalProperties: false,
    //                         properties: {
    //                             type: { enum: ['string'] },
    //                             title: { type: 'string' },
    //                             description: { type: 'string' },
    //                             pattern: { type: 'string' },
    //                             minLength: { type: 'integer' },
    //                             maxLength: { type: 'integer' },
    //                         },
    //                         required: ['type'],
    //                     },
    //                     payload: {
    //                         type: 'object',
    //                         additionalProperties: false,
    //                         properties: {
    //                             type: { enum: ['string'] },
    //                             title: { type: 'string' },
    //                             description: { type: 'string' },
    //                             pattern: { type: 'string' },
    //                             minLength: { type: 'integer' },
    //                             maxLength: { type: 'integer' },
    //                         },
    //                         required: ['type'],
    //                     },
    //                     userData: {
    //                         type: 'object',
    //                         additionalProperties: false,
    //                         properties: {
    //                             type: { enum: ['object'] },
    //                             title: { type: 'string' },
    //                             description: { type: 'string' },
    //                             properties: { type: 'object' },
    //                         },
    //                         required: ['type'],
    //                     },
    //                     headers: {
    //                         type: 'object',
    //                         additionalProperties: false,
    //                         properties: {
    //                             type: { enum: ['object'] },
    //                             title: { type: 'string' },
    //                             description: { type: 'string' },
    //                             properties: { type: 'object' },
    //                         },
    //                         required: ['type'],
    //                     },
    //                 },
    //             },
    //             required: {
    //                 type: 'array',
    //                 minItems: 0,
    //                 items: { type: 'string' },
    //                 uniqueItems: true,
    //             },
    //             additionalProperties: { type: 'boolean' },
    //         },
    //         required: ['type'],
    //     },
    //     arrayItemsPseudoUrls: {
    //         title: 'Utils: Array items pseudoUrls definition',
    //         type: 'object',
    //         additionalProperties: false,
    //         properties: {
    //             type: { enum: ['object'] },
    //             properties: {
    //                 type: 'object',
    //                 additionalProperties: false,
    //                 properties: {
    //                     purl: {
    //                         type: 'object',
    //                         additionalProperties: false,
    //                         properties: {
    //                             type: { enum: ['string'] },
    //                             title: { type: 'string' },
    //                             description: { type: 'string' },
    //                             pattern: { type: 'string' },
    //                             minLength: { type: 'integer' },
    //                             maxLength: { type: 'integer' },
    //                         },
    //                         required: ['type'],
    //                     },
    //                     method: {
    //                         type: 'object',
    //                         additionalProperties: false,
    //                         properties: {
    //                             type: { enum: ['string'] },
    //                             title: { type: 'string' },
    //                             description: { type: 'string' },
    //                             pattern: { type: 'string' },
    //                             minLength: { type: 'integer' },
    //                             maxLength: { type: 'integer' },
    //                         },
    //                         required: ['type'],
    //                     },
    //                     payload: {
    //                         type: 'object',
    //                         additionalProperties: false,
    //                         properties: {
    //                             type: { enum: ['string'] },
    //                             title: { type: 'string' },
    //                             description: { type: 'string' },
    //                             pattern: { type: 'string' },
    //                             minLength: { type: 'integer' },
    //                             maxLength: { type: 'integer' },
    //                         },
    //                         required: ['type'],
    //                     },
    //                     userData: {
    //                         type: 'object',
    //                         additionalProperties: false,
    //                         properties: {
    //                             type: { enum: ['object'] },
    //                             title: { type: 'string' },
    //                             description: { type: 'string' },
    //                             properties: { type: 'object' },
    //                         },
    //                         required: ['type'],
    //                     },
    //                     headers: {
    //                         type: 'object',
    //                         additionalProperties: false,
    //                         properties: {
    //                             type: { enum: ['object'] },
    //                             title: { type: 'string' },
    //                             description: { type: 'string' },
    //                             properties: { type: 'object' },
    //                         },
    //                         required: ['type'],
    //                     },
    //                 },
    //             },
    //             required: {
    //                 type: 'array',
    //                 minItems: 0,
    //                 items: { type: 'string' },
    //                 uniqueItems: true,
    //             },
    //             additionalProperties: { type: 'boolean' },
    //         },
    //         required: ['type'],
    //     },
    //     arrayItemsRequestListSources: {
    //         title: 'Utils: Array items requestListSources definition',
    //         type: 'object',
    //         additionalProperties: false,
    //         properties: {
    //             type: { enum: ['object'] },
    //             properties: {
    //                 type: 'object',
    //                 additionalProperties: false,
    //                 properties: {
    //                     url: {
    //                         type: 'object',
    //                         additionalProperties: false,
    //                         properties: {
    //                             type: { enum: ['string'] },
    //                             title: { type: 'string' },
    //                             description: { type: 'string' },
    //                             pattern: { type: 'string' },
    //                             minLength: { type: 'integer' },
    //                             maxLength: { type: 'integer' },
    //                         },
    //                         required: ['type'],
    //                     },
    //                     method: {
    //                         type: 'object',
    //                         additionalProperties: false,
    //                         properties: {
    //                             type: { enum: ['string'] },
    //                             title: { type: 'string' },
    //                             description: { type: 'string' },
    //                             pattern: { type: 'string' },
    //                             minLength: { type: 'integer' },
    //                             maxLength: { type: 'integer' },
    //                         },
    //                         required: ['type'],
    //                     },
    //                     payload: {
    //                         type: 'object',
    //                         additionalProperties: false,
    //                         properties: {
    //                             type: { enum: ['string'] },
    //                             title: { type: 'string' },
    //                             description: { type: 'string' },
    //                             pattern: { type: 'string' },
    //                             minLength: { type: 'integer' },
    //                             maxLength: { type: 'integer' },
    //                         },
    //                         required: ['type'],
    //                     },
    //                     userData: {
    //                         type: 'object',
    //                         additionalProperties: false,
    //                         properties: {
    //                             type: { enum: ['object'] },
    //                             title: { type: 'string' },
    //                             description: { type: 'string' },
    //                             properties: { type: 'object' },
    //                         },
    //                         required: ['type'],
    //                     },
    //                     headers: {
    //                         type: 'object',
    //                         additionalProperties: false,
    //                         properties: {
    //                             type: { enum: ['object'] },
    //                             title: { type: 'string' },
    //                             description: { type: 'string' },
    //                             properties: { type: 'object' },
    //                         },
    //                         required: ['type'],
    //                     },
    //                 },
    //             },
    //             required: {
    //                 type: 'array',
    //                 minItems: 0,
    //                 items: { type: 'string' },
    //                 uniqueItems: true,
    //             },
    //             additionalProperties: { type: 'boolean' },
    //         },
    //         required: ['type'],
    //     },
    // subObjectProperties: {
    //     title: 'Utils: Sub-object properties definition',
    //     type: 'object',
    //     patternProperties: {
    //         '^': {
    //             oneOf: [
    //                 { $ref: '#/definitions/subSchemaStringProperty' },
    //                 { $ref: '#/definitions/subSchemaStringEnumProperty' },
    //                 { $ref: '#/definitions/subSchemaArrayProperty' },
    //                 { $ref: '#/definitions/subSchemaObjectProperty' },
    //                 { $ref: '#/definitions/subSchemaIntegerProperty' },
    //                 { $ref: '#/definitions/subSchemaNumberProperty' },
    //                 { $ref: '#/definitions/subSchemaBooleanProperty' },
    //                 { $ref: '#/definitions/subSchemaResourceProperty' },
    //                 { $ref: '#/definitions/subSchemaResourceArrayProperty' },
    //             ],
    //         },
    //     },
    //     additionalProperties: false,
    // },
    // subObjectPropertiesProxy: {
    //     title: 'Utils: Sub-object properties proxy definition',
    //     type: 'object',
    //     additionalProperties: false,
    //     properties: {
    //         useApifyProxy: {
    //             type: 'object',
    //             additionalProperties: false,
    //             properties: {
    //                 type: { enum: ['boolean'] },
    //                 title: { type: 'string' },
    //                 description: { type: 'string' },
    //             },
    //             required: ['type'],
    //         },
    //         apifyProxyGroups: {
    //             type: 'object',
    //             additionalProperties: false,
    //             properties: {
    //                 type: { enum: ['array'] },
    //                 title: { type: 'string' },
    //                 description: { type: 'string' },
    //                 items: {
    //                     type: ['object'],
    //                     properties: {
    //                         type: { enum: ['string'] },
    //                     },
    //                     additionalProperties: false,
    //                     required: ['type'],
    //                 },
    //             },
    //             required: ['type'],
    //         },
    //         proxyUrls: {
    //             type: 'object',
    //             additionalProperties: false,
    //             properties: {
    //                 type: { enum: ['array'] },
    //                 title: { type: 'string' },
    //                 description: { type: 'string' },
    //                 items: {
    //                     type: ['object'],
    //                     properties: {
    //                         type: { enum: ['string'] },
    //                     },
    //                     additionalProperties: false,
    //                     required: ['type'],
    //                 },
    //             },
    //             required: ['type'],
    //         },
    //         apifyProxyCountry: {
    //             type: 'object',
    //             additionalProperties: false,
    //             properties: {
    //                 type: { enum: ['string'] },
    //                 title: { type: 'string' },
    //                 description: { type: 'string' },
    //                 pattern: { type: 'string' },
    //                 minLength: { type: 'integer' },
    //                 maxLength: { type: 'integer' },
    //             },
    //             required: ['type'],
    //         },
    //     },
    // },
    // },
};
const testInputSchema = {
    type: 'object',
    title: 'Test input schema',
    schemaVersion: 1,
    description: 'This is a test input schema',
    properties: {
        stringProperty: {
            type: 'string',
            title: 'String property',
            description: 'This is a string property',
            editor: 'textfield',
        },
        enumProperty: {
            type: 'string',
            title: 'Enum property',
            description: 'This is an enum property',
            editor: 'select',
            enum: ['a', 'b', 'c'],
        },
        objectProperty: {
            type: 'object',
            title: 'Object property',
            description: 'This is an object property',
            editor: 'json',
            properties: {
                stringProperty: {
                    type: 'string',
                    title: 'String property',
                    description: 'This is a string property',
                    editor: 'textfield',
                },
                enumProperty: {
                    type: 'string',
                    title: 'Enum property',
                    description: 'This is an enum property',
                    editor: 'select',
                    enum: ['a', 'b', 'c'],
                },
            },
        },
    },
};
export {};
//# sourceMappingURL=json-schemas.js.map