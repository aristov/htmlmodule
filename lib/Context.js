/**
 * @param {*} value
 * @constructor
 */
function Context(value) {
  /**
   * @param {*} newValue
   * @param {*} children
   * @return {*}
   */
  this.Provider = ({ value : newValue, children }) => {
    value = newValue
    return children
  }
  /**
   * @param {function} render
   */
  this.Consumer = render => render(value)
}

module.exports = Context
