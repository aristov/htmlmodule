import Button from './Button';
import Dialog from './Dialog';
import { ESCAPE, TAB } from '../tools/keyCodes';

export default class DialogButton extends Button {
    constructor(element) {
        super(element);
        this.dialog = Dialog.getInstance(document.getElementById(this.controls));
        this.dialog.trigger = this;
    }
    get expanded() {
        return super.expanded;
    }
    set expanded(expanded) {
        if(expanded !== this.expanded) {
            super.expanded = expanded;
            this.dialog.hidden = String(expanded === 'false');
        }
    }
    onKeyDown(event) {
        super.onKeyDown(event);
        if(event.keyCode === ESCAPE && this.dialog.assertive === 'false') this.expanded = 'false';
        if(event.keyCode === TAB && event.shiftKey && this.expanded === 'true') {
            let widgets = this.dialog.widgets;
            event.preventDefault();
            widgets[widgets.length - 1].focus();
        }
    }
}
