export default domTransform => {
    domTransform.element('textinput', function({ attributes }) {
        return {
            element : 'input',
            attributes : {
                autocomplete : 'off',
                type : attributes.type,
                name : attributes.name,
                value : attributes.value,
                placeholder : attributes.placeholder,
                readonly : attributes.readonly === 'true'? '' : undefined,
                disabled : attributes.disabled === 'true'? '' : undefined,
                'class' : 'box'
            }
        };
    });
}
