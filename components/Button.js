export default class Button {
    constructor(element) {
        element.instance = this;
        this.element = element;
        this.on('click', this.onClick);
        this.on('keydown', this.onKeyDown);
        this.on('keyup', this.onKeyUp);
    }
    get pressed() {
        return this.element.getAttribute('aria-pressed') || '';
    }
    set pressed(pressed) {
        this.element.setAttribute('aria-pressed', pressed);
    }
    get disabled() {
        return this.element.getAttribute('aria-disabled') || 'false';
    }
    set disabled(disabled) {
        this.element.setAttribute('aria-disabled', disabled);
    }
    get hasPopup() {
        return this.element.getAttribute('aria-haspopup') || 'false';
    }
    get controls() {
        return this.element.getAttribute('aria-controls') || '';
    }
    get expanded() {
        return this.element.getAttribute('aria-expanded') || '';
    }
    set expanded(expanded) {
        this.setExpanded(expanded);
    }
    setExpanded(expanded) {
        this.element.setAttribute('aria-expanded', expanded);
    }
    get text() {
        return this.element.textContent;
    }
    set text(text) {
        this.element.textContent = text;
    }
    onKeyDown(event) {
        let keyCode = event.keyCode;
        if(keyCode === 13) {
            this.element.dispatchEvent(new Event('click', { bubbles: true, cancelable: true }));
        }
        if(keyCode === 32) {
            event.preventDefault();
            event.repeat || this.element.classList.add('active');
        }
    }
    onKeyUp({ keyCode }) {
        if(keyCode === 32) {
            let element = this.element;
            element.classList.remove('active');
            element.dispatchEvent(new Event('click', { bubbles: true, cancelable: true }));
        }
    }
    onClick(event) {
        if(this.disabled === 'true') {
            event.stopImmediatePropagation();
            return;
        }
        if(this.pressed) {
            this.pressed = String(this.pressed === 'false');
            this.element.dispatchEvent(new Event('change', { bubbles: true, cancelable: true }));
        }
        if(this.expanded) {
            this.expanded = String(this.expanded === 'false');
        }
    }
    focus() {
        this.element.focus();
    }
    on(type, listener, context) {
        this.element.addEventListener(type, listener.bind(context || this));
    }
    static getInstance(element) {
        return element.dataset && element.dataset.instance === 'button'?
            element.instance || new this(element) :
            null;
    }
    static attachToDocument() {
        document.addEventListener('focus', ({ target }) => this.getInstance(target), true);
    }
}
