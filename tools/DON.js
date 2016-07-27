const map = Array.prototype.map;
const reduce = Array.prototype.reduce;

const processChildNodes = node => map.call(node.childNodes, child => fromDOM(child));

const { ELEMENT_NODE, TEXT_NODE, COMMENT_NODE, DOCUMENT_NODE, DOCUMENT_TYPE_NODE } = Node;

export const fromDOM = node => {
    switch(node.nodeType) {
        case ELEMENT_NODE : return {
            node : 'element',
            element : node.tagName,
            attributes : reduce.call(node.attributes, (res, attr) => {
                res[attr.name] = attr.value;
                return res;
            }, {}),
            content : processChildNodes(node)
        };
        case TEXT_NODE : return {
            node : 'text',
            content : node.textContent
        };
        case COMMENT_NODE : return {
            node : 'comment',
            content : node.textContent
        };
        case DOCUMENT_NODE : return {
            node : 'document',
            content : processChildNodes(node)
        };
        case DOCUMENT_TYPE_NODE : return {
            node : 'doctype',
            name : node.name
        };
        default : throw Error('Unsupported node');
    }
};

const processContent = function(content) {
    return Array.isArray(content)?
        content.forEach(item => processContent.call(this, item)) :
        this.appendChild(toDOM(content));
};

export const toDOM = object => {
    if(Array.isArray(object)) {
        return object.map(item => toDOM(item));
    }
    if(typeof object === 'string') {
        object = { node : 'text', content : object };
        // return document.createTextNode(object);
    }
    if(!object.node && object.element) {
        object.node = 'element';
    }
    switch(object.node) {
        case 'element' :
            const element = document.createElement(object.element);
            const attributes = object.attributes;
            const content = object.content;
            if(attributes) {
                Object.keys(attributes).forEach(name => {
                    const value = attributes[name];
                    if(typeof value === 'string') element.setAttribute(name, value);
                });
            }
            if(content) processContent.call(element, content);
            return element;
        case 'text' : return document.createTextNode(object.content);
        case 'comment' : return document.createComment(object.content);
        case 'document' :
            const doc = object.type === 'html'?
                document.implementation.createHTMLDocument(object.title) :
                document.implementation.createDocument(
                    object.namespaceURI || null,
                    object.qualifiedNameStr,
                    object.documentType || null);
            if(object.content) processContent.call(doc, object.content);
            return doc;
        case 'doctype' :
            return document.implementation.createDocumentType(
                object.name,
                object.publicId,
                object.systemId);
        default : throw Error('Unsupported node');
    }
};

const DON = { fromDOM, toDOM };

export default DON;
