import textbox from './textbox';
import textinput from './textinput';
import button from './button';

export default domTransform => {
    textbox(domTransform);
    textinput(domTransform);
    button(domTransform);

    domTransform.element('passwordbox', function({ attributes }) {
        return this.apply({
            element : 'textbox',
            attributes : attributes = Object.assign(attributes, {
                instance : 'PasswordBox',
                type : 'password',
                mix : ['passwordbox', attributes.mix].join(' ').trim()
            }),
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

/*export default ({ attributes }) => {
    return {
        template : textbox,
        attributes : attributes = Object.assign(attributes, {
            instance : 'PasswordBox',
            type : 'password',
            mix : ['passwordbox', attributes.mix].join(' ').trim()
        }),
        content : [
            { template : textinput, type : 'password', ...attributes },
            {
                template : button,
                attributes : {
                    type : 'watch',
                    tabindex : '-1',
                    view : 'watchbutton',
                    disabled : attributes.disabled,
                    hidden : String(!attributes.value)
                }
            }
        ]
    };
}*/
