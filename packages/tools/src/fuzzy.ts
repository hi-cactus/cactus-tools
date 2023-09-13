import pick from './pick';
import { isArray, isString } from './type';
import valuesDeep from './valuesDeep';

/**
 * 递归 搜索
 * @ignore
 *
 * @param searchValues {String[]} text array 搜索值
 * @param idx 递归次数
 * @param parents
 * @param selects
 * @param key
 * @param keys
 */
function search<T extends object, K extends keyof T>(
    searchValues: string[],
    idx: number,
    parents: T[],
    selects: T[K][],
    key: K,
    keys?: K[]
) {
    const len = searchValues.length;
    const text = searchValues[idx];
    if (idx > len - 1) return;
    const val: any[] = [];
    parents.forEach((item) => {
        const value = valuesDeep(
            pick<T, K>(
                item,
                keys
                    ? keys
                    : (Object.keys(item).filter((o) => o !== key) as K[])
            )
        );
        if (value.join('').toLowerCase().includes(text)) val.push(item[key]);
    });

    const next = parents.filter((o) => val.includes(o[key]));
    selects.unshift(...val);

    search(searchValues, idx + 1, next, selects, key, keys);
}
/** 
 * 按照 数组顺序排序
 * @ignore
 * 
 * @param {*} params
 * @param {string|number[]} dimensions params
 * @param {string} key
 */
function sortBy<T extends object, K extends keyof T>(
    params: T[],
    dimensions: T[K][],
    key: K
) {
    const valss: T[] = [];
    dimensions.forEach((o) => {
        valss.push(...params.filter((item) => item[key] === o));
    });

    return valss;
}

/**
 * 模糊搜索
 *
 *   支持多字段搜索,通过;分隔 => 'first;second;third';
 *   返回第一个字段搜索的结果;
 *   后一个字段只对前一个字段的搜索结果进行排序,并置顶最接近的结果
 *
 * @since 0.0.1
 * @param {string} text - 搜索字符
 * @param {Object[]} parents -  搜索对象
 * @param {Object} options - OPTIONS 配置项
 * @param {string} key - options.key 主键 key 指定对象中唯一不重复的key
 * @param {string[]} keys - options.keys 可选 指定搜索范围 指定后只搜索范围内的value
 * @param {string[]} splitType - options.splitType 可选 可以指定用于分割阻断的类型， 默认 ;
 * @returns {Object[]}
 * @example
 *
 * fuzzy('a', [{a:'aaaa'}, {a: 'bbb'}], {key: ''})
 * // => [{a:'aaaa'}]
 * fuzzy('first;second', [{a:'first,second',id; 1}, {a: 'first', id: 2}], {key: 'a'})
 * // => [{a:'first,second',id; 1}]
 *
 *
 */
export default function fuzzy<T extends object>(
    text: string,
    parents: T[],
    options: {
        key: keyof T;
        keys?: (keyof T)[];
        splitType?: string;
    }
): Pick<T, keyof T>[] {
    if (!isArray(parents)) throw Error('Params parents only accept Array');
    if (!isString(text)) throw Error('Params text only accept String');

    const nextText = text.trim().toLowerCase();

    if (nextText.length === 0) return parents;

    const { keys, key, splitType } = options;

    // 按照范围keys 得到新 parents
    const nextParents = isArray(keys)
        ? parents.map((item) => pick<T, keyof T>(item, keys.concat(key)))
        : parents;

    // 根据splitType 的值分为多个字段数字
    const keyWords = Array.from(new Set(nextText.split(splitType || ';')))
        .filter((o) => o.trim().length > 0)
        .map((o) => o.trim());

    const selects: any[] = [];

    search<{ [P in keyof T]: T[P] }, keyof T>(
        keyWords,
        0,
        nextParents,
        selects,
        key,
        keys
    );

    // 去重key
    const chooseKey = [...Array.from(new Set(selects))];
    const chooses = parents.filter((o) => chooseKey.includes(o[key]));
    return [...sortBy(chooses, chooseKey, key)];
}
