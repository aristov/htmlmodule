export default class Dialog {
    constructor(element) {
        element.instance = this;
        this.element = element;
        this.trigger = null;
        this.on('click', this.onClick);
        this.on('keydown', this.onKeyDown);
        if(this.modal === 'true') this.createBackdrop();
        this.onDocumentClick = this.onDocumentClick.bind(this);
        this.onDocumentFocus = this.onDocumentFocus.bind(this);
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
            if((this.backdrop || this.element).hidden = hidden === 'true') {
                if(this.trigger && this.trigger.expanded === 'true') {
                    this.trigger.expanded = 'false';
                    this.trigger.focus();
                }
                if(this.assertive === 'false') document.removeEventListener('click', this.onDocumentClick);
                else if(this.modal === 'true') {
                    document.removeEventListener('focus', this.onDocumentFocus, true);
                }
            } else {
                if(this.assertive === 'false') document.addEventListener('click', this.onDocumentClick);
                if(this.modal === 'true') {
                    if(this.assertive === 'true') {
                        document.addEventListener('focus', this.onDocumentFocus, true);
                    }
                    this.widgets[0].focus();
                }
            }
        }
    }
    get assertive() {
        return this.element.dataset.assertive || 'false';
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
        if(keyCode === 27 && this.assertive === 'false') {
            this.hidden = 'true';
            this.trigger.focus();
        }
        if(keyCode === 9) {
            let widgets = this.widgets,
                lastWidget = widgets[widgets.length - 1];
            if(event.shiftKey && this.modal === 'true' && event.target === widgets[0]) {
                event.preventDefault();
                lastWidget.focus();
            }
            if(!event.shiftKey && event.target === lastWidget) {
                event.preventDefault();
                this.modal === 'true'? widgets[0].focus() : this.trigger.focus();
            }
        }
    }
    onDocumentFocus({ target }) {
        if(!this.element.contains(target)) this.widgets[0].focus();
    }
    onDocumentClick({ target }) {
        if(!this.element.contains(target) &&
            !(this.trigger && this.trigger.element.contains(target))) {
                this.hidden = 'true';
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
