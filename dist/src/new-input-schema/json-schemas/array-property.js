import arrayItems from "./subproperties/array-items.js";
import arrayItemsSelect from "./subproperties/array-items-select.js";
import arrayItemsKeyValue from "./subproperties/array-items-key-value.js";
import arrayItemsFileupload from "./subproperties/array-items-file-upload.js";
import arrayItemsStringList from "./subproperties/array-items-string-list.js";
import arrayItemsGlobs from "./subproperties/array-items-globs.js";
import arrayItemsPseudoUrls from "./subproperties/array-items-pseudo-urls.js";
import arrayItemsRequestListSources from "./subproperties/array-items-request-list-sources.js";
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
            // isSecret: { enum: [false] },
        },
        unevaluatedProperties: false,
        allOf: [
            {
                oneOf: [
                    {
                        required: ['editor'],
                        properties: {
                            editor: { enum: ['select'] },
                            items: { $ref: arrayItemsSelect.schema.$id },
                        },
                    },
                    {
                        required: ['editor'],
                        properties: {
                            editor: { enum: ['keyValue'] },
                            items: { $ref: arrayItemsKeyValue.schema.$id },
                        },
                    },
                    {
                        required: ['editor'],
                        properties: {
                            editor: { enum: ['fileupload'] },
                            items: { $ref: arrayItemsFileupload.schema.$id },
                        },
                    },
                    {
                        required: ['editor'],
                        properties: {
                            editor: { enum: ['stringList'] },
                            items: { $ref: arrayItemsStringList.schema.$id },
                        },
                    },
                    {
                        required: ['editor'],
                        properties: {
                            editor: { enum: ['globs'] },
                            items: { $ref: arrayItemsGlobs.schema.$id },
                        },
                    },
                    {
                        required: ['editor'],
                        properties: {
                            editor: { enum: ['pseudoUrls'] },
                            items: { $ref: arrayItemsPseudoUrls.schema.$id },
                        },
                    },
                    {
                        required: ['editor'],
                        properties: {
                            editor: { enum: ['requestListSources'] },
                            items: { $ref: arrayItemsRequestListSources.schema.$id },
                        },
                    },
                    {
                        required: ['editor'],
                        properties: {
                            editor: { enum: ['json', 'schemaBased', 'hidden'] },
                            items: { $ref: arrayItems.schema.$id },
                        },
                    },
                    {
                        not: { required: ['editor'] },
                        properties: { items: { $ref: arrayItems.schema.$id } },
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
            items: { $ref: arrayItems.schema.$id },
            isSecret: { enum: [true] },
        },
    },
};
// export type InferArrayProperty<T extends ArrayProperty> = Array<
//     T extends { items: object }
//         ? T['items'] extends ArrayItemsSelect
//             ? InferArrayItemsSelect<T['items']>
//             : T['items'] extends ArrayItems
//             ? InferArrayItems<T['items']>
//             : T['items'] extends ArrayItemsKeyValue
//             ? InferArrayItemsKeyValue<T['items']>
//             : T['items'] extends ArrayItemsFileupload
//             ? InferArrayItemsFileupload<T['items']>
//             : T['items'] extends ArrayItemsStringList
//             ? InferArrayItemsStringList<T['items']>
//             : T['items'] extends ArrayItemsGlobs
//             ? InferArrayItemsGlobs<T['items']>
//             : T['items'] extends ArrayItemsPseudoUrls
//             ? InferArrayItemsPseudoUrls<T['items']>
//             : T['items'] extends ArrayItemsRequestListSources
//             ? InferArrayItemsRequestListSources<T['items']>
//             : never
//         : InferArrayPropertyByEditor<T>
// >;
export default {
    schema: arrayProperty,
};
const test = {
    title: 'Direct URLs',
    type: 'array',
    description: "Enter a link to a <a href='https://www.youtube.com/c/Apify' target='_blank' rel='noopener'>channel</a>. You can also import a CSV file or Google Sheet with a list of URLs.<br>",
    prefill: [
        {
            url: 'https://www.youtube.com/@Apify',
        },
    ],
    editor: 'requestListSources',
};
//# sourceMappingURL=array-property.js.map