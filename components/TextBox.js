import Instance from './Instance';
import Button from './Button';

//import { DISABLED, FOCUS } from 'tools/classnames';

const DISABLED = 'disabled';
const FOCUS = 'focus';

export default class TextBox extends Instance {
    constructor(element) {
        super(element);
        this.input = element.querySelector('input,textarea');
        this.input.addEventListener('blur', this.onInputBlur.bind(this));
        this.input.addEventListener('input', this.onInputInput.bind(this));
        if(this.hasclear === 'true') {
            this.clearbutton = this.find(Button, button => button.type === 'clear');
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
        if(this.hasclear === 'true') this.clearbutton.hidden = String(!value);
    }
    get hasclear() {
        return String(this.element.classList.contains('hasclear'));
    }
    onClick(event) {
        const button = Button.getInstance(event.target);
        if(button) this.onButtonClick(event, button);
    }
    onInputInput() {
        if(this.hasclear === 'true') this.clearbutton.hidden = String(!this.value);
    }
    onButtonClick(event, button) {
        if(button.type === 'clear') this.clear();
    }
    onInputFocus() {
        this.element.classList.add(FOCUS);
    }
    onInputBlur() {
        this.element.classList.remove(FOCUS);
    }
    clear() {
        this.value = '';
        this.clearbutton.hidden = 'true';
    }
    focus() {
        this.input.focus();
    }
    static attachTo(node) {
        node.addEventListener('focus', event => {
            const target = event.target;
            const tagName = target.tagName;
            if(tagName === 'INPUT' || tagName === 'TEXTAREA') {
                const instance = this.closestInstance(target);
                if(instance) instance.onInputFocus(event);
            }
        }, true);
        node.addEventListener('click', event => {
            const instance = this.closestInstance(event.target);
            if(instance) instance.onClick(event);
        });
    }
}
