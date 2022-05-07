import window from 'window'
import { Assembler } from './Assembler'

const { CustomEvent, EventTarget } = window

/**
 * @see https://www.w3.org/TR/dom/#interface-node
 * @abstract
 */
export class DomNode extends Assembler
{
  /**
   * @returns {EventTarget}
   */
  createNode() {
    return new EventTarget
  }

  /**
   * @param {Event|string|*} event
   * @param {CustomEventInit|EventInit|{}} [dict]
   * @param {boolean} [dict.bubbles=false]
   * @param {boolean} [dict.cancelable=false]
   * @param {*} [dict.detail]
   * @returns {boolean}
   */
  emit(event, dict) {
    if(typeof event === 'string') {
      const events = this.constructor.events
      const description = events[event] || [CustomEvent]
      const [constructor, bubbles, cancelable] = description
      if(!dict) {
        dict = {
          bubbles : bubbles || false,
          cancelable : cancelable || false,
        }
      }
      event = new constructor(event, dict)
    }
    return this.node.dispatchEvent(event)
  }

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
   * @param {string[]} events
   */
  static defineEvents(events) {
    for(const type of events) {
      const name = 'on' + type
      Object.defineProperty(this.prototype, name, {
        configurable : true,
        set(callback) {
          if(callback) {
            this.node[name] = e => callback(e, e.target.__instance)
            this.__handlers.set(name, callback)
          }
          else this.__handlers.delete(name)
        },
        get() {
          return this.node[name]
        },
      })
    }
  }

  /**
   * @param {string[]} methods
   */
  static defineMethods(methods) {
    for(const name of methods) {
      Object.defineProperty(this.prototype, name, {
        configurable : true,
        writable : true,
        value : function(...args) {
          return this[name](...args)
        }
      })
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
}

/**
 * type : [constructor, bubbles, cancelable]
 */
DomNode.events = {
  blur : [window.FocusEvent],
  cancel : [window.Event, false, true],
  change : [window.Event, true],
  click : [window.MouseEvent, true, true],
  close : [window.Event],
  contextmenu : [window.MouseEvent, true, true],
  dblclick : [window.MouseEvent, true, true],
  error : [window.Event],
  focus : [window.FocusEvent],
  focusin : [window.FocusEvent, true],
  focusout : [window.FocusEvent, true],
  input : [window.InputEvent, true],
  invalid : [window.Event, false, true],
  keydown : [window.KeyboardEvent, true, true],
  keyup : [window.KeyboardEvent, true, true],
  load : [window.Event],
  mousedown : [window.MouseEvent, true, true],
  mouseenter : [window.MouseEvent],
  mouseleave : [window.MouseEvent],
  mousemove : [window.MouseEvent, true, true],
  mouseout : [window.MouseEvent, true, true],
  mouseover : [window.MouseEvent, true, true],
  mouseup : [window.MouseEvent, true, true],
  reset : [window.Event, true, true],
  resize : [window.UIEvent],
  scroll : [window.Event, true],
  submit : [window.Event, true, true],
  touchcancel : [window.TouchEvent, true],
  touchend : [window.TouchEvent, true, true],
  touchmove : [window.TouchEvent, true, true],
  touchstart : [window.TouchEvent, true, true],
}

DomNode.defineEvents(Object.keys(DomNode.events))
