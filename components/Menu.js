import Instance from './Instance';
import MenuItem from './MenuItem';

export default class Menu extends Instance {
    get items() {
        return this.findAll(MenuItem);
    }
    static attachTo(node) {
        MenuItem.attachTo(node);
    }
}
