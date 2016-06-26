import TextBox from './TextBox';
import DatePicker from './DatePicker';
import { ESCAPE, SPACE } from '../tools/keyCodes';
import moment from 'moment';

export default class DateBox extends TextBox {
    constructor(element) {
        super(element);
        this.datepicker = this.find(DatePicker);
        this.datepicker.on('change', this.onDatePickerChange, this);
        this.on('keydown', this.onKeyDown);
        this.onDocumentClick = this.onDocumentClick.bind(this);
        this.onDocumentFocus = this.onDocumentFocus.bind(this);
    }
    get expanded() {
        return this.input.getAttribute('aria-expanded') || 'false';
    }
    set expanded(expanded) {
        this.input.setAttribute('aria-expanded', expanded);
        this.datepicker.hidden = String(expanded === 'false');
        if(expanded === 'true') {
            document.addEventListener('click', this.onDocumentClick);
            document.addEventListener('focus', this.onDocumentFocus, true);
        } else {
            document.removeEventListener('click', this.onDocumentClick);
            document.removeEventListener('focus', this.onDocumentFocus, true);
        }
    }
    onDatePickerChange() {
        this.input.value = moment(this.datepicker.value, 'YYYY-MM-DD').format('DD.MM.YYYY');
        setTimeout(() => this.expanded = 'false', 0);
    }
    onDocumentFocus({ target }) {
        if(!this.element.contains(target)) this.expanded = 'false';
    }
    onDocumentClick({ target }) {
        if(!this.element.contains(target)) this.expanded = 'false';
    }
    onKeyDown(event) {
        const keyCode = event.keyCode;
        if(keyCode === ESCAPE) this.expanded = 'false';
        if(keyCode === SPACE) {
            event.preventDefault();
            this.expanded = 'true';
        }
    }
    onInputFocus(event) {
        super.onInputFocus(event);
        this.expanded = 'true';
    }
}
