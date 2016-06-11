export default domTransform => {
    domTransform.element('menu', function({ attributes, content }) {
        return {
            element : 'div',
            attributes : {
                'data-instance' : 'Menu',
                role : 'menu',
                id : attributes.id,
                hidden : '',
                'class' : 'menu popup'
            },
            content : this.apply(content)
        }
    });
    domTransform.element('menuitem', function({ content }) {
        return {
            element : 'div',
            attributes : {
                'data-instance' : 'MenuItem',
                role : 'menuitem',
                tabindex : '-1',
                'class' : 'menuitem'
            },
            content : this.apply(content)
        }
    });
    domTransform.element('menubutton', function({ attributes, content }) {
        return this.apply({
            element : 'button',
            attributes : {
                instance : 'MenuButton',
                disabled : attributes.disabled,
                view : attributes.view,
                mix : ['menubutton', attributes.mix].join(' '),
                haspopup : 'true',
                controls : attributes.controls,
                expanded : 'false'
            },
            content
        })
    });
}
