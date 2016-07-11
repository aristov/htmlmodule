import textbox from './textbox';
import button from './button';
import textinput from './textinput';
import moment from 'moment';

export default domTransform => {
    textbox(domTransform);
    button(domTransform);
    textinput(domTransform);

    domTransform.element('datebox', function({ attributes : a }) {
        const disabled = a.disabled;
        const value = a.value || moment(Date.now()).format('YYYY-MM-DD');
        return this.apply({
            element : 'textbox',
            attributes : {
                instance : 'DateBox',
                label : a.label,
                mix : ['datebox', a.mix].join(' ').trim(),
                disabled
            },
            content : [
                {
                    element : 'textinput',
                    attributes : {
                        name : a.name,
                        value : moment(value, 'YYYY-MM-DD').format('DD.MM.YYYY'),
                        readonly : 'true',
                        disabled
                    }
                },
                {
                    element : 'button',
                    attributes : {
                        tabindex : '-1',
                        view : 'datebutton',
                        disabled
                    }
                },
                {
                    element : 'datepicker',
                    attributes : { mix : 'popup', hidden : 'true', value }
                }
            ]
        });
    });
}
