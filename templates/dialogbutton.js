export default domTransform => {
    domTransform.element('dialogbutton', function({ attributes, content }) {
        return this.apply({
            element : 'button',
            /*attributes : {
                ...attributes, // DOES NOT WORK =(
                instance : 'DialogButton',
                haspopup : 'true',
                expanded : 'false'
            },*/
            attributes : Object.assign({}, attributes, {
                instance : 'DialogButton',
                haspopup : 'true',
                expanded : 'false'
            }),
            content
        });
    });
}
