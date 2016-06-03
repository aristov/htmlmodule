import Button from './Button';
import Menu from './Menu';

export default class MenuButton extends Button {
    constructor(element) {
        super(element);
        this.menu = Menu.getInstance(document.getElementById(this.controls));
        this.menu.on('keydown', this.onMenuKeyDown, this);
        this.onDocumentClick = this.onDocumentClick.bind(this);
        this.onDocumentFocus = this.onDocumentFocus.bind(this);
    }
    setExpanded(expanded) {
        super.setExpanded(expanded);
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
        if(keyCode === 27) {
            this.expanded = 'false';
            this.element.focus();
        }
    }
    onKeyDown(event) {
        super.onKeyDown(event);
        if(event.keyCode === 40) {
            event.preventDefault();
            if(this.expanded === 'false') this.expanded = 'true';
            this.menu.items[0].element.focus();
        }
        if(event.keyCode === 27) {
            this.expanded = 'false';
        }
    }
    static getInstance(element) {
        return element.dataset && element.dataset.instance === 'menubutton'?
            element.instance || new this(element) :
            null;
    }
}
