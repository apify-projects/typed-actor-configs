# Typed Actor Configs

Create type-safe input configurations for your [Apify Actors](https://apify.com/)

## How to set up

Create a standalone file for your input. Then just call `defineInputConfiguration` on the JSON you had as a `input_schema.json`.

#### Example:

```javascript
import { defineInputConfiguration, inferInput } from 'typed-actor-configs';

const input = defineInputConfiguration({
    type: 'object',
    schemaVersion: 1,
    title: 'My type safe Apify Actor',
    Description: 'a funny yet informative description',
    properties: {
        someStringInput: {
            title: 'String Input Field',
            description: 'write your strings here',
            type: 'string',
            editor: 'textarea',
            prefill: 'some text',
        },
        someNumberInput: {
            title: 'Number Input Field',
            description: 'write your numbers here',
            type: 'integer',
            editor: 'number',
            prefill: 10,
            nullable: true,
        },
    },
    required: ['someStringInput'],
});

// { someStringInput: string, someNumberInput?: number | null | undefined }
export type ActorInput = inferInput<typeof input>;
```

From your actor main file now you can import the `ActorInput` type and use it as a type for your input.

```javascript
import { Actor } from 'apify';
import { ActorInput } from './input';

await Actor.init();

const input = (await Actor.getInput<ActorInput>())!;

// your type-safe code here
```

## How to run

Now that we have our input configuration, we can run the file to generate the `input_schema.json` file.

```bash
node ./path/to/input.ts
```

or add it to your `package.json` scripts:

```json
{
    "scripts": {
        "generate-input-schema": "node ./path/to/input.ts"
    }
}
```

then run `npm run generate-input-schema` to generate the `input_schema.json` file.

Checking the file you will see that it has been generated with the same structure as it was defined in the `input.ts` file. It also has a `_hash` property thats used as a checksum to make sure that the file hasn't been changed manually.

### Behavior

Will check the existance of the `input_schema.json` file and will compare it with the current one. It will show you the diff between the two files and and then update the file if the old file was NOT modified manually (its checksum matches its content). If the old file was modified manually, it will not update the file and will exit with an error.

#### Flags

You can also pass flags to the script to change its behavior:

-   `--dry-run`: will not write anything and will just show you the diff between the current `input_schema.json` and the new one.
-   `--overwrite`: will overwrite the `input_schema.json` file with the new one even if the old one does not match its checksum. Make sure to have resolved any conflicts before running this.
-   `--no-diff`: will check that the `input_schema.json` file matches the current one, exiting with an error if it does not. This is useful for CI pipelines on pull requests, ensuring that the file is up to date before merging.

## Missing features

Not all input types are supported yet.

Currently the following types are supported:

-   string
-   boolean
-   integer
-   enum
-   array (only of strings)

Missing types:

-   Array (all other types)
-   object
-   resource
-   resourceArray

Check the [issues](https://github.com/apify-projects/typed-actor-configs/issues) for more details on known bugs and missing features.

## Contributing

Any issues, suggestions or feature requests are welcome. Feel free to open an issue.
