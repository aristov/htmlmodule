import TextBox from './TextBox';
import DatePicker from './DatePicker';

export default class DateBox extends TextBox {
    constructor(element) {
        super(element);

        this.datePicker = DatePicker.getInstance(element.querySelector('[data-instance=datepicker]'));

        this.datePicker.on('change', this.onDatePickerChange, this);

        document.addEventListener('click', this.onDocumentClick.bind(this));
        document.addEventListener('focus', this.onDocumentFocus.bind(this), true);

        this.on('keydown', this.onKeyDown);
    }
    get expanded() {
        return this.input.getAttribute('aria-expanded') || 'false';
    }
    set expanded(expanded) {
        this.input.setAttribute('aria-expanded', expanded);
        this.datePicker.hidden = String(expanded === 'false');
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
    onDocumentFocus(event) {
        if(this.expanded === 'true' && !this.element.contains(event.target)) {
            this.expanded = 'false';
        }
    }
    onDocumentClick(event) {
        if(this.expanded === 'true' && !this.element.contains(event.target)) {
            this.expanded = 'false';
        }
    }
    onKeyDown(event) {
        let keyCode = event.keyCode;
        if(keyCode === 27) this.expanded = 'false';
        if(keyCode === 32) {
            event.preventDefault();
            this.expanded = 'true';
        }
    }
    onFocus(event) {
        this.expanded = 'true';
    }
    on(type, listener, context) {
        this.element.addEventListener(type, listener.bind(context || this));
    }
    static getInstance(element) {
        return element.dataset && element.dataset.instance === 'datebox'?
            element.instance || new this(element) :
            null;
    }
    static attachToDocument() {
        document.addEventListener('focus', function(event) {
            let target = event.target;
            if(target.tagName === 'INPUT') {
                let element = target.closest('[data-instance=datebox]');
                if(element) this.getInstance(element).onFocus(event);
            }
        }.bind(this), true);
    }
}
