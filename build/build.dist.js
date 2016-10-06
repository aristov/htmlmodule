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

/***/ },
/* 1 */
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
/* 2 */
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

/***/ }
/******/ ]);