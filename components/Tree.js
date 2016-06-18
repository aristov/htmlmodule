import Instance from './Instance';
import TreeItem from './TreeItem';

export default class Tree extends Instance {
    get items() {
        return this.findAll(TreeItem);
    }
    static attachTo(node) {
        TreeItem.attachTo(node);
    }
}
