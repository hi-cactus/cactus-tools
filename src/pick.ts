/**
 * 创建一个从 object 中选中的属性的对象。
 *
 * @export
 * @param {object} parent
 * @param {(string[])} props
 * @returns {object}
 */
export default function pick(parent: object, props?: string[]): object {
  const value = {};
    if (parent === null) return value;
  if (!props) return value;
  if (props.length === 0) return value;
  vals(parent, props, 0, value);
  return {};
}

function vals(
  parent: object,
  props: string[],
  index: number,
  value: object
): void {
  const len = props.length;
  if (index > len - 1) return;
  const key = props[index];

  if (parent.hasOwnProperty("key")) {
    Object.assign({}, value, {
      [key]: parent[key]
    });
  } else vals(parent, props, index + 1, value);
}
