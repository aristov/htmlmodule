export default class DOMTransform {
    constructor() {
        this.nodes = {
            element : (element, params) => {
                let transform = this.elements[element.element] || this.elements[''];
                if(!element.attributes) element.attributes = {};
                return transform.call(this, element, params);
            },
            text : text => text,
            comment : comment => comment,
            document : document => document,
            doctype : doctype => doctype
        };
        this.elements = {
            '' : ({ element, attributes, content }, params) => ({
                element,
                attributes,
                content : this.apply(content, params)
            })
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
            let result = [], i = 0, item;
            for(i; i < object.length; i++) {
                if(item = this.apply(object[i], params)) result.push(item);
            }
            return result;
        } else {
            let name = typeof object === 'string'?
                    'text' :
                    object.element? 'element' : object.node,
                transform = this.nodes[name];
            if(transform) return transform.call(this, object, params);
        }
        throw Error('Match failed');
    }
}
