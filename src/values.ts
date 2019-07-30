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
export default function values(value: any[] | object): any[] {
  return Object.assign(value);
}
