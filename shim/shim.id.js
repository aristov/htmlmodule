/**
 * Element.prototype.id implementation
 *
 * Author
 *  Viacheslav Aristov
 *  vv.aristov@gmail.com
 *
 * @polyfill
 */
const { Element, document } = window;

if(!Element.prototype.hasOwnProperty('id')) {
    Object.defineProperty(Element.prototype, 'id', {
        set(id) {
            this.setAttribute('id', id);
        },
        get() {
            return this.getAttribute('id');
        }
    });
    document.getElementById = id => document.querySelector(`[id=${ id }]`);
}
