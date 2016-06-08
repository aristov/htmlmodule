import Instance from './Instance';

export default class CheckBox extends Instance {
    constructor(element) {
        super(element);
        this.input = this.getInput();
        this.on('click', this.onClick);
        this.on('keydown', this.onKeyDown);
        this.on('keyup', this.onKeyUp);
    }
    get checked() {
        return this.element.getAttribute('aria-checked') || 'false';
    }
    set checked(checked) {
        let element = this.element,
            input = this.input;
        element.setAttribute('aria-checked', checked);
        if(checked === 'true') element.appendChild(input);
        else element.removeChild(input);
    }
    get disabled() {
        return this.element.getAttribute('aria-disabled') || 'false';
    }
    set disabled(disabled) {
        let element = this.element;
        element.setAttribute('aria-disabled', disabled);
        if(this.input.disabled = disabled === 'true') element.removeAttribute('tabindex');
        else element.tabIndex = 0;
    }
    get value() {
        return this.input.value;
    }
    set value(value) {
        this.input.value = value;
    }
    getInput() {
        let element = this.element,
            input = element.querySelector('input');
        if(!input) {
            let dataset = element.dataset;
            input = document.createElement('input');
            input.type = 'hidden';
            input.name = dataset.name || '';
            input.value = dataset.value || '';
            if(this.checked === 'true') element.appendChild(input);
        }
        return input;
    }
    onKeyDown(event) {
        if(event.keyCode === 32 && !event.repeat) {
            event.preventDefault();
            this.element.classList.add('active');
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
        if(this.disabled === 'true') event.stopImmediatePropagation();
        else {
            this.checked = String(this.checked === 'false');
            this.element.dispatchEvent(new Event('change', { bubbles: true, cancelable: true }));
        }
    }
    static attachToDocument() {
        document.addEventListener('focus', ({ target }) => this.getInstance(target), true);
    }
}
