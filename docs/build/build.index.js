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
/*!*******************!*\
  !*** multi index ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./docs/lib/index */7);


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
	 * Converts any non-dictionary object argument
	 * to `NodeInit` dictionary object with `children` property assigned to passed object
	 * @function NodeInit
	 * @param {Object|String|Array} init
	 * @returns {{}} NodeInit dictionary object
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
	 * - XML namespace
	 * - provides `Element` DOM interface
	 * - https://www.w3.org/1999/xml
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
	            this.node = element;
	        } else throw Error('This is not Element');
	    }

	    /**
	     * Get the assigned element
	     * @returns {Element} assigned node
	     */
	    get element() {
	        if (this.node) return this.node;else throw Error('No element assigned');
	    }

	    /**
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
	     * @param {Node|String|Array} children child node or string or array of listed
	     */
	    set children(children) {
	        if (isArray(children)) {
	            children.forEach(child => this.children = child);
	        } else if (children) {
	            const child = typeof children === 'string' ? document.createTextNode(children) : children;
	            this.element.appendChild(child);
	        }
	    }

	    /**
	     * Create the specified element and initialize it by given property set
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
	     * @returns {String} create elements in XML namespace
	     */
	    static get namespaceURI() {
	        return XML_NS_URI;
	    }
	}

	exports.DOMAssembler = DOMAssembler;
	Object.defineProperty(DOMAssembler.prototype, 'node', {
	    enumerable: true,
	    writable: true,
	    value: null
	});

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
	 * - XHTML namespace
	 * - provides all inherited from `HTMLElement` DOM interfaces
	 * - https://www.w3.org/1999/xhtml
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
	   * @returns {String} create elements in XHTML namespace
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
	exports.comment = exports.text = exports.element = exports.xmldom = undefined;

	var _domassembler = __webpack_require__(/*! ./domassembler */ 3);

	const { document } = window;

	const assembler = new _domassembler.DOMAssembler();

	const xmldom = exports.xmldom = (tagName, init) => assembler.createElement(tagName, init);

	const element = exports.element = init => xmldom('element', init);

	const text = exports.text = text => document.createTextNode(text);

	const comment = exports.comment = comment => document.createComment(comment);

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
	exports.wbr = exports.video = exports.variable = exports.ul = exports.u = exports.track = exports.tr = exports.title = exports.time = exports.thead = exports.th = exports.tfoot = exports.textarea = exports.template = exports.td = exports.tbody = exports.table = exports.sup = exports.summary = exports.sub = exports.style = exports.strong = exports.span = exports.source = exports.small = exports.slot = exports.select = exports.section = exports.script = exports.samp = exports.s = exports.ruby = exports.rt = exports.rp = exports.q = exports.progress = exports.pre = exports.picture = exports.param = exports.p = exports.output = exports.option = exports.optgroup = exports.ol = exports.object = exports.noscript = exports.nav = exports.meter = exports.meta = exports.menuitem = exports.menu = exports.mark = exports.map = exports.main = exports.link = exports.li = exports.legend = exports.label = exports.keygen = exports.kbd = exports.ins = exports.input = exports.img = exports.iframe = exports.i = exports.html = exports.hr = exports.hgroup = exports.header = exports.head = exports.h6 = exports.h5 = exports.h4 = exports.h3 = exports.h2 = exports.h1 = exports.form = exports.footer = exports.figure = exports.figcaption = exports.fieldset = exports.embed = exports.em = exports.dt = exports.dl = exports.div = exports.dialog = exports.dfn = exports.details = exports.del = exports.dd = exports.datalist = exports.data = exports.colgroup = exports.col = exports.code = exports.cite = exports.caption = exports.canvas = exports.button = exports.br = exports.body = exports.blockquote = exports.bdo = exports.bdi = exports.base = exports.b = exports.audio = exports.aside = exports.article = exports.area = exports.address = exports.abbr = exports.a = exports.htmldom = undefined;

	var _htmlassembler = __webpack_require__(/*! ./htmlassembler */ 4);

	const assembler = new _htmlassembler.HTMLAssembler();

	/**
	 * Creates and initializes the specified element
	 *
	 * @param {String} tagName element tag name
	 * @param init.global{} — global `HTMLElement` attributes
	 * @param {*} init object
	 */
	const htmldom = exports.htmldom = (tagName, init) => assembler.createElement(tagName, init);

	/**
	 * [The `a` element](https://html.spec.whatwg.org/#the-a-element)
	 *  - If the `a` element has an `href` attribute, then it represents a hyperlink (a hypertext anchor) labeled by its contents.
	 *  - If the `a` element has no `href` attribute, then the element represents a placeholder for where a link might otherwise have been placed, if it had been relevant, consisting of just the element's contents.
	 *
	 * Implements `HTMLAnchorElement` interface
	 * @function a
	 * @param {String} init.href — Address of the hyperlink
	 * @param {String} init.target — Browsing context for hyperlink navigation
	 * @param {String} init.download — Whether to download the resource instead of navigating to it, and its file name if so
	 * @param {String} init.ping — URLs to ping
	 * @param {String} init.rel — Relationship between the location in the document containing the hyperlink and the destination resource
	 * @param {String} init.hreflang — Language of the linked resource
	 * @param {String} init.type — Hint for the type of the referenced resource
	 * @param {String} init.referrerpolicy — Determines the referrer policy for fetches initiated by the element
	 * @param init.global{} — global `HTMLElement` attributes
	 * @param {*} init object
	 */
	const a = exports.a = init => htmldom('a', init);

	/**
	 * [The `abbr` element](https://html.spec.whatwg.org/#the-abbr-element)
	 * represents an abbreviation or acronym, optionally with its expansion.
	 * The `title` attribute may be used to provide an expansion of the abbreviation.
	 * The attribute, if specified, must contain an expansion of the abbreviation, and nothing else.
	 *
	 * Uses `HTMLElement` interface
	 * @function abbr
	 * @param {String} init.title — special semantics: full term or expansion of abbreviation
	 * @param init.global{} — global `HTMLElement` attributes
	 * @param {*} init object
	 */
	const abbr = exports.abbr = init => htmldom('abbr', init);

	/**
	 * [The `address` element](https://html.spec.whatwg.org/#the-address-element)
	 * represents the contact information for its nearest `article` or `body` element ancestor.
	 * If that is the `body` element, then the contact information applies to the document as a whole.
	 *
	 * Uses `HTMLElement` interface
	 * @function address
	 * @param init.global{} — global `HTMLElement` attributes
	 * @param {*} init object
	 */
	const address = exports.address = init => htmldom('address', init);

	/**
	 * [The `area` element](https://html.spec.whatwg.org/#the-area-element)
	 * represents either a hyperlink with some text and a corresponding area on an image map,
	 * or a dead area on an image map.
	 *
	 * Implements `HTMLAreaElement` interface
	 * @function area
	 * @param {String} init.alt — Replacement text for use when images are not available
	 * @param {String} init.coords — Coordinates for the shape to be created in an image map
	 * @param {String} init.shape — The kind of shape to be created in an image map
	 * @param {String} init.href — Address of the hyperlink
	 * @param {String} init.target — Browsing context for hyperlink navigation
	 * @param {String} init.download — Whether to download the resource instead of navigating to it, and its file name if so
	 * @param {String} init.ping — URLs to ping
	 * @param {String} init.rel — Relationship between the location in the document containing the hyperlink and the destination resource
	 * @param init.global{} — global `HTMLElement` attributes
	 * @param {*} init object
	 */
	const area = exports.area = init => htmldom('area', init);

	/**
	 * [The `article` element](https://html.spec.whatwg.org/#the-article-element)
	 * represents a complete, or self-contained, composition in a document, page, application,
	 * or site and that is, in principle, independently distributable or reusable, e.g. in syndication.
	 * This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment,
	 * an interactive widget or gadget, or any other independent item of content.
	 *
	 * Uses `HTMLElement` interface
	 * @function article
	 * @param init.global{} — global `HTMLElement` attributes
	 * @param {*} init object
	 */
	const article = exports.article = init => htmldom('article', init);

	/**
	 * [The `aside` element](https://html.spec.whatwg.org/#the-aside-element)
	 * represents a section of a page that consists of content that is tangentially related to the content around the aside element,
	 * and which could be considered separate from that content.
	 * Such sections are often represented as sidebars in printed typography.
	 *
	 * Uses HTMLElement interface
	 * @function aside
	 * @param init.global{} — global `HTMLElement` attributes
	 * @param {*} init object
	 */
	const aside = exports.aside = init => htmldom('aside', init);

	/**
	 * [The `audio` element](https://html.spec.whatwg.org/#the-audio-element)
	 * represents a sound or audio stream.
	 * Content may be provided inside the `audio` element.
	 * User agents should not show this content to the user;
	 * it is intended for older Web browsers which do not support audio, so that legacy audio plugins can be tried,
	 * or to show text to the users of these older browsers informing them of how to access the audio contents.
	 *
	 * Uses HTMLAudioElement interface
	 * @function audio
	 * @param {String} init.src — Address of the resource
	 * @param {String} init.crossorigin — How the element handles crossorigin requests
	 * @param {String} init.preload — Hints how much buffering the media resource will likely need
	 * @param {Boolean} init.autoplay — Hint that the media resource can be started automatically when the page is loaded
	 * @param {Boolean} init.loop — Whether to loop the media resource
	 * @param {Boolean} init.muted — Whether to mute the media resource by default
	 * @param {Boolean} init.controls — Show user agent controls
	 * @param init.global{} — global `HTMLElement` attributes
	 * @param {*} init object
	 */
	const audio = exports.audio = init => htmldom('audio', init);

	const b = exports.b = init => htmldom('b', init);

	const base = exports.base = init => htmldom('base', init);

	/**
	 * [The `bdi` element](https://html.spec.whatwg.org/#the-bdi-element)
	 * represents a span of text that is to be isolated from its surroundings for the purposes of bidirectional text formatting.
	 *
	 * Uses HTMLElement interface
	 * @function bdi
	 * @param {String} init.dir — special semantics
	 * @param init.global{} — global `HTMLElement` attributes
	 * @param {*} init object
	 */
	const bdi = exports.bdi = init => htmldom('bdi', init);

	/**
	 * [The `bdo` element](https://html.spec.whatwg.org/#the-bdo-element)
	 * represents explicit text directionality formatting control for its children.
	 * It allows authors to override the Unicode bidirectional algorithm by explicitly specifying a direction override.
	 *
	 * Uses HTMLElement interface
	 * @function bdo
	 * @param {String} init.dir — special semantics: `rtl` or `ltr` values allowed only
	 * @param init.global{} — global `HTMLElement` attributes
	 * @param {*} init object
	 */
	const bdo = exports.bdo = init => htmldom('bdo', init);

	const blockquote = exports.blockquote = init => htmldom('blockquote', init);

	const body = exports.body = init => htmldom('body', init);

	const br = exports.br = init => htmldom('br', init);

	const button = exports.button = init => htmldom('button', init);

	const canvas = exports.canvas = init => htmldom('canvas', init);

	const caption = exports.caption = init => htmldom('caption', init);

	const cite = exports.cite = init => htmldom('cite', init);

	const code = exports.code = init => htmldom('code', init);

	const col = exports.col = init => htmldom('col', init);

	const colgroup = exports.colgroup = init => htmldom('colgroup', init);

	const data = exports.data = init => htmldom('data', init);

	const datalist = exports.datalist = init => htmldom('datalist', init);

	const dd = exports.dd = init => htmldom('dd', init);

	const del = exports.del = init => htmldom('del', init);

	const details = exports.details = init => htmldom('details', init);

	const dfn = exports.dfn = init => htmldom('dfn', init);

	const dialog = exports.dialog = init => htmldom('dialog', init);

	const div = exports.div = init => htmldom('div', init);

	const dl = exports.dl = init => htmldom('dl', init);

	const dt = exports.dt = init => htmldom('dt', init);

	const em = exports.em = init => htmldom('em', init);

	const embed = exports.embed = init => htmldom('embed', init);

	const fieldset = exports.fieldset = init => htmldom('fieldset', init);

	const figcaption = exports.figcaption = init => htmldom('figcaption', init);

	const figure = exports.figure = init => htmldom('figure', init);

	const footer = exports.footer = init => htmldom('footer', init);

	const form = exports.form = init => htmldom('form', init);

	const h1 = exports.h1 = init => htmldom('h1', init);

	const h2 = exports.h2 = init => htmldom('h2', init);

	const h3 = exports.h3 = init => htmldom('h3', init);

	const h4 = exports.h4 = init => htmldom('h4', init);

	const h5 = exports.h5 = init => htmldom('h5', init);

	const h6 = exports.h6 = init => htmldom('h6', init);

	const head = exports.head = init => htmldom('head', init);

	const header = exports.header = init => htmldom('header', init);

	const hgroup = exports.hgroup = init => htmldom('hgroup', init);

	const hr = exports.hr = init => htmldom('hr', init);

	const html = exports.html = init => htmldom('html', init);

	const i = exports.i = init => htmldom('i', init);

	const iframe = exports.iframe = init => htmldom('iframe', init);

	const img = exports.img = init => htmldom('img', init);

	const input = exports.input = init => htmldom('input', init);

	const ins = exports.ins = init => htmldom('ins', init);

	const kbd = exports.kbd = init => htmldom('kbd', init);

	const keygen = exports.keygen = init => htmldom('keygen', init);

	const label = exports.label = init => htmldom('label', init);

	const legend = exports.legend = init => htmldom('legend', init);

	const li = exports.li = init => htmldom('li', init);

	const link = exports.link = init => htmldom('link', init);

	const main = exports.main = init => htmldom('main', init);

	const map = exports.map = init => htmldom('map', init);

	const mark = exports.mark = init => htmldom('mark', init);

	// todo mathdom
	// export const math = init => mathdom('math', init);

	const menu = exports.menu = init => htmldom('menu', init);

	const menuitem = exports.menuitem = init => htmldom('menuitem', init);

	const meta = exports.meta = init => htmldom('meta', init);

	const meter = exports.meter = init => htmldom('meter', init);

	const nav = exports.nav = init => htmldom('nav', init);

	const noscript = exports.noscript = init => htmldom('noscript', init);

	const object = exports.object = init => htmldom('object', init);

	const ol = exports.ol = init => htmldom('ol', init);

	const optgroup = exports.optgroup = init => htmldom('optgroup', init);

	const option = exports.option = init => htmldom('option', init);

	const output = exports.output = init => htmldom('output', init);

	const p = exports.p = init => htmldom('p', init);

	const param = exports.param = init => htmldom('param', init);

	const picture = exports.picture = init => htmldom('picture', init);

	const pre = exports.pre = init => htmldom('pre', init);

	const progress = exports.progress = init => htmldom('progress', init);

	const q = exports.q = init => htmldom('q', init);

	const rp = exports.rp = init => htmldom('rp', init);

	const rt = exports.rt = init => htmldom('rt', init);

	const ruby = exports.ruby = init => htmldom('ruby', init);

	const s = exports.s = init => htmldom('s', init);

	const samp = exports.samp = init => htmldom('samp', init);

	const script = exports.script = init => htmldom('script', init);

	const section = exports.section = init => htmldom('section', init);

	const select = exports.select = init => htmldom('select', init);

	const slot = exports.slot = init => htmldom('slot', init);

	const small = exports.small = init => htmldom('small', init);

	const source = exports.source = init => htmldom('source', init);

	const span = exports.span = init => htmldom('span', init);

	const strong = exports.strong = init => htmldom('strong', init);

	const style = exports.style = init => htmldom('style', init);

	const sub = exports.sub = init => htmldom('sub', init);

	const summary = exports.summary = init => htmldom('summary', init);

	const sup = exports.sup = init => htmldom('sup', init);

	// todo svgdom
	// export const svg = init => svgdom('svg', init);

	const table = exports.table = init => htmldom('table', init);

	const tbody = exports.tbody = init => htmldom('tbody', init);

	const td = exports.td = init => htmldom('td', init);

	const template = exports.template = init => htmldom('template', init);

	const textarea = exports.textarea = init => htmldom('textarea', init);

	const tfoot = exports.tfoot = init => htmldom('tfoot', init);

	const th = exports.th = init => htmldom('th', init);

	const thead = exports.thead = init => htmldom('thead', init);

	const time = exports.time = init => htmldom('time', init);

	const title = exports.title = init => htmldom('title', init);

	const tr = exports.tr = init => htmldom('tr', init);

	const track = exports.track = init => htmldom('track', init);

	const u = exports.u = init => htmldom('u', init);

	const ul = exports.ul = init => htmldom('ul', init);

	/**
	 * [the `var` element](https://html.spec.whatwg.org/#the-var-element)
	 * represents a variable.
	 * This could be an actual variable in a mathematical expression or programming context,
	 * an identifier representing a constant, a symbol identifying a physical quantity,
	 * a function parameter, or just be a term used as a placeholder in prose.
	 *
	 * **`var` is reserved JS keyword — so use `variable` instead**
	 *
	 * Uses HTMLElement interface
	 * @function variable
	 * @param init.global{} — global `HTMLElement` attributes
	 * @param {*} init object
	 */
	const variable = exports.variable = init => htmldom('var', init);

	const video = exports.video = init => htmldom('video', init);

	const wbr = exports.wbr = init => htmldom('wbr', init);

