import textbox from './textbox';
import textinput from './textinput';
import button from './button';

export default domTransform => {
    textbox(domTransform);
    textinput(domTransform);
    button(domTransform);

    domTransform.element('timebox', function({ attributes }) {
        const disabled = attributes.disabled;

        return this.apply({
            element : 'textbox',
            attributes : {
                instance : 'TimeBox',
                label : attributes.label,
                mix : ['timebox', attributes.mix].join(' ').trim(),
                disabled
            },
            content : [
                {
                    element : 'textinput',
                    attributes : {
                        name : attributes.name,
                        value : attributes.value,
                        readonly : 'true',
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
