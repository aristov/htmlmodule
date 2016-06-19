export default domTransform => {
    domTransform.element('select', function({ attributes, content }) {
        let params = { text : '—', value : undefined },
            listbox = this.apply({
                element : 'listbox',
                attributes : { mix : 'popup', tabindex : undefined },
                content
            }, params);
        return {
            element : 'span',
            attributes : {
                'data-instance' : 'Select',
                role : 'combobox',
                tabindex : attributes.disabled === 'true'? undefined : 0,
                'aria-expanded' : 'false',
                'aria-disabled' : attributes.disabled,
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
                        'aria-readonly' : 'true',
                        'aria-disabled' : attributes.disabled
                    },
                    content : params.text
                },
                listbox
            ]
        }
    });
}
