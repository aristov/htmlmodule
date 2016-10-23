/**
 * Element.prototype.id implementation
 *
 * @polyfill
 */
const { Element, document } = window;

if(!('id' in Element.prototype)) {
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
