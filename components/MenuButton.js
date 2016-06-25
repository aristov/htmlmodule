import Button from './Button';
import Menu from './Menu';
import { ESCAPE, ARROWS } from '../tools/keyCodes';

export default class MenuButton extends Button {
    constructor(element) {
        super(element);
        this.menu = Menu.getInstance(document.getElementById(this.controls));
        this.menu.on('keydown', this.onMenuKeyDown, this);
        this.menu.on('mouseleave', this.onMenuMouseLeave, this);
        this.onDocumentClick = this.onDocumentClick.bind(this);
        this.onDocumentFocus = this.onDocumentFocus.bind(this);
    }
    get expanded() {
        return super.expanded;
    }
    set expanded(expanded) {
        super.expanded = expanded;
        this.menu.hidden = String(expanded === 'false');
        if(expanded === 'true') {
            document.addEventListener('click', this.onDocumentClick);
            document.addEventListener('focus', this.onDocumentFocus, true);
        } else {
            document.removeEventListener('click', this.onDocumentClick);
            document.removeEventListener('focus', this.onDocumentFocus, true);
        }
    }
    onDocumentClick({ target }) {
        if(!this.element.contains(target) && !this.menu.element.contains(target)) {
            this.expanded = 'false';
        }
    }
    onDocumentFocus({ target }) {
        if(target !== this.element && !this.menu.element.contains(target)) {
            this.expanded = 'false';
        }
    }
    onMenuKeyDown({ keyCode }) {
        if(keyCode === ESCAPE) {
            this.expanded = 'false';
            this.focus();
        }
    }
    onMenuMouseLeave() {
        this.focus();
    }
    onKeyDown(event) {
        super.onKeyDown(event);
        const keyCode = event.keyCode;
        if(keyCode === ARROWS.DOWN || keyCode === ARROWS.UP) {
            const items = this.menu.items;
            if(this.expanded === 'false') this.expanded = 'true';
            items[keyCode === ARROWS.DOWN? 0 : items.length - 1].focus();
            event.preventDefault();
        }
        if(keyCode === ESCAPE) this.expanded = 'false';
    }
}
