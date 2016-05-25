export default class Dialog {
    constructor(element) {
        element.instance = this;
        this.element = element;
        this.trigger = null;
        if(this.modal === 'true') {
            this.createBackdrop();
        }
    }
    get modal() {
        return this.element.getAttribute('aria-modal') || 'false';
    }
    get widgets() {
        let iterator = document.createNodeIterator(
                this.element,
                NodeFilter.SHOW_ELEMENT,
                node => node.tabIndex > -1 && !node.disabled?
                    NodeFilter.FILTER_ACCEPT :
                    NodeFilter.FILTER_REJECT),
            node,
            result = [];
        while(node = iterator.nextNode()) result.push(node);
        return result;
    }
    get hidden() {
        return String((this.backdrop || this.element).hidden);
    }
    set hidden(hidden) {
        (this.backdrop || this.element).hidden = hidden === 'true';
    }
    createBackdrop() {
        let element = this.element,
            backdrop = this.backdrop = document.createElement('div'),
            div = document.createElement('div');
        backdrop.classList.add('backdrop');
        backdrop.hidden = true;
        element.hidden = false;
        div.appendChild(element);
        backdrop.appendChild(div);
        document.body.appendChild(backdrop);
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
