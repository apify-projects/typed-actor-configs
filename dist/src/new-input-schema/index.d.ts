import { type StringEnumProperty, type InferEnumProperty } from './json-schemas/string-enum-property.ts';
import { type InferStringProperty, type StringProperty } from './json-schemas/string-property.ts';
import { type InferIntegerProperty, type IntegerProperty } from './json-schemas/integer-property.ts';
import { type InferNumberProperty, type NumberProperty } from './json-schemas/number-property.ts';
import { type InferBooleanProperty, type BooleanProperty } from './json-schemas/boolean-property.ts';
import { type InferResourceProperty, type ResourceProperty } from './json-schemas/resource-property.ts';
import { type InferResourceArrayProperty, type ResourceArrayProperty } from './json-schemas/resource-array-property.ts';
import { type InferObjectProperty, type ObjectProperty } from './json-schemas/object-property.ts';
import { type InferArrayProperty, type ArrayProperty } from './json-schemas/array-property.ts';
type InputSchema = {
    title: string;
    schemaVersion: 1;
    description?: string;
    type: 'object';
    properties: {
        [x: string]: StringEnumProperty | StringProperty | IntegerProperty | NumberProperty | BooleanProperty | ResourceProperty | ResourceArrayProperty | ObjectProperty | ArrayProperty;
    };
    required?: string[];
};
export type InferInput<T extends InputSchema> = {
    [Key in keyof T['properties']]: inferProperty<T['properties'][Key]>;
};
type inferProperty<T extends InputSchema['properties'][string]> = T extends StringEnumProperty ? InferEnumProperty<T> : T extends IntegerProperty ? InferIntegerProperty<T> : T extends NumberProperty ? InferNumberProperty<T> : T extends BooleanProperty ? InferBooleanProperty<T> : T extends ResourceProperty ? InferResourceProperty<T> : T extends ResourceArrayProperty ? InferResourceArrayProperty<T> : T extends ArrayProperty ? InferArrayProperty<T> : T extends StringProperty ? InferStringProperty<T> : T extends ObjectProperty ? InferObjectProperty<T> : never;
export {};
//# sourceMappingURL=index.d.ts.map