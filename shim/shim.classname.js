/**
 * Element.prototype.className implementation
 *
 * @polyfill
 */
{
    const { Element, document } = window;

    if(!('className' in Element.prototype)) {
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
}

/**
 * Safari has `className` in `Element` prototype, but document doesn't find it
 *
 * @polyfill
 */
{
    const test = document.createElementNS('https://www.w3.org/1999/xml', 'test');

    test.className = 'test';

    if(!document.getElementsByClassName.length) {
        document.getElementsByClassName = className => {
            return document.querySelectorAll(`[class~=${ className }]`);
        }
    }
}
