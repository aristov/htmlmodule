import textbox from './textbox';
import textinput from './textinput';
import button from './button';
import mix from '../utils/mix';

export default domTransform => {
    textbox(domTransform);
    textinput(domTransform);
    button(domTransform);

    domTransform.element('numberbox', function({ attributes : a }) {
        const disabled = a.disabled;
        const textbox = this.apply({
            element : 'textbox',
            attributes : Object.assign(a, {
                instance : a.instance || 'NumberBox',
                mix : mix('numberbox', a.mix)
            })
        });
        textbox.content = [
            textbox.content,
            /*{ element : 'shiftbutton', value : '+1', content : '▲' },
            { element : 'shiftbutton', value : '-1', content : '▼' },*/
            this.apply({
                element : 'button',
                attributes : {
                    tabindex : '-1',
                    type : 'shift',
                    value : '+1',
                    disabled
                },
                content : '▲'
            }),
            this.apply({
                element : 'button',
                attributes : {
                    tabindex : '-1',
                    type : 'shift',
                    value : '-1',
                    disabled
                },
                content : '▼'
            })
        ];
        return textbox;
    });
}
