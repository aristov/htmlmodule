module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HTMLElementAssembler = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dommodule = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var assign = Object.assign,
    getPrototypeOf = Object.getPrototypeOf;
var _window = window,
    HTMLDocument = _window.HTMLDocument,
    HTMLElement = _window.HTMLElement,
    document = _window.document;


var HTML_NAMESPACE_URI = 'http://www.w3.org/1999/xhtml';
var HTML_PREFIX = 'html';
var EMPTY_PREFIX = '';
var LOCAL_NAME = 'html';

var HTMLElementAssembler = function (_ElementAssembler) {
    _inherits(HTMLElementAssembler, _ElementAssembler);

    function HTMLElementAssembler() {
        _classCallCheck(this, HTMLElementAssembler);

        return _possibleConstructorReturn(this, (HTMLElementAssembler.__proto__ || Object.getPrototypeOf(HTMLElementAssembler)).apply(this, arguments));
    }

    _createClass(HTMLElementAssembler, [{
        key: 'init',
        value: function init(_init) {
            _get(HTMLElementAssembler.prototype.__proto__ || Object.getPrototypeOf(HTMLElementAssembler.prototype), 'init', this).call(this, _init);
            if (_init && _init.constructor === Object && _init.hasOwnProperty('name')) {
                this.name = _init.name;
            }
        }
    }, {
        key: 'click',
        value: function click() {
            this.node.click;
        }
    }, {
        key: 'focus',
        value: function focus() {
            this.node.focus();
        }
    }, {
        key: 'blur',
        value: function blur() {
            this.node.blur();
        }
    }, {
        key: 'name',
        set: function set(name) {
            if ('name' in this.node) this.node.name = name;
        },
        get: function get() {
            return this.node.name;
        }

        /**
         * @param {String} accessKey
         */

    }, {
        key: 'accessKey',
        set: function set(accessKey) {
            this.node.accessKey = accessKey;
        }

        /**
         * @returns {String}
         */
        ,
        get: function get() {
            return this.node.accessKey;
        }

        /**
         * @param {{}} dataset
         */

    }, {
        key: 'dataset',
        set: function set(dataset) {
            assign(this.node.dataset, dataset);
        }

        /**
         * @returns {{}} DOMStringMap
         */
        ,
        get: function get() {
            return this.node.dataset;
        }

        /**
         * @param {String} dir
         */

    }, {
        key: 'dir',
        set: function set(dir) {
            this.node.dir = dir;
        }

        /**
         * @returns {String}
         */
        ,
        get: function get() {
            return this.node.dir;
        }

        /**
         * @param {String} lang
         */

    }, {
        key: 'lang',
        set: function set(lang) {
            this.node.lang = lang;
        }

        /**
         * @returns {String}
         */
        ,
        get: function get() {
            return this.node.lang;
        }

        /**
         * @param {{}} style
         */

    }, {
        key: 'style',
        set: function set(style) {
            assign(this.node.style, style);
        }

        /**
         * @returns {{}} CSSStyleDeclaration
         */
        ,
        get: function get() {
            return this.node.style;
        }

        /**
         * @param {Number} tabIndex
         */

    }, {
        key: 'tabIndex',
        set: function set(tabIndex) {
            if (isNaN(tabIndex)) {
                this.node.removeAttribute('tabindex');
            } else this.node.tabIndex = tabIndex;
        }

        /**
         * @returns {Number}
         */
        ,
        get: function get() {
            var node = this.node;
            return node.hasAttribute('tabindex') ? node.tabIndex : NaN;
        }

        /**
         * @param {String} title
         */

    }, {
        key: 'title',
        set: function set(title) {
            this.node.title = title;
        }

        /**
         * @returns {String}
         */
        ,
        get: function get() {
            return this.node.title;
        }

        /**
         * @param {Boolean} translate
         */

    }, {
        key: 'translate',
        set: function set(translate) {
            this.node.translate = translate;
        }

        /**
         * @returns {Boolean}
         */
        ,
        get: function get() {
            return this.node.translate;
        }

        /**
         * @param {Boolean} hidden
         */

    }, {
        key: 'hidden',
        set: function set(hidden) {
            this.node.hidden = hidden;
        }

        /**
         * @returns {Boolean}
         */
        ,
        get: function get() {
            return this.node.hidden;
        }

        /**
         * Create the specified Element node
         * @param {String} [init]
         * @param {String} [init.localName]
         * @returns {Element|*} created element
         */

    }], [{
        key: 'create',
        value: function create(init) {
            if (document instanceof HTMLDocument) {
                var _ref = init || this,
                    _ref$localName = _ref.localName,
                    localName = _ref$localName === undefined ? this.localName : _ref$localName;

                return document.createElement(localName);
            } else return _get(HTMLElementAssembler.__proto__ || Object.getPrototypeOf(HTMLElementAssembler), 'create', this).call(this, init);
        }

        /**
         * @returns {String}
         */

    }, {
        key: 'namespace',
        get: function get() {
            return HTML_NAMESPACE_URI;
        }

        /**
         * @returns {String}
         */

    }, {
        key: 'prefix',
        get: function get() {
            return document instanceof HTMLDocument ? EMPTY_PREFIX : HTML_PREFIX;
        }

        /**
         * @returns {String}
         */

    }, {
        key: 'localName',
        get: function get() {
            if (this === HTMLElementAssembler) return LOCAL_NAME;else {
                var object = this;
                var proto = void 0;
                while (proto = getPrototypeOf(object)) {
                    if (proto === HTMLElementAssembler) break;else object = proto;
                }
                return object.name.toLowerCase();
            }
        }

        /**
         * @returns {Window.HTMLElement}
         */

    }, {
        key: 'intraface',
        get: function get() {
            return HTMLElement;
        }
    }]);

    return HTMLElementAssembler;
}(_dommodule.ElementAssembler);