/***/ },

/***/ 7:
/*!***************************!*\
  !*** ./docs/lib/index.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _siteheading = __webpack_require__(/*! ./siteheading */ 8);

	var _sitenav = __webpack_require__(/*! ./sitenav */ 9);

	const { ul, li, main, code, a } = htmlmodule;
	const listnode = main([(0, _siteheading.siteheading)(), ul({
	    style: {
	        columnCount: 7,
	        listStyle: 'none'
	    },
	    children: Object.keys(htmlmodule).map(key => li(a({
	        href: './api#' + key.toLowerCase(),
	        target: 'blank',
	        children: code(key)
	    })))
	})]);

	document.body.append(listnode, (0, _sitenav.sitenav)());

/***/ },

/***/ 8:
/*!*********************************!*\
  !*** ./docs/lib/siteheading.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.siteheading = undefined;

	var _lib = __webpack_require__(/*! ../../lib */ 1);

	__webpack_require__(/*! ./siteheading.css */ 563);

	const MODULE_NAME = 'htmlmodule';

	const siteheading = exports.siteheading = children => {
	    const isIndex = !/\.html$/.test(location.pathname);
	    return (0, _lib.h1)({
	        id: 'siteheading',
	        children: [(0, _lib.a)({
	            href: isIndex ? undefined : './',
	            children: MODULE_NAME
	        }), ' ', children]
	    });
	};

