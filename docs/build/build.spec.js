/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/*!******************!*\
  !*** multi spec ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./docs/spec */338);


/***/ },

/***/ 1:
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _nodeinit = __webpack_require__(/*! ./nodeinit */ 2);

	Object.keys(_nodeinit).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function () {
	      return _nodeinit[key];
	    }
	  });
	});

	var _domassembler = __webpack_require__(/*! ./domassembler */ 3);

	Object.keys(_domassembler).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function () {
	      return _domassembler[key];
	    }
	  });
	});

	var _htmlassembler = __webpack_require__(/*! ./htmlassembler */ 4);

	Object.keys(_htmlassembler).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function () {
	      return _htmlassembler[key];
	    }
	  });
	});

	var _xmldom = __webpack_require__(/*! ./xmldom */ 5);

	Object.keys(_xmldom).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function () {
	      return _xmldom[key];
	    }
	  });
	});

	var _htmldom = __webpack_require__(/*! ./htmldom */ 6);

	Object.keys(_htmldom).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function () {
	      return _htmldom[key];
	    }
	  });
	});

/***/ },

/***/ 2:
/*!*************************!*\
  !*** ./lib/nodeinit.js ***!
  \*************************/
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NodeInit = NodeInit;
	/**
	 * Converts any non-dictionary object argument to a `NodeInit` dictionary object
	 * with a `children` property assigned to the passed object
	 * @function NodeInit
	 * @param {*|{}} [init] Various init types
	 * @return {{children:*}|initial} `NodeInit` dictionary object
	 */
	function NodeInit(init) {
	    if (init && init.constructor !== Object) {
	        return { children: init };
	    }
	    return init;
	}

/***/ },

/***/ 3:
/*!*****************************!*\
  !*** ./lib/domassembler.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DOMAssembler = exports.XML_NS_URI = undefined;

	var _nodeinit = __webpack_require__(/*! ./nodeinit */ 2);

	const { isArray } = Array;
	const { document, Element } = window;

	/**
	 * XML namespace
	 * - provides `Element` DOM interface
	 * - https://www.w3.org/1999/xml
	 * @const
	 */
	const XML_NS_URI = exports.XML_NS_URI = 'https://www.w3.org/1999/xml';

	/**
	 * - Assembler for DOM `Element`
	 * - `Document.createElementNS` functionality wrapper
	 * - Provides built-in and adapted interfaces for `Element` initialization
	 */
	class DOMAssembler {
	    /**
	     * Assign given element to assembler instance
	     * @param {Element} element node to assign
	     */
	    set element(element) {
	        if (element instanceof Element) {
	            /**
	             * Node, currently assigned to the assembler instance
	             * @type {Element}
	             */
	            this.node = element;
	        } else throw Error('This is not Element');
	    }

	    /**
	     * Get the assigned element
	     * @return {Element} assigned node
	     */
	    get element() {
	        if (this.node) return this.node;else throw Error('No element assigned');
	    }

	    /**
	     * todo thinkme: define as method? if(init) this.init(NodeInit(init), ...initlist);
	     * Initialize the element with defined properties
	     * @param {{}} init initializing dictionary object
	     */
	    set init(init) {
	        const element = this.element;
	        for (let prop in init) {
	            const value = init[prop];
	            if (value !== undefined) {
	                if (prop in this) this[prop] = value;else if (prop in element) element[prop] = value;
	            }
	        }
	    }

	    /**
	     * Set attributes on the element
	     * @param {{}} attrset dictionary object
	     */
	    set attrset(attrset) {
	        const element = this.element;
	        for (let name in attrset) {
	            const value = attrset[name];
	            if (typeof value === 'string') {
	                element.setAttribute(name, value);
	            }
	        }
	    }

	    /**
	     * Append children to the element
	     * - Supports arrays and nested arrays, single DOM nodes and strings as `Text` nodes
	     * @param {Node|String|DOMAssembler|Array} [children] child node or string or assembler instance or array of listed
	     */
	    set children(children) {
	        if (isArray(children)) {
	            children.forEach(child => this.children = child);
	        } else if (children) {
	            const child = typeof children === 'string' ? document.createTextNode(children) : children instanceof DOMAssembler ? // todo add spec
	            children.element : children;
	            this.element.appendChild(child);
	        }
	    }

	    /**
	     * Create the specified element and initialize it by a given property set
	     * @param {String} tagName
	     * @param {{}} [init]
	     * @returns {Element} created and initialized DOM `Element`
	     */
	    createElement(tagName, init) {
	        const { namespaceURI } = this.constructor;
	        this.element = document.createElementNS(namespaceURI, tagName);
	        if (init) this.init = (0, _nodeinit.NodeInit)(init);
	        return this.element;
	    }

	    /**
	     * Create elements in XML namespace
	     * @return {String}
	     */
	    static get namespaceURI() {
	        return XML_NS_URI;
	    }
	}

	exports.DOMAssembler = DOMAssembler;
	Object.defineProperty(DOMAssembler.prototype, 'node', { writable: true, value: null });

/***/ },

/***/ 4:
/*!******************************!*\
  !*** ./lib/htmlassembler.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HTMLAssembler = exports.XHTML_NS_URI = undefined;

	var _domassembler = __webpack_require__(/*! ./domassembler */ 3);

	const { assign } = Object;

	/**
	 * XHTML namespace
	 * - provides all inherited from `HTMLElement` DOM interfaces
	 * - https://www.w3.org/1999/xhtml
	 * @const
	 */
	const XHTML_NS_URI = exports.XHTML_NS_URI = 'http://www.w3.org/1999/xhtml';

	/**
	 * - Assembler for DOM `HTMLElement`
	 * - `Document.createElement` functionality wrapper
	 * - Provides built-in and adapted interfaces for `HTMLElement` initialization
	 */
	class HTMLAssembler extends _domassembler.DOMAssembler {
	  /**
	   * Assign custom `data-` attributes to the element
	   * @param {{}} dataset declaration dictionary object
	   */
	  set dataset(dataset) {
	    assign(this.element.dataset, dataset);
	  }

	  /**
	   * Assign CSS style declaration to the element
	   * @param {CSSStyleDeclaration} style declaration dictionary object
	   */
	  set style(style) {
	    assign(this.element.style, style);
	  }

	  /**
	   * Create elements in XHTML namespace
	   * @return {String}
	   * @override
	   */
	  static get namespaceURI() {
	    return XHTML_NS_URI;
	  }
	}
	exports.HTMLAssembler = HTMLAssembler;

/***/ },

/***/ 5:
/*!***********************!*\
  !*** ./lib/xmldom.js ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.xmldom = xmldom;
	exports.element = element;
	exports.text = text;
	exports.comment = comment;

	var _domassembler = __webpack_require__(/*! ./domassembler */ 3);

	const { document } = window;

	const assembler = new _domassembler.DOMAssembler();

	/**
	 * Assembles the specified `Element` DOM node
	 *
	 * Provides the `Element` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/xml/#element-element)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/XML/Element)
	 * - [MSDN API reference](https://msdn.microsoft.com/en-us/library/hh869681.aspx)
	 *
	 * @function xmldom
	 * @param {String} tagName `Element` tag name
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {{}} [init.attrset] `Element` attributes set as dictionary object
	 * @param {String|Node|DOMAssembler|Array} [init.children] `Element` child nodes
	 * @param {String} [init.className] `Element` class name; reflects "class" attribute
	 * @param {String} [init.id] `Element` unique identifier; reflects "id" content attribute
	 * @param {String} [init.textContent] Paste string data as a single text node
	 * @return {Element}
	 */
	function xmldom(tagName, init) {
	  return assembler.createElement(tagName, init);
	}

	/**
	 * Assembles a generic "element" instance of the `Element` DOM interface.
	 * @param {{}} [init] `NodeInit` dictionary
	 * @returns {Element}
	 */
	function element(init) {
	  return xmldom('element', init);
	}

	/**
	 * Creates a `Text` DOM node.
	 * @param {String} data Node data
	 * @returns {Text}
	 */
	function text(data) {
	  return document.createTextNode(data);
	}

	/**
	 * Creates a `Comment` DOM node.
	 * @param {String} data Node data
	 * @returns {Comment}
	 */
	function comment(data) {
	  return document.createComment(data);
	}

/***/ },

