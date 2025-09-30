export function green(text: string) {
    return `\x1b[32m${text}\x1b[0m`;
}
export function red(text: string) {
    return `\x1b[31m${text}\x1b[0m`;
}
export function yellow(text: string) {
    return `\x1b[33m${text}\x1b[0m`;
}
export function blue(text: string) {
    return `\x1b[34m${text}\x1b[0m`;
}

export function greenBG(text: string) {
    return `\x1b[42m${text}\x1b[0m`;
}
export function redBG(text: string) {
    return `\x1b[41m${text}\x1b[0m`;
}
export function yellowBG(text: string) {
    return `\x1b[43m${text}\x1b[0m`;
}
export function blueBG(text: string) {
    return `\x1b[44m${text}\x1b[0m`;
}
