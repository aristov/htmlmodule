import textbox from './textbox';
import button from './button';

export default domTransform => {
    textbox(domTransform);
    button(domTransform);

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
                        type : 'watch',
                        tabindex : '-1',
                        view : 'watchbutton',
                        disabled : attributes.disabled,
                        hidden : String(!attributes.value)
                    }
                }
            ]
        });
    })
}