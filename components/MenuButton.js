import Button from './Button';
import Menu from './Menu';

export default class MenuButton extends Button {
    constructor(element) {
        super(element);

        this.menu = Menu.getInstance(document.getElementById(this.controls));
        this.menu.on('keydown', this.onMenuKeyDown.bind(this));
        document.addEventListener('click', this.onDocumentClick.bind(this));
        document.addEventListener('focus', this.onDocumentFocus.bind(this), true);
    }
    onDocumentClick(event) {
        if(this.expanded === 'true') {
            var target = event.target;
            if(!this.element.contains(target) && !this.menu.element.contains(target)) {
                this.expanded = 'false';
            }
        }
    }
    onDocumentFocus(event) {
        if(this.expanded === 'true') {
            var target = event.target;
            if(target !== this.element && !this.menu.element.contains(target)) {
                this.expanded = 'false';
            }
        }
    }
    onMenuKeyDown(event) {
        if(event.keyCode === 27) {
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
    }
    static getInstance(element) {
        return element.dataset && element.dataset.instance === 'menubutton'?
            element.instance || new MenuButton(element) :
            null;
    }
    static attachToDocument() {
        document.addEventListener('focus', function(event) {
            MenuButton.getInstance(event.target);
        }, true);
    }
}
