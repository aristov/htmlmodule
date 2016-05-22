export default class Dialog {
    constructor(element) {
        element.instance = this;
        this.element = element;

        if(this.modal === 'true') {
            this.backdrop = element.closest('.backdrop');
            //document.addEventListener('click', this.onDocumentClick.bind(this));
        }
    }
    get modal() {
        return this.element.getAttribute('aria-modal') || 'false';
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
        return String((this.backdrop || this.element).hidden);
    }
    set hidden(hidden) {
        (this.backdrop || this.element).hidden = hidden === 'true';
    }
    onDocumentClick(event) {
        if(!this.element.contains(event.target)) {
            this.hidden = 'true';
        }
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
