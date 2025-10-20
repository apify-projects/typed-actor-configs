# Typed Actor Configs

Create type-safe input and output configurations for your [Apify Actors](https://apify.com/)

## Installation

```bash
npm install typed-actor-configs
```

## How it works

The `typed-actor-configs` package provides two main functionalities:

1. Inferrence of types from schemas
2. Generation and validation of schemas

The basic usage is to define your schemas and export the inferred types. Then for validation you can run the file directly and it will check differences between the current schema and the new one.

```bash
node ./path/to/input_schema.ts
bun run ./path/to/input_schema.ts
node ./path/to/input_schema.ts --dry-run
...
```

Alternatively, you can add them as a script to your `package.json` file:

```json
{
    "scripts": {
        "generate-input-schema": "node ./path/to/input_schema.ts"
    }
}
```

This works due to the only export of the file being the inferred type.
If you import any const from the file it will be run whenever you start your actor.
**MAKE SURE TO ONLY EXPORT INFERRED TYPES**

## Schemas

Schemas can be used in two ways:

#### 1. Validate schema in a TS file and infer types from it

In this mode, you define your full schema in a JSON file and then copy just the type-relevant fields to the TS file. Then whenever you want to change the schema, you only need to update the JSON file if it is a field that is not type-relevant. Type-relevant fields have to be updated in both files. A field is type-relevant if it would change the type of the inferred type. For example `required`, `additionalProperties` or `properties` would be type-relevant.

You can then set up a CI pipeline that runs the validation whenever you push to a PR to ensure that the schema and types are always in sync.

#### 2. Generate a full schema, validate it and infer types from it

In this mode, you define your full schema in the TS file and then it generates the JSON file (with the exact same content) upon running the file.

Whenever you change the schema, you only need to update the TS file. The JSON file will be regenerated automatically and all changes will be shown in the diff.

The first one just ensures that the fields passed to it match the JSON schema. It does not emit a `input_schema.json` or `dataset_schema.json` file.

#### Why are two files needed?

Since [we cant import a JSON file with narrowed types](https://github.com/microsoft/TypeScript/issues/32063) (`as const`), we still need to have the `as const` type-relevant fields available to typescript in order to infer the types.

### Dataset Schema

The dataset schema defines the fields of your dataset. Use its inferred type whenever you want to push data to your dataset.
You can pass it as a generic to `pushData` as in `pushData<DataSetItem>(someItem)`.

The documentation for the dataset schema can be found [here](https://docs.apify.com/platform/actors/development/actor-definition/dataset-schema).

For example, you can define it like this. Note that the fields definition is JSON schema compliant.

```typescript
import { checkDatasetFields, type InferDataset } from 'typed-actor-configs';
import MyDataset from './dataset.json' with { type: 'json' };

const dataset = checkDatasetFields(MyDataset, {
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
        },
        additionalProperties: false,
        required: ['url'],
    },
} as const)

export type DatasetItem = InferDataset<typeof dataset>;
// type DatasetItem = {
//     url: string;
//     title?: string | undefined;
// }
```

Note that the type of `title` is `string | undefined` even though it has a default value. This is because you want to be able to use `pushData<DataSetItem>` without having to specify the `title` field.
On the other hand, the type of `url` is `string` because it is required.

On input schemas this behavior is different. Since its an input all fields are considered already defaulted.

Additionally, since `checkDatasetFields` does not emit a `dataset_schema.json` file, you can just import your dataset json file and pass it to `checkDatasetFields` directly for validation.

After everything is defined, you can just import the `DatasetItem` type and use it as a type for your dataset.

```typescript
import { DatasetItem } from './dataset.ts';
import { Actor } from 'apify';

const item = {
    url: 'https://www.example.com',
};

await Actor.pushData<DatasetItem>(item); // All good

const wrongItem = { foo: 'bar' };
await Actor.pushData<DatasetItem>(wrongItem); // Type error since url is a required field
```

**Note:** Dataset schemas currently do not support the "generate full schema" mode. This is to be implemented in the future.

### Input Schema

The input schema defines the fields of your input. Use its inferred type whenever you want to get input from the user.
You can pass it as a generic to `getInput` as in `(await getInput<InputItem>())!`.

The documentation for the input schema can be found [here](https://docs.apify.com/platform/actors/development/actor-definition/input-schema).

For the input schema you can use the generation mode as shown below.

```typescript
import { defineActorInput, type InferInput } from 'typed-actor-configs';

const input = defineActorInput('.actor/input_schema.json', {
    title: 'Scrape data from a web page',
    schemaVersion: 1,
    type: 'object',
    properties: {
        numberProp: {
            type: 'integer',
            title: 'some number prop',
            description: 'some number prop',
            editor: 'number',
            nullable: true,
        },
        enumProp: {
            type: 'string',
            title: 'some enum prop',
            description: 'some enum prop',
            enum: ['a', 'b', 'c'] as const,
            default: 'a',
        },
        arrayProp: {
            type: 'array',
            title: 'some array prop',
            description: 'some array prop',
            editor: 'stringList',
            items: {
                type: 'string',
            },
        },
    },
    required: ['numberProp'],
} as const);

export type ActorInput = InferInput<typeof input>;
// type ActorInput = {
//     numberProp: number | null; // present since it is required, but can be null due to the nullable property
//     enumProp: 'a' | 'b' | 'c'; // always present since it has a default value
//     arrayProp?: string[] | undefined;
// }
```

Then you can use the `ActorInput` type in your actor's main file to cast the input to the correct type.

```typescript
import { Actor } from 'apify';
import { ActorInput } from './input';

await Actor.init();

const input = (await Actor.getInput<ActorInput>())!;

// your type-safe code here
```

**Note:** As long as the **only export** of the file is the inferred type, your build size will not increase and the `input_schema.json` file will not be generated when running your actor (either locally or on Apify Cloud).

Then you can just modify and run the file to generate the `input_schema.json` file.

You can also create a CI pipeline that runs the file on `--no-diff` mode whenever you push to a PR to ensure that the schema and types are always in sync. Ensuring that whenever you change the schema, you have to run the generation mode to update the `input_schema.json` file.

**Note:** Input schemas currently do not support the "validate schema in a TS file and infer types from it" mode. This is to be implemented in the future.

## Missing features

Not all input types are supported yet.

Currently the following types are supported:

-   nested objects
-   nested arrays

Check the [issues](https://github.com/apify-projects/typed-actor-configs/issues) for more details on known bugs and missing features.

## Contributing

Any issues, suggestions or feature requests are welcome. Feel free to open an issue.
