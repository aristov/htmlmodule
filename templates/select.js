export default domTransform => {
    domTransform.element('select', function({ attributes, content }) {
        let params = { checked : null },
            listbox = this.apply({
                element : 'listbox',
                attributes : { mix : 'popup' },
                content
            }, params);
        return {
            element : 'span',
            attributes : {
                'data-instance' : 'Select',
                role : 'combobox',
                tabindex : 0,
                'aria-expanded' : false,
                'class' : 'select',
                'aria-label' : attributes.label
            },
            content : [
                {
                    element : 'span',
                    attributes : {
                        'data-instance' : 'Button',
                        role : 'textbox',
                        'class' : 'button',
                        'aria-readonly' : 'true'
                    },
                    content : params.checked? params.checked.content : '—'
                },
                listbox
            ]
        }
    });
}
