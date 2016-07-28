import TextBox from './TextBox';
import { ESCAPE } from '../utils/keyCodes';

export default class SearchBox extends TextBox {
    constructor(element) {
        super(element);
        this.on('keydown', this.onKeyDown);
    }
    onKeyDown({ keyCode }) {
        if(keyCode === ESCAPE) {
            this.value = '';
            this.clear.hidden = true;
        }
    }
}
