import { NodeInit } from './nodeinit'

const { assign } = Object
const { isArray } = Array
const { document } = window

/**
 * - Assembler for `HTMLElement` DOM interface
 * - Provides built-in and adapted interfaces for `HTMLElement` initialization
 */
export class HTMLDOMAssembler {

    /**
     * Set content attributes on the node
     * @param {{}} attributes dictionary object
     */
    set attributes(attributes) {
        const node = this.node
        for(let name in attributes) {
            const value = attributes[name]
            if(typeof value === 'string') {
                node.setAttribute(name, value)
            }
        }
    }

    /**
     * Set custom `data-` attributes on the node
     * @param {{}} dataset declaration dictionary object
     */
    set dataset(dataset) {
        assign(this.node.dataset, dataset)
    }

    /**
     * Assign CSS style declaration to the node
     * @param {{}} style declaration dictionary object (CSSStyleDeclaration)
     */
    set style(style) {
        assign(this.node.style, style)
    }

    /**
     * Append children to the node
     * Supports arrays and nested arrays, single DOM nodes and strings as `Text` nodes
     * @param {Node|String|HTMLDOMAssembler|Array} [children]
     *  child node or string or assembler instance or array of listed
     */
    set children(children) {
        if(isArray(children)) {
            children.forEach(child => this.children = child)
        }
        else if(children) {
            const child = typeof children === 'string'?
                document.createTextNode(children) :
                children instanceof HTMLDOMAssembler?
                    children.node :
                    children
            this.node.appendChild(child)
        }
    }

    /**
     * Create the specified node and initialize it by a given property set
     * @param {String} tagName
     * @param {{}|String|Node|HTMLDOMAssembler|Array} [init]
     * @returns {Element} created and initialized DOM `Element` node
     */
    assemble(tagName, init) {
        this.create(tagName)
        return init? this.init(NodeInit(init)) : this.node
    }

    /**
     * Create the specified node
     * @param {String} tagName
     * @returns {HTMLElement|*} created node
     */
    create(tagName) {
        /**
         * Just created node, assigned to the assembler instance
         * @type {HTMLElement|*}
         */
        return this.node = document.createElement(tagName)
    }

    /**
     * Initialize the node with defined properties
     * @param {{}} init initializing `NodeInit` dictionary object
     * @returns {HTMLElement|*} initialized node
     */
    init(init) {
        const node = this.node
        for(let prop in init) {
            const value = init[prop]
            if(value !== undefined) {
                if(prop in this) this[prop] = value
                else if(prop in node) node[prop] = value
            }
        }
        return node
    }
}

Object.defineProperty(HTMLDOMAssembler.prototype, 'node', { writable : true, value : null })
