import { existsSync, readFileSync, writeFileSync } from 'fs';
import { diffConfigurations } from "../versioning/config-diff/index.js";
import { greenBG, yellowBG } from "../text-coloring/index.js";
import { execArgs, initializeExecArgs } from "../input-schema/exec-args.js";
import { createPathToFile } from "../filesystem.js";
import { cwd } from 'process';
function loadExistingConfig(path) {
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
function outputConfig(path, config, hasDiff) {
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
export function defineActorInput(path, inputSchema) {
    initializeExecArgs();
    const previousConfig = loadExistingConfig(path);
    const hasDiff = diffConfigurations(previousConfig, inputSchema);
    if (hasDiff && execArgs.noDiff()) {
        console.log('Schema differences found, but --no-diff was set, exiting');
        process.exit(1);
    }
    if (hasDiff) {
        console.warn(`\n${yellowBG('MODIFIED')}: Type-critical fields dont match, check changes`);
    }
    else {
        console.log(`\n${greenBG('PASSED')}: No differences found on type-critical fields`);
    }
    outputConfig(path, inputSchema, hasDiff);
    return inputSchema;
}
//# sourceMappingURL=index.js.map