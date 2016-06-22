import Instance from './Instance';
import { ENTER, SPACE } from '../tools/keyCodes';

export default class Button extends Instance {
    constructor(element) {
        super(element);
        this.on('keydown', this.onKeyDown);
        this.on('keyup', this.onKeyUp);
    }
    get disabled() {
        return super.disabled;
    }
    set disabled(disabled) {
        super.disabled = disabled;
        if(disabled === 'true') this.element.removeAttribute('tabindex');
        else this.element.tabIndex = 0;
    }
    get pressed() {
        return this.element.getAttribute('aria-pressed') || '';
    }
    set pressed(pressed) {
        this.element.setAttribute('aria-pressed', pressed);
    }
    get controls() {
        return this.element.getAttribute('aria-controls') || '';
    }
    get expanded() {
        return this.element.getAttribute('aria-expanded') || '';
    }
    set expanded(expanded) {
        this.element.setAttribute('aria-expanded', expanded);
    }
    get text() {
        return this.element.textContent;
    }
    set text(text) {
        this.element.textContent = text;
    }
    get type() {
        return this.element.dataset.type;
    }
    get value() {
        return this.element.dataset.value;
    }
    onKeyDown(event) {
        let keyCode = event.keyCode;
        if(keyCode === ENTER) this.emit('click');
        if(keyCode === SPACE) {
            event.preventDefault();
            event.repeat || this.element.classList.add('active');
        }
    }
    onKeyUp({ keyCode }) {
        if(keyCode === SPACE) {
            let element = this.element;
            element.classList.remove('active');
            element.dispatchEvent(new Event('click', { bubbles : true, cancelable : true }));
        }
    }
    onClick(event) {
        if(this.disabled === 'true') {
            event.stopImmediatePropagation();
            return;
        }
        if(this.pressed) {
            this.pressed = String(this.pressed === 'false');
            this.element.dispatchEvent(new Event('change', { bubbles : true, cancelable : true }));
        }
        if(this.expanded) {
            this.expanded = String(this.expanded === 'false');
        }
        if(this.type === 'submit') {
            let form = this.element.closest('form');
            if(form) form.dispatchEvent(new Event('submit', { bubbles : true, cancelable : true }));
        }
    }
    focus() {
        this.element.focus();
    }
    static attachTo(node) {
        node.addEventListener('focus', ({ target }) => this.getInstance(target), true);
        node.addEventListener('click', event => {
            const button = this.getInstance(event.target);
            if(button) button.onClick(event);
        }, true);
    }
}
