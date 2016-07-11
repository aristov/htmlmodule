import textbox from './textbox';
import textinput from './textinput';
import button from './button';
import { mix } from '../tools/utils';

export default domTransform => {
    textbox(domTransform);
    textinput(domTransform);
    button(domTransform);

    domTransform.element('passwordbox', function({ attributes : a }) {
        const { disabled, value } = a;

        return this.apply({
            element : 'textbox',
            attributes : {
                instance : 'PasswordBox',
                label : a.label,
                view : a.view,
                mix : mix('passwordbox', a.mix),
                disabled
            },
            content : [
                {
                    element : 'textinput',
                    attributes : {
                        type : 'password',
                        name : a.name,
                        value,
                        placeholder : a.placeholder,
                        disabled
                    }
                },
                {
                    element : 'button',
                    attributes : {
                        type : 'watch',
                        tabindex : '-1',
                        view : 'watchbutton',
                        hidden : String(!value),
                        disabled
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
