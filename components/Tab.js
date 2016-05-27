import TabList from './TabList';

export default class Tab {
    constructor(element) {
        element.instance = this;
        this.element = element;

        this.list = TabList.getInstance(element.closest('[data-instance=tablist]'));
        this.panel = document.getElementById(this.controls);

        this.on('click', this.onClick);
        this.on('keydown', this.onKeyDown);
        this.on('keyup', this.onKeyUp);
    }
    get selected() {
        return this.element.getAttribute('aria-selected') || 'false';
    }
    set selected(value) {
        let element = this.element,
            selected = String(value);

        element.setAttribute('aria-selected', selected);
        element.tabIndex = selected === 'true'? '0' : '-1';
        this.panel.hidden = selected === 'false';

        if(selected === 'true' && document.activeElement !== element) {
            element.focus();
        }
    }
    get controls() {
        return this.element.getAttribute('aria-controls') || '';
    }
    onClick(event) {
        if(this.selected === 'false') {
            let list = this.list;
            list.select(this);
            list.element.dispatchEvent(new Event('change'));
        }
    }
    onKeyDown(event) {
        let keyCode = event.keyCode;

        if(keyCode >= 37 && keyCode <= 40) {
            event.preventDefault(); // prevent page scrolling
            this.onArrowKeyDown(event);
        }

        if(event.keyCode === 32 && !event.repeat) {
            event.preventDefault(); // prevent page scrolling
            this.element.classList.add('active');
        }
    }
    onKeyUp(event) {
        if(event.keyCode === 32) {
            let element = this.element;

            element.classList.remove('active');
            element.dispatchEvent(new Event('click'));
        }
    }
    onArrowKeyDown(event) {
        event.keyCode < 39? this.list.prev() : this.list.next();
    }
    on(type, listener, context) {
        this.element.addEventListener(type, listener.bind(context || this));
    }
    static getInstance(element) {
        return element.dataset && element.dataset.instance === 'tab'?
            element.instance || new this(element) :
            null;
    }
    static attachToDocument() {
        document.addEventListener('focus', function(event) {
            this.getInstance(event.target);
        }.bind(this), true);
    }
}
