import TextBox from './TextBox';
import Button from './Button';

export default class PasswordBox extends TextBox {
    get watchmode() {
        return this.element.dataset.watchmode || 'false';
    }
    set watchmode(watchmode) {
        this.element.dataset.watchmode = watchmode;
        this.input.type = watchmode === 'true'? 'text' : 'password';
    }
    onInputInput(event) {
        super.onInputInput(event);
        this.find(Button, button => button.type === 'watch').hidden = String(!this.value);
    }
    onButtonClick(event, button) {
        super.onButtonClick(event, button);
        if(button.type === 'watch') this.watchmode = String(this.watchmode === 'false');
    }
}
