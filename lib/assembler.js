import { NodeInit } from './nodeinit';

const { assign } = Object;
const { isArray } = Array;
const { document } = window;

/**
 * - Assembler for `HTMLElement` DOM interface
 * - Provides built-in and adapted interfaces for `HTMLElement` initialization
 */
export class HTMLDOMAssembler {

    /**
     * Set content attributes on the element
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
     * Set custom `data-` attributes on the element
     * @param {{}} dataset declaration dictionary object
     */
    set dataset(dataset) {
        assign(this.element.dataset, dataset);
    }

    /**
     * Assign CSS style declaration to the element
     * @param {{}} style declaration dictionary object (CSSStyleDeclaration)
     */
    set style(style) {
        assign(this.element.style, style);
    }

    /**
     * Append children to the element
     * - Supports arrays and nested arrays, single DOM nodes and strings as `Text` nodes
     * @param {Node|String|HTMLDOMAssembler|Array} [children] child node or string or assembler instance or array of listed
     */
    set children(children) {
        if(isArray(children)) {
            children.forEach(child => this.children = child);
        }
        else if(children) {
            const child = typeof children === 'string'?
                document.createTextNode(children) :
                children instanceof HTMLDOMAssembler?
                    children.element :
                    children;
            this.element.appendChild(child);
        }
    }

    /**
     * Create the specified element and initialize it by a given property set
     * @param {String} tagName
     * @param {{}|String|Node|HTMLDOMAssembler|Array} [init]
     * @returns {Element} created and initialized DOM `Element`
     */
    assemble(tagName, init) {
        this.create(tagName);
        if(init) this.init(NodeInit(init));
        return this.element;
    }

    /**
     * Create the specified element
     * @param {String} tagName
     * @returns {HTMLElement|*} created element
     */
    create(tagName) {
        /**
         * just created element, assigned to the assembler instance
         * @type {HTMLElement|*}
         */
        return this.element = document.createElement(tagName);
    }

    /**
     * Initialize the element with defined properties
     * @param {{}} init initializing dictionary object
     */
    init(init) {
        const element = this.element;
        for(let prop in init) {
            const value = init[prop];
            if(value !== undefined) {
                if(prop in this) this[prop] = value;
                else if(prop in element) element[prop] = value;
            }
        }
    }
}

Object.defineProperty(HTMLDOMAssembler.prototype, 'element', { writable : true, value : null });
