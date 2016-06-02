export default class TextBox {
    constructor(element) {
        element.instance = this;
        this.element = element;
        this.input = element.querySelector('input,textarea');
        this.input.addEventListener('blur', this.onBlur.bind(this));
        if(element.classList.contains('hasclear')) {
            this.clear = element.querySelector('.clear');
            this.input.addEventListener('input', this.onInput.bind(this));
            this.clear.addEventListener('click', this.onClearClick.bind(this));
        }
    }
    get disabled() {
        return String(this.input.disabled);
    }
    set disabled(disabled) {
        (this.input.disabled = disabled === 'true')?
            this.element.classList.add('disabled') :
            this.element.classList.remove('disabled');
    }
    get value() {
        return this.input.value;
    }
    set value(value) {
        this.input.value = value;
    }
    onInput() {
        this.clear.hidden = !this.value;
    }
    onClearClick() {
        this.value = '';
        this.clear.hidden = true;
    }
    onFocus(event) {
        this.element.classList.add('focus');
    }
    onBlur() {
        this.element.classList.remove('focus');
    }
    static getInstance(element) {
        return element.dataset.instance === 'textbox'?
            element.instance || new this(element) :
            null;
    }
    static attachToDocument() {
        document.addEventListener('focus', event => {
            let target = event.target,
                tagName = target.tagName;
            if(tagName === 'INPUT' || tagName === 'TEXTAREA') {
                let element = target.closest('[data-instance=textbox]');
                if(element) this.getInstance(element).onFocus(event);
            }
        }, true);
    }
}
