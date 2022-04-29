import window from 'window'
import { Assembler } from './Assembler'

const { CustomEvent, EventTarget, Node } = window
const EVENT_KEY_PREFIX = 'event:'

/**
 * @see https://www.w3.org/TR/dom/#interface-eventtarget
 */
export class DomTarget extends Assembler // DomEmitter
{
  /**
   * @param {{}} init
   * @param {EventTarget} [init.node]
   */
  create(init) {
    this.__handlers = null
    if(!init.node) {
      init.node = new EventTarget
    }
    super.create(init)
  }

  /**
   * @param {{}} init
   * @param {{}} [init.on]
   */
  assign(init) {
    if(init.on) {
      for(const [type, callback] of Object.entries(init.on)) {
        this.on(type, callback, this)
      }
      delete init.on
    }
    super.assign(init)
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
   * @param {string} eventName
   * @param {function} callback
   * @param {{context,capture,once,passive}|boolean|DomTarget|*} [options]
   * @param {DomTarget} [options.context=this]
   * @param {boolean} [options.capture=false]
   * @param {boolean} [options.once=false]
   * @param {boolean} [options.passive=false]
   */
  on(eventName, callback, options = {}) {
    if(typeof options === 'boolean') {
      options = { capture : options }
    }
    else if(options instanceof DomTarget) {
      options = { context : options }
    }
    const context = options.context || this
    const key = EVENT_KEY_PREFIX + eventName
    if(!context.__handlers) {
      context.__handlers = new Map
    }
    let listeners = context.__handlers.get(key)
    listeners || context.__handlers.set(key, listeners = new Map)
    if(!listeners.has(callback)) {
      const listener = event => {
        options.once && listeners.delete(callback)
        callback.call(context, event, get(event.target))
      }
      listener.__target = this.node
      listener.__options = options
      listeners.set(callback, listener)
      this.node.addEventListener(eventName, listener, {
        capture : options.capture || false,
        once : options.once || false,
        passive : options.passive || false,
      })
    }
  }

  /**
   * @param {string} eventName
   * @param {function} callback
   * @param {{context,capture}|boolean|DomTarget|*} [options]
   * @param {DomTarget} [options.context=this]
   * @param {boolean} [options.capture=false]
   */
  off(eventName, callback, options = {}) {
    if(typeof options === 'boolean') {
      options = { capture : options }
    }
    else if(options instanceof DomTarget) {
      options = { context : options }
    }
    const context = options.context || this
    const key = EVENT_KEY_PREFIX + eventName
    let listeners = context.__handlers && context.__handlers.get(key)
    if(listeners && listeners.has(callback)) {
      this.node.removeEventListener(eventName, listeners.get(callback), {
        capture : options.capture,
      })
      listeners.delete(callback)
      listeners.size || context.__handlers.delete(key)
    }
  }

  /**
   * @param {string} [eventName]
   */
  removeAllListeners(eventName) {
    if(!this.__handlers) {
      return
    }
    const key = eventName && EVENT_KEY_PREFIX + eventName
    const entries = key?
      [[key, this.__handlers.get(key)]] :
      this.__handlers.entries()
    for(const [key, listeners] of entries) {
      if(typeof key === 'string' && key.startsWith(EVENT_KEY_PREFIX)) {
        const eventName = key.slice(EVENT_KEY_PREFIX.length)
        for(const listener of listeners.values()) {
          listener.__target.removeEventListener(eventName, listener, {
            capture : listener.__options.capture,
          })
        }
        listeners.clear()
        this.__handlers.delete(key)
      }
    }
  }

  /**
   * Destroy this instance
   */
  destroy() {
    this.removeAllListeners()
    if(this.__handlers && this.__handlers.size) {
      console.warn('Memory leak: %d handlers are not removed', this.__handlers.size)
      console.log(this, Array.from(this.__handlers.entries()))
      this.__handlers.clear()
    }
    this.__handlers = null
    super.destroy()
  }

  static defineEvent(type) {
    // todo
  }

  /**
   * @param {string} request
   * @param {RequestInit} init
   * @returns {Promise<any>}
   */
  async fetch(request, init) {
    const res = await window.fetch(request, init)
    if(!res.ok) {
      throw Error(res.statusText)
    }
    return res.json()
  }

  /**
   * @param {string} request
   * @returns {Promise<any>}
   */
  async get(request) {
    return this.fetch(request, {
      headers : { 'Accept' : JSON_MIME_TYPE },
    })
  }

  /**
   * @param {string} url
   * @param {any} data
   * @returns {Promise<any>}
   */
  async post(url, data) {
    const init = {
      method : 'POST',
      headers : {
        'Accept' : JSON_MIME_TYPE,
        'Content-Type' : JSON_MIME_TYPE,
      },
    }
    if(typeof data !== 'undefined') {
      init.body = JSON.stringify(data)
    }
    return this.fetch(url, init)
  }
}

function get(target) {
  if(!target) {
    return null
  }
  switch(target.nodeType) {
    case Node.ELEMENT_NODE:
      return DomTarget.DomElem.get(target)
    case Node.DOCUMENT_NODE:
      return DomTarget.DomDoc.get(target)
    default:
      return DomTarget.Win.get(target)
  }
}

/**
 * type : [constructor, bubbles, cancelable]
 */
DomTarget.events = {
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

/**
 * todo remove handlers on destroy
 */
for(const type of Object.keys(DomTarget.events)) {
  const name = 'on' + type
  Object.defineProperty(DomTarget.prototype, name, {
    configurable : true,
    /**
     * @param {function|null} callback
     */
    set(callback) {
      this.node[name] = callback && (event => {
        callback.call(this, event, DomTarget.get(event.target))
      })
    },
    /**
     * @returns {function|null}
     */
    get() {
      return this.node[name]
    },
  })
}

const JSON_MIME_TYPE = 'application/json'
