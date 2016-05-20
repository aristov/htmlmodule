import Button from './Button';
import ListBox from './ListBox';

export default class Select {
    constructor(element) {
        element.instance = this;
        this.element = element;

        this.listBox = ListBox.getInstance(element.querySelector('[data-instance=listbox]'));
        this.button = Button.getInstance(element.querySelector('[data-instance=button]'));
        this.input = element.querySelector('input') || document.createElement('input');

        this.on('click', this.onClick);
        this.on('keydown', this.onKeyDown);
        this.on('keyup', this.onKeyUp);

        this.listBox.on('change', this.onListBoxChange, this);

        document.addEventListener('click', this.onDocumentClick.bind(this));
        document.addEventListener('focus', this.onDocumentFocus.bind(this), true);
    }
    get expanded() {
        return this.element.getAttribute('aria-expanded') || 'false';
    }
    set expanded(expanded) {
        this.element.setAttribute('aria-expanded', expanded);
        if(expanded === 'true') {
            var listBox = this.listBox,
                selectedOption = listBox.selectedOptions[0];
            if(!selectedOption) listBox.options[0].selected = 'true';
        }
    }
    get value() {
        return this.input.value;
    }
    set value(value) {
        this.input.value = value;
    }
    onDocumentFocus(event) {
        if(this.expanded === 'true' && event.target !== this.element) {
            this.expanded = 'false';
        }
    }
    onDocumentClick(event) {
        if(this.expanded === 'true' && !this.element.contains(event.target)) {
            this.expanded = 'false';
        }
    }
    onKeyDown(event) {
        var keyCode = event.keyCode;

        if(keyCode === 32 && !event.repeat) {
            event.preventDefault();
            this.onSpaceKeyDown(event);
        }

        if(keyCode >= 37 && keyCode <= 40) {
            event.preventDefault();
            if(this.expanded === 'false') this.expanded = 'true';
            else this.listBox.onArrowKeyDown(event);
        }

        if(keyCode === 27) {
            this.expanded = 'false';
        }
    }
    onSpaceKeyDown(event) {
        if(this.expanded === 'true') {
            this.listBox.onSpaceKeyDown(event);
        } else {
            this.element.classList.add('active');
        }
    }
    onKeyUp(event) {
        if(event.keyCode === 32) {
            var element = this.element;

            if(this.expanded === 'true') {
                this.listBox.onSpaceKeyUp(event);
                this.expanded = 'false';
            } else {
                element.classList.remove('active');
                element.dispatchEvent(new Event('click'));
            }
        }
    }
    onListBoxChange(event) {
        var listBox = this.listBox;
        this.button.text = listBox.checkedOptions[0].text;
        this.value = listBox.value;
    }
    onClick(event) {
        this.expanded = String(this.expanded === 'false');
        this.element.focus();
    }
    on(type, listener, context) {
        this.element.addEventListener(type, listener.bind(context || this));
    }
    static getInstance(element) {
        return element.dataset && element.dataset.instance === 'select'?
            element.instance || new Select(element) :
            null;
    }
    static attachToDocument() {
        document.addEventListener('focus', function(event) {
            Select.getInstance(event.target);
        }, true);
    }
}
