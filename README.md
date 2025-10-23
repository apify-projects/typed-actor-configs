# Typed Actor Configs

Create type-safe input and output configurations for your [Apify Actors](https://apify.com/)

## Installation

```bash
npm install typed-actor-configs
```

## How it works

This package uses [TypeScript's `typescript-plugin-json-const` plugin](https://www.npmjs.com/package/typescript-plugin-const-json) as a peer dependency.

It infers the types described in the `input_schema.json` and `dataset_schema.json` files and generates a TypeScript interface for each of them.

First set up the plugin in your `tsconfig.json` file:

```json
{
    "compilerOptions": {
        "plugins": [{ "name": "typescript-plugin-json-const" }]
    }
}
```

This will treat your json imports `as const`.
Then just import the files in your code and use The Infer Types on them.

```ts
import { ActorInput } from 'typed-actor-configs';
import INPUT_SCHEMA from './path/to/input_schema.json';
import DATASET_SCHEMA from './path/to/dataset_schema.json';

export type Input = InferInput<typeof INPUT_SCHEMA>;
export type DatasetItem = InferDataset<typeof DATASET_SCHEMA>;
```

Now you can use the `Input` and `Dataset` types in your code.

### Example

```ts
import { Input, DatasetItem } from './my/types/inferred/from/schemas.ts';
import { Actor } from 'apify';

await Actor.init();
const input = (await Actor.getInput<Input>())!;
...
await Actor.pushData<DatasetItem>({
    ...
});
```

## Missing features

Not all input types are supported yet.

Currently the following types are supported:

-   nested objects
-   nested arrays

Check the [issues](https://github.com/apify-projects/typed-actor-configs/issues) for more details on known bugs and missing features.

## Contributing

Any issues, suggestions or feature requests are welcome. Feel free to open an issue.
