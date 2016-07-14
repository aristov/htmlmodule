import button from './button';
import listbox from './listbox';

export default domTransform => {
    button(domTransform);
    listbox(domTransform);

    domTransform.element('select', function({ attributes : a, content }) {
        const option = { text : '—', value : undefined };

        const selectbox = {
            element : 'span',
            attributes : {
                'data-instance' : 'Select',
                role : 'combobox',
                tabindex : a.disabled === 'true' || '0',
                'aria-expanded' : 'false',
                'aria-disabled' : a.disabled,
                'class' : 'select',
                'aria-label' : a.label,
                'data-emptyoption' : JSON.stringify(option)
            }
        };

        const listbox = this.apply({
            element : 'listbox',
            attributes : { mix : 'popup', tabindex : undefined },
            content
        }, option);

        const button = this.apply({
            element : 'button',
            attributes : {
                role : 'textbox',
                readonly : 'true',
                tabindex : undefined,
                disabled : a.disabled
            },
            content : option.text
        });

        selectbox.content = [button, listbox];

        return selectbox;
    });
}
