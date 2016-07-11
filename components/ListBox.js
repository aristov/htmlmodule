import Instance from './Instance';
import Option from './Option';
import { SPACE, ARROWS } from '../tools/keyCodes';

const ARROW_CODES = Object.values(ARROWS);

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
        return this.findAll(Option);
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
        const value = this.value;
        this.checkedOptions.forEach(option => option.checked = 'false');
        options.forEach(option => option.checked = 'true');
        /*
        if(this.value !== value) {
            this.emit('change');
        }
        */
        this.emit('change');
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
        const element = this.element;
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
    onKeyDown(event) {
        const keyCode = event.keyCode;
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
        const options = this.options;
        const selectedOptions = this.selectedOptions;
        const direction = keyCode === ARROWS.LEFT || keyCode === ARROWS.UP? -1 : 1;
        const selectedOption = selectedOptions[direction < 0? 0 : selectedOptions.length - 1];
        let nextIndex = options.indexOf(selectedOption) + direction;

        if(nextIndex === options.length) nextIndex = 0;
        if(nextIndex < 0) nextIndex = options.length - 1;

        this.unselect();
        options[nextIndex].selected = true;
        this.scrollToSelected();
    }
    scrollToSelected() {
        const box = this.box;
        const option = this.selectedOption.element;
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
        this.checkedOptions = this.checkedOption === this.selectedOption? [] : this.selectedOptions;
        this.selectedOptions.forEach(option => option.element.classList.remove('active'));
    }
    onFocus() {
        if(!this.selectedOptions.length) this.options[0].selected = 'true';
    }
    static attachTo(node) {
        node.addEventListener('focus', event => {
            const listbox = this.getInstance(event.target);
            if(listbox) listbox.onFocus(event);
        }, true);
        Option.attachTo(node);
    }
}
