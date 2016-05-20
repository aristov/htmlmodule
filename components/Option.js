import ListBox from './ListBox';

export default class Option {
    constructor(element) {
        element.instance = this;
        this.element = element;

        this.listBox = ListBox.getInstance(element.closest('[role=listbox]'));

        this.on('click', this.onClick);
    }
    get selected() {
        return this.element.getAttribute('aria-selected') || '';
    }
    set selected(selected) {
        this.element.setAttribute('aria-selected', selected);
    }
    get checked() {
        return this.element.getAttribute('aria-checked') || '';
    }
    set checked(checked) {
        this.element.setAttribute('aria-checked', checked);
        this.listBox.value = this.value;
    }
    get disabled() {
        return this.listBox.disabled || this.element.getAttribute('aria-disabled') || '';
    }
    set disabled(disabled) {
        this.element.setAttribute('aria-disabled', disabled);
    }
    get value() {
        return this.element.dataset.value;
    }
    get text() {
        return this.element.textContent;
    }
    onClick(event) {
        if(this.disabled === 'true') event.stopImmediatePropagation();
        else this.listBox.checkedOptions = [this];
    }
    onMouseEnter(event) {
        if(this.disabled !== 'true') {
            this.listBox.unselect();
            this.selected = 'true';
        }
    }
    on(type, listener, context) {
        this.element.addEventListener(type, listener.bind(context || this));
    }
    static getInstance(element) {
        return typeof element.getAttribute === 'function' &&
            element.getAttribute('role') === 'option'?
                element.instance || new this(element) :
                null;
    }
    static attachToDocument() {
        document.addEventListener('mouseenter', function(event) {
            let option = this.getInstance(event.target);
            if(option) option.onMouseEnter(event);
        }.bind(this), true);
    }
}
