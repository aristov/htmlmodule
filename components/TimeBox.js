import TextBox from './TextBox';
import moment from 'moment';

const format = 'HH : mm';

export default class TimeBox extends TextBox {
    constructor(element) {
        super(element);
        this._enterInProgress = false;
        this.input.addEventListener('click', this.onClick.bind(this));
        this.input.addEventListener('keydown', this.onKeyDown.bind(this));
    }
    get range() {
        return this.element.dataset.range || '';
    }
    set range(range) {
        this.element.dataset.range = range;
        if(range === 'hours') this.input.setSelectionRange(0, 2);
        else this.input.setSelectionRange(5, 7);
        this._enterInProgress = false;
    }
    onFocus(event) {
        super.onFocus(event);
        setTimeout(() => this.range = this.range || 'hours', 0);
    }
    onClick(event) {
        this.range = this.input.selectionStart < 4? 'hours' : 'minutes';
    }
    onKeyDown(event) {
        let keyCode = event.keyCode;
        if(keyCode >= 48 && keyCode <= 57) this.onDigitKeyDown(event);
        if(keyCode >= 37 && keyCode <= 40) this.onArrowKeyDown(event);
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
    onDigitKeyDown({ keyCode }) {
        let value = keyCode - 48;
        if(this.range === 'hours') this.onHoursEnter(value);
        else this.onMinutesEnter(value)
    }
    onHoursEnter(value) {
        let time = moment(this.value, format);
        if(this._enterInProgress) {
            value = parseInt(parseInt(time.hours(), 10) + String(value), 10);
            this.value = time.hours(Math.min(value, 23)).format(format);
            this.range = 'minutes';
        } else {
            this.value = time.hours(value).format(format);
            if(value < 3) {
                this.range = 'hours';
                this._enterInProgress = true;
            } else {
                this.range = 'minutes';
            }
        }

    }
    onMinutesEnter(value) {
        let time = moment(this.value, format);
        if(this._enterInProgress) {
            value = parseInt(parseInt(time.minutes(), 10) + String(value), 10);
            this.value = time.minutes(Math.min(value, 59)).format(format);
            this.range = 'minutes';
        } else {
            this.value = time.minutes(value).format(format);
            this.range = 'minutes';
            if(value < 6) this._enterInProgress = true;
        }
    }
    shiftValue(step) {
        let time = moment(this.value, format),
            range = this.range,
            value = time[range]();
        this.value = time[range](value + step).format(format);
        this.range = range;
    }
    static getInstance(element) {
        return element.dataset.instance === 'timebox'?
            element.instance || new this(element) :
            null;
    }
    static attachToDocument() {
        document.addEventListener('focus', function(event) {
            let target = event.target;
            if(target.tagName === 'INPUT') {
                let element = target.closest('[data-instance=timebox]');
                if(element) this.getInstance(element).onFocus(event);
            }
        }.bind(this), true);
    }
}
