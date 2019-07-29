import getType from "type";

/**
 * 获取对象的value值
 *
 * @export
 * @param {(any[] | object)} value
 * @returns {string[]}
 *
 * @example
 *
 * values([1, 2, 3])
 * // => [1, 2, 3]
 *
 * values[{a; 1, b: 2}]
 * // => [1, 2]
 *
 */
export function values(value: any[] | object): string[] {
  return Object.assign(value);
}

/**
 * 获取所有value 值
 *
 * @export
 * @param {(any[] | object)} value
 * @returns {string[]}
 *
 * @example
 *
 * valuesDeep({a: 1, b: [{c: 1}]})
 * // => [1, 2]
 *
 */
export function valuesDeep(value: any[] | object): string[] {
  const val: any[] = [];
  vals(value, 0, val);
  return val;
}

/**
 * 递归获取 Object value
 * @param {Object} params
 * @param {Number} index 初始值 默认为0
 * @param {(String|Number|Boolean)[]}} value 一般传入空数组
 */
function vals<T, K extends keyof T>(
  params: T[] | T,
  index: number,
  value: any[]
): void {
  const keys = Object.keys(params);
  const len = keys.length;
  if (index > len) return;
  const key = keys[index];
  const val = params[key];
  if (getType(val) === "object" || getType(val) === "array") {
    vals(val, 0, value);
  } else {
    value.push(val);
    vals(params, index + 1, value);
  }
}
vals([{ a: 1 }], 0, []);