/***/ 6:
/*!************************!*\
  !*** ./lib/htmldom.js ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.htmldom = htmldom;
	exports.a = a;
	exports.abbr = abbr;
	exports.address = address;
	exports.area = area;
	exports.article = article;
	exports.aside = aside;
	exports.audio = audio;
	exports.b = b;
	exports.base = base;
	exports.bdi = bdi;
	exports.bdo = bdo;
	exports.blockquote = blockquote;
	exports.body = body;
	exports.br = br;
	exports.button = button;
	exports.canvas = canvas;
	exports.caption = caption;
	exports.cite = cite;
	exports.code = code;
	exports.col = col;
	exports.colgroup = colgroup;
	exports.data = data;
	exports.datalist = datalist;
	exports.dd = dd;
	exports.del = del;
	exports.details = details;
	exports.dfn = dfn;
	exports.dialog = dialog;
	exports.div = div;
	exports.dl = dl;
	exports.dt = dt;
	exports.em = em;
	exports.embed = embed;
	exports.fieldset = fieldset;
	exports.figcaption = figcaption;
	exports.figure = figure;
	exports.footer = footer;
	exports.form = form;
	exports.h1 = h1;
	exports.h2 = h2;
	exports.h3 = h3;
	exports.h4 = h4;
	exports.h5 = h5;
	exports.h6 = h6;
	exports.head = head;
	exports.header = header;
	exports.hgroup = hgroup;
	exports.hr = hr;
	exports.html = html;
	exports.i = i;
	exports.iframe = iframe;
	exports.img = img;
	exports.input = input;
	exports.ins = ins;
	exports.kbd = kbd;
	exports.label = label;
	exports.legend = legend;
	exports.li = li;
	exports.link = link;
	exports.main = main;
	exports.map = map;
	exports.mark = mark;
	exports.menu = menu;
	exports.menuitem = menuitem;
	exports.meta = meta;
	exports.meter = meter;
	exports.nav = nav;
	exports.noscript = noscript;
	exports.object = object;
	exports.ol = ol;
	exports.optgroup = optgroup;
	exports.option = option;
	exports.output = output;
	exports.p = p;
	exports.param = param;
	exports.picture = picture;
	exports.pre = pre;
	exports.progress = progress;
	exports.q = q;
	exports.rp = rp;
	exports.rt = rt;
	exports.ruby = ruby;
	exports.s = s;
	exports.samp = samp;
	exports.script = script;
	exports.section = section;
	exports.select = select;
	exports.slot = slot;
	exports.small = small;
	exports.source = source;
	exports.span = span;
	exports.strong = strong;
	exports.style = style;
	exports.sub = sub;
	exports.summary = summary;
	exports.sup = sup;
	exports.table = table;
	exports.tbody = tbody;
	exports.td = td;
	exports.template = template;
	exports.textarea = textarea;
	exports.tfoot = tfoot;
	exports.th = th;
	exports.thead = thead;
	exports.time = time;
	exports.title = title;
	exports.tr = tr;
	exports.track = track;
	exports.u = u;
	exports.ul = ul;
	exports.variable = variable;
	exports.video = video;
	exports.wbr = wbr;

	var _htmlassembler = __webpack_require__(/*! ./htmlassembler */ 4);

	const assembler = new _htmlassembler.HTMLAssembler();

	/**
	 * Assembles the specified `HTMLElement` node
	 *
	 * Provides `HTMLElement` interface and all HTML DOM interfaces which inherit from it
	 *
	 * • [w3](https://www.w3.org/TR/html/single-page.html#htmlelement-htmlelement)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
	 * • [msdn api](https://msdn.microsoft.com/en-us/library/hh869697.aspx)
	 *
	 * @function htmldom
	 * @param {String} tagName element tag name
	 * @param {NodeInit} [init] `NodeInit` dictionary
	 * @param {{}} [init.attrset] `HTMLElement` attributes set as a dictionary object
	 * @param {{}} [init.dataset] `HTMLElement` dataset as a dictionary object
	 * @param {{}} [init.style] `HTMLElement` style as a dictionary object (CSSStyleDeclaration)
	 * @param {String|Node|DOMAssembler|Array} [init.children] `HTMLElement` child nodes
	 * @param {String} [init.accessKey] Specify an access key for the element
	 * @param {String} [init.className] `Element` class name; reflects "class" attribute
	 * @param {String} [init.contentEditable] Specify whether or not the element is editable
	 * @param {String} [init.dir] Specify a text writing directionality of the content of the current element
	 * @param {Boolean} [init.hidden] Specify the visibility state of the element
	 * @param {String} [init.id] `Element` unique identifier; reflects "id" content attribute
	 * @param {String} [init.innerHTML] Paste markup string as an inner DOM structure
	 * @param {String} [init.innerText] Paste string data as a single text node
	 * @param {String} [init.lang] Specify a human-language of the element and its contents
	 * @param {Number} [init.tabIndex] Specify a focusability of the element
	 * @param {String} [init.textContent] Paste string data as a single text node
	 * @param {String} [init.title] Specify title of the element; represents a browser title tooltip content
	 * @param {Function} [init.onabort] Fired at the Window when the download was aborted by the user
	 * @param {Function} [init.onblur] Fired at nodes when they stop being focused
	 * @param {Function} [init.oncancel] Fired at dialog elements when they are canceled by the user (e.g. by pressing the Escape key)
	 * @param {Function} [init.onchange] Fired at controls when the user commits a value change (see also the input event)
	 * @param {Function} [init.onclick] Normally a mouse event; also synthetically fired at an element before its activation behavior is run, when an element is activated from a non-pointer input device (e.g. a keyboard)
	 * @param {Function} [init.onclose] Fired at dialog elements when they are closed, and at WebSocket elements when the connection is terminated
	 * @param {Function} [init.oncontextmenu] Fired at elements when the user requests their context menu
	 * @param {Function} [init.oncuechange] One or more cues in the track have become active or stopped being active.
	 * @param {Function} [init.ondblclick] Fires on double click
	 * @param {Function} [init.ondurationchange] The duration attribute has just been updated.
	 * @param {Function} [init.onemptied] networkState is NETWORK_EMPTY; all the IDL attributes are in their initial states.
	 * @param {Function} [init.onended] currentTime equals the end of the media resource; ended is true.
	 * @param {Function} [init.onerror] Fired when unexpected errors occur (e.g. networking errors, script errors, decoding errors)
	 * @param {Function} [init.onfocus] Fired at nodes gaining focus
	 * @param {Function} [init.oninput] Fired at controls when the user changes the value
	 * @param {Function} [init.oninvalid] Fired at controls during form validation if they do not satisfy their constraints
	 * @param {Function} [init.onkeydown] A user agent dispatches this event when a key is pressed down
	 * @param {Function} [init.onkeypress] A user agent dispatches this event when a key is pressed down, if and only if that key normally produces a character value
	 * @param {Function} [init.onkeyup] A user agent dispatches this event when a key is released
	 * @param {Function} [init.onload] Fired at the Window when the document has finished loading; fired at an element containing a resource (e.g. img, embed) when its resource has finished loading
	 * @param {Function} [init.onloadend] Fired at img elements after a successful load
	 * @param {Function} [init.onloadstart] Fired at img elements when a load begins
	 * @param {Function} [init.onmousedown] A user agent dispatches this event when a pointing device button is pressed over an element
	 * @param {Function} [init.onmouseenter] A user agent dispatches this event when a pointing device is moved onto the boundaries of an element or one of its descendent elements
	 * @param {Function} [init.onmouseleave] A user agent dispatches this event when a pointing device is moved off of the boundaries of an element and all of its descendent elements
	 * @param {Function} [init.onmousemove] A user agent dispatches this event when a pointing device is moved while it is over an element
	 * @param {Function} [init.onmouseout] A user agent dispatches this event when a pointing device is moved off of the boundaries of an element
	 * @param {Function} [init.onmouseover] A user agent dispatches this event when a pointing device is moved onto the boundaries of an element
	 * @param {Function} [init.onmouseup] A user agent dispatches this event when a pointing device button is released over an element
	 * @param {Function} [init.onwheel] A user agent dispatches this event when a mouse wheel has been rotated around any axis, or when an equivalent input device (such as a mouse-ball, certain tablets or touchpads, etc.) has emulated such an action
	 * @param {Function} [init.onpause] The element has been paused. Fired after the pause() method has returned
	 * @param {Function} [init.onplay] The element is no longer paused. Fired after the play() method has returned, or when the autoplay attribute has caused playback to begin
	 * @param {Function} [init.onplaying] Playback is ready to start after having been paused or delayed due to lack of media data
	 * @param {Function} [init.onprogress] Fired at img elements during a CORS-same-origin image load
	 * @param {Function} [init.onratechange] Either the defaultPlaybackRate or the playbackRate attribute has just been updated
	 * @param {Function} [init.onreset] Fired at a form element when it is reset
	 * @param {Function} [init.onresize] Fired at the Window when the viewport is resized
	 * @param {Function} [init.onscroll] Fired at the Document or element when the viewport or element is scrolled, respectively
	 * @param {Function} [init.onseeked] The seeking IDL attribute changed to false after the current playback position was changed
	 * @param {Function} [init.onseeking] The seeking IDL attribute changed to true, and the user agent has started seeking to a new position
	 * @param {Function} [init.onselect] Fired at form controls when their text selection is adjusted (whether by an API or by the user)
	 * @param {Function} [init.onshow] Fired at a menu element when it is shown as a context menu
	 * @param {Function} [init.onstalled] The user agent is trying to fetch media data, but data is unexpectedly not forthcoming
	 * @param {Function} [init.onsubmit] Fired at a form element when it is submitted
	 * @param {Function} [init.onsuspend] The user agent is intentionally not currently fetching media data
	 * @param {Function} [init.ontimeupdate] The current playback position changed as part of normal playback or in an especially interesting way, for example discontinuously
	 * @param {Function} [init.ontoggle] Fired at details elements when they open or close
	 * @param {Function} [init.onvolumechange] Either the volume attribute or the muted attribute has changed. Fired after the relevant attribute's setter has returned
	 * @param {Function} [init.onwaiting] Playback has stopped because the next frame is not available, but the user agent expects that frame to become available in due course
	 * @return {HTMLElement}
	 */
	function htmldom(tagName, init) {
	  return assembler.createElement(tagName, init);
	};

	/**
	 * [The `a` element](https://html.spec.whatwg.org/#the-a-element)
	 *  - If the `a` element has an `href` attribute, then it represents a hyperlink (a hypertext anchor) labeled by its contents.
	 *  - If the `a` element has no `href` attribute, then the element represents a placeholder for where a link might otherwise have been placed, if it had been relevant, consisting of just the element's contents.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-a-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
	 * • [msdn api](https://msdn.microsoft.com/en-us/library/hh869682.aspx)
	 *
	 * @function a
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {String} [init.href] Address of the hyperlink
	 * @param {String} [init.target] Browsing context for hyperlink navigation
	 * @param {String} [init.download] Whether to download the resource instead of navigating to it, and its file name if so
	 * @param {String} [init.ping] URLs to ping
	 * @param {String} [init.rel] Relationship between the location in the document containing the hyperlink and the destination resource
	 * @param {String} [init.hreflang] Language of the linked resource
	 * @param {String} [init.type] Hint for the type of the referenced resource
	 * @param {String} [init.referrerPolicy] Determines the referrer policy for fetches initiated by the element
	 * @return {HTMLAnchorElement}
	 */
	function a(init) {
	  return htmldom('a', init);
	}

	/**
	 * [The `abbr` element](https://html.spec.whatwg.org/#the-abbr-element)
	 * represents an abbreviation or acronym, optionally with its expansion.
	 * The `title` attribute may be used to provide an expansion of the abbreviation.
	 * The attribute, if specified, must contain an expansion of the abbreviation, and nothing else.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-abbr-element)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr)
	 *
	 * @function abbr
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {String} [init.title] Special semantics: full term or expansion of abbreviation
	 * @return {HTMLElement}
	 */
	function abbr(init) {
	  return htmldom('abbr', init);
	}

	/**
	 * [The `address` element](https://html.spec.whatwg.org/#the-address-element)
	 * represents the contact information for its nearest `article` or `body` element ancestor.
	 * If that is the `body` element, then the contact information applies to the document as a whole.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-address-element)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address)
	 *
	 * @function address
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLElement}
	 */
	function address(init) {
	  return htmldom('address', init);
	}

	/**
	 * [The `area` element](https://html.spec.whatwg.org/#the-area-element)
	 * represents either a hyperlink with some text and a corresponding area on an image map,
	 * or a dead area on an image map.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-area-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAreaElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area)
	 *
	 * @function area
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {String} [init.alt] Replacement text for use when images are not available
	 * @param {String} [init.coords] Coordinates for the shape to be created in an image map
	 * @param {String} [init.shape] The kind of shape to be created in an image map
	 * @param {String} [init.href] Address of the hyperlink
	 * @param {String} [init.target] Browsing context for hyperlink navigation
	 * @param {String} [init.download] Whether to download the resource instead of navigating to it, and its file name if so
	 * @param {String} [init.ping] URLs to ping
	 * @param {String} [init.rel] Relationship between the location in the document containing the hyperlink and the destination resource
	 * @return {HTMLAreaElement}
	 */
	function area(init) {
	  return htmldom('area', init);
	}

	/**
	 * [The `article` element](https://html.spec.whatwg.org/#the-article-element)
	 * represents a complete, or self-contained, composition in a document, page, application,
	 * or site and that is, in principle, independently distributable or reusable, e.g. in syndication.
	 * This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment,
	 * an interactive widget or gadget, or any other independent item of content.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-article-element)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article)
	 *
	 * @function article
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLElement}
	 */
	function article(init) {
	  return htmldom('article', init);
	}

	/**
	 * [The `aside` element](https://html.spec.whatwg.org/#the-aside-element)
	 * represents a section of a page that consists of content that is tangentially related to the content around the aside element,
	 * and which could be considered separate from that content.
	 * Such sections are often represented as sidebars in printed typography.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-aside-element)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside)
	 *
	 * @function aside
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLElement}
	 */
	function aside(init) {
	  return htmldom('aside', init);
	}

	/**
	 * [The `audio` element](https://html.spec.whatwg.org/#the-audio-element)
	 * represents a sound or audio stream.
	 * Content may be provided inside the `audio` element.
	 * User agents should not show this content to the user;
	 * it is intended for older Web browsers which do not support audio, so that legacy audio plugins can be tried,
	 * or to show text to the users of these older browsers informing them of how to access the audio contents.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-audio-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)
	 *
	 * @function audio
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {String} [init.src] Address of the resource
	 * @param {String} [init.crossorigin] How the element handles crossorigin requests
	 * @param {String} [init.preload] Hints how much buffering the media resource will likely need
	 * @param {Boolean} [init.autoplay] Hint that the media resource can be started automatically when the page is loaded
	 * @param {Boolean} [init.loop] Whether to loop the media resource
	 * @param {Boolean} [init.muted] Whether to mute the media resource by default
	 * @param {Boolean} [init.controls] Show user agent controls
	 * @return {HTMLAudioElement}
	 */
	function audio(init) {
	  return htmldom('audio', init);
	}

	/**
	 * [The `b` element](https://html.spec.whatwg.org/#the-b-element)
	 * represents a span of text to which attention is being drawn
	 * for utilitarian purposes without conveying any extra importance
	 * and with no implication of an alternate voice or mood,
	 * such as key words in a document abstract, product names in a review,
	 * actionable words in interactive text-driven software, or an article lede.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-b-element)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b)
	 *
	 * @function b
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLElement}
	 */
	function b(init) {
	  return htmldom('b', init);
	}

	/**
	 * [The `base` element](https://html.spec.whatwg.org/#the-base-element)
	 * represents a span of text that is to be isolated from its surroundings for the purposes of bidirectional text formatting.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-base-element)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base)
	 *
	 * @function base
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {String} [init.dir] special semantics
	 * @return {HTMLElement}
	 */
	function base(init) {
	  return htmldom('base', init);
	}

	/**
	 * [The `bdi` element](https://html.spec.whatwg.org/#the-bdi-element)
	 * represents a span of text that is to be isolated from its surroundings for the purposes of bidirectional text formatting.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-bdi-element)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi)
	 *
	 * @function bdi
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {String} [init.dir] special semantics
	 * @return {HTMLElement}
	 */
	function bdi(init) {
	  return htmldom('bdi', init);
	}

	/**
	 * [The `bdo` element](https://html.spec.whatwg.org/#the-bdo-element)
	 * represents explicit text directionality formatting control for its children.
	 * It allows authors to override the Unicode bidirectional algorithm by explicitly specifying a direction override.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-bdo-element)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdo)
	 *
	 * @function bdo
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {String} [init.dir] special semantics: `rtl` or `ltr` values allowed only
	 * @return {HTMLElement}
	 */
	function bdo(init) {
	  return htmldom('bdo', init);
	}

	/**
	 * [The `blockquote` element](https://html.spec.whatwg.org/#the-blockquote-element)
	 * represents a section that is quoted from another source.
	 * Content inside a blockquote must be quoted from another source,
	 * whose address, if it has one, may be cited in the cite attribute.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-blockquote-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLQuoteElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote)
	 *
	 * @function blockquote
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {String} [init.cite] Link to the source of the quotation or more information about the edit
	 * @return {HTMLQuoteElement}
	 */
	function blockquote(init) {
	  return htmldom('blockquote', init);
	}

	/**
	 * [The `body` element](https://html.spec.whatwg.org/#the-body-element)
	 * represents the main content of the document.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-body-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLBodyElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body)
	 *
	 * @function body
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {Function} [init.onafterprint] Fired at the Window after printing
	 * @param {Function} [init.onbeforeprint] Fired at the Window before printing
	 * @param {Function} [init.onbeforeunload] Fired at the Window when the page is about to be unloaded, in case the page would like to show a warning prompt
	 * @param {Function} [init.onhashchange] Fired at the Window when the fragment part of the document's URL changes
	 * @param {Function} [init.onlanguagechange] Fired at the global scope object when the user's preferred languages change
	 * @param {Function} [init.onmessage] Fired at an object when it receives a message
	 * @param {Function} [init.onoffline] Fired at the global scope object when the network connections fails
	 * @param {Function} [init.ononline] Fired at the global scope object when the network connections returns
	 * @param {Function} [init.onpagehide] Fired at the Window when the page's entry in the session history stops being the current entry
	 * @param {Function} [init.onpageshow] Fired at the Window when the page's entry in the session history becomes the current entry
	 * @param {Function} [init.onpopstate] Fired at the Window when the user navigates the session history
	 * @param {Function} [init.onrejectionhandled] Fired at global scope objects when a previously-unhandled promise rejection becomes handled
	 * @param {Function} [init.onstorage] Fired at Window event when the corresponding localStorage or sessionStorage storage areas change
	 * @param {Function} [init.onunhandledrejection] Fired at global scope objects when a promise rejection goes unhandled
	 * @param {Function} [init.onunload] Fired at the Window object when the page is going away
	 * @return {HTMLBodyElement}
	 */
	function body(init) {
	  return htmldom('body', init);
	}

	/**
	 * [The `br` element](https://html.spec.whatwg.org/#the-br-element)
	 * represents a line break.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-br-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLBRElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br)
	 *
	 * @function br
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLBRElement}
	 */
	function br(init) {
	  return htmldom('br', init);
	}

	/**
	 * [The `button` element](https://html.spec.whatwg.org/#the-button-element)
	 * represents a button labeled by its contents.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-button-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535211.aspx)
	 *
	 * @function button
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {Boolean} [init.autofocus] Automatically focus the form control when the page is loaded
	 * @param {Boolean} [init.disabled] Whether the form control is disabled
	 * @param {String} [init.formAction] URL to use for form submission
	 * @param {String} [init.formEnctype] Form data set encoding type to use for form submission
	 * @param {String} [init.formMethod] HTTP method to use for form submission
	 * @param {Boolean} [init.formNoValidate] Bypass form control validation for form submission
	 * @param {String} [init.formTarget] Browsing context for form submission
	 * @param {String} [init.name] Name of form control to use for form submission and in the form.elements API
	 * @param {String} [init.type] Type of button
	 * @param {String} [init.value] Value to be used for form submission
	 * @param {HTMLMenuElement} [init.menu] Specifies the element's designated pop-up menu
	 * @return {HTMLButtonElement}
	 */
	function button(init) {
	  return htmldom('button', init);
	}

	/**
	 * [The `canvas` element](https://html.spec.whatwg.org/#the-canvas-element)
	 * provides scripts with a resolution-dependent bitmap canvas,
	 * which can be used for rendering graphs, game graphics, art,
	 * or other visual images on the fly.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-canvas-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas)
	 *
	 * @function canvas
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {Number} [init.width] Horizontal dimension
	 * @param {Number} [init.height] Vertical dimension
	 * @return {HTMLCanvasElement}
	 */
	function canvas(init) {
	  return htmldom('canvas', init);
	}

	/**
	 * [The `caption` element](https://html.spec.whatwg.org/#the-caption-element)
	 * represents the title of the table that is its parent,
	 * if it has a parent and that is a table element.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-caption-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableCaptionElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption)
	 *
	 * @function caption
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLTableCaptionElement}
	 */
	function caption(init) {
	  return htmldom('caption', init);
	}

	/**
	 * [The `cite` element](https://html.spec.whatwg.org/#the-cite-element)
	 * represents the title of a work (e.g. a book, a paper, an essay, a poem,
	 * a score, a song, a script, a film, a TV show, a game, a sculpture, a painting,
	 * a theatre production, a play, an opera, a musical, an exhibition, a legal case report,
	 * a computer program, etc). This can be a work that is being quoted or referenced in detail
	 * (i.e. a citation), or it can just be a work that is mentioned in passing.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-cite-element)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite)
	 *
	 * @function cite
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLElement}
	 */
	function cite(init) {
	  return htmldom('cite', init);
	}

	/**
	 * [The `code` element](https://html.spec.whatwg.org/#the-code-element)
	 * represents a fragment of computer code. This could be an XML element name,
	 * a file name, a computer program, or any other string that a computer would recognize.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-code-element)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code)
	 *
	 * @function code
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLElement}
	 */
	function code(init) {
	  return htmldom('code', init);
	}

	/**
	 * [The `col` element](https://html.spec.whatwg.org/#the-col-element)
	 * represents has a parent and that is a colgroup element that itself has a parent
	 * that is a table element, then the col element represents one or more columns
	 * in the column group represented by that colgroup.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-col-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableColElement)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535225.aspx)
	 *
	 * @function col
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {Number} [init.span] Number of columns spanned by the element
	 * @return {HTMLTableColElement}
	 */
	function col(init) {
	  return htmldom('col', init);
	}

	/**
	 * [The `colgroup` element](https://html.spec.whatwg.org/#the-colgroup-element)
	 * represents represents a group of one or more columns in the table that is its parent,
	 * if it has a parent and that is a table element.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-colgroup-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableColElement)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535225.aspx)
	 *
	 * @function colgroup
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {Number} [init.span] Number of columns spanned by the element
	 * @return {HTMLTableColElement}
	 */
	function colgroup(init) {
	  return htmldom('colgroup', init);
	}

	/**
	 * [The `data` element](https://html.spec.whatwg.org/#the-data-element)
	 * represents its contents, along with a machine-readable form
	 * of those contents in the value attribute.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-data-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDataElement)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/mt706246.aspx)
	 *
	 * @function data
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {String} [init.value] Machine-readable value
	 * @return {HTMLDataElement}
	 */
	function data(init) {
	  return htmldom('data', init);
	}

	/**
	 * [The `datalist` element](https://html.spec.whatwg.org/#the-datalist-element)
	 * represents a set of option elements that represent predefined options for other controls.
	 * In the rendering, the datalist element represents nothing and it, along with its children,
	 * should be hidden.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-datalist-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDataListElement)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/hh772925.aspx)
	 *
	 * @function datalist
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLDataListElement}
	 */
	function datalist(init) {
	  return htmldom('datalist', init);
	}

	/**
	 * [The `dd` element](https://html.spec.whatwg.org/#the-dd-element)
	 * represents the description, definition, or value,
	 * part of a term-description group in a description list (dl element).
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-datalist-element)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535234.aspx)
	 *
	 * @function dd
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLElement}
	 */
	function dd(init) {
	  return htmldom('dd', init);
	}

	/**
	 * [The `del` element](https://html.spec.whatwg.org/#the-del-element)
	 * represents a removal from the document.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-del-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLModElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535236.aspx)
	 *
	 * @function del
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {String} [init.cite] Link to the source of the quotation or more information about the edit
	 * @param {String} [init.dateTime] Date and (optionally) time of the change
	 * @return {HTMLModElement}
	 */
	function del(init) {
	  return htmldom('del', init);
	}

	/**
	 * [The `details` element](https://html.spec.whatwg.org/#the-details-element)
	 * represents a disclosure widget from which the user can obtain additional information or controls.
	 *
	 * [w3](https://www.w3.org/TR/html/interactive-elements.html#the-details-element)
	 * • [MDN elemeent reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)
	 *
	 * @function details
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {String} [init.open] Whether the details are visible
	 * @return {HTMLDetailsElement}
	 */
	function details(init) {
	  return htmldom('details', init);
	}

	/**
	 * [The `dfn` element](https://html.spec.whatwg.org/#the-dfn-element)
	 * represents the defining instance of a term. The paragraph, description list group,
	 * or section that is the nearest ancestor of the dfn element must also contain
	 * the definition(s) for the term given by the dfn element.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-dfn-element)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535237.aspx)
	 *
	 * @function dfn
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {String} [init.title] Special semantics: Full term or expansion of abbreviation
	 * @return {HTMLElement}
	 */
	function dfn(init) {
	  return htmldom('dfn', init);
	}

	/**
	 * [The `dialog` element](https://html.spec.whatwg.org/#the-dialog-element)
	 * represents a part of an application that a user interacts with to perform a task,
	 * for example a dialog box, inspector, or window.
	 *
	 * [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
	 *
	 * @function dialog
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {String} [init.open] Whether the dialog box is showing
	 * @return {HTMLDialogElement}
	 */
	function dialog(init) {
	  return htmldom('dialog', init);
	}

	/**
	 * [The `div` element](https://html.spec.whatwg.org/#the-div-element)
	 * has no special meaning at all. It represents its children.
	 * It can be used with the class, lang, and title attributes to mark up semantics
	 * common to a group of consecutive elements.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-div-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535240.aspx)
	 *
	 * @function div
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLDivElement}
	 */
	function div(init) {
	  return htmldom('div', init);
	}

	/**
	 * [The `dl` element](https://html.spec.whatwg.org/#the-dl-element)
	 * represents an association list consisting of zero or more name-value groups (a description list).
	 * A name-value group consists of one or more names (dt elements) followed by one or more values
	 * (dd elements), ignoring any nodes other than dt and dd elements.
	 * Within a single dl element, there should not be more than one dt element for each name.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-dl-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDListElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535241.aspx)
	 *
	 * @function dl
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLDListElement}
	 */
	function dl(init) {
	  return htmldom('dl', init);
	}

	/**
	 * [The `dt` element](https://html.spec.whatwg.org/#the-dt-element)
	 * represents the term, or name, part of a term-description group in a description list (dl element).
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-dt-element)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535243.aspx)
	 *
	 * @function dt
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLElement}
	 */
	function dt(init) {
	  return htmldom('dt', init);
	}

	/**
	 * [The `em` element](https://html.spec.whatwg.org/#the-em-element)
	 * represents stress emphasis of its contents.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-em-element)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535244.aspx)
	 *
	 * @function em
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLElement}
	 */
	function em(init) {
	  return htmldom('em', init);
	}

	/**
	 * [The `embed` element](https://html.spec.whatwg.org/#the-embed-element)
	 * represents provides an integration point for an external (typically non-HTML)
	 * application or interactive content.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-embed-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLEmbedElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535245.aspx)
	 *
	 * @function embed
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {String} [init.src] Address of the resource
	 * @param {String} [init.type] Type of embedded resource
	 * @param {String} [init.width] Horizontal dimension
	 * @param {String} [init.height] Vertical dimension
	 * @return {HTMLEmbedElement}
	 */
	function embed(init) {
	  return htmldom('embed', init);
	}

	/**
	 * [The `fieldset` element](https://html.spec.whatwg.org/#the-fieldset-element)
	 * represents
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-fieldset-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFieldSetElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535247.aspx)
	 *
	 * @function fieldset
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {String} [init.disabled] Whether the form control is disabled
	 * @param {String} [init.form] Associates the control with a form element
	 * @param {String} [init.name] Name of form control to use in the form.elements API
	 * @return {HTMLFieldSetElement}
	 */
	function fieldset(init) {
	  return htmldom('fieldset', init);
	}

	/**
	 * [The `figcaption` element](https://html.spec.whatwg.org/#the-figcaption-element)
	 * represents a caption or legend for the rest of the contents
	 * of the figcaption element's parent figure element, if any.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-figcaption-element)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/gg593037.aspx)
	 *
	 * @function figcaption
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLElement}
	 */
	function figcaption(init) {
	  return htmldom('figcaption', init);
	}

	/**
	 * [The `figure` element](https://html.spec.whatwg.org/#the-figure-element)
	 * represents some flow content, optionally with a caption,
	 * that is self-contained (like a complete sentence) and is typically referenced
	 * as a single unit from the main flow of the document.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-figure-element)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure)
	 *
	 * @function figure
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLElement}
	 */
	function figure(init) {
	  return htmldom('figure', init);
	}

	/**
	 * [The `footer` element](https://html.spec.whatwg.org/#the-footer-element)
	 * represents a footer for its nearest ancestor sectioning content or sectioning root element.
	 * A footer typically contains information about its section such as who wrote it,
	 * links to related documents, copyright data, and the like.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-footer-element)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/gg593039.aspx)
	 *
	 * @function footer
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLElement}
	 */
	function footer(init) {
	  return htmldom('footer', init);
	}

	/**
	 * [The `form` element](https://html.spec.whatwg.org/#the-form-element)
	 * represents a collection of form-associated elements, some of which can represent editable values that can be submitted to a server for processing.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-form-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535249.aspx)
	 *
	 * @function form
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {String} [init.acceptCharset] Character encodings to use for form submission
	 * @param {String} [init.action] URL to use for form submission
	 * @param {String} [init.autocomplete] Default setting for autofill feature for controls in the form
	 * @param {String} [init.enctype] Form data set encoding type to use for form submission
	 * @param {String} [init.method] HTTP method to use for form submission
	 * @param {String} [init.name] Name of form to use in the document.forms API
	 * @param {Boolean} [init.noValidate] Bypass form control validation for form submission
	 * @param {String} [init.target] Browsing context for form submission
	 * @return {HTMLFormElement}
	 */
	function form(init) {
	  return htmldom('form', init);
	}

	/**
	 * [The `h1`, `h2`, `h3`, `h4`, `h5`, and `h6` elements](https://html.spec.whatwg.org/#the-h1-element)
	 * represent headings for their sections.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-h1-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadingElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535253.aspx)
	 *
	 * @function h1
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLHeadingElement}
	 */
	function h1(init) {
	  return htmldom('h1', init);
	}
	/**
	 * See [h1](#h1)
	 * @function h2
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLHeadingElement}
	 */
	function h2(init) {
	  return htmldom('h2', init);
	}
	/**
	 * See [h1](#h1)
	 * @function h3
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLHeadingElement}
	 */
	function h3(init) {
	  return htmldom('h3', init);
	}
	/**
	 * See [h1](#h1)
	 * @function h4
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLHeadingElement}
	 */
	function h4(init) {
	  return htmldom('h4', init);
	}
	/**
	 * See [h1](#h1)
	 * @function h5
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLHeadingElement}
	 */
	function h5(init) {
	  return htmldom('h5', init);
	}
	/**
	 * See [h1](#h1)
	 * @function h6
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLHeadingElement}
	 */
	function h6(init) {
	  return htmldom('h6', init);
	}

	/**
	 * [The `head` element](https://html.spec.whatwg.org/#the-head-element)
	 * represents a collection of metadata for the Document.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-head-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/HTMLHeadElement)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535252.aspx)
	 *
	 * @function head
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLHeadElement}
	 */
	function head(init) {
	  return htmldom('head', init);
	}

	/**
	 * [The `header` element](https://html.spec.whatwg.org/#the-header-element)
	 * represents a group of introductory or navigational aids.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-header-element)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/gg593044.aspx)
	 *
	 * @function header
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLElement}
	 */
	function header(init) {
	  return htmldom('header', init);
	}

	/**
	 * [The `hgroup` element](https://html.spec.whatwg.org/#the-hgroup-element)
	 * represents the heading of a section, which consists
	 * of all the h1–h6 element children of the hgroup element.
	 * The element is used to group a set of h1–h6 elements when the heading has multiple levels,
	 * such as subheadings, alternative titles, or taglines.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-hgroup-element)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hgroup)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/gg593045.aspx)
	 *
	 * @function hgroup
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLElement}
	 */
	function hgroup(init) {
	  return htmldom('hgroup', init);
	}

	/**
	 * [The `hr` element](https://html.spec.whatwg.org/#the-hr-element)
	 * represents a paragraph-level thematic break, e.g. a scene change in a story,
	 * or a transition to another topic within a section of a reference book.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-hr-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHRElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535254.aspx)
	 *
	 * @function hr
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLHRElement}
	 */
	function hr(init) {
	  return htmldom('hr', init);
	}

	/**
	 * [The `html` element](https://html.spec.whatwg.org/#the-html-element)
	 * represents the root of an HTML document.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-html-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHtmlElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535255.aspx)
	 *
	 * @function html
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {String} [init.manifest] [Application cache manifest](https://html.spec.whatwg.org/#concept-appcache-manifest)
	 * @return {HTMLHtmlElement}
	 */
	function html(init) {
	  return htmldom('html', init);
	}

	/**
	 * [The `i` element](https://html.spec.whatwg.org/#the-i-element)
	 * represents a span of text in an alternate voice or mood,
	 * or otherwise offset from the normal prose in a manner indicating a different quality of text,
	 * such as a taxonomic designation, a technical term, an idiomatic phrase from another language,
	 * transliteration, a thought, or a ship name in Western texts.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-i-element)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535257.aspx)
	 *
	 * @function i
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLElement}
	 */
	function i(init) {
	  return htmldom('i', init);
	}

	/**
	 * [The `iframe` element](https://html.spec.whatwg.org/#the-iframe-element)
	 * represents a [nested browsing context](https://html.spec.whatwg.org/#nested-browsing-context).
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-iframe-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535258.aspx)
	 *
	 * @function iframe
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {String} [init.src] Address of the resource
	 * @param {String} [init.srcdoc] A document to render in the iframe
	 * @param {String} [init.name] Name of nested browsing context
	 * @param {String} [init.attrset.sandbox] Security rules for nested content
	 * @param {String} [init.allowFullScreen] Whether to allow the iframe's contents to use requestFullscreen()
	 * @param {String} [init.allowUserMedia] Whether to allow the iframe's contents to use getUserMedia()
	 * @param {String} [init.width] Horizontal dimension
	 * @param {String} [init.height] Vertical dimension
	 * @param {String} [init.referrerPolicy] Determines the referrer policy for fetches initiated by the element
	 * @return {HTMLIFrameElement}
	 */
	function iframe(init) {
	  return htmldom('iframe', init);
	}

	/**
	 * [The `img` element](https://html.spec.whatwg.org/#the-img-element)
	 * represents an image.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-img-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535259.aspx)
	 *
	 * @function img
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {String} [init.alt] Replacement text for use when images are not available
	 * @param {String} [init.src] Address of the resource
	 * @param {String} [init.srcset] Images to use in different situations (e.g. high-resolution displays, small monitors, etc)
	 * @param {String} [init.sizes] Image sizes for different page layouts
	 * @param {String} [init.crossOrigin] How the element handles crossorigin requests
	 * @param {String} [init.useMap] Name of image map to use
	 * @param {Boolean} [init.isMap] Whether the image is a server-side image map
	 * @param {Number} [init.width] Horizontal dimension
	 * @param {Number} [init.height] Vertical dimension
	 * @param {String} [init.referrerPolicy] Determines the referrer policy for fetches initiated by the element
	 * @return {HTMLImageElement}
	 */
	function img(init) {
	  return htmldom('img', init);
	}

	/**
	 * [The `input` element](https://html.spec.whatwg.org/#the-input-element)
	 * represents a typed data field, usually with a form control to allow the user to edit the data.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-input-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535260.aspx)
	 *
	 * @function input
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {String} [init.alt] Replacement text for use when images are not available
	 * @param {String} [init.accept] Hint for expected file type in file upload controls
	 * @param {String} [init.autocomplete] Hint for form autofill feature
	 * @param {Boolean} [init.autofocus] Automatically focus the form control when the page is loaded
	 * @param {Boolean} [init.checked] Whether the command or control is checked
	 * @param {Boolean} [init.defaultChecked]
	 * @param {String} [init.dirName] Name of form control to use for sending the element's directionality in form submission
	 * @param {Boolean} [init.disabled] Whether the form control is disabled
	 * @param {String} [init.formAction] URL to use for form submission
	 * @param {String} [init.formEnctype] Form data set encoding type to use for form submission
	 * @param {String} [init.formMethod] HTTP method to use for form submission
	 * @param {Boolean} [init.formNoValidate] Bypass form control validation for form submission
	 * @param {String} [init.formTarget] Browsing context for form submission
	 * @param {Number} [init.height] Vertical dimension
	 * @param {Boolean} [init.indeterminate]
	 * @param {String} [init.inputMode] Hint for selecting an input modality
	 * @param {String} [init.max] Maximum value
	 * @param {Number} [init.maxLength] Maximum length of value
	 * @param {String} [init.min] Minimum value
	 * @param {Number} [init.minLength] Minimum length of value
	 * @param {Boolean} [init.multiple] Whether to allow multiple values
	 * @param {String} [init.name] Name of form control to use for form submission and in the form.elements API
	 * @param {String} [init.pattern] Pattern to be matched by the form control's value
	 * @param {String} [init.placeholder] User-visible label to be placed within the form control
	 * @param {Boolean} [init.readOnly] Whether to allow the value to be edited by the user
	 * @param {Boolean} [init.required] Whether the control is required for form submission
	 * @param {Number} [init.size] Size of the control
	 * @param {String} [init.src] Address of the resource
	 * @param {String} [init.step] Granularity to be matched by the form control's value
	 * @param {String} [init.type] Type of form control
	 * @param {String} [init.value] Value of the form control
	 * @param {String} [init.defaultValue]
	 * @param {String} [init.width] Horizontal dimension
	 * @param {String} [init.title] Special semantics: Description of pattern (when used with pattern attribute).
	 * @param {String} [init.attrset.form] Associates the control with a form element (ID reference)
	 * @param {String} [init.attrset.list] List of autocomplete options
	 * @return {HTMLInputElement}
	 */
	function input(init) {
	  return htmldom('input', init);
	}

	/**
	 * [The `ins` element](https://html.spec.whatwg.org/#the-ins-element)
	 * represents an addition to the document.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-ins-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLModElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535842.aspx)
	 *
	 * @function ins
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {String} [init.cite] Link to the source of the quotation or more information about the edit
	 * @param {String} [init.dateTime] Date and (optionally) time of the change
	 * @return {HTMLModElement}
	 */
	function ins(init) {
	  return htmldom('ins', init);
	}

	/**
	 * [The `kbd` element](https://html.spec.whatwg.org/#the-kbd-element)
	 * represents user input (typically keyboard input,
	 * although it may also be used to represent other input, such as voice commands).
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-kbd-element)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd)
	 *
	 * @function kbd
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLElement}
	 */
	function kbd(init) {
	  return htmldom('kbd', init);
	}

	/**
	 * [The `label` element](https://html.spec.whatwg.org/#the-label-element)
	 * represents a caption in a user interface.
	 * The caption can be associated with a specific form control,
	 * known as the label element's labeled control, either using the for attribute,
	 * or by putting the form control inside the label element itself.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-label-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535845.aspx)
	 *
	 * @function label
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {String} [init.for] Associate the label with form control
	 * @return {HTMLLabelElement}
	 */
	function label(init) {
	  return htmldom('label', init);
	}

	/**
	 * [The `legend` element](https://html.spec.whatwg.org/#the-legend-element)
	 * represents a caption for the rest of the contents of the legend element's parent fieldset element, if any.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-legend-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLegendElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535846.aspx)
	 *
	 * @function legend
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLLegendElement}
	 */
	function legend(init) {
	  return htmldom('legend', init);
	}

	/**
	 * [The `li` element](https://html.spec.whatwg.org/#the-li-element)
	 * represents a list item. If its parent element is an ol, ul, or menu element,
	 * then the element is an item of the parent element's list, as defined for those elements.
	 * Otherwise, the list item has no defined list-related relationship to any other li element.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-li-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLIElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535847.aspx)
	 *
	 * @function li
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {Number} [init.value] Ordinal value of the list item (if the element is not a child of an ul or menu element)
	 * @return {HTMLLIElement}
	 */
	function li(init) {
	  return htmldom('li', init);
	}

	/**
	 * [The `link` element](https://html.spec.whatwg.org/#the-link-element)
	 * allows authors to link their document to other resources.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-link-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535848.aspx)
	 *
	 * @function link
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {String} [init.href] Address of the hyperlink
	 * @param {String} [init.crossOrigin] How the element handles crossorigin requests
	 * @param {String} [init.rel] Relationship between the document containing the hyperlink and the destination resource
	 * @param {String} [init.as] Destination for a preload request (for `rel="preload"`)
	 * @param {String} [init.media] Applicable media
	 * @param {String} [init.nonce] Cryptographic nonce used in [Content Security Policy](https://html.spec.whatwg.org/#refsCSP) checks
	 * @param {String} [init.hreflang] Language of the linked resource
	 * @param {String} [init.type] Hint for the type of the referenced resource
	 * @param {String} [init.sizes] Sizes of the icons (for `rel="icon"`)
	 * @param {String} [init.referrerPolicy] Determines the referrer policy for fetches initiated by the element
	 * @param {String} [init.title] Special semantics: title of the link; [CSS style sheet set name](CSS style sheet set name).
	 * @return {HTMLLinkElement}
	 */
	function link(init) {
	  return htmldom('link', init);
	}

	/**
	 * [The `main` element](https://html.spec.whatwg.org/#the-main-element)
	 * can be used as a container for the dominant contents of another element.
	 * It represents its children.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-main-element)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/mt634542.aspx)
	 *
	 * @function main
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLElement}
	 */
	function main(init) {
	  return htmldom('main', init);
	}

	/**
	 * [The `map` element](https://html.spec.whatwg.org/#the-map-element),
	 * in conjunction with an img element and any area element descendants, defines an image map.
	 * The element represents its children.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-map-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMapElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535850.aspx)
	 *
	 * @function map
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {String} [init.name] Name of [image map](https://html.spec.whatwg.org/#image-map) to reference from the `usemap` attribute
	 * @return {HTMLMapElement}
	 */
	function map(init) {
	  return htmldom('map', init);
	}

	/**
	 * [The `mark` element](https://html.spec.whatwg.org/#the-mark-element)
	 * represents a run of text in one document marked or highlighted for reference purposes,
	 * due to its relevance in another context.
	 * When used in a quotation or other block of text referred to from the prose,
	 * it indicates a highlight that was not originally present but which has been added
	 * to bring the reader's attention to a part of the text that might not have been considered
	 * important by the original author when the block was originally written,
	 * but which is now under previously unexpected scrutiny.
	 * When used in the main prose of a document,
	 * it indicates a part of the document that has been highlighted
	 * due to its likely relevance to the user's current activity.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-mark-element)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/gg593046.aspx)
	 *
	 * @function mark
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLElement}
	 */
	function mark(init) {
	  return htmldom('mark', init);
	}

	/**
	 * [The `menu` element](https://html.spec.whatwg.org/#the-menu-element)
	 * represents a list of commands.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-menu-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMenuElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535852.aspx)
	 *
	 * @function menu
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {String} [init.type] Type of menu
	 * @param {String} [init.label] User-visible label
	 * @return {HTMLMenuElement}
	 */
	function menu(init) {
	  return htmldom('menu', init);
	}

	/**
	 * [The `menuitem` element](https://html.spec.whatwg.org/#the-menuitem-element)
	 * represents a command that the user can invoke from a popup menu
	 * (either a context menu or the menu of a menu button).
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-menuitem-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMenuItemElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menuitem)
	 *
	 * @function menuitem
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {String} [init.type] Type of command
	 * @param {String} [init.label] User-visible label
	 * @param {String} [init.icon] Icon for the command
	 * @param {Boolean} [init.disabled] Whether the form control is disabled
	 * @param {Boolean} [init.checked] Whether the command or control is checked
	 * @param {String} [init.radiogroup] Name of group of commands to treat as a radio button group
	 * @param {Boolean} [init.default] Mark the command as being a default command
	 * @param {String} [init.title] Special semantics: hint describing the command
	 * @return {HTMLMenuItemElement}
	 */
	function menuitem(init) {
	  return htmldom('menuitem', init);
	}

	/**
	 * [The `meta` element](https://html.spec.whatwg.org/#the-meta-element)
	 * represents various kinds of metadata that cannot be expressed using the title,
	 * base, link, style, and script elements.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-meta-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMetaElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535853.aspx)
	 *
	 * @function meta
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {String} [init.name] Metadata name
	 * @param {String} [init.http-equiv] Pragma directive
	 * @param {String} [init.content] Value of the element
	 * @param {String} [init.attrset.charset] Character encoding declaration
	 * @return {HTMLMetaElement}
	 */
	function meta(init) {
	  return htmldom('meta', init);
	}

	/**
	 * [The `meter` element](https://html.spec.whatwg.org/#the-meter-element)
	 * represents a scalar measurement within a known range, or a fractional value;
	 * for example disk usage, the relevance of a query result,
	 * or the fraction of a voting population to have selected a particular candidate.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-meter-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMeterElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/mt573149.aspx)
	 *
	 * @function meter
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {Number} [init.value] Current value of the element
	 * @param {Number} [init.min] Lower bound of range
	 * @param {Number} [init.max] Upper bound of range
	 * @param {Number} [init.low] High limit of low range
	 * @param {Number} [init.high] Low limit of high range
	 * @param {Number} [init.optimum] Optimum value in gauge
	 * @return {HTMLMeterElement}
	 */
	function meter(init) {
	  return htmldom('meter', init);
	}

	/**
	 * [The `nav` element](https://html.spec.whatwg.org/#the-nav-element)
	 * represents a section of a page that links to other pages or to parts within the page:
	 * a section with navigation links.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-nav-element)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/gg593047.aspx)
	 *
	 * @function nav
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLElement}
	 */
	function nav(init) {
	  return htmldom('nav', init);
	}

	/**
	 * [The `noscript` element](https://html.spec.whatwg.org/#the-noscript-element)
	 * represents nothing if scripting is enabled,
	 * and represents its children if scripting is disabled.
	 * It is used to present different markup to user agents that support scripting
	 * and those that don't support scripting, by affecting how the document is parsed.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-noscript-element)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535858.aspx)
	 *
	 * @function noscript
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLElement}
	 */
	function noscript(init) {
	  return htmldom('noscript', init);
	}

	/**
	 * [The `object` element](https://html.spec.whatwg.org/#the-object-element)
	 * can represent an external resource, which, depending on the type of the resource,
	 * will either be treated as an image, as a nested browsing context,
	 * or as an external resource to be processed by a plugin.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-object-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535859.aspx)
	 *
	 * @function object
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {String} [init.data] Address of the resource
	 * @param {String} [init.type] Type of embedded resource
	 * @param {Boolean} [init.typeMustMatch] Whether the type attribute and the Content-Type value need to match for the resource to be used
	 * @param {String} [init.name] Name of nested browsing context
	 * @param {String} [init.useMap] Name of image map to use
	 * @param {String} [init.attrset.form] Associates the control with a form element (ID reference)
	 * @param {String} [init.width] Horizontal dimension
	 * @param {String} [init.height] Vertical dimension
	 * @return {HTMLObjectElement}
	 */
	function object(init) {
	  return htmldom('object', init);
	}

	/**
	 * [The `ol` element](https://html.spec.whatwg.org/#the-ol-element)
	 * represents a list of items, where the items have been intentionally ordered,
	 * such that changing the order would change the meaning of the document.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-ol-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOListElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535875.aspx)
	 *
	 * @function ol
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {Boolean} [init.reversed] Number the list backwards
	 * @param {Number} [init.start] Starting value of the list
	 * @param {String} [init.type] Kind of list marker
	 * @return {HTMLOListElement}
	 */
	function ol(init) {
	  return htmldom('ol', init);
	}

	/**
	 * [The `optgroup` element](https://html.spec.whatwg.org/#the-optgroup-element)
	 * represents a group of option elements with a common label.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-optgroup-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptGroupElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535876.aspx)
	 *
	 * @function optgroup
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {Boolean} [init.disabled] Whether the form control is disabled
	 * @param {String} [init.label] User-visible label
	 * @return {HTMLOptGroupElement}
	 */
	function optgroup(init) {
	  return htmldom('optgroup', init);
	}

	/**
	 * [The `option` element](https://html.spec.whatwg.org/#the-option-element)
	 * represents an option in a select element or as part of a list of suggestions
	 * in a datalist element.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-option-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptionElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535877.aspx)
	 *
	 * @function option
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {Boolean} [init.disabled] Whether the form control is disabled
	 * @param {String} [init.label] User-visible label
	 * @param {Boolean} [init.selected] Whether the option is selected by default
	 * @param {String} [init.value] Value to be used for form submission
	 * @return {HTMLOptionElement}
	 */
	function option(init) {
	  return htmldom('option', init);
	}

	/**
	 * [The `output` element](https://html.spec.whatwg.org/#the-output-element)
	 * represents the result of a calculation performed by the application,
	 * or the result of a user action.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-output-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOutputElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/mt732268.aspx)
	 *
	 * @function output
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {String} [init.for] Specifies controls from which the output was calculated
	 * @param {String} [init.attrset.form] Associates the control with a form element (ID reference)
	 * @param {String} [init.name] Name of form control to use in the [form.elements](https://html.spec.whatwg.org/#dom-form-elements) API
	 * @return {HTMLOutputElement}
	 */
	function output(init) {
	  return htmldom('output', init);
	}

	/**
	 * [The `p` element](https://html.spec.whatwg.org/#the-p-element)
	 * represents a paragraph.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-p-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLParagraphElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535878.aspx)
	 *
	 * @function p
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLParagraphElement}
	 */
	function p(init) {
	  return htmldom('p', init);
	}

	/**
	 * [The `param` element](https://html.spec.whatwg.org/#the-param-element)
	 * defines parameters for plugins invoked by object elements.
	 * It does not represent anything on its own.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-param-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLParamElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/param)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535880.aspx)
	 *
	 * @function param
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {String} [init.name] Name of parameter
	 * @param {String} [init.value] Value of parameter
	 * @return {HTMLParamElement}
	 */
	function param(init) {
	  return htmldom('param', init);
	}

	/**
	 * [The `picture` element](https://html.spec.whatwg.org/#the-picture-element)
	 * is a container which provides multiple sources to its contained img element to allow authors to declaratively control or give hints to the user agent about which image resource to use, based on the screen pixel density, viewport size, image format, and other factors. It represents its children.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-picture-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLPictureElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/mt574001.aspx)
	 *
	 * @function picture
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLPictureElement}
	 */
	function picture(init) {
	  return htmldom('picture', init);
	}

	/**
	 * [The `pre` element](https://html.spec.whatwg.org/#the-pre-element)
	 * represents a block of preformatted text, in which structure is represented
	 * by typographic conventions rather than by elements.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-pre-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLPreElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535883.aspx)
	 *
	 * @function pre
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLPreElement}
	 */
	function pre(init) {
	  return htmldom('pre', init);
	}

	/**
	 * [The `progress` element](https://html.spec.whatwg.org/#the-progress-element)
	 * represents the completion progress of a task. The progress is either indeterminate,
	 * indicating that progress is being made but that it is not clear
	 * how much more work remains to be done before the task is complete
	 * (e.g. because the task is waiting for a remote host to respond),
	 * or the progress is a number in the range zero to a maximum,
	 * giving the fraction of work that has so far been completed.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-progress-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLProgressElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/hh772953.aspx)
	 *
	 * @function progress
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {Number} [init.value] Current value of the element
	 * @param {Number} [init.max] Upper bound of range
	 * @return {HTMLProgressElement}
	 */
	function progress(init) {
	  return htmldom('progress', init);
	}

	/**
	 * [The `q` element](https://html.spec.whatwg.org/#the-q-element)
	 * represents some phrasing content quoted from another source.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-q-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTML*Element)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535884.aspx)
	 *
	 * @function q
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {String} [init.cite] Link to the source of the quotation or more information about the edit
	 * @return {HTMLQuoteElement}
	 */
	function q(init) {
	  return htmldom('q', init);
	}

	/**
	 * [The `rp` element](https://html.spec.whatwg.org/#the-rp-element)
	 * can be used to provide parentheses or other content
	 * around a ruby text component of a ruby annotation,
	 * to be shown by user agents that don't support ruby annotations.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-rp-element)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rp)
	 *
	 * @function rp
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLElement}
	 */
	function rp(init) {
	  return htmldom('rp', init);
	}

	/**
	 * [The `rt` element](https://html.spec.whatwg.org/#the-rt-element)
	 * marks the ruby text component of a ruby annotation.
	 * When it is the child of a ruby element, it doesn't represent anything itself,
	 * but the ruby element uses it as part of determining what it represents.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-rt-element)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rt)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535885.aspx)
	 *
	 * @function rt
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLElement}
	 */
	function rt(init) {
	  return htmldom('rt', init);
	}

	/**
	 * [The `ruby` element](https://html.spec.whatwg.org/#the-ruby-element)
	 * allows one or more spans of phrasing content to be marked with ruby annotations.
	 * Ruby annotations are short runs of text presented alongside base text,
	 * primarily used in East Asian typography as a guide for pronunciation
	 * or to include other annotations.
	 * In Japanese, this form of typography is also known as furigana.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-ruby-element)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535886.aspx)
	 *
	 * @function ruby
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLElement}
	 */
	function ruby(init) {
	  return htmldom('ruby', init);
	}

	/**
	 * [The `s` element](https://html.spec.whatwg.org/#the-s-element)
	 * represents contents that are no longer accurate or no longer relevant.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-s-element)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535890.aspx)
	 *
	 * @function s
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLElement}
	 */
	function s(init) {
	  return htmldom('s', init);
	}

	/**
	 * [The `samp` element](https://html.spec.whatwg.org/#the-samp-element)
	 * represents sample or quoted output from another program or computing system.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-samp-element)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/samp)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535891.aspx)
	 *
	 * @function samp
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLElement}
	 */
	function samp(init) {
	  return htmldom('samp', init);
	}

	/**
	 * [The `script` element](https://html.spec.whatwg.org/#the-script-element)
	 * allows authors to include dynamic script and data blocks in their documents.
	 * The element does not represent content for the user.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-script-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535892.aspx)
	 *
	 * @function script
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {String} [init.src] Address of the resource
	 * @param {String} [init.type] Type of embedded resource
	 * @param {String} [init.charset] Character encoding of the external script resource
	 * @param {String} [init.async] Execute script when available, without blocking
	 * @param {String} [init.defer] Defer script execution
	 * @param {String} [init.crossOrigin] How the element handles crossorigin requests
	 * @param {String} [init.nonce] Cryptographic nonce used in Content Security Policy checks [CSP]
	 * @return {HTMLScriptElement}
	 */
	function script(init) {
	  return htmldom('script', init);
	}

	/**
	 * [The `section` element](https://html.spec.whatwg.org/#the-section-element)
	 * represents a generic section of a document or application.
	 * A section, in this context, is a thematic grouping of content,
	 * typically with a heading.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-section-element)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/gg593059.aspx)
	 *
	 * @function section
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLElement}
	 */
	function section(init) {
	  return htmldom('section', init);
	}

	/**
	 * [The `select` element](https://html.spec.whatwg.org/#the-select-element)
	 * represents a control for selecting amongst a set of options.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-select-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535893.aspx)
	 *
	 * @function select
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {String} [init.autocomplete] Hint for form autofill feature
	 * @param {Boolean} [init.autofocus] Automatically focus the form control when the page is loaded
	 * @param {Boolean} [init.disabled] Whether the form control is disabled
	 * @param {String} [init.attrset.form] Associates the control with a form element (ID reference)
	 * @param {Boolean} [init.multiple] Whether to allow multiple values
	 * @param {String} [init.name] Name of form control to use for form submission and in the form.elements API
	 * @param {Boolean} [init.required] Whether the control is required for form submission
	 * @param {Number} [init.size] Size of the control
	 * @return {HTMLSelectElement}
	 */
	function select(init) {
	  return htmldom('select', init);
	}

	/**
	 * [The `slot` element](https://html.spec.whatwg.org/#the-slot-element)
	 * defines a slot. It is typically used in a shadow tree.
	 * A slot element represents its assigned nodes, if any, and its contents otherwise.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-slot-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot)
	 *
	 * @function slot
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {String} [init.name] Name of shadow tree slot
	 * @return {HTMLSlotElement}
	 */
	function slot(init) {
	  return htmldom('slot', init);
	}

	/**
	 * [The `small` element](https://html.spec.whatwg.org/#the-small-element)
	 * represents side comments such as small print.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-small-element)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535894.aspx)
	 *
	 * @function small
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLElement}
	 */
	function small(init) {
	  return htmldom('small', init);
	}

	/**
	 * [The `source` element](https://html.spec.whatwg.org/#the-source-element)
	 * allows authors to specify multiple alternative source sets for img elements
	 * or multiple alternative media resources for media elements.
	 * It does not represent anything on its own.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-source-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSourceElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ff975070.aspx)
	 *
	 * @function source
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {String} [init.src] Address of the resource
	 * @param {String} [init.type] Type of embedded resource
	 * @param {String} [init.srcset] Images to use in different situations (e.g. high-resolution displays, small monitors, etc)
	 * @param {String} [init.sizes] Image sizes for different page layouts
	 * @param {String} [init.media] Applicable media
	 * @return {HTMLSourceElement}
	 */
	function source(init) {
	  return htmldom('source', init);
	}

	/**
	 * [The `span` element](https://html.spec.whatwg.org/#the-span-element)
	 * doesn't mean anything on its own,
	 * but can be useful when used together with the global attributes,
	 * e.g. class, lang, or dir. It represents its children.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-span-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSpanElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535895.aspx)
	 *
	 * @function span
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLSpanElement}
	 */
	function span(init) {
	  return htmldom('span', init);
	}

	/**
	 * [The `strong` element](https://html.spec.whatwg.org/#the-strong-element)
	 * represents strong importance, seriousness, or urgency for its contents.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-strong-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTML*Element)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535897.aspx)
	 *
	 * @function strong
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLElement}
	 */
	function strong(init) {
	  return htmldom('strong', init);
	}

	/**
	 * [The `style` element](https://html.spec.whatwg.org/#the-style-element)
	 * allows authors to embed style information in their documents.
	 * The style element is one of several inputs to the styling processing model.
	 * The element does not represent content for the user.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-style-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLStyleElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535898.aspx)
	 *
	 * @function style
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {String} [init.media] Applicable media
	 * @param {String} [init.nonce] Cryptographic nonce used in [Content Security Policy](https://html.spec.whatwg.org/#refsCSP) checks
	 * @param {String} [init.type] Type of embedded resource
	 * @param {String} [init.title] Special semantics: CSS style sheet set name.
	 * @return {HTMLStyleElement}
	 */
	function style(init) {
	  return htmldom('style', init);
	}

	/**
	 * [The `sub` element](https://html.spec.whatwg.org/#the-sub-element)
	 * represents a subscript.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-sub-element)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535899.aspx)
	 *
	 * @function sub
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLElement}
	 */
	function sub(init) {
	  return htmldom('sub', init);
	}

	/**
	 * [The `summary` element](https://html.spec.whatwg.org/#the-summary-element)
	 *  represents a summary, caption, or legend for the rest of the contents
	 *  of the summary element's parent details element, if any.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-summary-element)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary)
	 *
	 * @function summary
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLElement}
	 */
	function summary(init) {
	  return htmldom('summary', init);
	}

	/**
	 * [The `sup` element](https://html.spec.whatwg.org/#the-sup-element)
	 * represents a superscript
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-sup-element)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535900.aspx)
	 *
	 * @function sup
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLElement}
	 */
	function sup(init) {
	  return htmldom('sup', init);
	}

	/**
	 * [The `table` element](https://html.spec.whatwg.org/#the-table-element)
	 * represents data with more than one dimension, in the form of a table.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-table-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535901.aspx)
	 *
	 * @function table
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLTableElement}
	 */
	function table(init) {
	  return htmldom('table', init);
	}

	/**
	 * [The `tbody` element](https://html.spec.whatwg.org/#the-tbody-element)
	 * represents a block of rows that consist of a body of data for the parent table element,
	 * if the tbody element has a parent and it is a table.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-tbody-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableSectionElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535902.aspx)
	 *
	 * @function tbody
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLTableSectionElement}
	 */
	function tbody(init) {
	  return htmldom('tbody', init);
	}

	/**
	 * [The `td` element](https://html.spec.whatwg.org/#the-td-element)
	 * represents a data cell in a table.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-td-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableCellElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535903.aspx)
	 *
	 * @function td
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {String} [init.colSpan] Number of columns that the cell is to span
	 * @param {String} [init.rowSpan] Number of rows that the cell is to span
	 * @param {String} [init.headers] The header cells for this cell
	 * @return {HTMLTableCellElement}
	 */
	function td(init) {
	  return htmldom('td', init);
	}

	/**
	 * [The `template` element](https://html.spec.whatwg.org/#the-template-element)
	 * is used to declare fragments of HTML that can be cloned and inserted in the document by script.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-template-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTemplateElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/mt586693.aspx)
	 *
	 * @function template
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLTemplateElement}
	 */
	function template(init) {
	  return htmldom('template', init);
	}

	/**
	 * [The `textarea` element](https://html.spec.whatwg.org/#the-textarea-element)
	 * represents a multiline plain text edit control for the element's raw value.
	 * The contents of the control represent the control's default value.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-textarea-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535904.aspx)
	 *
	 * @function textarea
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {String} [init.autocomplete] Hint for form autofill feature
	 * @param {String} [init.autofocus] Automatically focus the form control when the page is loaded
	 * @param {String} [init.cols] Maximum number of characters per line
	 * @param {String} [init.dirName] Name of form control to use for sending the element's directionality in form submission
	 * @param {String} [init.disabled] Whether the form control is disabled
	 * @param {String} [init.form] Associates the control with a form element
	 * @param {String} [init.inputMode] Hint for selecting an input modality
	 * @param {String} [init.maxLength] Maximum length of value
	 * @param {String} [init.minLength] Minimum length of value
	 * @param {String} [init.name] Name of form control to use for form submission and in the form.elements API
	 * @param {String} [init.placeholder] User-visible label to be placed within the form control
	 * @param {String} [init.readOnly] Whether to allow the value to be edited by the user
	 * @param {String} [init.required] Whether the control is required for form submission
	 * @param {String} [init.rows] Number of lines to show
	 * @param {String} [init.wrap] How the value of the form control is to be wrapped for form submission
	 * @return {HTMLTextAreaElement}
	 */
	function textarea(init) {
	  return htmldom('textarea', init);
	}

	/**
	 * [The `tfoot` element](https://html.spec.whatwg.org/#the-tfoot-element)
	 *  represents the block of rows that consist of the column summaries (footers)
	 *  for the parent table element, if the tfoot element has a parent and it is a table.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-tfoot-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableSectionElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535907.aspx)
	 *
	 * @function tfoot
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLTableSectionElement}
	 */
	function tfoot(init) {
	  return htmldom('tfoot', init);
	}

	/**
	 * [The `th` element](https://html.spec.whatwg.org/#the-th-element)
	 * represents a header cell in a table.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-th-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableCellElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535908.aspx)
	 *
	 * @function th
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {String} [init.colSpan] Number of columns that the cell is to span
	 * @param {String} [init.rowSpan] Number of rows that the cell is to span
	 * @param {String} [init.headers] The header cells for this cell
	 * @param {String} [init.scope] Specifies which cells the header cell applies to
	 * @param {String} [init.abbr] Alternative label to use for the header cell when referencing the cell in other contexts
	 * @return {HTMLTableCellElement}
	 */
	function th(init) {
	  return htmldom('th', init);
	}

	/**
	 * [The `thead` element](https://html.spec.whatwg.org/#the-thead-element)
	 * represents the block of rows that consist of the column labels (headers)
	 * for the parent table element, if the thead element has a parent and it is a table.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-thead-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableSectionElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535909.aspx)
	 *
	 * @function thead
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLTableSectionElement}
	 */
	function thead(init) {
	  return htmldom('thead', init);
	}

	/**
	 * [The `time` element](https://html.spec.whatwg.org/#the-time-element)
	 * represents its contents,
	 * along with a machine-readable form of those contents in the datetime attribute.
	 * The kind of content is limited to various kinds of dates,
	 * times, time-zone offsets, and durations, as described below.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-time-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTimeElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/mt706248.aspx)
	 *
	 * @function time
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {String} [init.datetime] Machine-readable value
	 * @return {HTMLTimeElement}
	 */
	function time(init) {
	  return htmldom('time', init);
	}

	/**
	 * [The `title` element](https://html.spec.whatwg.org/#the-title-element)
	 * represents the document's title or name.
	 * Authors should use titles that identify their documents
	 * even when they are used out of context,
	 * for example in a user's history or bookmarks, or in search results.
	 * The document's title is often different from its first heading,
	 * since the first heading does not have to stand alone when taken out of context.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-title-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTitleElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535910.aspx)
	 *
	 * @function title
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLTitleElement}
	 */
	function title(init) {
	  return htmldom('title', init);
	}

	/**
	 * [The `tr` element](https://html.spec.whatwg.org/#the-tr-element)
	 * represents a row of cells in a table.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-tr-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535911.aspx)
	 *
	 * @function tr
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLTableRowElement}
	 */
	function tr(init) {
	  return htmldom('tr', init);
	}

	/**
	 * [The `track` element](https://html.spec.whatwg.org/#the-track-element)
	 * allows authors to specify explicit external timed text tracks for media elements.
	 * It does not represent anything on its own.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-track-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTrackElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/hh772958.aspx)
	 *
	 * @function track
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {String} [init.kind] The type of text track
	 * @param {String} [init.src] Address of the resource
	 * @param {String} [init.srclang] Language of the text track
	 * @param {String} [init.label] User-visible label
	 * @param {Boolean} [init.default] Enable the track if no other text track is more suitable
	 * @return {HTMLTrackElement}
	 */
	function track(init) {
	  return htmldom('track', init);
	}

	/**
	 * [The `u` element](https://html.spec.whatwg.org/#the-u-element)
	 * represents a span of text with an unarticulated,
	 * though explicitly rendered, non-textual annotation,
	 * such as labeling the text as being a proper name in Chinese text
	 * (a Chinese proper name mark), or labeling the text as being misspelt.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-u-element)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535913.aspx)
	 *
	 * @function u
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLElement}
	 */
	function u(init) {
	  return htmldom('u', init);
	}

	/**
	 * [The `ul` element](https://html.spec.whatwg.org/#the-ul-element)
	 * represents a list of items, where the order of the items is not important — that is,
	 * where changing the order would not materially change the meaning of the document.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-ul-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLUListElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535914.aspx)
	 *
	 * @function ul
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLUListElement}
	 */
	function ul(init) {
	  return htmldom('ul', init);
	}

	/**
	 * [the `var` element](https://html.spec.whatwg.org/#the-var-element)
	 * represents a variable.
	 * This could be an actual variable in a mathematical expression or programming context,
	 * an identifier representing a constant, a symbol identifying a physical quantity,
	 * a function parameter, or just be a term used as a placeholder in prose.
	 *
	 * **`var` is reserved JS keyword so use `variable` instead**
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-var-element)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/var)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/ms535916.aspx)
	 *
	 * @function variable
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLElement}
	 */
	function variable(init) {
	  return htmldom('var', init);
	}

	/**
	 * [The `video` element](https://html.spec.whatwg.org/#the-video-element)
	 * is used for playing videos or movies, and audio files with captions.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-video-element)
	 * • [mdn api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
	 * • [msdn ref](https://msdn.microsoft.com/en-us/library/hh772959.aspx)
	 *
	 * @function video
	 * @param {{}} [init] `NodeInit` dictionary
	 * @param {String} [init.src] Address of the resource
	 * @param {String} [init.crossOrigin] How the element handles crossorigin requests
	 * @param {String} [init.poster] Poster frame to show prior to video playback
	 * @param {String} [init.preload] Hints how much buffering the media resource will likely need
	 * @param {Boolean} [init.autoplay] Hint that the media resource can be started automatically when the page is loaded
	 * @param {Boolean} [init.playsInline] Encourage the user agent to display video content within the element's playback area
	 * @param {Boolean} [init.loop] Whether to loop the media resource
	 * @param {Number} [init.muted] Whether to mute the media resource by default
	 * @param {Boolean} [init.controls] Show user agent controls
	 * @param {Number} [init.width] Horizontal dimension
	 * @param {Number} [init.height] Vertical dimension
	 * @return {HTMLVideoElement}
	 */
	function video(init) {
	  return htmldom('video', init);
	}

	/**
	 * [The `wbr` element](https://html.spec.whatwg.org/#the-wbr-element)
	 * represents a line break opportunity.
	 *
	 * [w3](https://www.w3.org/TR/html/single-page.html#the-wbr-element)
	 * • [mdn ref](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/wbr)
	 *
	 * @function wbr
	 * @param {{}} [init] `NodeInit` dictionary
	 * @return {HTMLElement}
	 */
	function wbr(init) {
	  return htmldom('wbr', init);
	}

