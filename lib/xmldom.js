import { DOMAssembler } from './domassembler';

const { document } = window;

const assembler = new DOMAssembler;

/**
 * Assembles the specified `Element` DOM node
 *
 * Provides the `Element` interface
 *
 * - [W3 specification](https://www.w3.org/TR/xml/#element-element)
 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/XML/Element)
 * - [MSDN API reference](https://msdn.microsoft.com/en-us/library/hh869681.aspx)
 *
 * @function xmldom
 * @param {String} tagName `Element` tag name
 * @param {{}} [init] `NodeInit` dictionary
 * @param {{}} [init.attrset] `Element` attributes set as dictionary object
 * @param {String|Node|DOMAssembler|Array} [init.children] `Element` child nodes
 * @param {String} [init.className] `Element` class name; reflects "class" attribute
 * @param {String} [init.id] `Element` id; reflects "id" attribute
 * @return {Element}
 */
export function xmldom(tagName, init) {
    return assembler.createElement(tagName, init);
}

/**
 * Assembles a generic "element" instance of the `Element` DOM interface.
 * @param {{}} [init] `NodeInit` dictionary
 * @returns {Element}
 */
export function element(init) { return xmldom('element', init) }

/**
 * Creates a `Text` DOM node.
 * @param {String} data Node data
 * @returns {Text}
 */
export function text(data) { return document.createTextNode(data) }

/**
 * Creates a `Comment` DOM node.
 * @param {String} data Node data
 * @returns {Comment}
 */
export function comment(data) { return document.createComment(data) }
