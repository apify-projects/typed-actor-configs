import { checkDatasetFields, InferDataset } from "..";
import MyDataset from './dataset.json' with { type: 'json' };

const exampleDataset = checkDatasetFields(MyDataset, {
    actorSpecification: 1,
    title: 'My Dataset',
    description: 'This is my dataset',
    fields: {
        type: 'object',
        properties: {
            url: {
                type: 'string',
            },
            title: {
                type: 'string',
                default: "I'm a title",
            },
            something: {
                type: 'object',
                properties: {
                    memardo: {
                        type: 'string',
                        default: 'meme',
                    },
                },
                additionalProperties: false,
            },
        },
        additionalProperties: false,
        required: ['url'],
    },
    randomField: 'random',
} as const);

export type DatasetItem = InferDataset<typeof exampleDataset>;