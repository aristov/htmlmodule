export default class CheckBox {
    constructor(element) {
        element.instance = this;
        this.element = element;
        this.input = this.getInput();

        this.on('click', this.onClick);
        this.on('keydown', this.onKeyDown);
        this.on('keyup', this.onKeyUp);
    }
    get checked() {
        return this.element.getAttribute('aria-checked') || '';
    }
    set checked(checked) {
        var element = this.element;
        element.setAttribute('aria-checked', checked);
        checked === 'true'?
            element.appendChild(this.input) :
            element.removeChild(this.input);
    }
    get disabled() {
        return this.element.getAttribute('aria-disabled') || '';
    }
    set disabled(disabled) {
        var element = this.element;
        element.setAttribute('aria-disabled', disabled);
        if(this.input.disabled = disabled === 'true') {
            element.removeAttribute('tabindex');
        }
        else element.tabIndex = 0;
    }
    get value() {
        return this.input.value;
    }
    set value(value) {
        this.input.value = value;
    }
    getInput() {
        var element = this.element,
            input = element.querySelector('input');
        if(!input) {
            var dataset = element.dataset;
            input = document.createElement('input');
            input.type = 'hidden';
            input.name = dataset.name || '';
            input.value = dataset.value || '';
            if(this.checked) element.appendChild(input);
        }
        return input;
    }
    onKeyDown(event) {
        if(event.keyCode === 32 && !event.repeat) {
            event.preventDefault(); // prevent page scrolling
            this.element.classList.add('active');
        }
    }
    onKeyUp(event) {
        if(event.keyCode === 32) {
            var element = this.element;
            element.classList.remove('active');
            element.dispatchEvent(new Event('click'));
        }
    }
    onClick(event) {
        if(this.disabled === 'true') {
            event.stopImmediatePropagation();
        } else {
            this.checked = this.checked === 'true'? 'false' : 'true';
            this.element.dispatchEvent(new Event('change'));
        }
    }
    on(type, listener, context) {
        this.element.addEventListener(type, listener.bind(context || this));
    }
    static getInstance(element) {
        return element.dataset && element.dataset.instance === 'checkbox'?
            element.instance || new this(element) :
            null;
    }
    static attachToDocument() {
        document.addEventListener('focus', function(event) {
            this.getInstance(event.target);
        }.bind(this), true);
    }
}
