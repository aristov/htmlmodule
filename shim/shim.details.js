/**
 * HTMLDetailsElement interface polyfill
 */
{
    if(!'HTMLDetailsElement' in window) {
        const { HTMLElement } = window;
        class HTMLDetailsElement extends HTMLElement {
            set open(open) {
                if(open) this.setAttribute('open', '');
                else this.removeAttribute('open');
            }
        }
        window.HTMLDetailsElement = HTMLDetailsElement;
    }
}

/**
 * HTMLElement.ontoggle Polyfill
 * @copyright © 2016 Vyacheslav Aristov
 */
{
    const { HTMLElement : { prototype } } = window;
    if(!('ontoggle' in prototype)) {
        Object.defineProperties(prototype, {
            ontoggle : {
                configurable : true,
                enumerable : true,
                set(handler) {
                    this.__handler_ontoggle__ = typeof handler === 'function'?
                        handler.bind(this) :
                        null;
                },
                get() {
                    return this.__handler_ontoggle__;
                }
            },
            __handler_ontoggle__ : { writable : true, value : null }
        });
        document.addEventListener('toggle', event => {
            const target = event.target;
            if(typeof target.ontoggle) target.ontoggle(event);
        }, true);
    }
}

/**
 * details element stylesheet polyfill
 */
{
    const head = document.getElementsByTagName('head')[0];
    const style = document.createElement('style');
    const css = 'details:not([open])>*:not(summary){display:none!important}';
    style.textContent = css;
    head.appendChild(style);
}