/***/ },

/***/ 338:
/*!**********************!*\
  !*** ./docs/spec.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(/*! ../lib/index.spec.js */ 339);

/***/ },

/***/ 339:
/*!***************************!*\
  !*** ./lib/index.spec.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(/*! ./nodeinit.spec */ 340);

	__webpack_require__(/*! ./domassembler.spec */ 381);

	__webpack_require__(/*! ./htmlassembler.spec */ 382);

	__webpack_require__(/*! ./xmldom.spec */ 384);

	__webpack_require__(/*! ./htmldom.spec */ 385);

/***/ },

/***/ 340:
/*!******************************!*\
  !*** ./lib/nodeinit.spec.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _nodeinit = __webpack_require__(/*! ./nodeinit */ 2);

	var _chai = __webpack_require__(/*! chai */ 341);

	var _chai2 = _interopRequireDefault(_chai);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	const { assert } = _chai2.default;
	const { document, JSON } = window;

	describe('Node init', function () {
	    const init = { id: 'random-id' };
	    it('return the same object', () => {
	        assert.equal((0, _nodeinit.NodeInit)(init), init);
	    });
	    it('properly strigified to JSON', () => {
	        assert.equal(JSON.stringify((0, _nodeinit.NodeInit)(init)), '{"id":"random-id"}');
	    });
	    it('properly assign string as children', () => {
	        const string = 'string as textContent';
	        const init = (0, _nodeinit.NodeInit)(string);
	        assert.equal(init.children, string);
	    });
	    it('properly assign array as children', () => {
	        const children = ['a', 'b', 'c'];
	        const init = (0, _nodeinit.NodeInit)(children);
	        assert.equal(init.children, children);
	    });
	    it('properly assign element as children', () => {
	        const child = document.createElement('a');
	        const init = (0, _nodeinit.NodeInit)(child);
	        assert.equal(init.children, child);
	    });
	    it('passes through undefined', () => {
	        const init = (0, _nodeinit.NodeInit)(undefined);
	        assert.equal(init, undefined);
	    });
	});

/***/ },

/***/ 341:
/*!*************************!*\
  !*** ./~/chai/index.js ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(/*! ./lib/chai */ 342);

/***/ },

/***/ 342:
/*!****************************!*\
  !*** ./~/chai/lib/chai.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/*!
	 * chai
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	var used = [],
	    _exports = module.exports = {};

	/*!
	 * Chai version
	 */

	_exports.version = '3.5.0';

	/*!
	 * Assertion Error
	 */

	_exports.AssertionError = __webpack_require__(/*! assertion-error */ 343);

	/*!
	 * Utils for plugins (not exported)
	 */

	var util = __webpack_require__(/*! ./chai/utils */ 344);

	/**
	 * # .use(function)
	 *
	 * Provides a way to extend the internals of Chai
	 *
	 * @param {Function}
	 * @returns {this} for chaining
	 * @api public
	 */

	_exports.use = function (fn) {
	  if (!~used.indexOf(fn)) {
	    fn(this, util);
	    used.push(fn);
	  }

	  return this;
	};

	/*!
	 * Utility Functions
	 */

	_exports.util = util;

	/*!
	 * Configuration
	 */

	var config = __webpack_require__(/*! ./chai/config */ 357);
	_exports.config = config;

	/*!
	 * Primary `Assertion` prototype
	 */

	var assertion = __webpack_require__(/*! ./chai/assertion */ 376);
	_exports.use(assertion);

	/*!
	 * Core Assertions
	 */

	var core = __webpack_require__(/*! ./chai/core/assertions */ 377);
	_exports.use(core);

	/*!
	 * Expect interface
	 */

	var expect = __webpack_require__(/*! ./chai/interface/expect */ 378);
	_exports.use(expect);

	/*!
	 * Should interface
	 */

	var should = __webpack_require__(/*! ./chai/interface/should */ 379);
	_exports.use(should);

	/*!
	 * Assert interface
	 */

	var assert = __webpack_require__(/*! ./chai/interface/assert */ 380);
	_exports.use(assert);

/***/ },

/***/ 343:
/*!*******************************************!*\
  !*** ./~/chai/~/assertion-error/index.js ***!
  \*******************************************/
/***/ function(module, exports) {

	'use strict';

	/*!
	 * assertion-error
	 * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
	 * MIT Licensed
	 */

	/*!
	 * Return a function that will copy properties from
	 * one object to another excluding any originally
	 * listed. Returned function will create a new `{}`.
	 *
	 * @param {String} excluded properties ...
	 * @return {Function}
	 */

	function exclude() {
	  var excludes = [].slice.call(arguments);

	  function excludeProps(res, obj) {
	    Object.keys(obj).forEach(function (key) {
	      if (!~excludes.indexOf(key)) res[key] = obj[key];
	    });
	  }

	  return function extendExclude() {
	    var args = [].slice.call(arguments),
	        i = 0,
	        res = {};

	    for (; i < args.length; i++) {
	      excludeProps(res, args[i]);
	    }

	    return res;
	  };
	};

	/*!
	 * Primary Exports
	 */

	module.exports = AssertionError;

	/**
	 * ### AssertionError
	 *
	 * An extension of the JavaScript `Error` constructor for
	 * assertion and validation scenarios.
	 *
	 * @param {String} message
	 * @param {Object} properties to include (optional)
	 * @param {callee} start stack function (optional)
	 */

	function AssertionError(message, _props, ssf) {
	  var extend = exclude('name', 'message', 'stack', 'constructor', 'toJSON'),
	      props = extend(_props || {});

	  // default values
	  this.message = message || 'Unspecified AssertionError';
	  this.showDiff = false;

	  // copy from properties
	  for (var key in props) {
	    this[key] = props[key];
	  }

	  // capture stack trace
	  ssf = ssf || arguments.callee;
	  if (ssf && Error.captureStackTrace) {
	    Error.captureStackTrace(this, ssf);
	  } else {
	    try {
	      throw new Error();
	    } catch (e) {
	      this.stack = e.stack;
	    }
	  }
	}

	/*!
	 * Inherit from Error.prototype
	 */

	AssertionError.prototype = Object.create(Error.prototype);

	/*!
	 * Statically set name
	 */

	AssertionError.prototype.name = 'AssertionError';

	/*!
	 * Ensure correct constructor
	 */

	AssertionError.prototype.constructor = AssertionError;

	/**
	 * Allow errors to be converted to JSON for static transfer.
	 *
	 * @param {Boolean} include stack (default: `true`)
	 * @return {Object} object that can be `JSON.stringify`
	 */

	AssertionError.prototype.toJSON = function (stack) {
	  var extend = exclude('constructor', 'toJSON', 'stack'),
	      props = extend({ name: this.name }, this);

	  // include stack if exists and not turned off
	  if (false !== stack && this.stack) {
	    props.stack = this.stack;
	  }

	  return props;
	};

/***/ },

/***/ 344:
/*!****************************************!*\
  !*** ./~/chai/lib/chai/utils/index.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/*!
	 * chai
	 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/*!
	 * Main exports
	 */

	var _exports = module.exports = {};

	/*!
	 * test utility
	 */

	_exports.test = __webpack_require__(/*! ./test */ 345);

	/*!
	 * type utility
	 */

	_exports.type = __webpack_require__(/*! type-detect */ 347);

	/*!
	 * expectTypes utility
	 */
	_exports.expectTypes = __webpack_require__(/*! ./expectTypes */ 349);

	/*!
	 * message utility
	 */

	_exports.getMessage = __webpack_require__(/*! ./getMessage */ 350);

	/*!
	 * actual utility
	 */

	_exports.getActual = __webpack_require__(/*! ./getActual */ 351);

	/*!
	 * Inspect util
	 */

	_exports.inspect = __webpack_require__(/*! ./inspect */ 352);

	/*!
	 * Object Display util
	 */

	_exports.objDisplay = __webpack_require__(/*! ./objDisplay */ 356);

	/*!
	 * Flag utility
	 */

	_exports.flag = __webpack_require__(/*! ./flag */ 346);

	/*!
	 * Flag transferring utility
	 */

	_exports.transferFlags = __webpack_require__(/*! ./transferFlags */ 358);

	/*!
	 * Deep equal utility
	 */

	_exports.eql = __webpack_require__(/*! deep-eql */ 359);

	/*!
	 * Deep path value
	 */

	_exports.getPathValue = __webpack_require__(/*! ./getPathValue */ 367);

	/*!
	 * Deep path info
	 */

	_exports.getPathInfo = __webpack_require__(/*! ./getPathInfo */ 368);

	/*!
	 * Check if a property exists
	 */

	_exports.hasProperty = __webpack_require__(/*! ./hasProperty */ 369);

	/*!
	 * Function name
	 */

	_exports.getName = __webpack_require__(/*! ./getName */ 353);

	/*!
	 * add Property
	 */

	_exports.addProperty = __webpack_require__(/*! ./addProperty */ 370);

	/*!
	 * add Method
	 */

	_exports.addMethod = __webpack_require__(/*! ./addMethod */ 371);

	/*!
	 * overwrite Property
	 */

	_exports.overwriteProperty = __webpack_require__(/*! ./overwriteProperty */ 372);

	/*!
	 * overwrite Method
	 */

	_exports.overwriteMethod = __webpack_require__(/*! ./overwriteMethod */ 373);

	/*!
	 * Add a chainable method
	 */

	_exports.addChainableMethod = __webpack_require__(/*! ./addChainableMethod */ 374);

	/*!
	 * Overwrite chainable method
	 */

	_exports.overwriteChainableMethod = __webpack_require__(/*! ./overwriteChainableMethod */ 375);

/***/ },

/***/ 345:
/*!***************************************!*\
  !*** ./~/chai/lib/chai/utils/test.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/*!
	 * Chai - test utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/*!
	 * Module dependancies
	 */

	var flag = __webpack_require__(/*! ./flag */ 346);

	/**
	 * # test(object, expression)
	 *
	 * Test and object for expression.
	 *
	 * @param {Object} object (constructed Assertion)
	 * @param {Arguments} chai.Assertion.prototype.assert arguments
	 * @namespace Utils
	 * @name test
	 */

	module.exports = function (obj, args) {
	  var negate = flag(obj, 'negate'),
	      expr = args[0];
	  return negate ? !expr : expr;
	};

/***/ },

/***/ 346:
/*!***************************************!*\
  !*** ./~/chai/lib/chai/utils/flag.js ***!
  \***************************************/
/***/ function(module, exports) {

	"use strict";

	/*!
	 * Chai - flag utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/**
	 * ### flag(object, key, [value])
	 *
	 * Get or set a flag value on an object. If a
	 * value is provided it will be set, else it will
	 * return the currently set value or `undefined` if
	 * the value is not set.
	 *
	 *     utils.flag(this, 'foo', 'bar'); // setter
	 *     utils.flag(this, 'foo'); // getter, returns `bar`
	 *
	 * @param {Object} object constructed Assertion
	 * @param {String} key
	 * @param {Mixed} value (optional)
	 * @namespace Utils
	 * @name flag
	 * @api private
	 */

	module.exports = function (obj, key, value) {
	  var flags = obj.__flags || (obj.__flags = Object.create(null));
	  if (arguments.length === 3) {
	    flags[key] = value;
	  } else {
	    return flags[key];
	  }
	};

/***/ },

/***/ 347:
/*!***************************************!*\
  !*** ./~/chai/~/type-detect/index.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(/*! ./lib/type */ 348);

/***/ },

/***/ 348:
/*!******************************************!*\
  !*** ./~/chai/~/type-detect/lib/type.js ***!
  \******************************************/
/***/ function(module, exports) {

	'use strict';

	/*!
	 * type-detect
	 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/*!
	 * Primary Exports
	 */

	var _exports = module.exports = getType;

	/**
	 * ### typeOf (obj)
	 *
	 * Use several different techniques to determine
	 * the type of object being tested.
	 *
	 *
	 * @param {Mixed} object
	 * @return {String} object type
	 * @api public
	 */
	var objectTypeRegexp = /^\[object (.*)\]$/;

	function getType(obj) {
	  var type = Object.prototype.toString.call(obj).match(objectTypeRegexp)[1].toLowerCase();
	  // Let "new String('')" return 'object'
	  if (typeof Promise === 'function' && obj instanceof Promise) return 'promise';
	  // PhantomJS has type "DOMWindow" for null
	  if (obj === null) return 'null';
	  // PhantomJS has type "DOMWindow" for undefined
	  if (obj === undefined) return 'undefined';
	  return type;
	}

	_exports.Library = Library;

	/**
	 * ### Library
	 *
	 * Create a repository for custom type detection.
	 *
	 * ```js
	 * var lib = new type.Library;
	 * ```
	 *
	 */

	function Library() {
	  if (!(this instanceof Library)) return new Library();
	  this.tests = {};
	}

	/**
	 * #### .of (obj)
	 *
	 * Expose replacement `typeof` detection to the library.
	 *
	 * ```js
	 * if ('string' === lib.of('hello world')) {
	 *   // ...
	 * }
	 * ```
	 *
	 * @param {Mixed} object to test
	 * @return {String} type
	 */

	Library.prototype.of = getType;

	/**
	 * #### .define (type, test)
	 *
	 * Add a test to for the `.test()` assertion.
	 *
	 * Can be defined as a regular expression:
	 *
	 * ```js
	 * lib.define('int', /^[0-9]+$/);
	 * ```
	 *
	 * ... or as a function:
	 *
	 * ```js
	 * lib.define('bln', function (obj) {
	 *   if ('boolean' === lib.of(obj)) return true;
	 *   var blns = [ 'yes', 'no', 'true', 'false', 1, 0 ];
	 *   if ('string' === lib.of(obj)) obj = obj.toLowerCase();
	 *   return !! ~blns.indexOf(obj);
	 * });
	 * ```
	 *
	 * @param {String} type
	 * @param {RegExp|Function} test
	 * @api public
	 */

	Library.prototype.define = function (type, test) {
	  if (arguments.length === 1) return this.tests[type];
	  this.tests[type] = test;
	  return this;
	};

	/**
	 * #### .test (obj, test)
	 *
	 * Assert that an object is of type. Will first
	 * check natives, and if that does not pass it will
	 * use the user defined custom tests.
	 *
	 * ```js
	 * assert(lib.test('1', 'int'));
	 * assert(lib.test('yes', 'bln'));
	 * ```
	 *
	 * @param {Mixed} object
	 * @param {String} type
	 * @return {Boolean} result
	 * @api public
	 */

	Library.prototype.test = function (obj, type) {
	  if (type === getType(obj)) return true;
	  var test = this.tests[type];

	  if (test && 'regexp' === getType(test)) {
	    return test.test(obj);
	  } else if (test && 'function' === getType(test)) {
	    return test(obj);
	  } else {
	    throw new ReferenceError('Type test "' + type + '" not defined or invalid.');
	  }
	};

/***/ },

/***/ 349:
/*!**********************************************!*\
  !*** ./~/chai/lib/chai/utils/expectTypes.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/*!
	 * Chai - expectTypes utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/**
	 * ### expectTypes(obj, types)
	 *
	 * Ensures that the object being tested against is of a valid type.
	 *
	 *     utils.expectTypes(this, ['array', 'object', 'string']);
	 *
	 * @param {Mixed} obj constructed Assertion
	 * @param {Array} type A list of allowed types for this assertion
	 * @namespace Utils
	 * @name expectTypes
	 * @api public
	 */

	var AssertionError = __webpack_require__(/*! assertion-error */ 343);
	var flag = __webpack_require__(/*! ./flag */ 346);
	var type = __webpack_require__(/*! type-detect */ 347);

	module.exports = function (obj, types) {
	  var obj = flag(obj, 'object');
	  types = types.map(function (t) {
	    return t.toLowerCase();
	  });
	  types.sort();

	  // Transforms ['lorem', 'ipsum'] into 'a lirum, or an ipsum'
	  var str = types.map(function (t, index) {
	    var art = ~['a', 'e', 'i', 'o', 'u'].indexOf(t.charAt(0)) ? 'an' : 'a';
	    var or = types.length > 1 && index === types.length - 1 ? 'or ' : '';
	    return or + art + ' ' + t;
	  }).join(', ');

	  if (!types.some(function (expected) {
	    return type(obj) === expected;
	  })) {
	    throw new AssertionError('object tested must be ' + str + ', but ' + type(obj) + ' given');
	  }
	};

/***/ },

/***/ 350:
/*!*********************************************!*\
  !*** ./~/chai/lib/chai/utils/getMessage.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/*!
	 * Chai - message composition utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/*!
	 * Module dependancies
	 */

	var flag = __webpack_require__(/*! ./flag */ 346),
	    getActual = __webpack_require__(/*! ./getActual */ 351),
	    inspect = __webpack_require__(/*! ./inspect */ 352),
	    objDisplay = __webpack_require__(/*! ./objDisplay */ 356);

	/**
	 * ### .getMessage(object, message, negateMessage)
	 *
	 * Construct the error message based on flags
	 * and template tags. Template tags will return
	 * a stringified inspection of the object referenced.
	 *
	 * Message template tags:
	 * - `#{this}` current asserted object
	 * - `#{act}` actual value
	 * - `#{exp}` expected value
	 *
	 * @param {Object} object (constructed Assertion)
	 * @param {Arguments} chai.Assertion.prototype.assert arguments
	 * @namespace Utils
	 * @name getMessage
	 * @api public
	 */

	module.exports = function (obj, args) {
	  var negate = flag(obj, 'negate'),
	      val = flag(obj, 'object'),
	      expected = args[3],
	      actual = getActual(obj, args),
	      msg = negate ? args[2] : args[1],
	      flagMsg = flag(obj, 'message');

	  if (typeof msg === "function") msg = msg();
	  msg = msg || '';
	  msg = msg.replace(/#\{this\}/g, function () {
	    return objDisplay(val);
	  }).replace(/#\{act\}/g, function () {
	    return objDisplay(actual);
	  }).replace(/#\{exp\}/g, function () {
	    return objDisplay(expected);
	  });

	  return flagMsg ? flagMsg + ': ' + msg : msg;
	};

/***/ },

/***/ 351:
/*!********************************************!*\
  !*** ./~/chai/lib/chai/utils/getActual.js ***!
  \********************************************/
/***/ function(module, exports) {

	"use strict";

	/*!
	 * Chai - getActual utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/**
	 * # getActual(object, [actual])
	 *
	 * Returns the `actual` value for an Assertion
	 *
	 * @param {Object} object (constructed Assertion)
	 * @param {Arguments} chai.Assertion.prototype.assert arguments
	 * @namespace Utils
	 * @name getActual
	 */

	module.exports = function (obj, args) {
	  return args.length > 4 ? args[4] : obj._obj;
	};

/***/ },

/***/ 352:
/*!******************************************!*\
  !*** ./~/chai/lib/chai/utils/inspect.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// This is (almost) directly from Node.js utils
	// https://github.com/joyent/node/blob/f8c335d0caf47f16d31413f89aa28eda3878e3aa/lib/util.js

	var getName = __webpack_require__(/*! ./getName */ 353);
	var getProperties = __webpack_require__(/*! ./getProperties */ 354);
	var getEnumerableProperties = __webpack_require__(/*! ./getEnumerableProperties */ 355);

	module.exports = inspect;

	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Boolean} showHidden Flag that shows hidden (not enumerable)
	 *    properties of objects.
	 * @param {Number} depth Depth in which to descend in object. Default is 2.
	 * @param {Boolean} colors Flag to turn on ANSI escape codes to color the
	 *    output. Default is false (no coloring).
	 * @namespace Utils
	 * @name inspect
	 */
	function inspect(obj, showHidden, depth, colors) {
	  var ctx = {
	    showHidden: showHidden,
	    seen: [],
	    stylize: function (str) {
	      return str;
	    }
	  };
	  return formatValue(ctx, obj, typeof depth === 'undefined' ? 2 : depth);
	}

	// Returns true if object is a DOM element.
	var isDOMElement = function (object) {
	  if (typeof HTMLElement === 'object') {
	    return object instanceof HTMLElement;
	  } else {
	    return object && typeof object === 'object' && object.nodeType === 1 && typeof object.nodeName === 'string';
	  }
	};

	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (value && typeof value.inspect === 'function' &&
	  // Filter out the util module, it's inspect function is special
	  value.inspect !== exports.inspect &&
	  // Also filter out any prototype objects using the circular check.
	  !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes);
	    if (typeof ret !== 'string') {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }

	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }

	  // If this is a DOM element, try to get the outer HTML.
	  if (isDOMElement(value)) {
	    if ('outerHTML' in value) {
	      return value.outerHTML;
	      // This value does not have an outerHTML attribute,
	      //   it could still be an XML element
	    } else {
	      // Attempt to serialize it
	      try {
	        if (document.xmlVersion) {
	          var xmlSerializer = new XMLSerializer();
	          return xmlSerializer.serializeToString(value);
	        } else {
	          // Firefox 11- do not support outerHTML
	          //   It does, however, support innerHTML
	          //   Use the following to render the element
	          var ns = "http://www.w3.org/1999/xhtml";
	          var container = document.createElementNS(ns, '_');

	          container.appendChild(value.cloneNode(false));
	          html = container.innerHTML.replace('><', '>' + value.innerHTML + '<');
	          container.innerHTML = '';
	          return html;
	        }
	      } catch (err) {
	        // This could be a non-native DOM implementation,
	        //   continue with the normal flow:
	        //   printing the element as if it is an object.
	      }
	    }
	  }

	  // Look up the keys of the object.
	  var visibleKeys = getEnumerableProperties(value);
	  var keys = ctx.showHidden ? getProperties(value) : visibleKeys;

	  // Some type of object without properties can be shortcutted.
	  // In IE, errors have a single `stack` property, or if they are vanilla `Error`,
	  // a `stack` plus `description` property; ignore those for consistency.
	  if (keys.length === 0 || isError(value) && (keys.length === 1 && keys[0] === 'stack' || keys.length === 2 && keys[0] === 'description' && keys[1] === 'stack')) {
	    if (typeof value === 'function') {
	      var name = getName(value);
	      var nameSuffix = name ? ': ' + name : '';
	      return ctx.stylize('[Function' + nameSuffix + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toUTCString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }

	  var base = '',
	      array = false,
	      braces = ['{', '}'];

	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }

	  // Make functions say that they are functions
	  if (typeof value === 'function') {
	    var name = getName(value);
	    var nameSuffix = name ? ': ' + name : '';
	    base = ' [Function' + nameSuffix + ']';
	  }

	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }

	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }

	  // Make error with message first say the error
	  if (isError(value)) {
	    return formatError(value);
	  }

	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }

	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }

	  ctx.seen.push(value);

	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function (key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }

	  ctx.seen.pop();

	  return reduceToSingleString(output, base, braces);
	}

	function formatPrimitive(ctx, value) {
	  switch (typeof value) {
	    case 'undefined':
	      return ctx.stylize('undefined', 'undefined');

	    case 'string':
	      var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
	      return ctx.stylize(simple, 'string');

	    case 'number':
	      if (value === 0 && 1 / value === -Infinity) {
	        return ctx.stylize('-0', 'number');
	      }
	      return ctx.stylize('' + value, 'number');

	    case 'boolean':
	      return ctx.stylize('' + value, 'boolean');
	  }
	  // For some reason typeof null is "object", so special case here.
	  if (value === null) {
	    return ctx.stylize('null', 'null');
	  }
	}

	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}

	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (Object.prototype.hasOwnProperty.call(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function (key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
	    }
	  });
	  return output;
	}

	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str;
	  if (value.__lookupGetter__) {
	    if (value.__lookupGetter__(key)) {
	      if (value.__lookupSetter__(key)) {
	        str = ctx.stylize('[Getter/Setter]', 'special');
	      } else {
	        str = ctx.stylize('[Getter]', 'special');
	      }
	    } else {
	      if (value.__lookupSetter__(key)) {
	        str = ctx.stylize('[Setter]', 'special');
	      }
	    }
	  }
	  if (visibleKeys.indexOf(key) < 0) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(value[key]) < 0) {
	      if (recurseTimes === null) {
	        str = formatValue(ctx, value[key], null);
	      } else {
	        str = formatValue(ctx, value[key], recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function (line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function (line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (typeof name === 'undefined') {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }

	  return name + ': ' + str;
	}

	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function (prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.length + 1;
	  }, 0);

	  if (length > 60) {
	    return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
	  }

	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}

	function isArray(ar) {
	  return Array.isArray(ar) || typeof ar === 'object' && objectToString(ar) === '[object Array]';
	}

	function isRegExp(re) {
	  return typeof re === 'object' && objectToString(re) === '[object RegExp]';
	}

	function isDate(d) {
	  return typeof d === 'object' && objectToString(d) === '[object Date]';
	}

	function isError(e) {
	  return typeof e === 'object' && objectToString(e) === '[object Error]';
	}

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}

/***/ },

/***/ 353:
/*!******************************************!*\
  !*** ./~/chai/lib/chai/utils/getName.js ***!
  \******************************************/
/***/ function(module, exports) {

	"use strict";

	/*!
	 * Chai - getName utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/**
	 * # getName(func)
	 *
	 * Gets the name of a function, in a cross-browser way.
	 *
	 * @param {Function} a function (usually a constructor)
	 * @namespace Utils
	 * @name getName
	 */

	module.exports = function (func) {
	  if (func.name) return func.name;

	  var match = /^\s?function ([^(]*)\(/.exec(func);
	  return match && match[1] ? match[1] : "";
	};

/***/ },

/***/ 354:
/*!************************************************!*\
  !*** ./~/chai/lib/chai/utils/getProperties.js ***!
  \************************************************/
/***/ function(module, exports) {

	"use strict";

	/*!
	 * Chai - getProperties utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/**
	 * ### .getProperties(object)
	 *
	 * This allows the retrieval of property names of an object, enumerable or not,
	 * inherited or not.
	 *
	 * @param {Object} object
	 * @returns {Array}
	 * @namespace Utils
	 * @name getProperties
	 * @api public
	 */

	module.exports = function getProperties(object) {
	  var result = Object.getOwnPropertyNames(object);

	  function addProperty(property) {
	    if (result.indexOf(property) === -1) {
	      result.push(property);
	    }
	  }

	  var proto = Object.getPrototypeOf(object);
	  while (proto !== null) {
	    Object.getOwnPropertyNames(proto).forEach(addProperty);
	    proto = Object.getPrototypeOf(proto);
	  }

	  return result;
	};

/***/ },

/***/ 355:
/*!**********************************************************!*\
  !*** ./~/chai/lib/chai/utils/getEnumerableProperties.js ***!
  \**********************************************************/
/***/ function(module, exports) {

	"use strict";

	/*!
	 * Chai - getEnumerableProperties utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/**
	 * ### .getEnumerableProperties(object)
	 *
	 * This allows the retrieval of enumerable property names of an object,
	 * inherited or not.
	 *
	 * @param {Object} object
	 * @returns {Array}
	 * @namespace Utils
	 * @name getEnumerableProperties
	 * @api public
	 */

	module.exports = function getEnumerableProperties(object) {
	  var result = [];
	  for (var name in object) {
	    result.push(name);
	  }
	  return result;
	};

/***/ },

/***/ 356:
/*!*********************************************!*\
  !*** ./~/chai/lib/chai/utils/objDisplay.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/*!
	 * Chai - flag utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/*!
	 * Module dependancies
	 */

	var inspect = __webpack_require__(/*! ./inspect */ 352);
	var config = __webpack_require__(/*! ../config */ 357);

	/**
	 * ### .objDisplay (object)
	 *
	 * Determines if an object or an array matches
	 * criteria to be inspected in-line for error
	 * messages or should be truncated.
	 *
	 * @param {Mixed} javascript object to inspect
	 * @name objDisplay
	 * @namespace Utils
	 * @api public
	 */

	module.exports = function (obj) {
	  var str = inspect(obj),
	      type = Object.prototype.toString.call(obj);

	  if (config.truncateThreshold && str.length >= config.truncateThreshold) {
	    if (type === '[object Function]') {
	      return !obj.name || obj.name === '' ? '[Function]' : '[Function: ' + obj.name + ']';
	    } else if (type === '[object Array]') {
	      return '[ Array(' + obj.length + ') ]';
	    } else if (type === '[object Object]') {
	      var keys = Object.keys(obj),
	          kstr = keys.length > 2 ? keys.splice(0, 2).join(', ') + ', ...' : keys.join(', ');
	      return '{ Object (' + kstr + ') }';
	    } else {
	      return str;
	    }
	  } else {
	    return str;
	  }
	};

/***/ },

/***/ 357:
/*!***********************************!*\
  !*** ./~/chai/lib/chai/config.js ***!
  \***********************************/
/***/ function(module, exports) {

	"use strict";

	module.exports = {

	  /**
	   * ### config.includeStack
	   *
	   * User configurable property, influences whether stack trace
	   * is included in Assertion error message. Default of false
	   * suppresses stack trace in the error message.
	   *
	   *     chai.config.includeStack = true;  // enable stack on error
	   *
	   * @param {Boolean}
	   * @api public
	   */

	  includeStack: false,

	  /**
	   * ### config.showDiff
	   *
	   * User configurable property, influences whether or not
	   * the `showDiff` flag should be included in the thrown
	   * AssertionErrors. `false` will always be `false`; `true`
	   * will be true when the assertion has requested a diff
	   * be shown.
	   *
	   * @param {Boolean}
	   * @api public
	   */

	  showDiff: true,

	  /**
	   * ### config.truncateThreshold
	   *
	   * User configurable property, sets length threshold for actual and
	   * expected values in assertion errors. If this threshold is exceeded, for
	   * example for large data structures, the value is replaced with something
	   * like `[ Array(3) ]` or `{ Object (prop1, prop2) }`.
	   *
	   * Set it to zero if you want to disable truncating altogether.
	   *
	   * This is especially userful when doing assertions on arrays: having this
	   * set to a reasonable large value makes the failure messages readily
	   * inspectable.
	   *
	   *     chai.config.truncateThreshold = 0;  // disable truncating
	   *
	   * @param {Number}
	   * @api public
	   */

	  truncateThreshold: 40

	};

/***/ },

/***/ 358:
/*!************************************************!*\
  !*** ./~/chai/lib/chai/utils/transferFlags.js ***!
  \************************************************/
/***/ function(module, exports) {

	'use strict';

	/*!
	 * Chai - transferFlags utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/**
	 * ### transferFlags(assertion, object, includeAll = true)
	 *
	 * Transfer all the flags for `assertion` to `object`. If
	 * `includeAll` is set to `false`, then the base Chai
	 * assertion flags (namely `object`, `ssfi`, and `message`)
	 * will not be transferred.
	 *
	 *
	 *     var newAssertion = new Assertion();
	 *     utils.transferFlags(assertion, newAssertion);
	 *
	 *     var anotherAsseriton = new Assertion(myObj);
	 *     utils.transferFlags(assertion, anotherAssertion, false);
	 *
	 * @param {Assertion} assertion the assertion to transfer the flags from
	 * @param {Object} object the object to transfer the flags to; usually a new assertion
	 * @param {Boolean} includeAll
	 * @namespace Utils
	 * @name transferFlags
	 * @api private
	 */

	module.exports = function (assertion, object, includeAll) {
	  var flags = assertion.__flags || (assertion.__flags = Object.create(null));

	  if (!object.__flags) {
	    object.__flags = Object.create(null);
	  }

	  includeAll = arguments.length === 3 ? includeAll : true;

	  for (var flag in flags) {
	    if (includeAll || flag !== 'object' && flag !== 'ssfi' && flag != 'message') {
	      object.__flags[flag] = flags[flag];
	    }
	  }
	};

/***/ },

/***/ 359:
/*!************************************!*\
  !*** ./~/chai/~/deep-eql/index.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(/*! ./lib/eql */ 360);

