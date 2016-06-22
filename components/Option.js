import Instance from './Instance';
import ListBox from './ListBox';

export default class Option extends Instance {
    constructor(element) {
        super(element);
        element.id || this.generateId();
        this.listbox = this.closest(ListBox);
        this.on('click', this.onClick);
    }
    get selected() {
        return this.element.getAttribute('aria-selected') || '';
    }
    set selected(selected) {
        this.element.setAttribute('aria-selected', selected);
        this.listbox.activeDescendant = this.element.id;
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
        else this.listbox.checkedOptions = [this];
    }
    onMouseEnter() {
        if(this.disabled !== 'true') {
            this.listbox.unselect();
            this.selected = 'true';
        }
    }
    static attachTo(node) {
        node.addEventListener('mouseenter', event => {
            let option = this.getInstance(event.target);
            if(option) option.onMouseEnter(event);
        }, true);
    }
}
