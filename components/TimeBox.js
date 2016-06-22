import TextBox from './TextBox';
import moment from 'moment';
import { DIGITS, ARROWS } from '../tools/keyCodes';

const ARROW_CODES = Object.values(ARROWS);
const DIGIT_CODES = Object.values(DIGITS);
const FORMAT = 'HH : mm';

export default class TimeBox extends TextBox {
    constructor(element) {
        super(element);
        this.enterInProgress = false;
        element.addEventListener('focus', this.onFocus.bind(this), true);
        this.input.addEventListener('click', this.onInputClick.bind(this));
        this.input.addEventListener('keydown', this.onInputKeyDown.bind(this));
    }
    get range() {
        return this.element.dataset.range || 'hours';
    }
    set range(range) {
        this.element.dataset.range = range;
        if(range === 'hours') this.input.setSelectionRange(0, 2);
        else this.input.setSelectionRange(5, 7);
        this.enterInProgress = false;
    }
    onButtonClick(event, button) {
        super.onButtonClick(event, button);
        if(button.type === 'shift') {
            this.shiftValue(Number(button.value));
            this.focus();
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
        const keyCode = event.keyCode;
        if(DIGIT_CODES.indexOf(keyCode) > -1) this.onDigitKeyDown(event);
        if(ARROW_CODES.indexOf(keyCode) > -1) this.onArrowKeyDown(event);
    }
    onDigitKeyDown({ keyCode }) {
        const value = keyCode - DIGITS[0];
        if(this.range === 'hours') this.onHoursEnter(value);
        else this.onMinutesEnter(value);
    }
    onArrowKeyDown(event) {
        event.preventDefault();
        switch(event.keyCode) {
            case ARROWS.LEFT: this.range = 'hours'; break;
            case ARROWS.RIGHT: this.range = 'minutes'; break;
            case ARROWS.UP: this.shiftValue(1); break;
            case ARROWS.DOWN: this.shiftValue(-1); break;
        }
    }
    onHoursEnter(value) {
        const time = moment(this.value, FORMAT);
        if(this.enterInProgress) {
            value = parseInt(parseInt(time.hours(), 10) + String(value), 10);
            this.value = time.hours(Math.min(value, 23)).format(FORMAT);
            this.range = 'minutes';
        } else {
            this.value = time.hours(value).format(FORMAT);
            if(value < 3) {
                this.range = 'hours';
                this.enterInProgress = true;
            } else this.range = 'minutes';
        }
    }
    onMinutesEnter(value) {
        const time = moment(this.value, FORMAT);
        if(this.enterInProgress) {
            value = parseInt(parseInt(time.minutes(), 10) + String(value), 10);
            this.value = time.minutes(Math.min(value, 59)).format(FORMAT);
            this.range = 'minutes';
        } else {
            this.value = time.minutes(value).format(FORMAT);
            this.range = 'minutes';
            if(value < 6) this.enterInProgress = true;
        }
    }
    shiftValue(step) {
        const time = moment(this.value, FORMAT);
        const range = this.range;
        this.value = time[range](time[range]() + step).format(FORMAT);
        this.range = range;
    }
}
