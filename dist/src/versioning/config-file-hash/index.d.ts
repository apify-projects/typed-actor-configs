import z, { ZodObject } from 'zod';
type Hashed<T extends {}> = T & {
    _hash: string;
};
export declare function hashConfigurationFile<Schema extends ZodObject>(config: z.infer<Schema>, schema: Schema): Hashed<z.infer<Schema>>;
export declare function checkIntegrity<Schema extends ZodObject>(file: string, schema: Schema): "Passed" | "Failed";
export {};
//# sourceMappingURL=index.d.ts.map