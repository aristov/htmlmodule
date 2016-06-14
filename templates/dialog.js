export default domTransform => {
    domTransform.element('dialog', function({ attributes, content }) {
        return {
            element : 'div',
            attributes : {
                'data-instance' : attributes.instance || 'Dialog',
                role : 'dialog',
                id : attributes.id,
                hidden : '',
                'class' : 'dialog popup',
                'aria-modal' : attributes.modal,
                'data-assertive' : attributes.assertive
            },
            content : this.apply(content)
        }
    });
}
