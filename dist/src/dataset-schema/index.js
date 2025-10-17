import { diffConfigurations } from "../versioning/config-diff/index.js";
import { greenBG, redBG } from "../text-coloring/index.js";
function myDataset(path, input) {
    console.log(path);
    return input;
}
export function myDatasetFields(config, input) {
    const diff = diffConfigurations(config.fields, input.fields);
    if (diff) {
        console.log(`\n${redBG('FAILED')}: Type-critical fields dont match, check changes`);
        process.exit(1);
    }
    console.log(`\n${greenBG('PASSED')}: No differences found on type-critical fields`);
    return input;
}
//# sourceMappingURL=index.js.map