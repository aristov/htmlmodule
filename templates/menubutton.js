export default domTransform => {
    domTransform.element('menubutton', function({ attributes, content }) {
        return this.apply({
            element : 'button',
            attributes : Object.assign({}, attributes, {
                instance : 'MenuButton',
                haspopup : 'true',
                expanded : 'false'
            }),
            content
        })
    });
}
