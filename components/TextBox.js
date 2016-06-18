import Instance from './Instance';

export default class TextBox extends Instance {
    constructor(element) {
        super(element);
        this.input = element.querySelector('input,textarea');
        this.input.addEventListener('blur', this.onInputBlur.bind(this));
        if(element.classList.contains('hasclear')) {
            this.clear = element.querySelector('.clear');
            this.clear.addEventListener('click', this.onClearClick.bind(this));
            this.input.addEventListener('input', this.onInputInput.bind(this));
        }
    }
    get disabled() {
        return String(this.input.disabled);
    }
    set disabled(disabled) {
        if(this.input.disabled = disabled === 'true') this.element.classList.add('disabled');
        else this.element.classList.remove('disabled');
    }
    get value() {
        return this.input.value;
    }
    set value(value) {
        this.input.value = value;
    }
    onInputInput() {
        this.clear.hidden = !this.value;
    }
    onClearClick() {
        this.value = '';
        this.clear.hidden = true;
    }
    onInputFocus() {
        this.element.classList.add('focus');
    }
    onInputBlur() {
        this.element.classList.remove('focus');
    }
    static attachToDocument() {
        this.attachTo(document);
    }
    static attachTo(node) {
        node.addEventListener('focus', event => {
            let target = event.target,
                tagName = target.tagName;
            if(tagName === 'INPUT' || tagName === 'TEXTAREA') {
                let element = target.closest('[data-instance=TextBox]');
                if(element) this.getInstance(element).onInputFocus(event);
            }
        }, true);
    }
}
