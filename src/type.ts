enum TYPE_MSG {
    'string',
    'number',
    'boolean',
    'array',
    'null',
    'undefined',
    'function',
    'object',
    'set',
    'map',
    'symbol',
}

/**
 * Get the type of value
 * @ignore
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
export function getType(value: any): keyof TYPE_MSG {
    return Object.prototype.toString
        .call(value)
        .replace(/(\[)(\w* )(\w*)(\])/, '$3')
        .toLowerCase() as keyof TYPE_MSG;
}

const toString = Object.prototype.toString;

export function isString(value: any): value is string {
    if (value === null || value === undefined) return false;
    return toString.call(value) === '[object String]';
}

export function isNumber(value: any): value is number {
    if (value === null || value === undefined) return false;
    return toString.call(value) === '[object Number]';
}

export function isNull(value: any): value is null {
    if (value === null || value === undefined) return false;
    return toString.call(value) === '[object Null]';
}

export function isUndefined(value: any): value is undefined {
    return toString.call(value) === '[object Undefined]';
}

export function isArray(value: any): value is Array<any> {
    if (value === null || value === undefined) return false;
    return toString.call(value) === '[object Array]';
}

export function isBoolean(value: any): value is boolean {
    if (value === null || value === undefined) return false;
    return toString.call(value) === '[object Boolean]';
}

export function isFunction(value: any): value is Function {
    if (value === null || value === undefined) return false;
    return toString.call(value) === '[object Function]';
}

export function isObject(value: any): value is object {
    if (value === null || value === undefined) return false;
    return toString.call(value) === '[object Object]';
}
