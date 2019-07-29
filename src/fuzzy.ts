import pick from "./pick";
import getType from "./type";

/**
 * 递归获取 Object value
 * @param {Object} params
 * @param {Number} index 初始值 默认为0
 * @param {(String|Number|Boolean)[]}} value 一般传入空数组
 */
function vals(params: [{ [key: string]: any }], index: number, value: any[]) {
  const keys: string[] = Object.keys(params);
  const len = keys.length;
  if (index > len) return;
  const key:string = keys[index];
  const val = params[key];
  if (getType(val) === "object" || getType(val) === "array") {
    vals(val, 0, value);
  } else {
    value.push(val);
    vals(params, index + 1, value);
  }
}
/**
 * 递归 搜索
 * @param {String} text
 * @param {object[]} parents
 * @return {number[]} 返回包含 text 字段的key值
 * @example search('a', [{a: 1}])
 */
function search(searchs, key, parents, selects, id) {
  const len = searchs.length;
  const text = searchs[key];
  if (key > len - 1) return;
  const val = [];
  parents.forEach(item => {
    const value = [];
    vals(item, 0, value);
    if (
      value
        .join("")
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
function sortBy(params, dimensions, key) {
  const valss = [];
  dimensions.forEach(o => {
    valss.push(...params.filter(item => item[key] === o));
  });

  return valss;
}

type OPTIONS = {
  key: string;
  keys: string[];
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
 * @example fuzzy('a', [{a:1}], {keys: ['a'], key: ';})
 */
export default function fuzzy(
  text: string,
  parents: object[],
  options: OPTIONS
) {
  if (getType(parents) !== "string" && getType(parents) !== "array")
    throw Error("params parents only accept String or Array");
  if (getType(text) !== "string") throw Error("params text only accept String");

  const nextText = text.trim().toLowerCase();

  if (nextText.length === 0) return null;

  const { keys, key } = options;
  // 按照范围keys 得到新parnts
  const nextParents = parents.map(item => pick(item, keys.concat(key)));
  const selects = [];

  // 根据空格分为多个字段数字
  const keyWords = [...new Set(nextText.split(";"))].filter(o => o.length > 0);
  search(keyWords, 0, nextParents, selects, key);

  // 去重key
  const chooseKey = [...new Set(selects)];
  const chooses = parents.filter(o => chooseKey.includes(o[key]));

  return [...sortBy(chooses, chooseKey, key)];
}