/***/ },

/***/ 9:
/*!*****************************!*\
  !*** ./docs/lib/sitenav.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.sitenav = undefined;

	var _lib = __webpack_require__(/*! ../../lib */ 1);

	__webpack_require__(/*! ./sitenav.css */ 10);

	const pathname = location.pathname;

	const children = [(0, _lib.a)({
	    href: './repl.html',
	    children: 'repl machine'
	}), (0, _lib.a)({
	    href: './test.html',
	    children: 'test case'
	}), (0, _lib.a)({
	    href: './spec.html',
	    children: 'spec suite'
	}),
	/*a({
	    href : '//github.com/aristov/htmlmodule/blob/master/readme.md',
	    target : '_blank',
	    children : 'read me'
	}),*/
	(0, _lib.a)({
	    href: './api/',
	    target: '_blank',
	    children: 'api doc'
	}), (0, _lib.a)({
	    href: '//github.com/aristov/htmlmodule',
	    target: '_blank',
	    children: 'git repo'
	})];

	children.forEach(link => {
	    if (link.pathname === pathname) link.removeAttribute('href');
	});

	const sitenavNode = document.getElementById('sitenav');
	if (sitenavNode) sitenavNode.append(...children);

	const sitenav = exports.sitenav = init => (0, _lib.footer)({ id: 'sitenav', children });

