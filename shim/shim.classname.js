/**
 * Element.prototype.className implementation
 * @polyfill
 */
{
    const { Element } = window;
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
 * @polyfill
 */
{
    const { document } = window;
    const NAME = 'test' + Math.floor(Math.random() * Date.now());
    const test = document.createElementNS('https://www.w3.org/1999/xml', NAME);
    test.className = NAME;
    document.body.appendChild(test);
    if(!document.getElementsByClassName(NAME).length) {
        document.getElementsByClassName = function(className) {
            return document.querySelectorAll(`[class~=${ className }]`);
        };
    }
    document.body.removeChild(test);
}