/***/ },

/***/ 360:
/*!**************************************!*\
  !*** ./~/chai/~/deep-eql/lib/eql.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/*!
	 * deep-eql
	 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/*!
	 * Module dependencies
	 */

	var type = __webpack_require__(/*! type-detect */ 361);

	/*!
	 * Buffer.isBuffer browser shim
	 */

	var Buffer;
	try {
	  Buffer = __webpack_require__(/*! buffer */ 363).Buffer;
	} catch (ex) {
	  Buffer = {};
	  Buffer.isBuffer = function () {
	    return false;
	  };
	}

	/*!
	 * Primary Export
	 */

	module.exports = deepEqual;

	/**
	 * Assert super-strict (egal) equality between
	 * two objects of any type.
	 *
	 * @param {Mixed} a
	 * @param {Mixed} b
	 * @param {Array} memoised (optional)
	 * @return {Boolean} equal match
	 */

	function deepEqual(a, b, m) {
	  if (sameValue(a, b)) {
	    return true;
	  } else if ('date' === type(a)) {
	    return dateEqual(a, b);
	  } else if ('regexp' === type(a)) {
	    return regexpEqual(a, b);
	  } else if (Buffer.isBuffer(a)) {
	    return bufferEqual(a, b);
	  } else if ('arguments' === type(a)) {
	    return argumentsEqual(a, b, m);
	  } else if (!typeEqual(a, b)) {
	    return false;
	  } else if ('object' !== type(a) && 'object' !== type(b) && 'array' !== type(a) && 'array' !== type(b)) {
	    return sameValue(a, b);
	  } else {
	    return objectEqual(a, b, m);
	  }
	}

	/*!
	 * Strict (egal) equality test. Ensures that NaN always
	 * equals NaN and `-0` does not equal `+0`.
	 *
	 * @param {Mixed} a
	 * @param {Mixed} b
	 * @return {Boolean} equal match
	 */

	function sameValue(a, b) {
	  if (a === b) return a !== 0 || 1 / a === 1 / b;
	  return a !== a && b !== b;
	}

	/*!
	 * Compare the types of two given objects and
	 * return if they are equal. Note that an Array
	 * has a type of `array` (not `object`) and arguments
	 * have a type of `arguments` (not `array`/`object`).
	 *
	 * @param {Mixed} a
	 * @param {Mixed} b
	 * @return {Boolean} result
	 */

	function typeEqual(a, b) {
	  return type(a) === type(b);
	}

	/*!
	 * Compare two Date objects by asserting that
	 * the time values are equal using `saveValue`.
	 *
	 * @param {Date} a
	 * @param {Date} b
	 * @return {Boolean} result
	 */

	function dateEqual(a, b) {
	  if ('date' !== type(b)) return false;
	  return sameValue(a.getTime(), b.getTime());
	}

	/*!
	 * Compare two regular expressions by converting them
	 * to string and checking for `sameValue`.
	 *
	 * @param {RegExp} a
	 * @param {RegExp} b
	 * @return {Boolean} result
	 */

	function regexpEqual(a, b) {
	  if ('regexp' !== type(b)) return false;
	  return sameValue(a.toString(), b.toString());
	}

	/*!
	 * Assert deep equality of two `arguments` objects.
	 * Unfortunately, these must be sliced to arrays
	 * prior to test to ensure no bad behavior.
	 *
	 * @param {Arguments} a
	 * @param {Arguments} b
	 * @param {Array} memoize (optional)
	 * @return {Boolean} result
	 */

	function argumentsEqual(a, b, m) {
	  if ('arguments' !== type(b)) return false;
	  a = [].slice.call(a);
	  b = [].slice.call(b);
	  return deepEqual(a, b, m);
	}

	/*!
	 * Get enumerable properties of a given object.
	 *
	 * @param {Object} a
	 * @return {Array} property names
	 */

	function enumerable(a) {
	  var res = [];
	  for (var key in a) res.push(key);
	  return res;
	}

	/*!
	 * Simple equality for flat iterable objects
	 * such as Arrays or Node.js buffers.
	 *
	 * @param {Iterable} a
	 * @param {Iterable} b
	 * @return {Boolean} result
	 */

	function iterableEqual(a, b) {
	  if (a.length !== b.length) return false;

	  var i = 0;
	  var match = true;

	  for (; i < a.length; i++) {
	    if (a[i] !== b[i]) {
	      match = false;
	      break;
	    }
	  }

	  return match;
	}

	/*!
	 * Extension to `iterableEqual` specifically
	 * for Node.js Buffers.
	 *
	 * @param {Buffer} a
	 * @param {Mixed} b
	 * @return {Boolean} result
	 */

	function bufferEqual(a, b) {
	  if (!Buffer.isBuffer(b)) return false;
	  return iterableEqual(a, b);
	}

	/*!
	 * Block for `objectEqual` ensuring non-existing
	 * values don't get in.
	 *
	 * @param {Mixed} object
	 * @return {Boolean} result
	 */

	function isValue(a) {
	  return a !== null && a !== undefined;
	}

	/*!
	 * Recursively check the equality of two objects.
	 * Once basic sameness has been established it will
	 * defer to `deepEqual` for each enumerable key
	 * in the object.
	 *
	 * @param {Mixed} a
	 * @param {Mixed} b
	 * @return {Boolean} result
	 */

	function objectEqual(a, b, m) {
	  if (!isValue(a) || !isValue(b)) {
	    return false;
	  }

	  if (a.prototype !== b.prototype) {
	    return false;
	  }

	  var i;
	  if (m) {
	    for (i = 0; i < m.length; i++) {
	      if (m[i][0] === a && m[i][1] === b || m[i][0] === b && m[i][1] === a) {
	        return true;
	      }
	    }
	  } else {
	    m = [];
	  }

	  try {
	    var ka = enumerable(a);
	    var kb = enumerable(b);
	  } catch (ex) {
	    return false;
	  }

	  ka.sort();
	  kb.sort();

	  if (!iterableEqual(ka, kb)) {
	    return false;
	  }

	  m.push([a, b]);

	  var key;
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], m)) {
	      return false;
	    }
	  }

	  return true;
	}

/***/ },

/***/ 361:
/*!**************************************************!*\
  !*** ./~/chai/~/deep-eql/~/type-detect/index.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(/*! ./lib/type */ 362);

/***/ },

/***/ 362:
/*!*****************************************************!*\
  !*** ./~/chai/~/deep-eql/~/type-detect/lib/type.js ***!
  \*****************************************************/
/***/ function(module, exports) {

	'use strict';

	/*!
	 * type-detect
	 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/*!
	 * Primary Exports
	 */

	var _exports = module.exports = getType;

	/*!
	 * Detectable javascript natives
	 */

	var natives = {
	  '[object Array]': 'array',
	  '[object RegExp]': 'regexp',
	  '[object Function]': 'function',
	  '[object Arguments]': 'arguments',
	  '[object Date]': 'date'
	};

	/**
	 * ### typeOf (obj)
	 *
	 * Use several different techniques to determine
	 * the type of object being tested.
	 *
	 *
	 * @param {Mixed} object
	 * @return {String} object type
	 * @api public
	 */

	function getType(obj) {
	  var str = Object.prototype.toString.call(obj);
	  if (natives[str]) return natives[str];
	  if (obj === null) return 'null';
	  if (obj === undefined) return 'undefined';
	  if (obj === Object(obj)) return 'object';
	  return typeof obj;
	}

	_exports.Library = Library;

	/**
	 * ### Library
	 *
	 * Create a repository for custom type detection.
	 *
	 * ```js
	 * var lib = new type.Library;
	 * ```
	 *
	 */

	function Library() {
	  this.tests = {};
	}

	/**
	 * #### .of (obj)
	 *
	 * Expose replacement `typeof` detection to the library.
	 *
	 * ```js
	 * if ('string' === lib.of('hello world')) {
	 *   // ...
	 * }
	 * ```
	 *
	 * @param {Mixed} object to test
	 * @return {String} type
	 */

	Library.prototype.of = getType;

	/**
	 * #### .define (type, test)
	 *
	 * Add a test to for the `.test()` assertion.
	 *
	 * Can be defined as a regular expression:
	 *
	 * ```js
	 * lib.define('int', /^[0-9]+$/);
	 * ```
	 *
	 * ... or as a function:
	 *
	 * ```js
	 * lib.define('bln', function (obj) {
	 *   if ('boolean' === lib.of(obj)) return true;
	 *   var blns = [ 'yes', 'no', 'true', 'false', 1, 0 ];
	 *   if ('string' === lib.of(obj)) obj = obj.toLowerCase();
	 *   return !! ~blns.indexOf(obj);
	 * });
	 * ```
	 *
	 * @param {String} type
	 * @param {RegExp|Function} test
	 * @api public
	 */

	Library.prototype.define = function (type, test) {
	  if (arguments.length === 1) return this.tests[type];
	  this.tests[type] = test;
	  return this;
	};

	/**
	 * #### .test (obj, test)
	 *
	 * Assert that an object is of type. Will first
	 * check natives, and if that does not pass it will
	 * use the user defined custom tests.
	 *
	 * ```js
	 * assert(lib.test('1', 'int'));
	 * assert(lib.test('yes', 'bln'));
	 * ```
	 *
	 * @param {Mixed} object
	 * @param {String} type
	 * @return {Boolean} result
	 * @api public
	 */

	Library.prototype.test = function (obj, type) {
	  if (type === getType(obj)) return true;
	  var test = this.tests[type];

	  if (test && 'regexp' === getType(test)) {
	    return test.test(obj);
	  } else if (test && 'function' === getType(test)) {
	    return test(obj);
	  } else {
	    throw new ReferenceError('Type test "' + type + '" not defined or invalid.');
	  }
	};

/***/ },

/***/ 363:
/*!*******************************************************!*\
  !*** (webpack)/~/node-libs-browser/~/buffer/index.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer, global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */

	'use strict';

	var base64 = __webpack_require__(/*! base64-js */ 364);
	var ieee754 = __webpack_require__(/*! ieee754 */ 365);
	var isArray = __webpack_require__(/*! isarray */ 366);

	exports.Buffer = Buffer;
	exports.SlowBuffer = SlowBuffer;
	exports.INSPECT_MAX_BYTES = 50;

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();

	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	exports.kMaxLength = kMaxLength();

	function typedArraySupport() {
	  try {
	    var arr = new Uint8Array(1);
	    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function () {
	        return 42;
	      } };
	    return arr.foo() === 42 && // typed array instances can be augmented
	    typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	    arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
	  } catch (e) {
	    return false;
	  }
	}

	function kMaxLength() {
	  return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
	}

	function createBuffer(that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length');
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length);
	    that.__proto__ = Buffer.prototype;
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length);
	    }
	    that.length = length;
	  }

	  return that;
	}

	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */

	function Buffer(arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length);
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error('If encoding is specified then the first argument must be a string');
	    }
	    return allocUnsafe(this, arg);
	  }
	  return from(this, arg, encodingOrOffset, length);
	}

	Buffer.poolSize = 8192; // not used by this implementation

	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype;
	  return arr;
	};

	function from(that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number');
	  }

	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length);
	  }

	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset);
	  }

	  return fromObject(that, value);
	}

	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length);
	};

	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype;
	  Buffer.__proto__ = Uint8Array;
	  if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
	    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    });
	  }
	}

	function assertSize(size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number');
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative');
	  }
	}

	function alloc(that, size, fill, encoding) {
	  assertSize(size);
	  if (size <= 0) {
	    return createBuffer(that, size);
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
	  }
	  return createBuffer(that, size);
	}

	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding);
	};

	function allocUnsafe(that, size) {
	  assertSize(size);
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0;
	    }
	  }
	  return that;
	}

	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size);
	};
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size);
	};

	function fromString(that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8';
	  }

	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding');
	  }

	  var length = byteLength(string, encoding) | 0;
	  that = createBuffer(that, length);

	  var actual = that.write(string, encoding);

	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual);
	  }

	  return that;
	}

	function fromArrayLike(that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0;
	  that = createBuffer(that, length);
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255;
	  }
	  return that;
	}

	function fromArrayBuffer(that, array, byteOffset, length) {
	  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds');
	  }

	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds');
	  }

	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array);
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset);
	  } else {
	    array = new Uint8Array(array, byteOffset, length);
	  }

	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array;
	    that.__proto__ = Buffer.prototype;
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array);
	  }
	  return that;
	}

	function fromObject(that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0;
	    that = createBuffer(that, len);

	    if (that.length === 0) {
	      return that;
	    }

	    obj.copy(that, 0, 0, len);
	    return that;
	  }

	  if (obj) {
	    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0);
	      }
	      return fromArrayLike(that, obj);
	    }

	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data);
	    }
	  }

	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
	}

	function checked(length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
	  }
	  return length | 0;
	}

	function SlowBuffer(length) {
	  if (+length != length) {
	    // eslint-disable-line eqeqeq
	    length = 0;
	  }
	  return Buffer.alloc(+length);
	}

	Buffer.isBuffer = function isBuffer(b) {
	  return !!(b != null && b._isBuffer);
	};

	Buffer.compare = function compare(a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers');
	  }

	  if (a === b) return 0;

	  var x = a.length;
	  var y = b.length;

	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i];
	      y = b[i];
	      break;
	    }
	  }

	  if (x < y) return -1;
	  if (y < x) return 1;
	  return 0;
	};

	Buffer.isEncoding = function isEncoding(encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true;
	    default:
	      return false;
	  }
	};

	Buffer.concat = function concat(list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers');
	  }

	  if (list.length === 0) {
	    return Buffer.alloc(0);
	  }

	  var i;
	  if (length === undefined) {
	    length = 0;
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length;
	    }
	  }

	  var buffer = Buffer.allocUnsafe(length);
	  var pos = 0;
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i];
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers');
	    }
	    buf.copy(buffer, pos);
	    pos += buf.length;
	  }
	  return buffer;
	};

	function byteLength(string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length;
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength;
	  }
	  if (typeof string !== 'string') {
	    string = '' + string;
	  }

	  var len = string.length;
	  if (len === 0) return 0;

	  // Use a for loop to avoid recursion
	  var loweredCase = false;
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len;
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length;
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2;
	      case 'hex':
	        return len >>> 1;
	      case 'base64':
	        return base64ToBytes(string).length;
	      default:
	        if (loweredCase) return utf8ToBytes(string).length; // assume utf8
	        encoding = ('' + encoding).toLowerCase();
	        loweredCase = true;
	    }
	  }
	}
	Buffer.byteLength = byteLength;

	function slowToString(encoding, start, end) {
	  var loweredCase = false;

	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.

	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0;
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return '';
	  }

	  if (end === undefined || end > this.length) {
	    end = this.length;
	  }

	  if (end <= 0) {
	    return '';
	  }

	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0;
	  start >>>= 0;

	  if (end <= start) {
	    return '';
	  }

	  if (!encoding) encoding = 'utf8';

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end);

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end);

	      case 'ascii':
	        return asciiSlice(this, start, end);

	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end);

	      case 'base64':
	        return base64Slice(this, start, end);

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end);

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
	        encoding = (encoding + '').toLowerCase();
	        loweredCase = true;
	    }
	  }
	}

	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true;

	function swap(b, n, m) {
	  var i = b[n];
	  b[n] = b[m];
	  b[m] = i;
	}

	Buffer.prototype.swap16 = function swap16() {
	  var len = this.length;
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits');
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1);
	  }
	  return this;
	};

	Buffer.prototype.swap32 = function swap32() {
	  var len = this.length;
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits');
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3);
	    swap(this, i + 1, i + 2);
	  }
	  return this;
	};

	Buffer.prototype.swap64 = function swap64() {
	  var len = this.length;
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits');
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7);
	    swap(this, i + 1, i + 6);
	    swap(this, i + 2, i + 5);
	    swap(this, i + 3, i + 4);
	  }
	  return this;
	};

	Buffer.prototype.toString = function toString() {
	  var length = this.length | 0;
	  if (length === 0) return '';
	  if (arguments.length === 0) return utf8Slice(this, 0, length);
	  return slowToString.apply(this, arguments);
	};

	Buffer.prototype.equals = function equals(b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
	  if (this === b) return true;
	  return Buffer.compare(this, b) === 0;
	};

	Buffer.prototype.inspect = function inspect() {
	  var str = '';
	  var max = exports.INSPECT_MAX_BYTES;
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
	    if (this.length > max) str += ' ... ';
	  }
	  return '<Buffer ' + str + '>';
	};

	Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer');
	  }

	  if (start === undefined) {
	    start = 0;
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0;
	  }
	  if (thisStart === undefined) {
	    thisStart = 0;
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length;
	  }

	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index');
	  }

	  if (thisStart >= thisEnd && start >= end) {
	    return 0;
	  }
	  if (thisStart >= thisEnd) {
	    return -1;
	  }
	  if (start >= end) {
	    return 1;
	  }

	  start >>>= 0;
	  end >>>= 0;
	  thisStart >>>= 0;
	  thisEnd >>>= 0;

	  if (this === target) return 0;

	  var x = thisEnd - thisStart;
	  var y = end - start;
	  var len = Math.min(x, y);

	  var thisCopy = this.slice(thisStart, thisEnd);
	  var targetCopy = target.slice(start, end);

	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i];
	      y = targetCopy[i];
	      break;
	    }
	  }

	  if (x < y) return -1;
	  if (y < x) return 1;
	  return 0;
	};

	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1;

	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset;
	    byteOffset = 0;
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff;
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000;
	  }
	  byteOffset = +byteOffset; // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : buffer.length - 1;
	  }

	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1;else byteOffset = buffer.length - 1;
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0;else return -1;
	  }

	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding);
	  }

	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1;
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
	  } else if (typeof val === 'number') {
	    val = val & 0xFF; // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
	      }
	    }
	    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
	  }

	  throw new TypeError('val must be string, number or Buffer');
	}

	function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1;
	  var arrLength = arr.length;
	  var valLength = val.length;

	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase();
	    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1;
	      }
	      indexSize = 2;
	      arrLength /= 2;
	      valLength /= 2;
	      byteOffset /= 2;
	    }
	  }

	  function read(buf, i) {
	    if (indexSize === 1) {
	      return buf[i];
	    } else {
	      return buf.readUInt16BE(i * indexSize);
	    }
	  }

	  var i;
	  if (dir) {
	    var foundIndex = -1;
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i;
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex;
	        foundIndex = -1;
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true;
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false;
	          break;
	        }
	      }
	      if (found) return i;
	    }
	  }

	  return -1;
	}

	Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1;
	};

	Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
	};

	Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
	};

	function hexWrite(buf, string, offset, length) {
	  offset = Number(offset) || 0;
	  var remaining = buf.length - offset;
	  if (!length) {
	    length = remaining;
	  } else {
	    length = Number(length);
	    if (length > remaining) {
	      length = remaining;
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length;
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

	  if (length > strLen / 2) {
	    length = strLen / 2;
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16);
	    if (isNaN(parsed)) return i;
	    buf[offset + i] = parsed;
	  }
	  return i;
	}

	function utf8Write(buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
	}

	function asciiWrite(buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length);
	}

	function latin1Write(buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length);
	}

	function base64Write(buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length);
	}

	function ucs2Write(buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
	}

	Buffer.prototype.write = function write(string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8';
	    length = this.length;
	    offset = 0;
	    // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset;
	    length = this.length;
	    offset = 0;
	    // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0;
	    if (isFinite(length)) {
	      length = length | 0;
	      if (encoding === undefined) encoding = 'utf8';
	    } else {
	      encoding = length;
	      length = undefined;
	    }
	    // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
	  }

	  var remaining = this.length - offset;
	  if (length === undefined || length > remaining) length = remaining;

	  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds');
	  }

	  if (!encoding) encoding = 'utf8';

	  var loweredCase = false;
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length);

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length);

	      case 'ascii':
	        return asciiWrite(this, string, offset, length);

	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length);

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length);

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length);

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
	        encoding = ('' + encoding).toLowerCase();
	        loweredCase = true;
	    }
	  }
	};

	Buffer.prototype.toJSON = function toJSON() {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  };
	};

	function base64Slice(buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf);
	  } else {
	    return base64.fromByteArray(buf.slice(start, end));
	  }
	}

	function utf8Slice(buf, start, end) {
	  end = Math.min(buf.length, end);
	  var res = [];

	  var i = start;
	  while (i < end) {
	    var firstByte = buf[i];
	    var codePoint = null;
	    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint;

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte;
	          }
	          break;
	        case 2:
	          secondByte = buf[i + 1];
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint;
	            }
	          }
	          break;
	        case 3:
	          secondByte = buf[i + 1];
	          thirdByte = buf[i + 2];
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint;
	            }
	          }
	          break;
	        case 4:
	          secondByte = buf[i + 1];
	          thirdByte = buf[i + 2];
	          fourthByte = buf[i + 3];
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint;
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD;
	      bytesPerSequence = 1;
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000;
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
	      codePoint = 0xDC00 | codePoint & 0x3FF;
	    }

	    res.push(codePoint);
	    i += bytesPerSequence;
	  }

	  return decodeCodePointsArray(res);
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000;

	function decodeCodePointsArray(codePoints) {
	  var len = codePoints.length;
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = '';
	  var i = 0;
	  while (i < len) {
	    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
	  }
	  return res;
	}

	function asciiSlice(buf, start, end) {
	  var ret = '';
	  end = Math.min(buf.length, end);

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F);
	  }
	  return ret;
	}

	function latin1Slice(buf, start, end) {
	  var ret = '';
	  end = Math.min(buf.length, end);

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i]);
	  }
	  return ret;
	}

	function hexSlice(buf, start, end) {
	  var len = buf.length;

	  if (!start || start < 0) start = 0;
	  if (!end || end < 0 || end > len) end = len;

	  var out = '';
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i]);
	  }
	  return out;
	}

	function utf16leSlice(buf, start, end) {
	  var bytes = buf.slice(start, end);
	  var res = '';
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
	  }
	  return res;
	}

	Buffer.prototype.slice = function slice(start, end) {
	  var len = this.length;
	  start = ~~start;
	  end = end === undefined ? len : ~~end;

	  if (start < 0) {
	    start += len;
	    if (start < 0) start = 0;
	  } else if (start > len) {
	    start = len;
	  }

	  if (end < 0) {
	    end += len;
	    if (end < 0) end = 0;
	  } else if (end > len) {
	    end = len;
	  }

	  if (end < start) end = start;

	  var newBuf;
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end);
	    newBuf.__proto__ = Buffer.prototype;
	  } else {
	    var sliceLen = end - start;
	    newBuf = new Buffer(sliceLen, undefined);
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start];
	    }
	  }

	  return newBuf;
	};

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset(offset, ext, length) {
	  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
	}

	Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var val = this[offset];
	  var mul = 1;
	  var i = 0;
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul;
	  }

	  return val;
	};

	Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length);
	  }

	  var val = this[offset + --byteLength];
	  var mul = 1;
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul;
	  }

	  return val;
	};

	Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length);
	  return this[offset];
	};

	Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  return this[offset] | this[offset + 1] << 8;
	};

	Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  return this[offset] << 8 | this[offset + 1];
	};

	Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
	};

	Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
	};

	Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var val = this[offset];
	  var mul = 1;
	  var i = 0;
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul;
	  }
	  mul *= 0x80;

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

	  return val;
	};

	Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var i = byteLength;
	  var mul = 1;
	  var val = this[offset + --i];
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul;
	  }
	  mul *= 0x80;

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

	  return val;
	};

	Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length);
	  if (!(this[offset] & 0x80)) return this[offset];
	  return (0xff - this[offset] + 1) * -1;
	};

	Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  var val = this[offset] | this[offset + 1] << 8;
	  return val & 0x8000 ? val | 0xFFFF0000 : val;
	};

	Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  var val = this[offset + 1] | this[offset] << 8;
	  return val & 0x8000 ? val | 0xFFFF0000 : val;
	};

	Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
	};

	Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
	};

	Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return ieee754.read(this, offset, true, 23, 4);
	};

	Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return ieee754.read(this, offset, false, 23, 4);
	};

	Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length);
	  return ieee754.read(this, offset, true, 52, 8);
	};

	Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length);
	  return ieee754.read(this, offset, false, 52, 8);
	};

	function checkInt(buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
	  if (offset + ext > buf.length) throw new RangeError('Index out of range');
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
	    checkInt(this, value, offset, byteLength, maxBytes, 0);
	  }

	  var mul = 1;
	  var i = 0;
	  this[offset] = value & 0xFF;
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = value / mul & 0xFF;
	  }

	  return offset + byteLength;
	};

	Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
	    checkInt(this, value, offset, byteLength, maxBytes, 0);
	  }

	  var i = byteLength - 1;
	  var mul = 1;
	  this[offset + i] = value & 0xFF;
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = value / mul & 0xFF;
	  }

	  return offset + byteLength;
	};

	Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
	  this[offset] = value & 0xff;
	  return offset + 1;
	};

	function objectWriteUInt16(buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1;
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
	  }
	}

	Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value & 0xff;
	    this[offset + 1] = value >>> 8;
	  } else {
	    objectWriteUInt16(this, value, offset, true);
	  }
	  return offset + 2;
	};

	Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value >>> 8;
	    this[offset + 1] = value & 0xff;
	  } else {
	    objectWriteUInt16(this, value, offset, false);
	  }
	  return offset + 2;
	};

	function objectWriteUInt32(buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1;
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
	  }
	}

	Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = value >>> 24;
	    this[offset + 2] = value >>> 16;
	    this[offset + 1] = value >>> 8;
	    this[offset] = value & 0xff;
	  } else {
	    objectWriteUInt32(this, value, offset, true);
	  }
	  return offset + 4;
	};

	Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value >>> 24;
	    this[offset + 1] = value >>> 16;
	    this[offset + 2] = value >>> 8;
	    this[offset + 3] = value & 0xff;
	  } else {
	    objectWriteUInt32(this, value, offset, false);
	  }
	  return offset + 4;
	};

	Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1);

	    checkInt(this, value, offset, byteLength, limit - 1, -limit);
	  }

	  var i = 0;
	  var mul = 1;
	  var sub = 0;
	  this[offset] = value & 0xFF;
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1;
	    }
	    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
	  }

	  return offset + byteLength;
	};

	Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1);

	    checkInt(this, value, offset, byteLength, limit - 1, -limit);
	  }

	  var i = byteLength - 1;
	  var mul = 1;
	  var sub = 0;
	  this[offset + i] = value & 0xFF;
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1;
	    }
	    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
	  }

	  return offset + byteLength;
	};

	Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
	  if (value < 0) value = 0xff + value + 1;
	  this[offset] = value & 0xff;
	  return offset + 1;
	};

	Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value & 0xff;
	    this[offset + 1] = value >>> 8;
	  } else {
	    objectWriteUInt16(this, value, offset, true);
	  }
	  return offset + 2;
	};

	Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value >>> 8;
	    this[offset + 1] = value & 0xff;
	  } else {
	    objectWriteUInt16(this, value, offset, false);
	  }
	  return offset + 2;
	};

	Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value & 0xff;
	    this[offset + 1] = value >>> 8;
	    this[offset + 2] = value >>> 16;
	    this[offset + 3] = value >>> 24;
	  } else {
	    objectWriteUInt32(this, value, offset, true);
	  }
	  return offset + 4;
	};

	Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	  if (value < 0) value = 0xffffffff + value + 1;
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value >>> 24;
	    this[offset + 1] = value >>> 16;
	    this[offset + 2] = value >>> 8;
	    this[offset + 3] = value & 0xff;
	  } else {
	    objectWriteUInt32(this, value, offset, false);
	  }
	  return offset + 4;
	};

	function checkIEEE754(buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range');
	  if (offset < 0) throw new RangeError('Index out of range');
	}

	function writeFloat(buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4);
	  return offset + 4;
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert);
	};

	Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert);
	};

	function writeDouble(buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8);
	  return offset + 8;
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert);
	};

	Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert);
	};

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy(target, targetStart, start, end) {
	  if (!start) start = 0;
	  if (!end && end !== 0) end = this.length;
	  if (targetStart >= target.length) targetStart = target.length;
	  if (!targetStart) targetStart = 0;
	  if (end > 0 && end < start) end = start;

	  // Copy 0 bytes; we're done
	  if (end === start) return 0;
	  if (target.length === 0 || this.length === 0) return 0;

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds');
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
	  if (end < 0) throw new RangeError('sourceEnd out of bounds');

	  // Are we oob?
	  if (end > this.length) end = this.length;
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start;
	  }

	  var len = end - start;
	  var i;

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start];
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start];
	    }
	  } else {
	    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
	  }

	  return len;
	};

	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill(val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start;
	      start = 0;
	      end = this.length;
	    } else if (typeof end === 'string') {
	      encoding = end;
	      end = this.length;
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0);
	      if (code < 256) {
	        val = code;
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string');
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding);
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255;
	  }

	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index');
	  }

	  if (end <= start) {
	    return this;
	  }

	  start = start >>> 0;
	  end = end === undefined ? this.length : end >>> 0;

	  if (!val) val = 0;

	  var i;
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val;
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
	    var len = bytes.length;
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len];
	    }
	  }

	  return this;
	};

	// HELPER FUNCTIONS
	// ================

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

	function base64clean(str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return '';
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '=';
	  }
	  return str;
	}

	function stringtrim(str) {
	  if (str.trim) return str.trim();
	  return str.replace(/^\s+|\s+$/g, '');
	}

	function toHex(n) {
	  if (n < 16) return '0' + n.toString(16);
	  return n.toString(16);
	}

	function utf8ToBytes(string, units) {
	  units = units || Infinity;
	  var codePoint;
	  var length = string.length;
	  var leadSurrogate = null;
	  var bytes = [];

	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i);

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          continue;
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          continue;
	        }

	        // valid lead
	        leadSurrogate = codePoint;

	        continue;
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	        leadSurrogate = codePoint;
	        continue;
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	    }

	    leadSurrogate = null;

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break;
	      bytes.push(codePoint);
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break;
	      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break;
	      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break;
	      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
	    } else {
	      throw new Error('Invalid code point');
	    }
	  }

	  return bytes;
	}

	function asciiToBytes(str) {
	  var byteArray = [];
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF);
	  }
	  return byteArray;
	}

	function utf16leToBytes(str, units) {
	  var c, hi, lo;
	  var byteArray = [];
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break;

	    c = str.charCodeAt(i);
	    hi = c >> 8;
	    lo = c % 256;
	    byteArray.push(lo);
	    byteArray.push(hi);
	  }

	  return byteArray;
	}

	function base64ToBytes(str) {
	  return base64.toByteArray(base64clean(str));
	}

	function blitBuffer(src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if (i + offset >= dst.length || i >= src.length) break;
	    dst[i + offset] = src[i];
	  }
	  return i;
	}

	function isnan(val) {
	  return val !== val; // eslint-disable-line no-self-compare
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/buffer/index.js */ 363).Buffer, (function() { return this; }())))

/***/ },

/***/ 364:
/*!*******************************************************************!*\
  !*** (webpack)/~/node-libs-browser/~/buffer/~/base64-js/index.js ***!
  \*******************************************************************/
/***/ function(module, exports) {

	'use strict';

	exports.byteLength = byteLength;
	exports.toByteArray = toByteArray;
	exports.fromByteArray = fromByteArray;

	var lookup = [];
	var revLookup = [];
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i];
	  revLookup[code.charCodeAt(i)] = i;
	}

	revLookup['-'.charCodeAt(0)] = 62;
	revLookup['_'.charCodeAt(0)] = 63;

	function placeHoldersCount(b64) {
	  var len = b64.length;
	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4');
	  }

	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;
	}

	function byteLength(b64) {
	  // base64 is 4/3 + up to two characters of the original data
	  return b64.length * 3 / 4 - placeHoldersCount(b64);
	}

	function toByteArray(b64) {
	  var i, j, l, tmp, placeHolders, arr;
	  var len = b64.length;
	  placeHolders = placeHoldersCount(b64);

	  arr = new Arr(len * 3 / 4 - placeHolders);

	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len;

	  var L = 0;

	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
	    arr[L++] = tmp >> 16 & 0xFF;
	    arr[L++] = tmp >> 8 & 0xFF;
	    arr[L++] = tmp & 0xFF;
	  }

	  if (placeHolders === 2) {
	    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
	    arr[L++] = tmp & 0xFF;
	  } else if (placeHolders === 1) {
	    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
	    arr[L++] = tmp >> 8 & 0xFF;
	    arr[L++] = tmp & 0xFF;
	  }

	  return arr;
	}

	function tripletToBase64(num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
	}

	function encodeChunk(uint8, start, end) {
	  var tmp;
	  var output = [];
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
	    output.push(tripletToBase64(tmp));
	  }
	  return output.join('');
	}

	function fromByteArray(uint8) {
	  var tmp;
	  var len = uint8.length;
	  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
	  var output = '';
	  var parts = [];
	  var maxChunkLength = 16383; // must be multiple of 3

	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
	  }

	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1];
	    output += lookup[tmp >> 2];
	    output += lookup[tmp << 4 & 0x3F];
	    output += '==';
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
	    output += lookup[tmp >> 10];
	    output += lookup[tmp >> 4 & 0x3F];
	    output += lookup[tmp << 2 & 0x3F];
	    output += '=';
	  }

	  parts.push(output);

	  return parts.join('');
	}

/***/ },

/***/ 365:
/*!*****************************************************************!*\
  !*** (webpack)/~/node-libs-browser/~/buffer/~/ieee754/index.js ***!
  \*****************************************************************/
/***/ function(module, exports) {

	"use strict";

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m;
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var nBits = -7;
	  var i = isLE ? nBytes - 1 : 0;
	  var d = isLE ? -1 : 1;
	  var s = buffer[offset + i];

	  i += d;

	  e = s & (1 << -nBits) - 1;
	  s >>= -nBits;
	  nBits += eLen;
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : (s ? -1 : 1) * Infinity;
	  } else {
	    m = m + Math.pow(2, mLen);
	    e = e - eBias;
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
	};

	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c;
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
	  var i = isLE ? 0 : nBytes - 1;
	  var d = isLE ? 1 : -1;
	  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;

	  value = Math.abs(value);

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0;
	    e = eMax;
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2);
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--;
	      c *= 2;
	    }
	    if (e + eBias >= 1) {
	      value += rt / c;
	    } else {
	      value += rt * Math.pow(2, 1 - eBias);
	    }
	    if (value * c >= 2) {
	      e++;
	      c /= 2;
	    }

	    if (e + eBias >= eMax) {
	      m = 0;
	      e = eMax;
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
	      e = 0;
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = e << mLen | m;
	  eLen += mLen;
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128;
	};

