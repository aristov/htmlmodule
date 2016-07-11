import dialog from './dialog';
import button from './button';

export default domTransform => {
    domTransform.templates(dialog, button);
    domTransform.element('confirmdialog', function({ attributes : a, content }) {
        return this.apply({
            element : 'dialog',
            attributes : { modal : 'true', id : a.id },
            content : content || {
                element : 'form',
                content : [
                    { element : 'p', content : a.text },
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
