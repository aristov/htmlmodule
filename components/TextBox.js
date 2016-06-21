import Instance from './Instance';

//import { DISABLED, FOCUS } from 'tools/classnames';

const DISABLED = 'disabled';
const FOCUS = 'focus';

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
        if(this.input.disabled = disabled === 'true') this.element.classList.add(DISABLED);
        else this.element.classList.remove(DISABLED);
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
        this.element.classList.add(FOCUS);
    }
    onInputBlur() {
        this.element.classList.remove(FOCUS);
    }
    focus() {
        this.input.focus();
    }
    static attachTo(node) {
        node.addEventListener('focus', event => {
            const target = event.target;
            const tagName = target.tagName;
            if(tagName === 'INPUT' || tagName === 'TEXTAREA') {
                let element = target.closest(`[data-instance=${this.name}]`);
                if(element) this.getInstance(element).onInputFocus(event);
            }
        }, true);
    }
    /*static attachTo2(node) {
        node.addEventListener('focus', event => {
            let textbox = this.closestInstance(event.target);
            if(textbox) textbox.onInputFocus(event);
        }, true);
    }*/
}
