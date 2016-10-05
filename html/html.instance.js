import { Instance } from '../dom/dom.instance';

const { assign } = Object;

export const XHTML_NS_URI = 'http://www.w3.org/1999/xhtml';

export class HTMLInstance extends Instance {
    /**
     * Assign custom `data-` attributes to the element
     * @param {{}} dataset declaration dictionary object
     */
    set dataset(dataset) {
        assign(this.element.dataset, dataset);
    }

    /**
     * Assign CSS style declaration to the element
     * @param {CSSStyleDeclaration} style declaration dictionary object
     */
    set style(style) {
        assign(this.element.style, style);
    }

    /**
     * @returns {String}
     */
    static get namespaceURI() {
        return XHTML_NS_URI;
    }
}
