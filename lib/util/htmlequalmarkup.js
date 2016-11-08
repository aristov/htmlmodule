const parser = new DOMParser;

/**
 * Check if a given DOM node is equivalent to a given HTML-markup string
 * @param {Element} dom Node to compare
 * @param {String} markup String to compare
 * @returns {boolean}
 */
export function htmlEqualMarkup(dom, markup) {
    const doc = parser.parseFromString(markup, 'text/html');
    const node = doc.body.firstElementChild || doc.head.firstElementChild;
    return dom.isEqualNode(node);
}