exports.HTMLElementAssembler = HTMLElementAssembler;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports =
/******/function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/var installedModules = {};
    /******/
    /******/ // The require function
    /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
            /******/return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
            /******/i: moduleId,
            /******/l: false,
            /******/exports: {}
            /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/__webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/__webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
            /******/Object.defineProperty(exports, name, {
                /******/configurable: false,
                /******/enumerable: true,
                /******/get: getter
                /******/ });
            /******/
        }
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
            return module['default'];
        } :
        /******/function getModuleExports() {
            return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/__webpack_require__.p = "";
    /******/
    /******/ // Load entry module and return exports
    /******/return __webpack_require__(__webpack_require__.s = 15);
    /******/
}(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var TYPE_FUNCTION = exports.TYPE_FUNCTION = 'function';
    var TYPE_STRING = exports.TYPE_STRING = 'string';
    var DEFAULT_NAMESPACE_URI = exports.DEFAULT_NAMESPACE_URI = '';
    var DEFAULT_PREFIX = exports.DEFAULT_PREFIX = '';
    var INSTANCE_PROPERTY_NAME = exports.INSTANCE_PROPERTY_NAME = '__instance__';
    var NAMESPACE_SEPARATOR = exports.NAMESPACE_SEPARATOR = ':';
    var NO_PARENT_INDEX = exports.NO_PARENT_INDEX = -1;

    /***/
},
/* 1 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.ElementAssembler = undefined;

    var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    };

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    var _get = function get(object, property, receiver) {
        if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);if (parent === null) {
                return undefined;
            } else {
                return get(parent, property, receiver);
            }
        } else if ("value" in desc) {
            return desc.value;
        } else {
            var getter = desc.get;if (getter === undefined) {
                return undefined;
            }return getter.call(receiver);
        }
    };

    var _set = function set(object, property, value, receiver) {
        var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);if (parent !== null) {
                set(parent, property, value, receiver);
            }
        } else if ("value" in desc && desc.writable) {
            desc.value = value;
        } else {
            var setter = desc.set;if (setter !== undefined) {
                setter.call(receiver, value);
            }
        }return value;
    };

    exports.element = element;

    var _const = __webpack_require__(0);

    var _attr = __webpack_require__(6);

    var _document = __webpack_require__(2);

    var _parentnode = __webpack_require__(4);

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var keys = Object.keys;
    var isArray = Array.isArray,
        _Array$prototype = Array.prototype,
        indexOf = _Array$prototype.indexOf,
        map = _Array$prototype.map,
        reduce = _Array$prototype.reduce;
    var _window = window,
        Document = _window.Document,
        Element = _window.Element,
        document = _window.document;

    function attrset(attrset, _ref) {
        var name = _ref.name,
            value = _ref.value;

        attrset[name] = value;
        return attrset;
    }

    /**
     * Element DOM node assembler
     */

    var ElementAssembler = exports.ElementAssembler = function (_ParentNodeAssembler) {
        _inherits(ElementAssembler, _ParentNodeAssembler);

        function ElementAssembler() {
            _classCallCheck(this, ElementAssembler);

            return _possibleConstructorReturn(this, (ElementAssembler.__proto__ || Object.getPrototypeOf(ElementAssembler)).apply(this, arguments));
        }

        _createClass(ElementAssembler, [{
            key: 'setAttribute',

            /**
             * this.setAttribute(AttrAssembler, 'foobar')
             * this.setAttribute('attr', 'foobar')
             *
             * @param {Function|String} attr
             * @param {String} value
             */
            value: function setAttribute(attr, value) {
                var instance = this.getAttributeNode(attr);
                if (instance) instance.value = value;else if ((typeof attr === 'undefined' ? 'undefined' : _typeof(attr)) === _const.TYPE_FUNCTION) {
                    this.setAttributeNode(new attr({ value: value }));
                } else this.node.setAttribute(attr, value);
            }

            /**
             * this.getAttribute(AttrAssembler)
             * this.getAttribute('attr')
             *
             * @param {Function|String} attr
             * @returns {String}
             */

        }, {
            key: 'getAttribute',
            value: function getAttribute(attr) {
                var node = this.node;
                if ((typeof attr === 'undefined' ? 'undefined' : _typeof(attr)) === _const.TYPE_FUNCTION) {
                    var namespace = attr.namespace,
                        qualifiedName = attr.qualifiedName,
                        localName = attr.localName;

                    return namespace ? node.getAttributeNS(namespace, localName) : node.getAttribute(qualifiedName);
                } else return node.getAttribute(attr);
            }

            /**
             * @param {Function|String} attr
             * @returns {Boolean}
             */

        }, {
            key: 'hasAttribute',
            value: function hasAttribute(attr) {
                var node = this.node;
                if ((typeof attr === 'undefined' ? 'undefined' : _typeof(attr)) === _const.TYPE_FUNCTION) {
                    var namespace = attr.namespace,
                        qualifiedName = attr.qualifiedName,
                        localName = attr.localName;

                    return namespace ? node.hasAttributeNS(namespace, localName) : node.hasAttribute(qualifiedName);
                } else return node.hasAttribute(attr);
            }

            /**
             * @param {Function|String} attr
             */

        }, {
            key: 'removeAttribute',
            value: function removeAttribute(attr) {
                var node = this.node;
                if ((typeof attr === 'undefined' ? 'undefined' : _typeof(attr)) === _const.TYPE_FUNCTION) {
                    var namespace = attr.namespace,
                        qualifiedName = attr.qualifiedName,
                        localName = attr.localName;

                    if (namespace) {
                        node.removeAttributeNS(namespace, localName);
                    } else node.removeAttribute(qualifiedName);
                } else node.removeAttribute(attr);
            }

            /**
             * this.setAttributeNode(new AttrAssembler)
             * this.setAttributeNode(document.createAttribute('attr'))
             *
             * @param {AttrAssembler|Attr} attr
             * @returns {AttrAssembler|ElementAssembler.attrAssembler|null}
             */

        }, {
            key: 'setAttributeNode',
            value: function setAttributeNode(attr) {
                var node = this.node;
                var replacedNode = void 0;
                if (attr instanceof _attr.AttrAssembler) {
                    var _attr$node = attr.node,
                        namespaceURI = _attr$node.namespaceURI,
                        name = _attr$node.name;

                    replacedNode = namespaceURI ? node.getAttributeNodeNS(namespaceURI, name) : node.getAttributeNode(name);
                    attr.ownerElement = node;
                } else {
                    replacedNode = attr.namespaceURI ? node.setAttributeNodeNS(attr) : node.setAttributeNode(attr);
                }
                if (replacedNode) {
                    var attrAssembler = this.constructor.attrAssembler;

                    return this.getInstance(replacedNode, attrAssembler);
                } else return null;
            }

            /**
             * this.getAttributeNode(AttrAssembler)
             * this.getAttributeNode('attr')
             *
             * @param {Function|String} attr
             * @returns {AttrAssembler|null}
             */

        }, {
            key: 'getAttributeNode',
            value: function getAttributeNode(attr) {
                var node = this.node;
                var isFunctionType = (typeof attr === 'undefined' ? 'undefined' : _typeof(attr)) === _const.TYPE_FUNCTION;
                var attrNode = void 0;
                if (isFunctionType) {
                    var namespace = attr.namespace,
                        qualifiedName = attr.qualifiedName,
                        localName = attr.localName;

                    attrNode = namespace ? node.getAttributeNodeNS(namespace, localName) : node.getAttributeNode(qualifiedName);
                } else attrNode = node.getAttributeNode(attr);
                if (attrNode) {
                    var assembler = isFunctionType ? attr : this.constructor.attrAssembler;
                    return this.getInstance(attrNode, assembler);
                } else return null;
            }

            /**
             * this.removeAttributeNode('attr')
             * this.removeAttributeNode(AttrAssembler)
             * this.removeAttributeNode(this.getAttributeNode('attr'))
             * this.removeAttributeNode(this.node.getAttributeNode('attr'))
             *
             * @param {AttrAssembler|Attr|Function|String} attr
             * @returns {AttrAssembler|ElementAssembler.attrAssembler|null}
             */

        }, {
            key: 'removeAttributeNode',
            value: function removeAttributeNode(attr) {
                var node = this.node;
                var type = typeof attr === 'undefined' ? 'undefined' : _typeof(attr);
                if (type === _const.TYPE_STRING || type === _const.TYPE_FUNCTION) {
                    var instance = this.getAttributeNode(attr);
                    if (instance) {
                        node.removeAttributeNode(instance.node);
                        return instance;
                    } else return null;
                } else {
                    if (attr instanceof _attr.AttrAssembler) return attr.remove();else {
                        var attrNode = node.removeAttributeNode(attr);
                        var attrAssembler = this.constructor.attrAssembler;

                        return this.getInstance(attrNode, attrAssembler);
                    }
                }
            }

            /**
             * Set the unique identifier on the element
             * @param {String} id
             */

        }, {
            key: 'id',
            set: function set(id) {
                this.node.id = id;
            }

            /**
             * Get the unique identifier of the element
             * @returns {String}
             */

            , get: function get() {
                return this.node.id;
            }

            /**
             * Set the class name of the element
             * @param {String} className
             */

        }, {
            key: 'className',
            set: function set(className) {
                this.node.className = className;
            }

            /**
             * Get the class name of the element
             * @returns {String}
             */

            , get: function get() {
                return this.node.className;
            }

            /**
             * Set the class list of the element
             * @param {*} classList token / token list / token-boolean dict {String|Array|{}}
             */

        }, {
            key: 'classList',
            set: function set(classList) {
                var _this2 = this;

                if (classList) {
                    var list = this.node.classList;
                    if (isArray(classList)) {
                        classList.forEach(function (token) {
                            return _this2.classList = token;
                        });
                    } else if (classList.constructor === Object) {
                        keys(classList).forEach(function (token) {
                            if (classList[token]) list.add(token);
                        });
                    } else list.add(classList);
                }
            }

            /**
             * Get the class list of the element as an array
             * @returns {DOMTokenList} classList interface
             */

            , get: function get() {
                return this.node.classList;
            }

            /**
             * Set content attributes on the element
             * @param {*} attrset dictionary object
             */

        }, {
            key: 'attrset',
            set: function set(attrset) {
                var node = this.node;
                for (var name in attrset) {
                    node.setAttribute(name, attrset[name]);
                }
            }

            /**
             * Get all content attributes of the element as a dictionary-object
             * @returns {{}}
             */

            , get: function get() {
                return reduce.call(this.node.attributes, attrset, {});
            }

            /**
             * Set content attributes on the element
             * @param {*} attributes
             */

        }, {
            key: 'attributes',
            set: function set(attributes) {
                var _this3 = this;

                if (attributes instanceof _attr.AttrAssembler) {
                    attributes.ownerElement = this.node;
                } else if (isArray(attributes)) {
                    attributes.forEach(function (attr) {
                        return _this3.attributes = attr;
                    });
                } else this.setAttributeNode(attributes);
            }

            /**
             * Get all attributes of the element as an array
             * @returns {Array}
             */

            , get: function get() {
                var _this4 = this;

                var attrAssembler = this.constructor.attrAssembler;

                return map.call(this.node.attributes, function (node) {
                    return _this4.getInstance(node, attrAssembler);
                });
            }

            /**
             * Append children to the element
             * @param {*} children
             */

        }, {
            key: 'children',
            set: function set(children) {
                this.append(children);
            }

            /**
             * Get all children of the element as an array
             * @returns {Array}
             */

            , get: function get() {
                var _this5 = this;

                var elementAssembler = this.constructor.elementAssembler;

                return map.call(this.node.children, function (node) {
                    return _this5.getInstance(node, elementAssembler);
                });
            }

            /**
             * @returns {ChildNodeAssembler|*}
             */

        }, {
            key: 'firstElementChild',
            get: function get() {
                return this.getInstance(this.node.firstElementChild, this.constructor.elementAssembler);
            }

            /**
             * @returns {ChildNodeAssembler|*}
             */

        }, {
            key: 'lastElementChild',
            get: function get() {
                return this.getInstance(this.node.lastElementChild, this.constructor.elementAssembler);
            }

            /**
             * @param {ParentNodeAssembler|*} parentNode
             */

        }, {
            key: 'parentNode',
            set: function set(parentNode) {
                if (parentNode instanceof _document.DocumentAssembler) {
                    parentNode.documentElement = this.node;
                } else {
                    if (parentNode instanceof Document) {
                        var _element = parentNode.documentElement;
                        if (_element) parentNode.removeChild(_element);
                    }
                    _set(ElementAssembler.prototype.__proto__ || Object.getPrototypeOf(ElementAssembler.prototype), 'parentNode', parentNode, this);
                }
            }

            /**
             * @returns {ParentNodeAssembler|*}
             */

            , get: function get() {
                return _get(ElementAssembler.prototype.__proto__ || Object.getPrototypeOf(ElementAssembler.prototype), 'parentNode', this);
            }

            /**
             * Get a next sibling of the element
             * @returns {ChildNodeAssembler|null|*}
             */

        }, {
            key: 'nextElementSibling',
            get: function get() {
                return this.getInstance(this.node.nextElementSibling, this.constructor.elementAssembler);
            }

            /**
             * Get a previous sibling of the element
             * @returns {ChildNodeAssembler|null|*}
             */

        }, {
            key: 'previousElementSibling',
            get: function get() {
                return this.getInstance(this.node.previousElementSibling, this.constructor.elementAssembler);
            }

            /**
             * Get the element index among its sibling elements or -1 if it has no parent
             * @returns {Number}
             */

        }, {
            key: 'elementIndex',
            get: function get() {
                var parentNode = this.node.parentNode;
                return parentNode ? indexOf.call(parentNode.children, this.node) : _const.NO_PARENT_INDEX;
            }

            /**
             * Create the specified Element node
             * @param {*} [init]
             * @returns {Element|*} created element
             */

        }], [{
            key: 'create',
            value: function create(init) {
                var _ref2 = init || this,
                    _ref2$namespace = _ref2.namespace,
                    namespace = _ref2$namespace === undefined ? this.namespace : _ref2$namespace,
                    _ref2$prefix = _ref2.prefix,
                    prefix = _ref2$prefix === undefined ? this.prefix : _ref2$prefix,
                    _ref2$localName = _ref2.localName,
                    localName = _ref2$localName === undefined ? this.localName : _ref2$localName;

                var qualifiedName = init && init.qualifiedName;
                if (!qualifiedName) {
                    qualifiedName = prefix ? prefix + _const.NAMESPACE_SEPARATOR + localName : localName;
                }
                return document.createElementNS(namespace, qualifiedName);
            }

            /**
             * Default namespace URI
             * @returns {String}
             */

        }, {
            key: 'namespace',
            get: function get() {
                return _const.DEFAULT_NAMESPACE_URI;
            }

            /**
             * The XML namespace prefix
             * @returns {String}
             */

        }, {
            key: 'prefix',
            get: function get() {
                return _const.DEFAULT_PREFIX;
            }

            /**
             * The local name of the element node
             * @returns {String}
             */

        }, {
            key: 'localName',
            get: function get() {
                return this === ElementAssembler ? element.name : this.name.toLowerCase();
            }

            /**
             * The qualified name of the element node
             * @returns {String}
             */

        }, {
            key: 'qualifiedName',
            get: function get() {
                var prefix = this.prefix,
                    localName = this.localName;

                return prefix ? prefix + _const.NAMESPACE_SEPARATOR + localName : localName;
            }

            /**
             * @returns {Function}
             */

        }, {
            key: 'attrAssembler',
            get: function get() {
                return _attr.AttrAssembler;
            }

            /**
             * @returns {Function}
             */

        }, {
            key: 'elementAssembler',
            get: function get() {
                return ElementAssembler;
            }

            /**
             * @returns {Function}
             */

        }, {
            key: 'interface',
            get: function get() {
                return Element;
            }
        }]);

        return ElementAssembler;
    }(_parentnode.ParentNodeAssembler);

    /**
     * Element assembler factory
     * @param {*} init
     * @returns {ElementAssembler}
     */

    function element() {
        for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
            init[_key] = arguments[_key];
        }

        return new (Function.prototype.bind.apply(ElementAssembler, [null].concat(init)))();
    }

    /***/
},
/* 2 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.DocumentAssembler = undefined;

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    var _element2 = __webpack_require__(1);

    var _doctype = __webpack_require__(7);

    var _parentnode = __webpack_require__(4);

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var _window = window,
        Document = _window.Document,
        DocumentType = _window.DocumentType,
        Element = _window.Element,
        implementation = _window.document.implementation;

    var DEFAULT_DOCTYPE = null;
    var DEFAULT_QUALIFIED_NAME = 'document';

    /**
     * Document DOM node assembler
     */

    var DocumentAssembler = exports.DocumentAssembler = function (_ParentNodeAssembler) {
        _inherits(DocumentAssembler, _ParentNodeAssembler);

        function DocumentAssembler() {
            _classCallCheck(this, DocumentAssembler);

            return _possibleConstructorReturn(this, (DocumentAssembler.__proto__ || Object.getPrototypeOf(DocumentAssembler)).apply(this, arguments));
        }

        _createClass(DocumentAssembler, [{
            key: 'doctype',

            /**
             * Set the associated document type declaration node
             * @param {*} doctype node or assembler
             */
            set: function set(doctype) {
                if (doctype instanceof _doctype.DocumentTypeAssembler) {
                    doctype.parentNode = this.node;
                } else {
                    var node = this.node;
                    var firstChild = node.firstChild;
                    if (firstChild) {
                        if (firstChild instanceof DocumentType) {
                            node.replaceChild(doctype, firstChild);
                        } else node.insertBefore(doctype, firstChild);
                    } else node.appendChild(doctype);
                }
            }

            /**
             * The associatied document type declaration node
             * @returns {DocumentTypeAssembler|DocumentAssembler.doctypeAssembler|null}
             */

            , get: function get() {
                var doctypeNode = this.node.doctype;
                if (doctypeNode) {
                    var doctypeAssembler = this.constructor.doctypeAssembler;

                    return this.getInstance(doctypeNode, doctypeAssembler);
                } else return null;
            }

            /**
             * Set the root document element
             * @param {*} documentElement node or assembler or init dictionary
             */

        }, {
            key: 'documentElement',
            set: function set(documentElement) {
                var node = this.node;
                var element = this.documentElement;
                if (documentElement instanceof _element2.ElementAssembler) {
                    documentElement.parentNode = node;
                } else if (documentElement instanceof Element) {
                    if (element) element.remove();
                    node.appendChild(documentElement);
                } else if (documentElement === null && element) {
                    element.remove();
                } else {
                    if (element) element.init(documentElement);else {
                        var elementAssembler = this.constructor.elementAssembler;

                        var _element = new elementAssembler(documentElement);
                        _element.parentNode = node;
                    }
                }
            }

            /**
             * The root document element
             * @returns {ElementAssembler|DocumentAssembler.elementAssembler|null} Element
             */

            , get: function get() {
                var elementNode = this.node.documentElement;
                if (elementNode) {
                    var elementAssembler = this.constructor.elementAssembler;

                    return this.getInstance(elementNode, elementAssembler);
                } else return null;
            }

            /**
             * Create the specified Document node
             * @param {*} [init]
             * @returns {Document}
             */

        }], [{
            key: 'create',
            value: function create(init) {
                var _ref = init || this,
                    _ref$namespace = _ref.namespace,
                    namespace = _ref$namespace === undefined ? this.namespace : _ref$namespace,
                    _ref$qualifiedName = _ref.qualifiedName,
                    qualifiedName = _ref$qualifiedName === undefined ? this.qualifiedName : _ref$qualifiedName,
                    _ref$doctype = _ref.doctype,
                    doctype = _ref$doctype === undefined ? this.doctype : _ref$doctype;

                return implementation.createDocument(namespace, qualifiedName, doctype instanceof _doctype.DocumentTypeAssembler ? doctype.node : doctype);
            }

            /**
             * The default namespace URI
             * @returns {String}
             */

        }, {
            key: 'namespace',
            get: function get() {
                return this.elementAssembler.namespace;
            }

            /**
             * The qualified name of the document element node
             * @returns {String}
             */

        }, {
            key: 'qualifiedName',
            get: function get() {
                return this === DocumentAssembler ? DEFAULT_QUALIFIED_NAME : this.elementAssembler.qualifiedName;
            }

            /**
             * Doctype redefenition facility
             * @returns {*|null}
             */

        }, {
            key: 'doctype',
            get: function get() {
                return DEFAULT_DOCTYPE;
            }

            /**
             * @returns {Function}
             */

        }, {
            key: 'elementAssembler',
            get: function get() {
                return _element2.ElementAssembler;
            }

            /**
             * @returns {Function}
             */

        }, {
            key: 'doctypeAssembler',
            get: function get() {
                return _doctype.DocumentTypeAssembler;
            }

            /**
             * @returns {Function}
             */

        }, {
            key: 'interface',
            get: function get() {
                return Document;
            }
        }]);

        return DocumentAssembler;
    }(_parentnode.ParentNodeAssembler);

    /***/
},
/* 3 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.ChildNodeAssembler = undefined;

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    var _const = __webpack_require__(0);

    var _node = __webpack_require__(8);

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var indexOf = Array.prototype.indexOf;

    /**
     * ChildNode DOM interface assembler
     */

    var ChildNodeAssembler = exports.ChildNodeAssembler = function (_NodeAssembler) {
        _inherits(ChildNodeAssembler, _NodeAssembler);

        function ChildNodeAssembler() {
            _classCallCheck(this, ChildNodeAssembler);

            return _possibleConstructorReturn(this, (ChildNodeAssembler.__proto__ || Object.getPrototypeOf(ChildNodeAssembler)).apply(this, arguments));
        }

        _createClass(ChildNodeAssembler, [{
            key: 'remove',

            /**
             * Remove node from tree
             */
            value: function remove() {
                if (this.parentNode) {
                    this.parentNode.removeChild(this.node);
                }
            }
        }, {
            key: 'parentNode',

            /**
             * Append the node to the specified parent
             * @param {ParentNodeAssembler|*} parentNode
             */
            set: function set(parentNode) {
                parentNode.appendChild(this.node);
            }

            /**
             * Get the parent node
             * @returns {ParentNodeAssembler|*}
             */

            , get: function get() {
                return this.getInstance(this.node.parentNode);
            }

            /**
             * Get a next sibling of the node
             * @returns {ChildNodeAssembler|null|*}
             */

        }, {
            key: 'nextSibling',
            get: function get() {
                return this.getInstance(this.node.nextSibling);
            }

            /**
             * Get a previous sibling of the node
             * @returns {ChildNodeAssembler|null|*}
             */

        }, {
            key: 'previousSibling',
            get: function get() {
                return this.getInstance(this.node.previousSibling);
            }

            /**
             * Get the node index among its sibling nodes or -1 if it has no parent
             * @returns {Number}
             */

        }, {
            key: 'index',
            get: function get() {
                var parentNode = this.node.parentNode;
                return parentNode ? indexOf.call(parentNode.childNodes, this.node) : _const.NO_PARENT_INDEX;
            }
        }]);

        return ChildNodeAssembler;
    }(_node.NodeAssembler);

    /***/
},
/* 4 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.ParentNodeAssembler = undefined;

    var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    };

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    var _get = function get(object, property, receiver) {
        if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);if (parent === null) {
                return undefined;
            } else {
                return get(parent, property, receiver);
            }
        } else if ("value" in desc) {
            return desc.value;
        } else {
            var getter = desc.get;if (getter === undefined) {
                return undefined;
            }return getter.call(receiver);
        }
    };

    var _const = __webpack_require__(0);

    var _childnode = __webpack_require__(3);

    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }return arr2;
        } else {
            return Array.from(arr);
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var isArray = Array.isArray,
        forEach = Array.prototype.forEach;
    var _window = window,
        document = _window.document;

    /**
     * ParentNode DOM interface assembler
     */

    var ParentNodeAssembler = function (_ChildNodeAssembler) {
        _inherits(ParentNodeAssembler, _ChildNodeAssembler);

        function ParentNodeAssembler() {
            _classCallCheck(this, ParentNodeAssembler);

            return _possibleConstructorReturn(this, (ParentNodeAssembler.__proto__ || Object.getPrototypeOf(ParentNodeAssembler)).apply(this, arguments));
        }

        _createClass(ParentNodeAssembler, [{
            key: 'init',

            /**
             * Initialize the parent node with defined properties
             * @param {*} init initializing dictionary
             * @returns {Node|*} initialized node
             */
            value: function init(_init) {
                if (_init) {
                    if (_init.constructor === Object) _get(ParentNodeAssembler.prototype.__proto__ || Object.getPrototypeOf(ParentNodeAssembler.prototype), 'init', this).call(this, _init);else this.childNodes = _init;
                }
            }

            /**
             * Append child nodes to the node
             * @param {String|Node|ChildNodeAssembler|Array|*} childNodes
             */

        }, {
            key: 'append',
            value: function append() {
                var _this2 = this;

                for (var _len = arguments.length, childNodes = Array(_len), _key = 0; _key < _len; _key++) {
                    childNodes[_key] = arguments[_key];
                }

                childNodes.forEach(function (child) {
                    if (child) {
                        if (isArray(child)) _this2.append.apply(_this2, _toConsumableArray(child));else _this2.appendChild(child);
                    }
                });
            }

            /**
             * @param {*} child
             */

        }, {
            key: 'appendChild',
            value: function appendChild(child) {
                if (child instanceof _childnode.ChildNodeAssembler) {
                    child.parentNode = this.node;
                } else if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) === _const.TYPE_STRING) {
                    this.node.appendChild(document.createTextNode(child));
                } else this.node.appendChild(child);
            }

            /**
             * @param child
             */

        }, {
            key: 'removeChild',
            value: function removeChild(child) {
                if (child instanceof _childnode.ChildNodeAssembler) {
                    child.remove();
                } else this.node.removeChild(child);
            }

            /**
             * @param {*} init
             * @returns {Node|*}
             */

        }, {
            key: 'create',
            value: function create(init) {
                return init && init.constructor === Object ? _get(ParentNodeAssembler.prototype.__proto__ || Object.getPrototypeOf(ParentNodeAssembler.prototype), 'create', this).call(this, init) : _get(ParentNodeAssembler.prototype.__proto__ || Object.getPrototypeOf(ParentNodeAssembler.prototype), 'create', this).call(this);
            }

            /**
             * Replace child nodes to the node
             * @param {String|Node|ChildNodeAssembler|Array|*} childNodes
             */

        }, {
            key: 'childNodes',
            set: function set(childNodes) {
                var _this3 = this;

                if (this.node.hasChildNodes()) {
                    forEach.call(this.node.childNodes, function (child) {
                        _this3.node.removeChild(child);
                    });
                }
                this.append(childNodes);
            }

            /**
             * Get an array of child nodes
             * @returns {*} {Array}
             */

            , get: function get() {
                var _this4 = this;

                return Array.from(this.node.childNodes).map(function (node) {
                    return _this4.getInstance(node);
                });
            }

            /**
             * @returns {ChildNodeAssembler|*}
             */

        }, {
            key: 'firstChild',
            get: function get() {
                return this.getInstance(this.node.firstChild);
            }

            /**
             * @returns {ChildNodeAssembler|*}
             */

        }, {
            key: 'lastChild',
            get: function get() {
                return this.getInstance(this.node.lastChild);
            }

            /**
             * Set the text content of the node
             * @param {String} textContent
             */

        }, {
            key: 'textContent',
            set: function set(textContent) {
                this.node.textContent = textContent;
            }

            /**
             * Get the text content of the node
             * @returns {String}
             */

            , get: function get() {
                return this.node.textContent;
            }
        }]);

        return ParentNodeAssembler;
    }(_childnode.ChildNodeAssembler);

    exports.ParentNodeAssembler = ParentNodeAssembler;

    /***/
},
/* 5 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.CharacterDataAssembler = undefined;

    var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    };

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    var _get = function get(object, property, receiver) {
        if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);if (parent === null) {
                return undefined;
            } else {
                return get(parent, property, receiver);
            }
        } else if ("value" in desc) {
            return desc.value;
        } else {
            var getter = desc.get;if (getter === undefined) {
                return undefined;
            }return getter.call(receiver);
        }
    };

    var _const = __webpack_require__(0);

    var _childnode = __webpack_require__(3);

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var _window = window,
        CharacterData = _window.CharacterData;

    var DEFAULT_DATA = '';

    /**
     * CharacterData DOM interface assembler
     */

    var CharacterDataAssembler = exports.CharacterDataAssembler = function (_ChildNodeAssembler) {
        _inherits(CharacterDataAssembler, _ChildNodeAssembler);

        function CharacterDataAssembler() {
            _classCallCheck(this, CharacterDataAssembler);

            return _possibleConstructorReturn(this, (CharacterDataAssembler.__proto__ || Object.getPrototypeOf(CharacterDataAssembler)).apply(this, arguments));
        }

        _createClass(CharacterDataAssembler, [{
            key: 'assemble',

            /**
             * Use the string type init as data
             * @param {*} init
             */
            value: function assemble(init) {
                return (typeof init === 'undefined' ? 'undefined' : _typeof(init)) === _const.TYPE_STRING ? this.node = this.constructor.create({ data: init }) : _get(CharacterDataAssembler.prototype.__proto__ || Object.getPrototypeOf(CharacterDataAssembler.prototype), 'assemble', this).call(this, init);
            }

            /**
             * Set character data of the node
             * @param {String} data
             */

        }, {
            key: 'data',
            set: function set(data) {
                this.node.data = data;
            }

            /**
             * Get character data of the node
             * @returns {String}
             */

            , get: function get() {
                return this.node.data;
            }

            /**
             * @returns {String}
             */

        }], [{
            key: 'data',
            get: function get() {
                return DEFAULT_DATA;
            }

            /**
             * @returns {Function}
             */

        }, {
            key: 'interface',
            get: function get() {
                return CharacterData;
            }
        }]);

        return CharacterDataAssembler;
    }(_childnode.ChildNodeAssembler);

    /***/
},
/* 6 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.AttrAssembler = undefined;

    var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    };

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    var _get = function get(object, property, receiver) {
        if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);if (parent === null) {
                return undefined;
            } else {
                return get(parent, property, receiver);
            }
        } else if ("value" in desc) {
            return desc.value;
        } else {
            var getter = desc.get;if (getter === undefined) {
                return undefined;
            }return getter.call(receiver);
        }
    };

    exports.attr = attr;

    var _const = __webpack_require__(0);

    var _element = __webpack_require__(1);

    var _node = __webpack_require__(8);

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var _window = window,
        Attr = _window.Attr,
        Element = _window.Element,
        document = _window.document;

    var DEFAULT_ATTR_VALUE = '';
    var VALUE_PROPERTY_NAME = 'value';
    var NODE_PROPERTY_NAME = 'node';

    var AttrAssembler = function (_NodeAssembler) {
        _inherits(AttrAssembler, _NodeAssembler);

        function AttrAssembler() {
            _classCallCheck(this, AttrAssembler);

            return _possibleConstructorReturn(this, (AttrAssembler.__proto__ || Object.getPrototypeOf(AttrAssembler)).apply(this, arguments));
        }

        _createClass(AttrAssembler, [{
            key: 'init',

            /**
             * @param {*} init
             */
            value: function init(_init) {
                if ((typeof _init === 'undefined' ? 'undefined' : _typeof(_init)) === _const.TYPE_STRING) this.value = _init;else {
                    _get(AttrAssembler.prototype.__proto__ || Object.getPrototypeOf(AttrAssembler.prototype), 'init', this).call(this, _init);
                    if (_init && _init.constructor === Object) {
                        if (_init.hasOwnProperty(VALUE_PROPERTY_NAME)) {
                            this.value = _init.value;
                        } else if (!_init.hasOwnProperty(NODE_PROPERTY_NAME)) {
                            this.value = this.constructor.value;
                        }
                    } else this.value = this.constructor.value;
                }
            }

            /**
             * @returns {AttrAssembler}
             */

        }, {
            key: 'remove',
            value: function remove() {
                var ownerElement = this.ownerElement;
                if (ownerElement) {
                    return ownerElement.removeAttributeNode(this.node);
                } else {
                    throw TypeError('Failed to execute \'remove\' on \'' + this.constructor.name + '\': the ownerElement is null.');
                }
            }

            /**
             * @return {String}
             */

        }, {
            key: 'name',
            get: function get() {
                return this.node.name;
            }

            /**
             * @param {String} value
             */

        }, {
            key: 'value',
            set: function set(value) {
                this.node.value = value;
            }

            /**
             * @returns {String}
             */

            , get: function get() {
                return this.node.value;
            }

            /**
             * @param {*} ownerElement
             */

        }, {
            key: 'ownerElement',
            set: function set(ownerElement) {
                var node = this.node;
                if (ownerElement instanceof _element.ElementAssembler) {
                    ownerElement.setAttributeNode(node);
                } else if (ownerElement instanceof Element) {
                    if (node.namespaceURI) {
                        ownerElement.setAttributeNodeNS(node);
                    } else ownerElement.setAttributeNode(node);
                } else if (ownerElement === null) this.remove();else {
                    throw TypeError('Failed to set \'ownerElement\' on \'' + this.constructor.name + '\': parameter is not of expected type.');
                }
            }

            /**
             * @returns {*}
             */

            , get: function get() {
                var ownerElement = this.node.ownerElement;
                if (ownerElement) {
                    var elementAssembler = this.constructor.elementAssembler;

                    return this.getInstance(ownerElement, elementAssembler);
                } else return null;
            }

            /**
             *
             * @param {*} [init]
             */

        }], [{
            key: 'create',
            value: function create(init) {
                var _ref = init || this,
                    _ref$namespace = _ref.namespace,
                    namespace = _ref$namespace === undefined ? this.namespace : _ref$namespace,
                    _ref$prefix = _ref.prefix,
                    prefix = _ref$prefix === undefined ? this.prefix : _ref$prefix,
                    _ref$localName = _ref.localName,
                    localName = _ref$localName === undefined ? this.localName : _ref$localName;

                var name = init && init.name;
                if (!name) {
                    name = prefix ? prefix + _const.NAMESPACE_SEPARATOR + localName : localName;
                }
                return namespace ? document.createAttributeNS(namespace, name) : document.createAttribute(name);
            }

            /**
             * @returns {String}
             */

        }, {
            key: 'namespace',
            get: function get() {
                return _const.DEFAULT_NAMESPACE_URI;
            }

            /**
             * @returns {String}
             */

        }, {
            key: 'prefix',
            get: function get() {
                return _const.DEFAULT_PREFIX;
            }

            /**
             * @returns {String}
             */

        }, {
            key: 'localName',
            get: function get() {
                return this === AttrAssembler ? attr.name : this.name.toLowerCase();
            }

            /**
             * The qualified name of the element node
             * @returns {String}
             */

        }, {
            key: 'qualifiedName',
            get: function get() {
                var prefix = this.prefix,
                    localName = this.localName;

                return prefix ? prefix + _const.NAMESPACE_SEPARATOR + localName : localName;
            }

            /**
             * @returns {String}
             */

        }, {
            key: 'value',
            get: function get() {
                return DEFAULT_ATTR_VALUE;
            }

            /**
             * @returns {Function}
             */

        }, {
            key: 'elementAssembler',
            get: function get() {
                return _element.ElementAssembler;
            }

            /**
             * @returns {Function}
             */

        }, {
            key: 'interface',
            get: function get() {
                return Attr;
            }
        }]);

        return AttrAssembler;
    }(_node.NodeAssembler);

    /**
     * 
     * @param {*} init
     * @returns {AttrAssembler}
     */

    exports.AttrAssembler = AttrAssembler;
    function attr() {
        for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
            init[_key] = arguments[_key];
        }

        return new (Function.prototype.bind.apply(AttrAssembler, [null].concat(init)))();
    }

    /***/
},
/* 7 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.DocumentTypeAssembler = undefined;

    var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    };

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    var _get = function get(object, property, receiver) {
        if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);if (parent === null) {
                return undefined;
            } else {
                return get(parent, property, receiver);
            }
        } else if ("value" in desc) {
            return desc.value;
        } else {
            var getter = desc.get;if (getter === undefined) {
                return undefined;
            }return getter.call(receiver);
        }
    };

    exports.doctype = doctype;

    var _const = __webpack_require__(0);

    var _childnode = __webpack_require__(3);

    var _document = __webpack_require__(2);

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var _window = window,
        DocumentType = _window.DocumentType,
        implementation = _window.document.implementation;

    var DEFAULT_PUBLIC_ID = '';
    var DEFAULT_SYSTEM_ID = '';

    /**
     * DocumentType DOM node assembler
     */

    var DocumentTypeAssembler = exports.DocumentTypeAssembler = function (_ChildNodeAssembler) {
        _inherits(DocumentTypeAssembler, _ChildNodeAssembler);

        function DocumentTypeAssembler() {
            _classCallCheck(this, DocumentTypeAssembler);

            return _possibleConstructorReturn(this, (DocumentTypeAssembler.__proto__ || Object.getPrototypeOf(DocumentTypeAssembler)).apply(this, arguments));
        }

        _createClass(DocumentTypeAssembler, [{
            key: 'create',

            /**
             * @param {*} init
             * @returns {init}
             */
            value: function create(init) {
                return (typeof init === 'undefined' ? 'undefined' : _typeof(init)) === _const.TYPE_STRING ? _get(DocumentTypeAssembler.prototype.__proto__ || Object.getPrototypeOf(DocumentTypeAssembler.prototype), 'create', this).call(this, { qualifiedName: init }) : _get(DocumentTypeAssembler.prototype.__proto__ || Object.getPrototypeOf(DocumentTypeAssembler.prototype), 'create', this).call(this, init);
            }

            /**
             * Create the specified DocumentType node
             * @param {String} [qualifiedName]
             * @param {String} [publicId]
             * @param {String} [systemId]
             * @returns {DocumentType}
             */

        }, {
            key: 'parentNode',

            /**
             * @param {*} parentNode
             */
            set: function set(parentNode) {
                if (parentNode instanceof _document.DocumentAssembler) {
                    parentNode.doctype = this;
                } else {
                    var node = this.node;
                    var firstChild = parentNode.firstChild;
                    if (firstChild) {
                        if (firstChild instanceof DocumentType) {
                            parentNode.replaceChild(node, firstChild);
                        } else parentNode.insertBefore(node, firstChild);
                    } else parentNode.appendChild(node);
                }
            }

            /**
             * @returns {*}
             */

            , get: function get() {
                return _get(DocumentTypeAssembler.prototype.__proto__ || Object.getPrototypeOf(DocumentTypeAssembler.prototype), 'parentNode', this);
            }
        }], [{
            key: 'create',
            value: function create() {
                var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this,
                    _ref$qualifiedName = _ref.qualifiedName,
                    qualifiedName = _ref$qualifiedName === undefined ? this.qualifiedName : _ref$qualifiedName,
                    _ref$publicId = _ref.publicId,
                    publicId = _ref$publicId === undefined ? this.publicId : _ref$publicId,
                    _ref$systemId = _ref.systemId,
                    systemId = _ref$systemId === undefined ? this.systemId : _ref$systemId;

                return implementation.createDocumentType(qualifiedName, publicId, systemId);
            }

            /**
             * @returns {String}
             */

        }, {
            key: 'qualifiedName',
            get: function get() {
                return this.documentAssembler.qualifiedName;
            }

            /**
             * @returns {String}
             */

        }, {
            key: 'publicId',
            get: function get() {
                return DEFAULT_PUBLIC_ID;
            }

            /**
             * @returns {String}
             */

        }, {
            key: 'systemId',
            get: function get() {
                return DEFAULT_SYSTEM_ID;
            }

            /**
             * @returns {DocumentAssembler}
             */

        }, {
            key: 'documentAssembler',
            get: function get() {
                return _document.DocumentAssembler;
            }

            /**
             * @returns {Function}
             */

        }, {
            key: 'interface',
            get: function get() {
                return DocumentType;
            }
        }]);

        return DocumentTypeAssembler;
    }(_childnode.ChildNodeAssembler);

    /**
     * DocumentType assembler factory
     * @param {Node|{}|String} [init]
     * @returns {DocumentTypeAssembler}
     */

    function doctype() {
        for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
            init[_key] = arguments[_key];
        }

        return new (Function.prototype.bind.apply(DocumentTypeAssembler, [null].concat(init)))();
    }

    /***/
},
/* 8 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.NodeAssembler = undefined;

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    var _get = function get(object, property, receiver) {
        if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);if (parent === null) {
                return undefined;
            } else {
                return get(parent, property, receiver);
            }
        } else if ("value" in desc) {
            return desc.value;
        } else {
            var getter = desc.get;if (getter === undefined) {
                return undefined;
            }return getter.call(receiver);
        }
    };

    var _eventtarget = __webpack_require__(9);

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var _window = window,
        Node = _window.Node;

    /**
     * Node DOM interface assembler
     */

    var NodeAssembler = exports.NodeAssembler = function (_EventTargetAssembler) {
        _inherits(NodeAssembler, _EventTargetAssembler);

        function NodeAssembler() {
            _classCallCheck(this, NodeAssembler);

            return _possibleConstructorReturn(this, (NodeAssembler.__proto__ || Object.getPrototypeOf(NodeAssembler)).apply(this, arguments));
        }

        _createClass(NodeAssembler, [{
            key: 'assemble',

            /**
             * @param {*} init
             * @returns {Node|*}
             */
            value: function assemble(init) {
                if (init && init.constructor === Object && init.node instanceof Node) {
                    this.node = init.node;
                    this.init(init);
                } else _get(NodeAssembler.prototype.__proto__ || Object.getPrototypeOf(NodeAssembler.prototype), 'assemble', this).call(this, init);
                return this.node;
            }

            /**
             * @param {Node|*|null} node
             * @param {Function} [assembler]
             * @returns {TargetAssembler|*}
             */

        }, {
            key: 'getInstance',
            value: function getInstance(node, assembler) {
                if (node) {
                    var _constructor = this.constructor;
                    if (_constructor.hasInstance(node)) {
                        return _constructor.getInstance(node);
                    } else {
                        return assembler ? new assembler({ node: node }) : _constructor.getInstance(node);
                    }
                }
                return null;
            }

            /**
             * @param {Node|*} node
             */

        }, {
            key: 'node',
            set: function set(node) {
                if (node !== this.node) {
                    var _constructor2 = this.constructor;
                    if (node instanceof _constructor2.interface) this.setInstance(node);else {
                        var message = 'Failed to set \'node\' on \'' + _constructor2.name + '\': parameter is not of expected type.';
                        throw TypeError(message);
                    }
                }
            }

            /**
             * @returns {Node|*}
             */

            , get: function get() {
                return this._target;
            }

            /**
             * @returns {Function}
             */

        }], [{
            key: 'interface',
            get: function get() {
                return Node;
            }
        }]);

        return NodeAssembler;
    }(_eventtarget.EventTargetAssembler);

    /***/
},
/* 9 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.EventTargetAssembler = undefined;

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    var _target = __webpack_require__(10);

    var _const = __webpack_require__(0);

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var _window = window,
        CustomEvent = _window.CustomEvent,
        EventTarget = _window.EventTarget;

    var EventTargetAssembler = exports.EventTargetAssembler = function (_TargetAssembler) {
        _inherits(EventTargetAssembler, _TargetAssembler);

        function EventTargetAssembler() {
            _classCallCheck(this, EventTargetAssembler);

            return _possibleConstructorReturn(this, (EventTargetAssembler.__proto__ || Object.getPrototypeOf(EventTargetAssembler)).apply(this, arguments));
        }

        _createClass(EventTargetAssembler, [{
            key: 'on',

            /**
             * @param {String} type
             * @param {Function} callback
             * @param {Object} [capture=false]
             * @returns {EventTargetAssembler}
             */
            value: function on(type, callback) {
                var capture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

                this._target.addEventListener(type, callback, capture);
                return this;
            }

            /**
             * @param {String} type
             * @param {Function} callback
             * @param {Boolean} [capture=false]
             * @returns {EventTargetAssembler}
             */

        }, {
            key: 'un',
            value: function un(type, callback) {
                var capture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

                this._target.removeEventListener(type, callback, capture);
                return this;
            }

            /**
             * @param {String} eventType
             * @param {CustomEventInit|{}} [eventInit]
             */

        }, {
            key: 'emit',
            value: function emit(eventType, eventInit) {
                var event = new CustomEvent(eventType, eventInit);
                this._target.dispatchEvent(event);
            }

            /**
             * @returns {Function}
             */

        }], [{
            key: 'interface',
            get: function get() {
                return EventTarget;
            }
        }]);

        return EventTargetAssembler;
    }(_target.TargetAssembler);

    Object.defineProperty(EventTarget.prototype, _const.INSTANCE_PROPERTY_NAME, {
        writable: true,
        value: null
    });

    /***/
},
/* 10 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.TargetAssembler = undefined;

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    var _const = __webpack_require__(0);

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var TargetAssembler = function () {
        /**
         * Create the assembler instance and assemble the specified object
         * Initializes the object by all passed init arguments
         * @param {*} [init]
         */
        function TargetAssembler(init) {
            _classCallCheck(this, TargetAssembler);

            this.assemble(init);
        }

        /**
         * Instantiate and initialize the specified object
         * @param {*} [init] initializing dictionary
         * @returns {Object|*}
         */

        _createClass(TargetAssembler, [{
            key: 'assemble',
            value: function assemble(init) {
                this.create(init);
                this.init(init);
                return this._target;
            }

            /**
             * Create the specified object
             * @param {*} [init] initializing dictionary
             * @returns {Object|*}
             */

        }, {
            key: 'create',
            value: function create(init) {
                var target = this.constructor.create(init);
                this.setInstance(target);
                return target;
            }

            /**
             * Initialize the object with the defined properties
             * @param {*} init initializing dictionary
             * @returns {Object|*} initialized node
             */

        }, {
            key: 'init',
            value: function init(_init) {
                var target = this._target;
                if (_init && _init.constructor === Object) {
                    var _constructor = this.constructor;
                    for (var prop in _init) {
                        var value = _init[prop];
                        if (value !== undefined) {
                            if (prop in _constructor) void null;else if (prop in this) this[prop] = value;else if (prop in target) target[prop] = value;else this._onMismatch(prop, value);
                        }
                    }
                }
            }

            /**
             * @param {Object|*} target
             */

        }, {
            key: 'setInstance',
            value: function setInstance(target) {
                this._target = target;
                target[_const.INSTANCE_PROPERTY_NAME] = this;
            }

            /**
             * The init property mismatch handler
             * @param {String} prop mismatched property name
             * @param {*} value mismatched property value
             */

        }, {
            key: '_onMismatch',
            value: function _onMismatch(prop, value) {
                var propval = prop + ('="' + value + '"');
                var name = this.constructor.name;
                var message = 'The property ' + propval + ' is not found on the ' + name + ' instance:';
                console.warn(this, message);
            }

            /**
             * Stub for extension
             */

        }], [{
            key: 'create',
            value: function create() {
                throw Error('Could not create an abstract ' + this.name + ' instance');
            }

            /**
             * @param {Object|*} target
             * @returns {Boolean}
             */

        }, {
            key: 'hasInstance',
            value: function hasInstance(target) {
                return target.hasOwnProperty(_const.INSTANCE_PROPERTY_NAME);
            }

            /**
             * @param {Object|*} target
             * @returns {TargetAssembler|*|null}
             */

        }, {
            key: 'getInstance',
            value: function getInstance(target) {
                return target[_const.INSTANCE_PROPERTY_NAME];
            }
        }]);

        return TargetAssembler;
    }();

    exports.TargetAssembler = TargetAssembler;

    Object.defineProperty(TargetAssembler.prototype, '_target', {
        writable: true,
        value: null
    });

    /***/
},
/* 11 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.CommentAssembler = undefined;

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    exports.comment = comment;

    var _characterdata = __webpack_require__(5);

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var _window = window,
        Comment = _window.Comment,
        document = _window.document;

    /**
     * Comment DOM node assembler
     */

    var CommentAssembler = exports.CommentAssembler = function (_CharacterDataAssembl) {
        _inherits(CommentAssembler, _CharacterDataAssembl);

        function CommentAssembler() {
            _classCallCheck(this, CommentAssembler);

            return _possibleConstructorReturn(this, (CommentAssembler.__proto__ || Object.getPrototypeOf(CommentAssembler)).apply(this, arguments));
        }

        _createClass(CommentAssembler, null, [{
            key: 'create',

            /**
             * Create the specified Comment node
             * @param {String} data
             * @returns {Comment}
             */
            value: function create() {
                var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this,
                    _ref$data = _ref.data,
                    data = _ref$data === undefined ? this.data : _ref$data;

                return document.createComment(data);
            }

            /**
             * @returns {Function}
             */

        }, {
            key: 'interface',
            get: function get() {
                return Comment;
            }
        }]);

        return CommentAssembler;
    }(_characterdata.CharacterDataAssembler);

    /**
     * Comment assembler factory
     * @param {{}|Node|String|NodeAssembler|Array} [init]
     * @returns {CommentAssembler}
     */

    function comment() {
        for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
            init[_key] = arguments[_key];
        }

        return new (Function.prototype.bind.apply(CommentAssembler, [null].concat(init)))();
    }

    /***/
},
/* 12 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.DocumentFragmentAssembler = undefined;

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    exports.fragment = fragment;

    var _parentnode = __webpack_require__(4);

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var _window = window,
        DocumentFragment = _window.DocumentFragment,
        document = _window.document;

    /**
     * DocumentFragment DOM node assembler
     */

    var DocumentFragmentAssembler = exports.DocumentFragmentAssembler = function (_ParentNodeAssembler) {
        _inherits(DocumentFragmentAssembler, _ParentNodeAssembler);

        function DocumentFragmentAssembler() {
            _classCallCheck(this, DocumentFragmentAssembler);

            return _possibleConstructorReturn(this, (DocumentFragmentAssembler.__proto__ || Object.getPrototypeOf(DocumentFragmentAssembler)).apply(this, arguments));
        }

        _createClass(DocumentFragmentAssembler, null, [{
            key: 'create',

            /**
             * Create a new DocumentFragment node
             * @returns {DocumentFragment}
             */
            value: function create() {
                return document.createDocumentFragment();
            }

            /**
             * @returns {Function}
             */

        }, {
            key: 'interface',
            get: function get() {
                return DocumentFragment;
            }
        }]);

        return DocumentFragmentAssembler;
    }(_parentnode.ParentNodeAssembler);

    /**
     * DocumentFragment assembler factory
     * @param {{}|*} [init]
     * @returns {DocumentFragmentAssembler}
     */

    function fragment() {
        for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
            init[_key] = arguments[_key];
        }

        return new (Function.prototype.bind.apply(DocumentFragmentAssembler, [null].concat(init)))();
    }

    /***/
},
/* 13 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.ProcessingInstructionAssembler = undefined;

    var _slicedToArray = function () {
        function sliceIterator(arr, i) {
            var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;_e = err;
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }return _arr;
        }return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    exports.instruction = instruction;

    var _characterdata = __webpack_require__(5);

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var keys = Object.keys;
    var _window = window,
        ProcessingInstruction = _window.ProcessingInstruction,
        document = _window.document;

    var PI_ATTRIBUTES_SEPARATOR = ' ';
    var PI_ATTRIBUTES_SEPARATOR_RE = /\s+/;

    /**
     * ProcessingInstruction DOM node assembler
     */

    var ProcessingInstructionAssembler = exports.ProcessingInstructionAssembler = function (_CharacterDataAssembl) {
        _inherits(ProcessingInstructionAssembler, _CharacterDataAssembl);

        function ProcessingInstructionAssembler() {
            _classCallCheck(this, ProcessingInstructionAssembler);

            return _possibleConstructorReturn(this, (ProcessingInstructionAssembler.__proto__ || Object.getPrototypeOf(ProcessingInstructionAssembler)).apply(this, arguments));
        }

        _createClass(ProcessingInstructionAssembler, [{
            key: 'attrset',

            /**
             * @param {{}} attrset
             */
            set: function set(attrset) {
                var result = [];
                keys(attrset).forEach(function (key) {
                    if (key) result.push(key + ('="' + attrset[key] + '"'));
                });
                this.data = result.join(PI_ATTRIBUTES_SEPARATOR);
            }

            /**
             * @returns {{}}
             */

            , get: function get() {
                var data = this.data.split(PI_ATTRIBUTES_SEPARATOR_RE);
                return data.reduce(function (res, pair) {
                    var _pair$split = pair.split('='),
                        _pair$split2 = _slicedToArray(_pair$split, 2),
                        key = _pair$split2[0],
                        value = _pair$split2[1];

                    res[key] = value.substr(1, value.length - 2);
                    return res;
                }, {});
            }

            /**
             * Create the specified ProcessingInstruction node
             * @param {String} [target]
             * @param {String} [data]
             * @returns {ProcessingInstruction}
             */

        }], [{
            key: 'create',
            value: function create() {
                var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this,
                    _ref$target = _ref.target,
                    target = _ref$target === undefined ? this.target : _ref$target,
                    _ref$data = _ref.data,
                    data = _ref$data === undefined ? this.data : _ref$data;

                return document.createProcessingInstruction(target, data);
            }

            /**
             * The processing instruction default target
             * @returns {String}
             */

        }, {
            key: 'target',
            get: function get() {
                return this === ProcessingInstructionAssembler ? instruction.name : this.name.toLowerCase();
            }

            /**
             * @returns {Function}
             */

        }, {
            key: 'interface',
            get: function get() {
                return ProcessingInstruction;
            }
        }]);

        return ProcessingInstructionAssembler;
    }(_characterdata.CharacterDataAssembler);

    /**
     * ProcessingInstruction assembler factory (alias)
     * @param {{}|Node|String|NodeAssembler|Array} [init]
     * @returns {ProcessingInstructionAssembler}
     */

    function instruction() {
        for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
            init[_key] = arguments[_key];
        }

        return new (Function.prototype.bind.apply(ProcessingInstructionAssembler, [null].concat(init)))();
    }

    /***/
},
/* 14 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.TextAssembler = undefined;

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    exports.text = text;

    var _characterdata = __webpack_require__(5);

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var _window = window,
        Text = _window.Text,
        document = _window.document;

    /**
     * Text DOM node assembler
     */

    var TextAssembler = exports.TextAssembler = function (_CharacterDataAssembl) {
        _inherits(TextAssembler, _CharacterDataAssembl);

        function TextAssembler() {
            _classCallCheck(this, TextAssembler);

            return _possibleConstructorReturn(this, (TextAssembler.__proto__ || Object.getPrototypeOf(TextAssembler)).apply(this, arguments));
        }

        _createClass(TextAssembler, null, [{
            key: 'create',

            /**
             * Create the specified Text node
             * @param {String} data
             * @returns {Text}
             */
            value: function create() {
                var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this,
                    _ref$data = _ref.data,
                    data = _ref$data === undefined ? this.data : _ref$data;

                return document.createTextNode(data);
            }

            /**
             * @returns {Function}
             */

        }, {
            key: 'interface',
            get: function get() {
                return Text;
            }
        }]);

        return TextAssembler;
    }(_characterdata.CharacterDataAssembler);

    /**
     * Text assembler factory
     * @param {{}|Node|String|NodeAssembler|Array} [init]
     * @returns {TextAssembler}
     */

    function text() {
        for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
            init[_key] = arguments[_key];
        }

        return new (Function.prototype.bind.apply(TextAssembler, [null].concat(init)))();
    }

    /***/
},
/* 15 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _attr = __webpack_require__(6);

    Object.keys(_attr).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _attr[key];
            }
        });
    });

    var _characterdata = __webpack_require__(5);

    Object.keys(_characterdata).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _characterdata[key];
            }
        });
    });

    var _childnode = __webpack_require__(3);

    Object.keys(_childnode).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _childnode[key];
            }
        });
    });

    var _comment = __webpack_require__(11);

    Object.keys(_comment).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _comment[key];
            }
        });
    });

    var _doctype = __webpack_require__(7);

    Object.keys(_doctype).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _doctype[key];
            }
        });
    });

    var _document = __webpack_require__(2);

    Object.keys(_document).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _document[key];
            }
        });
    });

    var _element = __webpack_require__(1);

    Object.keys(_element).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _element[key];
            }
        });
    });

    var _eventtarget = __webpack_require__(9);

    Object.keys(_eventtarget).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _eventtarget[key];
            }
        });
    });

    var _fragment = __webpack_require__(12);

    Object.keys(_fragment).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _fragment[key];
            }
        });
    });

    var _instruction = __webpack_require__(13);

    Object.keys(_instruction).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _instruction[key];
            }
        });
    });

    var _node = __webpack_require__(8);

    Object.keys(_node).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _node[key];
            }
        });
    });

    var _parentnode = __webpack_require__(4);

    Object.keys(_parentnode).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _parentnode[key];
            }
        });
    });

    var _target = __webpack_require__(10);

    Object.keys(_target).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _target[key];
            }
        });
    });

    var _text = __webpack_require__(14);

    Object.keys(_text).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _text[key];
            }
        });
    });

    __webpack_require__(16);

    /***/
},
/* 16 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.nodeTypeMap = undefined;

    var _nodeTypeMap;

    var _const = __webpack_require__(0);

    var _attr = __webpack_require__(6);

    var _comment = __webpack_require__(11);

    var _document = __webpack_require__(2);

    var _fragment = __webpack_require__(12);

    var _doctype = __webpack_require__(7);

    var _element = __webpack_require__(1);

    var _instruction = __webpack_require__(13);

    var _text = __webpack_require__(14);

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
        } else {
            obj[key] = value;
        }return obj;
    }

    var defineProperty = Object.defineProperty;
    var _window = window,
        Node = _window.Node;
    var nodeTypeMap = exports.nodeTypeMap = (_nodeTypeMap = {}, _defineProperty(_nodeTypeMap, Node.ATTRIBUTE_NODE, _attr.AttrAssembler), _defineProperty(_nodeTypeMap, Node.ELEMENT_NODE, _element.ElementAssembler), _defineProperty(_nodeTypeMap, Node.COMMENT_NODE, _comment.CommentAssembler), _defineProperty(_nodeTypeMap, Node.DOCUMENT_FRAGMENT_NODE, _fragment.DocumentFragmentAssembler), _defineProperty(_nodeTypeMap, Node.DOCUMENT_NODE, _document.DocumentAssembler), _defineProperty(_nodeTypeMap, Node.DOCUMENT_TYPE_NODE, _doctype.DocumentTypeAssembler), _defineProperty(_nodeTypeMap, Node.PROCESSING_INSTRUCTION_NODE, _instruction.ProcessingInstructionAssembler), _defineProperty(_nodeTypeMap, Node.TEXT_NODE, _text.TextAssembler), _nodeTypeMap);

    defineProperty(Node.prototype, _const.INSTANCE_PROPERTY_NAME, {
        configurable: true,
        get: function get() {
            var assembler = nodeTypeMap[this.nodeType];
            return this[_const.INSTANCE_PROPERTY_NAME] = new assembler({ node: this });
        },
        set: function set(value) {
            defineProperty(this, _const.INSTANCE_PROPERTY_NAME, { writable: true, value: value });
        }
    });

    /*
     * This is a workaround for the JSDOM's issue #1641:
     *  https://github.com/tmpvar/jsdom/issues/1641
     * todo: remove when the problem is solved
     */
    defineProperty(window.Attr.prototype, _const.INSTANCE_PROPERTY_NAME, {
        configurable: true,
        get: function get() {
            return this[_const.INSTANCE_PROPERTY_NAME] = new _attr.AttrAssembler({ node: this });
        },
        set: function set(value) {
            defineProperty(this, _const.INSTANCE_PROPERTY_NAME, { writable: true, value: value });
        }
    });

    /***/
}]
/******/);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Html = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.html = html;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _window = window,
    HTMLHtmlElement = _window.HTMLHtmlElement;

