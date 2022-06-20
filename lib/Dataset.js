const AttrType = require('./AttrType')

class Dataset extends AttrType
{
  /**
   * @param {DomElem} elem
   * @returns {DOMStringMap}
   */
  static get(elem) {
    return elem.node.dataset
  }

  /**
   * @param {DomElem} elem
   * @param {{}} dataset
   */
  static set(elem, dataset) {
    const map = elem.node.dataset
    for(const [name, value] of Object.entries(dataset)) {
      if(value === null) {
        delete map[name]
      }
      else map[name] = value
    }
  }
}

module.exports = Dataset
