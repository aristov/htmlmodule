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
}
