type Many<T> = T | ReadonlyArray<T>;

/**
 * 创建一个从 object 中选中的属性的对象。
 *
 * >> 不改变原对象
 *
 *
 * @export
 * @param {object} parent 原对象
 * @param {(string[])} props 属性名
 * @returns {object}
 *
 */
export default function pick<T extends {}, K extends keyof T>(
    parent: T,
    props?: K[]
): Pick<T, K> {
    if (parent === null) return {} as Pick<T, K>;
    if (!props) return {} as Pick<T, K>;
    if (props.length === 0) return {} as Pick<T, K>;
    const value: { [P in K]: T[P] } = {} as Pick<T, K>;
    vals(parent, props, 0, value);
    return value;
}

function vals<T extends object, K extends keyof T>(
    parent: T,
    props: K[],
    index: number,
    value: {}
): void {
    const len = props.length;
    if (index > len - 1) return;
    const key = props[index];

    if (parent.hasOwnProperty(key)) {
        Object.assign(value, {
            [key]: parent[key],
        });
        vals(parent, props, index + 1, value);
    } else vals(parent, props, index + 1, value);
}
