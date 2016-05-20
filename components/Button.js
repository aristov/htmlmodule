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
        return this.element.getAttribute('aria-disabled') || '';
    }
    set disabled(disabled) {
        this.element.setAttribute('aria-disabled', disabled);
    }
    get haspopup() {
        return this.element.getAttribute('aria-haspopup') || 'false';
    }
    get controls() {
        return this.element.getAttribute('aria-controls') || '';
    }
    get expanded() {
        return this.element.getAttribute('aria-expanded') || '';
    }
    set expanded(expanded) {
        this.element.setAttribute('aria-expanded', expanded);
        if(this.controls) {
            document.getElementById(this.controls).hidden = expanded === 'false';
        }
    }
    get text() {
        return this.element.textContent;
    }
    set text(text) {
        this.element.textContent = text;
    }
    onKeyDown(event) {
        let keyCode = event.keyCode;

        if(keyCode === 13)
            this.element.dispatchEvent(new Event('click'));

        if(keyCode === 32 && !event.repeat) {
            event.preventDefault();
            this.element.classList.add('active');
        }
    }
    onKeyUp(event) {
        if(event.keyCode === 32) {
            let element = this.element;

            element.classList.remove('active');
            element.dispatchEvent(new Event('click'));
        }
    }
    onClick(event) {
        if(this.disabled === 'true') {
            event.stopImmediatePropagation();
            return;
        }
        if(this.pressed) {
            this.pressed = this.pressed === 'true'? 'false' : 'true';
            this.element.dispatchEvent(new Event('change'));
        }
        if(this.expanded) {
            this.expanded = this.expanded === 'true'? 'false' : 'true';
        }
    }
    on(type, listener, context) {
        this.element.addEventListener(type, listener.bind(context || this));
    }
    static getInstance(element) {
        return element.dataset && element.dataset.instance === 'button'?
            element.instance || new Button(element) :
            null;
    }
    static attachToDocument() {
        document.addEventListener('focus', function(event) {
            Button.getInstance(event.target);
        }, true);
    }
}
