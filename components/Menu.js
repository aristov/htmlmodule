import Instance from './Instance';
import MenuItem from './MenuItem';

const map = Array.prototype.map;

export default class Menu extends Instance {
    get items() {
        return map.call(
            this.element.querySelectorAll('[data-instance=MenuItem]'),
            element => MenuItem.getInstance(element));
    }
    static attachToDocument() {
        MenuItem.attachToDocument();
    }
}
