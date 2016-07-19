import dialog from './dialog';
import button from './button';

export default domTransform => {
    //domTransform.templates(dialog, button);
    dialog(domTransform);
    button(domTransform);
    domTransform.element('confirmdialog', function({ attributes : a }) {
        return this.apply({
            element : 'dialog',
            attributes : { mix : 'confirmdialog', modal : 'true', id : a.id },
            content : {
                element : 'form',
                content : [
                    a.heading && { element : 'h3', content : a.heading },
                    a.text && { element : 'p', content : a.text },
                    {
                        element : 'button',
                        attributes : { type: 'submit', mix : 'accent' },
                        content : a.submitlabel || 'Ok'
                    },
                    {
                        element : 'button',
                        attributes : { type: 'close' },
                        content : a.dismisslabel || 'Cancel'
                    }
                ]
            }
        });
    });
}
