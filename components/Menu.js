import MenuItem from './MenuItem';

export default class Menu {
    constructor(element) {
        element.instance = this;
        this.element = element;
    }
    get items() {
        return Array.prototype.map.call(
            this.element.querySelectorAll('[role=menuitem]'),
            function(element) {
                return MenuItem.getInstance(element);
            });
    }
    get hidden() {
        return String(this.element.hidden);
    }
    set hidden(value) {
        this.element.hidden = String(value) === 'true';
    }
    on(type, listener, context) {
        this.element.addEventListener(type, listener.bind(context || this));
    }
    static getInstance(element) {
        return typeof element.getAttribute === 'function' &&
            element.getAttribute('role') === 'menu'?
                element.instance || new Menu(element) :
                null;
    }
    static attachToDocument() {
        MenuItem.attachToDocument();
    }
}
