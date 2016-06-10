import TextBox from './TextBox';
import moment from 'moment';

const format = 'HH : mm';

export default class TimeBox extends TextBox {
    constructor(element) {
        super(element);
        this.enterInProgress = false;
        this.on('click', this.onClick);
        element.addEventListener('focus', this.onFocus.bind(this), true);
        this.input.addEventListener('click', this.onInputClick.bind(this));
        this.input.addEventListener('keydown', this.onInputKeyDown.bind(this));
    }
    get range() {
        return this.element.dataset.range || '';
    }
    set range(range) {
        this.element.dataset.range = range;
        if(range === 'hours') this.input.setSelectionRange(0, 2);
        else this.input.setSelectionRange(5, 7);
        this.enterInProgress = false;
    }
    onClick({ target }) {
        if(this.disabled === 'false' && target.getAttribute('role') === 'button') {
            this.shiftValue(Number(target.dataset.value));
            this.element.focus();
        }
    }
    onFocus() {
        this.disabled === 'true' || this.element.classList.add('focus');
    }
    onInputFocus(event) {
        super.onInputFocus(event);
        setTimeout(() => this.range = this.range || 'hours', 0);
    }
    onInputClick() {
        this.range = this.input.selectionStart < 4? 'hours' : 'minutes';
    }
    onInputKeyDown(event) {
        let keyCode = event.keyCode;
        if(keyCode >= 48 && keyCode <= 57) this.onDigitKeyDown(event);
        if(keyCode >= 37 && keyCode <= 40) this.onArrowKeyDown(event);
    }
    onDigitKeyDown({ keyCode }) {
        let value = keyCode - 48;
        if(this.range === 'hours') this.onHoursEnter(value);
        else this.onMinutesEnter(value);
    }
    onArrowKeyDown(event) {
        event.preventDefault();
        switch(event.keyCode) {
            case 37: this.range = 'hours'; break;
            case 39: this.range = 'minutes'; break;
            case 38: this.shiftValue(1); break;
            case 40: this.shiftValue(-1); break;
        }
    }
    onHoursEnter(value) {
        let time = moment(this.value, format);
        if(this.enterInProgress) {
            value = parseInt(parseInt(time.hours(), 10) + String(value), 10);
            this.value = time.hours(Math.min(value, 23)).format(format);
            this.range = 'minutes';
        } else {
            this.value = time.hours(value).format(format);
            if(value < 3) {
                this.range = 'hours';
                this.enterInProgress = true;
            } else this.range = 'minutes';
        }
    }
    onMinutesEnter(value) {
        let time = moment(this.value, format);
        if(this.enterInProgress) {
            value = parseInt(parseInt(time.minutes(), 10) + String(value), 10);
            this.value = time.minutes(Math.min(value, 59)).format(format);
            this.range = 'minutes';
        } else {
            this.value = time.minutes(value).format(format);
            this.range = 'minutes';
            if(value < 6) this.enterInProgress = true;
        }
    }
    shiftValue(step) {
        let time = moment(this.value, format),
            range = this.range;
        this.value = time[range](time[range]() + step).format(format);
        this.range = range;
    }
    static attachToDocument() {
        document.addEventListener('focus', event => {
            let target = event.target;
            if(target.tagName === 'INPUT') {
                let element = target.closest('[data-instance=TimeBox]');
                if(element) this.getInstance(element).onInputFocus(event);
            }
        }, true);
    }
}
