/**
 * Converts any non-dictionary object argument
 * to `NodeInit` dictionary object with `children` property assigned
 * @param {Object|String|Array} init
 * @returns {{}} NodeInit dictionary object
 * @interface
 */
export default function NodeInit(init) {
    if(init && init.constructor !== Object) {
        return { children : init };
    }
    return init;
}
