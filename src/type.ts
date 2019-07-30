type TYPE_MSG =
  | 'string'
  | 'number'
  | 'boolean'
  | 'array'
  | 'null'
  | 'undefined'
  | 'function'
  | 'object'
  | 'set'
  | 'map'
  | 'symbol';

/**
 * Get the type of value
 *
 * @since 0.0.1
 * @category Lang
 * @param {*} value
 * @return {string} TYPE_MSG
 *
 * @example
 *
 * getType('123')
 * // => string
 *
 * getType(123)
 * // => number
 *
 *
 */
export default function getType(value: any): string {
  return Object.prototype.toString
    .call(value)
    .replace(/(\[)(\w* )(\w*)(\])/, '$3')
    .toLowerCase();
}
