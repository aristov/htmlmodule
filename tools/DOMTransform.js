class DOMTransform {
    constructor() {
        this.nodes = {
            element : function(element, params) {
                var transform = this.elements[element.element] || this.elements[''];
                if(!element.attributes) element.attributes = {};
                return transform.call(this, element, params);
            },
            text : function(text, params) {
                return /^\s+$/.test(text.content)? null : text;
            },
            comment : function(comment, params) {
                return comment;
            },
            document : function(document, params) {
                return document;
            },
            doctype : function(doctype, params) {
                return doctype;
            }
        };
        this.elements = {
            '' : function(element, params) {
                return {
                    element : element.element,
                    attributes : element.attributes,
                    content : this.apply(element.content, params)
                };
            }
        };
    }
    node(name, transform) {
        this.nodes[name] = transform;
    }
    element(name, transform) {
        this.elements[name] = transform;
    }
    apply(object, params) {
        if(!object) {
            return null;
        } else if(Array.isArray(object)) {
            var result = [], i = 0, item;
            for(i; i < object.length; i++) {
                if(item = this.apply(object[i], params)) result.push(item);
            }
            return result;
        } else {
            var name = typeof object === 'string'?
                    'text' :
                    object.element? 'element' : object.node,
                transform = this.nodes[name];
            if(transform) return transform.call(this, object, params);
        }
        throw Error('Match failed');
    }
}

export default DOMTransform;
