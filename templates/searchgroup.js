export default domTransform => {
    domTransform.element('searchgroup', function({ content }) {
        return {
            element : 'form',
            attributes : {
                role : 'search',
                'class' : 'searchgroup'
            },
            content : this.apply(content)
        };
    });
}
