export default class Dialog {
    constructor(element) {
        element.instance = this;
        this.element = element;
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
