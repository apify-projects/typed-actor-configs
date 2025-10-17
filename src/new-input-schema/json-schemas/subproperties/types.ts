import { JSONSchema } from 'json-schema-to-ts';

export type SubPropertySchema = JSONSchema & { $id: string };
