/**
 *
 *
 * @export
 * @param {object} parent
 * @param {() => boolean} predicate
 * @returns {object}
 */
export default function pickBy(
    parent: object,
    predicate: () => boolean
): object {
    const value = {};
    vals(parent, predicate, 0, value);
    return value;
}

/**
 * @ignore
 */
function vals(
    parent: object,
    predicate: () => boolean,
    index: number,
    value: object
) {}
