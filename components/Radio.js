import Instance from './Instance';
import RadioGroup from './RadioGroup';
import { SPACE, ENTER, ARROWS } from '../tools/keyCodes';

const ARROW_CODES = Object.values(ARROWS);

export default class Radio extends Instance {
    constructor(element) {
        super(element);
        this.group = this.closest(RadioGroup);
        this.on('click', this.onClick);
        this.on('keydown', this.onKeyDown);
        this.on('keyup', this.onKeyUp);
    }
    get checked() {
        return this.element.getAttribute('aria-checked') || 'false';
    }
    set checked(checked) {
        const element = this.element;
        element.setAttribute('aria-checked', checked);
        element.tabIndex = checked === 'true'? 0 : -1;
        this.group.value = this.value;
    }
    get disabled() {
        return this.group.disabled === 'true'? 'true' : super.disabled;
    }
    set disabled(disabled) {
        const element = this.element;
        if(disabled === 'true') {
            element.setAttribute('aria-disabled', 'true');
            element.removeAttribute('tabindex');
        } else {
            element.removeAttribute('aria-disabled');
            element.tabIndex = -1;
        }
    }
    get value() {
        return this.element.dataset.value;
    }
    onClick(event) {
        if(this.disabled === 'true') event.stopImmediatePropagation();
        else {
            this.group.uncheck();
            this.checked = 'true';
        }
    }
    onKeyDown(event) {
        const keyCode = event.keyCode;
        if(ARROW_CODES.includes(keyCode)) {
            event.preventDefault();
            this.onArrowKeyDown(event);
        }
        if(keyCode === SPACE && !event.repeat) {
            event.preventDefault();
            this.element.classList.add('active');
        }
        if(keyCode === ENTER) this.submitForm();
    }
    submitForm() {
        let form = this.element.closest('form');
        if(form) form.dispatchEvent(new Event('submit', { bubbles : true, cancelable : true }));
    }
    onKeyUp({ keyCode }) {
        if(keyCode === SPACE) {
            const element = this.element;
            element.classList.remove('active');
            element.dispatchEvent(new Event('click', { bubbles : true, cancelable : true }));
        }
    }
    onArrowKeyDown({ keyCode }) {
        const group = this.group;
        const radios = group.radios;
        let direction = keyCode === ARROWS.LEFT || keyCode === ARROWS.UP? -1 : 1;
        let index = radios.indexOf(this) + direction;

        if(index === radios.length) index = 0;
        if(index < 0) index = radios.length - 1;

        group.uncheck();
        radios[index].checked = 'true';
        radios[index].element.focus();
    }
    static attachTo(node) {
        node.addEventListener('focus', ({ target }) => this.getInstance(target), true);
    }
}
