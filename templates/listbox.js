export default domTransform => {
    domTransform.element('listbox', function({ attributes, content }, params = { checked : null }) {
        content = [{
            element : 'span',
            attributes : { 'class' : 'box' },
            content : this.apply(content, params)
        }];
        let checked = params.checked;
        content.push({
            element : 'input',
            attributes : {
                type : 'hidden',
                autocomplete : 'off',
                disabled : attributes.disabled === 'true' ? '' : undefined,
                name : attributes.name,
                value : checked? checked.attributes['data-value'] : undefined
            }
        });
        return {
            element : 'span',
            attributes : {
                role : 'listbox',
                tabindex : 'tabindex' in attributes?
                    attributes.tabindex :
                    attributes.disabled === 'true'? undefined : '0',
                'data-instance': 'ListBox',
                'aria-label' : attributes.label,
                'aria-disabled' : attributes.disabled,
                'class' : [attributes.view || 'listbox', attributes.mix].join(' ').trim()
            },
            content
        };
    });
    domTransform.element('option', function({ attributes, content }, params) {
        let result = {
                element : 'span',
                attributes : {
                    role : 'option',
                    'data-instance' : 'Option',
                    'aria-selected' : attributes.selected,
                    'aria-checked' : attributes.checked,
                    'data-value' : attributes.value,
                    'class' : attributes.view || 'option'
                },
                content
            };
        if(attributes.checked === 'true') params.checked = result;
        return result;
    });
}
