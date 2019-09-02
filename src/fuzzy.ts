import pick from './pick';
import { isArray, isString } from './type';
import valuesDeep from './valuesDeep';

//
// 递归 搜索
// @param {String} text
// @param {object[]} parents
// @return {number[]} 返回包含 text 字段的key值
// @example search('a', [{a: 1}])
//
function search(
    searchs: string[],
    key: number,
    parents: { [key: string]: any }[],
    selects: any[],
    id: string
) {
    const len = searchs.length;
    const text = searchs[key];
    if (key > len - 1) return;
    const val: any[] = [];
    parents.forEach(item => {
        const value = valuesDeep(item);
        if (
            value
                .join('')
                .toLowerCase()
                .includes(text)
        ) {
            val.push(item[id]);
        }
    });

    const next = parents.filter(o => val.includes(o[id]));
    selects.unshift(...val);

    search(searchs, key + 1, next, selects, id);
}
///
// 按照 数组顺序排序
//
// @param {*} params
// @param {string|number[]} dimensions params
// @param {string} key
//
function sortBy(
    params: { [key: string]: any }[],
    dimensions: string[],
    key: string
) {
    const valss: { [key: string]: any }[] = [];
    dimensions.forEach(o => {
        valss.push(...params.filter(item => item[key] === o));
    });

    return valss;
}

type OPTIONS = {
    key: string;
    keys?: string[];
    splitType?: string;
};

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
export default function fuzzy(
    text: string,
    parents: { [key: string]: any }[],
    options: OPTIONS
): { [key: string]: any }[] {
    if (!isArray(parents)) throw Error('Params parents only accept Array');
    if (!isString(text)) throw Error('Params text only accept String');

    const nextText = text.trim().toLowerCase();

    if (nextText.length === 0) return parents;

    const { keys, key } = options;
    // 按照范围keys 得到新parnts
    let nextParents = [];
    if (isArray(keys)) {
        nextParents = parents.map(item => pick(item, keys.concat(key)));
    } else nextParents = parents;
    const selects: any[] = [];

    // 根据splitType 的值分为多个字段数字
    const { splitType } = options;
    const keyWords = Array.from(new Set(nextText.split(splitType || ';')))
        .filter(o => o.trim().length > 0)
        .map(o => o.trim());

    search(keyWords, 0, nextParents, selects, key);

    // 去重key
    const chooseKey = [...Array.from(new Set(selects))];
    const chooses = parents.filter(o => chooseKey.includes(o[key]));
    return [...sortBy(chooses, chooseKey, key)];
}
