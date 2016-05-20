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
    static getInstance(element) {
        return element.dataset && element.dataset.instance === 'dialog'?
            element.instance || new this(element) :
            null;
    }
}
