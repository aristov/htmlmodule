import window from 'xwindow'

export class EventType
{
  static ElemType

  /**
   * @param {Event|*} e
   * @param {ElemType|*} context
   */
  constructor(e, context) {
    this.nativeEvent = e
    this.currentTarget = context
  }

  /**
   * @return {ElemType|*}
   */
  get target() {
    const elem = this.currentTarget
    let node = this.nativeEvent.target
    let target = elem.getElemByNode(node)
    if(target) {
      return target
    }
    do {
      node = node.parentNode
      target = elem.getElemByNode(node)
    }
    while(node && !target)
    return target
  }

  /**
   * @return {ElemType|*|null}
   */
  get relatedTarget() {
    const node = this.nativeEvent.relatedTarget
    return node && this.currentTarget.rootElem.getElemByNode(node)
  }

  /**
   * @return {ElemType|*|null}
   */
  get submitter() {
    const node = this.nativeEvent.submitter
    return node && this.currentTarget.getElemByNode(node)
  }

  /**
   * @param {ElemType} elem
   * @param {string} name
   * @return {function|null}
   */
  static get(elem, name) {
    return elem.node[name]
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
      const event = new EventType(e, elem)
      return callback.call(elem, event, elem.getElemByNode(e.target))
    }
  }

  /**
   * @param {ElemType} elem
   * @param {string} name
   * @param {function} callback
   */
  static update(elem, name, callback) {
    elem.node[name] = callback
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
  static types = {
    afterprint : define(window.Event),
    animationcancel : define(window.AnimationEvent, true),
    animationend : define(window.AnimationEvent, true),
    animationiteration : define(window.AnimationEvent, true),
    animationstart : define(window.AnimationEvent, true),
    auxclick : define(window.MouseEvent, true, true),
    beforeinput : define(window.Event, true, true),
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
    gotpointercapture : define(window.PointerEvent, true),
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
    lostpointercapture : define(window.PointerEvent, true),
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
    pointercancel : define(window.PointerEvent, true),
    pointerdown : define(window.PointerEvent, true, true),
    pointerenter : define(window.PointerEvent),
    pointerleave : define(window.PointerEvent),
    pointermove : define(window.PointerEvent, true, true),
    pointerout : define(window.PointerEvent, true, true),
    pointerover : define(window.PointerEvent, true, true),
    pointerrawupdate : define(window.PointerEvent, true),
    pointerup : define(window.PointerEvent, true, true),
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

  static props = {}

  static {
    let type, prop
    for(type in this.types) {
      prop = 'on' + type
      if(prop in window.HTMLElement.prototype) {
        this.props[prop] = EventType
      }
    }
  }

  static members = {
    AT_TARGET : true,
    BUBBLING_PHASE : true,
    CAPTURING_PHASE : true,
    DOM_DELTA_LINE : true,
    DOM_DELTA_PAGE : true,
    DOM_DELTA_PIXEL : true,
    DOM_KEY_LOCATION_LEFT : true,
    DOM_KEY_LOCATION_NUMPAD : true,
    DOM_KEY_LOCATION_RIGHT : true,
    DOM_KEY_LOCATION_STANDARD : true,
    NONE : true,
    altKey : true,
    altitudeAngle : true,
    animationName : true,
    azimuthAngle : true,
    blockedURI : true,
    bubbles : true,
    button : true,
    buttons : true,
    cancelable : true,
    changedTouches : true,
    charCode : true,
    clientX : true,
    clientY : true,
    clipboardData : true,
    code : true,
    columnNumber : true,
    composed : true,
    composedPath : false,
    ctrlKey : true,
    data : true,
    dataTransfer : true,
    defaultPrevented : true,
    deltaMode : true,
    deltaX : true,
    deltaY : true,
    deltaZ : true,
    detail : true,
    disposition : true,
    documentURI : true,
    effectiveDirective : true,
    elapsedTime : true,
    eventPhase : true,
    formData : true,
    getCoalescedEvents : false,
    getModifierState : false,
    getPredictedEvents : false,
    getTargetRanges : false,
    height : true,
    inputType : true,
    isComposing : true,
    isPrimary : true,
    isTrusted : true,
    key : true,
    keyCode : true,
    lastEventId : true,
    layerX : true,
    layerY : true,
    lengthComputable : true,
    lineNumber : true,
    loaded : true,
    location : true,
    metaKey : true,
    movementX : true,
    movementY : true,
    newURL : true,
    newValue : true,
    offsetX : true,
    offsetY : true,
    oldURL : true,
    oldValue : true,
    origin : true,
    originalPolicy : true,
    pageX : true,
    pageY : true,
    path : true,
    persisted : true,
    pointerId : true,
    pointerType : true,
    ports : true,
    pressure : true,
    preventDefault : false,
    promise : true,
    propertyName : true,
    pseudoElement : true,
    reason : true,
    referrer : true,
    repeat : true,
    sample : true,
    screenX : true,
    screenY : true,
    shiftKey : true,
    source : true,
    sourceCapabilities : true,
    sourceFile : true,
    state : true,
    statusCode : true,
    stopImmediatePropagation : false,
    stopPropagation : false,
    storageArea : true,
    tangentialPressure : true,
    targetTouches : true,
    tiltX : true,
    tiltY : true,
    timeStamp : true,
    total : true,
    touches : true,
    twist : true,
    type : true,
    url : true,
    userActivation : true,
    view : true,
    violatedDirective : true,
    wheelDelta : true,
    wheelDeltaX : true,
    wheelDeltaY : true,
    which : true,
    width : true,
    x : true,
    y : true,
  }

  static {
    let desc
    for(const name in this.members) {
      desc = this.members[name] ? {
        get() {
          return this.nativeEvent[name]
        },
      } : {
        value(...args) {
          return this.nativeEvent[name](...args)
        },
      }
      Object.defineProperty(this.prototype, name, desc)
    }
  }
}

/**
 * @param {constructor @link Event} constructor
 * @param {boolean} [bubbles=false]
 * @param {boolean} [cancelable=false]
 * @return {{constructor, dict: {cancelable, bubbles}}}
 */
function define(constructor, bubbles = false, cancelable = false) {
  return {
    constructor,
    dict : { bubbles, cancelable },
  }
}
