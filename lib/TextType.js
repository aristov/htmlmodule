const { Text } = require('xwindow')

class TextType
{
  /**
   * @param {string|number|*} data
   */
  constructor(data) {
    this.data = String(data)
    this.node = null
  }

  /**
   * @param {Text} [node]
   * @private
   */
  __init(node) {
    this.node = node || new Text(this.data)
  }

  /**
   * @param {boolean} [keepNode]
   * @private
   */
  __destroy(keepNode) {
    keepNode || this.node.remove()
  }
}

module.exports = TextType