/***/ },

/***/ 366:
/*!*****************************************************************!*\
  !*** (webpack)/~/node-libs-browser/~/buffer/~/isarray/index.js ***!
  \*****************************************************************/
/***/ function(module, exports) {

	'use strict';

	var toString = {}.toString;

	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};

/***/ },

/***/ 367:
/*!***********************************************!*\
  !*** ./~/chai/lib/chai/utils/getPathValue.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/*!
	 * Chai - getPathValue utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * @see https://github.com/logicalparadox/filtr
	 * MIT Licensed
	 */

	var getPathInfo = __webpack_require__(/*! ./getPathInfo */ 368);

	/**
	 * ### .getPathValue(path, object)
	 *
	 * This allows the retrieval of values in an
	 * object given a string path.
	 *
	 *     var obj = {
	 *         prop1: {
	 *             arr: ['a', 'b', 'c']
	 *           , str: 'Hello'
	 *         }
	 *       , prop2: {
	 *             arr: [ { nested: 'Universe' } ]
	 *           , str: 'Hello again!'
	 *         }
	 *     }
	 *
	 * The following would be the results.
	 *
	 *     getPathValue('prop1.str', obj); // Hello
	 *     getPathValue('prop1.att[2]', obj); // b
	 *     getPathValue('prop2.arr[0].nested', obj); // Universe
	 *
	 * @param {String} path
	 * @param {Object} object
	 * @returns {Object} value or `undefined`
	 * @namespace Utils
	 * @name getPathValue
	 * @api public
	 */
	module.exports = function (path, obj) {
	  var info = getPathInfo(path, obj);
	  return info.value;
	};

/***/ },

/***/ 368:
/*!**********************************************!*\
  !*** ./~/chai/lib/chai/utils/getPathInfo.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/*!
	 * Chai - getPathInfo utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	var hasProperty = __webpack_require__(/*! ./hasProperty */ 369);

	/**
	 * ### .getPathInfo(path, object)
	 *
	 * This allows the retrieval of property info in an
	 * object given a string path.
	 *
	 * The path info consists of an object with the
	 * following properties:
	 *
	 * * parent - The parent object of the property referenced by `path`
	 * * name - The name of the final property, a number if it was an array indexer
	 * * value - The value of the property, if it exists, otherwise `undefined`
	 * * exists - Whether the property exists or not
	 *
	 * @param {String} path
	 * @param {Object} object
	 * @returns {Object} info
	 * @namespace Utils
	 * @name getPathInfo
	 * @api public
	 */

	module.exports = function getPathInfo(path, obj) {
	  var parsed = parsePath(path),
	      last = parsed[parsed.length - 1];

	  var info = {
	    parent: parsed.length > 1 ? _getPathValue(parsed, obj, parsed.length - 1) : obj,
	    name: last.p || last.i,
	    value: _getPathValue(parsed, obj)
	  };
	  info.exists = hasProperty(info.name, info.parent);

	  return info;
	};

	/*!
	 * ## parsePath(path)
	 *
	 * Helper function used to parse string object
	 * paths. Use in conjunction with `_getPathValue`.
	 *
	 *      var parsed = parsePath('myobject.property.subprop');
	 *
	 * ### Paths:
	 *
	 * * Can be as near infinitely deep and nested
	 * * Arrays are also valid using the formal `myobject.document[3].property`.
	 * * Literal dots and brackets (not delimiter) must be backslash-escaped.
	 *
	 * @param {String} path
	 * @returns {Object} parsed
	 * @api private
	 */

	function parsePath(path) {
	  var str = path.replace(/([^\\])\[/g, '$1.['),
	      parts = str.match(/(\\\.|[^.]+?)+/g);
	  return parts.map(function (value) {
	    var re = /^\[(\d+)\]$/,
	        mArr = re.exec(value);
	    if (mArr) return { i: parseFloat(mArr[1]) };else return { p: value.replace(/\\([.\[\]])/g, '$1') };
	  });
	}

	/*!
	 * ## _getPathValue(parsed, obj)
	 *
	 * Helper companion function for `.parsePath` that returns
	 * the value located at the parsed address.
	 *
	 *      var value = getPathValue(parsed, obj);
	 *
	 * @param {Object} parsed definition from `parsePath`.
	 * @param {Object} object to search against
	 * @param {Number} object to search against
	 * @returns {Object|Undefined} value
	 * @api private
	 */

	function _getPathValue(parsed, obj, index) {
	  var tmp = obj,
	      res;

	  index = index === undefined ? parsed.length : index;

	  for (var i = 0, l = index; i < l; i++) {
	    var part = parsed[i];
	    if (tmp) {
	      if ('undefined' !== typeof part.p) tmp = tmp[part.p];else if ('undefined' !== typeof part.i) tmp = tmp[part.i];
	      if (i == l - 1) res = tmp;
	    } else {
	      res = undefined;
	    }
	  }
	  return res;
	}

/***/ },

/***/ 369:
/*!**********************************************!*\
  !*** ./~/chai/lib/chai/utils/hasProperty.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/*!
	 * Chai - hasProperty utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	var type = __webpack_require__(/*! type-detect */ 347);

	/**
	 * ### .hasProperty(object, name)
	 *
	 * This allows checking whether an object has
	 * named property or numeric array index.
	 *
	 * Basically does the same thing as the `in`
	 * operator but works properly with natives
	 * and null/undefined values.
	 *
	 *     var obj = {
	 *         arr: ['a', 'b', 'c']
	 *       , str: 'Hello'
	 *     }
	 *
	 * The following would be the results.
	 *
	 *     hasProperty('str', obj);  // true
	 *     hasProperty('constructor', obj);  // true
	 *     hasProperty('bar', obj);  // false
	 *
	 *     hasProperty('length', obj.str); // true
	 *     hasProperty(1, obj.str);  // true
	 *     hasProperty(5, obj.str);  // false
	 *
	 *     hasProperty('length', obj.arr);  // true
	 *     hasProperty(2, obj.arr);  // true
	 *     hasProperty(3, obj.arr);  // false
	 *
	 * @param {Objuect} object
	 * @param {String|Number} name
	 * @returns {Boolean} whether it exists
	 * @namespace Utils
	 * @name getPathInfo
	 * @api public
	 */

	var literals = {
	  'number': Number,
	  'string': String
	};

	module.exports = function hasProperty(name, obj) {
	  var ot = type(obj);

	  // Bad Object, obviously no props at all
	  if (ot === 'null' || ot === 'undefined') return false;

	  // The `in` operator does not work with certain literals
	  // box these before the check
	  if (literals[ot] && typeof obj !== 'object') obj = new literals[ot](obj);

	  return name in obj;
	};

/***/ },

/***/ 370:
/*!**********************************************!*\
  !*** ./~/chai/lib/chai/utils/addProperty.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/*!
	 * Chai - addProperty utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	var config = __webpack_require__(/*! ../config */ 357);
	var flag = __webpack_require__(/*! ./flag */ 346);

	/**
	 * ### addProperty (ctx, name, getter)
	 *
	 * Adds a property to the prototype of an object.
	 *
	 *     utils.addProperty(chai.Assertion.prototype, 'foo', function () {
	 *       var obj = utils.flag(this, 'object');
	 *       new chai.Assertion(obj).to.be.instanceof(Foo);
	 *     });
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.addProperty('foo', fn);
	 *
	 * Then can be used as any other assertion.
	 *
	 *     expect(myFoo).to.be.foo;
	 *
	 * @param {Object} ctx object to which the property is added
	 * @param {String} name of property to add
	 * @param {Function} getter function to be used for name
	 * @namespace Utils
	 * @name addProperty
	 * @api public
	 */

	module.exports = function (ctx, name, getter) {
	  Object.defineProperty(ctx, name, { get: function addProperty() {
	      var old_ssfi = flag(this, 'ssfi');
	      if (old_ssfi && config.includeStack === false) flag(this, 'ssfi', addProperty);

	      var result = getter.call(this);
	      return result === undefined ? this : result;
	    },
	    configurable: true
	  });
	};

/***/ },

/***/ 371:
/*!********************************************!*\
  !*** ./~/chai/lib/chai/utils/addMethod.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/*!
	 * Chai - addMethod utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	var config = __webpack_require__(/*! ../config */ 357);

	/**
	 * ### .addMethod (ctx, name, method)
	 *
	 * Adds a method to the prototype of an object.
	 *
	 *     utils.addMethod(chai.Assertion.prototype, 'foo', function (str) {
	 *       var obj = utils.flag(this, 'object');
	 *       new chai.Assertion(obj).to.be.equal(str);
	 *     });
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.addMethod('foo', fn);
	 *
	 * Then can be used as any other assertion.
	 *
	 *     expect(fooStr).to.be.foo('bar');
	 *
	 * @param {Object} ctx object to which the method is added
	 * @param {String} name of method to add
	 * @param {Function} method function to be used for name
	 * @namespace Utils
	 * @name addMethod
	 * @api public
	 */
	var flag = __webpack_require__(/*! ./flag */ 346);

	module.exports = function (ctx, name, method) {
	  ctx[name] = function () {
	    var old_ssfi = flag(this, 'ssfi');
	    if (old_ssfi && config.includeStack === false) flag(this, 'ssfi', ctx[name]);
	    var result = method.apply(this, arguments);
	    return result === undefined ? this : result;
	  };
	};

/***/ },

/***/ 372:
/*!****************************************************!*\
  !*** ./~/chai/lib/chai/utils/overwriteProperty.js ***!
  \****************************************************/
/***/ function(module, exports) {

	'use strict';

	/*!
	 * Chai - overwriteProperty utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/**
	 * ### overwriteProperty (ctx, name, fn)
	 *
	 * Overwites an already existing property getter and provides
	 * access to previous value. Must return function to use as getter.
	 *
	 *     utils.overwriteProperty(chai.Assertion.prototype, 'ok', function (_super) {
	 *       return function () {
	 *         var obj = utils.flag(this, 'object');
	 *         if (obj instanceof Foo) {
	 *           new chai.Assertion(obj.name).to.equal('bar');
	 *         } else {
	 *           _super.call(this);
	 *         }
	 *       }
	 *     });
	 *
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.overwriteProperty('foo', fn);
	 *
	 * Then can be used as any other assertion.
	 *
	 *     expect(myFoo).to.be.ok;
	 *
	 * @param {Object} ctx object whose property is to be overwritten
	 * @param {String} name of property to overwrite
	 * @param {Function} getter function that returns a getter function to be used for name
	 * @namespace Utils
	 * @name overwriteProperty
	 * @api public
	 */

	module.exports = function (ctx, name, getter) {
	  var _get = Object.getOwnPropertyDescriptor(ctx, name),
	      _super = function () {};

	  if (_get && 'function' === typeof _get.get) _super = _get.get;

	  Object.defineProperty(ctx, name, { get: function () {
	      var result = getter(_super).call(this);
	      return result === undefined ? this : result;
	    },
	    configurable: true
	  });
	};

/***/ },

/***/ 373:
/*!**************************************************!*\
  !*** ./~/chai/lib/chai/utils/overwriteMethod.js ***!
  \**************************************************/
/***/ function(module, exports) {

	'use strict';

	/*!
	 * Chai - overwriteMethod utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/**
	 * ### overwriteMethod (ctx, name, fn)
	 *
	 * Overwites an already existing method and provides
	 * access to previous function. Must return function
	 * to be used for name.
	 *
	 *     utils.overwriteMethod(chai.Assertion.prototype, 'equal', function (_super) {
	 *       return function (str) {
	 *         var obj = utils.flag(this, 'object');
	 *         if (obj instanceof Foo) {
	 *           new chai.Assertion(obj.value).to.equal(str);
	 *         } else {
	 *           _super.apply(this, arguments);
	 *         }
	 *       }
	 *     });
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.overwriteMethod('foo', fn);
	 *
	 * Then can be used as any other assertion.
	 *
	 *     expect(myFoo).to.equal('bar');
	 *
	 * @param {Object} ctx object whose method is to be overwritten
	 * @param {String} name of method to overwrite
	 * @param {Function} method function that returns a function to be used for name
	 * @namespace Utils
	 * @name overwriteMethod
	 * @api public
	 */

	module.exports = function (ctx, name, method) {
	  var _method = ctx[name],
	      _super = function () {
	    return this;
	  };

	  if (_method && 'function' === typeof _method) _super = _method;

	  ctx[name] = function () {
	    var result = method(_super).apply(this, arguments);
	    return result === undefined ? this : result;
	  };
	};

/***/ },

/***/ 374:
/*!*****************************************************!*\
  !*** ./~/chai/lib/chai/utils/addChainableMethod.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/*!
	 * Chai - addChainingMethod utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/*!
	 * Module dependencies
	 */

	var transferFlags = __webpack_require__(/*! ./transferFlags */ 358);
	var flag = __webpack_require__(/*! ./flag */ 346);
	var config = __webpack_require__(/*! ../config */ 357);

	/*!
	 * Module variables
	 */

	// Check whether `__proto__` is supported
	var hasProtoSupport = '__proto__' in Object;

	// Without `__proto__` support, this module will need to add properties to a function.
	// However, some Function.prototype methods cannot be overwritten,
	// and there seems no easy cross-platform way to detect them (@see chaijs/chai/issues/69).
	var excludeNames = /^(?:length|name|arguments|caller)$/;

	// Cache `Function` properties
	var call = Function.prototype.call,
	    apply = Function.prototype.apply;

	/**
	 * ### addChainableMethod (ctx, name, method, chainingBehavior)
	 *
	 * Adds a method to an object, such that the method can also be chained.
	 *
	 *     utils.addChainableMethod(chai.Assertion.prototype, 'foo', function (str) {
	 *       var obj = utils.flag(this, 'object');
	 *       new chai.Assertion(obj).to.be.equal(str);
	 *     });
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.addChainableMethod('foo', fn, chainingBehavior);
	 *
	 * The result can then be used as both a method assertion, executing both `method` and
	 * `chainingBehavior`, or as a language chain, which only executes `chainingBehavior`.
	 *
	 *     expect(fooStr).to.be.foo('bar');
	 *     expect(fooStr).to.be.foo.equal('foo');
	 *
	 * @param {Object} ctx object to which the method is added
	 * @param {String} name of method to add
	 * @param {Function} method function to be used for `name`, when called
	 * @param {Function} chainingBehavior function to be called every time the property is accessed
	 * @namespace Utils
	 * @name addChainableMethod
	 * @api public
	 */

	module.exports = function (ctx, name, method, chainingBehavior) {
	  if (typeof chainingBehavior !== 'function') {
	    chainingBehavior = function () {};
	  }

	  var chainableBehavior = {
	    method: method,
	    chainingBehavior: chainingBehavior
	  };

	  // save the methods so we can overwrite them later, if we need to.
	  if (!ctx.__methods) {
	    ctx.__methods = {};
	  }
	  ctx.__methods[name] = chainableBehavior;

	  Object.defineProperty(ctx, name, { get: function () {
	      chainableBehavior.chainingBehavior.call(this);

	      var assert = function assert() {
	        var old_ssfi = flag(this, 'ssfi');
	        if (old_ssfi && config.includeStack === false) flag(this, 'ssfi', assert);
	        var result = chainableBehavior.method.apply(this, arguments);
	        return result === undefined ? this : result;
	      };

	      // Use `__proto__` if available
	      if (hasProtoSupport) {
	        // Inherit all properties from the object by replacing the `Function` prototype
	        var prototype = assert.__proto__ = Object.create(this);
	        // Restore the `call` and `apply` methods from `Function`
	        prototype.call = call;
	        prototype.apply = apply;
	      }
	      // Otherwise, redefine all properties (slow!)
	      else {
	          var asserterNames = Object.getOwnPropertyNames(ctx);
	          asserterNames.forEach(function (asserterName) {
	            if (!excludeNames.test(asserterName)) {
	              var pd = Object.getOwnPropertyDescriptor(ctx, asserterName);
	              Object.defineProperty(assert, asserterName, pd);
	            }
	          });
	        }

	      transferFlags(this, assert);
	      return assert;
	    },
	    configurable: true
	  });
	};

/***/ },

/***/ 375:
/*!***********************************************************!*\
  !*** ./~/chai/lib/chai/utils/overwriteChainableMethod.js ***!
  \***********************************************************/
/***/ function(module, exports) {

	"use strict";

	/*!
	 * Chai - overwriteChainableMethod utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/**
	 * ### overwriteChainableMethod (ctx, name, method, chainingBehavior)
	 *
	 * Overwites an already existing chainable method
	 * and provides access to the previous function or
	 * property.  Must return functions to be used for
	 * name.
	 *
	 *     utils.overwriteChainableMethod(chai.Assertion.prototype, 'length',
	 *       function (_super) {
	 *       }
	 *     , function (_super) {
	 *       }
	 *     );
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.overwriteChainableMethod('foo', fn, fn);
	 *
	 * Then can be used as any other assertion.
	 *
	 *     expect(myFoo).to.have.length(3);
	 *     expect(myFoo).to.have.length.above(3);
	 *
	 * @param {Object} ctx object whose method / property is to be overwritten
	 * @param {String} name of method / property to overwrite
	 * @param {Function} method function that returns a function to be used for name
	 * @param {Function} chainingBehavior function that returns a function to be used for property
	 * @namespace Utils
	 * @name overwriteChainableMethod
	 * @api public
	 */

	module.exports = function (ctx, name, method, chainingBehavior) {
	  var chainableBehavior = ctx.__methods[name];

	  var _chainingBehavior = chainableBehavior.chainingBehavior;
	  chainableBehavior.chainingBehavior = function () {
	    var result = chainingBehavior(_chainingBehavior).call(this);
	    return result === undefined ? this : result;
	  };

	  var _method = chainableBehavior.method;
	  chainableBehavior.method = function () {
	    var result = method(_method).apply(this, arguments);
	    return result === undefined ? this : result;
	  };
	};

/***/ },

/***/ 376:
/*!**************************************!*\
  !*** ./~/chai/lib/chai/assertion.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/*!
	 * chai
	 * http://chaijs.com
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	var config = __webpack_require__(/*! ./config */ 357);

	module.exports = function (_chai, util) {
	  /*!
	   * Module dependencies.
	   */

	  var AssertionError = _chai.AssertionError,
	      flag = util.flag;

	  /*!
	   * Module export.
	   */

	  _chai.Assertion = Assertion;

	  /*!
	   * Assertion Constructor
	   *
	   * Creates object for chaining.
	   *
	   * @api private
	   */

	  function Assertion(obj, msg, stack) {
	    flag(this, 'ssfi', stack || arguments.callee);
	    flag(this, 'object', obj);
	    flag(this, 'message', msg);
	  }

	  Object.defineProperty(Assertion, 'includeStack', {
	    get: function () {
	      console.warn('Assertion.includeStack is deprecated, use chai.config.includeStack instead.');
	      return config.includeStack;
	    },
	    set: function (value) {
	      console.warn('Assertion.includeStack is deprecated, use chai.config.includeStack instead.');
	      config.includeStack = value;
	    }
	  });

	  Object.defineProperty(Assertion, 'showDiff', {
	    get: function () {
	      console.warn('Assertion.showDiff is deprecated, use chai.config.showDiff instead.');
	      return config.showDiff;
	    },
	    set: function (value) {
	      console.warn('Assertion.showDiff is deprecated, use chai.config.showDiff instead.');
	      config.showDiff = value;
	    }
	  });

	  Assertion.addProperty = function (name, fn) {
	    util.addProperty(this.prototype, name, fn);
	  };

	  Assertion.addMethod = function (name, fn) {
	    util.addMethod(this.prototype, name, fn);
	  };

	  Assertion.addChainableMethod = function (name, fn, chainingBehavior) {
	    util.addChainableMethod(this.prototype, name, fn, chainingBehavior);
	  };

	  Assertion.overwriteProperty = function (name, fn) {
	    util.overwriteProperty(this.prototype, name, fn);
	  };

	  Assertion.overwriteMethod = function (name, fn) {
	    util.overwriteMethod(this.prototype, name, fn);
	  };

	  Assertion.overwriteChainableMethod = function (name, fn, chainingBehavior) {
	    util.overwriteChainableMethod(this.prototype, name, fn, chainingBehavior);
	  };

	  /**
	   * ### .assert(expression, message, negateMessage, expected, actual, showDiff)
	   *
	   * Executes an expression and check expectations. Throws AssertionError for reporting if test doesn't pass.
	   *
	   * @name assert
	   * @param {Philosophical} expression to be tested
	   * @param {String|Function} message or function that returns message to display if expression fails
	   * @param {String|Function} negatedMessage or function that returns negatedMessage to display if negated expression fails
	   * @param {Mixed} expected value (remember to check for negation)
	   * @param {Mixed} actual (optional) will default to `this.obj`
	   * @param {Boolean} showDiff (optional) when set to `true`, assert will display a diff in addition to the message if expression fails
	   * @api private
	   */

	  Assertion.prototype.assert = function (expr, msg, negateMsg, expected, _actual, showDiff) {
	    var ok = util.test(this, arguments);
	    if (true !== showDiff) showDiff = false;
	    if (true !== config.showDiff) showDiff = false;

	    if (!ok) {
	      var msg = util.getMessage(this, arguments),
	          actual = util.getActual(this, arguments);
	      throw new AssertionError(msg, {
	        actual: actual,
	        expected: expected,
	        showDiff: showDiff
	      }, config.includeStack ? this.assert : flag(this, 'ssfi'));
	    }
	  };

	  /*!
	   * ### ._obj
	   *
	   * Quick reference to stored `actual` value for plugin developers.
	   *
	   * @api private
	   */

	  Object.defineProperty(Assertion.prototype, '_obj', { get: function () {
	      return flag(this, 'object');
	    },
	    set: function (val) {
	      flag(this, 'object', val);
	    }
	  });
	};

/***/ },

/***/ 377:
/*!********************************************!*\
  !*** ./~/chai/lib/chai/core/assertions.js ***!
  \********************************************/
