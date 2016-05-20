import Option from './Option';

export default class ListBox {
    constructor(element) {
        element.instance = this;
        this.element = element;

        this.input = element.querySelector('input') || document.createElement('input');

        this.on('keydown', this.onKeyDown);
        this.on('keyup', this.onKeyUp);
    }
    get options() {
        return Array.prototype.map.call(
            this.element.querySelectorAll('[data-instance=option]'),
            function(element) {
                return Option.getInstance(element);
            });
    }
    get hidden() {
        return String(this.element.hidden);
    }
    set hidden(value) {
        this.element.hidden = String(value) === 'true';
    }
    get selectedOptions() {
        return this.options.filter(function(option) {
            return option.selected === 'true';
        });
    }
    get checkedOptions() {
        return this.options.filter(function(option) {
            return option.checked === 'true';
        });
    }
    set checkedOptions(options) {
        let value = this.value;
        this.uncheck();
        options.forEach(function(option) {
            option.checked = 'true';
        });
        console.log(this.value, value);
        this.value === value || this.element.dispatchEvent(new Event('change'));
    }
    get value() {
        return this.input.value;
    }
    set value(value) {
        this.input.value = value;
    }
    get disabled() {
        return this.element.getAttribute('aria-disabled') || '';
    }
    set disabled(disabled) {
        let element = this.element;

        if(disabled === 'true') {
            element.setAttribute('aria-disabled', 'true');
            element.removeAttribute('tabindex');
            this.input.disabled = true;
        } else {
            element.removeAttribute('aria-disabled');
            element.setAttribute('tabindex', '0');
            this.input.disabled = false;
        }
    }
    unselect() {
        this.selectedOptions.forEach(function(option) {
            option.selected = 'false';
        });
    }
    uncheck() {
        this.checkedOptions.forEach(function(option) {
            option.checked = 'false';
        });
    }
    onKeyDown(event) {
        let keyCode = event.keyCode;

        if(keyCode >= 37 && keyCode <= 40) {
            event.preventDefault(); // prevent page scrolling
            this.onArrowKeyDown(event);
        }

        if(keyCode === 32) {
            event.preventDefault(); // prevent page scrolling
            this.onSpaceKeyDown(event);
        }
    }
    onArrowKeyDown(event) {
        let direction = event.keyCode < 39? -1 : 1,
            options = this.options,
            selectedOptions = this.selectedOptions[0],
            next = options.indexOf(selectedOptions) + direction;

        if(next === options.length) next = 0;
        if(next < 0) next = options.length - 1;

        this.unselect();
        options[next].selected = true;
    }
    onSpaceKeyDown(event) {
        if(!event.repeat) {
            this.selectedOptions.forEach(function(option) {
                option.element.classList.add('active');
            });
        }
    }
    onKeyUp(event) {
        if(event.keyCode === 32) this.onSpaceKeyUp(event);
    }
    onSpaceKeyUp(event) {
        this.checkedOptions = this.selectedOptions;
        this.selectedOptions.forEach(function(option) {
            option.element.classList.remove('active');
        });
    }
    onFocus(event) {
        if(!this.selectedOptions.length) this.options[0].selected = 'true';
    }
    on(type, listener, context) {
        this.element.addEventListener(type, listener.bind(context || this));
    }
    static getInstance(element) {
        return element.dataset && element.dataset.instance === 'listbox'?
            element.instance || new this(element) :
            null;
    }
    static attachToDocument() {
        document.addEventListener('focus', function(event) {
            let listBox = this.getInstance(event.target);
            if(listBox) listBox.onFocus(event);
        }.bind(this), true);

        Option.attachToDocument();
    }
}
