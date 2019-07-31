import pick from './pick';
import { isArray, isString } from './type';
import valuesDeep from './valuesDeep';

/**
 * 递归 搜索
 * @param {String} text
 * @param {object[]} parents
 * @return {number[]} 返回包含 text 字段的key值
 * @example search('a', [{a: 1}])
 */
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
/**
 * 按照 数组顺序排序
 *
 * @param {*} params
 * @param {string|number[]} dimensions params
 * @param {string} key
 */
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
};

/**
 * 模糊搜索
 *
 * >> 多字段输入通过; 分隔 再次输入的字段 会在;前的字段上的搜索结果上进行搜索排序,会置顶多字段匹配的最接近的结果
 *
 * @since 0.0.1
 * @category Collecting
 * @param {String} text 搜索字符
 * @param {String|Array} parents  搜索对象
 * @param {Object} {keys} 在给定范围内的keys 进行模糊搜索 给定 主键 key
 * @param {OPTIONS} options
 * @returns {object[]}
 * @example
 *
 * fuzzy('a', [{a:'aaaa'}, {a: 'bbb'}], {key: ''})
 * // => [{a:'aaaa'}]
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

  // 根据空格分为多个字段数字
  const keyWords = Array.from(new Set(nextText.split(';')))
    .filter(o => o.trim().length > 0)
    .map(o => o.trim());

  search(keyWords, 0, nextParents, selects, key);

  // 去重key
  const chooseKey = [...Array.from(new Set(selects))];
  const chooses = parents.filter(o => chooseKey.includes(o[key]));
  return [...sortBy(chooses, chooseKey, key)];
}