var Html = exports.Html = function (_HTMLElementAssembler) {
    _inherits(Html, _HTMLElementAssembler);

    function Html() {
        _classCallCheck(this, Html);

        return _possibleConstructorReturn(this, (Html.__proto__ || Object.getPrototypeOf(Html)).apply(this, arguments));
    }

    _createClass(Html, null, [{
        key: 'interface',
        get: function get() {
            return HTMLHtmlElement;
        }
    }]);

    return Html;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Html}
 */


function html() {
    for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
        init[_key] = arguments[_key];
    }

    return new (Function.prototype.bind.apply(Html, [null].concat(init)))();
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _a = __webpack_require__(4);

Object.keys(_a).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _a[key];
    }
  });
});

var _abbr = __webpack_require__(5);

Object.keys(_abbr).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _abbr[key];
    }
  });
});

var _address = __webpack_require__(6);

Object.keys(_address).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _address[key];
    }
  });
});

var _area = __webpack_require__(7);

Object.keys(_area).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _area[key];
    }
  });
});

var _article = __webpack_require__(8);

Object.keys(_article).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _article[key];
    }
  });
});

var _aside = __webpack_require__(9);

Object.keys(_aside).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _aside[key];
    }
  });
});

var _audio = __webpack_require__(10);

Object.keys(_audio).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _audio[key];
    }
  });
});