/***/ },

/***/ 10:
/*!******************************!*\
  !*** ./docs/lib/sitenav.css ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/postcss-loader!./sitenav.css */ 11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./sitenav.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./sitenav.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 11:
/*!****************************************************************!*\
  !*** ./~/css-loader!./~/postcss-loader!./docs/lib/sitenav.css ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 12)();
	// imports


	// module
	exports.push([module.id, "#sitenav\n{\n    font: bold 15px monospace;\n    width: 750px;\n    margin: 25px auto 30px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n}\n", ""]);

	// exports


/***/ },

/***/ 12:
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },

/***/ 13:
/*!*************************************!*\
  !*** ./~/style-loader/addStyles.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },

/***/ 563:
/*!**********************************!*\
  !*** ./docs/lib/siteheading.css ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/postcss-loader!./siteheading.css */ 564);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./siteheading.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./siteheading.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 564:
/*!********************************************************************!*\
  !*** ./~/css-loader!./~/postcss-loader!./docs/lib/siteheading.css ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 12)();
	// imports


	// module
	exports.push([module.id, "#siteheading\n{\n    font-family: monospace;\n}\n\n#siteheading > a:not(:hover):not(:focus):not(:active)\n{\n    color: inherit;\n}", ""]);

	// exports


/***/ }

/******/ });