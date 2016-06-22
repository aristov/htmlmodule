import TextBox from './TextBox';
import Button from './Button';

export default class PasswordBox extends TextBox {
    constructor(element) {
        super(element);
        this.find(Button).on('click', () => this.watchmode = String(this.watchmode === 'false'));
    }
    get watchmode() {
        return this.element.dataset.watchmode || 'false';
    }
    set watchmode(watchmode) {
        this.element.dataset.watchmode = watchmode;
        this.input.type = watchmode === 'true'? 'text' : 'password';
    }
    onInputInput(event) {
        super.onInputInput(event);
        this.find(Button).hidden = String(!this.value);
    }
}
