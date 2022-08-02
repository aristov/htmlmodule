const { Text } = require('xwindow')

class TextType
{
  /**
   * @param {string} [data]
   */
  constructor(data = '') {
    this.__data = String(data)
    this.node = null
  }

  /**
   * @return {string}
   */
  toString() {
    return this.node.data
  }

  /**
   * @param {Text} [node]
   * @private
   */
  __init(node) {
    this.node = node || new Text(this.__data)
  }

  /**
   * @param {boolean} [keepNode]
   * @private
   */
  __destroy(keepNode) {
    keepNode || this.node.remove()
  }

  /**
   * @return {Text|null}
   * @private
   */
  __getAnchorNode() {
    return this.node
  }

  /**
   * @return {string}
   */
  get data() {
    return this.node ? this.node.data : this.__data
  }

  /**
   * @param {string} data
   */
  set data(data) {
    this.node.data = data
  }
}

module.exports = TextType
