import textinput from './textinput';

export default domTransform => {
    textinput(domTransform);

    domTransform.element('textbox', function({ attributes, content }) {
        if(content && content.length) content = this.apply(content);
        else {
            content = this.apply({ element : 'textinput', attributes });
            if(attributes.hasclear === 'true') content = [content, {
                element : 'span',
                attributes : {
                    role : 'button',
                    tabindex : attributes.disabled === 'true'? undefined : '-1',
                    'aria-disabled' : String(attributes.disabled === 'true'),
                    'class' : 'clear',
                    hidden : attributes.value? undefined : ''
                }
            }];
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
