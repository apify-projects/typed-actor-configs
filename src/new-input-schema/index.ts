import stringEnumProperty, {
    type StringEnumProperty,
    type InferEnumProperty,
    type StringEnumDependencies,
} from './json-schemas/string-enum-property.ts';
import stringProperty, {
    type InferStringProperty,
    type StringProperty,
    type StringPropertyDependencies,
} from './json-schemas/string-property.ts';
import integerProperty, {
    type InferIntegerProperty,
    type IntegerProperty,
    type IntegerPropertyDependencies,
} from './json-schemas/integer-property.ts';
import numberProperty, {
    type InferNumberProperty,
    type NumberProperty,
    type NumberPropertyDependencies,
} from './json-schemas/number-property.ts';
import booleanProperty, {
    type InferBooleanProperty,
    type BooleanProperty,
    type BooleanPropertyDependencies,
} from './json-schemas/boolean-property.ts';
import resourceProperty, {
    type InferResourceProperty,
    type ResourceProperty,
    type ResourcePropertyDependencies,
} from './json-schemas/resource-property.ts';
import resourceArrayProperty, {
    type InferResourceArrayProperty,
    type ResourceArrayProperty,
    type ResourceArrayPropertyDependencies,
} from './json-schemas/resource-array-property.ts';
import objectProperty, {
    type InferObjectProperty,
    type ObjectProperty,
    type ObjectPropertyDependencies,
} from './json-schemas/object-property.ts';
import arrayProperty, {
    type InferArrayProperty,
    type ArrayProperty,
    type ArrayPropertyDependencies,
} from './json-schemas/array-property.ts';
import {
    DeepReadonly,
    DeepWriteable,
    DefaultedFields,
    Resolve,
    TrimTitleAndDescription,
} from './json-schemas/types.ts';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { diffConfigurations } from '../versioning/config-diff/index.ts';
import { greenBG, yellowBG } from '../text-coloring/index.ts';
import { execArgs, initializeExecArgs } from '../input-schema/exec-args.ts';
import { createPathToFile } from '../filesystem.ts';
import { cwd } from 'process';

type InputSchema = {
    title: string;
    schemaVersion: 1;
    description?: string;
    type: 'object';
    properties: {
        [x: string]:
            | StringEnumProperty
            | StringProperty
            | IntegerProperty
            | NumberProperty
            | BooleanProperty
            | ResourceProperty
            | ResourceArrayProperty
            | ObjectProperty
            | ArrayProperty;
    };
    required?: string[];
};

type MinimalInputSchema = TrimTitleAndDescription<InputSchema>;
type requiredKeys<T extends DeepReadonly<{ required?: string[] }>> = T extends { required: readonly (infer R)[] }
    ? R
    : '';

export type InferInput<T extends DeepReadonly<InputSchema>> = Resolve<
    {
        -readonly [Key in keyof T['properties'] & (requiredKeys<T> | DefaultedFields<T>)]: inferProperty<
            DeepWriteable<T['properties'][Key]>
        >;
    } & {
        -readonly [Key in Exclude<keyof T['properties'], requiredKeys<T> | DefaultedFields<T>>]?: inferProperty<
            DeepWriteable<T['properties'][Key]>
        >;
    }
>;

type inferProperty<T extends DeepWriteable<MinimalInputSchema['properties'][string]>> = T extends StringEnumProperty
    ? InferEnumProperty<T>
    : T extends IntegerProperty
    ? InferIntegerProperty<T>
    : T extends NumberProperty
    ? InferNumberProperty<T>
    : T extends BooleanProperty
    ? InferBooleanProperty<T>
    : T extends ResourceProperty
    ? InferResourceProperty<T>
    : T extends ResourceArrayProperty
    ? InferResourceArrayProperty<T>
    : T extends ArrayProperty
    ? InferArrayProperty<T>
    : T extends StringProperty // last so it doesn't override other string types
    ? InferStringProperty<T>
    : T extends ObjectProperty
    ? InferObjectProperty<T>
    : never;

function loadExistingConfig(path: string): unknown {
    const configExists = existsSync(path);
    if (configExists) {
        return JSON.parse(readFileSync(path, 'utf-8'));
    }
    console.log('Input schema not found at path', path);
    if (execArgs.noDiff()) {
        console.error('No input schema found, nothing to check integrity against');
        console.log('Checked at ', cwd(), path);
        process.exit(1);
    }
    return {};
}

function outputConfig(path: string, config: unknown, hasDiff: boolean) {
    const configExists = existsSync(path);
    if (!configExists && !execArgs.dryRun()) {
        createPathToFile(path);
    }
    if (hasDiff && execArgs.dryRun()) {
        console.warn('Dry run, not writing file');
        return;
    }
    console.log('Writing new input schema to', path);
    writeFileSync(path, JSON.stringify(config, null, 4));
}

export function defineActorInput<InputConfiguration extends InputSchema>(
    path: `${string}/input_schema.json`,
    inputSchema: InputConfiguration
): InputConfiguration {
    initializeExecArgs();
    const previousConfig = loadExistingConfig(path);

    const hasDiff = diffConfigurations(previousConfig, inputSchema);

    if (hasDiff && execArgs.noDiff()) {
        console.log('Schema differences found, but --no-diff was set, exiting');
        process.exit(1);
    }
    if (hasDiff) {
        console.warn(`\n${yellowBG('MODIFIED')}: Type-critical fields dont match, check changes`);
    } else {
        console.log(`\n${greenBG('PASSED')}: No differences found on type-critical fields`);
    }
    outputConfig(path, inputSchema, hasDiff);
    return inputSchema;
}
