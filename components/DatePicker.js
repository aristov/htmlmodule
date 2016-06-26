import Instance from './Instance';
import moment from 'moment';

import DOMTransform from '../tools/DOMTransform';
import DON from '../tools/DON';
import datepicker from '../templates/datepicker';

const template = new DOMTransform;

datepicker(template);

export default class DatePicker extends Instance {
    constructor(element) {
        super(element);
        this.heading = element.querySelector('[role=heading]');
        this.grid = element.querySelector('[role=grid]');
        this.gridbody = element.querySelector('tbody');
    }
    get value() {
        return this.element.dataset.value || moment(Date.now().format('YYYY-MM-DD'));
    }
    set value(value) {
        this.element.dataset.value = value;
    }
    onClick(event) {
        const target = event.target;
        if(target.dataset.instance === 'Button') this.onButtonClick(event);
        if(target.getAttribute('role') === 'gridcell') this.onGridCellClick(event);
    }
    onGridCellClick({ target }) {
        if(target.getAttribute('aria-disabled') !== 'true') {
            const element = this.element;
            const selected = element.querySelector('[role=gridcell][aria-selected=true]');
            if(selected) selected.setAttribute('aria-selected', 'false');
            target.setAttribute('aria-selected', 'true');
            this.value = moment(this.value, 'YYYY-MM-DD').date(target.dataset.value).format('YYYY-MM-DD');
            this.emit('change');
        }
    }
    onButtonClick({ target }) {
        let time = moment(this.value, 'YYYY-MM-DD');
        this.value = time.month(time.month() + Number(target.dataset.value)).format('YYYY-MM-DD');
        this.rebuild();
    }
    rebuild() {
        const body = this.gridbody;
        const heading = this.heading;
        heading.textContent = moment(this.value, 'YYYY-MM-DD').format('MMMM YYYY');
        this.grid.replaceChild(this.gridbody = DON.toDOM(template.apply({
            element : 'dategrid',
            attributes : { value : this.value }
        })), body);
        this.emit('change');
    }
    static getInstance(node) {
        if(node) return super.getInstance(node);
    }
    static attachTo(node) {
        node.addEventListener('click', event => {
            const instance = this.closestInstance(event.target);
            if(instance) instance.onClick(event);
        });
    }
}
