import TextBox from './TextBox';
import DatePicker from './DatePicker';

export default class DateBox extends TextBox {
    constructor(element) {
        super(element);
        this.datePicker = DatePicker.getInstance(element.querySelector('[data-instance=DatePicker]'));
        this.datePicker.on('change', this.onDatePickerChange, this);
        this.on('keydown', this.onKeyDown);
        this.onDocumentClick = this.onDocumentClick.bind(this);
        this.onDocumentFocus = this.onDocumentFocus.bind(this);
    }
    get expanded() {
        return this.input.getAttribute('aria-expanded') || 'false';
    }
    set expanded(expanded) {
        this.input.setAttribute('aria-expanded', expanded);
        this.datePicker.hidden = String(expanded === 'false');
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
    }
    onDocumentFocus({ target }) {
        if(!this.element.contains(target)) this.expanded = 'false';
    }
    onDocumentClick({ target }) {
        if(!this.element.contains(target)) this.expanded = 'false';
    }
    onKeyDown(event) {
        let keyCode = event.keyCode;
        if(keyCode === 27) this.expanded = 'false';
        if(keyCode === 32) {
            event.preventDefault();
            this.expanded = 'true';
        }
    }
    onInputFocus(event) {
        super.onInputFocus(event);
        this.expanded = 'true';
    }
    static attachToDocument() {
        document.addEventListener('focus', event => {
            let target = event.target;
            if(target.tagName === 'INPUT') {
                let element = target.closest('[data-instance=DateBox]');
                if(element) this.getInstance(element).onInputFocus(event);
            }
        }, true);
    }
}
