/**
 * Converts any non-dictionary object argument
 * to `NodeInit` dictionary object with `children` property assigned to passed object
 * @function NodeInit
 * @param {Object|String|Array} init
 * @returns {{}} NodeInit dictionary object
 */
export function NodeInit(init) {
    if(init && init.constructor !== Object) {
        return { children : init };
    }
    return init;
}
