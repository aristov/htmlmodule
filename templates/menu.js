import mix from '../utils/mix';

export default domTransform => {
    domTransform.element('menu', function({ attributes : a, content }) {
        return {
            element : 'span',
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
            element : a.href? 'a' : 'span',
            attributes : {
                'data-instance' : 'MenuItem',
                'data-type' : a.type,
                'aria-controls' : a.controls,
                role : 'menuitem',
                tabindex : '-1',
                href : a.href,
                'class' : mix(a.view || 'menuitem', a.mix)
            },
            content : this.apply(content)
        }
    });
}
