import Instance from './Instance';
import ListBox from './ListBox';

export default class Option extends Instance {
    constructor(element) {
        super(element);
        element.id || this.generateId();
        this.listbox = this.closest(ListBox);
        this.on('click', this.onClick);
        this.on('mouseenter', this.onMouseEnter);
    }
    get selected() {
        return this.element.getAttribute('aria-selected') || '';
    }
    set selected(selected) {
        if(selected === 'true') {
            /*const selectedOption = this.listbox.selectedOption;
            if(selectedOption) selectedOption.selected = 'false';*/
            this.listbox.activedescendant = this.element.id;
            if(!this.checked) this.listbox.value = this.value;
        }
        this.element.setAttribute('aria-selected', selected);
    }
    get checked() {
        return this.element.getAttribute('aria-checked') || '';
    }
    set checked(checked) {
        this.element.setAttribute('aria-checked', checked);
        this.listbox.value = this.value;
    }
    get disabled() {
        return this.listbox.disabled || this.element.getAttribute('aria-disabled') || '';
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
    generateId() {
        let id;
        do id = 'option' + Math.floor(Math.random() * 1e10);
        while(document.getElementById(id));
        this.element.id = id;
    }
    onClick(event) {
        if(this.disabled === 'true') event.stopImmediatePropagation();
        else if(this.checked) this.listbox.checkedOptions = this.checked === 'false'? [this] : [];
    }
    onMouseEnter({ buttons }) {
        if(buttons === 1 && this.multiselectable === 'true') {
            this.selected = 'true';
        }
    }
    onMouseDown() {
        if(this.disabled !== 'true') {
            this.listbox.options.forEach(option => option.selected = 'false');
            this.selected = 'true';
        }
    }
    static attachTo(node) {
        node.addEventListener('mousedown', event => {
            let option = this.getInstance(event.target);
            if(option) option.onMouseDown(event);
        }, true);
    }
}
