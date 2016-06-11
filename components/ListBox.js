import Instance from './Instance';
import Option from './Option';
import { SPACE, ARROWS } from '../tools/keyCodes';

const map = Array.prototype.map,
      ARROW_CODES = Object.values(ARROWS);

export default class ListBox extends Instance {
    constructor(element) {
        super(element);
        this.input = element.querySelector('input') || document.createElement('input');
        this.box = element.querySelector('.box');
        this.box.addEventListener('focus', () => element.focus());
        this.on('keydown', this.onKeyDown);
        this.on('keyup', this.onKeyUp);
    }
    get options() {
        return map.call(
            this.element.querySelectorAll('[data-instance=Option]'),
            element => Option.getInstance(element));
    }
    get selectedOptions() {
        return this.options.filter(option => option.selected === 'true');
    }
    get selectedOption() {
        return this.selectedOptions[0];
    }
    get checkedOptions() {
        return this.options.filter(option => option.checked === 'true');
    }
    set checkedOptions(options) {
        let value = this.value;
        this.uncheck();
        options.forEach(option => option.checked = 'true');
        if(this.value !== value) {
            this.element.dispatchEvent(new Event('change', { bubbles : true, cancelable : true }));
        }
    }
    get checkedOption() {
        return this.checkedOptions[0];
    }
    get value() {
        return this.input.value;
    }
    set value(value) {
        this.input.value = value;
    }
    get disabled() {
        return this.element.getAttribute('aria-disabled') || 'false';
    }
    set disabled(disabled) {
        let element = this.element;
        if(this.input.disabled = disabled === 'true') {
            element.setAttribute('aria-disabled', 'true');
            element.removeAttribute('tabindex');
        } else {
            element.removeAttribute('aria-disabled');
            element.tabIndex = 0;
        }
    }
    get multiselectable() {
        return this.element.getAttribute('aria-multiselectable') || 'false';
    }
    set activeDescendant(id) {
        this.element.setAttribute('aria-activedescendant', id);
    }
    unselect() {
        this.selectedOptions.forEach(option => option.selected = 'false');
    }
    uncheck() {
        this.checkedOptions.forEach(option => option.checked = 'false');
    }
    onKeyDown(event) {
        let keyCode = event.keyCode;
        if(ARROW_CODES.indexOf(keyCode) > -1) {
            event.preventDefault();
            this.onArrowKeyDown(event);
        }
        if(keyCode === SPACE) {
            event.preventDefault();
            this.onSpaceKeyDown(event);
        }
    }
    onArrowKeyDown({ keyCode }) {
        let direction = keyCode === ARROWS.LEFT || keyCode === ARROWS.UP? -1 : 1,
            options = this.options,
            selectedOptions = this.selectedOptions,
            selectedOption = selectedOptions[direction < 0? 0 : selectedOptions.length - 1],
            nextIndex = options.indexOf(selectedOption) + direction;

        if(nextIndex === options.length) nextIndex = 0;
        if(nextIndex < 0) nextIndex = options.length - 1;

        this.unselect();
        options[nextIndex].selected = true;
        this.scrollToSelected();
    }
    scrollToSelected() {
        let box = this.box,
            option = this.selectedOption.element;
        if(option.offsetTop < box.scrollTop ||
            option.offsetTop + option.clientHeight > box.scrollTop + box.clientHeight) {
                box.scrollTop = option.offsetTop + Math.floor((option.clientHeight - box.clientHeight) / 2);
            }
    };
    onSpaceKeyDown({ repeat }) {
        if(!repeat) this.selectedOptions.forEach(option => option.element.classList.add('active'));
    }
    onKeyUp(event) {
        if(event.keyCode === SPACE) this.onSpaceKeyUp(event);
    }
    onSpaceKeyUp() {
        this.checkedOptions = this.selectedOptions;
        this.selectedOptions.forEach(option => option.element.classList.remove('active'));
    }
    onFocus() {
        if(!this.selectedOptions.length) this.options[0].selected = 'true';
    }
    static attachToDocument() {
        document.addEventListener('focus', event => {
            let listBox = this.getInstance(event.target);
            if(listBox) listBox.onFocus(event);
        }, true);
        Option.attachToDocument();
    }
}