/***/ function(module, exports) {

	'use strict';

	/*!
	 * chai
	 * http://chaijs.com
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	module.exports = function (chai, _) {
	  var Assertion = chai.Assertion,
	      toString = Object.prototype.toString,
	      flag = _.flag;

	  /**
	   * ### Language Chains
	   *
	   * The following are provided as chainable getters to
	   * improve the readability of your assertions. They
	   * do not provide testing capabilities unless they
	   * have been overwritten by a plugin.
	   *
	   * **Chains**
	   *
	   * - to
	   * - be
	   * - been
	   * - is
	   * - that
	   * - which
	   * - and
	   * - has
	   * - have
	   * - with
	   * - at
	   * - of
	   * - same
	   *
	   * @name language chains
	   * @namespace BDD
	   * @api public
	   */

	  ['to', 'be', 'been', 'is', 'and', 'has', 'have', 'with', 'that', 'which', 'at', 'of', 'same'].forEach(function (chain) {
	    Assertion.addProperty(chain, function () {
	      return this;
	    });
	  });

	  /**
	   * ### .not
	   *
	   * Negates any of assertions following in the chain.
	   *
	   *     expect(foo).to.not.equal('bar');
	   *     expect(goodFn).to.not.throw(Error);
	   *     expect({ foo: 'baz' }).to.have.property('foo')
	   *       .and.not.equal('bar');
	   *
	   * @name not
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('not', function () {
	    flag(this, 'negate', true);
	  });

	  /**
	   * ### .deep
	   *
	   * Sets the `deep` flag, later used by the `equal` and
	   * `property` assertions.
	   *
	   *     expect(foo).to.deep.equal({ bar: 'baz' });
	   *     expect({ foo: { bar: { baz: 'quux' } } })
	   *       .to.have.deep.property('foo.bar.baz', 'quux');
	   *
	   * `.deep.property` special characters can be escaped
	   * by adding two slashes before the `.` or `[]`.
	   *
	   *     var deepCss = { '.link': { '[target]': 42 }};
	   *     expect(deepCss).to.have.deep.property('\\.link.\\[target\\]', 42);
	   *
	   * @name deep
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('deep', function () {
	    flag(this, 'deep', true);
	  });

	  /**
	   * ### .any
	   *
	   * Sets the `any` flag, (opposite of the `all` flag)
	   * later used in the `keys` assertion.
	   *
	   *     expect(foo).to.have.any.keys('bar', 'baz');
	   *
	   * @name any
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('any', function () {
	    flag(this, 'any', true);
	    flag(this, 'all', false);
	  });

	  /**
	   * ### .all
	   *
	   * Sets the `all` flag (opposite of the `any` flag)
	   * later used by the `keys` assertion.
	   *
	   *     expect(foo).to.have.all.keys('bar', 'baz');
	   *
	   * @name all
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('all', function () {
	    flag(this, 'all', true);
	    flag(this, 'any', false);
	  });

	  /**
	   * ### .a(type)
	   *
	   * The `a` and `an` assertions are aliases that can be
	   * used either as language chains or to assert a value's
	   * type.
	   *
	   *     // typeof
	   *     expect('test').to.be.a('string');
	   *     expect({ foo: 'bar' }).to.be.an('object');
	   *     expect(null).to.be.a('null');
	   *     expect(undefined).to.be.an('undefined');
	   *     expect(new Error).to.be.an('error');
	   *     expect(new Promise).to.be.a('promise');
	   *     expect(new Float32Array()).to.be.a('float32array');
	   *     expect(Symbol()).to.be.a('symbol');
	   *
	   *     // es6 overrides
	   *     expect({[Symbol.toStringTag]:()=>'foo'}).to.be.a('foo');
	   *
	   *     // language chain
	   *     expect(foo).to.be.an.instanceof(Foo);
	   *
	   * @name a
	   * @alias an
	   * @param {String} type
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function an(type, msg) {
	    if (msg) flag(this, 'message', msg);
	    type = type.toLowerCase();
	    var obj = flag(this, 'object'),
	        article = ~['a', 'e', 'i', 'o', 'u'].indexOf(type.charAt(0)) ? 'an ' : 'a ';

	    this.assert(type === _.type(obj), 'expected #{this} to be ' + article + type, 'expected #{this} not to be ' + article + type);
	  }

	  Assertion.addChainableMethod('an', an);
	  Assertion.addChainableMethod('a', an);

	  /**
	   * ### .include(value)
	   *
	   * The `include` and `contain` assertions can be used as either property
	   * based language chains or as methods to assert the inclusion of an object
	   * in an array or a substring in a string. When used as language chains,
	   * they toggle the `contains` flag for the `keys` assertion.
	   *
	   *     expect([1,2,3]).to.include(2);
	   *     expect('foobar').to.contain('foo');
	   *     expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');
	   *
	   * @name include
	   * @alias contain
	   * @alias includes
	   * @alias contains
	   * @param {Object|String|Number} obj
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function includeChainingBehavior() {
	    flag(this, 'contains', true);
	  }

	  function include(val, msg) {
	    _.expectTypes(this, ['array', 'object', 'string']);

	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    var expected = false;

	    if (_.type(obj) === 'array' && _.type(val) === 'object') {
	      for (var i in obj) {
	        if (_.eql(obj[i], val)) {
	          expected = true;
	          break;
	        }
	      }
	    } else if (_.type(val) === 'object') {
	      if (!flag(this, 'negate')) {
	        for (var k in val) new Assertion(obj).property(k, val[k]);
	        return;
	      }
	      var subset = {};
	      for (var k in val) subset[k] = obj[k];
	      expected = _.eql(subset, val);
	    } else {
	      expected = obj != undefined && ~obj.indexOf(val);
	    }
	    this.assert(expected, 'expected #{this} to include ' + _.inspect(val), 'expected #{this} to not include ' + _.inspect(val));
	  }

	  Assertion.addChainableMethod('include', include, includeChainingBehavior);
	  Assertion.addChainableMethod('contain', include, includeChainingBehavior);
	  Assertion.addChainableMethod('contains', include, includeChainingBehavior);
	  Assertion.addChainableMethod('includes', include, includeChainingBehavior);

	  /**
	   * ### .ok
	   *
	   * Asserts that the target is truthy.
	   *
	   *     expect('everything').to.be.ok;
	   *     expect(1).to.be.ok;
	   *     expect(false).to.not.be.ok;
	   *     expect(undefined).to.not.be.ok;
	   *     expect(null).to.not.be.ok;
	   *
	   * @name ok
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('ok', function () {
	    this.assert(flag(this, 'object'), 'expected #{this} to be truthy', 'expected #{this} to be falsy');
	  });

	  /**
	   * ### .true
	   *
	   * Asserts that the target is `true`.
	   *
	   *     expect(true).to.be.true;
	   *     expect(1).to.not.be.true;
	   *
	   * @name true
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('true', function () {
	    this.assert(true === flag(this, 'object'), 'expected #{this} to be true', 'expected #{this} to be false', this.negate ? false : true);
	  });

	  /**
	   * ### .false
	   *
	   * Asserts that the target is `false`.
	   *
	   *     expect(false).to.be.false;
	   *     expect(0).to.not.be.false;
	   *
	   * @name false
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('false', function () {
	    this.assert(false === flag(this, 'object'), 'expected #{this} to be false', 'expected #{this} to be true', this.negate ? true : false);
	  });

	  /**
	   * ### .null
	   *
	   * Asserts that the target is `null`.
	   *
	   *     expect(null).to.be.null;
	   *     expect(undefined).to.not.be.null;
	   *
	   * @name null
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('null', function () {
	    this.assert(null === flag(this, 'object'), 'expected #{this} to be null', 'expected #{this} not to be null');
	  });

	  /**
	   * ### .undefined
	   *
	   * Asserts that the target is `undefined`.
	   *
	   *     expect(undefined).to.be.undefined;
	   *     expect(null).to.not.be.undefined;
	   *
	   * @name undefined
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('undefined', function () {
	    this.assert(undefined === flag(this, 'object'), 'expected #{this} to be undefined', 'expected #{this} not to be undefined');
	  });

	  /**
	   * ### .NaN
	   * Asserts that the target is `NaN`.
	   *
	   *     expect('foo').to.be.NaN;
	   *     expect(4).not.to.be.NaN;
	   *
	   * @name NaN
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('NaN', function () {
	    this.assert(isNaN(flag(this, 'object')), 'expected #{this} to be NaN', 'expected #{this} not to be NaN');
	  });

	  /**
	   * ### .exist
	   *
	   * Asserts that the target is neither `null` nor `undefined`.
	   *
	   *     var foo = 'hi'
	   *       , bar = null
	   *       , baz;
	   *
	   *     expect(foo).to.exist;
	   *     expect(bar).to.not.exist;
	   *     expect(baz).to.not.exist;
	   *
	   * @name exist
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('exist', function () {
	    this.assert(null != flag(this, 'object'), 'expected #{this} to exist', 'expected #{this} to not exist');
	  });

	  /**
	   * ### .empty
	   *
	   * Asserts that the target's length is `0`. For arrays and strings, it checks
	   * the `length` property. For objects, it gets the count of
	   * enumerable keys.
	   *
	   *     expect([]).to.be.empty;
	   *     expect('').to.be.empty;
	   *     expect({}).to.be.empty;
	   *
	   * @name empty
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('empty', function () {
	    var obj = flag(this, 'object'),
	        expected = obj;

	    if (Array.isArray(obj) || 'string' === typeof object) {
	      expected = obj.length;
	    } else if (typeof obj === 'object') {
	      expected = Object.keys(obj).length;
	    }

	    this.assert(!expected, 'expected #{this} to be empty', 'expected #{this} not to be empty');
	  });

	  /**
	   * ### .arguments
	   *
	   * Asserts that the target is an arguments object.
	   *
	   *     function test () {
	   *       expect(arguments).to.be.arguments;
	   *     }
	   *
	   * @name arguments
	   * @alias Arguments
	   * @namespace BDD
	   * @api public
	   */

	  function checkArguments() {
	    var obj = flag(this, 'object'),
	        type = Object.prototype.toString.call(obj);
	    this.assert('[object Arguments]' === type, 'expected #{this} to be arguments but got ' + type, 'expected #{this} to not be arguments');
	  }

	  Assertion.addProperty('arguments', checkArguments);
	  Assertion.addProperty('Arguments', checkArguments);

	  /**
	   * ### .equal(value)
	   *
	   * Asserts that the target is strictly equal (`===`) to `value`.
	   * Alternately, if the `deep` flag is set, asserts that
	   * the target is deeply equal to `value`.
	   *
	   *     expect('hello').to.equal('hello');
	   *     expect(42).to.equal(42);
	   *     expect(1).to.not.equal(true);
	   *     expect({ foo: 'bar' }).to.not.equal({ foo: 'bar' });
	   *     expect({ foo: 'bar' }).to.deep.equal({ foo: 'bar' });
	   *
	   * @name equal
	   * @alias equals
	   * @alias eq
	   * @alias deep.equal
	   * @param {Mixed} value
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function assertEqual(val, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    if (flag(this, 'deep')) {
	      return this.eql(val);
	    } else {
	      this.assert(val === obj, 'expected #{this} to equal #{exp}', 'expected #{this} to not equal #{exp}', val, this._obj, true);
	    }
	  }

	  Assertion.addMethod('equal', assertEqual);
	  Assertion.addMethod('equals', assertEqual);
	  Assertion.addMethod('eq', assertEqual);

	  /**
	   * ### .eql(value)
	   *
	   * Asserts that the target is deeply equal to `value`.
	   *
	   *     expect({ foo: 'bar' }).to.eql({ foo: 'bar' });
	   *     expect([ 1, 2, 3 ]).to.eql([ 1, 2, 3 ]);
	   *
	   * @name eql
	   * @alias eqls
	   * @param {Mixed} value
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function assertEql(obj, msg) {
	    if (msg) flag(this, 'message', msg);
	    this.assert(_.eql(obj, flag(this, 'object')), 'expected #{this} to deeply equal #{exp}', 'expected #{this} to not deeply equal #{exp}', obj, this._obj, true);
	  }

	  Assertion.addMethod('eql', assertEql);
	  Assertion.addMethod('eqls', assertEql);

	  /**
	   * ### .above(value)
	   *
	   * Asserts that the target is greater than `value`.
	   *
	   *     expect(10).to.be.above(5);
	   *
	   * Can also be used in conjunction with `length` to
	   * assert a minimum length. The benefit being a
	   * more informative error message than if the length
	   * was supplied directly.
	   *
	   *     expect('foo').to.have.length.above(2);
	   *     expect([ 1, 2, 3 ]).to.have.length.above(2);
	   *
	   * @name above
	   * @alias gt
	   * @alias greaterThan
	   * @param {Number} value
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function assertAbove(n, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    if (flag(this, 'doLength')) {
	      new Assertion(obj, msg).to.have.property('length');
	      var len = obj.length;
	      this.assert(len > n, 'expected #{this} to have a length above #{exp} but got #{act}', 'expected #{this} to not have a length above #{exp}', n, len);
	    } else {
	      this.assert(obj > n, 'expected #{this} to be above ' + n, 'expected #{this} to be at most ' + n);
	    }
	  }

	  Assertion.addMethod('above', assertAbove);
	  Assertion.addMethod('gt', assertAbove);
	  Assertion.addMethod('greaterThan', assertAbove);

	  /**
	   * ### .least(value)
	   *
	   * Asserts that the target is greater than or equal to `value`.
	   *
	   *     expect(10).to.be.at.least(10);
	   *
	   * Can also be used in conjunction with `length` to
	   * assert a minimum length. The benefit being a
	   * more informative error message than if the length
	   * was supplied directly.
	   *
	   *     expect('foo').to.have.length.of.at.least(2);
	   *     expect([ 1, 2, 3 ]).to.have.length.of.at.least(3);
	   *
	   * @name least
	   * @alias gte
	   * @param {Number} value
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function assertLeast(n, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    if (flag(this, 'doLength')) {
	      new Assertion(obj, msg).to.have.property('length');
	      var len = obj.length;
	      this.assert(len >= n, 'expected #{this} to have a length at least #{exp} but got #{act}', 'expected #{this} to have a length below #{exp}', n, len);
	    } else {
	      this.assert(obj >= n, 'expected #{this} to be at least ' + n, 'expected #{this} to be below ' + n);
	    }
	  }

	  Assertion.addMethod('least', assertLeast);
	  Assertion.addMethod('gte', assertLeast);

	  /**
	   * ### .below(value)
	   *
	   * Asserts that the target is less than `value`.
	   *
	   *     expect(5).to.be.below(10);
	   *
	   * Can also be used in conjunction with `length` to
	   * assert a maximum length. The benefit being a
	   * more informative error message than if the length
	   * was supplied directly.
	   *
	   *     expect('foo').to.have.length.below(4);
	   *     expect([ 1, 2, 3 ]).to.have.length.below(4);
	   *
	   * @name below
	   * @alias lt
	   * @alias lessThan
	   * @param {Number} value
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function assertBelow(n, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    if (flag(this, 'doLength')) {
	      new Assertion(obj, msg).to.have.property('length');
	      var len = obj.length;
	      this.assert(len < n, 'expected #{this} to have a length below #{exp} but got #{act}', 'expected #{this} to not have a length below #{exp}', n, len);
	    } else {
	      this.assert(obj < n, 'expected #{this} to be below ' + n, 'expected #{this} to be at least ' + n);
	    }
	  }

	  Assertion.addMethod('below', assertBelow);
	  Assertion.addMethod('lt', assertBelow);
	  Assertion.addMethod('lessThan', assertBelow);

	  /**
	   * ### .most(value)
	   *
	   * Asserts that the target is less than or equal to `value`.
	   *
	   *     expect(5).to.be.at.most(5);
	   *
	   * Can also be used in conjunction with `length` to
	   * assert a maximum length. The benefit being a
	   * more informative error message than if the length
	   * was supplied directly.
	   *
	   *     expect('foo').to.have.length.of.at.most(4);
	   *     expect([ 1, 2, 3 ]).to.have.length.of.at.most(3);
	   *
	   * @name most
	   * @alias lte
	   * @param {Number} value
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function assertMost(n, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    if (flag(this, 'doLength')) {
	      new Assertion(obj, msg).to.have.property('length');
	      var len = obj.length;
	      this.assert(len <= n, 'expected #{this} to have a length at most #{exp} but got #{act}', 'expected #{this} to have a length above #{exp}', n, len);
	    } else {
	      this.assert(obj <= n, 'expected #{this} to be at most ' + n, 'expected #{this} to be above ' + n);
	    }
	  }

	  Assertion.addMethod('most', assertMost);
	  Assertion.addMethod('lte', assertMost);

	  /**
	   * ### .within(start, finish)
	   *
	   * Asserts that the target is within a range.
	   *
	   *     expect(7).to.be.within(5,10);
	   *
	   * Can also be used in conjunction with `length` to
	   * assert a length range. The benefit being a
	   * more informative error message than if the length
	   * was supplied directly.
	   *
	   *     expect('foo').to.have.length.within(2,4);
	   *     expect([ 1, 2, 3 ]).to.have.length.within(2,4);
	   *
	   * @name within
	   * @param {Number} start lowerbound inclusive
	   * @param {Number} finish upperbound inclusive
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addMethod('within', function (start, finish, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object'),
	        range = start + '..' + finish;
	    if (flag(this, 'doLength')) {
	      new Assertion(obj, msg).to.have.property('length');
	      var len = obj.length;
	      this.assert(len >= start && len <= finish, 'expected #{this} to have a length within ' + range, 'expected #{this} to not have a length within ' + range);
	    } else {
	      this.assert(obj >= start && obj <= finish, 'expected #{this} to be within ' + range, 'expected #{this} to not be within ' + range);
	    }
	  });

	  /**
	   * ### .instanceof(constructor)
	   *
	   * Asserts that the target is an instance of `constructor`.
	   *
	   *     var Tea = function (name) { this.name = name; }
	   *       , Chai = new Tea('chai');
	   *
	   *     expect(Chai).to.be.an.instanceof(Tea);
	   *     expect([ 1, 2, 3 ]).to.be.instanceof(Array);
	   *
	   * @name instanceof
	   * @param {Constructor} constructor
	   * @param {String} message _optional_
	   * @alias instanceOf
	   * @namespace BDD
	   * @api public
	   */

	  function assertInstanceOf(constructor, msg) {
	    if (msg) flag(this, 'message', msg);
	    var name = _.getName(constructor);
	    this.assert(flag(this, 'object') instanceof constructor, 'expected #{this} to be an instance of ' + name, 'expected #{this} to not be an instance of ' + name);
	  };

	  Assertion.addMethod('instanceof', assertInstanceOf);
	  Assertion.addMethod('instanceOf', assertInstanceOf);

	  /**
	   * ### .property(name, [value])
	   *
	   * Asserts that the target has a property `name`, optionally asserting that
	   * the value of that property is strictly equal to  `value`.
	   * If the `deep` flag is set, you can use dot- and bracket-notation for deep
	   * references into objects and arrays.
	   *
	   *     // simple referencing
	   *     var obj = { foo: 'bar' };
	   *     expect(obj).to.have.property('foo');
	   *     expect(obj).to.have.property('foo', 'bar');
	   *
	   *     // deep referencing
	   *     var deepObj = {
	   *         green: { tea: 'matcha' }
	   *       , teas: [ 'chai', 'matcha', { tea: 'konacha' } ]
	   *     };
	   *
	   *     expect(deepObj).to.have.deep.property('green.tea', 'matcha');
	   *     expect(deepObj).to.have.deep.property('teas[1]', 'matcha');
	   *     expect(deepObj).to.have.deep.property('teas[2].tea', 'konacha');
	   *
	   * You can also use an array as the starting point of a `deep.property`
	   * assertion, or traverse nested arrays.
	   *
	   *     var arr = [
	   *         [ 'chai', 'matcha', 'konacha' ]
	   *       , [ { tea: 'chai' }
	   *         , { tea: 'matcha' }
	   *         , { tea: 'konacha' } ]
	   *     ];
	   *
	   *     expect(arr).to.have.deep.property('[0][1]', 'matcha');
	   *     expect(arr).to.have.deep.property('[1][2].tea', 'konacha');
	   *
	   * Furthermore, `property` changes the subject of the assertion
	   * to be the value of that property from the original object. This
	   * permits for further chainable assertions on that property.
	   *
	   *     expect(obj).to.have.property('foo')
	   *       .that.is.a('string');
	   *     expect(deepObj).to.have.property('green')
	   *       .that.is.an('object')
	   *       .that.deep.equals({ tea: 'matcha' });
	   *     expect(deepObj).to.have.property('teas')
	   *       .that.is.an('array')
	   *       .with.deep.property('[2]')
	   *         .that.deep.equals({ tea: 'konacha' });
	   *
	   * Note that dots and bracket in `name` must be backslash-escaped when
	   * the `deep` flag is set, while they must NOT be escaped when the `deep`
	   * flag is not set.
	   *
	   *     // simple referencing
	   *     var css = { '.link[target]': 42 };
	   *     expect(css).to.have.property('.link[target]', 42);
	   *
	   *     // deep referencing
	   *     var deepCss = { '.link': { '[target]': 42 }};
	   *     expect(deepCss).to.have.deep.property('\\.link.\\[target\\]', 42);
	   *
	   * @name property
	   * @alias deep.property
	   * @param {String} name
	   * @param {Mixed} value (optional)
	   * @param {String} message _optional_
	   * @returns value of property for chaining
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addMethod('property', function (name, val, msg) {
	    if (msg) flag(this, 'message', msg);

	    var isDeep = !!flag(this, 'deep'),
	        descriptor = isDeep ? 'deep property ' : 'property ',
	        negate = flag(this, 'negate'),
	        obj = flag(this, 'object'),
	        pathInfo = isDeep ? _.getPathInfo(name, obj) : null,
	        hasProperty = isDeep ? pathInfo.exists : _.hasProperty(name, obj),
	        value = isDeep ? pathInfo.value : obj[name];

	    if (negate && arguments.length > 1) {
	      if (undefined === value) {
	        msg = msg != null ? msg + ': ' : '';
	        throw new Error(msg + _.inspect(obj) + ' has no ' + descriptor + _.inspect(name));
	      }
	    } else {
	      this.assert(hasProperty, 'expected #{this} to have a ' + descriptor + _.inspect(name), 'expected #{this} to not have ' + descriptor + _.inspect(name));
	    }

	    if (arguments.length > 1) {
	      this.assert(val === value, 'expected #{this} to have a ' + descriptor + _.inspect(name) + ' of #{exp}, but got #{act}', 'expected #{this} to not have a ' + descriptor + _.inspect(name) + ' of #{act}', val, value);
	    }

	    flag(this, 'object', value);
	  });

	  /**
	   * ### .ownProperty(name)
	   *
	   * Asserts that the target has an own property `name`.
	   *
	   *     expect('test').to.have.ownProperty('length');
	   *
	   * @name ownProperty
	   * @alias haveOwnProperty
	   * @param {String} name
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function assertOwnProperty(name, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    this.assert(obj.hasOwnProperty(name), 'expected #{this} to have own property ' + _.inspect(name), 'expected #{this} to not have own property ' + _.inspect(name));
	  }

	  Assertion.addMethod('ownProperty', assertOwnProperty);
	  Assertion.addMethod('haveOwnProperty', assertOwnProperty);

	  /**
	   * ### .ownPropertyDescriptor(name[, descriptor[, message]])
	   *
	   * Asserts that the target has an own property descriptor `name`, that optionally matches `descriptor`.
	   *
	   *     expect('test').to.have.ownPropertyDescriptor('length');
	   *     expect('test').to.have.ownPropertyDescriptor('length', { enumerable: false, configurable: false, writable: false, value: 4 });
	   *     expect('test').not.to.have.ownPropertyDescriptor('length', { enumerable: false, configurable: false, writable: false, value: 3 });
	   *     expect('test').ownPropertyDescriptor('length').to.have.property('enumerable', false);
	   *     expect('test').ownPropertyDescriptor('length').to.have.keys('value');
	   *
	   * @name ownPropertyDescriptor
	   * @alias haveOwnPropertyDescriptor
	   * @param {String} name
	   * @param {Object} descriptor _optional_
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function assertOwnPropertyDescriptor(name, descriptor, msg) {
	    if (typeof descriptor === 'string') {
	      msg = descriptor;
	      descriptor = null;
	    }
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    var actualDescriptor = Object.getOwnPropertyDescriptor(Object(obj), name);
	    if (actualDescriptor && descriptor) {
	      this.assert(_.eql(descriptor, actualDescriptor), 'expected the own property descriptor for ' + _.inspect(name) + ' on #{this} to match ' + _.inspect(descriptor) + ', got ' + _.inspect(actualDescriptor), 'expected the own property descriptor for ' + _.inspect(name) + ' on #{this} to not match ' + _.inspect(descriptor), descriptor, actualDescriptor, true);
	    } else {
	      this.assert(actualDescriptor, 'expected #{this} to have an own property descriptor for ' + _.inspect(name), 'expected #{this} to not have an own property descriptor for ' + _.inspect(name));
	    }
	    flag(this, 'object', actualDescriptor);
	  }

	  Assertion.addMethod('ownPropertyDescriptor', assertOwnPropertyDescriptor);
	  Assertion.addMethod('haveOwnPropertyDescriptor', assertOwnPropertyDescriptor);

	  /**
	   * ### .length
	   *
	   * Sets the `doLength` flag later used as a chain precursor to a value
	   * comparison for the `length` property.
	   *
	   *     expect('foo').to.have.length.above(2);
	   *     expect([ 1, 2, 3 ]).to.have.length.above(2);
	   *     expect('foo').to.have.length.below(4);
	   *     expect([ 1, 2, 3 ]).to.have.length.below(4);
	   *     expect('foo').to.have.length.within(2,4);
	   *     expect([ 1, 2, 3 ]).to.have.length.within(2,4);
	   *
	   * *Deprecation notice:* Using `length` as an assertion will be deprecated
	   * in version 2.4.0 and removed in 3.0.0. Code using the old style of
	   * asserting for `length` property value using `length(value)` should be
	   * switched to use `lengthOf(value)` instead.
	   *
	   * @name length
	   * @namespace BDD
	   * @api public
	   */

	  /**
	   * ### .lengthOf(value[, message])
	   *
	   * Asserts that the target's `length` property has
	   * the expected value.
	   *
	   *     expect([ 1, 2, 3]).to.have.lengthOf(3);
	   *     expect('foobar').to.have.lengthOf(6);
	   *
	   * @name lengthOf
	   * @param {Number} length
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function assertLengthChain() {
	    flag(this, 'doLength', true);
	  }

	  function assertLength(n, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    new Assertion(obj, msg).to.have.property('length');
	    var len = obj.length;

	    this.assert(len == n, 'expected #{this} to have a length of #{exp} but got #{act}', 'expected #{this} to not have a length of #{act}', n, len);
	  }

	  Assertion.addChainableMethod('length', assertLength, assertLengthChain);
	  Assertion.addMethod('lengthOf', assertLength);

	  /**
	   * ### .match(regexp)
	   *
	   * Asserts that the target matches a regular expression.
	   *
	   *     expect('foobar').to.match(/^foo/);
	   *
	   * @name match
	   * @alias matches
	   * @param {RegExp} RegularExpression
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	  function assertMatch(re, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    this.assert(re.exec(obj), 'expected #{this} to match ' + re, 'expected #{this} not to match ' + re);
	  }

	  Assertion.addMethod('match', assertMatch);
	  Assertion.addMethod('matches', assertMatch);

	  /**
	   * ### .string(string)
	   *
	   * Asserts that the string target contains another string.
	   *
	   *     expect('foobar').to.have.string('bar');
	   *
	   * @name string
	   * @param {String} string
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addMethod('string', function (str, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    new Assertion(obj, msg).is.a('string');

	    this.assert(~obj.indexOf(str), 'expected #{this} to contain ' + _.inspect(str), 'expected #{this} to not contain ' + _.inspect(str));
	  });

	  /**
	   * ### .keys(key1, [key2], [...])
	   *
	   * Asserts that the target contains any or all of the passed-in keys.
	   * Use in combination with `any`, `all`, `contains`, or `have` will affect
	   * what will pass.
	   *
	   * When used in conjunction with `any`, at least one key that is passed
	   * in must exist in the target object. This is regardless whether or not
	   * the `have` or `contain` qualifiers are used. Note, either `any` or `all`
	   * should be used in the assertion. If neither are used, the assertion is
	   * defaulted to `all`.
	   *
	   * When both `all` and `contain` are used, the target object must have at
	   * least all of the passed-in keys but may have more keys not listed.
	   *
	   * When both `all` and `have` are used, the target object must both contain
	   * all of the passed-in keys AND the number of keys in the target object must
	   * match the number of keys passed in (in other words, a target object must
	   * have all and only all of the passed-in keys).
	   *
	   *     expect({ foo: 1, bar: 2 }).to.have.any.keys('foo', 'baz');
	   *     expect({ foo: 1, bar: 2 }).to.have.any.keys('foo');
	   *     expect({ foo: 1, bar: 2 }).to.contain.any.keys('bar', 'baz');
	   *     expect({ foo: 1, bar: 2 }).to.contain.any.keys(['foo']);
	   *     expect({ foo: 1, bar: 2 }).to.contain.any.keys({'foo': 6});
	   *     expect({ foo: 1, bar: 2 }).to.have.all.keys(['bar', 'foo']);
	   *     expect({ foo: 1, bar: 2 }).to.have.all.keys({'bar': 6, 'foo': 7});
	   *     expect({ foo: 1, bar: 2, baz: 3 }).to.contain.all.keys(['bar', 'foo']);
	   *     expect({ foo: 1, bar: 2, baz: 3 }).to.contain.all.keys({'bar': 6});
	   *
	   *
	   * @name keys
	   * @alias key
	   * @param {...String|Array|Object} keys
	   * @namespace BDD
	   * @api public
	   */

	  function assertKeys(keys) {
	    var obj = flag(this, 'object'),
	        str,
	        ok = true,
	        mixedArgsMsg = 'keys must be given single argument of Array|Object|String, or multiple String arguments';

	    switch (_.type(keys)) {
	      case "array":
	        if (arguments.length > 1) throw new Error(mixedArgsMsg);
	        break;
	      case "object":
	        if (arguments.length > 1) throw new Error(mixedArgsMsg);
	        keys = Object.keys(keys);
	        break;
	      default:
	        keys = Array.prototype.slice.call(arguments);
	    }

	    if (!keys.length) throw new Error('keys required');

	    var actual = Object.keys(obj),
	        expected = keys,
	        len = keys.length,
	        any = flag(this, 'any'),
	        all = flag(this, 'all');

	    if (!any && !all) {
	      all = true;
	    }

	    // Has any
	    if (any) {
	      var intersection = expected.filter(function (key) {
	        return ~actual.indexOf(key);
	      });
	      ok = intersection.length > 0;
	    }

	    // Has all
	    if (all) {
	      ok = keys.every(function (key) {
	        return ~actual.indexOf(key);
	      });
	      if (!flag(this, 'negate') && !flag(this, 'contains')) {
	        ok = ok && keys.length == actual.length;
	      }
	    }

	    // Key string
	    if (len > 1) {
	      keys = keys.map(function (key) {
	        return _.inspect(key);
	      });
	      var last = keys.pop();
	      if (all) {
	        str = keys.join(', ') + ', and ' + last;
	      }
	      if (any) {
	        str = keys.join(', ') + ', or ' + last;
	      }
	    } else {
	      str = _.inspect(keys[0]);
	    }

	    // Form
	    str = (len > 1 ? 'keys ' : 'key ') + str;

	    // Have / include
	    str = (flag(this, 'contains') ? 'contain ' : 'have ') + str;

	    // Assertion
	    this.assert(ok, 'expected #{this} to ' + str, 'expected #{this} to not ' + str, expected.slice(0).sort(), actual.sort(), true);
	  }

	  Assertion.addMethod('keys', assertKeys);
	  Assertion.addMethod('key', assertKeys);

	  /**
	   * ### .throw(constructor)
	   *
	   * Asserts that the function target will throw a specific error, or specific type of error
	   * (as determined using `instanceof`), optionally with a RegExp or string inclusion test
	   * for the error's message.
	   *
	   *     var err = new ReferenceError('This is a bad function.');
	   *     var fn = function () { throw err; }
	   *     expect(fn).to.throw(ReferenceError);
	   *     expect(fn).to.throw(Error);
	   *     expect(fn).to.throw(/bad function/);
	   *     expect(fn).to.not.throw('good function');
	   *     expect(fn).to.throw(ReferenceError, /bad function/);
	   *     expect(fn).to.throw(err);
	   *
	   * Please note that when a throw expectation is negated, it will check each
	   * parameter independently, starting with error constructor type. The appropriate way
	   * to check for the existence of a type of error but for a message that does not match
	   * is to use `and`.
	   *
	   *     expect(fn).to.throw(ReferenceError)
	   *        .and.not.throw(/good function/);
	   *
	   * @name throw
	   * @alias throws
	   * @alias Throw
	   * @param {ErrorConstructor} constructor
	   * @param {String|RegExp} expected error message
	   * @param {String} message _optional_
	   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
	   * @returns error for chaining (null if no error)
	   * @namespace BDD
	   * @api public
	   */

	  function assertThrows(constructor, errMsg, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    new Assertion(obj, msg).is.a('function');

	    var thrown = false,
	        desiredError = null,
	        name = null,
	        thrownError = null;

	    if (arguments.length === 0) {
	      errMsg = null;
	      constructor = null;
	    } else if (constructor && (constructor instanceof RegExp || 'string' === typeof constructor)) {
	      errMsg = constructor;
	      constructor = null;
	    } else if (constructor && constructor instanceof Error) {
	      desiredError = constructor;
	      constructor = null;
	      errMsg = null;
	    } else if (typeof constructor === 'function') {
	      name = constructor.prototype.name;
	      if (!name || name === 'Error' && constructor !== Error) {
	        name = constructor.name || new constructor().name;
	      }
	    } else {
	      constructor = null;
	    }

	    try {
	      obj();
	    } catch (err) {
	      // first, check desired error
	      if (desiredError) {
	        this.assert(err === desiredError, 'expected #{this} to throw #{exp} but #{act} was thrown', 'expected #{this} to not throw #{exp}', desiredError instanceof Error ? desiredError.toString() : desiredError, err instanceof Error ? err.toString() : err);

	        flag(this, 'object', err);
	        return this;
	      }

	      // next, check constructor
	      if (constructor) {
	        this.assert(err instanceof constructor, 'expected #{this} to throw #{exp} but #{act} was thrown', 'expected #{this} to not throw #{exp} but #{act} was thrown', name, err instanceof Error ? err.toString() : err);

	        if (!errMsg) {
	          flag(this, 'object', err);
	          return this;
	        }
	      }

	      // next, check message
	      var message = 'error' === _.type(err) && "message" in err ? err.message : '' + err;

	      if (message != null && errMsg && errMsg instanceof RegExp) {
	        this.assert(errMsg.exec(message), 'expected #{this} to throw error matching #{exp} but got #{act}', 'expected #{this} to throw error not matching #{exp}', errMsg, message);

	        flag(this, 'object', err);
	        return this;
	      } else if (message != null && errMsg && 'string' === typeof errMsg) {
	        this.assert(~message.indexOf(errMsg), 'expected #{this} to throw error including #{exp} but got #{act}', 'expected #{this} to throw error not including #{act}', errMsg, message);

	        flag(this, 'object', err);
	        return this;
	      } else {
	        thrown = true;
	        thrownError = err;
	      }
	    }

	    var actuallyGot = '',
	        expectedThrown = name !== null ? name : desiredError ? '#{exp}' //_.inspect(desiredError)
	    : 'an error';

	    if (thrown) {
	      actuallyGot = ' but #{act} was thrown';
	    }

	    this.assert(thrown === true, 'expected #{this} to throw ' + expectedThrown + actuallyGot, 'expected #{this} to not throw ' + expectedThrown + actuallyGot, desiredError instanceof Error ? desiredError.toString() : desiredError, thrownError instanceof Error ? thrownError.toString() : thrownError);

	    flag(this, 'object', thrownError);
	  };

	  Assertion.addMethod('throw', assertThrows);
	  Assertion.addMethod('throws', assertThrows);
	  Assertion.addMethod('Throw', assertThrows);

	  /**
	   * ### .respondTo(method)
	   *
	   * Asserts that the object or class target will respond to a method.
	   *
	   *     Klass.prototype.bar = function(){};
	   *     expect(Klass).to.respondTo('bar');
	   *     expect(obj).to.respondTo('bar');
	   *
	   * To check if a constructor will respond to a static function,
	   * set the `itself` flag.
	   *
	   *     Klass.baz = function(){};
	   *     expect(Klass).itself.to.respondTo('baz');
	   *
	   * @name respondTo
	   * @alias respondsTo
	   * @param {String} method
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function respondTo(method, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object'),
	        itself = flag(this, 'itself'),
	        context = 'function' === _.type(obj) && !itself ? obj.prototype[method] : obj[method];

	    this.assert('function' === typeof context, 'expected #{this} to respond to ' + _.inspect(method), 'expected #{this} to not respond to ' + _.inspect(method));
	  }

	  Assertion.addMethod('respondTo', respondTo);
	  Assertion.addMethod('respondsTo', respondTo);

	  /**
	   * ### .itself
	   *
	   * Sets the `itself` flag, later used by the `respondTo` assertion.
	   *
	   *     function Foo() {}
	   *     Foo.bar = function() {}
	   *     Foo.prototype.baz = function() {}
	   *
	   *     expect(Foo).itself.to.respondTo('bar');
	   *     expect(Foo).itself.not.to.respondTo('baz');
	   *
	   * @name itself
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('itself', function () {
	    flag(this, 'itself', true);
	  });

	  /**
	   * ### .satisfy(method)
	   *
	   * Asserts that the target passes a given truth test.
	   *
	   *     expect(1).to.satisfy(function(num) { return num > 0; });
	   *
	   * @name satisfy
	   * @alias satisfies
	   * @param {Function} matcher
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function satisfy(matcher, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    var result = matcher(obj);
	    this.assert(result, 'expected #{this} to satisfy ' + _.objDisplay(matcher), 'expected #{this} to not satisfy' + _.objDisplay(matcher), this.negate ? false : true, result);
	  }

	  Assertion.addMethod('satisfy', satisfy);
	  Assertion.addMethod('satisfies', satisfy);

	  /**
	   * ### .closeTo(expected, delta)
	   *
	   * Asserts that the target is equal `expected`, to within a +/- `delta` range.
	   *
	   *     expect(1.5).to.be.closeTo(1, 0.5);
	   *
	   * @name closeTo
	   * @alias approximately
	   * @param {Number} expected
	   * @param {Number} delta
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function closeTo(expected, delta, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');

	    new Assertion(obj, msg).is.a('number');
	    if (_.type(expected) !== 'number' || _.type(delta) !== 'number') {
	      throw new Error('the arguments to closeTo or approximately must be numbers');
	    }

	    this.assert(Math.abs(obj - expected) <= delta, 'expected #{this} to be close to ' + expected + ' +/- ' + delta, 'expected #{this} not to be close to ' + expected + ' +/- ' + delta);
	  }

	  Assertion.addMethod('closeTo', closeTo);
	  Assertion.addMethod('approximately', closeTo);

	  function isSubsetOf(subset, superset, cmp) {
	    return subset.every(function (elem) {
	      if (!cmp) return superset.indexOf(elem) !== -1;

	      return superset.some(function (elem2) {
	        return cmp(elem, elem2);
	      });
	    });
	  }

	  /**
	   * ### .members(set)
	   *
	   * Asserts that the target is a superset of `set`,
	   * or that the target and `set` have the same strictly-equal (===) members.
	   * Alternately, if the `deep` flag is set, set members are compared for deep
	   * equality.
	   *
	   *     expect([1, 2, 3]).to.include.members([3, 2]);
	   *     expect([1, 2, 3]).to.not.include.members([3, 2, 8]);
	   *
	   *     expect([4, 2]).to.have.members([2, 4]);
	   *     expect([5, 2]).to.not.have.members([5, 2, 1]);
	   *
	   *     expect([{ id: 1 }]).to.deep.include.members([{ id: 1 }]);
	   *
	   * @name members
	   * @param {Array} set
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addMethod('members', function (subset, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');

	    new Assertion(obj).to.be.an('array');
	    new Assertion(subset).to.be.an('array');

	    var cmp = flag(this, 'deep') ? _.eql : undefined;

	    if (flag(this, 'contains')) {
	      return this.assert(isSubsetOf(subset, obj, cmp), 'expected #{this} to be a superset of #{act}', 'expected #{this} to not be a superset of #{act}', obj, subset);
	    }

	    this.assert(isSubsetOf(obj, subset, cmp) && isSubsetOf(subset, obj, cmp), 'expected #{this} to have the same members as #{act}', 'expected #{this} to not have the same members as #{act}', obj, subset);
	  });

	  /**
	   * ### .oneOf(list)
	   *
	   * Assert that a value appears somewhere in the top level of array `list`.
	   *
	   *     expect('a').to.be.oneOf(['a', 'b', 'c']);
	   *     expect(9).to.not.be.oneOf(['z']);
	   *     expect([3]).to.not.be.oneOf([1, 2, [3]]);
	   *
	   *     var three = [3];
	   *     // for object-types, contents are not compared
	   *     expect(three).to.not.be.oneOf([1, 2, [3]]);
	   *     // comparing references works
	   *     expect(three).to.be.oneOf([1, 2, three]);
	   *
	   * @name oneOf
	   * @param {Array<*>} list
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function oneOf(list, msg) {
	    if (msg) flag(this, 'message', msg);
	    var expected = flag(this, 'object');
	    new Assertion(list).to.be.an('array');

	    this.assert(list.indexOf(expected) > -1, 'expected #{this} to be one of #{exp}', 'expected #{this} to not be one of #{exp}', list, expected);
	  }

	  Assertion.addMethod('oneOf', oneOf);

	  /**
	   * ### .change(function)
	   *
	   * Asserts that a function changes an object property
	   *
	   *     var obj = { val: 10 };
	   *     var fn = function() { obj.val += 3 };
	   *     var noChangeFn = function() { return 'foo' + 'bar'; }
	   *     expect(fn).to.change(obj, 'val');
	   *     expect(noChangeFn).to.not.change(obj, 'val')
	   *
	   * @name change
	   * @alias changes
	   * @alias Change
	   * @param {String} object
	   * @param {String} property name
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function assertChanges(object, prop, msg) {
	    if (msg) flag(this, 'message', msg);
	    var fn = flag(this, 'object');
	    new Assertion(object, msg).to.have.property(prop);
	    new Assertion(fn).is.a('function');

	    var initial = object[prop];
	    fn();

	    this.assert(initial !== object[prop], 'expected .' + prop + ' to change', 'expected .' + prop + ' to not change');
	  }

	  Assertion.addChainableMethod('change', assertChanges);
	  Assertion.addChainableMethod('changes', assertChanges);

	  /**
	   * ### .increase(function)
	   *
	   * Asserts that a function increases an object property
	   *
	   *     var obj = { val: 10 };
	   *     var fn = function() { obj.val = 15 };
	   *     expect(fn).to.increase(obj, 'val');
	   *
	   * @name increase
	   * @alias increases
	   * @alias Increase
	   * @param {String} object
	   * @param {String} property name
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function assertIncreases(object, prop, msg) {
	    if (msg) flag(this, 'message', msg);
	    var fn = flag(this, 'object');
	    new Assertion(object, msg).to.have.property(prop);
	    new Assertion(fn).is.a('function');

	    var initial = object[prop];
	    fn();

	    this.assert(object[prop] - initial > 0, 'expected .' + prop + ' to increase', 'expected .' + prop + ' to not increase');
	  }

	  Assertion.addChainableMethod('increase', assertIncreases);
	  Assertion.addChainableMethod('increases', assertIncreases);

	  /**
	   * ### .decrease(function)
	   *
	   * Asserts that a function decreases an object property
	   *
	   *     var obj = { val: 10 };
	   *     var fn = function() { obj.val = 5 };
	   *     expect(fn).to.decrease(obj, 'val');
	   *
	   * @name decrease
	   * @alias decreases
	   * @alias Decrease
	   * @param {String} object
	   * @param {String} property name
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function assertDecreases(object, prop, msg) {
	    if (msg) flag(this, 'message', msg);
	    var fn = flag(this, 'object');
	    new Assertion(object, msg).to.have.property(prop);
	    new Assertion(fn).is.a('function');

	    var initial = object[prop];
	    fn();

	    this.assert(object[prop] - initial < 0, 'expected .' + prop + ' to decrease', 'expected .' + prop + ' to not decrease');
	  }

	  Assertion.addChainableMethod('decrease', assertDecreases);
	  Assertion.addChainableMethod('decreases', assertDecreases);

	  /**
	   * ### .extensible
	   *
	   * Asserts that the target is extensible (can have new properties added to
	   * it).
	   *
	   *     var nonExtensibleObject = Object.preventExtensions({});
	   *     var sealedObject = Object.seal({});
	   *     var frozenObject = Object.freeze({});
	   *
	   *     expect({}).to.be.extensible;
	   *     expect(nonExtensibleObject).to.not.be.extensible;
	   *     expect(sealedObject).to.not.be.extensible;
	   *     expect(frozenObject).to.not.be.extensible;
	   *
	   * @name extensible
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('extensible', function () {
	    var obj = flag(this, 'object');

	    // In ES5, if the argument to this method is not an object (a primitive), then it will cause a TypeError.
	    // In ES6, a non-object argument will be treated as if it was a non-extensible ordinary object, simply return false.
	    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible
	    // The following provides ES6 behavior when a TypeError is thrown under ES5.

	    var isExtensible;

	    try {
	      isExtensible = Object.isExtensible(obj);
	    } catch (err) {
	      if (err instanceof TypeError) isExtensible = false;else throw err;
	    }

	    this.assert(isExtensible, 'expected #{this} to be extensible', 'expected #{this} to not be extensible');
	  });

	  /**
	   * ### .sealed
	   *
	   * Asserts that the target is sealed (cannot have new properties added to it
	   * and its existing properties cannot be removed).
	   *
	   *     var sealedObject = Object.seal({});
	   *     var frozenObject = Object.freeze({});
	   *
	   *     expect(sealedObject).to.be.sealed;
	   *     expect(frozenObject).to.be.sealed;
	   *     expect({}).to.not.be.sealed;
	   *
	   * @name sealed
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('sealed', function () {
	    var obj = flag(this, 'object');

	    // In ES5, if the argument to this method is not an object (a primitive), then it will cause a TypeError.
	    // In ES6, a non-object argument will be treated as if it was a sealed ordinary object, simply return true.
	    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed
	    // The following provides ES6 behavior when a TypeError is thrown under ES5.

	    var isSealed;

	    try {
	      isSealed = Object.isSealed(obj);
	    } catch (err) {
	      if (err instanceof TypeError) isSealed = true;else throw err;
	    }

	    this.assert(isSealed, 'expected #{this} to be sealed', 'expected #{this} to not be sealed');
	  });

	  /**
	   * ### .frozen
	   *
	   * Asserts that the target is frozen (cannot have new properties added to it
	   * and its existing properties cannot be modified).
	   *
	   *     var frozenObject = Object.freeze({});
	   *
	   *     expect(frozenObject).to.be.frozen;
	   *     expect({}).to.not.be.frozen;
	   *
	   * @name frozen
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('frozen', function () {
	    var obj = flag(this, 'object');

	    // In ES5, if the argument to this method is not an object (a primitive), then it will cause a TypeError.
	    // In ES6, a non-object argument will be treated as if it was a frozen ordinary object, simply return true.
	    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen
	    // The following provides ES6 behavior when a TypeError is thrown under ES5.

	    var isFrozen;

	    try {
	      isFrozen = Object.isFrozen(obj);
	    } catch (err) {
	      if (err instanceof TypeError) isFrozen = true;else throw err;
	    }

	    this.assert(isFrozen, 'expected #{this} to be frozen', 'expected #{this} to not be frozen');
	  });
	};

/***/ },

/***/ 378:
/*!*********************************************!*\
  !*** ./~/chai/lib/chai/interface/expect.js ***!
  \*********************************************/
/***/ function(module, exports) {

	'use strict';

	/*!
	 * chai
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	module.exports = function (chai, util) {
	  chai.expect = function (val, message) {
	    return new chai.Assertion(val, message);
	  };

	  /**
	   * ### .fail(actual, expected, [message], [operator])
	   *
	   * Throw a failure.
	   *
	   * @name fail
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @param {String} operator
	   * @namespace Expect
	   * @api public
	   */

	  chai.expect.fail = function (actual, expected, message, operator) {
	    message = message || 'expect.fail()';
	    throw new chai.AssertionError(message, {
	      actual: actual,
	      expected: expected,
	      operator: operator
	    }, chai.expect.fail);
	  };
	};

/***/ },

/***/ 379:
/*!*********************************************!*\
  !*** ./~/chai/lib/chai/interface/should.js ***!
  \*********************************************/
