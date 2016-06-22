import Instance from './Instance';
import Menu from './Menu';
import { SPACE, ARROWS } from '../tools/keyCodes';

export default class MenuItem extends Instance {
    constructor(element) {
        super(element);
        this.menu = this.closest(Menu);
        this.on('keydown', this.onKeyDown);
        this.on('keyup', this.onKeyUp);
        this.on('mouseleave', this.onMouseLeave);
    }
    onKeyDown(event) {
        const keyCode = event.keyCode;
        if(keyCode === ARROWS.UP || keyCode === ARROWS.DOWN) {
            event.preventDefault();
            this.onArrowKeyDown(event);
        }
        else if(keyCode === SPACE && !event.repeat) {
            event.preventDefault();
            this.element.classList.add('active');
        }
    }
    onKeyUp({ keyCode }) {
        if(keyCode === SPACE) {
            const element = this.element;
            element.classList.remove('active');
            element.dispatchEvent(new Event('click', {
                bubbles : true,
                cancelable : true
            }));
            if(element.href) window.location.href = element.href;
        }
    }
    onArrowKeyDown({ keyCode }) {
        const items = this.menu.items;
        let direction = keyCode === ARROWS.UP? -1 : 1;
        let index = items.indexOf(this) + direction;
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
    static attachTo(node) {
        node.addEventListener('mouseenter', event => {
            let menuItem = this.getInstance(event.target);
            if(menuItem) menuItem.onMouseEnter(event);  
        }, true);
    }
}
