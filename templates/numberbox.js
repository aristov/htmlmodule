import textbox from './textbox';
import textinput from './textinput';
import button from './button';

export default domTransform => {
    textbox(domTransform);
    textinput(domTransform);
    button(domTransform);

    domTransform.element('numberbox', function({ attributes }) {
        const disabled = attributes.disabled;
        return this.apply({
            element : 'textbox',
            attributes : {
                instance : attributes.instance || 'NumberBox',
                label : attributes.label,
                mix : ['numberbox', attributes.mix].join(' ').trim(),
                disabled
            },
            content : [
                {
                    element : 'textinput',
                    attributes : {
                        name : attributes.name,
                        value : attributes.value,
                        readonly : attributes.readonly,
                        disabled
                    }
                },
                {
                    element : 'button',
                    attributes : {
                        tabindex : '-1',
                        type : 'shift',
                        value : '+1',
                        disabled
                    },
                    content : '▲'
                },
                {
                    element : 'button',
                    attributes : {
                        tabindex : '-1',
                        type : 'shift',
                        value : '-1',
                        disabled
                    },
                    content : '▼'
                }
            ]
        });
    });
}
