import Button from './Button';
import Dialog from './Dialog';

export default class DialogButton extends Button {
    constructor(element) {
        super(element);

        this.dialog = Dialog.getInstance(document.getElementById(this.controls));
        this.dialog.on('keydown', this.onDialogKeyDown, this);
        document.addEventListener('click', this.onDocumentClick.bind(this));
    }
    onKeyDown(event) {
        super.onKeyDown(event);

        if(event.keyCode === 27) {
            this.expanded = 'false';
        }
        if(event.keyCode === 9 && event.shiftKey) {
            let widgets = this.dialog.widgets;
            event.preventDefault();
            widgets[widgets.length - 1].focus();
        }
    }
    onDocumentClick({ target }) {
        if(this.expanded === 'true') {
            if(!this.element.contains(target) && !this.dialog.element.contains(target)) {
                this.expanded = 'false';
            }
        }
    }
    onDialogKeyDown(event) {
        let keyCode = event.keyCode;
        if(keyCode === 27) {
            this.expanded = 'false';
            this.element.focus();
        }
        if(keyCode === 9 && !event.shiftKey) {
            let widgets = this.dialog.widgets;
            if(event.target === widgets[widgets.length - 1]) {
                event.preventDefault();
                this.element.focus();
            }
        }
    }
    static getInstance(element) {
        return element.dataset && element.dataset.instance === 'dialogbutton'?
            element.instance || new this(element) :
            null;
    }
}
