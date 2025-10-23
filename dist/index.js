import { defineInputConfiguration, defineMinimalInputConfiguration, } from "./src/input-schema/index.js";
import { validateDatasetFieldsWithSchema } from "./src/dataset-schema/index.js";
import { defineActorInput } from "./src/new-input-schema/index.js";
export { 
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
/**
 * @param config The dataset schema, taken from `import .... with { type: 'json' }`
 * @param input The dataset fields `as const` to be validated against the schema and used to emit types out of
 * @returns The same dataset schema fields, to be used for dataset type inference using `InferDataset`
 */
validateDatasetFieldsWithSchema, 
// new input schema
defineActorInput, };
//# sourceMappingURL=index.js.map