import textinput from './textinput';
import button from './button';

export default domTransform => {
    textinput(domTransform);
    button(domTransform);

    domTransform.element('textbox', function({ attributes, content }) {
        if(content && content.length) content = this.apply(content);
        else {
            content = this.apply({ element : 'textinput', attributes });
            if(attributes.hasclear === 'true') content = [content, this.apply({
                element : 'button',
                attributes : {
                    type : 'clear',
                    tabindex : '-1',
                    view : 'clearbutton',
                    disabled : attributes.disabled,
                    hidden : String(!attributes.value)
                }
            })];
        }
        return {
            element : 'label',
            attributes : {
                'data-instance' : attributes.instance || 'TextBox',
                'aria-label' : attributes.label,
                'class' : [
                    attributes.view || 'textbox',
                    attributes.hasclear === 'true'? 'hasclear' : undefined,
                    attributes.disabled === 'true'? 'disabled' : undefined,
                    attributes.mix
                ].join(' ').trim()
            },
            content
        };
    });
}
