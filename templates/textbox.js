import textinput from './textinput';
import button from './button';

const mixes = (...mix) => mix.filter(mix => typeof mix === 'string' && mix).join(' ');

export default domTransform => {
    textinput(domTransform);
    button(domTransform);

    domTransform.element('textbox', function({
        attributes : {
            instance = 'TextBox',
            view = 'textbox',
            disabled, name, value, placeholder, hasclear, label, mix
        },
        content
    }) {
        hasclear = hasclear === 'true'? 'hasclear' : '';
        if(!content || (Array.isArray(content) && !content.length)) {
            content = {
                element : 'textinput',
                attributes : { name, value, placeholder, disabled }
            };
            if(hasclear) content = [content, {
                element : 'button',
                attributes : {
                    type : 'clear',
                    tabindex : '-1',
                    view : 'clearbutton',
                    disabled,
                    hidden : String(!value)
                }
            }];
        }
        return {
            element : 'label',
            attributes : {
                'data-instance' : instance,
                'aria-label' : label,
                'class' : mixes(view, mix, hasclear, disabled === 'true' && 'disabled')
            },
            content : this.apply(content)
        };
    });
}
