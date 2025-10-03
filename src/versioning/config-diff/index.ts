import deepDiff, { type DiffArray, type DiffDeleted, type DiffEdit, type DiffNew } from 'deep-diff';
import { blueBG, green, red, yellow } from '../../text-coloring/index.ts';

const { diff } = deepDiff;
export function diffConfigurations(oldConfig: any, newConfig: any) {
    const diffResult = diff(oldConfig, newConfig);
    if (!diffResult || diffResult.length === 0) {
        return false;
    }
    let path;
    console.log(`\n\n█████ Diffing previous configuration █████`);
    for (const diff of diffResult) {
        const [pathToChange, lastItem] = getPathToChange(diff.path);
        if (path !== pathToChange) {
            console.log(`\n${blueBG(pathToChange)}`);
            path = pathToChange;
        }

        switch (diff.kind) {
            case 'E':
                showEditedItem(lastItem, diff);
                break;
            case 'D':
                showDeletedItem(lastItem, diff);
                break;
            case 'N':
                showAddedItem(lastItem, diff);
                break;
            case 'A':
                showArrayChanged(lastItem, diff);
                break;
        }
        console.log();
    }
    return true;
}

function getPathToChange(diff: any[] | undefined = []) {
    const base = ['ROOT'];
    const lastItem = diff[diff.length - 1] ?? 'ROOT';
    const pathWithoutLastItem = (diff ?? []).slice(0, -1);
    const path = base.concat(pathWithoutLastItem).join(' > ');
    return [path, lastItem];
}
function show(item: any, char: string) {
    switch (typeof item) {
        case 'object':
            return JSON.stringify(item, null, 4).replaceAll('\n', `\n\t ${char} `);
        default:
            return item;
    }
}

function showEditedItem<T, U>(itemName: string, item: DiffEdit<T, U>) {
    console.log(yellow(`\t> ${itemName} edited:`));
    console.log(red(`\t - ${show(item.lhs, '-')}`));
    console.log(green(`\t + ${show(item.rhs, '+')}`));
}

function showAddedItem<T>(itemName: string, item: DiffNew<T>) {
    console.log(green(`\t> ${itemName} added:`));
    console.log(green(`\t + ${show(item.rhs, '+')}`));
}
function showDeletedItem<T>(itemName: string, item: DiffDeleted<T>) {
    console.log(red(`\t> ${itemName} deleted:`));
    console.log(red(`\t - ${show(item.lhs, '-')}`));
}
function showArrayChanged<T, U>(itemName: string, item: DiffArray<T, U>) {
    const itemLabel = `${itemName} > ${item.index}`;
    switch (item.item.kind) {
        case 'E':
            showEditedItem(itemLabel, item.item);
            break;
        case 'D':
            showDeletedItem(itemLabel, item.item);
            break;
        case 'N':
            showAddedItem(itemLabel, item.item);
            break;
        case 'A':
            showArrayChanged(itemLabel, item.item);
            break;
    }
}
