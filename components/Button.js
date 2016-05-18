import Menu from './Menu';

export default class Button {
    constructor(element) {
        element.instance = this;
        this.element = element;

        if(this.haspopup === 'true' && this.controls) {
            var popup = document.getElementById(this.controls);
            if(popup.getAttribute('role') === 'menu') {
                this.menu = Menu.getInstance(popup);
                this.menu.on('keydown', this.onMenuKeyDown.bind(this));
                document.addEventListener('click', this.onDocumentClick.bind(this));
                document.addEventListener('focus', this.onDocumentFocus.bind(this), true);
            }
        }

        this.on('click', this.onClick);
        this.on('keydown', this.onKeyDown);
        this.on('keyup', this.onKeyUp);
    }
    get pressed() {
        return this.element.getAttribute('aria-pressed') || '';
    }
    set pressed(pressed) {
        this.element.setAttribute('aria-pressed', pressed);
    }
    get disabled() {
        return this.element.getAttribute('aria-disabled') || '';
    }
    set disabled(disabled) {
        this.element.setAttribute('aria-disabled', disabled);
    }
    get haspopup() {
        return this.element.getAttribute('aria-haspopup') || 'false';
    }
    get controls() {
        return this.element.getAttribute('aria-controls') || '';
    }
    get expanded() {
        return this.element.getAttribute('aria-expanded') || '';
    }
    set expanded(expanded) {
        this.element.setAttribute('aria-expanded', expanded);
        if(this.controls) {
            document.getElementById(this.controls).hidden = expanded === 'false';
        }
    }
    onDocumentClick(event) {
        if(this.expanded === 'true') {
            var target = event.target;
            if(!this.element.contains(target) && !this.menu.element.contains(target)) {
                this.expanded = 'false';
            }
        }
    }
    onDocumentFocus(event) {
        if(this.expanded === 'true') {
            var target = event.target;
            if(target !== this.element && !this.menu.element.contains(target)) {
                this.expanded = 'false';
            }
        }
    }
    onMenuKeyDown(event) {
        if(event.keyCode === 27) {
            this.expanded = 'false';
            this.element.focus();
        }
    }
    onKeyDown(event) {
        var keyCode = event.keyCode;

        if(keyCode === 13)
            this.element.dispatchEvent(new Event('click'));

        if(keyCode === 32 && !event.repeat) {
            event.preventDefault();
            this.element.classList.add('active');
        }

        if(keyCode === 40 && this.menu) {
            event.preventDefault();
            if(this.expanded === 'false') this.expanded = 'true';
            this.menu.items[0].element.focus();
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
            return;
        }
        if(this.pressed) {
            this.pressed = this.pressed === 'true'? 'false' : 'true';
            this.element.dispatchEvent(new Event('change'));
        }
        if(this.expanded) {
            this.expanded = this.expanded === 'true'? 'false' : 'true';
        }
    }
    on(type, listener, context) {
        this.element.addEventListener(type, listener.bind(context || this));
    }
    static getInstance(element) {
        return element.dataset && element.dataset.instance === 'button'?
            element.instance || new Button(element) :
            null;
    }
    static attachToDocument() {
        document.addEventListener('focus', function(event) {
            Button.getInstance(event.target);
        }, true);
    }
}
