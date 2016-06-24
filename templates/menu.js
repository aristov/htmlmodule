export default domTransform => {
    domTransform.element('menu', function({ attributes : a, content }) {
        return {
            element : 'div',
            attributes : {
                'data-instance' : 'Menu',
                role : 'menu',
                id : a.id,
                hidden : '',
                'class' : 'menu popup'
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
                'class' : 'menuitem'
            },
            content : this.apply(content)
        }
    });
}