var _b = __webpack_require__(11);

Object.keys(_b).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _b[key];
    }
  });
});

var _base = __webpack_require__(12);

Object.keys(_base).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _base[key];
    }
  });
});

var _bdi = __webpack_require__(13);

Object.keys(_bdi).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _bdi[key];
    }
  });
});

var _bdo = __webpack_require__(14);

Object.keys(_bdo).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _bdo[key];
    }
  });
});

var _blockquote = __webpack_require__(15);

Object.keys(_blockquote).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _blockquote[key];
    }
  });
});

var _body = __webpack_require__(16);

Object.keys(_body).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _body[key];
    }
  });
});

var _br = __webpack_require__(17);

Object.keys(_br).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _br[key];
    }
  });
});

var _button = __webpack_require__(18);

Object.keys(_button).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _button[key];
    }
  });
});

var _canvas = __webpack_require__(19);

Object.keys(_canvas).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _canvas[key];
    }
  });
});

var _caption = __webpack_require__(20);

Object.keys(_caption).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _caption[key];
    }
  });
});

var _cite = __webpack_require__(21);

Object.keys(_cite).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _cite[key];
    }
  });
});

var _code = __webpack_require__(22);

Object.keys(_code).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _code[key];
    }
  });
});

var _col = __webpack_require__(23);

