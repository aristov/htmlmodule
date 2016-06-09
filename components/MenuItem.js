import Instance from './Instance';
import Menu from './Menu';

export default class MenuItem extends Instance {
    constructor(element) {
        super(element);
        this.menu = Menu.getInstance(this.element.closest('[data-instance=Menu]'));
        this.on('keydown', this.onKeyDown);
        this.on('keyup', this.onKeyUp);
        this.on('mouseleave', this.onMouseLeave);
    }
    onKeyDown(event) {
        let keyCode = event.keyCode;
        if(keyCode === 38 || keyCode === 40) {
            event.preventDefault();
            this.onArrowKeyDown(event);
        }
        else if(event.keyCode === 32 && !event.repeat) {
            event.preventDefault();
            this.element.classList.add('active');
        }
    }
    onKeyUp(event) {
        if(event.keyCode === 32) {
            let element = this.element;
            element.classList.remove('active');
            element.dispatchEvent(new Event('click', {
                bubbles : true,
                cancelable : true
            }));
            if(element.href) window.location.href = element.href;
        }
    }
    onArrowKeyDown({ keyCode }) {
        let direction = keyCode < 39? -1 : 1,
            items = this.menu.items,
            index = items.indexOf(this) + direction;
        if(index === items.length) index = 0;
        if(index < 0) index = items.length - 1;
        items[index].element.focus();
    }
    onMouseEnter() {
        this.element.focus();
    }
    onMouseLeave() {
        this.element.blur();
    }
    static attachToDocument() {
        document.addEventListener('mouseenter', event => {
            let menuItem = this.getInstance(event.target);
            if(menuItem) menuItem.onMouseEnter(event);  
        }, true);
    }
}
