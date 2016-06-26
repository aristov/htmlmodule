import TextBox from './TextBox';
import DatePicker from './DatePicker';
import { ESCAPE, SPACE } from '../tools/keyCodes';
import DOMTransform from '../tools/DOMTransform';
import DON from '../tools/DON';
import datepicker from '../templates/datepicker';

const template = new DOMTransform;

datepicker(template);

export default class DateBox extends TextBox {
    constructor(element) {
        super(element);
        this.datepicker = this.find(DatePicker)/* || DateBox.create({
            element : 'datepicker',
            attributes : { value : this.value }
        })*/;
        super(element);
        this.datepicker.on('change', this.onDatePickerChange, this);
        this.on('keydown', this.onKeyDown);
        this.onDocumentClick = this.onDocumentClick.bind(this);
        this.onDocumentFocus = this.onDocumentFocus.bind(this);
    }
    /*get value() {

    }*/
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
    onDatePickerChange(event) {
        let dataset = event.target.dataset,
            date = dataset.date,
            month = dataset.month,
            year = dataset.year;
        this.input.value = [
            date < 10? '0' + date : date,
            month < 10? '0' + month : month,
            year
        ].join('.');
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
    static create(don) {
        console.log(DON.toDOM(template.apply(don)));
    }
}
