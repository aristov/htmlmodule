/**
 * HTMLElement.prototype.onclick invoke on HTMLElement.prototype.click call
 * Event system normalization for MSIE 11
 *
 * @polyfill
 */
const { MouseEvent } = window
const span = document.createElement('span')
if('click' in span && 'onclick' in span) {
    let called = null
    span.onclick = event => called = event
    span.click()
    if(!called) {
        const proto = HTMLElement.prototype
        const method = proto.click
        proto.click = function() {
            method.call(this)
            if('onclick' in this && typeof this.onclick === 'function') {
                this.onclick(new MouseEvent('click', {
                    bubbles : true,
                    cancelable : true
                }))
            }
        }
    }
}
