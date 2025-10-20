import { FromSchema, JSONSchema } from 'json-schema-to-ts';
import arrayItems, {
    type InferArrayItems,
    type ArrayItems,
    type ArrayItemsDependencies,
} from './subproperties/array-items.ts';
import arrayItemsSelect, {
    type InferArrayItemsSelect,
    type ArrayItemsSelect,
    type ArrayItemsSelectDependencies,
} from './subproperties/array-items-select.ts';
import arrayItemsKeyValue, {
    type InferArrayItemsKeyValue,
    type ArrayItemsKeyValue,
    type ArrayItemsKeyValueDependencies,
} from './subproperties/array-items-key-value.ts';
import arrayItemsFileupload, {
    type InferArrayItemsFileupload,
    type ArrayItemsFileupload,
    type ArrayItemsFileuploadDependencies,
} from './subproperties/array-items-file-upload.ts';
import arrayItemsStringList, {
    type InferArrayItemsStringList,
    type ArrayItemsStringList,
    type ArrayItemsStringListDependencies,
} from './subproperties/array-items-string-list.ts';
import arrayItemsGlobs, {
    type InferArrayItemsGlobs,
    type ArrayItemsGlobs,
    type ArrayItemsGlobsDependencies,
} from './subproperties/array-items-globs.ts';
import arrayItemsPseudoUrls, {
    type InferArrayItemsPseudoUrls,
    type ArrayItemsPseudoUrls,
    type ArrayItemsPseudoUrlsDependencies,
} from './subproperties/array-items-pseudo-urls.ts';
import { DeepReadonly, DeepWriteable, PropertyExport } from './types.ts';
import arrayItemsRequestListSources, {
    type InferArrayItemsRequestListSources,
    type ArrayItemsRequestListSources,
    type ArrayItemsRequestListSourcesDependencies,
} from './subproperties/array-items-request-list-sources.ts';

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
} as const satisfies JSONSchema;

export type ArrayPropertyDependencies = [
    typeof arrayItemsSelect.schema,
    ...ArrayItemsSelectDependencies,
    typeof arrayItemsKeyValue.schema,
    ...ArrayItemsKeyValueDependencies,
    typeof arrayItemsFileupload.schema,
    ...ArrayItemsFileuploadDependencies,
    typeof arrayItemsStringList.schema,
    ...ArrayItemsStringListDependencies,
    typeof arrayItemsGlobs.schema,
    ...ArrayItemsGlobsDependencies,
    typeof arrayItemsPseudoUrls.schema,
    ...ArrayItemsPseudoUrlsDependencies,
    typeof arrayItemsRequestListSources.schema,
    ...ArrayItemsRequestListSourcesDependencies,
    typeof arrayItems.schema,
    ...ArrayItemsDependencies
];

export type ArrayProperty = FromSchema<
    typeof arrayProperty,
    {
        keepDefaultedPropertiesOptional: true;
        parseIfThenElseKeywords: true;
        parseNotKeyword: true;
        references: ArrayPropertyDependencies;
    }
>;
type Editor<T extends string> = { editor: T };
export type InferArrayPropertyByEditor<T extends ArrayProperty> = T extends Editor<'select'>
    ? InferArrayItemsSelect<T['items']>[]
    : T extends Editor<'keyValue'>
    ? InferArrayItemsKeyValue<T['items']>[]
    : T extends Editor<'fileupload'>
    ? string[] // ? InferArrayItemsFileupload<T['items']>
    : T extends Editor<'stringList'>
    ? string[] // ? InferArrayItemsStringList<T['items']>
    : T extends Editor<'globs'>
    ? InferArrayItemsGlobs<T['items']>[]
    : T extends Editor<'pseudoUrls'>
    ? InferArrayItemsPseudoUrls<T['items']>[]
    : T extends Editor<'requestListSources'>
    ? InferArrayItemsRequestListSources<T['items']>[]
    : T extends Editor<'json'>
    ? InferArrayItems<T['items']>[]
    : T extends Editor<'schemaBased'>
    ? InferArrayItems<T['items']>[]
    : T extends Editor<'hidden'>
    ? InferArrayItems<T['items']>[]
    : never;

export type InferArrayProperty<T extends ArrayProperty> = InferArrayPropertyByEditor<T>;
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
} satisfies PropertyExport;

const test = {
    title: 'Direct URLs',
    type: 'array',
    description:
        "Enter a link to a <a href='https://www.youtube.com/c/Apify' target='_blank' rel='noopener'>channel</a>. You can also import a CSV file or Google Sheet with a list of URLs.<br>",
    prefill: [
        {
            url: 'https://www.youtube.com/@Apify',
        },
    ],
    editor: 'requestListSources',
} as const satisfies ArrayProperty;

type test2 = InferArrayProperty<typeof test>;
