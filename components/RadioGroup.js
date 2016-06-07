import Radio from './Radio';

const map = Array.prototype.map;

export default class RadioGroup {
    constructor(element) {
        element.instance = this;
        this.element = element;
        this.input = element.querySelector('input') || document.createElement('input');
    }
    get radios() {
        return map.call(
            this.element.querySelectorAll('[data-instance=radio]'),
            element => Radio.getInstance(element));
    }
    get disabled() {
        return this.element.getAttribute('aria-disabled') || '';
    }
    set disabled(value) {
        let element = this.element,
            disabled = String(value),
            radios = this.radios,
            checked;

        if(this.input.disabled = disabled === 'true') {
            element.setAttribute('aria-disabled', 'true');
            radios.forEach(({ element }) => element.removeAttribute('tabindex'));
        } else {
            element.removeAttribute('aria-disabled');
            radios.forEach(radio => {
                radio.element.tabIndex = -1;
                if(radio.checked === 'true') checked = radio;
            });
            if(checked) checked.element.tabIndex = 0;
            else radios[0].element.tabIndex = 0;
        }
    }
    get value() {
        return this.input.value;
    }
    set value(value) {
        this.input.value = value;
    }
    uncheck() {
        this.radios.forEach(radio => radio.checked = 'false');
    }
    static getInstance(element) {
        return element.dataset && element.dataset.instance === 'radiogroup'?
            element.instance || new this(element) :
            null;
    }
    static attachToDocument() {
        Radio.attachToDocument();
    }
}
