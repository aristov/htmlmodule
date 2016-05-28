const map = Array.prototype.map,
      reduce = Array.prototype.reduce,
      domImplementation = document.implementation;

const processChildNodes = (node) => (
    map.call(node.childNodes, (child) => DON.fromDOM(child))
);

const processContent = (content, element) => {
    Array.isArray(content)?
        content.forEach((item) => processContent(item, element)) :
        element.appendChild(DON.toDOM(content));
};

const DON = {
    fromDOM : (node) => {
        switch(node.nodeType) {
            case Node.ELEMENT_NODE :
                return {
                    node : 'element',
                    element : node.tagName,
                    attributes : reduce.call(
                        node.attributes, (res, attr) => {
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
    toDOM : (object) => {
        if(Array.isArray(object)) {
            return object.map((item) => DON.toDOM(item));
        }
        if(typeof object === 'string') {
            object = { node : 'text', content : object };
        }
        if(!object.node && object.element) {
            object.node = 'element';
        }
        switch(object.node) {
            case 'element' :
                var element = document.createElement(object.element),
                    attributes = object.attributes,
                    content = object.content;
                if(attributes) {
                    var name, value;
                    for(name in attributes) {
                        value = attributes[name];
                        if(typeof value !== 'undefined') {
                            element.setAttribute(name, value);
                        }
                    }
                }
                if(content) processContent(content, element);
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
