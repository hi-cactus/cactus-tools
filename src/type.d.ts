export type TYPE_MSG =
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

export declare function getType(value: any): TYPE_MSG;

export declare function isString(value: any): value is string;

export declare function isNumber(value: any): value is number;

export declare function isNull(value: any): value is null;

export declare function isUndefined(value: any): value is undefined;

export declare function isArray(value: any): value is Array<any>;

export declare function isBoolean(value: any): value is boolean;

export declare function isFunction(value: any): value is Function;

export declare function isObject(value: any): value is object;
