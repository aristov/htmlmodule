export default class Dialog {
    constructor(element) {
        element.instance = this;
        this.element = element;
    }
    get widgets() {
        let nodeIterator = document.createNodeIterator(
                this.element,
                NodeFilter.SHOW_ELEMENT,
                (node) => node.tabIndex > -1 && !node.disabled?
                    NodeFilter.FILTER_ACCEPT :
                    NodeFilter.FILTER_REJECT),
            node,
            result = [];
        while(node = nodeIterator.nextNode()) result.push(node);
        return result;
    }
    get hidden() {
        return String(this.element.hidden);
    }
    set hidden(hidden) {
        this.element.hidden = hidden === 'true';
    }
    on(type, listener, context) {
        this.element.addEventListener(type, listener.bind(context || this));
    }
    static getInstance(element) {
        return element.dataset && element.dataset.instance === 'dialog'?
            element.instance || new this(element) :
            null;
    }
}
