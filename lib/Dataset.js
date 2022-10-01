const PropType = require('./PropType')

class Dataset extends PropType
{
  /**
   * @param {ElemType} elem
   * @param {string} name
   * @param {*} dataset
   */
  static update(elem, name, dataset) {
    let attr, value
    for(attr in dataset) {
      value = dataset[attr]
      if(value === null) {
        delete elem.node.dataset[attr]
      }
      else if(value !== elem.node.dataset[attr]) {
        elem.node.dataset[attr] = value
      }
    }
  }

  /**
   * @param {ElemType} elem
   * @param {string} name
   * @param {{}} dataset
   */
  static reset(elem, name, dataset) {
    let attr
    for(attr in dataset) {
      if(!elem.vnode.dataset?.hasOwnProperty(attr)) {
        delete elem.node.dataset[attr]
      }
    }
  }
}

module.exports = Dataset
