const parser = new DOMParser;

/**
 * Check if a given DOM node is equivalent to a given XML-markup string
 * @param {Element} dom Node to compare
 * @param {String} markup String to compare
 * @param {String} mimetype MIME-type
 * @returns {boolean}
 */
export const domEqualMarkup = (dom, markup, mimetype = 'application/xml') => {
    const doc = parser.parseFromString(markup, mimetype);
    const node = doc.documentElement;
    return dom.isEqualNode(node);
}

/**
 * Check if a given DOM node is equivalent to a given HTML-markup string
 * @param {Element} dom Node to compare
 * @param {String} markup String to compare
 * @returns {boolean}
 */
export const htmlEqualMarkup = (dom, markup) => {
    const doc = parser.parseFromString(markup, 'text/html');
    const node = doc.body.firstElementChild;
    return dom.isEqualNode(node);
}
