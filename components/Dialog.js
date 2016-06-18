import Instance from './Instance';
import { ESCAPE, TAB } from '../tools/keyCodes';

export default class Dialog extends Instance {
    constructor(element) {
        super(element);
        this.trigger = null;
        this.on('click', this.onClick);
        this.on('keydown', this.onKeyDown);
        if(this.modal === 'true') this.createBackdrop();
        this.onDocumentClick = this.onDocumentClick.bind(this);
        this.onDocumentFocus = this.onDocumentFocus.bind(this);
    }
    get modal() {
        return this.element.getAttribute('aria-modal') || 'false';
    }
    get widgets() {
        let iterator = document.createNodeIterator(
                this.element,
                NodeFilter.SHOW_ELEMENT,
                node => node.tabIndex > -1 && !node.disabled?
                    NodeFilter.FILTER_ACCEPT :
                    NodeFilter.FILTER_REJECT),
            node,
            widgets = [];
        while(node = iterator.nextNode()) widgets.push(node);
        return widgets;
    }
    get hidden() {
        return String((this.backdrop || this.element).hidden);
    }
    set hidden(hidden) {
        if(hidden !== this.hidden) {
            if((this.backdrop || this.element).hidden = hidden === 'true') {
                if(this.trigger) {
                    this.trigger.expanded = 'false';
                    this.trigger.focus();
                    this.trigger = null;
                }
                if(this.assertive === 'false') document.removeEventListener('click', this.onDocumentClick);
                else if(this.modal === 'true') {
                    document.removeEventListener('focus', this.onDocumentFocus, true);
                }
            } else {
                if(this.assertive === 'false') document.addEventListener('click', this.onDocumentClick);
                if(this.modal === 'true') {
                    if(this.assertive === 'true') {
                        document.addEventListener('focus', this.onDocumentFocus, true);
                    }
                    this.widgets[0].focus();
                }
            }
        }
    }
    get assertive() {
        return this.element.dataset.assertive || 'false';
    }
    createBackdrop() {
        let element = this.element,
            backdrop = this.backdrop = document.createElement('div'),
            div = document.createElement('div');
        backdrop.className = 'backdrop';
        backdrop.hidden = true;
        element.hidden = false;
        div.appendChild(element);
        backdrop.appendChild(div);
        document.body.appendChild(backdrop);
    }
    onClick({ target }) {
        let dataset = target.dataset;
        if(dataset.instance === 'Button' && dataset.type === 'close') this.hidden = 'true';
    }
    onKeyDown(event) {
        let keyCode = event.keyCode;
        if(keyCode === ESCAPE && this.assertive === 'false') {
            this.hidden = 'true';
            if(this.trigger) this.trigger.focus();
        }
        if(keyCode === TAB) this.onTabKeyDown(event);
    }
    onTabKeyDown(event) {
        let widgets = this.widgets,
            lastWidget = widgets[widgets.length - 1];
        if(event.shiftKey && this.modal === 'true' && event.target === widgets[0]) {
            event.preventDefault();
            lastWidget.focus();
        }
        if(!event.shiftKey && event.target === lastWidget) {
            event.preventDefault();
            if(this.modal === 'true') widgets[0].focus();
            else if(this.trigger) this.trigger.focus();
        }
    }
    onDocumentFocus({ target }) {
        if(!this.element.contains(target)) this.widgets[0].focus();
    }
    onDocumentClick({ target }) {
        if(!this.element.contains(target) &&
            !(this.trigger && this.trigger.element.contains(target))) {
                this.hidden = 'true';
        }
    }
}
