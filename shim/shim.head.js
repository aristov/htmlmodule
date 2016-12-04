/**
 * Document.prototype.head getter implementation
 *
 * @get {HTMLHeadElement} head
 * @polyfill
 */
const { HTMLDocument : { prototype } } = window

if(!('head' in prototype)) {
    Object.defineProperty(prototype, 'head', {
        get() {
            return document.getElementsByTagName('head')[0]
        }
    })
}
