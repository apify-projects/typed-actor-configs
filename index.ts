// import {
//     defineInputConfiguration,
//     defineMinimalInputConfiguration,
//     type inferInput,
// } from './src/input-schema/index.ts';

import { InferDataset, checkDatasetFields } from './src/dataset-schema/index.ts';

import { defineActorInput, type InferInput } from './src/new-input-schema/index.ts';

export {
    // zod based input schemas
    // type inferInput,
    // defineInputConfiguration,
    // defineMinimalInputConfiguration,
    // json schema based dataset schemas
    type InferDataset,
    checkDatasetFields,
    // new input schema
    defineActorInput,
    type InferInput,
};
