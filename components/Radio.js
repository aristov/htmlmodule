import RadioGroup from './RadioGroup';

export default class Radio {
    constructor(element) {
        element.instance = this;
        this.element = element;
        this.group = RadioGroup.getInstance(this.element.closest('[data-instance=radiogroup]'));
        this.on('click', this.onClick);
        this.on('keydown', this.onKeyDown);
        this.on('keyup', this.onKeyUp);
    }
    get checked() {
        return this.element.getAttribute('aria-checked') || '';
    }
    set checked(checked) {
        let element = this.element;
        element.setAttribute('aria-checked', checked);
        element.tabIndex = checked === 'true'? 0 : -1;
        this.group.value = this.value;
    }
    get disabled() {
        return this.group.disabled === 'true'?
            'true' :
            this.element.getAttribute('aria-disabled') || 'false';
    }
    set disabled(disabled) {
        let element = this.element;
        if(disabled === 'true') {
            element.setAttribute('aria-disabled', 'true');
            element.removeAttribute('tabindex');
        } else {
            element.removeAttribute('aria-disabled');
            element.tabIndex = -1;
        }
    }
    get value() {
        return this.element.dataset.value;
    }
    onClick(event) {
        if(this.disabled === 'true') event.stopImmediatePropagation();
        else {
            this.group.uncheck();
            this.checked = 'true';
        }
    }
    onKeyDown(event) {
        let keyCode = event.keyCode;
        if(keyCode >= 37 && keyCode <= 40) {
            event.preventDefault();
            this.onArrowKeyDown(event);
        }
        if(event.keyCode === 32 && !event.repeat) {
            event.preventDefault();
            this.element.classList.add('active');
        }
        if(event.keyCode === 13) this.submitForm();
    }
    submitForm() {
        let form = this.element.closest('form');
        if(form) form.dispatchEvent(new Event('submit', { bubbles : true, cancelable : true }));
    }
    onKeyUp({ keyCode }) {
        if(keyCode === 32) {
            let element = this.element;
            element.classList.remove('active');
            element.dispatchEvent(new Event('click', { bubbles : true, cancelable : true }));
        }
    }
    onArrowKeyDown({ keyCode }) {
        let direction = keyCode < 39? -1 : 1,
            group = this.group,
            radios = group.radios,
            index = radios.indexOf(this) + direction;

        if(index === radios.length) index = 0;
        if(index < 0) index = radios.length - 1;

        group.uncheck();
        radios[index].checked = true;
        radios[index].element.focus();
    }
    on(type, listener, context) {
        this.element.addEventListener(type, listener.bind(context || this));
    }
    static getInstance(element) {
        return element.dataset && element.dataset.instance === 'radio'?
            element.instance || new this(element) :
            null;
    }
    static attachToDocument() {
        document.addEventListener('focus', ({ target }) => this.getInstance(target), true);
    }
}