/***/ function(module, exports) {

	'use strict';

	/*!
	 * chai
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	module.exports = function (chai, util) {
	  var Assertion = chai.Assertion;

	  function loadShould() {
	    // explicitly define this method as function as to have it's name to include as `ssfi`
	    function shouldGetter() {
	      if (this instanceof String || this instanceof Number || this instanceof Boolean) {
	        return new Assertion(this.valueOf(), null, shouldGetter);
	      }
	      return new Assertion(this, null, shouldGetter);
	    }
	    function shouldSetter(value) {
	      // See https://github.com/chaijs/chai/issues/86: this makes
	      // `whatever.should = someValue` actually set `someValue`, which is
	      // especially useful for `global.should = require('chai').should()`.
	      //
	      // Note that we have to use [[DefineProperty]] instead of [[Put]]
	      // since otherwise we would trigger this very setter!
	      Object.defineProperty(this, 'should', {
	        value: value,
	        enumerable: true,
	        configurable: true,
	        writable: true
	      });
	    }
	    // modify Object.prototype to have `should`
	    Object.defineProperty(Object.prototype, 'should', {
	      set: shouldSetter,
	      get: shouldGetter,
	      configurable: true
	    });

	    var should = {};

	    /**
	     * ### .fail(actual, expected, [message], [operator])
	     *
	     * Throw a failure.
	     *
	     * @name fail
	     * @param {Mixed} actual
	     * @param {Mixed} expected
	     * @param {String} message
	     * @param {String} operator
	     * @namespace Should
	     * @api public
	     */

	    should.fail = function (actual, expected, message, operator) {
	      message = message || 'should.fail()';
	      throw new chai.AssertionError(message, {
	        actual: actual,
	        expected: expected,
	        operator: operator
	      }, should.fail);
	    };

	    /**
	     * ### .equal(actual, expected, [message])
	     *
	     * Asserts non-strict equality (`==`) of `actual` and `expected`.
	     *
	     *     should.equal(3, '3', '== coerces values to strings');
	     *
	     * @name equal
	     * @param {Mixed} actual
	     * @param {Mixed} expected
	     * @param {String} message
	     * @namespace Should
	     * @api public
	     */

	    should.equal = function (val1, val2, msg) {
	      new Assertion(val1, msg).to.equal(val2);
	    };

	    /**
	     * ### .throw(function, [constructor/string/regexp], [string/regexp], [message])
	     *
	     * Asserts that `function` will throw an error that is an instance of
	     * `constructor`, or alternately that it will throw an error with message
	     * matching `regexp`.
	     *
	     *     should.throw(fn, 'function throws a reference error');
	     *     should.throw(fn, /function throws a reference error/);
	     *     should.throw(fn, ReferenceError);
	     *     should.throw(fn, ReferenceError, 'function throws a reference error');
	     *     should.throw(fn, ReferenceError, /function throws a reference error/);
	     *
	     * @name throw
	     * @alias Throw
	     * @param {Function} function
	     * @param {ErrorConstructor} constructor
	     * @param {RegExp} regexp
	     * @param {String} message
	     * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
	     * @namespace Should
	     * @api public
	     */

	    should.Throw = function (fn, errt, errs, msg) {
	      new Assertion(fn, msg).to.Throw(errt, errs);
	    };

	    /**
	     * ### .exist
	     *
	     * Asserts that the target is neither `null` nor `undefined`.
	     *
	     *     var foo = 'hi';
	     *
	     *     should.exist(foo, 'foo exists');
	     *
	     * @name exist
	     * @namespace Should
	     * @api public
	     */

	    should.exist = function (val, msg) {
	      new Assertion(val, msg).to.exist;
	    };

	    // negation
	    should.not = {};

	    /**
	     * ### .not.equal(actual, expected, [message])
	     *
	     * Asserts non-strict inequality (`!=`) of `actual` and `expected`.
	     *
	     *     should.not.equal(3, 4, 'these numbers are not equal');
	     *
	     * @name not.equal
	     * @param {Mixed} actual
	     * @param {Mixed} expected
	     * @param {String} message
	     * @namespace Should
	     * @api public
	     */

	    should.not.equal = function (val1, val2, msg) {
	      new Assertion(val1, msg).to.not.equal(val2);
	    };

	    /**
	     * ### .throw(function, [constructor/regexp], [message])
	     *
	     * Asserts that `function` will _not_ throw an error that is an instance of
	     * `constructor`, or alternately that it will not throw an error with message
	     * matching `regexp`.
	     *
	     *     should.not.throw(fn, Error, 'function does not throw');
	     *
	     * @name not.throw
	     * @alias not.Throw
	     * @param {Function} function
	     * @param {ErrorConstructor} constructor
	     * @param {RegExp} regexp
	     * @param {String} message
	     * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
	     * @namespace Should
	     * @api public
	     */

	    should.not.Throw = function (fn, errt, errs, msg) {
	      new Assertion(fn, msg).to.not.Throw(errt, errs);
	    };

	    /**
	     * ### .not.exist
	     *
	     * Asserts that the target is neither `null` nor `undefined`.
	     *
	     *     var bar = null;
	     *
	     *     should.not.exist(bar, 'bar does not exist');
	     *
	     * @name not.exist
	     * @namespace Should
	     * @api public
	     */

	    should.not.exist = function (val, msg) {
	      new Assertion(val, msg).to.not.exist;
	    };

	    should['throw'] = should['Throw'];
	    should.not['throw'] = should.not['Throw'];

	    return should;
	  };

	  chai.should = loadShould;
	  chai.Should = loadShould;
	};

/***/ },

/***/ 380:
/*!*********************************************!*\
  !*** ./~/chai/lib/chai/interface/assert.js ***!
  \*********************************************/
/***/ function(module, exports) {

	'use strict';

	/*!
	 * chai
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	module.exports = function (chai, util) {

	  /*!
	   * Chai dependencies.
	   */

	  var Assertion = chai.Assertion,
	      flag = util.flag;

	  /*!
	   * Module export.
	   */

	  /**
	   * ### assert(expression, message)
	   *
	   * Write your own test expressions.
	   *
	   *     assert('foo' !== 'bar', 'foo is not bar');
	   *     assert(Array.isArray([]), 'empty arrays are arrays');
	   *
	   * @param {Mixed} expression to test for truthiness
	   * @param {String} message to display on error
	   * @name assert
	   * @namespace Assert
	   * @api public
	   */

	  var assert = chai.assert = function (express, errmsg) {
	    var test = new Assertion(null, null, chai.assert);
	    test.assert(express, errmsg, '[ negation message unavailable ]');
	  };

	  /**
	   * ### .fail(actual, expected, [message], [operator])
	   *
	   * Throw a failure. Node.js `assert` module-compatible.
	   *
	   * @name fail
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @param {String} operator
	   * @namespace Assert
	   * @api public
	   */

	  assert.fail = function (actual, expected, message, operator) {
	    message = message || 'assert.fail()';
	    throw new chai.AssertionError(message, {
	      actual: actual,
	      expected: expected,
	      operator: operator
	    }, assert.fail);
	  };

	  /**
	   * ### .isOk(object, [message])
	   *
	   * Asserts that `object` is truthy.
	   *
	   *     assert.isOk('everything', 'everything is ok');
	   *     assert.isOk(false, 'this will fail');
	   *
	   * @name isOk
	   * @alias ok
	   * @param {Mixed} object to test
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isOk = function (val, msg) {
	    new Assertion(val, msg).is.ok;
	  };

	  /**
	   * ### .isNotOk(object, [message])
	   *
	   * Asserts that `object` is falsy.
	   *
	   *     assert.isNotOk('everything', 'this will fail');
	   *     assert.isNotOk(false, 'this will pass');
	   *
	   * @name isNotOk
	   * @alias notOk
	   * @param {Mixed} object to test
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNotOk = function (val, msg) {
	    new Assertion(val, msg).is.not.ok;
	  };

	  /**
	   * ### .equal(actual, expected, [message])
	   *
	   * Asserts non-strict equality (`==`) of `actual` and `expected`.
	   *
	   *     assert.equal(3, '3', '== coerces values to strings');
	   *
	   * @name equal
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.equal = function (act, exp, msg) {
	    var test = new Assertion(act, msg, assert.equal);

	    test.assert(exp == flag(test, 'object'), 'expected #{this} to equal #{exp}', 'expected #{this} to not equal #{act}', exp, act);
	  };

	  /**
	   * ### .notEqual(actual, expected, [message])
	   *
	   * Asserts non-strict inequality (`!=`) of `actual` and `expected`.
	   *
	   *     assert.notEqual(3, 4, 'these numbers are not equal');
	   *
	   * @name notEqual
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.notEqual = function (act, exp, msg) {
	    var test = new Assertion(act, msg, assert.notEqual);

	    test.assert(exp != flag(test, 'object'), 'expected #{this} to not equal #{exp}', 'expected #{this} to equal #{act}', exp, act);
	  };

	  /**
	   * ### .strictEqual(actual, expected, [message])
	   *
	   * Asserts strict equality (`===`) of `actual` and `expected`.
	   *
	   *     assert.strictEqual(true, true, 'these booleans are strictly equal');
	   *
	   * @name strictEqual
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.strictEqual = function (act, exp, msg) {
	    new Assertion(act, msg).to.equal(exp);
	  };

	  /**
	   * ### .notStrictEqual(actual, expected, [message])
	   *
	   * Asserts strict inequality (`!==`) of `actual` and `expected`.
	   *
	   *     assert.notStrictEqual(3, '3', 'no coercion for strict equality');
	   *
	   * @name notStrictEqual
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.notStrictEqual = function (act, exp, msg) {
	    new Assertion(act, msg).to.not.equal(exp);
	  };

	  /**
	   * ### .deepEqual(actual, expected, [message])
	   *
	   * Asserts that `actual` is deeply equal to `expected`.
	   *
	   *     assert.deepEqual({ tea: 'green' }, { tea: 'green' });
	   *
	   * @name deepEqual
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.deepEqual = function (act, exp, msg) {
	    new Assertion(act, msg).to.eql(exp);
	  };

	  /**
	   * ### .notDeepEqual(actual, expected, [message])
	   *
	   * Assert that `actual` is not deeply equal to `expected`.
	   *
	   *     assert.notDeepEqual({ tea: 'green' }, { tea: 'jasmine' });
	   *
	   * @name notDeepEqual
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.notDeepEqual = function (act, exp, msg) {
	    new Assertion(act, msg).to.not.eql(exp);
	  };

	  /**
	  * ### .isAbove(valueToCheck, valueToBeAbove, [message])
	  *
	  * Asserts `valueToCheck` is strictly greater than (>) `valueToBeAbove`
	  *
	  *     assert.isAbove(5, 2, '5 is strictly greater than 2');
	  *
	  * @name isAbove
	  * @param {Mixed} valueToCheck
	  * @param {Mixed} valueToBeAbove
	  * @param {String} message
	  * @namespace Assert
	  * @api public
	  */

	  assert.isAbove = function (val, abv, msg) {
	    new Assertion(val, msg).to.be.above(abv);
	  };

	  /**
	  * ### .isAtLeast(valueToCheck, valueToBeAtLeast, [message])
	  *
	  * Asserts `valueToCheck` is greater than or equal to (>=) `valueToBeAtLeast`
	  *
	  *     assert.isAtLeast(5, 2, '5 is greater or equal to 2');
	  *     assert.isAtLeast(3, 3, '3 is greater or equal to 3');
	  *
	  * @name isAtLeast
	  * @param {Mixed} valueToCheck
	  * @param {Mixed} valueToBeAtLeast
	  * @param {String} message
	  * @namespace Assert
	  * @api public
	  */

	  assert.isAtLeast = function (val, atlst, msg) {
	    new Assertion(val, msg).to.be.least(atlst);
	  };

	  /**
	  * ### .isBelow(valueToCheck, valueToBeBelow, [message])
	  *
	  * Asserts `valueToCheck` is strictly less than (<) `valueToBeBelow`
	  *
	  *     assert.isBelow(3, 6, '3 is strictly less than 6');
	  *
	  * @name isBelow
	  * @param {Mixed} valueToCheck
	  * @param {Mixed} valueToBeBelow
	  * @param {String} message
	  * @namespace Assert
	  * @api public
	  */

	  assert.isBelow = function (val, blw, msg) {
	    new Assertion(val, msg).to.be.below(blw);
	  };

	  /**
	  * ### .isAtMost(valueToCheck, valueToBeAtMost, [message])
	  *
	  * Asserts `valueToCheck` is less than or equal to (<=) `valueToBeAtMost`
	  *
	  *     assert.isAtMost(3, 6, '3 is less than or equal to 6');
	  *     assert.isAtMost(4, 4, '4 is less than or equal to 4');
	  *
	  * @name isAtMost
	  * @param {Mixed} valueToCheck
	  * @param {Mixed} valueToBeAtMost
	  * @param {String} message
	  * @namespace Assert
	  * @api public
	  */

	  assert.isAtMost = function (val, atmst, msg) {
	    new Assertion(val, msg).to.be.most(atmst);
	  };

	  /**
	   * ### .isTrue(value, [message])
	   *
	   * Asserts that `value` is true.
	   *
	   *     var teaServed = true;
	   *     assert.isTrue(teaServed, 'the tea has been served');
	   *
	   * @name isTrue
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isTrue = function (val, msg) {
	    new Assertion(val, msg).is['true'];
	  };

	  /**
	   * ### .isNotTrue(value, [message])
	   *
	   * Asserts that `value` is not true.
	   *
	   *     var tea = 'tasty chai';
	   *     assert.isNotTrue(tea, 'great, time for tea!');
	   *
	   * @name isNotTrue
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNotTrue = function (val, msg) {
	    new Assertion(val, msg).to.not.equal(true);
	  };

	  /**
	   * ### .isFalse(value, [message])
	   *
	   * Asserts that `value` is false.
	   *
	   *     var teaServed = false;
	   *     assert.isFalse(teaServed, 'no tea yet? hmm...');
	   *
	   * @name isFalse
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isFalse = function (val, msg) {
	    new Assertion(val, msg).is['false'];
	  };

	  /**
	   * ### .isNotFalse(value, [message])
	   *
	   * Asserts that `value` is not false.
	   *
	   *     var tea = 'tasty chai';
	   *     assert.isNotFalse(tea, 'great, time for tea!');
	   *
	   * @name isNotFalse
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNotFalse = function (val, msg) {
	    new Assertion(val, msg).to.not.equal(false);
	  };

	  /**
	   * ### .isNull(value, [message])
	   *
	   * Asserts that `value` is null.
	   *
	   *     assert.isNull(err, 'there was no error');
	   *
	   * @name isNull
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNull = function (val, msg) {
	    new Assertion(val, msg).to.equal(null);
	  };

	  /**
	   * ### .isNotNull(value, [message])
	   *
	   * Asserts that `value` is not null.
	   *
	   *     var tea = 'tasty chai';
	   *     assert.isNotNull(tea, 'great, time for tea!');
	   *
	   * @name isNotNull
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNotNull = function (val, msg) {
	    new Assertion(val, msg).to.not.equal(null);
	  };

	  /**
	   * ### .isNaN
	   * Asserts that value is NaN
	   *
	   *    assert.isNaN('foo', 'foo is NaN');
	   *
	   * @name isNaN
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNaN = function (val, msg) {
	    new Assertion(val, msg).to.be.NaN;
	  };

	  /**
	   * ### .isNotNaN
	   * Asserts that value is not NaN
	   *
	   *    assert.isNotNaN(4, '4 is not NaN');
	   *
	   * @name isNotNaN
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	  assert.isNotNaN = function (val, msg) {
	    new Assertion(val, msg).not.to.be.NaN;
	  };

	  /**
	   * ### .isUndefined(value, [message])
	   *
	   * Asserts that `value` is `undefined`.
	   *
	   *     var tea;
	   *     assert.isUndefined(tea, 'no tea defined');
	   *
	   * @name isUndefined
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isUndefined = function (val, msg) {
	    new Assertion(val, msg).to.equal(undefined);
	  };

	  /**
	   * ### .isDefined(value, [message])
	   *
	   * Asserts that `value` is not `undefined`.
	   *
	   *     var tea = 'cup of chai';
	   *     assert.isDefined(tea, 'tea has been defined');
	   *
	   * @name isDefined
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isDefined = function (val, msg) {
	    new Assertion(val, msg).to.not.equal(undefined);
	  };

	  /**
	   * ### .isFunction(value, [message])
	   *
	   * Asserts that `value` is a function.
	   *
	   *     function serveTea() { return 'cup of tea'; };
	   *     assert.isFunction(serveTea, 'great, we can have tea now');
	   *
	   * @name isFunction
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isFunction = function (val, msg) {
	    new Assertion(val, msg).to.be.a('function');
	  };

	  /**
	   * ### .isNotFunction(value, [message])
	   *
	   * Asserts that `value` is _not_ a function.
	   *
	   *     var serveTea = [ 'heat', 'pour', 'sip' ];
	   *     assert.isNotFunction(serveTea, 'great, we have listed the steps');
	   *
	   * @name isNotFunction
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNotFunction = function (val, msg) {
	    new Assertion(val, msg).to.not.be.a('function');
	  };

	  /**
	   * ### .isObject(value, [message])
	   *
	   * Asserts that `value` is an object of type 'Object' (as revealed by `Object.prototype.toString`).
	   * _The assertion does not match subclassed objects._
	   *
	   *     var selection = { name: 'Chai', serve: 'with spices' };
	   *     assert.isObject(selection, 'tea selection is an object');
	   *
	   * @name isObject
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isObject = function (val, msg) {
	    new Assertion(val, msg).to.be.a('object');
	  };

	  /**
	   * ### .isNotObject(value, [message])
	   *
	   * Asserts that `value` is _not_ an object of type 'Object' (as revealed by `Object.prototype.toString`).
	   *
	   *     var selection = 'chai'
	   *     assert.isNotObject(selection, 'tea selection is not an object');
	   *     assert.isNotObject(null, 'null is not an object');
	   *
	   * @name isNotObject
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNotObject = function (val, msg) {
	    new Assertion(val, msg).to.not.be.a('object');
	  };

	  /**
	   * ### .isArray(value, [message])
	   *
	   * Asserts that `value` is an array.
	   *
	   *     var menu = [ 'green', 'chai', 'oolong' ];
	   *     assert.isArray(menu, 'what kind of tea do we want?');
	   *
	   * @name isArray
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isArray = function (val, msg) {
	    new Assertion(val, msg).to.be.an('array');
	  };

	  /**
	   * ### .isNotArray(value, [message])
	   *
	   * Asserts that `value` is _not_ an array.
	   *
	   *     var menu = 'green|chai|oolong';
	   *     assert.isNotArray(menu, 'what kind of tea do we want?');
	   *
	   * @name isNotArray
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNotArray = function (val, msg) {
	    new Assertion(val, msg).to.not.be.an('array');
	  };

	  /**
	   * ### .isString(value, [message])
	   *
	   * Asserts that `value` is a string.
	   *
	   *     var teaOrder = 'chai';
	   *     assert.isString(teaOrder, 'order placed');
	   *
	   * @name isString
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isString = function (val, msg) {
	    new Assertion(val, msg).to.be.a('string');
	  };

	  /**
	   * ### .isNotString(value, [message])
	   *
	   * Asserts that `value` is _not_ a string.
	   *
	   *     var teaOrder = 4;
	   *     assert.isNotString(teaOrder, 'order placed');
	   *
	   * @name isNotString
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNotString = function (val, msg) {
	    new Assertion(val, msg).to.not.be.a('string');
	  };

	  /**
	   * ### .isNumber(value, [message])
	   *
	   * Asserts that `value` is a number.
	   *
	   *     var cups = 2;
	   *     assert.isNumber(cups, 'how many cups');
	   *
	   * @name isNumber
	   * @param {Number} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNumber = function (val, msg) {
	    new Assertion(val, msg).to.be.a('number');
	  };

	  /**
	   * ### .isNotNumber(value, [message])
	   *
	   * Asserts that `value` is _not_ a number.
	   *
	   *     var cups = '2 cups please';
	   *     assert.isNotNumber(cups, 'how many cups');
	   *
	   * @name isNotNumber
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNotNumber = function (val, msg) {
	    new Assertion(val, msg).to.not.be.a('number');
	  };

	  /**
	   * ### .isBoolean(value, [message])
	   *
	   * Asserts that `value` is a boolean.
	   *
	   *     var teaReady = true
	   *       , teaServed = false;
	   *
	   *     assert.isBoolean(teaReady, 'is the tea ready');
	   *     assert.isBoolean(teaServed, 'has tea been served');
	   *
	   * @name isBoolean
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isBoolean = function (val, msg) {
	    new Assertion(val, msg).to.be.a('boolean');
	  };

	  /**
	   * ### .isNotBoolean(value, [message])
	   *
	   * Asserts that `value` is _not_ a boolean.
	   *
	   *     var teaReady = 'yep'
	   *       , teaServed = 'nope';
	   *
	   *     assert.isNotBoolean(teaReady, 'is the tea ready');
	   *     assert.isNotBoolean(teaServed, 'has tea been served');
	   *
	   * @name isNotBoolean
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNotBoolean = function (val, msg) {
	    new Assertion(val, msg).to.not.be.a('boolean');
	  };

	  /**
	   * ### .typeOf(value, name, [message])
	   *
	   * Asserts that `value`'s type is `name`, as determined by
	   * `Object.prototype.toString`.
	   *
	   *     assert.typeOf({ tea: 'chai' }, 'object', 'we have an object');
	   *     assert.typeOf(['chai', 'jasmine'], 'array', 'we have an array');
	   *     assert.typeOf('tea', 'string', 'we have a string');
	   *     assert.typeOf(/tea/, 'regexp', 'we have a regular expression');
	   *     assert.typeOf(null, 'null', 'we have a null');
	   *     assert.typeOf(undefined, 'undefined', 'we have an undefined');
	   *
	   * @name typeOf
	   * @param {Mixed} value
	   * @param {String} name
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.typeOf = function (val, type, msg) {
	    new Assertion(val, msg).to.be.a(type);
	  };

	  /**
	   * ### .notTypeOf(value, name, [message])
	   *
	   * Asserts that `value`'s type is _not_ `name`, as determined by
	   * `Object.prototype.toString`.
	   *
	   *     assert.notTypeOf('tea', 'number', 'strings are not numbers');
	   *
	   * @name notTypeOf
	   * @param {Mixed} value
	   * @param {String} typeof name
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.notTypeOf = function (val, type, msg) {
	    new Assertion(val, msg).to.not.be.a(type);
	  };

	  /**
	   * ### .instanceOf(object, constructor, [message])
	   *
	   * Asserts that `value` is an instance of `constructor`.
	   *
	   *     var Tea = function (name) { this.name = name; }
	   *       , chai = new Tea('chai');
	   *
	   *     assert.instanceOf(chai, Tea, 'chai is an instance of tea');
	   *
	   * @name instanceOf
	   * @param {Object} object
	   * @param {Constructor} constructor
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.instanceOf = function (val, type, msg) {
	    new Assertion(val, msg).to.be.instanceOf(type);
	  };

	  /**
	   * ### .notInstanceOf(object, constructor, [message])
	   *
	   * Asserts `value` is not an instance of `constructor`.
	   *
	   *     var Tea = function (name) { this.name = name; }
	   *       , chai = new String('chai');
	   *
	   *     assert.notInstanceOf(chai, Tea, 'chai is not an instance of tea');
	   *
	   * @name notInstanceOf
	   * @param {Object} object
	   * @param {Constructor} constructor
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.notInstanceOf = function (val, type, msg) {
	    new Assertion(val, msg).to.not.be.instanceOf(type);
	  };

	  /**
	   * ### .include(haystack, needle, [message])
	   *
	   * Asserts that `haystack` includes `needle`. Works
	   * for strings and arrays.
	   *
	   *     assert.include('foobar', 'bar', 'foobar contains string "bar"');
	   *     assert.include([ 1, 2, 3 ], 3, 'array contains value');
	   *
	   * @name include
	   * @param {Array|String} haystack
	   * @param {Mixed} needle
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.include = function (exp, inc, msg) {
	    new Assertion(exp, msg, assert.include).include(inc);
	  };

	  /**
	   * ### .notInclude(haystack, needle, [message])
	   *
	   * Asserts that `haystack` does not include `needle`. Works
	   * for strings and arrays.
	   *
	   *     assert.notInclude('foobar', 'baz', 'string not include substring');
	   *     assert.notInclude([ 1, 2, 3 ], 4, 'array not include contain value');
	   *
	   * @name notInclude
	   * @param {Array|String} haystack
	   * @param {Mixed} needle
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.notInclude = function (exp, inc, msg) {
	    new Assertion(exp, msg, assert.notInclude).not.include(inc);
	  };

	  /**
	   * ### .match(value, regexp, [message])
	   *
	   * Asserts that `value` matches the regular expression `regexp`.
	   *
	   *     assert.match('foobar', /^foo/, 'regexp matches');
	   *
	   * @name match
	   * @param {Mixed} value
	   * @param {RegExp} regexp
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.match = function (exp, re, msg) {
	    new Assertion(exp, msg).to.match(re);
	  };

	  /**
	   * ### .notMatch(value, regexp, [message])
	   *
	   * Asserts that `value` does not match the regular expression `regexp`.
	   *
	   *     assert.notMatch('foobar', /^foo/, 'regexp does not match');
	   *
	   * @name notMatch
	   * @param {Mixed} value
	   * @param {RegExp} regexp
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.notMatch = function (exp, re, msg) {
	    new Assertion(exp, msg).to.not.match(re);
	  };

	  /**
	   * ### .property(object, property, [message])
	   *
	   * Asserts that `object` has a property named by `property`.
	   *
	   *     assert.property({ tea: { green: 'matcha' }}, 'tea');
	   *
	   * @name property
	   * @param {Object} object
	   * @param {String} property
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.property = function (obj, prop, msg) {
	    new Assertion(obj, msg).to.have.property(prop);
	  };

	  /**
	   * ### .notProperty(object, property, [message])
	   *
	   * Asserts that `object` does _not_ have a property named by `property`.
	   *
	   *     assert.notProperty({ tea: { green: 'matcha' }}, 'coffee');
	   *
	   * @name notProperty
	   * @param {Object} object
	   * @param {String} property
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.notProperty = function (obj, prop, msg) {
	    new Assertion(obj, msg).to.not.have.property(prop);
	  };

	  /**
	   * ### .deepProperty(object, property, [message])
	   *
	   * Asserts that `object` has a property named by `property`, which can be a
	   * string using dot- and bracket-notation for deep reference.
	   *
	   *     assert.deepProperty({ tea: { green: 'matcha' }}, 'tea.green');
	   *
	   * @name deepProperty
	   * @param {Object} object
	   * @param {String} property
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.deepProperty = function (obj, prop, msg) {
	    new Assertion(obj, msg).to.have.deep.property(prop);
	  };

	  /**
	   * ### .notDeepProperty(object, property, [message])
	   *
	   * Asserts that `object` does _not_ have a property named by `property`, which
	   * can be a string using dot- and bracket-notation for deep reference.
	   *
	   *     assert.notDeepProperty({ tea: { green: 'matcha' }}, 'tea.oolong');
	   *
	   * @name notDeepProperty
	   * @param {Object} object
	   * @param {String} property
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.notDeepProperty = function (obj, prop, msg) {
	    new Assertion(obj, msg).to.not.have.deep.property(prop);
	  };

	  /**
	   * ### .propertyVal(object, property, value, [message])
	   *
	   * Asserts that `object` has a property named by `property` with value given
	   * by `value`.
	   *
	   *     assert.propertyVal({ tea: 'is good' }, 'tea', 'is good');
	   *
	   * @name propertyVal
	   * @param {Object} object
	   * @param {String} property
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.propertyVal = function (obj, prop, val, msg) {
	    new Assertion(obj, msg).to.have.property(prop, val);
	  };

	  /**
	   * ### .propertyNotVal(object, property, value, [message])
	   *
	   * Asserts that `object` has a property named by `property`, but with a value
	   * different from that given by `value`.
	   *
	   *     assert.propertyNotVal({ tea: 'is good' }, 'tea', 'is bad');
	   *
	   * @name propertyNotVal
	   * @param {Object} object
	   * @param {String} property
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.propertyNotVal = function (obj, prop, val, msg) {
	    new Assertion(obj, msg).to.not.have.property(prop, val);
	  };

	  /**
	   * ### .deepPropertyVal(object, property, value, [message])
	   *
	   * Asserts that `object` has a property named by `property` with value given
	   * by `value`. `property` can use dot- and bracket-notation for deep
	   * reference.
	   *
	   *     assert.deepPropertyVal({ tea: { green: 'matcha' }}, 'tea.green', 'matcha');
	   *
	   * @name deepPropertyVal
	   * @param {Object} object
	   * @param {String} property
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.deepPropertyVal = function (obj, prop, val, msg) {
	    new Assertion(obj, msg).to.have.deep.property(prop, val);
	  };

	  /**
	   * ### .deepPropertyNotVal(object, property, value, [message])
	   *
	   * Asserts that `object` has a property named by `property`, but with a value
	   * different from that given by `value`. `property` can use dot- and
	   * bracket-notation for deep reference.
	   *
	   *     assert.deepPropertyNotVal({ tea: { green: 'matcha' }}, 'tea.green', 'konacha');
	   *
	   * @name deepPropertyNotVal
	   * @param {Object} object
	   * @param {String} property
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.deepPropertyNotVal = function (obj, prop, val, msg) {
	    new Assertion(obj, msg).to.not.have.deep.property(prop, val);
	  };

	  /**
	   * ### .lengthOf(object, length, [message])
	   *
	   * Asserts that `object` has a `length` property with the expected value.
	   *
	   *     assert.lengthOf([1,2,3], 3, 'array has length of 3');
	   *     assert.lengthOf('foobar', 6, 'string has length of 6');
	   *
	   * @name lengthOf
	   * @param {Mixed} object
	   * @param {Number} length
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.lengthOf = function (exp, len, msg) {
	    new Assertion(exp, msg).to.have.length(len);
	  };

	  /**
	   * ### .throws(function, [constructor/string/regexp], [string/regexp], [message])
	   *
	   * Asserts that `function` will throw an error that is an instance of
	   * `constructor`, or alternately that it will throw an error with message
	   * matching `regexp`.
	   *
	   *     assert.throws(fn, 'function throws a reference error');
	   *     assert.throws(fn, /function throws a reference error/);
	   *     assert.throws(fn, ReferenceError);
	   *     assert.throws(fn, ReferenceError, 'function throws a reference error');
	   *     assert.throws(fn, ReferenceError, /function throws a reference error/);
	   *
	   * @name throws
	   * @alias throw
	   * @alias Throw
	   * @param {Function} function
	   * @param {ErrorConstructor} constructor
	   * @param {RegExp} regexp
	   * @param {String} message
	   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
	   * @namespace Assert
	   * @api public
	   */

	  assert.throws = function (fn, errt, errs, msg) {
	    if ('string' === typeof errt || errt instanceof RegExp) {
	      errs = errt;
	      errt = null;
	    }

	    var assertErr = new Assertion(fn, msg).to.throw(errt, errs);
	    return flag(assertErr, 'object');
	  };

	  /**
	   * ### .doesNotThrow(function, [constructor/regexp], [message])
	   *
	   * Asserts that `function` will _not_ throw an error that is an instance of
	   * `constructor`, or alternately that it will not throw an error with message
	   * matching `regexp`.
	   *
	   *     assert.doesNotThrow(fn, Error, 'function does not throw');
	   *
	   * @name doesNotThrow
	   * @param {Function} function
	   * @param {ErrorConstructor} constructor
	   * @param {RegExp} regexp
	   * @param {String} message
	   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
	   * @namespace Assert
	   * @api public
	   */

	  assert.doesNotThrow = function (fn, type, msg) {
	    if ('string' === typeof type) {
	      msg = type;
	      type = null;
	    }

	    new Assertion(fn, msg).to.not.Throw(type);
	  };

	  /**
	   * ### .operator(val1, operator, val2, [message])
	   *
	   * Compares two values using `operator`.
	   *
	   *     assert.operator(1, '<', 2, 'everything is ok');
	   *     assert.operator(1, '>', 2, 'this will fail');
	   *
	   * @name operator
	   * @param {Mixed} val1
	   * @param {String} operator
	   * @param {Mixed} val2
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.operator = function (val, operator, val2, msg) {
	    var ok;
	    switch (operator) {
	      case '==':
	        ok = val == val2;
	        break;
	      case '===':
	        ok = val === val2;
	        break;
	      case '>':
	        ok = val > val2;
	        break;
	      case '>=':
	        ok = val >= val2;
	        break;
	      case '<':
	        ok = val < val2;
	        break;
	      case '<=':
	        ok = val <= val2;
	        break;
	      case '!=':
	        ok = val != val2;
	        break;
	      case '!==':
	        ok = val !== val2;
	        break;
	      default:
	        throw new Error('Invalid operator "' + operator + '"');
	    }
	    var test = new Assertion(ok, msg);
	    test.assert(true === flag(test, 'object'), 'expected ' + util.inspect(val) + ' to be ' + operator + ' ' + util.inspect(val2), 'expected ' + util.inspect(val) + ' to not be ' + operator + ' ' + util.inspect(val2));
	  };

	  /**
	   * ### .closeTo(actual, expected, delta, [message])
	   *
	   * Asserts that the target is equal `expected`, to within a +/- `delta` range.
	   *
	   *     assert.closeTo(1.5, 1, 0.5, 'numbers are close');
	   *
	   * @name closeTo
	   * @param {Number} actual
	   * @param {Number} expected
	   * @param {Number} delta
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.closeTo = function (act, exp, delta, msg) {
	    new Assertion(act, msg).to.be.closeTo(exp, delta);
	  };

	  /**
	   * ### .approximately(actual, expected, delta, [message])
	   *
	   * Asserts that the target is equal `expected`, to within a +/- `delta` range.
	   *
	   *     assert.approximately(1.5, 1, 0.5, 'numbers are close');
	   *
	   * @name approximately
	   * @param {Number} actual
	   * @param {Number} expected
	   * @param {Number} delta
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.approximately = function (act, exp, delta, msg) {
	    new Assertion(act, msg).to.be.approximately(exp, delta);
	  };

	  /**
	   * ### .sameMembers(set1, set2, [message])
	   *
	   * Asserts that `set1` and `set2` have the same members.
	   * Order is not taken into account.
	   *
	   *     assert.sameMembers([ 1, 2, 3 ], [ 2, 1, 3 ], 'same members');
	   *
	   * @name sameMembers
	   * @param {Array} set1
	   * @param {Array} set2
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.sameMembers = function (set1, set2, msg) {
	    new Assertion(set1, msg).to.have.same.members(set2);
	  };

	  /**
	   * ### .sameDeepMembers(set1, set2, [message])
	   *
	   * Asserts that `set1` and `set2` have the same members - using a deep equality checking.
	   * Order is not taken into account.
	   *
	   *     assert.sameDeepMembers([ {b: 3}, {a: 2}, {c: 5} ], [ {c: 5}, {b: 3}, {a: 2} ], 'same deep members');
	   *
	   * @name sameDeepMembers
	   * @param {Array} set1
	   * @param {Array} set2
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.sameDeepMembers = function (set1, set2, msg) {
	    new Assertion(set1, msg).to.have.same.deep.members(set2);
	  };

	  /**
	   * ### .includeMembers(superset, subset, [message])
	   *
	   * Asserts that `subset` is included in `superset`.
	   * Order is not taken into account.
	   *
	   *     assert.includeMembers([ 1, 2, 3 ], [ 2, 1 ], 'include members');
	   *
	   * @name includeMembers
	   * @param {Array} superset
	   * @param {Array} subset
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.includeMembers = function (superset, subset, msg) {
	    new Assertion(superset, msg).to.include.members(subset);
	  };

	  /**
	   * ### .includeDeepMembers(superset, subset, [message])
	   *
	   * Asserts that `subset` is included in `superset` - using deep equality checking.
	   * Order is not taken into account.
	   * Duplicates are ignored.
	   *
	   *     assert.includeDeepMembers([ {a: 1}, {b: 2}, {c: 3} ], [ {b: 2}, {a: 1}, {b: 2} ], 'include deep members');
	   *
	   * @name includeDeepMembers
	   * @param {Array} superset
	   * @param {Array} subset
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.includeDeepMembers = function (superset, subset, msg) {
	    new Assertion(superset, msg).to.include.deep.members(subset);
	  };

	  /**
	   * ### .oneOf(inList, list, [message])
	   *
	   * Asserts that non-object, non-array value `inList` appears in the flat array `list`.
	   *
	   *     assert.oneOf(1, [ 2, 1 ], 'Not found in list');
	   *
	   * @name oneOf
	   * @param {*} inList
	   * @param {Array<*>} list
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.oneOf = function (inList, list, msg) {
	    new Assertion(inList, msg).to.be.oneOf(list);
	  };

	  /**
	  * ### .changes(function, object, property)
	  *
	  * Asserts that a function changes the value of a property
	  *
	  *     var obj = { val: 10 };
	  *     var fn = function() { obj.val = 22 };
	  *     assert.changes(fn, obj, 'val');
	  *
	  * @name changes
	  * @param {Function} modifier function
	  * @param {Object} object
	  * @param {String} property name
	  * @param {String} message _optional_
	  * @namespace Assert
	  * @api public
	  */

	  assert.changes = function (fn, obj, prop) {
	    new Assertion(fn).to.change(obj, prop);
	  };

	  /**
	  * ### .doesNotChange(function, object, property)
	  *
	  * Asserts that a function does not changes the value of a property
	  *
	  *     var obj = { val: 10 };
	  *     var fn = function() { console.log('foo'); };
	  *     assert.doesNotChange(fn, obj, 'val');
	  *
	  * @name doesNotChange
	  * @param {Function} modifier function
	  * @param {Object} object
	  * @param {String} property name
	  * @param {String} message _optional_
	  * @namespace Assert
	  * @api public
	  */

	  assert.doesNotChange = function (fn, obj, prop) {
	    new Assertion(fn).to.not.change(obj, prop);
	  };

	  /**
	  * ### .increases(function, object, property)
	  *
	  * Asserts that a function increases an object property
	  *
	  *     var obj = { val: 10 };
	  *     var fn = function() { obj.val = 13 };
	  *     assert.increases(fn, obj, 'val');
	  *
	  * @name increases
	  * @param {Function} modifier function
	  * @param {Object} object
	  * @param {String} property name
	  * @param {String} message _optional_
	  * @namespace Assert
	  * @api public
	  */

	  assert.increases = function (fn, obj, prop) {
	    new Assertion(fn).to.increase(obj, prop);
	  };

	  /**
	  * ### .doesNotIncrease(function, object, property)
	  *
	  * Asserts that a function does not increase object property
	  *
	  *     var obj = { val: 10 };
	  *     var fn = function() { obj.val = 8 };
	  *     assert.doesNotIncrease(fn, obj, 'val');
	  *
	  * @name doesNotIncrease
	  * @param {Function} modifier function
	  * @param {Object} object
	  * @param {String} property name
	  * @param {String} message _optional_
	  * @namespace Assert
	  * @api public
	  */

	  assert.doesNotIncrease = function (fn, obj, prop) {
	    new Assertion(fn).to.not.increase(obj, prop);
	  };

	  /**
	  * ### .decreases(function, object, property)
	  *
	  * Asserts that a function decreases an object property
	  *
	  *     var obj = { val: 10 };
	  *     var fn = function() { obj.val = 5 };
	  *     assert.decreases(fn, obj, 'val');
	  *
	  * @name decreases
	  * @param {Function} modifier function
	  * @param {Object} object
	  * @param {String} property name
	  * @param {String} message _optional_
	  * @namespace Assert
	  * @api public
	  */

	  assert.decreases = function (fn, obj, prop) {
	    new Assertion(fn).to.decrease(obj, prop);
	  };

	  /**
	  * ### .doesNotDecrease(function, object, property)
	  *
	  * Asserts that a function does not decreases an object property
	  *
	  *     var obj = { val: 10 };
	  *     var fn = function() { obj.val = 15 };
	  *     assert.doesNotDecrease(fn, obj, 'val');
	  *
	  * @name doesNotDecrease
	  * @param {Function} modifier function
	  * @param {Object} object
	  * @param {String} property name
	  * @param {String} message _optional_
	  * @namespace Assert
	  * @api public
	  */

	  assert.doesNotDecrease = function (fn, obj, prop) {
	    new Assertion(fn).to.not.decrease(obj, prop);
	  };

	  /*!
	   * ### .ifError(object)
	   *
	   * Asserts if value is not a false value, and throws if it is a true value.
	   * This is added to allow for chai to be a drop-in replacement for Node's
	   * assert class.
	   *
	   *     var err = new Error('I am a custom error');
	   *     assert.ifError(err); // Rethrows err!
	   *
	   * @name ifError
	   * @param {Object} object
	   * @namespace Assert
	   * @api public
	   */

	  assert.ifError = function (val) {
	    if (val) {
	      throw val;
	    }
	  };

	  /**
	   * ### .isExtensible(object)
	   *
	   * Asserts that `object` is extensible (can have new properties added to it).
	   *
	   *     assert.isExtensible({});
	   *
	   * @name isExtensible
	   * @alias extensible
	   * @param {Object} object
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */

	  assert.isExtensible = function (obj, msg) {
	    new Assertion(obj, msg).to.be.extensible;
	  };

	  /**
	   * ### .isNotExtensible(object)
	   *
	   * Asserts that `object` is _not_ extensible.
	   *
	   *     var nonExtensibleObject = Object.preventExtensions({});
	   *     var sealedObject = Object.seal({});
	   *     var frozenObject = Object.freese({});
	   *
	   *     assert.isNotExtensible(nonExtensibleObject);
	   *     assert.isNotExtensible(sealedObject);
	   *     assert.isNotExtensible(frozenObject);
	   *
	   * @name isNotExtensible
	   * @alias notExtensible
	   * @param {Object} object
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNotExtensible = function (obj, msg) {
	    new Assertion(obj, msg).to.not.be.extensible;
	  };

	  /**
	   * ### .isSealed(object)
	   *
	   * Asserts that `object` is sealed (cannot have new properties added to it
	   * and its existing properties cannot be removed).
	   *
	   *     var sealedObject = Object.seal({});
	   *     var frozenObject = Object.seal({});
	   *
	   *     assert.isSealed(sealedObject);
	   *     assert.isSealed(frozenObject);
	   *
	   * @name isSealed
	   * @alias sealed
	   * @param {Object} object
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */

	  assert.isSealed = function (obj, msg) {
	    new Assertion(obj, msg).to.be.sealed;
	  };

	  /**
	   * ### .isNotSealed(object)
	   *
	   * Asserts that `object` is _not_ sealed.
	   *
	   *     assert.isNotSealed({});
	   *
	   * @name isNotSealed
	   * @alias notSealed
	   * @param {Object} object
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNotSealed = function (obj, msg) {
	    new Assertion(obj, msg).to.not.be.sealed;
	  };

	  /**
	   * ### .isFrozen(object)
	   *
	   * Asserts that `object` is frozen (cannot have new properties added to it
	   * and its existing properties cannot be modified).
	   *
	   *     var frozenObject = Object.freeze({});
	   *     assert.frozen(frozenObject);
	   *
	   * @name isFrozen
	   * @alias frozen
	   * @param {Object} object
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */

	  assert.isFrozen = function (obj, msg) {
	    new Assertion(obj, msg).to.be.frozen;
	  };

	  /**
	   * ### .isNotFrozen(object)
	   *
	   * Asserts that `object` is _not_ frozen.
	   *
	   *     assert.isNotFrozen({});
	   *
	   * @name isNotFrozen
	   * @alias notFrozen
	   * @param {Object} object
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNotFrozen = function (obj, msg) {
	    new Assertion(obj, msg).to.not.be.frozen;
	  };

	  /*!
	   * Aliases.
	   */

	  (function alias(name, as) {
	    assert[as] = assert[name];
	    return alias;
	  })('isOk', 'ok')('isNotOk', 'notOk')('throws', 'throw')('throws', 'Throw')('isExtensible', 'extensible')('isNotExtensible', 'notExtensible')('isSealed', 'sealed')('isNotSealed', 'notSealed')('isFrozen', 'frozen')('isNotFrozen', 'notFrozen');
	};

