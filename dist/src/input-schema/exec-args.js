export const execArgs = {
    dryRun: () => {
        throw new Error('not initialized');
    },
    overwrite: () => {
        throw new Error('not initialized');
    },
    noDiff: () => {
        throw new Error('not initialized');
    },
};
export function initializeExecArgs() {
    const args = process.argv;
    execArgs.dryRun = () => args.includes('--dry-run');
    execArgs.overwrite = () => args.includes('--overwrite') && !execArgs.dryRun();
    execArgs.noDiff = () => args.includes('--no-diff');
}
//# sourceMappingURL=exec-args.js.map