/**
 * Element.prototype.className polyfill
 * Author
 *  Viacheslav Aristov
 *  vv.aristov@gmail.com
 */
if(!Element.prototype.hasOwnProperty('className')) {
    Object.defineProperty(Element.prototype, 'className', {
        enumerable : true,
        set(className) {
            this.setAttribute('class', className);
        },
        get() {
            return this.getAttribute('class');
        }
    });
}
