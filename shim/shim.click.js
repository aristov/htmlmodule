/**
 * HTMLElement.prototype.onclick invoke on HTMLElement.prototype.click call
 * Event system normalization for MSIE 11
 *
 * @polyfill
 */
{
    const span = document.createElement('span');
    if('click' in span && 'onclick' in span) {
        let called = null;
        span.onclick = event => called = event;
        span.click();
        if(!called) {
            const proto = HTMLElement.prototype;
            const method = proto.click;
            proto.click = function() {
                method.call(this);
                if('onclick' in this && typeof this.onclick === 'function') {
                    this.onclick(new MouseEvent('click', {
                        bubbles : true,
                        cancelable : true
                    }));
                }
            };
        }
    }
}

/*if(false) {
    const span = document.createElement('span');
    if('focus' in span && 'onfocus' in span) {
        let called = null;
        span.onfocus = event => called = event;
        span.focus();
        if(!called) {
            const proto = HTMLElement.prototype;
            const method = proto.focus;
            proto.focus = function() {
                const active = document.activeElement;
                method.call(this);
                if(active) {
                    active.dispatchEvent(new FocusEvent('blur', {
                        bubbles : false,
                        cancelable : false
                    }));
                }
                if('onfocus' in this && typeof this.onfocus === 'function') {
                    this.onfocus(new FocusEvent('focus', {
                        bubbles : false,
                        cancelable : false
                    }));
                }
            };
        }
    }
}*/
