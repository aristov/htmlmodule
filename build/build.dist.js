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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dom = __webpack_require__(2);

	Object.keys(_dom).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function () {
	      return _dom[key];
	    }
	  });
	});

	var _html = __webpack_require__(3);

	Object.keys(_html).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function () {
	      return _html[key];
	    }
	  });
	});

	var _xmldom = __webpack_require__(4);

	Object.keys(_xmldom).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function () {
	      return _xmldom[key];
	    }
	  });
	});

	var _htmldom = __webpack_require__(5);

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
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NodeInit = NodeInit;
	const { isArray } = Array;
	const { document, Element } = window;

	/**
	 * Converts any non-dictionary object argument
	 * to `NodeInit` dictionary object with `children` property assigned
	 * @param {Object|String|Array} init
	 * @returns {{}} NodeInit dictionary object
	 * @interface
	 */
	function NodeInit(init) {
	    if (init && init.constructor !== Object) {
	        return { children: init };
	    }
	    return init;
	}

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
	        for (const prop in init) {
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
	        for (const name in attrset) {
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
	        } else {
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
	        if (init) this.init = NodeInit(init);
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
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HTMLAssembler = exports.XHTML_NS_URI = undefined;

	var _dom = __webpack_require__(2);

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
	class HTMLAssembler extends _dom.DOMAssembler {
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.comment = exports.text = exports.element = exports.xmldom = undefined;

	var _dom = __webpack_require__(2);

	const { document } = window;

	const assembler = new _dom.DOMAssembler();

	const xmldom = exports.xmldom = (tagName, init) => assembler.createElement(tagName, init);

	const element = exports.element = init => xmldom('element', init);

	const text = exports.text = text => document.createTextNode(text);

	const comment = exports.comment = comment => document.createComment(comment);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.wbr = exports.video = exports.variable = exports.ul = exports.u = exports.track = exports.tr = exports.title = exports.time = exports.thead = exports.th = exports.tfoot = exports.textarea = exports.template = exports.td = exports.tbody = exports.table = exports.sup = exports.summary = exports.sub = exports.style = exports.strong = exports.span = exports.source = exports.small = exports.slot = exports.select = exports.section = exports.script = exports.samp = exports.s = exports.ruby = exports.rt = exports.rp = exports.q = exports.progress = exports.pre = exports.picture = exports.param = exports.p = exports.output = exports.option = exports.optgroup = exports.ol = exports.object = exports.noscript = exports.nav = exports.meter = exports.meta = exports.menuitem = exports.menu = exports.mark = exports.map = exports.main = exports.link = exports.li = exports.legend = exports.label = exports.keygen = exports.kbd = exports.ins = exports.input = exports.img = exports.iframe = exports.i = exports.html = exports.hr = exports.hgroup = exports.header = exports.head = exports.h6 = exports.h5 = exports.h4 = exports.h3 = exports.h2 = exports.h1 = exports.form = exports.footer = exports.figure = exports.figcaption = exports.fieldset = exports.embed = exports.em = exports.dt = exports.dl = exports.div = exports.dialog = exports.dfn = exports.details = exports.del = exports.dd = exports.datalist = exports.data = exports.colgroup = exports.col = exports.code = exports.cite = exports.caption = exports.canvas = exports.button = exports.br = exports.body = exports.blockquote = exports.bdo = exports.bdi = exports.base = exports.b = exports.audio = exports.aside = exports.article = exports.area = exports.address = exports.abbr = exports.a = exports.htmldom = undefined;

	var _html = __webpack_require__(3);

	const assembler = new _html.HTMLAssembler();

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

	// `var` is JS-keyword
	const variable = exports.variable = init => htmldom('var', init);

	const video = exports.video = init => htmldom('video', init);

	const wbr = exports.wbr = init => htmldom('wbr', init);

/***/ }
/******/ ]);