export default domTransform => {
    domTransform.element('checkbox', function(checkbox) {
        let attrs = checkbox.attributes,
            view = attrs.view || 'checkbox',
            content = this.apply(view === 'checkbox'?
                [
                    {
                        element : 'span',
                        attributes : { 'class' : 'box' }
                    },
                    checkbox.content
                ] :
                checkbox.content);

        if(attrs.checked === 'true') {
            content.push({
                element : 'input',
                attributes : {
                    type : 'hidden',
                    autocomplete : 'off',
                    disabled : attrs.disabled === 'true' ? '' : undefined,
                    name : attrs.name,
                    value : attrs.value
                }
            });
        }
        return {
            element : 'span',
            attributes : {
                'data-instance' : 'CheckBox',
                role : 'checkbox',
                tabindex : attrs.disabled === 'true'? undefined : '0',
                'aria-disabled' : attrs.disabled,
                'aria-checked' : attrs.checked,
                'class' : view
            },
            content : content
        };
    });
}
