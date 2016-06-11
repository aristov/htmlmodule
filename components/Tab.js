import Instance from './Instance';
import TabList from './TabList';
import { SPACE, ARROWS } from '../tools/keyCodes';

const ARROW_CODES = Object.values(ARROWS);

export default class Tab extends Instance {
    constructor(element) {
        super(element);
        this.list = TabList.getInstance(element.closest('[data-instance=TabList]'));
        this.panel = document.getElementById(this.controls);
        this.on('click', this.onClick);
        this.on('keydown', this.onKeyDown);
        this.on('keyup', this.onKeyUp);
    }
    get selected() {
        return this.element.getAttribute('aria-selected') || 'false';
    }
    set selected(selected) {
        let element = this.element;
        element.setAttribute('aria-selected', selected);
        element.tabIndex = selected === 'true'? 0 : -1;
        this.panel.hidden = selected === 'false';
        if(selected === 'true' && document.activeElement !== element) element.focus();
    }
    get controls() {
        return this.element.getAttribute('aria-controls') || '';
    }
    onClick() {
        if(this.selected === 'false') {
            let list = this.list;
            list.select(this);
            list.element.dispatchEvent(new Event('change', { bubbles: true, cancelable: true }));
        }
    }
    onKeyDown(event) {
        let keyCode = event.keyCode;
        if(ARROW_CODES.indexOf(keyCode) > -1) {
            event.preventDefault();
            this.onArrowKeyDown(event);
        }
        if(event.keyCode === SPACE && !event.repeat) {
            event.preventDefault();
            this.element.classList.add('active');
        }
    }
    onKeyUp({ keyCode }) {
        if(keyCode === SPACE) {
            let element = this.element;
            element.classList.remove('active');
            element.dispatchEvent(new Event('click', { bubbles: true, cancelable: true }));
        }
    }
    onArrowKeyDown({ keyCode }) {
        keyCode === ARROWS.LEFT || keyCode === ARROWS.UP? this.list.prev() : this.list.next();
    }
    on(type, listener, context) {
        this.element.addEventListener(type, listener.bind(context || this));
    }
    static attachToDocument() {
        document.addEventListener('focus', ({ target }) => this.getInstance(target), true);
    }
}