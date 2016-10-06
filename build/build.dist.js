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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dom = __webpack_require__(1);

	Object.keys(_dom).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _dom[key];
	    }
	  });
	});

	var _html = __webpack_require__(2);

	Object.keys(_html).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _html[key];
	    }
	  });
	});

	var _htmldom = __webpack_require__(351);

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

/***/ 1:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.NodeInit = NodeInit;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var isArray = Array.isArray;
	var _window = window;
	var document = _window.document;
	var Element = _window.Element;

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
	            if (init) this.init = NodeInit(init);
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
	            } else {
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

/***/ 2:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HTMLAssembler = exports.XHTML_NS_URI = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dom = __webpack_require__(1);

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
	}(_dom.DOMAssembler);

/***/ },

/***/ 351:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.wbr = exports.video = exports.variable = exports.ul = exports.u = exports.track = exports.tr = exports.title = exports.time = exports.thead = exports.th = exports.tfoot = exports.textarea = exports.template = exports.td = exports.tbody = exports.table = exports.sup = exports.summary = exports.sub = exports.style = exports.strong = exports.span = exports.source = exports.small = exports.slot = exports.select = exports.section = exports.script = exports.samp = exports.s = exports.ruby = exports.rt = exports.rp = exports.q = exports.progress = exports.pre = exports.picture = exports.param = exports.p = exports.output = exports.option = exports.optgroup = exports.ol = exports.object = exports.noscript = exports.nav = exports.meter = exports.meta = exports.menuitem = exports.menu = exports.mark = exports.map = exports.main = exports.link = exports.li = exports.legend = exports.label = exports.keygen = exports.kbd = exports.ins = exports.input = exports.img = exports.iframe = exports.i = exports.html = exports.hr = exports.hgroup = exports.header = exports.head = exports.h6 = exports.h5 = exports.h4 = exports.h3 = exports.h2 = exports.h1 = exports.form = exports.footer = exports.figure = exports.figcaption = exports.fieldset = exports.embed = exports.em = exports.dt = exports.dl = exports.div = exports.dialog = exports.dfn = exports.details = exports.del = exports.dd = exports.datalist = exports.data = exports.colgroup = exports.col = exports.code = exports.cite = exports.caption = exports.canvas = exports.button = exports.br = exports.body = exports.blockquote = exports.bdo = exports.bdi = exports.base = exports.b = exports.audio = exports.aside = exports.article = exports.area = exports.address = exports.abbr = exports.a = undefined;

	var _html = __webpack_require__(2);

	var assembler = new _html.HTMLAssembler();

	/**
	 * [The `a` element](https://html.spec.whatwg.org/#the-a-element)
	 *  - If the a element has an href attribute, then it represents a hyperlink (a hypertext anchor) labeled by its contents.
	 *  - If the a element has no href attribute, then the element represents a placeholder for where a link might otherwise have been placed, if it had been relevant, consisting of just the element's contents.
	 *
	 * @param {String} init.href — Address of the hyperlink
	 * @param {String} init.target — Browsing context for hyperlink navigation
	 * @param {String} init.download — Whether to download the resource instead of navigating to it, and its file name if so
	 * @param {String} init.ping — URLs to ping
	 * @param {String} init.rel — Relationship between the location in the document containing the hyperlink and the destination resource
	 * @param {String} init.hreflang — Language of the linked resource
	 * @param {String} init.type — Hint for the type of the referenced resource
	 * @param {String} init.referrerpolicy — Determines the referrer policy for fetches initiated by the element
	 * @param init.global{} — global `NodeInit` attributes
	 * @param {NodeInit} init `NodeInit` dictionary object
	 * @interface HTMLAnchorElement
	 */
	var a = exports.a = function a(init) {
	  return assembler.createElement('a', init);
	};

	/**
	 * [The `abbr` element](https://html.spec.whatwg.org/#the-abbr-element)
	 * The abbr element represents an abbreviation or acronym, optionally with its expansion.
	 * The title attribute may be used to provide an expansion of the abbreviation.
	 * The attribute, if specified, must contain an expansion of the abbreviation, and nothing else.
	 * @param init.title — special semantics: full term or expansion of abbreviation
	 * @param init.global{} — global `NodeInit` attributes
	 * @param {NodeInit} init `NodeInit` dictionary object
	 * @interface HTMLElement abbr
	 */
	var abbr = exports.abbr = function abbr(init) {
	  return assembler.createElement('abbr', init);
	};

	var address = exports.address = function address(init) {
	  return assembler.createElement('address', init);
	};

	var area = exports.area = function area(init) {
	  return assembler.createElement('area', init);
	};

	var article = exports.article = function article(init) {
	  return assembler.createElement('article', init);
	};

	var aside = exports.aside = function aside(init) {
	  return assembler.createElement('aside', init);
	};

	var audio = exports.audio = function audio(init) {
	  return assembler.createElement('audio', init);
	};

	var b = exports.b = function b(init) {
	  return assembler.createElement('b', init);
	};

	var base = exports.base = function base(init) {
	  return assembler.createElement('base', init);
	};

	var bdi = exports.bdi = function bdi(init) {
	  return assembler.createElement('bdi', init);
	};

	var bdo = exports.bdo = function bdo(init) {
	  return assembler.createElement('bdo', init);
	};

	var blockquote = exports.blockquote = function blockquote(init) {
	  return assembler.createElement('blockquote', init);
	};

	var body = exports.body = function body(init) {
	  return assembler.createElement('body', init);
	};

	var br = exports.br = function br(init) {
	  return assembler.createElement('br', init);
	};

	var button = exports.button = function button(init) {
	  return assembler.createElement('button', init);
	};

	var canvas = exports.canvas = function canvas(init) {
	  return assembler.createElement('canvas', init);
	};

	var caption = exports.caption = function caption(init) {
	  return assembler.createElement('caption', init);
	};

	var cite = exports.cite = function cite(init) {
	  return assembler.createElement('cite', init);
	};

	var code = exports.code = function code(init) {
	  return assembler.createElement('code', init);
	};

	var col = exports.col = function col(init) {
	  return assembler.createElement('col', init);
	};

	var colgroup = exports.colgroup = function colgroup(init) {
	  return assembler.createElement('colgroup', init);
	};

	var data = exports.data = function data(init) {
	  return assembler.createElement('data', init);
	};

	var datalist = exports.datalist = function datalist(init) {
	  return assembler.createElement('datalist', init);
	};

	var dd = exports.dd = function dd(init) {
	  return assembler.createElement('dd', init);
	};

	var del = exports.del = function del(init) {
	  return assembler.createElement('del', init);
	};

	var details = exports.details = function details(init) {
	  return assembler.createElement('details', init);
	};

	var dfn = exports.dfn = function dfn(init) {
	  return assembler.createElement('dfn', init);
	};

	var dialog = exports.dialog = function dialog(init) {
	  return assembler.createElement('dialog', init);
	};

	var div = exports.div = function div(init) {
	  return assembler.createElement('div', init);
	};

	var dl = exports.dl = function dl(init) {
	  return assembler.createElement('dl', init);
	};

	var dt = exports.dt = function dt(init) {
	  return assembler.createElement('dt', init);
	};

	var em = exports.em = function em(init) {
	  return assembler.createElement('em', init);
	};

	var embed = exports.embed = function embed(init) {
	  return assembler.createElement('embed', init);
	};

	var fieldset = exports.fieldset = function fieldset(init) {
	  return assembler.createElement('fieldset', init);
	};

	var figcaption = exports.figcaption = function figcaption(init) {
	  return assembler.createElement('figcaption', init);
	};

	var figure = exports.figure = function figure(init) {
	  return assembler.createElement('figure', init);
	};

	var footer = exports.footer = function footer(init) {
	  return assembler.createElement('footer', init);
	};

	var form = exports.form = function form(init) {
	  return assembler.createElement('form', init);
	};

	var h1 = exports.h1 = function h1(init) {
	  return assembler.createElement('h1', init);
	};

	var h2 = exports.h2 = function h2(init) {
	  return assembler.createElement('h2', init);
	};

	var h3 = exports.h3 = function h3(init) {
	  return assembler.createElement('h3', init);
	};

	var h4 = exports.h4 = function h4(init) {
	  return assembler.createElement('h4', init);
	};

	var h5 = exports.h5 = function h5(init) {
	  return assembler.createElement('h5', init);
	};

	var h6 = exports.h6 = function h6(init) {
	  return assembler.createElement('h6', init);
	};

	var head = exports.head = function head(init) {
	  return assembler.createElement('head', init);
	};

	var header = exports.header = function header(init) {
	  return assembler.createElement('header', init);
	};

	var hgroup = exports.hgroup = function hgroup(init) {
	  return assembler.createElement('hgroup', init);
	};

	var hr = exports.hr = function hr(init) {
	  return assembler.createElement('hr', init);
	};

	var html = exports.html = function html(init) {
	  return assembler.createElement('html', init);
	};

	var i = exports.i = function i(init) {
	  return assembler.createElement('i', init);
	};

	var iframe = exports.iframe = function iframe(init) {
	  return assembler.createElement('iframe', init);
	};

	var img = exports.img = function img(init) {
	  return assembler.createElement('img', init);
	};

	var input = exports.input = function input(init) {
	  return assembler.createElement('input', init);
	};

	var ins = exports.ins = function ins(init) {
	  return assembler.createElement('ins', init);
	};

	var kbd = exports.kbd = function kbd(init) {
	  return assembler.createElement('kbd', init);
	};

	var keygen = exports.keygen = function keygen(init) {
	  return assembler.createElement('keygen', init);
	};

	var label = exports.label = function label(init) {
	  return assembler.createElement('label', init);
	};

	var legend = exports.legend = function legend(init) {
	  return assembler.createElement('legend', init);
	};

	var li = exports.li = function li(init) {
	  return assembler.createElement('li', init);
	};

	var link = exports.link = function link(init) {
	  return assembler.createElement('link', init);
	};

	var main = exports.main = function main(init) {
	  return assembler.createElement('main', init);
	};

	var map = exports.map = function map(init) {
	  return assembler.createElement('map', init);
	};

	var mark = exports.mark = function mark(init) {
	  return assembler.createElement('mark', init);
	};

	// todo MathInstance
	// export const math = init => instance.createElement('math', init);

	var menu = exports.menu = function menu(init) {
	  return assembler.createElement('menu', init);
	};

	var menuitem = exports.menuitem = function menuitem(init) {
	  return assembler.createElement('menuitem', init);
	};

	var meta = exports.meta = function meta(init) {
	  return assembler.createElement('meta', init);
	};

	var meter = exports.meter = function meter(init) {
	  return assembler.createElement('meter', init);
	};

	var nav = exports.nav = function nav(init) {
	  return assembler.createElement('nav', init);
	};

	var noscript = exports.noscript = function noscript(init) {
	  return assembler.createElement('noscript', init);
	};

	var object = exports.object = function object(init) {
	  return assembler.createElement('object', init);
	};

	var ol = exports.ol = function ol(init) {
	  return assembler.createElement('ol', init);
	};

	var optgroup = exports.optgroup = function optgroup(init) {
	  return assembler.createElement('optgroup', init);
	};

	var option = exports.option = function option(init) {
	  return assembler.createElement('option', init);
	};

	var output = exports.output = function output(init) {
	  return assembler.createElement('output', init);
	};

	var p = exports.p = function p(init) {
	  return assembler.createElement('p', init);
	};

	var param = exports.param = function param(init) {
	  return assembler.createElement('param', init);
	};

	var picture = exports.picture = function picture(init) {
	  return assembler.createElement('picture', init);
	};

	var pre = exports.pre = function pre(init) {
	  return assembler.createElement('pre', init);
	};

	var progress = exports.progress = function progress(init) {
	  return assembler.createElement('progress', init);
	};

	var q = exports.q = function q(init) {
	  return assembler.createElement('q', init);
	};

	var rp = exports.rp = function rp(init) {
	  return assembler.createElement('rp', init);
	};

	var rt = exports.rt = function rt(init) {
	  return assembler.createElement('rt', init);
	};

	var ruby = exports.ruby = function ruby(init) {
	  return assembler.createElement('ruby', init);
	};

	var s = exports.s = function s(init) {
	  return assembler.createElement('s', init);
	};

	var samp = exports.samp = function samp(init) {
	  return assembler.createElement('samp', init);
	};

	var script = exports.script = function script(init) {
	  return assembler.createElement('script', init);
	};

	var section = exports.section = function section(init) {
	  return assembler.createElement('section', init);
	};

	var select = exports.select = function select(init) {
	  return assembler.createElement('select', init);
	};

	var slot = exports.slot = function slot(init) {
	  return assembler.createElement('slot', init);
	};

	var small = exports.small = function small(init) {
	  return assembler.createElement('small', init);
	};

	var source = exports.source = function source(init) {
	  return assembler.createElement('source', init);
	};

	var span = exports.span = function span(init) {
	  return assembler.createElement('span', init);
	};

	var strong = exports.strong = function strong(init) {
	  return assembler.createElement('strong', init);
	};

	var style = exports.style = function style(init) {
	  return assembler.createElement('style', init);
	};

	var sub = exports.sub = function sub(init) {
	  return assembler.createElement('sub', init);
	};

	var summary = exports.summary = function summary(init) {
	  return assembler.createElement('summary', init);
	};

	var sup = exports.sup = function sup(init) {
	  return assembler.createElement('sup', init);
	};

	// todo SVGInstance
	// export const svg = init => instance.createElement('svg', init);

	var table = exports.table = function table(init) {
	  return assembler.createElement('table', init);
	};

	var tbody = exports.tbody = function tbody(init) {
	  return assembler.createElement('tbody', init);
	};

	var td = exports.td = function td(init) {
	  return assembler.createElement('td', init);
	};

	var template = exports.template = function template(init) {
	  return assembler.createElement('template', init);
	};

	var textarea = exports.textarea = function textarea(init) {
	  return assembler.createElement('textarea', init);
	};

	var tfoot = exports.tfoot = function tfoot(init) {
	  return assembler.createElement('tfoot', init);
	};

	var th = exports.th = function th(init) {
	  return assembler.createElement('th', init);
	};

	var thead = exports.thead = function thead(init) {
	  return assembler.createElement('thead', init);
	};

	var time = exports.time = function time(init) {
	  return assembler.createElement('time', init);
	};

	var title = exports.title = function title(init) {
	  return assembler.createElement('title', init);
	};

	var tr = exports.tr = function tr(init) {
	  return assembler.createElement('tr', init);
	};

	var track = exports.track = function track(init) {
	  return assembler.createElement('track', init);
	};

	var u = exports.u = function u(init) {
	  return assembler.createElement('u', init);
	};

	var ul = exports.ul = function ul(init) {
	  return assembler.createElement('ul', init);
	};

	// `var` is JS-keyword
	var variable = exports.variable = function variable(init) {
	  return assembler.createElement('var', init);
	};

	var video = exports.video = function video(init) {
	  return assembler.createElement('video', init);
	};

	var wbr = exports.wbr = function wbr(init) {
	  return assembler.createElement('wbr', init);
	};

/***/ }

/******/ });