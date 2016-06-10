import Instance from './Instance';
import Tab from './Tab';

const map = Array.prototype.map;

export default class TabList extends Instance {
    get tabs() {
        return map.call(
            this.element.querySelectorAll('[data-instance=Tab]'),
            element => Tab.getInstance(element));
    }
    get selectedTab() {
        return Tab.getInstance(this.element.querySelector('[data-instance=Tab][aria-selected=true]'));
    }
    on(type, listener, context) {
        this.element.addEventListener(type, listener.bind(context || this));
    }
    select(tab) {
        this.selectedTab.selected = 'false';
        tab.selected = 'true';
    }
    prev() {
        let tabs = this.tabs,
            index = tabs.indexOf(this.selectedTab) - 1;
        this.select(index < 0? tabs[tabs.length - 1] : tabs[index]);
        this.element.dispatchEvent(new Event('change', { bubbles: true, cancelable: true }));
    }
    next() {
        let tabs = this.tabs,
            index = tabs.indexOf(this.selectedTab) + 1;
        this.select(index === tabs.length? tabs[0] : tabs[index]);
        this.element.dispatchEvent(new Event('change', { bubbles: true, cancelable: true }));
    }
    static attachToDocument() {
        Tab.attachToDocument();
    }
}
