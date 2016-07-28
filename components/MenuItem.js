import Instance from './Instance';
import Menu from './Menu';
import Dialog from './Dialog';
import { SPACE, ARROWS, ENTER } from '../utils/keyCodes';

export default class MenuItem extends Instance {
    constructor(element) {
        super(element);
        this.menu = this.closest(Menu);
        this.on('keydown', this.onKeyDown);
        this.on('keyup', this.onKeyUp);
        this.on('mouseleave', this.onMouseLeave);
        this.on('click', this.onClick);
    }
    get type() {
        return this.element.dataset.type || '';
    }
    get controls() {
        return this.element.getAttribute('aria-controls') || '';
    }
    onKeyDown(event) {
        const element = this.element;
        const keyCode = event.keyCode;
        if(keyCode === ARROWS.UP || keyCode === ARROWS.DOWN) {
            event.preventDefault();
            this.onArrowKeyDown(event);
        }
        else if(keyCode === SPACE && !event.repeat) {
            event.preventDefault();
            element.classList.add('active');
        }
        else if(keyCode === ENTER) {
            if(!element.href) this.emit('click');
        }
    }
    onKeyUp({ keyCode }) {
        if(keyCode === SPACE) {
            const element = this.element;
            element.classList.remove('active');
            this.emit('click');
            if(element.href) window.location.href = element.href;
        }
    }
    onArrowKeyDown({ keyCode }) {
        const items = this.menu.items;
        const direction = keyCode === ARROWS.UP? -1 : 1;
        let index = items.indexOf(this) + direction;
        if(index === items.length) index = 0;
        if(index < 0) index = items.length - 1;
        items[index].element.focus();
    }
    onMouseEnter() {
        this.focus();
    }
    onMouseLeave() {
        this.element.blur();
    }
    onClick() {
        if(this.type === 'dialog') {
            const dialog = Dialog.getInstance(document.getElementById(this.controls));
            dialog.trigger = this;
            dialog.hidden = 'false';
        }
    }
    focus() {
        this.element.focus();
    }
    static attachTo(node) {
        node.addEventListener('mouseenter', event => {
            const menuItem = this.getInstance(event.target);
            if(menuItem) menuItem.onMouseEnter(event);  
        }, true);
    }
}
