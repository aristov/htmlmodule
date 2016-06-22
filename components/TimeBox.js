import NumberBox from './NumberBox';
import moment from 'moment';
import { DIGITS, ARROWS } from '../tools/keyCodes';

const DIGIT_CODES = Object.values(DIGITS);
const FORMAT = 'HH : mm';

export default class TimeBox extends NumberBox {
    constructor(element) {
        super(element);
        this.enterInProgress = false;
        this.input.addEventListener('click', this.onInputClick.bind(this));
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
    onInputFocus(event) {
        super.onInputFocus(event);
        setTimeout(() => this.range = this.range || 'hours', 0);
    }
    onInputClick() {
        this.range = this.input.selectionStart < 4? 'hours' : 'minutes';
    }
    onInputKeyDown(event) {
        super.onInputKeyDown(event);
        const keyCode = event.keyCode;
        if(DIGIT_CODES.indexOf(keyCode) > -1) this.onDigitKeyDown(event);
        if(keyCode === ARROWS.LEFT || keyCode === ARROWS.RIGHT) {
            this.range = keyCode === ARROWS.LEFT? 'hours' : 'minutes';
            event.preventDefault();
        }
    }
    onDigitKeyDown({ keyCode }) {
        const value = keyCode - DIGITS[0];
        if(this.range === 'hours') this.onHoursEnter(value);
        else this.onMinutesEnter(value);
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
