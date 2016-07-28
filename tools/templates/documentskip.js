export default domTransform => {
    domTransform.node('document', function({ content }) {
        return this.apply(content[0]);
    })
}
