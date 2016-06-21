import TextBox from './TextBox';
import { ESCAPE } from '../tools/keyCodes';

export default class SearchBox extends TextBox {
    constructor(element) {
        super(element);
        this.on('keydown', this.onKeyDown);
    }
    onKeyDown(event) {
        //super.onKeyDown(event);
        if(event.keyCode === ESCAPE) {
            this.value = '';
            this.clear.hidden = true;
        }
    }
}
