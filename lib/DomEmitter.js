import window from 'window'
import { Assembler } from './Assembler'

const { CustomEvent, EventTarget } = window

/**
 * @see https://www.w3.org/TR/dom/#interface-eventtarget
 */
export class DomEmitter extends Assembler
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

  static defineEvents(types) {
    for(const type of types) {
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
}

/**
 * type : [constructor, bubbles, cancelable]
 */
DomEmitter.events = {
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

DomEmitter.defineEvents(Object.keys(DomEmitter.events))
