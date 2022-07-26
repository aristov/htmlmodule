const { Text } = require('xwindow')

class TextType
{
  /**
   * @param {string} data
   */
  constructor(data) {
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
  _init(node) {
    this.node = node || new Text(this.__data)
  }

  /**
   * @param {boolean} keepNode
   * @private
   */
  _destroy(keepNode) {
    keepNode || this.node.remove()
  }

  /**
   * @return {string}
   */
  get data() {
    return this.node? this.node.data : this.__data
  }

  /**
   * @param {string} data
   */
  set data(data) {
    this.node.data = data
  }
}

module.exports = TextType
