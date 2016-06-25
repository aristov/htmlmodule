const map = Array.prototype.map;
const reduce = Array.prototype.reduce;
const domImplementation = document.implementation;

const processChildNodes = node => map.call(node.childNodes, child => DON.fromDOM(child));

const processContent = function(content) {
    return Array.isArray(content)?
        content.forEach(item => processContent.call(this, item)) :
        this.appendChild(DON.toDOM(content));
};

const DON = {
    fromDOM : node => {
        switch(node.nodeType) {
            case Node.ELEMENT_NODE :
                return {
                    node : 'element',
                    element : node.tagName,
                    attributes : reduce.call(node.attributes, (res, attr) => {
                        res[attr.name] = attr.value;
                        return res;
                    }, {}),
                    content : processChildNodes(node)
                };
            case Node.TEXT_NODE :
                return {
                    node : 'text',
                    content : node.textContent
                };
            case Node.COMMENT_NODE :
                return {
                    node : 'comment',
                    content : node.textContent
                };
            case Node.DOCUMENT_NODE :
                return {
                    node : 'document',
                    content : processChildNodes(node)
                };
            case Node.DOCUMENT_TYPE_NODE :
                return {
                    node : 'doctype',
                    name : node.name
                };
            default : throw Error('Unsupported node');
        }
    },
    toDOM : object => {
        if(Array.isArray(object)) {
            return object.map(item => DON.toDOM(item));
        }
        if(typeof object === 'string') {
            object = { node : 'text', content : object };
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
            case 'text' :
                return document.createTextNode(object.content);
            case 'comment' :
                return document.createComment(object.content);
            case 'document' :
                return object.type === 'html'?
                    domImplementation.createHTMLDocument(object.title) :
                    domImplementation.createDocument(
                        object.namespaceURI || null,
                        object.qualifiedNameStr,
                        object.documentType || null);
            case 'doctype' :
                return domImplementation.createDocumentType(
                    object.name,
                    object.publicId,
                    object.systemId);
            default : throw Error('Unsupported node');
        }
    }
};

export default DON;
