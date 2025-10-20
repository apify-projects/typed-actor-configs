import { existsSync, mkdirSync } from 'fs';
export function createPathToFile(path) {
    const splitPath = path.split('/');
    for (let i = 0; i < splitPath.length - 1; i++) {
        const folder = splitPath.slice(0, i + 1).join('/');
        if (!existsSync(folder)) {
            mkdirSync(folder, { recursive: true });
        }
    }
}
//# sourceMappingURL=filesystem.js.map