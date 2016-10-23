/**
 * HTMLSelectElement.prototype.selectedOptions implementation
 *
 * @polyfill
 */
if(!('selectedOptions' in HTMLSelectElement.prototype)) {
    const filter = Array.prototype.filter;
    const handler = option => option.selected;
    Object.defineProperty(HTMLSelectElement.prototype, 'selectedOptions', {
        get() {
            return filter.call(this.options, handler);
        }
    });
}