Object.keys(_col).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _col[key];
    }
  });
});

var _colgroup = __webpack_require__(24);

Object.keys(_colgroup).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _colgroup[key];
    }
  });
});

var _data = __webpack_require__(25);

Object.keys(_data).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _data[key];
    }
  });
});

var _datalist = __webpack_require__(26);

Object.keys(_datalist).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _datalist[key];
    }
  });
});

var _dd = __webpack_require__(27);

Object.keys(_dd).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _dd[key];
    }
  });
});

var _del = __webpack_require__(28);

Object.keys(_del).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _del[key];
    }
  });
});

var _details = __webpack_require__(29);

Object.keys(_details).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _details[key];
    }
  });
});

var _dfn = __webpack_require__(30);

Object.keys(_dfn).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _dfn[key];
    }
  });
});

var _dialog = __webpack_require__(31);

Object.keys(_dialog).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _dialog[key];
    }
  });
});

var _div = __webpack_require__(32);

Object.keys(_div).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _div[key];
    }
  });
});

var _dl = __webpack_require__(33);

Object.keys(_dl).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _dl[key];
    }
  });
});

var _document = __webpack_require__(34);

Object.keys(_document).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _document[key];
    }
  });
});

var _dt = __webpack_require__(35);

Object.keys(_dt).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _dt[key];
    }
  });
});

var _element = __webpack_require__(0);

Object.keys(_element).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _element[key];
    }
  });
});

var _em = __webpack_require__(36);

Object.keys(_em).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _em[key];
    }
  });
});

var _embed = __webpack_require__(37);

Object.keys(_embed).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _embed[key];
    }
  });
});

var _fieldset = __webpack_require__(38);

Object.keys(_fieldset).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _fieldset[key];
    }
  });
});

var _figcaption = __webpack_require__(39);

Object.keys(_figcaption).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _figcaption[key];
    }
  });
});

var _figure = __webpack_require__(40);

Object.keys(_figure).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _figure[key];
    }
  });
});

var _footer = __webpack_require__(41);

Object.keys(_footer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _footer[key];
    }
  });
});

var _form = __webpack_require__(42);

Object.keys(_form).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _form[key];
    }
  });
});

var _h = __webpack_require__(43);

Object.keys(_h).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _h[key];
    }
  });
});

var _h2 = __webpack_require__(44);

Object.keys(_h2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _h2[key];
    }
  });
});

var _h3 = __webpack_require__(45);

Object.keys(_h3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _h3[key];
    }
  });
});

var _h4 = __webpack_require__(46);

Object.keys(_h4).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _h4[key];
    }
  });
});

var _h5 = __webpack_require__(47);

Object.keys(_h5).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _h5[key];
    }
  });
});

var _h6 = __webpack_require__(48);

Object.keys(_h6).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _h6[key];
    }
  });
});

var _head = __webpack_require__(49);

Object.keys(_head).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _head[key];
    }
  });
});

var _header = __webpack_require__(50);

Object.keys(_header).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _header[key];
    }
  });
});

var _hgroup = __webpack_require__(51);

Object.keys(_hgroup).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _hgroup[key];
    }
  });
});

var _hr = __webpack_require__(52);

Object.keys(_hr).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _hr[key];
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

var _i = __webpack_require__(53);

Object.keys(_i).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _i[key];
    }
  });
});

var _iframe = __webpack_require__(54);

Object.keys(_iframe).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _iframe[key];
    }
  });
});

var _img = __webpack_require__(55);

Object.keys(_img).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _img[key];
    }
  });
});

var _input = __webpack_require__(56);

Object.keys(_input).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _input[key];
    }
  });
});

var _ins = __webpack_require__(57);

Object.keys(_ins).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ins[key];
    }
  });
});

var _kbd = __webpack_require__(58);

Object.keys(_kbd).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _kbd[key];
    }
  });
});

var _label = __webpack_require__(59);

Object.keys(_label).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _label[key];
    }
  });
});

var _legend = __webpack_require__(60);

Object.keys(_legend).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _legend[key];
    }
  });
});

var _li = __webpack_require__(61);

Object.keys(_li).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _li[key];
    }
  });
});

var _link = __webpack_require__(62);

Object.keys(_link).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _link[key];
    }
  });
});

var _main = __webpack_require__(63);

Object.keys(_main).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _main[key];
    }
  });
});

var _map = __webpack_require__(64);

Object.keys(_map).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _map[key];
    }
  });
});

var _mark = __webpack_require__(65);

Object.keys(_mark).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _mark[key];
    }
  });
});

var _menu = __webpack_require__(66);

Object.keys(_menu).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _menu[key];
    }
  });
});

var _meta = __webpack_require__(67);

Object.keys(_meta).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _meta[key];
    }
  });
});

var _meter = __webpack_require__(68);

Object.keys(_meter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _meter[key];
    }
  });
});

var _nav = __webpack_require__(69);

Object.keys(_nav).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _nav[key];
    }
  });
});

var _noscript = __webpack_require__(70);

Object.keys(_noscript).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _noscript[key];
    }
  });
});

var _object = __webpack_require__(71);

Object.keys(_object).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _object[key];
    }
  });
});

var _ol = __webpack_require__(72);

Object.keys(_ol).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ol[key];
    }
  });
});

var _optgroup = __webpack_require__(73);

Object.keys(_optgroup).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _optgroup[key];
    }
  });
});

var _option = __webpack_require__(74);

Object.keys(_option).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _option[key];
    }
  });
});

var _output = __webpack_require__(75);

Object.keys(_output).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _output[key];
    }
  });
});

var _p = __webpack_require__(76);

Object.keys(_p).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _p[key];
    }
  });
});

var _param = __webpack_require__(77);

Object.keys(_param).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _param[key];
    }
  });
});

var _picture = __webpack_require__(78);

Object.keys(_picture).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _picture[key];
    }
  });
});

var _pre = __webpack_require__(79);

Object.keys(_pre).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _pre[key];
    }
  });
});

var _progress = __webpack_require__(80);

Object.keys(_progress).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _progress[key];
    }
  });
});

var _q = __webpack_require__(81);

Object.keys(_q).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _q[key];
    }
  });
});

var _rp = __webpack_require__(82);

Object.keys(_rp).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _rp[key];
    }
  });
});

var _rt = __webpack_require__(83);

Object.keys(_rt).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _rt[key];
    }
  });
});

var _ruby = __webpack_require__(84);

Object.keys(_ruby).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ruby[key];
    }
  });
});

var _s = __webpack_require__(85);

Object.keys(_s).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _s[key];
    }
  });
});

var _samp = __webpack_require__(86);

Object.keys(_samp).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _samp[key];
    }
  });
});

var _script = __webpack_require__(87);

Object.keys(_script).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _script[key];
    }
  });
});

var _section = __webpack_require__(88);

Object.keys(_section).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _section[key];
    }
  });
});

var _select = __webpack_require__(89);

Object.keys(_select).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _select[key];
    }
  });
});

var _small = __webpack_require__(90);

Object.keys(_small).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _small[key];
    }
  });
});

var _source = __webpack_require__(91);

Object.keys(_source).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _source[key];
    }
  });
});

var _span = __webpack_require__(92);

Object.keys(_span).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _span[key];
    }
  });
});

var _strong = __webpack_require__(93);

Object.keys(_strong).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _strong[key];
    }
  });
});

var _style = __webpack_require__(94);

Object.keys(_style).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _style[key];
    }
  });
});

var _sub = __webpack_require__(95);

Object.keys(_sub).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _sub[key];
    }
  });
});

var _summary = __webpack_require__(96);

Object.keys(_summary).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _summary[key];
    }
  });
});

var _sup = __webpack_require__(97);

Object.keys(_sup).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _sup[key];
    }
  });
});

var _table = __webpack_require__(98);

Object.keys(_table).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _table[key];
    }
  });
});

var _tbody = __webpack_require__(99);

Object.keys(_tbody).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _tbody[key];
    }
  });
});

var _td = __webpack_require__(100);

Object.keys(_td).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _td[key];
    }
  });
});

var _template = __webpack_require__(101);

Object.keys(_template).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _template[key];
    }
  });
});

var _textarea = __webpack_require__(102);

Object.keys(_textarea).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _textarea[key];
    }
  });
});

var _tfoot = __webpack_require__(103);

Object.keys(_tfoot).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _tfoot[key];
    }
  });
});

var _th = __webpack_require__(104);

Object.keys(_th).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _th[key];
    }
  });
});

var _thead = __webpack_require__(105);

Object.keys(_thead).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _thead[key];
    }
  });
});

var _time = __webpack_require__(106);

Object.keys(_time).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _time[key];
    }
  });
});

var _title = __webpack_require__(107);

Object.keys(_title).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _title[key];
    }
  });
});

var _tr = __webpack_require__(108);

Object.keys(_tr).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _tr[key];
    }
  });
});

var _track = __webpack_require__(109);

Object.keys(_track).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _track[key];
    }
  });
});

var _u = __webpack_require__(110);

Object.keys(_u).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _u[key];
    }
  });
});

var _ul = __webpack_require__(111);

Object.keys(_ul).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ul[key];
    }
  });
});

var _var = __webpack_require__(112);

Object.keys(_var).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _var[key];
    }
  });
});

var _video = __webpack_require__(113);

Object.keys(_video).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _video[key];
    }
  });
});

var _wbr = __webpack_require__(114);

Object.keys(_wbr).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _wbr[key];
    }
  });
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.A = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.a = a;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var A = exports.A = function (_HTMLElementAssembler) {
    _inherits(A, _HTMLElementAssembler);

    function A() {
        _classCallCheck(this, A);

        return _possibleConstructorReturn(this, (A.__proto__ || Object.getPrototypeOf(A)).apply(this, arguments));
    }

    _createClass(A, [{
        key: 'href',

        /**
         * @param {String} href
         */
        set: function set(href) {
            this.node.href = href;
        }

        /**
         * @returns {String}
         */
        ,
        get: function get() {
            return this.node.href;
        }

        /**
         * @param {String} target
         */

    }, {
        key: 'target',
        set: function set(target) {
            this.node.target = target;
        }

        /**
         * @returns {String}
         */
        ,
        get: function get() {
            return this.node.target;
        }

        /**
         * @param {String} rel
         */

    }, {
        key: 'rel',
        set: function set(rel) {
            this.node.rel = rel;
        }

        /**
         * @returns {String}
         */
        ,
        get: function get() {
            return this.node.rel;
        }

        /**
         * @param {String} hrefLang
         */

    }, {
        key: 'hrefLang',
        set: function set(hrefLang) {
            this.node.hrefLang = hrefLang;
        }

        /**
         * @returns {String}
         */
        ,
        get: function get() {
            return this.node.hrefLang;
        }

        /**
         * @param {String} type
         */

    }, {
        key: 'type',
        set: function set(type) {
            this.node.type = type;
        }

        /**
         * @returns {String}
         */
        ,
        get: function get() {
            return this.node.type;
        }
    }]);

    return A;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {A}
 */


function a(init) {
    return new A(init);
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Abbr = undefined;
exports.abbr = abbr;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Abbr = exports.Abbr = function (_HTMLElementAssembler) {
  _inherits(Abbr, _HTMLElementAssembler);

  function Abbr() {
    _classCallCheck(this, Abbr);

    return _possibleConstructorReturn(this, (Abbr.__proto__ || Object.getPrototypeOf(Abbr)).apply(this, arguments));
  }

  return Abbr;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Abbr}
 */


function abbr() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Abbr, [null].concat(init)))();
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Address = undefined;
exports.address = address;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Address = exports.Address = function (_HTMLElementAssembler) {
  _inherits(Address, _HTMLElementAssembler);

  function Address() {
    _classCallCheck(this, Address);

    return _possibleConstructorReturn(this, (Address.__proto__ || Object.getPrototypeOf(Address)).apply(this, arguments));
  }

  return Address;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Address}
 */


function address() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Address, [null].concat(init)))();
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Area = undefined;
exports.area = area;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Area = exports.Area = function (_HTMLElementAssembler) {
  _inherits(Area, _HTMLElementAssembler);

  function Area() {
    _classCallCheck(this, Area);

    return _possibleConstructorReturn(this, (Area.__proto__ || Object.getPrototypeOf(Area)).apply(this, arguments));
  }

  return Area;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Area}
 */


function area() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Area, [null].concat(init)))();
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Article = undefined;
exports.article = article;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Article = exports.Article = function (_HTMLElementAssembler) {
  _inherits(Article, _HTMLElementAssembler);

  function Article() {
    _classCallCheck(this, Article);

    return _possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).apply(this, arguments));
  }

  return Article;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Article}
 */


function article() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Article, [null].concat(init)))();
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Aside = undefined;
exports.aside = aside;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Aside = exports.Aside = function (_HTMLElementAssembler) {
  _inherits(Aside, _HTMLElementAssembler);

  function Aside() {
    _classCallCheck(this, Aside);

    return _possibleConstructorReturn(this, (Aside.__proto__ || Object.getPrototypeOf(Aside)).apply(this, arguments));
  }

  return Aside;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Aside}
 */


function aside() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Aside, [null].concat(init)))();
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Audio = undefined;
exports.audio = audio;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Audio = exports.Audio = function (_HTMLElementAssembler) {
  _inherits(Audio, _HTMLElementAssembler);

  function Audio() {
    _classCallCheck(this, Audio);

    return _possibleConstructorReturn(this, (Audio.__proto__ || Object.getPrototypeOf(Audio)).apply(this, arguments));
  }

  return Audio;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Audio}
 */


function audio() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Audio, [null].concat(init)))();
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.B = undefined;
exports.b = b;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var B = exports.B = function (_HTMLElementAssembler) {
  _inherits(B, _HTMLElementAssembler);

  function B() {
    _classCallCheck(this, B);

    return _possibleConstructorReturn(this, (B.__proto__ || Object.getPrototypeOf(B)).apply(this, arguments));
  }

  return B;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {B}
 */


function b() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(B, [null].concat(init)))();
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Base = undefined;
exports.base = base;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Base = exports.Base = function (_HTMLElementAssembler) {
  _inherits(Base, _HTMLElementAssembler);

  function Base() {
    _classCallCheck(this, Base);

    return _possibleConstructorReturn(this, (Base.__proto__ || Object.getPrototypeOf(Base)).apply(this, arguments));
  }

  return Base;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Base}
 */


function base() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Base, [null].concat(init)))();
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bdi = undefined;
exports.bdi = bdi;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bdi = exports.Bdi = function (_HTMLElementAssembler) {
  _inherits(Bdi, _HTMLElementAssembler);

  function Bdi() {
    _classCallCheck(this, Bdi);

    return _possibleConstructorReturn(this, (Bdi.__proto__ || Object.getPrototypeOf(Bdi)).apply(this, arguments));
  }

  return Bdi;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Bdi}
 */


function bdi() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Bdi, [null].concat(init)))();
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bdo = undefined;
exports.bdo = bdo;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bdo = exports.Bdo = function (_HTMLElementAssembler) {
  _inherits(Bdo, _HTMLElementAssembler);

  function Bdo() {
    _classCallCheck(this, Bdo);

    return _possibleConstructorReturn(this, (Bdo.__proto__ || Object.getPrototypeOf(Bdo)).apply(this, arguments));
  }

  return Bdo;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Bdo}
 */


function bdo() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Bdo, [null].concat(init)))();
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlockQuote = undefined;
exports.blockquote = blockquote;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlockQuote = exports.BlockQuote = function (_HTMLElementAssembler) {
  _inherits(BlockQuote, _HTMLElementAssembler);

  function BlockQuote() {
    _classCallCheck(this, BlockQuote);

    return _possibleConstructorReturn(this, (BlockQuote.__proto__ || Object.getPrototypeOf(BlockQuote)).apply(this, arguments));
  }

  return BlockQuote;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {BlockQuote}
 */


function blockquote() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(BlockQuote, [null].concat(init)))();
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Body = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.body = body;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _window = window,
    HTMLHtmlElement = _window.HTMLHtmlElement,
    HTMLDocument = _window.HTMLDocument;


