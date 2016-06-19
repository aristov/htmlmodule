import dialog from './dialog';
import button from './button';

export default domTransform => {
    dialog(domTransform);
    button(domTransform);
    //domTransform.templates(dialog, button);

    domTransform.element('confirmdialog', function({ attributes, content }) {
        return this.apply({
            element : 'dialog',
            attributes : { modal : 'true', id : attributes.id },
            content : content || {
                element : 'form',
                content : [
                    { element : 'p', content : attributes.text },
                    {
                        element : 'button',
                        attributes : { type: 'submit', mix : 'accent' },
                        content : attributes.submitLabel || 'Ok'
                    },
                    {
                        element : 'button',
                        attributes : { type: 'close' },
                        content : attributes.dismissLabel || 'Cancel'
                    }
                ]
            }
        });
    });
}
