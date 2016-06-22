export default domTransform => {
    domTransform.element('textinput', function({ attributes }) {
        return {
            element : 'input',
            attributes : {
                autocomplete : 'off',
                disabled : attributes.disabled === 'true'? '' : undefined,
                placeholder : attributes.placeholder,
                value : attributes.value,
                type : attributes.type,
                'class' : 'box'
            }
        };
    });
}
