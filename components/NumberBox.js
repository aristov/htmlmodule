import TextBox from './TextBox';
import { ARROWS } from '../tools/keyCodes';

export default class NumberBox extends TextBox {
    constructor(element) {
        super(element);
        element.addEventListener('focus', this.onFocus.bind(this), true);
        this.input.addEventListener('keydown', this.onInputKeyDown.bind(this));
    }
    get invalid() {
        return this.element.getAttribute('aria-invalid') || 'false';
    }
    set invalid(invalid) {
        this.element.setAttribute('aria-invalid', invalid);
    }
    onButtonClick(event, button) {
        super.onButtonClick(event, button);
        if(button.type === 'shift') {
            this.shiftValue(Number(button.value));
            this.focus();
        }
    }
    onFocus() {
        this.disabled === 'true' || this.element.classList.add('focus');
    }
    onInputInput(event) {
        this.invalid = String(isNaN(Number(this.value)));
    }
    onInputKeyDown(event) {
        switch(event.keyCode) {
            case ARROWS.UP: this.shiftValue(1); event.preventDefault(); break;
            case ARROWS.DOWN: this.shiftValue(-1); event.preventDefault(); break;
        }
    }
    shiftValue(step) {
        const value = Number(this.value);
        if(isNaN(value)) this.invalid = 'true';
        else this.value = String(value + step);
    }
}
