const isArray = Array.isArray;
const { document, Text, Element } = window;

export const XML_NS_URI = 'https://www.w3.org/1999/xml';

export class Instance {
    /**
     * @param {Element} element
     */
    set element(element) {
        if(element instanceof Element) {
            this.node = element;
        } else throw Error('This is not Element');
    }

    /**
     * @returns {Element}
     */
    get element() {
        if(this.node) return this.node;
        else throw Error('No element assigned');
    }

    /**
     * @param {{}} propset
     */
    set propset(propset) {
        const element = this.element;
        for(const prop in propset) {
            const value = propset[prop];
            if(value !== undefined) {
                if(prop in this) this[prop] = value;
                else if(prop in element) element[prop] = value;
            }
        }
    }

    /**
     * Set attributes of the element
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
     * Append children to the element.
     * Supports arrays and nested arrays, single DOM node and strings as Text nodes.
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
     * @param {String} tagName DOM Element tagName
     * @param {{}} [propset]
     * @returns {Element}
     */
    createElement(tagName, propset) {
        const ns = this.constructor.namespaceURI;
        const element = document.createElementNS(ns, tagName);
        this.element = element;
        if(propset) this.propset = NodePropertySet(propset);
        return element;
    }

    /**
     * @returns {String}
     */
    static get namespaceURI() {
        return XML_NS_URI;
    }
}

Object.defineProperty(Instance.prototype, 'node', {
    enumerable : true,
    writable : true,
    value : null
});

/**
 *
 * @param {Object,String|Array} propset
 * @returns {{}}
 * @constructor
 */
export function NodePropertySet(propset) {
    if(propset && propset.constructor !== Object) {
        return { children : propset };
    }
    return propset;
}
