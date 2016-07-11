export default domTransform => {
    domTransform.element('spin', function({ attributes : { hidden } }) {
        return {
            element : 'span',
            attributes : {
                'class' : 'spin',
                hidden : hidden === 'true' && ''
            }
        }
    });
}
