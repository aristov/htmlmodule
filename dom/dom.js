import './../shim/shim.mdn-classlist.js';

const { isArray } = Array;
const { document, Element } = window;

export const XML_NS_URI = 'https://www.w3.org/1999/xml';

export class DOMAssembler {
    /**
     * Assign given element to instance
     * @param {Element} element
     */
    set element(element) {
        if(element instanceof Element) {
            this.node = element;
        } else throw Error('This is not Element');
    }

    /**
     * Get the assigned element
     * @returns {Element}
     */
    get element() {
        if(this.node) return this.node;
        else throw Error('No element assigned');
    }

    /**
     * Initialize the element with defined properties
     * @param {{}} init Node property set dictionary object
     */
    set init(init) {
        const element = this.element;
        for(const prop in init) {
            const value = init[prop];
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
     * @param {Array|Node|String|[Array|Node|String|[...]]} children array or DOM-node or string
     */
    set children(children) {
        if(isArray(children)) {
            children.forEach(child => this.children = child);
        } else {
            const child = typeof children === 'string'?
                document.createTextNode(children) :
                children;
            this.element.appendChild(child);
        }
    }

    /**
     * Create the specified element and initialize it by given property set
     * @param {String} tagName
     * @param {{}} [init]
     * @returns {Element}
     */
    createElement(tagName, init) {
        const { namespaceURI } = this.constructor;
        this.element = document.createElementNS(namespaceURI, tagName);
        if(init) this.init = NodeInit(init);
        return this.element;
    }

    /**
     * @returns {String}
     */
    static get namespaceURI() {
        return XML_NS_URI;
    }
}

Object.defineProperty(DOMAssembler.prototype, 'node', {
    enumerable : true,
    writable : true,
    value : null
});

/**
 * Converts any non-dictionary object argument
 * to NodeInit dictionary object with `children` property assigned
 * @param {Object,String|Array} init
 * @returns {{}} NodePropertySet
 * @interface
 */
export function NodeInit(init) {
    if(init && init.constructor !== Object) {
        return { children : init };
    }
    return init;
}
