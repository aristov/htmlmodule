import textbox from './textbox';

export default domTransform => {
    textbox(domTransform);

    domTransform.element('passwordbox', function({ attributes }) {
        return this.apply({
            element : 'textbox',
            attributes : Object.assign(attributes, {
                instance : 'PasswordBox',
                type : 'password',
                mix : ['passwordbox', attributes.mix].join(' ').trim()
            })
        });
    })
}