var WRONG_OWNER_DOCUMENT_ERROR = 'The ownerDocument must be an instance of the HTMLDocument class!';
var WRONG_PARENT_ELEMENT_ERROR = 'The parentElement must be an instance of the HTMLHtmlElement class!';
var NO_DOCUMENT_ELEMENT_ERROR = 'The ownerDocument must have a documentElement child node!';

var Body = exports.Body = function (_HTMLElementAssembler) {
    _inherits(Body, _HTMLElementAssembler);

    function Body() {
        _classCallCheck(this, Body);

        return _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).apply(this, arguments));
    }

    _createClass(Body, [{
        key: 'parentElement',

        /**
         * @param {HTMLHtmlElement} parentElement
         */
        set: function set(parentElement) {
            if (parentElement instanceof HTMLHtmlElement) {
                var _body = parentElement.querySelector('body');
                if (_body) parentElement.replaceChild(this.node, _body);else parentElement.appendChild(this.node);
            } else throw Error(WRONG_PARENT_ELEMENT_ERROR);
        }

        /**
         * @param {HTMLDocument} ownerDocument
         */

    }, {
        key: 'ownerDocument',
        set: function set(ownerDocument) {
            if (ownerDocument instanceof HTMLDocument) {
                var documentElement = ownerDocument.documentElement;

                if (documentElement) this.parentElement = documentElement;else throw Error(NO_DOCUMENT_ELEMENT_ERROR);
            } else throw Error(WRONG_OWNER_DOCUMENT_ERROR);
        }
    }]);

    return Body;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Body}
 */


function body(init) {
    return new Body(init);
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Br = undefined;
exports.br = br;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Br = exports.Br = function (_HTMLElementAssembler) {
  _inherits(Br, _HTMLElementAssembler);

  function Br() {
    _classCallCheck(this, Br);

    return _possibleConstructorReturn(this, (Br.__proto__ || Object.getPrototypeOf(Br)).apply(this, arguments));
  }

  return Br;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Br}
 */


function br() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Br, [null].concat(init)))();
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Button = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.button = button;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = exports.Button = function (_HTMLElementAssembler) {
    _inherits(Button, _HTMLElementAssembler);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass(Button, [{
        key: 'checkValidity',
        value: function checkValidity() {
            return this.node.checkValidity;
        }
    }, {
        key: 'reportValidity',
        value: function reportValidity() {
            return this.node.reportValidity;
        }
    }, {
        key: 'setCustomValidity',
        value: function setCustomValidity(error) {
            this.node.setCustomValidity(error);
        }
    }, {
        key: 'autofocus',
        set: function set(autofocus) {
            this.node.autofocus = autofocus;
        },
        get: function get() {
            return this.node.autofocus;
        }
    }, {
        key: 'disabled',
        set: function set(disabled) {
            this.node.disabled = disabled;
        },
        get: function get() {
            return this.node.disabled;
        }
    }, {
        key: 'form',
        get: function get() {
            return this.node.form;
        }
    }, {
        key: 'formAction',
        set: function set(formAction) {
            this.node.formAction = formAction;
        },
        get: function get() {
            return this.node.formAction;
        }
    }, {
        key: 'formEnctype',
        set: function set(formEnctype) {
            this.node.formEnctype = formEnctype;
        },
        get: function get() {
            return this.node.formEnctype;
        }
    }, {
        key: 'formMethod',
        set: function set(formMethod) {
            this.node.formMethod = formMethod;
        },
        get: function get() {
            return this.node.formMethod;
        }
    }, {
        key: 'formNoValidate',
        set: function set(formNoValidate) {
            this.node.formNoValidate = formNoValidate;
        },
        get: function get() {
            return this.node.formNoValidate;
        }
    }, {
        key: 'formTarget',
        set: function set(formTarget) {
            this.node.formTarget = formTarget;
        },
        get: function get() {
            return this.node.formTarget;
        }
    }, {
        key: 'name',
        set: function set(name) {
            this.node.name = name;
        },
        get: function get() {
            return this.node.name;
        }
    }, {
        key: 'type',
        set: function set(type) {
            this.node.type = type;
        },
        get: function get() {
            return this.node.type;
        }
    }, {
        key: 'value',
        set: function set(value) {
            this.node.value = value;
        },
        get: function get() {
            return this.node.value;
        }
    }, {
        key: 'willValidate',
        get: function get() {
            return this.node.willValidate;
        }
    }, {
        key: 'validity',
        get: function get() {
            return this.node.validity;
        }
    }, {
        key: 'validationMessage',
        get: function get() {
            return this.node.validationMessage;
        }
    }, {
        key: 'labels',
        get: function get() {
            return this.node.labels;
        }
    }]);

    return Button;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Button}
 */


function button(init) {
    return new Button(init);
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Canvas = undefined;
exports.canvas = canvas;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Canvas = exports.Canvas = function (_HTMLElementAssembler) {
  _inherits(Canvas, _HTMLElementAssembler);

  function Canvas() {
    _classCallCheck(this, Canvas);

    return _possibleConstructorReturn(this, (Canvas.__proto__ || Object.getPrototypeOf(Canvas)).apply(this, arguments));
  }

  return Canvas;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Canvas}
 */


function canvas() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Canvas, [null].concat(init)))();
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Caption = undefined;
exports.caption = caption;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Caption = exports.Caption = function (_HTMLElementAssembler) {
  _inherits(Caption, _HTMLElementAssembler);

  function Caption() {
    _classCallCheck(this, Caption);

    return _possibleConstructorReturn(this, (Caption.__proto__ || Object.getPrototypeOf(Caption)).apply(this, arguments));
  }

  return Caption;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Caption}
 */


function caption() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Caption, [null].concat(init)))();
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cite = undefined;
exports.cite = cite;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cite = exports.Cite = function (_HTMLElementAssembler) {
  _inherits(Cite, _HTMLElementAssembler);

  function Cite() {
    _classCallCheck(this, Cite);

    return _possibleConstructorReturn(this, (Cite.__proto__ || Object.getPrototypeOf(Cite)).apply(this, arguments));
  }

  return Cite;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Cite}
 */


function cite() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Cite, [null].concat(init)))();
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Code = undefined;
exports.code = code;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Code = exports.Code = function (_HTMLElementAssembler) {
  _inherits(Code, _HTMLElementAssembler);

  function Code() {
    _classCallCheck(this, Code);

    return _possibleConstructorReturn(this, (Code.__proto__ || Object.getPrototypeOf(Code)).apply(this, arguments));
  }

  return Code;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Code}
 */


function code() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Code, [null].concat(init)))();
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Col = undefined;
exports.col = col;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Col = exports.Col = function (_HTMLElementAssembler) {
  _inherits(Col, _HTMLElementAssembler);

  function Col() {
    _classCallCheck(this, Col);

    return _possibleConstructorReturn(this, (Col.__proto__ || Object.getPrototypeOf(Col)).apply(this, arguments));
  }

  return Col;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Col}
 */


function col() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Col, [null].concat(init)))();
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColGroup = undefined;
exports.colgroup = colgroup;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColGroup = exports.ColGroup = function (_HTMLElementAssembler) {
  _inherits(ColGroup, _HTMLElementAssembler);

  function ColGroup() {
    _classCallCheck(this, ColGroup);

    return _possibleConstructorReturn(this, (ColGroup.__proto__ || Object.getPrototypeOf(ColGroup)).apply(this, arguments));
  }

  return ColGroup;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {ColGroup}
 */


function colgroup() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(ColGroup, [null].concat(init)))();
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Data = undefined;
exports.data = data;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Data = exports.Data = function (_HTMLElementAssembler) {
  _inherits(Data, _HTMLElementAssembler);

  function Data() {
    _classCallCheck(this, Data);

    return _possibleConstructorReturn(this, (Data.__proto__ || Object.getPrototypeOf(Data)).apply(this, arguments));
  }

  return Data;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Data}
 */


function data() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Data, [null].concat(init)))();
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataList = undefined;
exports.datalist = datalist;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DataList = exports.DataList = function (_HTMLElementAssembler) {
  _inherits(DataList, _HTMLElementAssembler);

  function DataList() {
    _classCallCheck(this, DataList);

    return _possibleConstructorReturn(this, (DataList.__proto__ || Object.getPrototypeOf(DataList)).apply(this, arguments));
  }

  return DataList;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {DataList}
 */


function datalist() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(DataList, [null].concat(init)))();
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dd = undefined;
exports.dd = dd;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dd = exports.Dd = function (_HTMLElementAssembler) {
  _inherits(Dd, _HTMLElementAssembler);

  function Dd() {
    _classCallCheck(this, Dd);

    return _possibleConstructorReturn(this, (Dd.__proto__ || Object.getPrototypeOf(Dd)).apply(this, arguments));
  }

  return Dd;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Dd}
 */


function dd() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Dd, [null].concat(init)))();
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Del = undefined;
exports.del = del;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Del = exports.Del = function (_HTMLElementAssembler) {
  _inherits(Del, _HTMLElementAssembler);

  function Del() {
    _classCallCheck(this, Del);

    return _possibleConstructorReturn(this, (Del.__proto__ || Object.getPrototypeOf(Del)).apply(this, arguments));
  }

  return Del;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Del}
 */


function del() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Del, [null].concat(init)))();
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Details = undefined;
exports.details = details;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Details = exports.Details = function (_HTMLElementAssembler) {
  _inherits(Details, _HTMLElementAssembler);

  function Details() {
    _classCallCheck(this, Details);

    return _possibleConstructorReturn(this, (Details.__proto__ || Object.getPrototypeOf(Details)).apply(this, arguments));
  }

  return Details;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Details}
 */


function details() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Details, [null].concat(init)))();
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dfn = undefined;
exports.dfn = dfn;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dfn = exports.Dfn = function (_HTMLElementAssembler) {
  _inherits(Dfn, _HTMLElementAssembler);

  function Dfn() {
    _classCallCheck(this, Dfn);

    return _possibleConstructorReturn(this, (Dfn.__proto__ || Object.getPrototypeOf(Dfn)).apply(this, arguments));
  }

  return Dfn;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Dfn}
 */


function dfn() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Dfn, [null].concat(init)))();
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dialog = undefined;
exports.dialog = dialog;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dialog = exports.Dialog = function (_HTMLElementAssembler) {
  _inherits(Dialog, _HTMLElementAssembler);

  function Dialog() {
    _classCallCheck(this, Dialog);

    return _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).apply(this, arguments));
  }

  return Dialog;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Dialog}
 */


function dialog() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Dialog, [null].concat(init)))();
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Div = undefined;
exports.div = div;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Div = exports.Div = function (_HTMLElementAssembler) {
  _inherits(Div, _HTMLElementAssembler);

  function Div() {
    _classCallCheck(this, Div);

    return _possibleConstructorReturn(this, (Div.__proto__ || Object.getPrototypeOf(Div)).apply(this, arguments));
  }

  return Div;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Div}
 */


function div(init) {
  return new Div(init);
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dl = undefined;
exports.dl = dl;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dl = exports.Dl = function (_HTMLElementAssembler) {
  _inherits(Dl, _HTMLElementAssembler);

  function Dl() {
    _classCallCheck(this, Dl);

    return _possibleConstructorReturn(this, (Dl.__proto__ || Object.getPrototypeOf(Dl)).apply(this, arguments));
  }

  return Dl;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Dl}
 */


function dl() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Dl, [null].concat(init)))();
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HTMLDocumentAssembler = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.htmlDocument = htmlDocument;

var _dommodule = __webpack_require__(1);

var _html = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _window = window,
    HTMLDocument = _window.HTMLDocument,
    implementation = _window.document.implementation;


var DEFAULT_TITLE = 'HTML document';

var HTMLDocumentAssembler = exports.HTMLDocumentAssembler = function (_DocumentAssembler) {
    _inherits(HTMLDocumentAssembler, _DocumentAssembler);

    function HTMLDocumentAssembler() {
        _classCallCheck(this, HTMLDocumentAssembler);

        return _possibleConstructorReturn(this, (HTMLDocumentAssembler.__proto__ || Object.getPrototypeOf(HTMLDocumentAssembler)).apply(this, arguments));
    }

    _createClass(HTMLDocumentAssembler, null, [{
        key: 'create',

        /**
         * @param {*} init
         * @returns {HTMLDocument}
         */
        value: function create(init) {
            var _ref = init || this,
                _ref$title = _ref.title,
                title = _ref$title === undefined ? this.title : _ref$title;

            return implementation.createHTMLDocument(title);
        }

        /**
         * @returns {String}
         */

    }, {
        key: 'title',
        get: function get() {
            return DEFAULT_TITLE;
        }

        /**
         * @returns {Html}
         */

    }, {
        key: 'elementAssembler',
        get: function get() {
            return _html.Html;
        }

        /**
         * @returns {Window.HTMLDocument}
         */

    }, {
        key: 'interface',
        get: function get() {
            return HTMLDocument;
        }
    }]);

    return HTMLDocumentAssembler;
}(_dommodule.DocumentAssembler);

/**
 * @param {*} init
 * @returns {HTMLDocumentAssembler}
 */


function htmlDocument() {
    for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
        init[_key] = arguments[_key];
    }

    return new (Function.prototype.bind.apply(HTMLDocumentAssembler, [null].concat(init)))();
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dt = undefined;
exports.dt = dt;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dt = exports.Dt = function (_HTMLElementAssembler) {
  _inherits(Dt, _HTMLElementAssembler);

  function Dt() {
    _classCallCheck(this, Dt);

    return _possibleConstructorReturn(this, (Dt.__proto__ || Object.getPrototypeOf(Dt)).apply(this, arguments));
  }

  return Dt;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Dt}
 */


function dt() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Dt, [null].concat(init)))();
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Em = undefined;
exports.em = em;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Em = exports.Em = function (_HTMLElementAssembler) {
  _inherits(Em, _HTMLElementAssembler);

  function Em() {
    _classCallCheck(this, Em);

    return _possibleConstructorReturn(this, (Em.__proto__ || Object.getPrototypeOf(Em)).apply(this, arguments));
  }

  return Em;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Em}
 */


function em() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Em, [null].concat(init)))();
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Embed = undefined;
exports.embed = embed;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Embed = exports.Embed = function (_HTMLElementAssembler) {
  _inherits(Embed, _HTMLElementAssembler);

  function Embed() {
    _classCallCheck(this, Embed);

    return _possibleConstructorReturn(this, (Embed.__proto__ || Object.getPrototypeOf(Embed)).apply(this, arguments));
  }

  return Embed;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Embed}
 */


function embed() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Embed, [null].concat(init)))();
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldSet = undefined;
exports.fieldset = fieldset;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FieldSet = exports.FieldSet = function (_HTMLElementAssembler) {
  _inherits(FieldSet, _HTMLElementAssembler);

  function FieldSet() {
    _classCallCheck(this, FieldSet);

    return _possibleConstructorReturn(this, (FieldSet.__proto__ || Object.getPrototypeOf(FieldSet)).apply(this, arguments));
  }

  return FieldSet;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {FieldSet}
 */


function fieldset() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(FieldSet, [null].concat(init)))();
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FigCaption = undefined;
exports.figcaption = figcaption;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FigCaption = exports.FigCaption = function (_HTMLElementAssembler) {
  _inherits(FigCaption, _HTMLElementAssembler);

  function FigCaption() {
    _classCallCheck(this, FigCaption);

    return _possibleConstructorReturn(this, (FigCaption.__proto__ || Object.getPrototypeOf(FigCaption)).apply(this, arguments));
  }

  return FigCaption;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {FigCaption}
 */


function figcaption() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(FigCaption, [null].concat(init)))();
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Figure = undefined;
exports.figure = figure;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Figure = exports.Figure = function (_HTMLElementAssembler) {
  _inherits(Figure, _HTMLElementAssembler);

  function Figure() {
    _classCallCheck(this, Figure);

    return _possibleConstructorReturn(this, (Figure.__proto__ || Object.getPrototypeOf(Figure)).apply(this, arguments));
  }

  return Figure;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Figure}
 */


function figure() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Figure, [null].concat(init)))();
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = undefined;
exports.footer = footer;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = exports.Footer = function (_HTMLElementAssembler) {
  _inherits(Footer, _HTMLElementAssembler);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  return Footer;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Footer}
 */


