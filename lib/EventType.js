const window = require('xwindow')
const { HTMLElement } = window

class EventType
{
  /**
   * @param {ElemType} elem
   * @param {string} name
   * @return {function|null}
   */
  static get(elem, name) {
    return elem.vnode[name] || null
  }

  /**
   * @param {ElemType} elem
   * @param {string} name
   * @param {function|null} callback
   */
  static set(elem, name, callback) {
    if(!callback) {
      delete elem.vnode[name]
      return
    }
    elem.vnode[name] = e => {
      return callback.call(elem, e, elem.getElemByNode(e.target))
    }
  }

  /**
   * @param {ElemType} elem
   * @param {string} name
   * @param {function} callback
   */
  static update(elem, name, callback) {
    if(callback !== elem.node[name]) {
      elem.node[name] = callback
    }
  }

  /**
   * @param {ElemType} elem
   * @param {string} name
   */
  static reset(elem, name) {
    if(!elem.vnode.hasOwnProperty(name)) {
      elem.node[name] = null
    }
  }

  /**
   * @return {{string: constructor @link EventType}}
   */
  static get props() {
    if(this.__props) {
      return this.__props
    }
    const props = {}
    let type, name
    for(type in this.types) {
      name = 'on' + type
      if(name in HTMLElement.prototype) {
        props[name] = EventType
      }
    }
    return this.__props = props
  }

  static types = {
    afterprint : define(window.Event),
    auxclick : define(window.MouseEvent, true, true),
    beforematch : define(window.Event),
    beforeprint : define(window.Event),
    beforeunload : define(window.Event),
    blur : define(window.FocusEvent),
    cancel : define(window.Event, false, true),
    canplay : define(window.Event),
    canplaythrough : define(window.Event),
    change : define(window.Event, true),
    click : define(window.MouseEvent, true, true),
    close : define(window.Event),
    contextlost : define(window.Event),
    contextmenu : define(window.MouseEvent, true, true),
    contextrestored : define(window.Event),
    copy : define(window.ClipboardEvent, true, true),
    cuechange : define(window.Event),
    cut : define(window.ClipboardEvent, true, true),
    dblclick : define(window.MouseEvent, true, true),
    drag : define(window.DragEvent, true, true),
    dragend : define(window.DragEvent, true),
    dragenter : define(window.DragEvent, true, true),
    dragleave : define(window.DragEvent, true),
    dragover : define(window.DragEvent, true, true),
    dragstart : define(window.DragEvent, true, true),
    drop : define(window.DragEvent, true, true),
    durationchange : define(window.Event),
    emptied : define(window.Event),
    ended : define(window.Event),
    error : define(window.Event),
    focus : define(window.FocusEvent),
    focusin : define(window.FocusEvent, true),
    focusout : define(window.FocusEvent, true),
    formdata : define(window.FormDataEvent),
    hashchange : define(window.HashChangeEvent),
    input : define(window.InputEvent, true),
    invalid : define(window.Event, false, true),
    keydown : define(window.KeyboardEvent, true, true),
    keypress : define(window.KeyboardEvent, true, true),
    keyup : define(window.KeyboardEvent, true, true),
    languagechange : define(window.Event),
    load : define(window.Event),
    loadeddata : define(window.Event),
    loadedmetadata : define(window.Event),
    loadstart : define(window.Event),
    message : define(window.MessageEvent),
    messageerror : define(window.MessageEvent),
    mousedown : define(window.MouseEvent, true, true),
    mouseenter : define(window.MouseEvent),
    mouseleave : define(window.MouseEvent),
    mousemove : define(window.MouseEvent, true, true),
    mouseout : define(window.MouseEvent, true, true),
    mouseover : define(window.MouseEvent, true, true),
    mouseup : define(window.MouseEvent, true, true),
    offline : define(window.Event),
    online : define(window.Event),
    pagehide : define(window.PageTransitionEvent),
    pageshow : define(window.PageTransitionEvent),
    paste : define(window.ClipboardEvent, true, true),
    pause : define(window.Event),
    play : define(window.Event),
    playing : define(window.Event),
    popstate : define(window.PopStateEvent),
    progress : define(window.ProgressEvent),
    ratechange : define(window.Event),
    reset : define(window.Event, true, true),
    resize : define(window.UIEvent),
    rejectionhandled : define(window.PromiseRejectionEvent),
    scroll : define(window.Event, true),
    securitypolicyviolation : define(window.SecurityPolicyViolationEvent, true),
    seeked : define(window.Event),
    seeking : define(window.Event),
    select : define(window.UIEvent, true),
    slotchange : define(window.Event, true),
    stalled : define(window.Event),
    storage : define(window.StorageEvent),
    submit : define(window.SubmitEvent, true, true),
    suspend : define(window.Event),
    timeupdate : define(window.Event),
    toggle : define(window.Event),
    touchcancel : define(window.TouchEvent, true),
    touchend : define(window.TouchEvent, true, true),
    touchmove : define(window.TouchEvent, true, true),
    touchstart : define(window.TouchEvent, true, true),
    transitioncancel : define(window.TransitionEvent, true),
    transitionend : define(window.TransitionEvent, true, true),
    transitionrun : define(window.TransitionEvent, true),
    transitionstart : define(window.TransitionEvent, true),
    unhandledrejection : define(window.PromiseRejectionEvent),
    unload : define(window.Event),
    volumechange : define(window.Event),
    waiting : define(window.Event),
    wheel : define(window.WheelEvent, true, true),
  }
}

/**
 * @param {constructor @link Event} constructor
 * @param {boolean} bubbles
 * @param {boolean} cancelable
 * @return {{constructor, dict: {cancelable, bubbles}}}
 */
function define(constructor, bubbles, cancelable) {
  return {
    constructor,
    dict : { bubbles, cancelable },
  }
}

module.exports = EventType
