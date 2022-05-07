import { DomEmitter } from './DomEmitter'

/**
 * @see https://www.w3.org/TR/dom/#interface-node
 * @abstract
 */
export class DomNode extends DomEmitter
{
  /**
   * @param {boolean} [keepNodes=false]
   */
  destroyChildren(keepNodes = false) {
    if(this.node.hasChildNodes()) {
      for(const child of Array.from(this.node.childNodes)) {
        const elem = child.__instance
        if(elem) {
          elem.destroy(keepNodes)
        }
        else keepNodes || child.remove()
      }
    }
  }

  /**
   * @param {string[]} props
   * @param {boolean} [setters]
   */
  static defineProps(props, setters = false) {
    let name, desc
    for(name of props) {
      desc = {
        configurable : true,
        get() {
          return this.node[name]
        },
      }
      if(setters) {
        desc.set = function(value) {
          this.node[name] = value
        }
      }
      Object.defineProperty(this.prototype, name, desc)
    }
  }

  static defineMethods(methods) {
    for(const method of methods) {
      Object.defineProperty(this.prototype, method, {
        configurable : true,
        writable : true,
        value : function(...args) {
          return this[method](...args)
        }
      })
    }
  }
}
