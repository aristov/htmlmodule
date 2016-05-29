export default class Dialog {
    constructor(element) {
        element.instance = this;
        this.element = element;
        this.trigger = null;
        if(this.modal === 'true') this.createBackdrop();
        this.on('click', this.onClick);
        this.on('keydown', this.onKeyDown);
        document.addEventListener('click', this.onDocumentClick.bind(this));
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
        if(this.hidden !== hidden) {
            (this.backdrop || this.element).hidden = hidden === 'true';
            if(this.trigger && this.trigger.expanded === 'true' && hidden === 'true') {
                this.trigger.expanded = 'false';
                this.trigger.focus();
            }
            if(this.modal === 'true' && hidden === 'false') this.widgets[0].focus();
        }
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
    onClick({ target }) {
        let dataset = target.dataset;
        if(dataset.instance === 'button' && dataset.action === 'close') {
            this.hidden = 'true';
        }
    }
    onKeyDown(event) {
        let keyCode = event.keyCode;
        if(keyCode === 27) {
            this.hidden = 'true';
            this.trigger.focus();
        }
        if(keyCode === 9) {
            let widgets = this.widgets;
            if(event.target === widgets[widgets.length - 1] && !event.shiftKey) {
                event.preventDefault();
                this.modal === 'true'? widgets[0].focus() : this.trigger.focus();
            }
            if(this.modal === 'true' && event.target === widgets[0] && event.shiftKey) {
                event.preventDefault();
                widgets[widgets.length - 1].focus();
            }
        }
    }
    onDocumentClick({ target }) {
        if(this.hidden === 'false') {
            if(!this.element.contains(target) && !(this.trigger && this.trigger.element.contains(target))) {
                this.hidden = 'true';
            }
        }
    }
    on(type, listener, context) {
        this.element.addEventListener(type, listener.bind(context || this));
    }
    static getInstance(element) {
        return element.dataset.instance === 'dialog'?
            element.instance || new this(element) :
            null;
    }
}
