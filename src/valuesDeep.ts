import { isObject, isArray } from './type';

/**
 * 获取对象的 value
 *
 * @export
 * @param {Array|Object} value
 * @returns {string[]}
 * @example
 *
 * valuesDeep({a: 1, b: [{c: 1}]})
 * // => [1, 2]
 *
 */
export default function valuesDeep(value: any[] | object): any[] {
    const val: any[] = [];
    vals(value, 0, val);
    return val;
}

/**
 * 递归获取 Object value
 *
 * @param {({ [key: string]: any } | { [key: string]: any })} parent
 * @param {number} index
 * @param {any[]} value
 * @returns {void}
 *
 * @example
 *
 * vals({ a: 1, 1: 2, b: [{c: 3}] }, 0, []);
 * // => [1, 2, 3]
 *
 */
function vals(
    parent: { [key: string]: any },
    index: number,
    value: any[]
): void {
    const keys = Object.keys(parent);
    const len = keys.length;
    if (index > len - 1) return;
    const key = keys[index];
    const val = parent[key];

    if (isObject(val) || isArray(val)) {
        vals(val, 0, value);
        vals(parent, index + 1, value);
    } else {
        value.push(val);
        vals(parent, index + 1, value);
    }
}
