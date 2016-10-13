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
/*!************************!*\
  !*** multi htmlmodule ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./lib */1);


/***/ },
/* 1 */
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
	    get: function get() {
	      return _nodeinit[key];
	    }
	  });
	});

	var _domassembler = __webpack_require__(/*! ./domassembler */ 3);

	Object.keys(_domassembler).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _domassembler[key];
	    }
	  });
	});

	var _htmlassembler = __webpack_require__(/*! ./htmlassembler */ 4);

	Object.keys(_htmlassembler).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _htmlassembler[key];
	    }
	  });
	});

	var _xmldom = __webpack_require__(/*! ./xmldom */ 5);

	Object.keys(_xmldom).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _xmldom[key];
	    }
	  });
	});

	var _htmldom = __webpack_require__(/*! ./htmldom */ 6);

	Object.keys(_htmldom).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _htmldom[key];
	    }
	  });
	});

/***/ },
/* 2 */
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

/***/ },
/* 3 */
/*!*****************************!*\
  !*** ./lib/domassembler.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DOMAssembler = exports.XML_NS_URI = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _nodeinit = __webpack_require__(/*! ./nodeinit */ 2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var isArray = Array.isArray;
	var _window = window;
	var document = _window.document;
	var Element = _window.Element;

	/**
	 * - XML namespace
	 * - provides `Element` DOM interface
	 * - https://www.w3.org/1999/xml
	 */

	var XML_NS_URI = exports.XML_NS_URI = 'https://www.w3.org/1999/xml';

	/**
	 * - Assembler for DOM `Element`
	 * - `Document.createElementNS` functionality wrapper
	 * - Provides built-in and adapted interfaces for `Element` initialization
	 */

	var DOMAssembler = exports.DOMAssembler = function () {
	    function DOMAssembler() {
	        _classCallCheck(this, DOMAssembler);
	    }

	    _createClass(DOMAssembler, [{
	        key: 'createElement',


	        /**
	         * Create the specified element and initialize it by given property set
	         * @param {String} tagName
	         * @param {{}} [init]
	         * @returns {Element} created and initialized DOM `Element`
	         */
	        value: function createElement(tagName, init) {
	            var namespaceURI = this.constructor.namespaceURI;

	            this.element = document.createElementNS(namespaceURI, tagName);
	            if (init) this.init = (0, _nodeinit.NodeInit)(init);
	            return this.element;
	        }

	        /**
	         * @returns {String} create elements in XML namespace
	         */

	    }, {
	        key: 'element',

	        /**
	         * Assign given element to assembler instance
	         * @param {Element} element node to assign
	         */
	        set: function set(element) {
	            if (element instanceof Element) {
	                this.node = element;
	            } else throw Error('This is not Element');
	        }

	        /**
	         * Get the assigned element
	         * @returns {Element} assigned node
	         */
	        ,
	        get: function get() {
	            if (this.node) return this.node;else throw Error('No element assigned');
	        }

	        /**
	         * Initialize the element with defined properties
	         * @param {{}} init initializing dictionary object
	         */

	    }, {
	        key: 'init',
	        set: function set(init) {
	            var element = this.element;
	            for (var prop in init) {
	                var value = init[prop];
	                if (value !== undefined) {
	                    if (prop in this) this[prop] = value;else if (prop in element) element[prop] = value;
	                }
	            }
	        }

	        /**
	         * Set attributes on the element
	         * @param {{}} attrset dictionary object
	         */

	    }, {
	        key: 'attrset',
	        set: function set(attrset) {
	            var element = this.element;
	            for (var name in attrset) {
	                var value = attrset[name];
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

	    }, {
	        key: 'children',
	        set: function set(children) {
	            var _this = this;

	            if (isArray(children)) {
	                children.forEach(function (child) {
	                    return _this.children = child;
	                });
	            } else if (children) {
	                var child = typeof children === 'string' ? document.createTextNode(children) : children;
	                this.element.appendChild(child);
	            }
	        }
	    }], [{
	        key: 'namespaceURI',
	        get: function get() {
	            return XML_NS_URI;
	        }
	    }]);

	    return DOMAssembler;
	}();

	Object.defineProperty(DOMAssembler.prototype, 'node', {
	    enumerable: true,
	    writable: true,
	    value: null
	});

/***/ },
/* 4 */
/*!******************************!*\
  !*** ./lib/htmlassembler.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HTMLAssembler = exports.XHTML_NS_URI = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _domassembler = __webpack_require__(/*! ./domassembler */ 3);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var assign = Object.assign;

	/**
	 * - XHTML namespace
	 * - provides all inherited from `HTMLElement` DOM interfaces
	 * - https://www.w3.org/1999/xhtml
	 */

	var XHTML_NS_URI = exports.XHTML_NS_URI = 'http://www.w3.org/1999/xhtml';

	/**
	 * - Assembler for DOM `HTMLElement`
	 * - `Document.createElement` functionality wrapper
	 * - Provides built-in and adapted interfaces for `HTMLElement` initialization
	 */

	var HTMLAssembler = exports.HTMLAssembler = function (_DOMAssembler) {
	  _inherits(HTMLAssembler, _DOMAssembler);

	  function HTMLAssembler() {
	    _classCallCheck(this, HTMLAssembler);

	    return _possibleConstructorReturn(this, (HTMLAssembler.__proto__ || Object.getPrototypeOf(HTMLAssembler)).apply(this, arguments));
	  }

	  _createClass(HTMLAssembler, [{
	    key: 'dataset',

	    /**
	     * Assign custom `data-` attributes to the element
	     * @param {{}} dataset declaration dictionary object
	     */
	    set: function set(dataset) {
	      assign(this.element.dataset, dataset);
	    }

	    /**
	     * Assign CSS style declaration to the element
	     * @param {CSSStyleDeclaration} style declaration dictionary object
	     */

	  }, {
	    key: 'style',
	    set: function set(style) {
	      assign(this.element.style, style);
	    }

	    /**
	     * @returns {String} create elements in XHTML namespace
	     */

	  }], [{
	    key: 'namespaceURI',
	    get: function get() {
	      return XHTML_NS_URI;
	    }
	  }]);

	  return HTMLAssembler;
	}(_domassembler.DOMAssembler);

