/**
 * https://www.w3.org/TR/wai-aria-1.1/#roletype
 */

const map = Array.prototype.map;

export default class Instance {
    /**
     * Base instance component
     * @param {Element} element root element node
     */
    constructor(element) {
        element.instance = this;
        this.element = element;
    }

    /**
     * Unique identifier
     * @returns {String}
     */
    get id() {
        return this.element.id || '';
    }

    /**
     * Hidden state
     * @returns {String}
     */
    get hidden() {
        return String(this.element.hidden);
    }

    /**
     * Hidden state
     * @param {String} hidden
     */
    set hidden(hidden) {
        this.element.hidden = hidden === 'true';
    }

    /**
     * Disabled state
     * @returns {String}
     */
    get disabled() {
        return this.element.getAttribute('aria-disabled') || 'false';
    }

    /**
     * Disabled state
     * @param {String} disabled
     */
    set disabled(disabled) {
        this.element.setAttribute('aria-disabled', disabled);
    }

    /**
     * Add event listener
     * @param {String} type event type
     * @param {Function} listener event listener
     * @param {Object} context event listener context
     * @returns {Instance} this
     */
    on(type, listener, context) {
        this.element.addEventListener(type, listener.bind(context || this));
        return this;
    }

    /**
     * Dispatch event
     * @param {String} type event type;
     * @returns {Instance} this
     */
    emit(type) {
        this.element.dispatchEvent(new Event(type, { bubbles : true, cancelable : true }));
        return this;
    }

    /**
     * Find the first descendant instance
     * @param {Instance} Class target instance class
     * @param {Function} filter function
     * @returns {Instance|null}
     */
    find(Class, filter) {
        return filter?
            this.findAll(Class, filter)[0] || null :
            Class.getInstance(this.element.querySelector(`[data-instance=${Class.name}]`));
    }

    /**
     * Find all descendant instances
     * @param {Instance} Class target instance class
     * @param {Function} filter function
     * @returns {[Instance]}
     */
    findAll(Class, filter) {
        const result = map.call(
            this.element.querySelectorAll(`[data-instance=${Class.name}]`),
            element => Class.getInstance(element));
        return filter? result.filter(filter) : result;
    }

    /**
     * Find the nearest ancestor instance
     * @param {Instance} Class target instance class
     * @param {Function} filter function
     * @returns {Instance}
     */
    closest(Class, filter) {
        let instance = this;
        do instance = Class.getInstance(instance.element.parentElement.closest(`[data-instance=${Class.name}]`));
        while(instance && filter && !filter(instance));
        return instance;
    }

    /**
     * Create if needed and return the instance of specified element
     * @param {Element} element root element node of target instance
     * @returns {Instance|null}
     */
    static getInstance(element) {
        return element && element.dataset && element.dataset.instance === this.name?
            element.instance || new this(element) :
            null;
    }

    /**
     * Create if needed and return the nearest ancestor instance of specified element
     * @param {Element} element node inside target instance
     * @returns {Instance|null}
     */
    static closestInstance(element) {
        return this.getInstance(element.closest(`[data-instance=${this.name}]`));
    }

    /**
     * Delegate event listener to the document node
     * @param {String} type event type
     * @param {Function} listener event listener
     * @param {Object} context event listener context
     */
    static on(type, listener, context) {
        document.addEventListener(type, event => {
            const instance = (context || this).closestInstance(event.target);
            if(instance) listener.call(instance, event);
        }, true);
    }
}
