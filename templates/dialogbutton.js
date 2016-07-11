import button from './button';

export default domTransform => {
    button(domTransform);

    domTransform.element('dialogbutton', function({ attributes, content }) {
        return this.apply({
            element : 'button',
            attributes : Object.assign({
                instance : 'DialogButton',
                haspopup : 'true',
                expanded : 'false'
            }, attributes),
            content
        });
    });
}
