import {
    defineInputConfiguration,
    defineMinimalInputConfiguration,
    type inferInput,
} from './src/input-schema/index.ts';

import { InferDataset, validateDatasetFieldsWithSchema } from './src/dataset-schema/index.ts';

import { defineActorInput, type InferInput } from './src/new-input-schema/index.ts';

export {
    // zod based input schemas

    /**
     * @deprecated please use `InferInput` instead
     */
    type inferInput,

    /**
     * @deprecated please use `defineActorInput` instead
     * @param input The input schema to be emmited
     * @returns The same input schema, to be used for input type inference
     */
    defineInputConfiguration,
    /**
     * @deprecated please use `defineActorInput` instead
     * @param input The input schema to be emmited
     * @returns The same input schema, to be used for input type inference
     */
    defineMinimalInputConfiguration,

    // json schema based dataset schemas

    /**
     * @param T Dataset schema fields, as returned by `validateDatasetFieldsWithSchema`
     * @returns The type described by the dataset schema fields
     *
     * @example
     * ```ts
     * const dataset = validateDatasetFieldsWithSchema({
     *     fields: {
     *         ...
     *     }
     * });
     *
     * type Dataset = InferDataset<typeof dataset>;
     * ```
     * Then in your actor code:
     * ```ts
     * await pushData<Dataset>({
     *     ...
     * });
     * ```
     */
    type InferDataset,
    /**
     * @param config The dataset schema, taken from `import .... with { type: 'json' }`
     * @param input The dataset fields `as const` to be validated against the schema and used to emit types out of
     * @returns The same dataset schema fields, to be used for dataset type inference using `InferDataset`
     */
    validateDatasetFieldsWithSchema,
    // new input schema
    defineActorInput,
    type InferInput,
};
