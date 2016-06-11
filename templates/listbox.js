export default domTransform => {
    domTransform.element('listbox', function(listbox) {
        var attrs = listbox.attributes,
            params = { checked : null },
            content = [this.apply({
                element : 'span',
                attributes : { 'class' : 'box' },
                content : listbox.content
            }, params)],
            checked = params.checked;
        content.push({
            element : 'input',
            attributes : {
                type : 'hidden',
                autocomplete : 'off',
                disabled : attrs.disabled === 'true' ? '' : undefined,
                name : attrs.name,
                value : checked? checked.attributes['data-value'] : undefined
            }
        });
        return {
            element : 'span',
            attributes : {
                'data-instance': 'ListBox',
                role : 'listbox',
                tabindex : attrs.disabled === 'true'? undefined : '0',
                'aria-label' : attrs.label,
                'aria-disabled' : attrs.disabled,
                'class' : attrs.view || 'listbox'
            },
            content : content
        };
    });
    domTransform.element('option', function(option, params) {
        var attrs = option.attributes,
            result = {
                element : 'span',
                attributes : {
                    'data-instance' : 'Option',
                    role : 'option',
                    'aria-selected' : attrs.selected,
                    'aria-checked' : attrs.checked,
                    'data-value' : attrs.value,
                    'class' : attrs.view || 'option'
                },
                content : option.content
            };
        if(attrs.checked === 'true') params.checked = result;
        return result;
    });
}
