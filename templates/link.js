export default (domTransform) => {
    domTransform.element('link', function(link) {
        let attrs = link.attributes;
        return {
            element : 'a',
            attributes : {
                href : attrs.href,
                rel : attrs.rel,
                'class' : [attrs.view || 'link', attrs.mix].join(' ').trim()
            },
            content : this.apply(link.content)
        };
    });
}
