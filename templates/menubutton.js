export default domTransform => {
    domTransform.element('menubutton', function({ attributes : a, content }) {
        return this.apply({
            element : 'button',
            attributes : Object.assign(a, {
                instance : 'MenuButton',
                haspopup : 'true',
                expanded : 'false',
                view : a.view || 'button menubutton',
                mix : a.mix
            }),
            content
        })
    });
}
