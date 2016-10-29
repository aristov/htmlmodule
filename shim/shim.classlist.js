/**
 * https://github.com/remy/polyfills/blob/master/classList.js
 * copy-paste + fixes
 */
{
    const Element = window.Element;

    /**
     * Define element getter
     * @param obj
     * @param prop
     * @param getter
     */
    function defineElementGetter(obj, prop, getter) {
        if(Object.defineProperty) {
            Object.defineProperty(obj, prop, { get : getter });
        }
        else obj.__defineGetter__(prop, getter);
    }

    if(!('classList' in Element.prototype)) {
        const { push, splice, join } = Array.prototype;

        class DOMTokenList {
            constructor(element) {
                this.element = element;
                const classes = element.className.trim().split(/\s+/);
                for(let i = 0; i < classes.length; i++) {
                    push.call(this, classes[i]);
                }
            }

            add(token) {
                if(this.contains(token)) return;
                push.call(this, token);
                this.element.className = this.toString();
            }

            contains(token) {
                return this.element.className.indexOf(token) !== -1;
            }

            item(index) {
                return this[index] || null;
            }

            remove(token) {
                if(!this.contains(token)) return;
                let i;
                for(i = 0; i < this.length; i++) {
                    if(this[i] === token) break;
                }
                splice.call(this, i, 1);
                this.element.className = this.toString();
            }

            toString() {
                return join.call(this, ' ');
            }

            toggle(token) {
                if(this.contains(token)) {
                    this.remove(token);
                }
                else this.add(token);
                return this.contains(token);
            }
        }

        window.DOMTokenList = DOMTokenList;

        defineElementGetter(Element.prototype, 'classList', function() {
            return this.__classList__ ||
                (this.__classList__ = new DOMTokenList(this));
        });
    }
}
