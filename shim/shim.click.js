/**
 * HTMLElement.prototype.onclick invoke on HTMLElement.prototype.click call
 * Event system normalization for MSIE 11
 * todo check needless
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
                    const event = document.createEvent('Event');
                    event.initEvent('click', true, true);
                    this.onclick(event);
                }
            };
        }
    }
}

{
    const span = document.createElement('span');
    if('focus' in span && 'onfocus' in span) {
        let called = null;
        span.onfocus = event => called = event;
        span.focus();
        if(!called) {
            const proto = HTMLElement.prototype;
            const method = proto.focus;
            proto.focus = function() {
                method.call(this);
                if('onfocus' in this && typeof this.onfocus === 'function') {
                    const event = document.createEvent('Event');
                    event.initEvent('focus', true, true);
                    this.onfocus(event);
                }
            };
        }
    }
}
