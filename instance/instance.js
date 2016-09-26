// function NodePropertySet(propset) {}

const isArray = Array.isArray;
const XML_NS_URI = 'https://www.w3.org/1999/xml';

export class Instance {
    /**
     *
     * @param {String} tagName DOM Element tagName
     * @param {{}} [propset]
     * @returns {Element}
     */
    createElement(tagName, propset) {
        const ns = this.constructor.namespaceURI;
        const element = document.createElementNS(ns, tagName);
        this.element = element;
        if(propset) this.propset = propset;
        return element;
    }

    /**
     * @param {{
     *  attrset
     *  children
     *  className
     *  id
     *  inner
     *  nodeValue
     *  outer
     *  textContent
     * }} propset
     */
    set propset(propset) {
        const element = this.element;
        // propset = NodePropertySet(propset);
        for(const prop in propset) {
            const value = propset[prop];
            if(value !== undefined) {
                if(prop in this) this[prop] = value;
                else if(prop in element) element[prop] = value;
            }
        }
    }

    /**
     * Set attributes of the created element
     * [DOM: Element.attributes](https://www.w3.org/TR/dom/#dom-element-attributes)
     * @param {{}} attrset dictionary object
     */
    set attrset(attrset) {
        const element = this.element;
        for(const name in attrset) {
            const value = attrset[name];
            if(typeof value === 'string') {
                element.setAttribute(name, value);
            }
        }
    }

    /**
     * Append children to the created element.
     * Supports arrays and nested arrays, single DOM node and strings as Text nodes.
     * [DOM: Element.children](https://www.w3.org/TR/dom/#dom-element-children)
     * @param {Array|Node|String|[Node|String|[...]]} children array or DOM-node or string
     */
    set children(children) {
        if(isArray(children)) {
            children.forEach(child => this.children = child);
        } else {
            const child = typeof children === 'string'?
                new Text(children) :
                children;
            this.element.appendChild(child);
        }
    }

    /**
     *
     * @returns {String}
     */
    static get namespaceURI() {
        return XML_NS_URI;
    }
}

Object.defineProperty(Instance.prototype, 'element', {
    enumerable : false,
    writable : true,
    value : null
});
