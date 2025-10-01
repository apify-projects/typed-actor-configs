export const execArgs = {
    dryRun: (): boolean => {
        throw new Error('not initialized');
    },
    overwrite: (): boolean => {
        throw new Error('not initialized');
    },
    noDiff: (): boolean => {
        throw new Error('not initialized');
    },
};

export function initializeExecArgs() {
    const args = process.argv;
    execArgs.dryRun = () => args.includes('--dry-run');
    execArgs.overwrite = () => args.includes('--overwrite') && !execArgs.dryRun();
    execArgs.noDiff = () => args.includes('--no-diff');
}