function footer() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Footer, [null].concat(init)))();
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Form = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.form = form;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = exports.Form = function (_HTMLElementAssembler) {
    _inherits(Form, _HTMLElementAssembler);

    function Form() {
        _classCallCheck(this, Form);

        return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
    }

    _createClass(Form, [{
        key: 'acceptCharset',
        set: function set(acceptCharset) {
            this.node.acceptCharset = acceptCharset;
        },
        get: function get() {
            return this.node.acceptCharset;
        }
    }, {
        key: 'action',
        set: function set(action) {
            this.node.action = action;
        },
        get: function get() {
            return this.node.action;
        }
    }, {
        key: 'autocomplete',
        set: function set(autocomplete) {
            this.node.autocomplete = autocomplete;
        },
        get: function get() {
            return this.node.autocomplete;
        }
    }, {
        key: 'enctype',
        set: function set(enctype) {
            this.node.enctype = enctype;
        },
        get: function get() {
            return this.node.enctype;
        }
    }, {
        key: 'method',
        set: function set(method) {
            this.node.method = method;
        },
        get: function get() {
            return this.node.method;
        }
    }, {
        key: 'name',
        set: function set(name) {
            this.node.name = name;
        },
        get: function get() {
            return this.node.name;
        }
    }, {
        key: 'noValidate',
        set: function set(noValidate) {
            this.node.noValidate = noValidate;
        },
        get: function get() {
            return this.node.noValidate;
        }
    }, {
        key: 'target',
        set: function set(target) {
            this.node.target = target;
        },
        get: function get() {
            return this.node.target;
        }
    }]);

    return Form;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Form}
 */


function form(init) {
    return new Form(init);
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.H1 = undefined;
exports.h1 = h1;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var H1 = exports.H1 = function (_HTMLElementAssembler) {
  _inherits(H1, _HTMLElementAssembler);

  function H1() {
    _classCallCheck(this, H1);

    return _possibleConstructorReturn(this, (H1.__proto__ || Object.getPrototypeOf(H1)).apply(this, arguments));
  }

  return H1;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {H1}
 */


function h1(init) {
  return new H1(init);
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.H2 = undefined;
exports.h2 = h2;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var H2 = exports.H2 = function (_HTMLElementAssembler) {
  _inherits(H2, _HTMLElementAssembler);

  function H2() {
    _classCallCheck(this, H2);

    return _possibleConstructorReturn(this, (H2.__proto__ || Object.getPrototypeOf(H2)).apply(this, arguments));
  }

  return H2;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {H2}
 */


function h2() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(H2, [null].concat(init)))();
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.H3 = undefined;
exports.h3 = h3;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var H3 = exports.H3 = function (_HTMLElementAssembler) {
  _inherits(H3, _HTMLElementAssembler);

  function H3() {
    _classCallCheck(this, H3);

    return _possibleConstructorReturn(this, (H3.__proto__ || Object.getPrototypeOf(H3)).apply(this, arguments));
  }

  return H3;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {H3}
 */


function h3() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(H3, [null].concat(init)))();
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.H4 = undefined;
exports.h4 = h4;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var H4 = exports.H4 = function (_HTMLElementAssembler) {
  _inherits(H4, _HTMLElementAssembler);

  function H4() {
    _classCallCheck(this, H4);

    return _possibleConstructorReturn(this, (H4.__proto__ || Object.getPrototypeOf(H4)).apply(this, arguments));
  }

  return H4;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {H4}
 */


function h4() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(H4, [null].concat(init)))();
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.H5 = undefined;
exports.h5 = h5;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var H5 = exports.H5 = function (_HTMLElementAssembler) {
  _inherits(H5, _HTMLElementAssembler);

  function H5() {
    _classCallCheck(this, H5);

    return _possibleConstructorReturn(this, (H5.__proto__ || Object.getPrototypeOf(H5)).apply(this, arguments));
  }

  return H5;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {H5}
 */


function h5() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(H5, [null].concat(init)))();
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.H6 = undefined;
exports.h6 = h6;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var H6 = exports.H6 = function (_HTMLElementAssembler) {
  _inherits(H6, _HTMLElementAssembler);

  function H6() {
    _classCallCheck(this, H6);

    return _possibleConstructorReturn(this, (H6.__proto__ || Object.getPrototypeOf(H6)).apply(this, arguments));
  }

  return H6;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {H6}
 */


function h6() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(H6, [null].concat(init)))();
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Head = undefined;
exports.head = head;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Head = exports.Head = function (_HTMLElementAssembler) {
  _inherits(Head, _HTMLElementAssembler);

  function Head() {
    _classCallCheck(this, Head);

    return _possibleConstructorReturn(this, (Head.__proto__ || Object.getPrototypeOf(Head)).apply(this, arguments));
  }

  return Head;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Head}
 */


function head() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Head, [null].concat(init)))();
}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = undefined;
exports.header = header;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = exports.Header = function (_HTMLElementAssembler) {
  _inherits(Header, _HTMLElementAssembler);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  return Header;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Header}
 */


function header() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Header, [null].concat(init)))();
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HGroup = undefined;
exports.hgroup = hgroup;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HGroup = exports.HGroup = function (_HTMLElementAssembler) {
  _inherits(HGroup, _HTMLElementAssembler);

  function HGroup() {
    _classCallCheck(this, HGroup);

    return _possibleConstructorReturn(this, (HGroup.__proto__ || Object.getPrototypeOf(HGroup)).apply(this, arguments));
  }

  return HGroup;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {HGroup}
 */


function hgroup() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(HGroup, [null].concat(init)))();
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hr = undefined;
exports.hr = hr;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hr = exports.Hr = function (_HTMLElementAssembler) {
  _inherits(Hr, _HTMLElementAssembler);

  function Hr() {
    _classCallCheck(this, Hr);

    return _possibleConstructorReturn(this, (Hr.__proto__ || Object.getPrototypeOf(Hr)).apply(this, arguments));
  }

  return Hr;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Hr}
 */


function hr() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Hr, [null].concat(init)))();
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.I = undefined;
exports.i = i;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var I = exports.I = function (_HTMLElementAssembler) {
  _inherits(I, _HTMLElementAssembler);

  function I() {
    _classCallCheck(this, I);

    return _possibleConstructorReturn(this, (I.__proto__ || Object.getPrototypeOf(I)).apply(this, arguments));
  }

  return I;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {I}
 */


function i() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(I, [null].concat(init)))();
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IFrame = undefined;
exports.iframe = iframe;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IFrame = exports.IFrame = function (_HTMLElementAssembler) {
  _inherits(IFrame, _HTMLElementAssembler);

  function IFrame() {
    _classCallCheck(this, IFrame);

    return _possibleConstructorReturn(this, (IFrame.__proto__ || Object.getPrototypeOf(IFrame)).apply(this, arguments));
  }

  return IFrame;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {IFrame}
 */


function iframe() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(IFrame, [null].concat(init)))();
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Img = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.img = img;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Img = exports.Img = function (_HTMLElementAssembler) {
    _inherits(Img, _HTMLElementAssembler);

    function Img() {
        _classCallCheck(this, Img);

        return _possibleConstructorReturn(this, (Img.__proto__ || Object.getPrototypeOf(Img)).apply(this, arguments));
    }

    _createClass(Img, [{
        key: 'src',
        set: function set(src) {
            this.node.src = src;
        },
        get: function get() {
            return this.node.src;
        }
    }, {
        key: 'alt',
        set: function set(alt) {
            this.node.alt = alt;
        },
        get: function get() {
            return this.node.alt;
        }
    }, {
        key: 'width',
        set: function set(width) {
            this.node.width = width;
        },
        get: function get() {
            return this.node.width;
        }
    }, {
        key: 'height',
        set: function set(height) {
            this.node.height = height;
        },
        get: function get() {
            return this.node.height;
        }
    }]);

    return Img;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Img}
 */


function img(init) {
    return new Img(init);
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Input = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.input = input;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = exports.Input = function (_HTMLElementAssembler) {
    _inherits(Input, _HTMLElementAssembler);

    function Input() {
        _classCallCheck(this, Input);

        return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
    }

    _createClass(Input, [{
        key: 'value',
        set: function set(value) {
            this.node.value = value;
        },
        get: function get() {
            return this.node.value;
        }
    }, {
        key: 'type',
        set: function set(type) {
            this.node.type = type;
        },
        get: function get() {
            return this.node.type;
        }
    }, {
        key: 'readOnly',
        set: function set(readOnly) {
            this.node.readOnly = readOnly;
        },
        get: function get() {
            return this.node.readOnly;
        }
    }]);

    return Input;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Input}
 */


function input(init) {
    return new Input(init);
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ins = undefined;
exports.ins = ins;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ins = exports.Ins = function (_HTMLElementAssembler) {
  _inherits(Ins, _HTMLElementAssembler);

  function Ins() {
    _classCallCheck(this, Ins);

    return _possibleConstructorReturn(this, (Ins.__proto__ || Object.getPrototypeOf(Ins)).apply(this, arguments));
  }

  return Ins;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Ins}
 */


function ins() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Ins, [null].concat(init)))();
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Kbd = undefined;
exports.kbd = kbd;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Kbd = exports.Kbd = function (_HTMLElementAssembler) {
  _inherits(Kbd, _HTMLElementAssembler);

  function Kbd() {
    _classCallCheck(this, Kbd);

    return _possibleConstructorReturn(this, (Kbd.__proto__ || Object.getPrototypeOf(Kbd)).apply(this, arguments));
  }

  return Kbd;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Kbd}
 */


function kbd() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Kbd, [null].concat(init)))();
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = undefined;
exports.label = label;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Label = exports.Label = function (_HTMLElementAssembler) {
  _inherits(Label, _HTMLElementAssembler);

  function Label() {
    _classCallCheck(this, Label);

    return _possibleConstructorReturn(this, (Label.__proto__ || Object.getPrototypeOf(Label)).apply(this, arguments));
  }

  return Label;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Label}
 */


function label(init) {
  return new Label(init);
}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Legend = undefined;
exports.legend = legend;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Legend = exports.Legend = function (_HTMLElementAssembler) {
  _inherits(Legend, _HTMLElementAssembler);

  function Legend() {
    _classCallCheck(this, Legend);

    return _possibleConstructorReturn(this, (Legend.__proto__ || Object.getPrototypeOf(Legend)).apply(this, arguments));
  }

  return Legend;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Legend}
 */


function legend() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Legend, [null].concat(init)))();
}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Li = undefined;
exports.li = li;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Li = exports.Li = function (_HTMLElementAssembler) {
  _inherits(Li, _HTMLElementAssembler);

  function Li() {
    _classCallCheck(this, Li);

    return _possibleConstructorReturn(this, (Li.__proto__ || Object.getPrototypeOf(Li)).apply(this, arguments));
  }

  return Li;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Li}
 */


function li(init) {
  return new Li(init);
}

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = undefined;
exports.link = link;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Link = exports.Link = function (_HTMLElementAssembler) {
  _inherits(Link, _HTMLElementAssembler);

  function Link() {
    _classCallCheck(this, Link);

    return _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).apply(this, arguments));
  }

  return Link;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Link}
 */


function link() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Link, [null].concat(init)))();
}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Main = undefined;
exports.main = main;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = exports.Main = function (_HTMLElementAssembler) {
  _inherits(Main, _HTMLElementAssembler);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
  }

  return Main;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Main}
 */


function main(init) {
  return new Main(init);
}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Map = undefined;
exports.map = map;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Map = exports.Map = function (_HTMLElementAssembler) {
  _inherits(Map, _HTMLElementAssembler);

  function Map() {
    _classCallCheck(this, Map);

    return _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).apply(this, arguments));
  }

  return Map;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Map}
 */


function map() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Map, [null].concat(init)))();
}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mark = undefined;
exports.mark = mark;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mark = exports.Mark = function (_HTMLElementAssembler) {
  _inherits(Mark, _HTMLElementAssembler);

  function Mark() {
    _classCallCheck(this, Mark);

    return _possibleConstructorReturn(this, (Mark.__proto__ || Object.getPrototypeOf(Mark)).apply(this, arguments));
  }

  return Mark;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Mark}
 */


function mark() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Mark, [null].concat(init)))();
}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = undefined;
exports.menu = menu;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = exports.Menu = function (_HTMLElementAssembler) {
  _inherits(Menu, _HTMLElementAssembler);

  function Menu() {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
  }

  return Menu;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Menu}
 */


function menu() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Menu, [null].concat(init)))();
}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Meta = undefined;
exports.meta = meta;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Meta = exports.Meta = function (_HTMLElementAssembler) {
  _inherits(Meta, _HTMLElementAssembler);

  function Meta() {
    _classCallCheck(this, Meta);

    return _possibleConstructorReturn(this, (Meta.__proto__ || Object.getPrototypeOf(Meta)).apply(this, arguments));
  }

  return Meta;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Meta}
 */


function meta() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Meta, [null].concat(init)))();
}

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Meter = undefined;
exports.meter = meter;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Meter = exports.Meter = function (_HTMLElementAssembler) {
  _inherits(Meter, _HTMLElementAssembler);

  function Meter() {
    _classCallCheck(this, Meter);

    return _possibleConstructorReturn(this, (Meter.__proto__ || Object.getPrototypeOf(Meter)).apply(this, arguments));
  }

  return Meter;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Meter}
 */


function meter() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Meter, [null].concat(init)))();
}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Nav = undefined;
exports.nav = nav;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = exports.Nav = function (_HTMLElementAssembler) {
  _inherits(Nav, _HTMLElementAssembler);

  function Nav() {
    _classCallCheck(this, Nav);

    return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
  }

  return Nav;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Nav}
 */


function nav() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Nav, [null].concat(init)))();
}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoScript = undefined;
exports.noscript = noscript;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NoScript = exports.NoScript = function (_HTMLElementAssembler) {
  _inherits(NoScript, _HTMLElementAssembler);

  function NoScript() {
    _classCallCheck(this, NoScript);

    return _possibleConstructorReturn(this, (NoScript.__proto__ || Object.getPrototypeOf(NoScript)).apply(this, arguments));
  }

  return NoScript;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {NoScript}
 */


function noscript() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(NoScript, [null].concat(init)))();
}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HTMLObject = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.object = object;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LOCAL_NAME = 'object';

/**
 * The `HTML` prefix is used to avoid a confilct
 * with the native `Object` class from the ECMAScript standard
 * https://tc39.github.io/ecma262/#sec-object-objects
 */

var HTMLObject = exports.HTMLObject = function (_HTMLElementAssembler) {
  _inherits(HTMLObject, _HTMLElementAssembler);

  function HTMLObject() {
    _classCallCheck(this, HTMLObject);

    return _possibleConstructorReturn(this, (HTMLObject.__proto__ || Object.getPrototypeOf(HTMLObject)).apply(this, arguments));
  }

  _createClass(HTMLObject, null, [{
    key: 'localName',

    /**
     * @returns {String}
     */
    get: function get() {
      return LOCAL_NAME;
    }
  }]);

  return HTMLObject;
}(_element.HTMLElementAssembler);

/**
 * @param {*} init
 * @returns {HTMLObject}
 */


function object() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(HTMLObject, [null].concat(init)))();
}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ol = undefined;
exports.ol = ol;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ol = exports.Ol = function (_HTMLElementAssembler) {
  _inherits(Ol, _HTMLElementAssembler);

  function Ol() {
    _classCallCheck(this, Ol);

    return _possibleConstructorReturn(this, (Ol.__proto__ || Object.getPrototypeOf(Ol)).apply(this, arguments));
  }

  return Ol;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Ol}
 */


function ol(init) {
  return new Ol(init);
}

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OptGroup = undefined;
exports.optgroup = optgroup;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OptGroup = exports.OptGroup = function (_HTMLElementAssembler) {
  _inherits(OptGroup, _HTMLElementAssembler);

  function OptGroup() {
    _classCallCheck(this, OptGroup);

    return _possibleConstructorReturn(this, (OptGroup.__proto__ || Object.getPrototypeOf(OptGroup)).apply(this, arguments));
  }

  return OptGroup;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {OptGroup}
 */


function optgroup() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(OptGroup, [null].concat(init)))();
}

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HTMLOption = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.option = option;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LOCAL_NAME = 'option';

/**
 * The `HTML` prefix is used to avoid a confilct
 * with the Option class from the HTML standard
 * https://www.w3.org/TR/html/sec-forms.html#dom-htmloptionelement-option
 */

var HTMLOption = exports.HTMLOption = function (_HTMLElementAssembler) {
  _inherits(HTMLOption, _HTMLElementAssembler);

  function HTMLOption() {
    _classCallCheck(this, HTMLOption);

    return _possibleConstructorReturn(this, (HTMLOption.__proto__ || Object.getPrototypeOf(HTMLOption)).apply(this, arguments));
  }

  _createClass(HTMLOption, null, [{
    key: 'localName',

    /**
     * @returns {String}
     */
    get: function get() {
      return LOCAL_NAME;
    }
  }]);

  return HTMLOption;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {HTMLOption}
 */


function option(init) {
  return new HTMLOption(init);
}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Output = undefined;
exports.output = output;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Output = exports.Output = function (_HTMLElementAssembler) {
  _inherits(Output, _HTMLElementAssembler);

  function Output() {
    _classCallCheck(this, Output);

    return _possibleConstructorReturn(this, (Output.__proto__ || Object.getPrototypeOf(Output)).apply(this, arguments));
  }

  return Output;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Output}
 */


function output() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Output, [null].concat(init)))();
}

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.P = undefined;
exports.p = p;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var P = exports.P = function (_HTMLElementAssembler) {
  _inherits(P, _HTMLElementAssembler);

  function P() {
    _classCallCheck(this, P);

    return _possibleConstructorReturn(this, (P.__proto__ || Object.getPrototypeOf(P)).apply(this, arguments));
  }

  return P;
}(_element.HTMLElementAssembler);