/***/ },
/* 5 */
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

	var _window = window;
	var document = _window.document;


	var assembler = new _domassembler.DOMAssembler();

	var xmldom = exports.xmldom = function xmldom(tagName, init) {
	  return assembler.createElement(tagName, init);
	};

	var element = exports.element = function element(init) {
	  return xmldom('element', init);
	};

	var text = exports.text = function text(_text) {
	  return document.createTextNode(_text);
	};

	var comment = exports.comment = function comment(_comment) {
	  return document.createComment(_comment);
	};

/***/ },
/* 6 */
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

	var assembler = new _htmlassembler.HTMLAssembler();

	/**
	 * Creates and initializes the specified element
	 *
	 * @param {String} tagName element tag name
	 * @param init.global{} — global `HTMLElement` attributes
	 * @param {*} init object
	 */
	var htmldom = exports.htmldom = function htmldom(tagName, init) {
	  return assembler.createElement(tagName, init);
	};

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
	var a = exports.a = function a(init) {
	  return htmldom('a', init);
	};

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
	var abbr = exports.abbr = function abbr(init) {
	  return htmldom('abbr', init);
	};

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
	var address = exports.address = function address(init) {
	  return htmldom('address', init);
	};

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
	var area = exports.area = function area(init) {
	  return htmldom('area', init);
	};

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
	var article = exports.article = function article(init) {
	  return htmldom('article', init);
	};

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
	var aside = exports.aside = function aside(init) {
	  return htmldom('aside', init);
	};

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
	var audio = exports.audio = function audio(init) {
	  return htmldom('audio', init);
	};

	var b = exports.b = function b(init) {
	  return htmldom('b', init);
	};

	var base = exports.base = function base(init) {
	  return htmldom('base', init);
	};

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
	var bdi = exports.bdi = function bdi(init) {
	  return htmldom('bdi', init);
	};

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
	var bdo = exports.bdo = function bdo(init) {
	  return htmldom('bdo', init);
	};

	var blockquote = exports.blockquote = function blockquote(init) {
	  return htmldom('blockquote', init);
	};

	var body = exports.body = function body(init) {
	  return htmldom('body', init);
	};

	var br = exports.br = function br(init) {
	  return htmldom('br', init);
	};

	var button = exports.button = function button(init) {
	  return htmldom('button', init);
	};

	var canvas = exports.canvas = function canvas(init) {
	  return htmldom('canvas', init);
	};

	var caption = exports.caption = function caption(init) {
	  return htmldom('caption', init);
	};

	var cite = exports.cite = function cite(init) {
	  return htmldom('cite', init);
	};

	var code = exports.code = function code(init) {
	  return htmldom('code', init);
	};

	var col = exports.col = function col(init) {
	  return htmldom('col', init);
	};

	var colgroup = exports.colgroup = function colgroup(init) {
	  return htmldom('colgroup', init);
	};

	var data = exports.data = function data(init) {
	  return htmldom('data', init);
	};

	var datalist = exports.datalist = function datalist(init) {
	  return htmldom('datalist', init);
	};

	var dd = exports.dd = function dd(init) {
	  return htmldom('dd', init);
	};

	var del = exports.del = function del(init) {
	  return htmldom('del', init);
	};

	var details = exports.details = function details(init) {
	  return htmldom('details', init);
	};

	var dfn = exports.dfn = function dfn(init) {
	  return htmldom('dfn', init);
	};

	var dialog = exports.dialog = function dialog(init) {
	  return htmldom('dialog', init);
	};

	var div = exports.div = function div(init) {
	  return htmldom('div', init);
	};

	var dl = exports.dl = function dl(init) {
	  return htmldom('dl', init);
	};

	var dt = exports.dt = function dt(init) {
	  return htmldom('dt', init);
	};

	var em = exports.em = function em(init) {
	  return htmldom('em', init);
	};

	var embed = exports.embed = function embed(init) {
	  return htmldom('embed', init);
	};

	var fieldset = exports.fieldset = function fieldset(init) {
	  return htmldom('fieldset', init);
	};

	var figcaption = exports.figcaption = function figcaption(init) {
	  return htmldom('figcaption', init);
	};

	var figure = exports.figure = function figure(init) {
	  return htmldom('figure', init);
	};

	var footer = exports.footer = function footer(init) {
	  return htmldom('footer', init);
	};

	var form = exports.form = function form(init) {
	  return htmldom('form', init);
	};

	var h1 = exports.h1 = function h1(init) {
	  return htmldom('h1', init);
	};

	var h2 = exports.h2 = function h2(init) {
	  return htmldom('h2', init);
	};

	var h3 = exports.h3 = function h3(init) {
	  return htmldom('h3', init);
	};

	var h4 = exports.h4 = function h4(init) {
	  return htmldom('h4', init);
	};

	var h5 = exports.h5 = function h5(init) {
	  return htmldom('h5', init);
	};

	var h6 = exports.h6 = function h6(init) {
	  return htmldom('h6', init);
	};

	var head = exports.head = function head(init) {
	  return htmldom('head', init);
	};

	var header = exports.header = function header(init) {
	  return htmldom('header', init);
	};

	var hgroup = exports.hgroup = function hgroup(init) {
	  return htmldom('hgroup', init);
	};

	var hr = exports.hr = function hr(init) {
	  return htmldom('hr', init);
	};

	var html = exports.html = function html(init) {
	  return htmldom('html', init);
	};

	var i = exports.i = function i(init) {
	  return htmldom('i', init);
	};

	var iframe = exports.iframe = function iframe(init) {
	  return htmldom('iframe', init);
	};

	var img = exports.img = function img(init) {
	  return htmldom('img', init);
	};

	var input = exports.input = function input(init) {
	  return htmldom('input', init);
	};

	var ins = exports.ins = function ins(init) {
	  return htmldom('ins', init);
	};

	var kbd = exports.kbd = function kbd(init) {
	  return htmldom('kbd', init);
	};

	var keygen = exports.keygen = function keygen(init) {
	  return htmldom('keygen', init);
	};

	var label = exports.label = function label(init) {
	  return htmldom('label', init);
	};

	var legend = exports.legend = function legend(init) {
	  return htmldom('legend', init);
	};

	var li = exports.li = function li(init) {
	  return htmldom('li', init);
	};

	var link = exports.link = function link(init) {
	  return htmldom('link', init);
	};

	var main = exports.main = function main(init) {
	  return htmldom('main', init);
	};

	var map = exports.map = function map(init) {
	  return htmldom('map', init);
	};

	var mark = exports.mark = function mark(init) {
	  return htmldom('mark', init);
	};

	// todo mathdom
	// export const math = init => mathdom('math', init);

	var menu = exports.menu = function menu(init) {
	  return htmldom('menu', init);
	};

	var menuitem = exports.menuitem = function menuitem(init) {
	  return htmldom('menuitem', init);
	};

	var meta = exports.meta = function meta(init) {
	  return htmldom('meta', init);
	};

	var meter = exports.meter = function meter(init) {
	  return htmldom('meter', init);
	};

	var nav = exports.nav = function nav(init) {
	  return htmldom('nav', init);
	};

	var noscript = exports.noscript = function noscript(init) {
	  return htmldom('noscript', init);
	};

	var object = exports.object = function object(init) {
	  return htmldom('object', init);
	};

	var ol = exports.ol = function ol(init) {
	  return htmldom('ol', init);
	};

	var optgroup = exports.optgroup = function optgroup(init) {
	  return htmldom('optgroup', init);
	};

	var option = exports.option = function option(init) {
	  return htmldom('option', init);
	};

	var output = exports.output = function output(init) {
	  return htmldom('output', init);
	};

	var p = exports.p = function p(init) {
	  return htmldom('p', init);
	};

	var param = exports.param = function param(init) {
	  return htmldom('param', init);
	};

	var picture = exports.picture = function picture(init) {
	  return htmldom('picture', init);
	};

	var pre = exports.pre = function pre(init) {
	  return htmldom('pre', init);
	};

	var progress = exports.progress = function progress(init) {
	  return htmldom('progress', init);
	};

	var q = exports.q = function q(init) {
	  return htmldom('q', init);
	};

	var rp = exports.rp = function rp(init) {
	  return htmldom('rp', init);
	};

	var rt = exports.rt = function rt(init) {
	  return htmldom('rt', init);
	};

	var ruby = exports.ruby = function ruby(init) {
	  return htmldom('ruby', init);
	};

	var s = exports.s = function s(init) {
	  return htmldom('s', init);
	};

	var samp = exports.samp = function samp(init) {
	  return htmldom('samp', init);
	};

	var script = exports.script = function script(init) {
	  return htmldom('script', init);
	};

	var section = exports.section = function section(init) {
	  return htmldom('section', init);
	};

	var select = exports.select = function select(init) {
	  return htmldom('select', init);
	};

	var slot = exports.slot = function slot(init) {
	  return htmldom('slot', init);
	};

	var small = exports.small = function small(init) {
	  return htmldom('small', init);
	};

	var source = exports.source = function source(init) {
	  return htmldom('source', init);
	};

	var span = exports.span = function span(init) {
	  return htmldom('span', init);
	};

	var strong = exports.strong = function strong(init) {
	  return htmldom('strong', init);
	};

	var style = exports.style = function style(init) {
	  return htmldom('style', init);
	};

	var sub = exports.sub = function sub(init) {
	  return htmldom('sub', init);
	};

	var summary = exports.summary = function summary(init) {
	  return htmldom('summary', init);
	};

	var sup = exports.sup = function sup(init) {
	  return htmldom('sup', init);
	};

	// todo svgdom
	// export const svg = init => svgdom('svg', init);

	var table = exports.table = function table(init) {
	  return htmldom('table', init);
	};

	var tbody = exports.tbody = function tbody(init) {
	  return htmldom('tbody', init);
	};

	var td = exports.td = function td(init) {
	  return htmldom('td', init);
	};

	var template = exports.template = function template(init) {
	  return htmldom('template', init);
	};

	var textarea = exports.textarea = function textarea(init) {
	  return htmldom('textarea', init);
	};

	var tfoot = exports.tfoot = function tfoot(init) {
	  return htmldom('tfoot', init);
	};

	var th = exports.th = function th(init) {
	  return htmldom('th', init);
	};

	var thead = exports.thead = function thead(init) {
	  return htmldom('thead', init);
	};

	var time = exports.time = function time(init) {
	  return htmldom('time', init);
	};

	var title = exports.title = function title(init) {
	  return htmldom('title', init);
	};

	var tr = exports.tr = function tr(init) {
	  return htmldom('tr', init);
	};

	var track = exports.track = function track(init) {
	  return htmldom('track', init);
	};

	var u = exports.u = function u(init) {
	  return htmldom('u', init);
	};

	var ul = exports.ul = function ul(init) {
	  return htmldom('ul', init);
	};

	/**
	 * [the `var<ins>iable</ins>` element](https://html.spec.whatwg.org/#the-var-element)
	 * represents a variable.
	 * This could be an actual variable in a mathematical expression or programming context,
	 * an identifier representing a constant, a symbol identifying a physical quantity,
	 * a function parameter, or just be a term used as a placeholder in prose.
	 *
	 * `var` is reserved JS keyword
	 * htmlmodule provides `variable` instead
	 *
	 * Uses HTMLElement interface
	 * @function variable
	 * @param init.global{} — global `HTMLElement` attributes
	 * @param {*} init object
	 */
	var variable = exports.variable = function variable(init) {
	  return htmldom('var', init);
	};

	var video = exports.video = function video(init) {
	  return htmldom('video', init);
	};

	var wbr = exports.wbr = function wbr(init) {
	  return htmldom('wbr', init);
	};

/***/ }
/******/ ]);