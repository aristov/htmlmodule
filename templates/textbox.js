import textinput from './textinput';
import button from './button';
import { mix as mixes } from '../tools/utils';

export default domTransform => {
    textinput(domTransform);
    button(domTransform);

    domTransform.element('textbox', function({
        attributes : {
            instance = 'TextBox',
            view = 'textbox',
            role, disabled, name, value, placeholder, hasclear, label, mix, readonly
        },
        content
    }) {
        hasclear = hasclear === 'true'? 'hasclear' : '';
        if(!content || (Array.isArray(content) && !content.length)) {
            content = {
                element : 'textinput',
                attributes : { role, name, value, placeholder, disabled, readonly }
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
