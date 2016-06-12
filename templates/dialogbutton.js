export default domTransform => {
    domTransform.element('dialogbutton', function({ attributes, content }) {
        return this.apply({
            element : 'button',
            attributes : Object.assign({}, attributes, {
                instance : 'DialogButton',
                haspopup : 'true',
                expanded : 'false'
            }),
            content
        });
    });
}
