import { Instance } from '../dom/dom.instance';

const assign = Object.assign;
const XHTML_NS_URI = 'http://www.w3.org/1999/xhtml';

/**
 * @param {{
 *  hidden
 *  lang
 *  scrollTop
 *  spellcheck
 *  style
 *  tabIndex
 *  title
 *  translate
 * }} propset
 */
export class HTMLInstance extends Instance {
    /**
     * Set dataset of the element.
     * @param {{}} dataset declaration dictionary object
     */
    set dataset(dataset) {
        assign(this.element.dataset, dataset);
    }

    /**
     * Set style of the element.
     * @param {CSSStyleDeclaration} style declaration dictionary object
     */
    set style(style) {
        assign(this.element.style, style);
    }

    /**
     *
     * @returns {String}
     */
    static get namespaceURI() {
        return XHTML_NS_URI;
    }
}