/**
 * @param {{}} init
 * @returns {P}
 */


function p(init) {
  return new P(init);
}

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Param = undefined;
exports.param = param;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Param = exports.Param = function (_HTMLElementAssembler) {
  _inherits(Param, _HTMLElementAssembler);

  function Param() {
    _classCallCheck(this, Param);

    return _possibleConstructorReturn(this, (Param.__proto__ || Object.getPrototypeOf(Param)).apply(this, arguments));
  }

  return Param;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Param}
 */


function param() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Param, [null].concat(init)))();
}

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Picture = undefined;
exports.picture = picture;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Picture = exports.Picture = function (_HTMLElementAssembler) {
  _inherits(Picture, _HTMLElementAssembler);

  function Picture() {
    _classCallCheck(this, Picture);

    return _possibleConstructorReturn(this, (Picture.__proto__ || Object.getPrototypeOf(Picture)).apply(this, arguments));
  }

  return Picture;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Picture}
 */


function picture() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Picture, [null].concat(init)))();
}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pre = undefined;
exports.pre = pre;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pre = exports.Pre = function (_HTMLElementAssembler) {
  _inherits(Pre, _HTMLElementAssembler);

  function Pre() {
    _classCallCheck(this, Pre);

    return _possibleConstructorReturn(this, (Pre.__proto__ || Object.getPrototypeOf(Pre)).apply(this, arguments));
  }

  return Pre;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Pre}
 */


function pre() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Pre, [null].concat(init)))();
}

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Progress = undefined;
exports.progress = progress;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Progress = exports.Progress = function (_HTMLElementAssembler) {
  _inherits(Progress, _HTMLElementAssembler);

  function Progress() {
    _classCallCheck(this, Progress);

    return _possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).apply(this, arguments));
  }

  return Progress;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Progress}
 */


function progress() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Progress, [null].concat(init)))();
}

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Q = undefined;
exports.q = q;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Q = exports.Q = function (_HTMLElementAssembler) {
  _inherits(Q, _HTMLElementAssembler);

  function Q() {
    _classCallCheck(this, Q);

    return _possibleConstructorReturn(this, (Q.__proto__ || Object.getPrototypeOf(Q)).apply(this, arguments));
  }

  return Q;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Q}
 */


function q() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Q, [null].concat(init)))();
}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rp = undefined;
exports.rp = rp;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rp = exports.Rp = function (_HTMLElementAssembler) {
  _inherits(Rp, _HTMLElementAssembler);

  function Rp() {
    _classCallCheck(this, Rp);

    return _possibleConstructorReturn(this, (Rp.__proto__ || Object.getPrototypeOf(Rp)).apply(this, arguments));
  }

  return Rp;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Rp}
 */


function rp() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Rp, [null].concat(init)))();
}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rt = undefined;
exports.rt = rt;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rt = exports.Rt = function (_HTMLElementAssembler) {
  _inherits(Rt, _HTMLElementAssembler);

  function Rt() {
    _classCallCheck(this, Rt);

    return _possibleConstructorReturn(this, (Rt.__proto__ || Object.getPrototypeOf(Rt)).apply(this, arguments));
  }

  return Rt;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Rt}
 */


function rt() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Rt, [null].concat(init)))();
}

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ruby = undefined;
exports.ruby = ruby;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ruby = exports.Ruby = function (_HTMLElementAssembler) {
  _inherits(Ruby, _HTMLElementAssembler);

  function Ruby() {
    _classCallCheck(this, Ruby);

    return _possibleConstructorReturn(this, (Ruby.__proto__ || Object.getPrototypeOf(Ruby)).apply(this, arguments));
  }

  return Ruby;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Ruby}
 */


function ruby() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Ruby, [null].concat(init)))();
}

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.S = undefined;
exports.s = s;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var S = exports.S = function (_HTMLElementAssembler) {
  _inherits(S, _HTMLElementAssembler);

  function S() {
    _classCallCheck(this, S);

    return _possibleConstructorReturn(this, (S.__proto__ || Object.getPrototypeOf(S)).apply(this, arguments));
  }

  return S;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {S}
 */


function s() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(S, [null].concat(init)))();
}

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Samp = undefined;
exports.samp = samp;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Samp = exports.Samp = function (_HTMLElementAssembler) {
  _inherits(Samp, _HTMLElementAssembler);

  function Samp() {
    _classCallCheck(this, Samp);

    return _possibleConstructorReturn(this, (Samp.__proto__ || Object.getPrototypeOf(Samp)).apply(this, arguments));
  }

  return Samp;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Samp}
 */


function samp() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Samp, [null].concat(init)))();
}

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Script = undefined;
exports.script = script;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Script = exports.Script = function (_HTMLElementAssembler) {
  _inherits(Script, _HTMLElementAssembler);

  function Script() {
    _classCallCheck(this, Script);

    return _possibleConstructorReturn(this, (Script.__proto__ || Object.getPrototypeOf(Script)).apply(this, arguments));
  }

  return Script;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Script}
 */


function script() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Script, [null].concat(init)))();
}

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Section = undefined;
exports.section = section;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Section = exports.Section = function (_HTMLElementAssembler) {
  _inherits(Section, _HTMLElementAssembler);

  function Section() {
    _classCallCheck(this, Section);

    return _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).apply(this, arguments));
  }

  return Section;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Section}
 */


function section() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Section, [null].concat(init)))();
}

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = undefined;
exports.select = select;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = exports.Select = function (_HTMLElementAssembler) {
  _inherits(Select, _HTMLElementAssembler);

  function Select() {
    _classCallCheck(this, Select);

    return _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));
  }

  return Select;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Select}
 */


function select(init) {
  return new Select(init);
}

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Small = undefined;
exports.small = small;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Small = exports.Small = function (_HTMLElementAssembler) {
  _inherits(Small, _HTMLElementAssembler);

  function Small() {
    _classCallCheck(this, Small);

    return _possibleConstructorReturn(this, (Small.__proto__ || Object.getPrototypeOf(Small)).apply(this, arguments));
  }

  return Small;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Small}
 */


function small() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Small, [null].concat(init)))();
}

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Source = undefined;
exports.source = source;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Source = exports.Source = function (_HTMLElementAssembler) {
  _inherits(Source, _HTMLElementAssembler);

  function Source() {
    _classCallCheck(this, Source);

    return _possibleConstructorReturn(this, (Source.__proto__ || Object.getPrototypeOf(Source)).apply(this, arguments));
  }

  return Source;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Source}
 */


function source() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Source, [null].concat(init)))();
}

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Span = undefined;
exports.span = span;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Span = exports.Span = function (_HTMLElementAssembler) {
  _inherits(Span, _HTMLElementAssembler);

  function Span() {
    _classCallCheck(this, Span);

    return _possibleConstructorReturn(this, (Span.__proto__ || Object.getPrototypeOf(Span)).apply(this, arguments));
  }

  return Span;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Span}
 */


function span(init) {
  return new Span(init);
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Strong = undefined;
exports.strong = strong;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Strong = exports.Strong = function (_HTMLElementAssembler) {
  _inherits(Strong, _HTMLElementAssembler);

  function Strong() {
    _classCallCheck(this, Strong);

    return _possibleConstructorReturn(this, (Strong.__proto__ || Object.getPrototypeOf(Strong)).apply(this, arguments));
  }

  return Strong;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Strong}
 */


function strong(init) {
  return new Strong(init);
}

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Style = undefined;
exports.style = style;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Style = exports.Style = function (_HTMLElementAssembler) {
  _inherits(Style, _HTMLElementAssembler);

  function Style() {
    _classCallCheck(this, Style);

    return _possibleConstructorReturn(this, (Style.__proto__ || Object.getPrototypeOf(Style)).apply(this, arguments));
  }

  return Style;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Style}
 */


function style() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Style, [null].concat(init)))();
}

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sub = undefined;
exports.sub = sub;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sub = exports.Sub = function (_HTMLElementAssembler) {
  _inherits(Sub, _HTMLElementAssembler);

  function Sub() {
    _classCallCheck(this, Sub);

    return _possibleConstructorReturn(this, (Sub.__proto__ || Object.getPrototypeOf(Sub)).apply(this, arguments));
  }

  return Sub;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Sub}
 */


function sub() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Sub, [null].concat(init)))();
}

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Summary = undefined;
exports.summary = summary;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Summary = exports.Summary = function (_HTMLElementAssembler) {
  _inherits(Summary, _HTMLElementAssembler);

  function Summary() {
    _classCallCheck(this, Summary);

    return _possibleConstructorReturn(this, (Summary.__proto__ || Object.getPrototypeOf(Summary)).apply(this, arguments));
  }

  return Summary;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Summary}
 */


function summary() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Summary, [null].concat(init)))();
}

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sup = undefined;
exports.sup = sup;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sup = exports.Sup = function (_HTMLElementAssembler) {
  _inherits(Sup, _HTMLElementAssembler);

  function Sup() {
    _classCallCheck(this, Sup);

    return _possibleConstructorReturn(this, (Sup.__proto__ || Object.getPrototypeOf(Sup)).apply(this, arguments));
  }

  return Sup;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Sup}
 */


function sup() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Sup, [null].concat(init)))();
}

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = undefined;
exports.table = table;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = exports.Table = function (_HTMLElementAssembler) {
  _inherits(Table, _HTMLElementAssembler);

  function Table() {
    _classCallCheck(this, Table);

    return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
  }

  return Table;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Table}
 */


function table(init) {
  return new Table(init);
}

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TBody = undefined;
exports.tbody = tbody;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TBody = exports.TBody = function (_HTMLElementAssembler) {
  _inherits(TBody, _HTMLElementAssembler);

  function TBody() {
    _classCallCheck(this, TBody);

    return _possibleConstructorReturn(this, (TBody.__proto__ || Object.getPrototypeOf(TBody)).apply(this, arguments));
  }

  return TBody;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {TBody}
 */


function tbody() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(TBody, [null].concat(init)))();
}

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Td = undefined;
exports.td = td;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Td = exports.Td = function (_HTMLElementAssembler) {
  _inherits(Td, _HTMLElementAssembler);

  function Td() {
    _classCallCheck(this, Td);

    return _possibleConstructorReturn(this, (Td.__proto__ || Object.getPrototypeOf(Td)).apply(this, arguments));
  }

  return Td;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Td}
 */


function td() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Td, [null].concat(init)))();
}

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Template = undefined;
exports.template = template;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Template = exports.Template = function (_HTMLElementAssembler) {
  _inherits(Template, _HTMLElementAssembler);

  function Template() {
    _classCallCheck(this, Template);

    return _possibleConstructorReturn(this, (Template.__proto__ || Object.getPrototypeOf(Template)).apply(this, arguments));
  }

  return Template;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Template}
 */


function template() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Template, [null].concat(init)))();
}

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextArea = undefined;
exports.textarea = textarea;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextArea = exports.TextArea = function (_HTMLElementAssembler) {
  _inherits(TextArea, _HTMLElementAssembler);

  function TextArea() {
    _classCallCheck(this, TextArea);

    return _possibleConstructorReturn(this, (TextArea.__proto__ || Object.getPrototypeOf(TextArea)).apply(this, arguments));
  }

  return TextArea;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {TextArea}
 */


function textarea() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(TextArea, [null].concat(init)))();
}

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TFoot = undefined;
exports.tfoot = tfoot;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TFoot = exports.TFoot = function (_HTMLElementAssembler) {
  _inherits(TFoot, _HTMLElementAssembler);

  function TFoot() {
    _classCallCheck(this, TFoot);

    return _possibleConstructorReturn(this, (TFoot.__proto__ || Object.getPrototypeOf(TFoot)).apply(this, arguments));
  }

  return TFoot;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {TFoot}
 */


function tfoot() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(TFoot, [null].concat(init)))();
}

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Th = undefined;
exports.th = th;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Th = exports.Th = function (_HTMLElementAssembler) {
  _inherits(Th, _HTMLElementAssembler);

  function Th() {
    _classCallCheck(this, Th);

    return _possibleConstructorReturn(this, (Th.__proto__ || Object.getPrototypeOf(Th)).apply(this, arguments));
  }

  return Th;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Th}
 */


function th() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Th, [null].concat(init)))();
}

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.THead = undefined;
exports.thead = thead;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var THead = exports.THead = function (_HTMLElementAssembler) {
  _inherits(THead, _HTMLElementAssembler);

  function THead() {
    _classCallCheck(this, THead);

    return _possibleConstructorReturn(this, (THead.__proto__ || Object.getPrototypeOf(THead)).apply(this, arguments));
  }

  return THead;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {THead}
 */


function thead() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(THead, [null].concat(init)))();
}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Time = undefined;
exports.time = time;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Time = exports.Time = function (_HTMLElementAssembler) {
  _inherits(Time, _HTMLElementAssembler);

  function Time() {
    _classCallCheck(this, Time);

    return _possibleConstructorReturn(this, (Time.__proto__ || Object.getPrototypeOf(Time)).apply(this, arguments));
  }

  return Time;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Time}
 */


function time() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Time, [null].concat(init)))();
}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = undefined;
exports.title = title;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Title = exports.Title = function (_HTMLElementAssembler) {
  _inherits(Title, _HTMLElementAssembler);

  function Title() {
    _classCallCheck(this, Title);

    return _possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).apply(this, arguments));
  }

  return Title;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Title}
 */


function title() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Title, [null].concat(init)))();
}

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tr = undefined;
exports.tr = tr;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tr = exports.Tr = function (_HTMLElementAssembler) {
  _inherits(Tr, _HTMLElementAssembler);

  function Tr() {
    _classCallCheck(this, Tr);

    return _possibleConstructorReturn(this, (Tr.__proto__ || Object.getPrototypeOf(Tr)).apply(this, arguments));
  }

  return Tr;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Tr}
 */


function tr() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Tr, [null].concat(init)))();
}

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Track = undefined;
exports.track = track;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Track = exports.Track = function (_HTMLElementAssembler) {
  _inherits(Track, _HTMLElementAssembler);

  function Track() {
    _classCallCheck(this, Track);

    return _possibleConstructorReturn(this, (Track.__proto__ || Object.getPrototypeOf(Track)).apply(this, arguments));
  }

  return Track;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Track}
 */


function track() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Track, [null].concat(init)))();
}

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.U = undefined;
exports.u = u;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var U = exports.U = function (_HTMLElementAssembler) {
  _inherits(U, _HTMLElementAssembler);

  function U() {
    _classCallCheck(this, U);

    return _possibleConstructorReturn(this, (U.__proto__ || Object.getPrototypeOf(U)).apply(this, arguments));
  }

  return U;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {U}
 */


function u() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(U, [null].concat(init)))();
}

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ul = undefined;
exports.ul = ul;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ul = exports.Ul = function (_HTMLElementAssembler) {
  _inherits(Ul, _HTMLElementAssembler);

  function Ul() {
    _classCallCheck(this, Ul);

    return _possibleConstructorReturn(this, (Ul.__proto__ || Object.getPrototypeOf(Ul)).apply(this, arguments));
  }

  return Ul;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Ul}
 */


function ul(init) {
  return new Ul(init);
}

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Var = undefined;
exports.variable = variable;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Var = exports.Var = function (_HTMLElementAssembler) {
  _inherits(Var, _HTMLElementAssembler);

  function Var() {
    _classCallCheck(this, Var);

    return _possibleConstructorReturn(this, (Var.__proto__ || Object.getPrototypeOf(Var)).apply(this, arguments));
  }

  return Var;
}(_element.HTMLElementAssembler);

/**
 * The different naming is used to avoid a confilct
 * with the legacy `var` JavaScript keyword
 *
 * @param {*} init
 * @returns {Var}
 */


function variable() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Var, [null].concat(init)))();
}

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Video = undefined;
exports.video = video;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Video = exports.Video = function (_HTMLElementAssembler) {
  _inherits(Video, _HTMLElementAssembler);

  function Video() {
    _classCallCheck(this, Video);

    return _possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).apply(this, arguments));
  }

  return Video;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Video}
 */


function video() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Video, [null].concat(init)))();
}

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wbr = undefined;
exports.wbr = wbr;

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Wbr = exports.Wbr = function (_HTMLElementAssembler) {
  _inherits(Wbr, _HTMLElementAssembler);

  function Wbr() {
    _classCallCheck(this, Wbr);

    return _possibleConstructorReturn(this, (Wbr.__proto__ || Object.getPrototypeOf(Wbr)).apply(this, arguments));
  }

  return Wbr;
}(_element.HTMLElementAssembler);

/**
 * @param {*} [init]
 * @returns {Wbr}
 */


function wbr() {
  for (var _len = arguments.length, init = Array(_len), _key = 0; _key < _len; _key++) {
    init[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Wbr, [null].concat(init)))();
}

/***/ })
/******/ ]);