export default domTransform => {
    domTransform.element('tablist', function({ attributes, content }) {
        return {
            element : 'div',
            attributes : {
                'data-instance' : 'TabList',
                role : 'tablist',
                'class' : attributes.view || 'tablist',
                'aria-controls' : attributes.controls
            },
            content: this.apply(content)
        }
    });
    domTransform.element('tab', function({ attributes, content }) {
        return {
            element: 'span',
            attributes : {
                'data-instance' : 'Tab',
                role : 'tab',
                tabindex : attributes.selected === 'true'? '0' : '-1',
                'aria-controls' : attributes.controls,
                'aria-selected' : attributes.selected,
                'class' : attributes.view || 'tab'
            },
            content : { element : 'span', content }
        }
    });
    domTransform.element('tabpanel', function({ attributes, content }) {
        return {
            element : 'div',
            attributes : {
                role : 'tabpanel',
                'class' : 'tabpanel',
                id : attributes.id,
                hidden : attributes.hidden === 'true'? '' : undefined
            },
            content : this.apply(content)
        }
    });
}
