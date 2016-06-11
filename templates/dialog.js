export default domTransform => {
    domTransform.element('dialog', function({ attributes, content }) {
        return {
            element : 'div',
            attributes : {
                role : 'dialog',
                id : attributes.id,
                hidden : '',
                'class' : 'dialog popup',
                'aria-modal' : attributes.modal,
                'data-instance' : 'Dialog',
                'data-assertive' : attributes.assertive
            },
            content : this.apply(content)
        }
    });
    domTransform.element('dialogbutton', function({ attributes, content }) {
        return this.apply({
            element : 'button',
            attributes : {
                instance : 'DialogButton',
                disabled : attributes.disabled,
                view : attributes.view,
                mix : ['dialogbutton', attributes.mix].join(' '),
                haspopup : 'true',
                controls : attributes.controls,
                expanded : 'false'
            },
            content
        })
    });
}
