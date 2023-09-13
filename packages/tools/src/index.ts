import pick from './pick';
import fuzzy from './fuzzy';
import {
    isArray,
    isBoolean,
    isFunction,
    isNull,
    isUndefined,
    isNumber,
    isString,
    isObject,
} from './type';
import values from './values';
import valuesDeep from './valuesDeep';

const tools = {
    pick,
    fuzzy,
    isArray,
    isBoolean,
    isFunction,
    isNull,
    isUndefined,
    isNumber,
    isString,
    isObject,
    values,
    valuesDeep,
};
export default tools;

export {
    pick,
    fuzzy,
    isArray,
    isBoolean,
    isFunction,
    isNull,
    isUndefined,
    isNumber,
    isString,
    isObject,
    values,
    valuesDeep,
};
