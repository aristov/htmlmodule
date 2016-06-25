export default domTransform => {
    domTransform.element('link', function({ attributes, content }) {
        return {
            element : 'a',
            attributes : {
                href : attributes.href,
                rel : attributes.rel,
                'class' : [attributes.view || 'link', attributes.mix].join(' ').trim()
            },
            content : this.apply(content)
        };
    });
}

const mixes = (...mix) => mix.filter(mix => typeof mix === 'string' && mix).join(' ');

export default domTransform => {
    domTransform.element('link', function({ attributes : a, content : c }) {
        return `<a href=${a.href} rel=${a.rel} class=${mixes(a.view || 'link', a.mix)}>${this.apply(c)}</a>`;
    });
}

export default domTransform => {
    domTransform.element('link', function({ attributes : a, content : c }) {
        return `<a href = "${ a.href }"
                   target = "${ a.target }"
                   download = "${ a.download }"
                   ping = "${ a.ping }"
                   rel = "${ a.rel }"
                   reflang = "${ a.reflang }"
                   type = "${ a.type }"
                   referrerpolicy = "${ a.reffererpolicy }" 
                   class = "${ mixes(a.view || 'link', a.mix) }">${ this.apply(c) }</a>`;
    });
}

export default domTransform => {
    domTransform.element('link', function({ attributes : a, content }) {
        return {
            element : 'a',
            attributes : Object.assign(a, {
                view : undefined,
                mix : undefined,
                hidden : a.hidden === 'true'? '' : undefined,
                'class' : mixes(a.view || 'link', a.mix)
            }),
            content : this.apply(content)
        };
    });
}
