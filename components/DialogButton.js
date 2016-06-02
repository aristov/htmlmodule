import Button from './Button';
import Dialog from './Dialog';

export default class DialogButton extends Button {
    constructor(element) {
        super(element);
        this.dialog = Dialog.getInstance(document.getElementById(this.controls));
        this.dialog.trigger = this;
    }
    setExpanded(expanded) {
        super.setExpanded(expanded);
        let dialog = this.dialog,
            hidden = String(expanded === 'false');
        if(dialog.hidden !== hidden) dialog.hidden = hidden;
    }
    onKeyDown(event) {
        super.onKeyDown(event);
        if(event.keyCode === 27) this.expanded = 'false';
        if(this.expanded === 'true' && event.keyCode === 9 && event.shiftKey) {
            let widgets = this.dialog.widgets;
            event.preventDefault();
            widgets[widgets.length - 1].focus();
        }
    }
    static getInstance(element) {
        return element.dataset && element.dataset.instance === 'dialogbutton'?
            element.instance || new this(element) :
            null;
    }
}
