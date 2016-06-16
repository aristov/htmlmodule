export default domTransform => {
    domTransform.element('checkbox', function({ attributes, content }) {
        let view = attributes.view || 'checkbox';

        content = this.apply(view === 'checkbox'? [{
            element : 'span',
            attributes : { 'class' : 'box' }
        }, content] : content);

        if(attributes.checked === 'true') {
            content.push({
                element : 'input',
                attributes : {
                    type : 'hidden',
                    autocomplete : 'off',
                    disabled : attributes.disabled === 'true' ? '' : undefined,
                    name : attributes.name,
                    value : attributes.value
                }
            });
        }
        return {
            element : 'span',
            attributes : {
                'data-instance' : 'CheckBox',
                role : 'checkbox',
                tabindex : attributes.disabled === 'true'? undefined : '0',
                id : attributes.id,
                title : attributes.title,
                'aria-disabled' : attributes.disabled,
                'aria-checked' : attributes.checked,
                'aria-controls' : attributes.controls,
                'class' : view
            },
            content
        };
    });
}
