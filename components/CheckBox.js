import Instance from './Instance';
import { SPACE } from '../utils/keyCodes';

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
        const { element, input } = this;
        element.setAttribute('aria-checked', checked);
        if(checked === 'true') element.appendChild(input);
        else element.removeChild(input);
    }
    get disabled() {
        return super.disabled;
    }
    set disabled(disabled) {
        const element = this.element;
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
        const element = this.element;
        let input = element.querySelector('input');
        if(!input) {
            const dataset = element.dataset;
            input = document.createElement('input');
            input.type = 'hidden';
            input.name = dataset.name || '';
            input.value = dataset.value || '';
            if(this.checked === 'true') element.appendChild(input);
        }
        return input;
    }
    onKeyDown(event) {
        if(event.keyCode === SPACE && !event.repeat) {
            event.preventDefault();
            this.element.classList.add('active');
        }
    }
    onKeyUp({ keyCode }) {
        if(keyCode === SPACE) {
            this.element.classList.remove('active');
            this.emit('click');
        }
    }
    onClick(event) {
        if(this.disabled === 'true') event.stopImmediatePropagation();
        else {
            this.checked = String(this.checked === 'false');
            this.emit('change');
        }
    }
    focus() {
        this.element.focus();
    }
    static attachTo(node) {
        node.addEventListener('focus', ({ target }) => this.getInstance(target), true);
    }
}
