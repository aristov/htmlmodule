const map = Array.prototype.map;

export default class Instance {
    constructor(element) {
        element.instance = this;
        this.element = element;
    }
    get id() {
        return this.element.id || '';
    }
    get hidden() {
        return String(this.element.hidden);
    }
    set hidden(hidden) {
        this.element.hidden = hidden === 'true';
    }
    get disabled() {
        return this.element.getAttribute('aria-disabled') || 'false';
    }
    set disabled(disabled) {
        this.element.setAttribute('aria-disabled', disabled);
    }
    on(type, listener, context) {
        this.element.addEventListener(type, listener.bind(context || this));
    }
    emit(type) {
        this.element.dispatchEvent(new Event(type, { bubbles : true, cancelable : true }));
    }
    find(Class, filter) {
        return filter?
            this.findAll(Class, filter)[0] || null :
            Class.getInstance(this.element.querySelector(`[data-instance=${Class.name}`));
    }
    findAll(Class, filter) {
        let result = map.call(
            this.element.querySelectorAll(`[data-instance=${Class.name}`),
            element => Class.getInstance(element));
        return filter? result.filter(filter) : result;
    }
    closest(Class) {
        let element = this.element.parentElement.closest(`[data-instance=${Class.name}`);
        return element && Class.getInstance(element);
    }
    static getInstance(element) {
        return element.dataset && element.dataset.instance === this.name?
            element.instance || new this(element) :
            null;
    }
}
