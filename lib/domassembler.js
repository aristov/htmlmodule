import { NodeInit } from './nodeinit';

const { isArray } = Array;
const { document, Element } = window;

/**
 * - XML namespace
 * - provides `Element` DOM interface
 * - https://www.w3.org/1999/xml
 */
export const XML_NS_URI = 'https://www.w3.org/1999/xml';

/**
 * - Assembler for DOM `Element`
 * - `Document.createElementNS` functionality wrapper
 * - Provides built-in and adapted interfaces for `Element` initialization
 */
export class DOMAssembler {
    /**
     * Assign given element to assembler instance
     * @param {Element} element node to assign
     */
    set element(element) {
        if(element instanceof Element) {
            this.node = element;
        } else throw Error('This is not Element');
    }

    /**
     * Get the assigned element
     * @returns {Element} assigned node
     */
    get element() {
        if(this.node) return this.node;
        else throw Error('No element assigned');
    }

    /**
     * Initialize the element with defined properties
     * @param {{}} init initializing dictionary object
     */
    set init(init) {
        const element = this.element;
        for(let prop in init) {
            const value = init[prop];
            if(value !== undefined) {
                if(prop in this) this[prop] = value;
                else if(prop in element) element[prop] = value;
            }
        }
    }

    /**
     * Set attributes on the element
     * @param {{}} attrset dictionary object
     */
    set attrset(attrset) {
        const element = this.element;
        for(let name in attrset) {
            const value = attrset[name];
            if(typeof value === 'string') {
                element.setAttribute(name, value);
            }
        }
    }

    /**
     * Append children to the element
     * - Supports arrays and nested arrays, single DOM nodes and strings as `Text` nodes
     * @param {Node|String|Array} children child node or string or array of listed
     */
    set children(children) {
        if(isArray(children)) {
            children.forEach(child => this.children = child);
        } else if(children) {
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
     * @returns {Element} created and initialized DOM `Element`
     */
    createElement(tagName, init) {
        const { namespaceURI } = this.constructor;
        this.element = document.createElementNS(namespaceURI, tagName);
        if(init) this.init = NodeInit(init);
        return this.element;
    }

    /**
     * @returns {String} create elements in XML namespace
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
