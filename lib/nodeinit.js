/**
 * Converts any non-dictionary object argument to a `NodeInit` dictionary object
 * with a `children` property assigned to the passed object
 * @function NodeInit
 * @param {*|{}} [init] Various init types
 * @return {{children:*}|initial} `NodeInit` dictionary object
 */
export function NodeInit(init) {
    if(init && init.constructor !== Object) {
        return { children : init }
    }
    return init
}
