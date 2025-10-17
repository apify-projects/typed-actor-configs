import { FromSchema } from 'json-schema-to-ts';
import { SubPropertySchema } from './types.ts';

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
} as const satisfies SubPropertySchema;

export type ArrayItemsSelect = FromSchema<
    typeof arrayItemsSelect,
    { keepDefaultedPropertiesOptional: true; parseIfThenElseKeywords: true; parseNotKeyword: true }
>;

export type InferArrayItemsSelect<T extends { type: 'string'; enum: string[]; nullable?: boolean } | undefined> =
    T extends {
        enum: (infer E)[];
        nullable?: boolean;
    }
        ? T['nullable'] extends true
            ? E | null
            : E
        : string;

export type ArrayItemsSelectDependencies = [];

export default {
    schema: arrayItemsSelect,
};
