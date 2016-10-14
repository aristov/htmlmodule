const htmlbowl = innerHTML =>
    Object.assign(document.createElement('div'), { innerHTML });

export const htmlequal = (html1, html2) => htmlbowl(html1).isEqualNode(htmlbowl(html2));

const parser = new DOMParser;
const xmldoc = xml => parser.parseFromString(xml, 'application/xml');

export const xmlequal = (xml1, xml2) => xmldoc(xml1).isEqualNode(xmldoc(xml2));

export const domEqualMarkup = (dom, markup, mime = 'application/xml') => {
    const parser = new DOMParser;
    const node = parser.parseFromString(markup, mime);
    return dom.isEqualNode(node);
}

export const htmlEqualMarkup = (dom, markup) =>
    domEqualMarkup(dom, markup, 'application/xhtml');