/***/ },

/***/ 381:
/*!**********************************!*\
  !*** ./lib/domassembler.spec.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _domassembler = __webpack_require__(/*! ./domassembler */ 3);

	var _chai = __webpack_require__(/*! chai */ 341);

	var _chai2 = _interopRequireDefault(_chai);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	const { assert } = _chai2.default;
	const {
	    document,
	    Text,
	    Comment,
	    Element,
	    HTMLHRElement
	} = window;

	const assembler = new _domassembler.DOMAssembler();

	describe('DOM assembler', function () {

	    describe('createElement', function () {

	        describe('general', function () {
	            const element = assembler.createElement('element');

	            it('Element created', () => {
	                assert.equal(element.constructor, Element);
	            });
	            it('proper tagName', () => {
	                assert.equal(element.tagName, 'element');
	            });
	            it('proper namespace URI', () => {
	                assert.equal(element.namespaceURI, _domassembler.XML_NS_URI);
	            });
	            it('has no attributes and no child nodes', () => {
	                assert(!element.hasAttributes());
	                assert(!element.hasChildNodes());
	            });
	        });

	        describe('build-in attributes', function () {

	            describe('id', function () {
	                const id = 'element_0';
	                const element = assembler.createElement('element', { id });

	                it('proper number of attributes', function () {
	                    assert(element.hasAttributes());
	                    assert.equal(element.attributes.length, 1);
	                });
	                it('proper `id` attribute', function () {
	                    assert.equal(element.id, id);
	                });
	                it('document finds it', function () {
	                    document.body.appendChild(element);
	                    assert.equal(document.getElementById(id), element);
	                    document.body.removeChild(element);
	                });
	            });

	            describe('className', function () {
	                const className = 'foo bar wiz';
	                const element = assembler.createElement('element', { className });
	                it('proper number of attributes', function () {
	                    assert(element.hasAttributes());
	                    assert.equal(element.attributes.length, 1);
	                });
	                it('proper `className` attribute', function () {
	                    assert.equal(element.className, className);
	                    assert.equal(element.getAttribute('class'), className);
	                });
	                it('classList interface works properly', function () {
	                    assert(element.classList.contains('foo'));
	                    assert(element.classList.contains('bar'));
	                    assert(element.classList.contains('wiz'));
	                });
	                it('document finds it', function () {
	                    document.body.appendChild(element);
	                    assert.equal(document.getElementsByClassName('foo')[0], element);
	                    assert.equal(document.getElementsByClassName('bar')[0], element);
	                    assert.equal(document.getElementsByClassName('wiz')[0], element);
	                    document.body.removeChild(element);
	                });
	            });

	            describe('textContent', function () {
	                const element = assembler.createElement('element', {
	                    textContent: 'element textContent'
	                });
	                it('proper number of child nodes', function () {
	                    assert(element.hasChildNodes());
	                    assert.equal(element.childNodes.length, 1);
	                });
	                it('proper children', function () {
	                    assert.equal(element.firstChild.constructor, Text);
	                    assert.equal(element.firstChild.textContent, 'element textContent');
	                    assert.equal(element.textContent, 'element textContent');
	                });
	            });
	        });

	        describe('adapted interface', function () {

	            describe('attrset', function () {
	                const element = assembler.createElement('element', {
	                    attrset: { attrname: 'attribute value' }
	                });
	                it('proper number of attributes', function () {
	                    assert(element.hasAttributes());
	                    assert.equal(element.attributes.length, 1);
	                });
	                it('proper attributes assigned', function () {
	                    assert.equal(element.getAttribute('attrname'), 'attribute value');
	                });
	            });

	            describe('children', function () {
	                const element = assembler.createElement('element', {
	                    children: [0, assembler.createElement('child'), '', 'text node as string', NaN, document.createTextNode('created text node'), null, document.createElement('hr'), false, document.createComment('Simple DOM Comment node'), undefined]
	                });
	                const childNodes = element.childNodes;
	                it('proper number of child nodes', function () {
	                    assert(element.hasChildNodes());
	                    assert.equal(childNodes.length, 5);
	                });
	                it('Proper child nodes', function () {
	                    assert.equal(childNodes[0].constructor, Element);
	                    assert.equal(childNodes[0].tagName, 'child');
	                    assert.equal(childNodes[1].constructor, Text);
	                    assert.equal(childNodes[1].textContent, 'text node as string');
	                    assert.equal(childNodes[2].constructor, Text);
	                    assert.equal(childNodes[2].nodeValue, 'created text node');
	                    assert.equal(childNodes[3].constructor, HTMLHRElement);
	                    assert.equal(childNodes[3].tagName, 'HR');
	                    assert.equal(childNodes[4].constructor, Comment);
	                    assert.equal(childNodes[4].textContent, 'Simple DOM Comment node');
	                });
	            });
	        });
	    });
	});

/***/ },

/***/ 382:
/*!***********************************!*\
  !*** ./lib/htmlassembler.spec.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _htmlassembler = __webpack_require__(/*! ./htmlassembler.js */ 4);

	var _chai = __webpack_require__(/*! chai */ 341);

	var _chai2 = _interopRequireDefault(_chai);

	var _util = __webpack_require__(/*! ../util/util.domequalmarkup */ 383);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	const { assert } = _chai2.default;

	// fixme

	const {
	    HTMLElement,
	    HTMLUnknownElement,
	    HTMLInputElement,
	    HTMLHtmlElement,
	    HTMLFormElement,
	    HTMLSelectElement,
	    HTMLAnchorElement,
	    HTMLBodyElement,
	    HTMLButtonElement,
	    HTMLDivElement,
	    HTMLSpanElement
	} = window;

	const assembler = new _htmlassembler.HTMLAssembler();

	describe('HTML assembler', function () {

	    describe('createElement', function () {

	        describe('built-in global attributes', function () {

	            describe('accessKey', function () {
	                const element = assembler.createElement('a', { accessKey: 'A' });

	                it('HTMLAnchorElement node created', function () {
	                    assert.equal(element.constructor, HTMLAnchorElement);
	                    assert.equal(element.tagName, 'A');
	                });
	                it('proper number of attributes', function () {
	                    assert(element.hasAttributes());
	                    assert.equal(element.attributes.length, 1);
	                });
	                it('proper `accessKey` attribute', function () {
	                    assert.equal(element.accessKey, 'A');
	                    assert.equal(element.getAttribute('accesskey'), 'A');
	                });
	                it('proper `outerHTML` property value', function () {
	                    assert.equal(element.outerHTML.toUpperCase(), '<A ACCESSKEY="A"></A>');
	                });
	                it('hdmldiff works properly', function () {
	                    assert.equal((0, _util.htmlequal)(element.outerHTML.toUpperCase(), '<a accesskey="A"></a>'), true);
	                });
	            });

	            describe('className', function () {
	                const className = 'foo bar wiz';
	                const element = assembler.createElement('div', { className });

	                it('HTMLDivElement node created', function () {
	                    assert.equal(element.constructor, HTMLDivElement);
	                    assert.equal(element.tagName, 'DIV');
	                });
	                it('proper number of attributes', function () {
	                    assert(element.hasAttributes());
	                    assert.equal(element.attributes.length, 1);
	                });
	                it('proper `className` attribute', function () {
	                    assert.equal(element.className, className);
	                    assert.equal(element.getAttribute('class'), className);
	                    assert(element.classList.contains('foo'));
	                    assert(element.classList.contains('bar'));
	                    assert(element.classList.contains('wiz'));
	                });
	                it('document finds it', function () {
	                    document.body.appendChild(element);
	                    assert.equal(document.getElementsByClassName('foo')[0], element);
	                    assert.equal(document.getElementsByClassName('bar')[0], element);
	                    assert.equal(document.getElementsByClassName('wiz')[0], element);
	                    document.body.removeChild(element);
	                });
	                it('proper outerHTML property value', () => {
	                    assert.equal(element.outerHTML, '<div class="foo bar wiz"></div>');
	                });
	            });

	            describe('contentEditable', function () {
	                const element = assembler.createElement('unknown', { contentEditable: 'true' });

	                it('HTMLUnknownElement node created', function () {
	                    assert.equal(element.constructor, HTMLUnknownElement);
	                    assert.equal(element.tagName, 'UNKNOWN');
	                });
	                it('proper number of attributes', function () {
	                    assert(element.hasAttributes());
	                    assert.equal(element.attributes.length, 1);
	                });
	                it('proper `contentEditable` attribute', function () {
	                    assert.equal(element.contentEditable, 'true');
	                    assert.equal(element.getAttribute('contenteditable'), 'true');
	                });
	                it('proper `outerHTML` property value', function () {
	                    assert.equal(element.outerHTML.toLowerCase(), '<unknown contenteditable="true"></unknown>');
	                });
	            });

	            describe('dir', function () {
	                const element = assembler.createElement('button', { dir: 'rtl' });

	                it('HTMLButtonElement node created', function () {
	                    assert.equal(element.constructor, HTMLButtonElement);
	                    assert.equal(element.tagName, 'BUTTON');
	                });
	                it('proper number of attributes', function () {
	                    assert(element.hasAttributes());
	                    assert.equal(element.attributes.length, 1);
	                });
	                it('proper `dir` attribute', function () {
	                    assert.equal(element.dir, 'rtl');
	                    assert.equal(element.getAttribute('dir'), 'rtl');
	                });
	                it('proper `outerHTML` property value', function () {
	                    assert.equal(element.outerHTML, '<button dir="rtl"></button>');
	                });
	            });

	            describe('draggable', function () {
	                const element = assembler.createElement('header', { draggable: true });

	                it.skip('HTMLElement node created', function () {
	                    assert.equal(element.constructor, HTMLElement);
	                    assert.equal(element.tagName, 'HEADER');
	                });
	                it.skip('proper number of attributes', function () {
	                    assert(element.hasAttributes());
	                    assert.equal(element.attributes.length, 1);
	                });
	                it.skip('proper `draggable` attribute', function () {
	                    assert.equal(element.draggable, true);
	                    assert.equal(element.getAttribute('draggable'), 'true');
	                });
	                it.skip('proper `outerHTML` property value', function () {
	                    assert.equal(element.outerHTML, '<header draggable="true"></header>');
	                });
	            });

	            describe('hidden', function () {
	                const element = assembler.createElement('input', { hidden: true });

	                it('HTMLInputElement node created', function () {
	                    assert.equal(element.constructor, HTMLInputElement);
	                    assert.equal(element.tagName, 'INPUT');
	                });
	                it('proper number of attributes', function () {
	                    assert(element.hasAttributes());
	                    assert.equal(element.attributes.length, 1);
	                });
	                it('proper `hidden` attribute', function () {
	                    assert.equal(element.hidden, true);
	                    assert.equal(element.getAttribute('hidden'), '');
	                });
	                it('proper `outerHTML` property value', function () {
	                    assert.equal(element.outerHTML, '<input hidden="">');
	                });
	            });

	            describe('id', function () {
	                const id = 'element_0';
	                const element = assembler.createElement('span', { id });

	                it('HTMLSpanElement node created', function () {
	                    assert.equal(element.constructor, HTMLSpanElement);
	                    assert.equal(element.tagName, 'SPAN');
	                });
	                it('proper number of attributes', function () {
	                    assert(element.hasAttributes());
	                    assert.equal(element.attributes.length, 1);
	                });
	                it('proper `id` attribute', function () {
	                    assert.equal(element.id, id);
	                });
	                it('document finds it', function () {
	                    document.body.appendChild(element);
	                    assert.equal(document.getElementById(id), element);
	                    document.body.removeChild(element);
	                });
	                it('proper outerHTML property value', () => {
	                    assert.equal(element.outerHTML, '<span id="element_0"></span>');
	                });
	            });

	            describe('innerHTML', function () {
	                const element = assembler.createElement('body', {
	                    innerHTML: '<span class="box"></span>'
	                });
	                it('HTMLBodyElement node created', function () {
	                    assert.equal(element.constructor, HTMLBodyElement);
	                    assert.equal(element.tagName, 'BODY');
	                });
	                it('proper number of child nodes', function () {
	                    assert(element.hasChildNodes());
	                    assert.equal(element.childNodes.length, 1);
	                });
	                it('proper child node', function () {
	                    const child = element.firstChild;
	                    assert.equal(child.constructor, HTMLSpanElement);
	                    assert.equal(child.outerHTML, '<span class="box"></span>');
	                });
	                it('proper `outerHTML` property value', function () {
	                    assert.equal(element.outerHTML, '<body><span class="box"></span></body>');
	                });
	            });

	            describe('lang', function () {
	                const element = assembler.createElement('html', { lang: 'ru' });

	                it('HTMLHtmlElement node created', function () {
	                    assert.equal(element.constructor, HTMLHtmlElement);
	                    assert.equal(element.tagName, 'HTML');
	                });
	                it('proper number of attributes and child nodes', function () {
	                    assert(element.hasAttributes());
	                    assert.equal(element.attributes.length, 1);
	                });
	                it('has proper lang attribute set', function () {
	                    assert.equal(element.lang, 'ru');
	                    assert.equal(element.getAttribute('lang'), 'ru');
	                });
	                it('proper outerHTML property value', function () {
	                    assert.equal(element.outerHTML, '<html lang="ru"></html>');
	                });
	            });

	            describe('tabIndex', function () {
	                const element = assembler.createElement('form', { tabIndex: 0 });

	                it('HTMLFormElement node created', function () {
	                    assert.equal(element.constructor, HTMLFormElement);
	                    assert.equal(element.tagName, 'FORM');
	                });
	                it('proper number of attributes', function () {
	                    assert(element.hasAttributes());
	                    assert.equal(element.attributes.length, 1);
	                });
	                it('proper `tabIndex` attribute', function () {
	                    assert.equal(element.tabIndex, 0);
	                    assert.equal(element.getAttribute('tabindex'), '0');
	                });
	                it('proper `outerHTML` property value', function () {
	                    assert.equal(element.outerHTML.toLowerCase(), '<form tabindex="0"></form>');
	                });
	            });

	            describe('title', function () {
	                const element = assembler.createElement('select', { title: 'Select without options' });

	                it('HTMLSelectElement node created', function () {
	                    assert.equal(element.constructor, HTMLSelectElement);
	                    assert.equal(element.tagName, 'SELECT');
	                });
	                it('proper number of attributes', function () {
	                    assert(element.hasAttributes());
	                    assert.equal(element.attributes.length, 1);
	                });
	                it('proper `title` attribute', function () {
	                    assert.equal(element.title, 'Select without options');
	                    assert.equal(element.getAttribute('title'), 'Select without options');
	                });
	                it('proper `outerHTML` property value', function () {
	                    assert.equal(element.outerHTML, '<select title="Select without options"></select>');
	                });
	            });
	        });

	        describe('built-in global event handlers', function () {
	            it('onclick', () => {
	                const onclick = sinon.spy();
	                const element = assembler.createElement('button', { onclick });
	                assert(onclick.notCalled);
	                element.click();
	                assert(onclick.calledOnce);
	                element.click();
	                assert(onclick.calledTwice);
	            });
	            it('click listener', () => {
	                const listener = sinon.spy();
	                const element = assembler.createElement('button');
	                element.addEventListener('click', listener);
	                document.body.appendChild(element);
	                assert(listener.notCalled);
	                element.click();
	                assert(listener.calledOnce);
	                element.click();
	                assert(listener.calledTwice);
	                document.body.removeChild(element);
	            });
	        });

	        describe('adapted interface', function () {

	            describe('dataset', function () {
	                const element = assembler.createElement('div', {
	                    dataset: { camelCased: 'custom attribute' }
	                });
	                it('HTMLDivElement node created', function () {
	                    assert.equal(element.constructor, HTMLDivElement);
	                    assert.equal(element.tagName, 'DIV');
	                });
	                it('proper number of attributes', function () {
	                    assert(element.hasAttributes());
	                    assert.equal(element.attributes.length, 1);
	                });
	                it('proper custom `data-` attribute', function () {
	                    assert.equal(element.dataset.camelCased, 'custom attribute');
	                    assert.equal(element.getAttribute('data-camel-cased'), 'custom attribute');
	                });
	                it('proper `outerHTML` property value', function () {
	                    assert.equal(element.outerHTML, '<div data-camel-cased="custom attribute"></div>');
	                });
	            });

	            describe('style', function () {
	                const element = assembler.createElement('span', {
	                    style: { backgroundColor: 'black' }
	                });
	                it('HTMLSpanElement node created', function () {
	                    assert.equal(element.constructor, HTMLSpanElement);
	                    assert.equal(element.tagName, 'SPAN');
	                });
	                it('proper number of attributes', function () {
	                    assert(element.hasAttributes());
	                    assert.equal(element.attributes.length, 1);
	                });
	                it('proper style declaration assigned', function () {
	                    assert.equal(element.style.backgroundColor, 'black');
	                    assert.equal(element.getAttribute('style'), 'background-color: black;');
	                });
	                it('proper `outerHTML` property value', function () {
	                    assert.equal(element.outerHTML, '<span style="background-color: black;"></span>');
	                });
	            });
	        });
	    });
	});

/***/ },

/***/ 383:
/*!*************************************!*\
  !*** ./util/util.domequalmarkup.js ***!
  \*************************************/
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	const htmlbowl = innerHTML => Object.assign(document.createElement('div'), { innerHTML });

	const htmlequal = exports.htmlequal = (html1, html2) => htmlbowl(html1).isEqualNode(htmlbowl(html2));

	const parser = new DOMParser();
	const xmldoc = xml => parser.parseFromString(xml, 'application/xml');

	const xmlequal = exports.xmlequal = (xml1, xml2) => xmldoc(xml1).isEqualNode(xmldoc(xml2));

	const domEqualMarkup = exports.domEqualMarkup = (dom, markup, mime = 'application/xml') => {
	    const parser = new DOMParser();
	    const node = parser.parseFromString(markup, mime);
	    return dom.isEqualNode(node);
	};

	const htmlEqualMarkup = exports.htmlEqualMarkup = (dom, markup) => domEqualMarkup(dom, markup, 'application/xhtml');

/***/ },

/***/ 384:
/*!****************************!*\
  !*** ./lib/xmldom.spec.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _index = __webpack_require__(/*! ./index */ 1);

	var _chai = __webpack_require__(/*! chai */ 341);

	var _chai2 = _interopRequireDefault(_chai);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// fixme import from './xmldom' and fix spec
	const { assert } = _chai2.default;
	const {
	    Node,
	    Element,
	    Text,
	    Comment,
	    HTMLSpanElement,
	    HTMLAnchorElement,
	    XMLSerializer
	} = window;
	const { ELEMENT_NODE, TEXT_NODE, COMMENT_NODE } = Node;

	const serializer = new XMLSerializer();

	describe('XMLDOM library', () => {
	    describe('dom', () => {
	        it('xmldom', () => {
	            const node = (0, _index.xmldom)('pipi7', {
	                attrset: { g: '+++', j: '---', w: '!!!' }
	            });
	            assert.equal(node.nodeType, ELEMENT_NODE);
	            assert.equal(node.tagName, 'pipi7');
	            assert.equal(node.constructor, Element);
	            assert.equal(node.getAttribute('g'), '+++');
	            assert.equal(node.getAttribute('j'), '---');
	            assert.equal(node.getAttribute('w'), '!!!');
	        });
	        it('element', () => {
	            const node = (0, _index.element)('bafi4');
	            assert.equal(node.nodeType, ELEMENT_NODE);
	            assert.equal(node.tagName, 'element');
	            assert.equal(node.constructor, Element);
	        });
	        it('text', () => {
	            const node = (0, _index.text)('cuce31');
	            assert.equal(node.nodeType, TEXT_NODE);
	            assert.equal(node.constructor, Text);
	            assert.equal(serializer.serializeToString(node), 'cuce31');
	        });
	        it('comment', () => {
	            const node = (0, _index.comment)('tuty5');
	            assert.equal(node.nodeType, COMMENT_NODE);
	            assert.equal(node.constructor, Comment);
	            assert.equal(serializer.serializeToString(node), '<!--tuty5-->');
	        });
	    });
	    describe('html', () => {
	        it('htmldom, span', () => {
	            const node1 = (0, _index.htmldom)('span', {
	                id: '00101',
	                className: 'fa fi fu',
	                tabIndex: 0,
	                children: ['a', (0, _index.comment)('a b'), 'b']
	            });
	            const node2 = (0, _index.span)({
	                id: '00101',
	                className: 'fa fi fu',
	                tabIndex: 0,
	                children: ['a', (0, _index.comment)('a b'), 'b']
	            });
	            [node1, node2].forEach(node => {
	                assert.equal(node.nodeType, ELEMENT_NODE);
	                assert.equal(node.tagName, 'SPAN');
	                assert.equal(node.constructor, HTMLSpanElement);
	                assert.equal(node.attributes.length, 3);
	                assert.equal(node.id, '00101');
	                assert.equal(node.className, 'fa fi fu');
	                assert.equal(node.tabIndex, 0);
	                assert.equal(node.children.length, 0);
	                assert.equal(node.childNodes.length, 3);
	                assert.equal(node.childNodes[0].nodeType, TEXT_NODE);
	                assert.equal(node.childNodes[1].constructor, Comment);
	                assert.equal(node.childNodes[2].textContent, 'b');
	            });
	            assert(node1.isEqualNode(node2), 'htmldom() and span() work differently');
	        });
	        it('a', () => {
	            const node = (0, _index.a)({
	                href: 'html://www.aria.dom/math.svg',
	                rel: 'next',
	                title: 'om dom dom dom d',
	                textContent: 'DOM module'
	            });
	            assert.equal(node.tagName, 'A');
	            assert.equal(node.constructor, HTMLAnchorElement);
	            assert.equal(node.href, 'html://www.aria.dom/math.svg');
	            assert.equal(node.rel, 'next');
	            assert.equal(node.title, 'om dom dom dom d');
	            assert.equal(node.textContent, 'DOM module');
	        });
	    });
	});

/***/ },

/***/ 385:
/*!*****************************!*\
  !*** ./lib/htmldom.spec.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _htmldom = __webpack_require__(/*! ./htmldom */ 6);

	var _chai = __webpack_require__(/*! chai */ 341);

	var _chai2 = _interopRequireDefault(_chai);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	const { assert } = _chai2.default;

	describe('HTMLDOM library', () => {
	    describe('Authorization fieldset', () => {
	        it('properly build form authorization fieldset', () => {
	            const element = (0, _htmldom.fieldset)([(0, _htmldom.legend)('Authorization'), (0, _htmldom.input)({ type: 'email' }), (0, _htmldom.input)({ type: 'password' })]);
	            assert.equal(element.outerHTML, '<fieldset>' + '<legend>Authorization</legend>' + '<input type="email">' + '<input type="password">' + '</fieldset>');
	        });
	    });
	    describe('Header with navigation', () => {
	        it('properly build header with navigational links inside', () => {
	            const element = (0, _htmldom.header)((0, _htmldom.nav)([(0, _htmldom.a)({ href: '/lib.html', textContent: 'Library' }), (0, _htmldom.a)({ href: '/spec.html', textContent: 'Specifications' }), (0, _htmldom.a)({ href: '/home.html', textContent: 'Go home' })]));
	            assert.equal(element.outerHTML, '<header><nav>' + '<a href="/lib.html">Library</a>' + '<a href="/spec.html">Specifications</a>' + '<a href="/home.html">Go home</a>' + '</nav></header>');
	        });
	    });
	    describe('Select box widget', () => {
	        let widget, selected;
	        const element = (0, _htmldom.label)(['Select technology ', widget = (0, _htmldom.select)([(0, _htmldom.option)('DOM'), (0, _htmldom.option)('XML'), selected = (0, _htmldom.option)({ selected: true, textContent: 'HTML' }), (0, _htmldom.option)('SVG'), (0, _htmldom.option)('MathML'), (0, _htmldom.option)('WAI-ARIA')])]);
	        it('properly build label with select box option list inside', () => {
	            assert.equal(element.outerHTML, '<label>' + 'Select technology ' + '<select>' + '<option>DOM</option>' + '<option>XML</option>' + '<option>HTML</option>' + '<option>SVG</option>' + '<option>MathML</option>' + '<option>WAI-ARIA</option>' + '</select>' + '</label>');
	        });
	        // victim of IE11 todo
	        it.skip('proper selected option reference', () => {
	            assert.equal(widget.selectedOptions.length, 1);
	            assert.equal(widget.selectedOptions[0], selected);
	        });
	    });
	    describe('Search form', () => {
	        it('properly build form with search input and submit button inside', () => {
	            const element = (0, _htmldom.form)({
	                attrset: { role: 'search' },
	                children: [(0, _htmldom.input)({ type: 'search' }), (0, _htmldom.button)('Search')]
	            });
	            assert.equal(element.outerHTML, '<form role="search">' + '<input type="search">' + '<button>Search</button>' + '</form>');
	        });
	    });
	    describe('Checkboxes', () => {
	        let simple, checked, indeterminate;
	        const element = (0, _htmldom.div)([simple = (0, _htmldom.input)({ type: 'checkbox' }), checked = (0, _htmldom.input)({ type: 'checkbox', checked: true }), indeterminate = (0, _htmldom.input)({ type: 'checkbox', indeterminate: true })]);
	        it('proper HTML rendered', () => {
	            assert.equal(element.outerHTML, '<div>' + '<input type="checkbox">' + '<input type="checkbox">' + '<input type="checkbox">' + '</div>');
	        });
	        it('check current state of widgets', () => {
	            assert(!simple.checked);
	            assert(checked.checked);
	            assert(indeterminate.indeterminate);
	        });
	        it('proper initial state assignment', () => {
	            const sample = (0, _htmldom.input)({ type: 'checkbox', attrset: { checked: '' } });
	            const container = (0, _htmldom.div)({ innerHTML: '<input type=checkbox checked>' });
	            assert(sample.isEqualNode(container.firstChild));
	        });
	    });
	    describe('Various list examples', () => {
	        it('properly build ul + li', () => {
	            assert.equal((0, _htmldom.ul)([(0, _htmldom.li)('Ampeg'), (0, _htmldom.li)('Fender'), (0, _htmldom.li)('Warwick')]).outerHTML, '<ul>' + '<li>Ampeg</li>' + '<li>Fender</li>' + '<li>Warwick</li>' + '</ul>');
	        });
	        it('properly build ol + li', () => {
	            assert.equal((0, _htmldom.ol)([(0, _htmldom.li)('Moscow'), (0, _htmldom.li)('Amsterdam'), (0, _htmldom.li)('New York')]).outerHTML, '<ol>' + '<li>Moscow</li>' + '<li>Amsterdam</li>' + '<li>New York</li>' + '</ol>');
	        });
	        it('properly build dl + dt + dd', () => {
	            assert.equal((0, _htmldom.dl)([(0, _htmldom.dt)('DOM'), (0, _htmldom.dd)('Document object model'), (0, _htmldom.dt)('XML'), (0, _htmldom.dd)('Extensible markup language'), (0, _htmldom.dt)('HTML'), (0, _htmldom.dd)('Hyper text markup language')]).outerHTML, '<dl>' + '<dt>DOM</dt>' + '<dd>Document object model</dd>' + '<dt>XML</dt>' + '<dd>Extensible markup language</dd>' + '<dt>HTML</dt>' + '<dd>Hyper text markup language</dd>' + '</dl>');
	        });
	    });
	    describe('Details with summary', () => {
	        it('properly build widget', () => {
	            const element = (0, _htmldom.details)([(0, _htmldom.summary)('Show details'), 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ', 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.']);
	            assert.equal(element.outerHTML, '<details>' + '<summary>Show details</summary>' + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' + 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' + '</details>');
	        });
	    });
	    describe('Other elements', () => {
	        it('property build DOM fragment', () => {
	            const element = (0, _htmldom.main)([(0, _htmldom.section)((0, _htmldom.dfn)('Instance.js — simple and powerfull DOM Element interface')), (0, _htmldom.section)((0, _htmldom.p)([(0, _htmldom.variable)('var'), ' — is reserved JavaScript keyword, ', 'so we use `variable` function name instead.'])), (0, _htmldom.section)([(0, _htmldom.sup)('supertext'), (0, _htmldom.sub)('subtext'), (0, _htmldom.i)('alternative voice'), (0, _htmldom.strong)('important!')])]);
	            assert.equal(element.outerHTML, '<main>' + '<section><dfn>' + 'Instance.js — simple and powerfull DOM Element interface' + '</dfn></section>' + '<section><p>' + '<var>var</var>' + ' — is reserved JavaScript keyword, ' + 'so we use `variable` function name instead.' + '</p></section>' + '<section>' + '<sup>supertext</sup>' + '<sub>subtext</sub>' + '<i>alternative voice</i>' + '<strong>important!</strong>' + '</section>' + '</main>');
	        });
	    });
	});

/***/ }

/******/ });