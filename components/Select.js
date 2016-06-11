import Instance from './Instance';
import Button from './Button';
import ListBox from './ListBox';
import { SPACE, ESCAPE, ARROWS } from '../tools/keyCodes';

const ARROW_CODES = Object.values(ARROWS);

export default class Select extends Instance {
    constructor(element) {
        super(element);

        this.listBox = ListBox.getInstance(element.querySelector('[data-instance=ListBox]'));
        this.button = Button.getInstance(element.querySelector('[data-instance=Button]'));

        this.on('click', this.onClick);
        this.on('keydown', this.onKeyDown);
        this.on('keyup', this.onKeyUp);

        this.listBox.on('change', this.onListBoxChange, this);

        this.onDocumentClick = this.onDocumentClick.bind(this);
        this.onDocumentFocus = this.onDocumentFocus.bind(this);
    }
    get expanded() {
        return this.element.getAttribute('aria-expanded') || 'false';
    }
    set expanded(expanded) {
        this.element.setAttribute('aria-expanded', expanded);
        if(expanded === 'true') {
            let listBox = this.listBox;
            if(!listBox.selectedOption) listBox.options[0].selected = 'true';
            document.addEventListener('click', this.onDocumentClick);
            document.addEventListener('focus', this.onDocumentFocus, true);
        } else {
            document.removeEventListener('click', this.onDocumentClick);
            document.removeEventListener('focus', this.onDocumentFocus, true);
        }
    }
    get value() {
        return this.listBox.value;
    }
    set value(value) {
        this.listBox.value = value;
    }
    onDocumentFocus({ target }) {
        if(!this.element.contains(target)) this.expanded = 'false';
    }
    onDocumentClick({ target }) {
        if(!this.element.contains(target)) this.expanded = 'false';
    }
    onKeyDown(event) {
        let keyCode = event.keyCode;
        if(keyCode === SPACE && !event.repeat) {
            event.preventDefault();
            this.onSpaceKeyDown(event);
        }
        if(ARROW_CODES.indexOf(keyCode) > -1) {
            event.preventDefault();
            if(this.expanded === 'false') this.expanded = 'true';
            else this.listBox.onArrowKeyDown(event);
        }
        if(keyCode === ESCAPE) this.expanded = 'false';
    }
    onSpaceKeyDown(event) {
        if(this.expanded === 'true') this.listBox.onSpaceKeyDown(event);
        else this.element.classList.add('active');
    }
    onKeyUp(event) {
        if(event.keyCode === SPACE) {
            let element = this.element;
            if(this.expanded === 'true') {
                this.listBox.onSpaceKeyUp(event);
                this.expanded = 'false';
            } else {
                element.classList.remove('active');
                element.dispatchEvent(new Event('click', { bubbles : true, cancelable : true }));
            }
        }
    }
    onListBoxChange() {
        this.button.text = this.listBox.checkedOption.text;
    }
    onClick() {
        this.expanded = String(this.expanded === 'false');
        this.element.focus();
    }
    static attachToDocument() {
        document.addEventListener('focus', ({ target }) => this.getInstance(target), true);
    }
}
