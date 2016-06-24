const mix = (...mix) => mix.filter(mix => typeof mix === 'string' && mix).join(' ');

export default domTransform => {
    domTransform.element('menu', function({ attributes : a, content }) {
        return {
            element : 'div',
            attributes : {
                'data-instance' : a.instance || 'Menu',
                role : 'menu',
                id : a.id,
                hidden : '',
                'class' : mix(a.view || 'menu', 'popup', a.mix)
            },
            content : this.apply(content)
        }
    });
    domTransform.element('menuitem', function({ attributes : a, content }) {
        return {
            element : a.href? 'a' : 'div',
            attributes : {
                'data-instance' : 'MenuItem',
                role : 'menuitem',
                tabindex : '-1',
                href : a.href,
                'class' : mix(a.view || 'menuitem', a.mix)
            },
            content : this.apply(content)
        }
    });
}
