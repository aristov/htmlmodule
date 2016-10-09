const htmlbowl = innerHTML =>
    Object.assign(document.createElement('div'), { innerHTML });

export const htmlequal = (html1, html2) => htmlbowl(html1).isEqualNode(htmlbowl(html2));

/*const xmlbowl = innerHTML => {
    const element = document.createElementNS('https://www.w3.org/1999/xml', 'e');
    return Object.assign(element, { innerHTML });
};*/

const parser = new DOMParser;
const xmldoc = xml => parser.parseFromString(xml, 'application/xml');

export const xmlequal = (xml1, xml2) => xmldoc(xml1).isEqualNode(xmldoc(xml2));

// window.htmlequal = htmlequal;

export const domEqualMarkup = (dom, markup) => {
    const parser = new DOMParser;
    const node = parser.parseFromString(markup, 'application/xml');
    return dom.isEqualNode(node);
}

export const htmlEqualMarkup = (dom, markup) => {
    const parser = new DOMParser;
    const node = parser.parseFromString(markup, 'application/xhtml');
    return dom.isEqualNode(node);
}
