export default domTransform => {
    domTransform.element('link', function({ attributes, content }) {
        return {
            element : 'a',
            attributes : {
                href : attributes.href,
                rel : attributes.rel,
                'class' : [attributes.view || 'link', attributes.mix].join(' ').trim()
            },
            content : this.apply(content)
        };
    });
}
