import textbox from './textbox';

export default domTransform => {
    textbox(domTransform);

    domTransform.element('passwordbox', function({ attributes }) {
        attributes = Object.assign(attributes, {
            instance : 'PasswordBox',
            type : 'password',
            mix : ['passwordbox', attributes.mix].join(' ').trim()
        });
        return this.apply({
            element : 'textbox',
            attributes,
            content : [
                { element : 'textinput', attributes },
                {
                    element : 'button',
                    attributes : {
                        tabindex : '-1',
                        view : 'watchbutton',
                        hidden : String(!attributes.value)
                    }
                }
            ]
        });
    })
}