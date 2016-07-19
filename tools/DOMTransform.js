export default class DOMTransform {
    constructor() {
        this.nodes = {
            /*element1 : (element, params) => {
                const transform = typeof element.element === 'function'?
                    element.element :
                    this.elements[''];
                if(!element.attributes) element.attributes = {};
                return this.apply(transform.call(this, element, params));
            },*/
            element : (element, params) => {
                const transform = this.elements[element.element] || this.elements[''];
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
            const result = [];
            for(let i = 0; i < object.length; i++) {
                let item;
                /*params.position = i;
                params.isFirst = !i;
                params.isLast = i === object.length - 1;*/
                if(item = this.apply(object[i], params)) result.push(item);
            }
            return result;
        } else {
            const name = typeof object === 'string'?
                    'text' :
                    object.element? 'element' : object.node,
                transform = this.nodes[name];
            if(transform) return transform.call(this, object, params);
        }
        throw Error('Match failed');
    }
    templates(...templates) {
        templates.forEach(template => template(this));
    }
}
