(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["htmlmodule"] = factory();
	else
		root["htmlmodule"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(1);
var _defineProperty2 = _interopRequireDefault(__webpack_require__(2));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * @module htmlmodule
 * @author Vyacheslav Aristov <vv.aristov@gmail.com>
 */
exports = module.exports = _objectSpread(_objectSpread({}, __webpack_require__(3)), __webpack_require__(44));
exports.AriaType = __webpack_require__(30);
exports.Attributes = __webpack_require__(32);
exports.AttrType = __webpack_require__(12);
exports.BooleanType = __webpack_require__(13);
exports.Class = __webpack_require__(34);
exports.ClassList = __webpack_require__(35);
exports.Context = __webpack_require__(45);
exports.Dataset = __webpack_require__(36);
exports.ElemType = __webpack_require__(18);
exports.EventType = __webpack_require__(37);
exports.HtmlType = __webpack_require__(17);
exports.Id = __webpack_require__(38);
exports.InnerHTML = __webpack_require__(39);
exports.InnerText = __webpack_require__(43);
exports.PropType = __webpack_require__(33);
exports.RoleType = __webpack_require__(42);
exports.Style = __webpack_require__(40);
exports.TextType = __webpack_require__(41);
exports.TokenType = __webpack_require__(31);
exports.window = __webpack_require__(29);

/***/ }),
/* 1 */
/***/ ((module) => {



function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 2 */
/***/ ((module) => {



function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(1);
var _createClass2 = _interopRequireDefault(__webpack_require__(4));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));
var _inherits2 = _interopRequireDefault(__webpack_require__(6));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(11));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(2));
var _class, _class2, _class3, _class4, _class5, _class6, _class7, _class8, _class9, _class10, _class11, _class12, _class13, _class14, _class15, _class16, _class17, _class18, _class19, _class20, _class21, _class22, _class23, _class24, _class25, _class26, _class27, _class28, _class29, _class30, _class31, _class32, _class33, _class34, _class35, _class36, _class37, _class38, _class39, _class40, _class41, _class42, _class43, _class44, _class45, _class46, _class47, _class48, _class49, _class50, _class51, _class52, _class53, _class54, _class55, _class56, _class57, _class58, _class59, _class60, _class61, _class62, _class63, _class64, _class65, _class66, _class67, _class68, _class69, _class70, _class71, _class72, _class73, _class74, _class75, _class76, _class77, _class78, _class79, _class80, _class81, _class82, _class83, _class84, _class85, _class86, _class87, _class88, _class89, _class90, _class91, _class92, _class93, _class94, _class95, _class96, _class97, _class98, _class99, _class100, _class101, _class102, _class103, _class104, _class105, _class106, _class107, _class108, _class109, _class110, _class111;
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var AttrType = __webpack_require__(12);
var BooleanType = __webpack_require__(13);
var NumberType = __webpack_require__(16);
var HtmlType = __webpack_require__(17);
var PropType = __webpack_require__(33);
var attr = AttrType.define.bind(AttrType);
var _boolean = BooleanType.define.bind(BooleanType);
var number = NumberType.define.bind(NumberType);
exports.HtmlA = (_class = /*#__PURE__*/function (_HtmlType) {
  (0, _inherits2["default"])(HtmlA, _HtmlType);
  var _super = _createSuper(HtmlA);
  function HtmlA() {
    (0, _classCallCheck2["default"])(this, HtmlA);
    return _super.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlA);
}(HtmlType), (0, _defineProperty2["default"])(_class, "tagName", 'a'), (0, _defineProperty2["default"])(_class, "props", {
  download: attr('download'),
  hash: PropType,
  host: PropType,
  hostname: PropType,
  href: attr('href'),
  hreflang: attr('hreflang'),
  password: PropType,
  pathname: PropType,
  port: PropType,
  protocol: PropType,
  referrerPolicy: attr('referrerpolicy'),
  rel: attr('rel'),
  rev: attr('rev'),
  search: PropType,
  target: attr('target'),
  type: attr('type'),
  username: PropType
}), _class);
exports.HtmlAbbr = (_class2 = /*#__PURE__*/function (_HtmlType2) {
  (0, _inherits2["default"])(HtmlAbbr, _HtmlType2);
  var _super2 = _createSuper(HtmlAbbr);
  function HtmlAbbr() {
    (0, _classCallCheck2["default"])(this, HtmlAbbr);
    return _super2.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlAbbr);
}(HtmlType), (0, _defineProperty2["default"])(_class2, "tagName", 'abbr'), _class2);
exports.HtmlAddress = (_class3 = /*#__PURE__*/function (_HtmlType3) {
  (0, _inherits2["default"])(HtmlAddress, _HtmlType3);
  var _super3 = _createSuper(HtmlAddress);
  function HtmlAddress() {
    (0, _classCallCheck2["default"])(this, HtmlAddress);
    return _super3.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlAddress);
}(HtmlType), (0, _defineProperty2["default"])(_class3, "tagName", 'address'), _class3);
exports.HtmlArea = (_class4 = /*#__PURE__*/function (_HtmlType4) {
  (0, _inherits2["default"])(HtmlArea, _HtmlType4);
  var _super4 = _createSuper(HtmlArea);
  function HtmlArea() {
    (0, _classCallCheck2["default"])(this, HtmlArea);
    return _super4.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlArea);
}(HtmlType), (0, _defineProperty2["default"])(_class4, "tagName", 'area'), (0, _defineProperty2["default"])(_class4, "props", {
  alt: attr('alt'),
  coords: attr('coords'),
  download: attr('download'),
  hash: PropType,
  host: PropType,
  hostname: PropType,
  href: attr('href'),
  password: PropType,
  pathname: PropType,
  port: PropType,
  protocol: PropType,
  referrerPolicy: attr('referrerpolicy'),
  rel: attr('rel'),
  search: PropType,
  shape: attr('shape'),
  target: attr('target'),
  username: PropType
}), _class4);
exports.HtmlArticle = (_class5 = /*#__PURE__*/function (_HtmlType5) {
  (0, _inherits2["default"])(HtmlArticle, _HtmlType5);
  var _super5 = _createSuper(HtmlArticle);
  function HtmlArticle() {
    (0, _classCallCheck2["default"])(this, HtmlArticle);
    return _super5.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlArticle);
}(HtmlType), (0, _defineProperty2["default"])(_class5, "tagName", 'article'), _class5);
exports.HtmlAside = (_class6 = /*#__PURE__*/function (_HtmlType6) {
  (0, _inherits2["default"])(HtmlAside, _HtmlType6);
  var _super6 = _createSuper(HtmlAside);
  function HtmlAside() {
    (0, _classCallCheck2["default"])(this, HtmlAside);
    return _super6.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlAside);
}(HtmlType), (0, _defineProperty2["default"])(_class6, "tagName", 'aside'), _class6);
exports.HtmlAudio = (_class7 = /*#__PURE__*/function (_HtmlType7) {
  (0, _inherits2["default"])(HtmlAudio, _HtmlType7);
  var _super7 = _createSuper(HtmlAudio);
  function HtmlAudio() {
    (0, _classCallCheck2["default"])(this, HtmlAudio);
    return _super7.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlAudio);
}(HtmlType), (0, _defineProperty2["default"])(_class7, "tagName", 'audio'), (0, _defineProperty2["default"])(_class7, "props", {
  autoplay: _boolean('autoplay'),
  controls: _boolean('controls'),
  crossOrigin: attr('crossorigin'),
  currentTime: PropType,
  defaultMuted: PropType,
  defaultPlaybackRate: PropType,
  loop: _boolean('loop'),
  muted: PropType,
  playbackRate: PropType,
  preload: attr('preload'),
  src: attr('src'),
  srcObject: PropType,
  volume: PropType
}), _class7);
exports.HtmlB = (_class8 = /*#__PURE__*/function (_HtmlType8) {
  (0, _inherits2["default"])(HtmlB, _HtmlType8);
  var _super8 = _createSuper(HtmlB);
  function HtmlB() {
    (0, _classCallCheck2["default"])(this, HtmlB);
    return _super8.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlB);
}(HtmlType), (0, _defineProperty2["default"])(_class8, "tagName", 'b'), _class8);
exports.HtmlBase = (_class9 = /*#__PURE__*/function (_HtmlType9) {
  (0, _inherits2["default"])(HtmlBase, _HtmlType9);
  var _super9 = _createSuper(HtmlBase);
  function HtmlBase() {
    (0, _classCallCheck2["default"])(this, HtmlBase);
    return _super9.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlBase);
}(HtmlType), (0, _defineProperty2["default"])(_class9, "tagName", 'base'), (0, _defineProperty2["default"])(_class9, "props", {
  href: attr('href'),
  target: attr('target')
}), _class9);
exports.HtmlBdi = (_class10 = /*#__PURE__*/function (_HtmlType10) {
  (0, _inherits2["default"])(HtmlBdi, _HtmlType10);
  var _super10 = _createSuper(HtmlBdi);
  function HtmlBdi() {
    (0, _classCallCheck2["default"])(this, HtmlBdi);
    return _super10.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlBdi);
}(HtmlType), (0, _defineProperty2["default"])(_class10, "tagName", 'bdi'), _class10);
exports.HtmlBdo = (_class11 = /*#__PURE__*/function (_HtmlType11) {
  (0, _inherits2["default"])(HtmlBdo, _HtmlType11);
  var _super11 = _createSuper(HtmlBdo);
  function HtmlBdo() {
    (0, _classCallCheck2["default"])(this, HtmlBdo);
    return _super11.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlBdo);
}(HtmlType), (0, _defineProperty2["default"])(_class11, "tagName", 'bdo'), _class11);
exports.HtmlBlockQuote = (_class12 = /*#__PURE__*/function (_HtmlType12) {
  (0, _inherits2["default"])(HtmlBlockQuote, _HtmlType12);
  var _super12 = _createSuper(HtmlBlockQuote);
  function HtmlBlockQuote() {
    (0, _classCallCheck2["default"])(this, HtmlBlockQuote);
    return _super12.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlBlockQuote);
}(HtmlType), (0, _defineProperty2["default"])(_class12, "tagName", 'blockquote'), (0, _defineProperty2["default"])(_class12, "props", {
  cite: attr('cite')
}), _class12);
exports.HtmlBody = (_class13 = /*#__PURE__*/function (_HtmlType13) {
  (0, _inherits2["default"])(HtmlBody, _HtmlType13);
  var _super13 = _createSuper(HtmlBody);
  function HtmlBody() {
    (0, _classCallCheck2["default"])(this, HtmlBody);
    return _super13.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlBody);
}(HtmlType), (0, _defineProperty2["default"])(_class13, "tagName", 'body'), _class13);
exports.HtmlBr = (_class14 = /*#__PURE__*/function (_HtmlType14) {
  (0, _inherits2["default"])(HtmlBr, _HtmlType14);
  var _super14 = _createSuper(HtmlBr);
  function HtmlBr() {
    (0, _classCallCheck2["default"])(this, HtmlBr);
    return _super14.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlBr);
}(HtmlType), (0, _defineProperty2["default"])(_class14, "tagName", 'br'), _class14);
exports.HtmlButton = (_class15 = /*#__PURE__*/function (_HtmlType15) {
  (0, _inherits2["default"])(HtmlButton, _HtmlType15);
  var _super15 = _createSuper(HtmlButton);
  function HtmlButton() {
    (0, _classCallCheck2["default"])(this, HtmlButton);
    return _super15.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlButton);
}(HtmlType), (0, _defineProperty2["default"])(_class15, "tagName", 'button'), (0, _defineProperty2["default"])(_class15, "props", {
  autofocus: _boolean('autofocus'),
  disabled: _boolean('disabled'),
  formAction: attr('formaction'),
  formEnctype: attr('formenctype'),
  formMethod: attr('formmethod'),
  formNoValidate: _boolean('formnovalidate'),
  formTarget: attr('formtarget'),
  name: attr('name'),
  type: attr('type'),
  value: PropType
}), _class15);
exports.HtmlCanvas = (_class16 = /*#__PURE__*/function (_HtmlType16) {
  (0, _inherits2["default"])(HtmlCanvas, _HtmlType16);
  var _super16 = _createSuper(HtmlCanvas);
  function HtmlCanvas() {
    (0, _classCallCheck2["default"])(this, HtmlCanvas);
    return _super16.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlCanvas);
}(HtmlType), (0, _defineProperty2["default"])(_class16, "tagName", 'canvas'), (0, _defineProperty2["default"])(_class16, "props", {
  height: number('height'),
  width: number('width')
}), _class16);
exports.HtmlCaption = (_class17 = /*#__PURE__*/function (_HtmlType17) {
  (0, _inherits2["default"])(HtmlCaption, _HtmlType17);
  var _super17 = _createSuper(HtmlCaption);
  function HtmlCaption() {
    (0, _classCallCheck2["default"])(this, HtmlCaption);
    return _super17.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlCaption);
}(HtmlType), (0, _defineProperty2["default"])(_class17, "tagName", 'caption'), _class17);
exports.HtmlCite = (_class18 = /*#__PURE__*/function (_HtmlType18) {
  (0, _inherits2["default"])(HtmlCite, _HtmlType18);
  var _super18 = _createSuper(HtmlCite);
  function HtmlCite() {
    (0, _classCallCheck2["default"])(this, HtmlCite);
    return _super18.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlCite);
}(HtmlType), (0, _defineProperty2["default"])(_class18, "tagName", 'cite'), _class18);
exports.HtmlCode = (_class19 = /*#__PURE__*/function (_HtmlType19) {
  (0, _inherits2["default"])(HtmlCode, _HtmlType19);
  var _super19 = _createSuper(HtmlCode);
  function HtmlCode() {
    (0, _classCallCheck2["default"])(this, HtmlCode);
    return _super19.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlCode);
}(HtmlType), (0, _defineProperty2["default"])(_class19, "tagName", 'code'), _class19);
exports.HtmlCol = (_class20 = /*#__PURE__*/function (_HtmlType20) {
  (0, _inherits2["default"])(HtmlCol, _HtmlType20);
  var _super20 = _createSuper(HtmlCol);
  function HtmlCol() {
    (0, _classCallCheck2["default"])(this, HtmlCol);
    return _super20.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlCol);
}(HtmlType), (0, _defineProperty2["default"])(_class20, "tagName", 'col'), (0, _defineProperty2["default"])(_class20, "props", {
  span: number('span')
}), _class20);
exports.HtmlColGroup = (_class21 = /*#__PURE__*/function (_HtmlType21) {
  (0, _inherits2["default"])(HtmlColGroup, _HtmlType21);
  var _super21 = _createSuper(HtmlColGroup);
  function HtmlColGroup() {
    (0, _classCallCheck2["default"])(this, HtmlColGroup);
    return _super21.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlColGroup);
}(HtmlType), (0, _defineProperty2["default"])(_class21, "tagName", 'colgroup'), (0, _defineProperty2["default"])(_class21, "props", {
  span: number('span')
}), _class21);
exports.HtmlData = (_class22 = /*#__PURE__*/function (_HtmlType22) {
  (0, _inherits2["default"])(HtmlData, _HtmlType22);
  var _super22 = _createSuper(HtmlData);
  function HtmlData() {
    (0, _classCallCheck2["default"])(this, HtmlData);
    return _super22.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlData);
}(HtmlType), (0, _defineProperty2["default"])(_class22, "tagName", 'data'), (0, _defineProperty2["default"])(_class22, "props", {
  value: PropType
}), _class22);
exports.HtmlDataList = (_class23 = /*#__PURE__*/function (_HtmlType23) {
  (0, _inherits2["default"])(HtmlDataList, _HtmlType23);
  var _super23 = _createSuper(HtmlDataList);
  function HtmlDataList() {
    (0, _classCallCheck2["default"])(this, HtmlDataList);
    return _super23.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlDataList);
}(HtmlType), (0, _defineProperty2["default"])(_class23, "tagName", 'datalist'), _class23);
exports.HtmlDd = (_class24 = /*#__PURE__*/function (_HtmlType24) {
  (0, _inherits2["default"])(HtmlDd, _HtmlType24);
  var _super24 = _createSuper(HtmlDd);
  function HtmlDd() {
    (0, _classCallCheck2["default"])(this, HtmlDd);
    return _super24.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlDd);
}(HtmlType), (0, _defineProperty2["default"])(_class24, "tagName", 'dd'), _class24);
exports.HtmlDel = (_class25 = /*#__PURE__*/function (_HtmlType25) {
  (0, _inherits2["default"])(HtmlDel, _HtmlType25);
  var _super25 = _createSuper(HtmlDel);
  function HtmlDel() {
    (0, _classCallCheck2["default"])(this, HtmlDel);
    return _super25.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlDel);
}(HtmlType), (0, _defineProperty2["default"])(_class25, "tagName", 'del'), (0, _defineProperty2["default"])(_class25, "props", {
  cite: attr('cite'),
  dateTime: attr('datetime')
}), _class25);
exports.HtmlDetails = (_class26 = /*#__PURE__*/function (_HtmlType26) {
  (0, _inherits2["default"])(HtmlDetails, _HtmlType26);
  var _super26 = _createSuper(HtmlDetails);
  function HtmlDetails() {
    (0, _classCallCheck2["default"])(this, HtmlDetails);
    return _super26.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlDetails);
}(HtmlType), (0, _defineProperty2["default"])(_class26, "tagName", 'details'), (0, _defineProperty2["default"])(_class26, "props", {
  open: _boolean('open')
}), _class26);
exports.HtmlDfn = (_class27 = /*#__PURE__*/function (_HtmlType27) {
  (0, _inherits2["default"])(HtmlDfn, _HtmlType27);
  var _super27 = _createSuper(HtmlDfn);
  function HtmlDfn() {
    (0, _classCallCheck2["default"])(this, HtmlDfn);
    return _super27.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlDfn);
}(HtmlType), (0, _defineProperty2["default"])(_class27, "tagName", 'dfn'), _class27);
exports.HtmlDialog = (_class28 = /*#__PURE__*/function (_HtmlType28) {
  (0, _inherits2["default"])(HtmlDialog, _HtmlType28);
  var _super28 = _createSuper(HtmlDialog);
  function HtmlDialog() {
    (0, _classCallCheck2["default"])(this, HtmlDialog);
    return _super28.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlDialog);
}(HtmlType), (0, _defineProperty2["default"])(_class28, "tagName", 'dialog'), (0, _defineProperty2["default"])(_class28, "props", {
  open: _boolean('open'),
  returnValue: PropType
}), _class28);
exports.HtmlDiv = (_class29 = /*#__PURE__*/function (_HtmlType29) {
  (0, _inherits2["default"])(HtmlDiv, _HtmlType29);
  var _super29 = _createSuper(HtmlDiv);
  function HtmlDiv() {
    (0, _classCallCheck2["default"])(this, HtmlDiv);
    return _super29.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlDiv);
}(HtmlType), (0, _defineProperty2["default"])(_class29, "tagName", 'div'), _class29);
exports.HtmlDl = (_class30 = /*#__PURE__*/function (_HtmlType30) {
  (0, _inherits2["default"])(HtmlDl, _HtmlType30);
  var _super30 = _createSuper(HtmlDl);
  function HtmlDl() {
    (0, _classCallCheck2["default"])(this, HtmlDl);
    return _super30.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlDl);
}(HtmlType), (0, _defineProperty2["default"])(_class30, "tagName", 'dl'), _class30);
exports.HtmlDt = (_class31 = /*#__PURE__*/function (_HtmlType31) {
  (0, _inherits2["default"])(HtmlDt, _HtmlType31);
  var _super31 = _createSuper(HtmlDt);
  function HtmlDt() {
    (0, _classCallCheck2["default"])(this, HtmlDt);
    return _super31.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlDt);
}(HtmlType), (0, _defineProperty2["default"])(_class31, "tagName", 'dt'), _class31);
exports.HtmlEm = (_class32 = /*#__PURE__*/function (_HtmlType32) {
  (0, _inherits2["default"])(HtmlEm, _HtmlType32);
  var _super32 = _createSuper(HtmlEm);
  function HtmlEm() {
    (0, _classCallCheck2["default"])(this, HtmlEm);
    return _super32.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlEm);
}(HtmlType), (0, _defineProperty2["default"])(_class32, "tagName", 'em'), _class32);
exports.HtmlEmbed = (_class33 = /*#__PURE__*/function (_HtmlType33) {
  (0, _inherits2["default"])(HtmlEmbed, _HtmlType33);
  var _super33 = _createSuper(HtmlEmbed);
  function HtmlEmbed() {
    (0, _classCallCheck2["default"])(this, HtmlEmbed);
    return _super33.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlEmbed);
}(HtmlType), (0, _defineProperty2["default"])(_class33, "tagName", 'embed'), (0, _defineProperty2["default"])(_class33, "props", {
  height: number('height'),
  src: attr('src'),
  type: attr('type'),
  width: number('width')
}), _class33);
exports.HtmlFieldSet = (_class34 = /*#__PURE__*/function (_HtmlType34) {
  (0, _inherits2["default"])(HtmlFieldSet, _HtmlType34);
  var _super34 = _createSuper(HtmlFieldSet);
  function HtmlFieldSet() {
    (0, _classCallCheck2["default"])(this, HtmlFieldSet);
    return _super34.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlFieldSet);
}(HtmlType), (0, _defineProperty2["default"])(_class34, "tagName", 'fieldset'), (0, _defineProperty2["default"])(_class34, "props", {
  disabled: _boolean('disabled'),
  name: attr('name')
}), _class34);
exports.HtmlFigCaption = (_class35 = /*#__PURE__*/function (_HtmlType35) {
  (0, _inherits2["default"])(HtmlFigCaption, _HtmlType35);
  var _super35 = _createSuper(HtmlFigCaption);
  function HtmlFigCaption() {
    (0, _classCallCheck2["default"])(this, HtmlFigCaption);
    return _super35.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlFigCaption);
}(HtmlType), (0, _defineProperty2["default"])(_class35, "tagName", 'figcaption'), _class35);
exports.HtmlFigure = (_class36 = /*#__PURE__*/function (_HtmlType36) {
  (0, _inherits2["default"])(HtmlFigure, _HtmlType36);
  var _super36 = _createSuper(HtmlFigure);
  function HtmlFigure() {
    (0, _classCallCheck2["default"])(this, HtmlFigure);
    return _super36.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlFigure);
}(HtmlType), (0, _defineProperty2["default"])(_class36, "tagName", 'figure'), _class36);
exports.HtmlFooter = (_class37 = /*#__PURE__*/function (_HtmlType37) {
  (0, _inherits2["default"])(HtmlFooter, _HtmlType37);
  var _super37 = _createSuper(HtmlFooter);
  function HtmlFooter() {
    (0, _classCallCheck2["default"])(this, HtmlFooter);
    return _super37.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlFooter);
}(HtmlType), (0, _defineProperty2["default"])(_class37, "tagName", 'footer'), _class37);
exports.HtmlForm = (_class38 = /*#__PURE__*/function (_HtmlType38) {
  (0, _inherits2["default"])(HtmlForm, _HtmlType38);
  var _super38 = _createSuper(HtmlForm);
  function HtmlForm() {
    (0, _classCallCheck2["default"])(this, HtmlForm);
    return _super38.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlForm);
}(HtmlType), (0, _defineProperty2["default"])(_class38, "tagName", 'form'), (0, _defineProperty2["default"])(_class38, "props", {
  acceptCharset: attr('accept-charset'),
  action: attr('action'),
  autocomplete: attr('autocomplete'),
  enctype: attr('enctype'),
  method: attr('method'),
  name: attr('name'),
  noValidate: _boolean('novalidate'),
  target: attr('target')
}), _class38);
exports.HtmlH1 = (_class39 = /*#__PURE__*/function (_HtmlType39) {
  (0, _inherits2["default"])(HtmlH1, _HtmlType39);
  var _super39 = _createSuper(HtmlH1);
  function HtmlH1() {
    (0, _classCallCheck2["default"])(this, HtmlH1);
    return _super39.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlH1);
}(HtmlType), (0, _defineProperty2["default"])(_class39, "tagName", 'h1'), _class39);
exports.HtmlH2 = (_class40 = /*#__PURE__*/function (_HtmlType40) {
  (0, _inherits2["default"])(HtmlH2, _HtmlType40);
  var _super40 = _createSuper(HtmlH2);
  function HtmlH2() {
    (0, _classCallCheck2["default"])(this, HtmlH2);
    return _super40.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlH2);
}(HtmlType), (0, _defineProperty2["default"])(_class40, "tagName", 'h2'), _class40);
exports.HtmlH3 = (_class41 = /*#__PURE__*/function (_HtmlType41) {
  (0, _inherits2["default"])(HtmlH3, _HtmlType41);
  var _super41 = _createSuper(HtmlH3);
  function HtmlH3() {
    (0, _classCallCheck2["default"])(this, HtmlH3);
    return _super41.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlH3);
}(HtmlType), (0, _defineProperty2["default"])(_class41, "tagName", 'h3'), _class41);
exports.HtmlH4 = (_class42 = /*#__PURE__*/function (_HtmlType42) {
  (0, _inherits2["default"])(HtmlH4, _HtmlType42);
  var _super42 = _createSuper(HtmlH4);
  function HtmlH4() {
    (0, _classCallCheck2["default"])(this, HtmlH4);
    return _super42.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlH4);
}(HtmlType), (0, _defineProperty2["default"])(_class42, "tagName", 'h4'), _class42);
exports.HtmlH5 = (_class43 = /*#__PURE__*/function (_HtmlType43) {
  (0, _inherits2["default"])(HtmlH5, _HtmlType43);
  var _super43 = _createSuper(HtmlH5);
  function HtmlH5() {
    (0, _classCallCheck2["default"])(this, HtmlH5);
    return _super43.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlH5);
}(HtmlType), (0, _defineProperty2["default"])(_class43, "tagName", 'h5'), _class43);
exports.HtmlH6 = (_class44 = /*#__PURE__*/function (_HtmlType44) {
  (0, _inherits2["default"])(HtmlH6, _HtmlType44);
  var _super44 = _createSuper(HtmlH6);
  function HtmlH6() {
    (0, _classCallCheck2["default"])(this, HtmlH6);
    return _super44.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlH6);
}(HtmlType), (0, _defineProperty2["default"])(_class44, "tagName", 'h6'), _class44);
exports.HtmlHGroup = (_class45 = /*#__PURE__*/function (_HtmlType45) {
  (0, _inherits2["default"])(HtmlHGroup, _HtmlType45);
  var _super45 = _createSuper(HtmlHGroup);
  function HtmlHGroup() {
    (0, _classCallCheck2["default"])(this, HtmlHGroup);
    return _super45.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlHGroup);
}(HtmlType), (0, _defineProperty2["default"])(_class45, "tagName", 'hgroup'), _class45);
exports.HtmlHead = (_class46 = /*#__PURE__*/function (_HtmlType46) {
  (0, _inherits2["default"])(HtmlHead, _HtmlType46);
  var _super46 = _createSuper(HtmlHead);
  function HtmlHead() {
    (0, _classCallCheck2["default"])(this, HtmlHead);
    return _super46.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlHead);
}(HtmlType), (0, _defineProperty2["default"])(_class46, "tagName", 'head'), _class46);
exports.HtmlHeader = (_class47 = /*#__PURE__*/function (_HtmlType47) {
  (0, _inherits2["default"])(HtmlHeader, _HtmlType47);
  var _super47 = _createSuper(HtmlHeader);
  function HtmlHeader() {
    (0, _classCallCheck2["default"])(this, HtmlHeader);
    return _super47.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlHeader);
}(HtmlType), (0, _defineProperty2["default"])(_class47, "tagName", 'header'), _class47);
exports.HtmlHr = (_class48 = /*#__PURE__*/function (_HtmlType48) {
  (0, _inherits2["default"])(HtmlHr, _HtmlType48);
  var _super48 = _createSuper(HtmlHr);
  function HtmlHr() {
    (0, _classCallCheck2["default"])(this, HtmlHr);
    return _super48.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlHr);
}(HtmlType), (0, _defineProperty2["default"])(_class48, "tagName", 'hr'), _class48);
exports.HtmlHtml = (_class49 = /*#__PURE__*/function (_HtmlType49) {
  (0, _inherits2["default"])(HtmlHtml, _HtmlType49);
  var _super49 = _createSuper(HtmlHtml);
  function HtmlHtml() {
    (0, _classCallCheck2["default"])(this, HtmlHtml);
    return _super49.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlHtml);
}(HtmlType), (0, _defineProperty2["default"])(_class49, "tagName", 'html'), _class49);
exports.HtmlI = (_class50 = /*#__PURE__*/function (_HtmlType50) {
  (0, _inherits2["default"])(HtmlI, _HtmlType50);
  var _super50 = _createSuper(HtmlI);
  function HtmlI() {
    (0, _classCallCheck2["default"])(this, HtmlI);
    return _super50.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlI);
}(HtmlType), (0, _defineProperty2["default"])(_class50, "tagName", 'i'), _class50);
exports.HtmlIFrame = (_class51 = /*#__PURE__*/function (_HtmlType51) {
  (0, _inherits2["default"])(HtmlIFrame, _HtmlType51);
  var _super51 = _createSuper(HtmlIFrame);
  function HtmlIFrame() {
    (0, _classCallCheck2["default"])(this, HtmlIFrame);
    return _super51.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlIFrame);
}(HtmlType), (0, _defineProperty2["default"])(_class51, "tagName", 'iframe'), (0, _defineProperty2["default"])(_class51, "props", {
  allowFullScreen: _boolean('allowfullscreen'),
  height: number('height'),
  referrerPolicy: attr('referrerpolicy'),
  src: attr('src'),
  srcdoc: attr('srcdoc'),
  width: number('width')
}), _class51);
exports.HtmlImg = (_class52 = /*#__PURE__*/function (_HtmlType52) {
  (0, _inherits2["default"])(HtmlImg, _HtmlType52);
  var _super52 = _createSuper(HtmlImg);
  function HtmlImg() {
    (0, _classCallCheck2["default"])(this, HtmlImg);
    return _super52.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlImg);
}(HtmlType), (0, _defineProperty2["default"])(_class52, "tagName", 'img'), (0, _defineProperty2["default"])(_class52, "props", {
  alt: attr('alt'),
  crossOrigin: attr('crossorigin'),
  height: number('height'),
  isMap: _boolean('ismap'),
  referrerPolicy: attr('referrerpolicy'),
  sizes: attr('sizes'),
  src: attr('src'),
  srcset: attr('srcset'),
  useMap: attr('usemap'),
  width: number('width')
}), _class52);
exports.HtmlInput = (_class53 = /*#__PURE__*/function (_HtmlType53) {
  (0, _inherits2["default"])(HtmlInput, _HtmlType53);
  var _super53 = _createSuper(HtmlInput);
  function HtmlInput() {
    (0, _classCallCheck2["default"])(this, HtmlInput);
    return _super53.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlInput);
}(HtmlType), (0, _defineProperty2["default"])(_class53, "tagName", 'input'), (0, _defineProperty2["default"])(_class53, "props", {
  accept: attr('accept'),
  alt: attr('alt'),
  autocomplete: attr('autocomplete'),
  checked: PropType,
  defaultChecked: PropType,
  defaultValue: attr('value'),
  dirName: attr('dirname'),
  disabled: _boolean('disabled'),
  formAction: attr('formaction'),
  formEnctype: attr('formenctype'),
  formMethod: attr('formmethod'),
  formNoValidate: _boolean('formnovalidate'),
  formTarget: attr('formtarget'),
  height: number('height'),
  indeterminate: PropType,
  inputMode: attr('inputmode'),
  max: attr('max'),
  maxLength: number('maxlength'),
  min: attr('min'),
  minLength: number('minlength'),
  multiple: _boolean('multiple'),
  name: attr('name'),
  pattern: attr('pattern'),
  placeholder: attr('placeholder'),
  readOnly: _boolean('readonly'),
  required: _boolean('required'),
  selectionDirection: PropType,
  selectionEnd: PropType,
  selectionStart: PropType,
  size: number('size'),
  src: attr('src'),
  step: attr('step'),
  type: attr('type'),
  value: PropType,
  valueAsDate: PropType,
  valueAsNumber: PropType,
  width: number('width')
}), _class53);
exports.HtmlIns = (_class54 = /*#__PURE__*/function (_HtmlType54) {
  (0, _inherits2["default"])(HtmlIns, _HtmlType54);
  var _super54 = _createSuper(HtmlIns);
  function HtmlIns() {
    (0, _classCallCheck2["default"])(this, HtmlIns);
    return _super54.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlIns);
}(HtmlType), (0, _defineProperty2["default"])(_class54, "tagName", 'ins'), (0, _defineProperty2["default"])(_class54, "props", {
  cite: attr('cite'),
  dateTime: attr('datetime')
}), _class54);
exports.HtmlKbd = (_class55 = /*#__PURE__*/function (_HtmlType55) {
  (0, _inherits2["default"])(HtmlKbd, _HtmlType55);
  var _super55 = _createSuper(HtmlKbd);
  function HtmlKbd() {
    (0, _classCallCheck2["default"])(this, HtmlKbd);
    return _super55.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlKbd);
}(HtmlType), (0, _defineProperty2["default"])(_class55, "tagName", 'kbd'), _class55);
exports.HtmlLabel = (_class56 = /*#__PURE__*/function (_HtmlType56) {
  (0, _inherits2["default"])(HtmlLabel, _HtmlType56);
  var _super56 = _createSuper(HtmlLabel);
  function HtmlLabel() {
    (0, _classCallCheck2["default"])(this, HtmlLabel);
    return _super56.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlLabel);
}(HtmlType), (0, _defineProperty2["default"])(_class56, "tagName", 'label'), (0, _defineProperty2["default"])(_class56, "props", {
  htmlFor: attr('for')
}), _class56);
exports.HtmlLegend = (_class57 = /*#__PURE__*/function (_HtmlType57) {
  (0, _inherits2["default"])(HtmlLegend, _HtmlType57);
  var _super57 = _createSuper(HtmlLegend);
  function HtmlLegend() {
    (0, _classCallCheck2["default"])(this, HtmlLegend);
    return _super57.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlLegend);
}(HtmlType), (0, _defineProperty2["default"])(_class57, "tagName", 'legend'), _class57);
exports.HtmlLi = (_class58 = /*#__PURE__*/function (_HtmlType58) {
  (0, _inherits2["default"])(HtmlLi, _HtmlType58);
  var _super58 = _createSuper(HtmlLi);
  function HtmlLi() {
    (0, _classCallCheck2["default"])(this, HtmlLi);
    return _super58.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlLi);
}(HtmlType), (0, _defineProperty2["default"])(_class58, "tagName", 'li'), (0, _defineProperty2["default"])(_class58, "props", {
  value: PropType
}), _class58);
exports.HtmlLink = (_class59 = /*#__PURE__*/function (_HtmlType59) {
  (0, _inherits2["default"])(HtmlLink, _HtmlType59);
  var _super59 = _createSuper(HtmlLink);
  function HtmlLink() {
    (0, _classCallCheck2["default"])(this, HtmlLink);
    return _super59.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlLink);
}(HtmlType), (0, _defineProperty2["default"])(_class59, "tagName", 'link'), (0, _defineProperty2["default"])(_class59, "props", {
  crossOrigin: attr('crossorigin'),
  disabled: _boolean('disabled'),
  href: attr('href'),
  hreflang: attr('hreflang'),
  media: attr('media'),
  nonce: attr('nonce'),
  referrerPolicy: attr('referrerpolicy'),
  rel: attr('rel'),
  rev: attr('rev'),
  type: attr('type')
}), _class59);
exports.HtmlMain = (_class60 = /*#__PURE__*/function (_HtmlType60) {
  (0, _inherits2["default"])(HtmlMain, _HtmlType60);
  var _super60 = _createSuper(HtmlMain);
  function HtmlMain() {
    (0, _classCallCheck2["default"])(this, HtmlMain);
    return _super60.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlMain);
}(HtmlType), (0, _defineProperty2["default"])(_class60, "tagName", 'main'), _class60);
exports.HtmlMap = (_class61 = /*#__PURE__*/function (_HtmlType61) {
  (0, _inherits2["default"])(HtmlMap, _HtmlType61);
  var _super61 = _createSuper(HtmlMap);
  function HtmlMap() {
    (0, _classCallCheck2["default"])(this, HtmlMap);
    return _super61.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlMap);
}(HtmlType), (0, _defineProperty2["default"])(_class61, "tagName", 'map'), (0, _defineProperty2["default"])(_class61, "props", {
  name: attr('name')
}), _class61);
exports.HtmlMark = (_class62 = /*#__PURE__*/function (_HtmlType62) {
  (0, _inherits2["default"])(HtmlMark, _HtmlType62);
  var _super62 = _createSuper(HtmlMark);
  function HtmlMark() {
    (0, _classCallCheck2["default"])(this, HtmlMark);
    return _super62.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlMark);
}(HtmlType), (0, _defineProperty2["default"])(_class62, "tagName", 'mark'), _class62);
exports.HtmlMenu = (_class63 = /*#__PURE__*/function (_HtmlType63) {
  (0, _inherits2["default"])(HtmlMenu, _HtmlType63);
  var _super63 = _createSuper(HtmlMenu);
  function HtmlMenu() {
    (0, _classCallCheck2["default"])(this, HtmlMenu);
    return _super63.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlMenu);
}(HtmlType), (0, _defineProperty2["default"])(_class63, "tagName", 'menu'), _class63);
exports.HtmlMeta = (_class64 = /*#__PURE__*/function (_HtmlType64) {
  (0, _inherits2["default"])(HtmlMeta, _HtmlType64);
  var _super64 = _createSuper(HtmlMeta);
  function HtmlMeta() {
    (0, _classCallCheck2["default"])(this, HtmlMeta);
    return _super64.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlMeta);
}(HtmlType), (0, _defineProperty2["default"])(_class64, "tagName", 'meta'), (0, _defineProperty2["default"])(_class64, "props", {
  charset: attr('charset'),
  content: attr('content'),
  httpEquiv: attr('http-equiv'),
  name: attr('name')
}), _class64);
exports.HtmlMeter = (_class65 = /*#__PURE__*/function (_HtmlType65) {
  (0, _inherits2["default"])(HtmlMeter, _HtmlType65);
  var _super65 = _createSuper(HtmlMeter);
  function HtmlMeter() {
    (0, _classCallCheck2["default"])(this, HtmlMeter);
    return _super65.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlMeter);
}(HtmlType), (0, _defineProperty2["default"])(_class65, "tagName", 'meter'), (0, _defineProperty2["default"])(_class65, "props", {
  high: number('high'),
  low: number('low'),
  max: number('max'),
  min: number('min'),
  optimum: number('optimum'),
  value: PropType
}), _class65);
exports.HtmlNav = (_class66 = /*#__PURE__*/function (_HtmlType66) {
  (0, _inherits2["default"])(HtmlNav, _HtmlType66);
  var _super66 = _createSuper(HtmlNav);
  function HtmlNav() {
    (0, _classCallCheck2["default"])(this, HtmlNav);
    return _super66.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlNav);
}(HtmlType), (0, _defineProperty2["default"])(_class66, "tagName", 'nav'), _class66);
exports.HtmlNoScript = (_class67 = /*#__PURE__*/function (_HtmlType67) {
  (0, _inherits2["default"])(HtmlNoScript, _HtmlType67);
  var _super67 = _createSuper(HtmlNoScript);
  function HtmlNoScript() {
    (0, _classCallCheck2["default"])(this, HtmlNoScript);
    return _super67.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlNoScript);
}(HtmlType), (0, _defineProperty2["default"])(_class67, "tagName", 'noscript'), _class67);
exports.HtmlObject = (_class68 = /*#__PURE__*/function (_HtmlType68) {
  (0, _inherits2["default"])(HtmlObject, _HtmlType68);
  var _super68 = _createSuper(HtmlObject);
  function HtmlObject() {
    (0, _classCallCheck2["default"])(this, HtmlObject);
    return _super68.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlObject);
}(HtmlType), (0, _defineProperty2["default"])(_class68, "tagName", 'object'), (0, _defineProperty2["default"])(_class68, "props", {
  data: attr('data'),
  height: number('height'),
  name: attr('name'),
  type: attr('type'),
  useMap: attr('usemap'),
  width: number('width')
}), _class68);
exports.HtmlOl = (_class69 = /*#__PURE__*/function (_HtmlType69) {
  (0, _inherits2["default"])(HtmlOl, _HtmlType69);
  var _super69 = _createSuper(HtmlOl);
  function HtmlOl() {
    (0, _classCallCheck2["default"])(this, HtmlOl);
    return _super69.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlOl);
}(HtmlType), (0, _defineProperty2["default"])(_class69, "tagName", 'ol'), (0, _defineProperty2["default"])(_class69, "props", {
  reversed: _boolean('reversed'),
  start: number('start'),
  type: attr('type')
}), _class69);
exports.HtmlOptGroup = (_class70 = /*#__PURE__*/function (_HtmlType70) {
  (0, _inherits2["default"])(HtmlOptGroup, _HtmlType70);
  var _super70 = _createSuper(HtmlOptGroup);
  function HtmlOptGroup() {
    (0, _classCallCheck2["default"])(this, HtmlOptGroup);
    return _super70.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlOptGroup);
}(HtmlType), (0, _defineProperty2["default"])(_class70, "tagName", 'optgroup'), (0, _defineProperty2["default"])(_class70, "props", {
  disabled: _boolean('disabled'),
  label: attr('label')
}), _class70);
exports.HtmlOption = (_class71 = /*#__PURE__*/function (_HtmlType71) {
  (0, _inherits2["default"])(HtmlOption, _HtmlType71);
  var _super71 = _createSuper(HtmlOption);
  function HtmlOption() {
    (0, _classCallCheck2["default"])(this, HtmlOption);
    return _super71.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlOption);
}(HtmlType), (0, _defineProperty2["default"])(_class71, "tagName", 'option'), (0, _defineProperty2["default"])(_class71, "props", {
  defaultSelected: PropType,
  disabled: _boolean('disabled'),
  label: attr('label'),
  selected: PropType,
  text: attr('text'),
  value: PropType
}), _class71);
exports.HtmlOutput = (_class72 = /*#__PURE__*/function (_HtmlType72) {
  (0, _inherits2["default"])(HtmlOutput, _HtmlType72);
  var _super72 = _createSuper(HtmlOutput);
  function HtmlOutput() {
    (0, _classCallCheck2["default"])(this, HtmlOutput);
    return _super72.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlOutput);
}(HtmlType), (0, _defineProperty2["default"])(_class72, "tagName", 'output'), (0, _defineProperty2["default"])(_class72, "props", {
  defaultValue: PropType,
  htmlFor: attr('for'),
  name: attr('name'),
  value: PropType
}), _class72);
exports.HtmlP = (_class73 = /*#__PURE__*/function (_HtmlType73) {
  (0, _inherits2["default"])(HtmlP, _HtmlType73);
  var _super73 = _createSuper(HtmlP);
  function HtmlP() {
    (0, _classCallCheck2["default"])(this, HtmlP);
    return _super73.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlP);
}(HtmlType), (0, _defineProperty2["default"])(_class73, "tagName", 'p'), _class73);
exports.HtmlParam = (_class74 = /*#__PURE__*/function (_HtmlType74) {
  (0, _inherits2["default"])(HtmlParam, _HtmlType74);
  var _super74 = _createSuper(HtmlParam);
  function HtmlParam() {
    (0, _classCallCheck2["default"])(this, HtmlParam);
    return _super74.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlParam);
}(HtmlType), (0, _defineProperty2["default"])(_class74, "tagName", 'param'), _class74);
exports.HtmlPicture = (_class75 = /*#__PURE__*/function (_HtmlType75) {
  (0, _inherits2["default"])(HtmlPicture, _HtmlType75);
  var _super75 = _createSuper(HtmlPicture);
  function HtmlPicture() {
    (0, _classCallCheck2["default"])(this, HtmlPicture);
    return _super75.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlPicture);
}(HtmlType), (0, _defineProperty2["default"])(_class75, "tagName", 'picture'), _class75);
exports.HtmlPre = (_class76 = /*#__PURE__*/function (_HtmlType76) {
  (0, _inherits2["default"])(HtmlPre, _HtmlType76);
  var _super76 = _createSuper(HtmlPre);
  function HtmlPre() {
    (0, _classCallCheck2["default"])(this, HtmlPre);
    return _super76.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlPre);
}(HtmlType), (0, _defineProperty2["default"])(_class76, "tagName", 'pre'), _class76);
exports.HtmlProgress = (_class77 = /*#__PURE__*/function (_HtmlType77) {
  (0, _inherits2["default"])(HtmlProgress, _HtmlType77);
  var _super77 = _createSuper(HtmlProgress);
  function HtmlProgress() {
    (0, _classCallCheck2["default"])(this, HtmlProgress);
    return _super77.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlProgress);
}(HtmlType), (0, _defineProperty2["default"])(_class77, "tagName", 'progress'), (0, _defineProperty2["default"])(_class77, "props", {
  max: number('max'),
  value: PropType
}), _class77);
exports.HtmlQ = (_class78 = /*#__PURE__*/function (_HtmlType78) {
  (0, _inherits2["default"])(HtmlQ, _HtmlType78);
  var _super78 = _createSuper(HtmlQ);
  function HtmlQ() {
    (0, _classCallCheck2["default"])(this, HtmlQ);
    return _super78.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlQ);
}(HtmlType), (0, _defineProperty2["default"])(_class78, "tagName", 'q'), (0, _defineProperty2["default"])(_class78, "props", {
  cite: attr('cite')
}), _class78);
exports.HtmlRp = (_class79 = /*#__PURE__*/function (_HtmlType79) {
  (0, _inherits2["default"])(HtmlRp, _HtmlType79);
  var _super79 = _createSuper(HtmlRp);
  function HtmlRp() {
    (0, _classCallCheck2["default"])(this, HtmlRp);
    return _super79.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlRp);
}(HtmlType), (0, _defineProperty2["default"])(_class79, "tagName", 'rp'), _class79);
exports.HtmlRt = (_class80 = /*#__PURE__*/function (_HtmlType80) {
  (0, _inherits2["default"])(HtmlRt, _HtmlType80);
  var _super80 = _createSuper(HtmlRt);
  function HtmlRt() {
    (0, _classCallCheck2["default"])(this, HtmlRt);
    return _super80.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlRt);
}(HtmlType), (0, _defineProperty2["default"])(_class80, "tagName", 'rt'), _class80);
exports.HtmlRuby = (_class81 = /*#__PURE__*/function (_HtmlType81) {
  (0, _inherits2["default"])(HtmlRuby, _HtmlType81);
  var _super81 = _createSuper(HtmlRuby);
  function HtmlRuby() {
    (0, _classCallCheck2["default"])(this, HtmlRuby);
    return _super81.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlRuby);
}(HtmlType), (0, _defineProperty2["default"])(_class81, "tagName", 'ruby'), _class81);
exports.HtmlS = (_class82 = /*#__PURE__*/function (_HtmlType82) {
  (0, _inherits2["default"])(HtmlS, _HtmlType82);
  var _super82 = _createSuper(HtmlS);
  function HtmlS() {
    (0, _classCallCheck2["default"])(this, HtmlS);
    return _super82.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlS);
}(HtmlType), (0, _defineProperty2["default"])(_class82, "tagName", 's'), _class82);
exports.HtmlSamp = (_class83 = /*#__PURE__*/function (_HtmlType83) {
  (0, _inherits2["default"])(HtmlSamp, _HtmlType83);
  var _super83 = _createSuper(HtmlSamp);
  function HtmlSamp() {
    (0, _classCallCheck2["default"])(this, HtmlSamp);
    return _super83.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlSamp);
}(HtmlType), (0, _defineProperty2["default"])(_class83, "tagName", 'samp'), _class83);
exports.HtmlScript = (_class84 = /*#__PURE__*/function (_HtmlType84) {
  (0, _inherits2["default"])(HtmlScript, _HtmlType84);
  var _super84 = _createSuper(HtmlScript);
  function HtmlScript() {
    (0, _classCallCheck2["default"])(this, HtmlScript);
    return _super84.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlScript);
}(HtmlType), (0, _defineProperty2["default"])(_class84, "tagName", 'script'), (0, _defineProperty2["default"])(_class84, "props", {
  async: _boolean('async'),
  charset: attr('charset'),
  crossOrigin: attr('crossorigin'),
  defer: _boolean('defer'),
  integrity: attr('integrity'),
  noModule: _boolean('nomodule'),
  nonce: attr('nonce'),
  referrerPolicy: attr('referrerpolicy'),
  src: attr('src'),
  text: attr('text'),
  type: attr('type')
}), _class84);
exports.HtmlSection = (_class85 = /*#__PURE__*/function (_HtmlType85) {
  (0, _inherits2["default"])(HtmlSection, _HtmlType85);
  var _super85 = _createSuper(HtmlSection);
  function HtmlSection() {
    (0, _classCallCheck2["default"])(this, HtmlSection);
    return _super85.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlSection);
}(HtmlType), (0, _defineProperty2["default"])(_class85, "tagName", 'section'), _class85);
exports.HtmlSelect = (_class86 = /*#__PURE__*/function (_HtmlType86) {
  (0, _inherits2["default"])(HtmlSelect, _HtmlType86);
  var _super86 = _createSuper(HtmlSelect);
  function HtmlSelect() {
    (0, _classCallCheck2["default"])(this, HtmlSelect);
    return _super86.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlSelect);
}(HtmlType), (0, _defineProperty2["default"])(_class86, "tagName", 'select'), (0, _defineProperty2["default"])(_class86, "props", {
  autocomplete: attr('autocomplete'),
  disabled: _boolean('disabled'),
  multiple: _boolean('multiple'),
  name: attr('name'),
  required: _boolean('required'),
  selectedIndex: PropType,
  size: number('size'),
  value: PropType
}), _class86);
exports.HtmlSmall = (_class87 = /*#__PURE__*/function (_HtmlType87) {
  (0, _inherits2["default"])(HtmlSmall, _HtmlType87);
  var _super87 = _createSuper(HtmlSmall);
  function HtmlSmall() {
    (0, _classCallCheck2["default"])(this, HtmlSmall);
    return _super87.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlSmall);
}(HtmlType), (0, _defineProperty2["default"])(_class87, "tagName", 'small'), _class87);
exports.HtmlSource = (_class88 = /*#__PURE__*/function (_HtmlType88) {
  (0, _inherits2["default"])(HtmlSource, _HtmlType88);
  var _super88 = _createSuper(HtmlSource);
  function HtmlSource() {
    (0, _classCallCheck2["default"])(this, HtmlSource);
    return _super88.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlSource);
}(HtmlType), (0, _defineProperty2["default"])(_class88, "tagName", 'source'), (0, _defineProperty2["default"])(_class88, "props", {
  height: number('height'),
  media: attr('media'),
  sizes: attr('sizes'),
  src: attr('src'),
  srcset: attr('srcset'),
  type: attr('type'),
  width: number('width')
}), _class88);
exports.HtmlSpan = (_class89 = /*#__PURE__*/function (_HtmlType89) {
  (0, _inherits2["default"])(HtmlSpan, _HtmlType89);
  var _super89 = _createSuper(HtmlSpan);
  function HtmlSpan() {
    (0, _classCallCheck2["default"])(this, HtmlSpan);
    return _super89.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlSpan);
}(HtmlType), (0, _defineProperty2["default"])(_class89, "tagName", 'span'), _class89);
exports.HtmlStrong = (_class90 = /*#__PURE__*/function (_HtmlType90) {
  (0, _inherits2["default"])(HtmlStrong, _HtmlType90);
  var _super90 = _createSuper(HtmlStrong);
  function HtmlStrong() {
    (0, _classCallCheck2["default"])(this, HtmlStrong);
    return _super90.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlStrong);
}(HtmlType), (0, _defineProperty2["default"])(_class90, "tagName", 'strong'), _class90);
exports.HtmlStyle = (_class91 = /*#__PURE__*/function (_HtmlType91) {
  (0, _inherits2["default"])(HtmlStyle, _HtmlType91);
  var _super91 = _createSuper(HtmlStyle);
  function HtmlStyle() {
    (0, _classCallCheck2["default"])(this, HtmlStyle);
    return _super91.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlStyle);
}(HtmlType), (0, _defineProperty2["default"])(_class91, "tagName", 'style'), (0, _defineProperty2["default"])(_class91, "props", {
  media: attr('media'),
  nonce: attr('nonce'),
  type: attr('type')
}), _class91);
exports.HtmlSub = (_class92 = /*#__PURE__*/function (_HtmlType92) {
  (0, _inherits2["default"])(HtmlSub, _HtmlType92);
  var _super92 = _createSuper(HtmlSub);
  function HtmlSub() {
    (0, _classCallCheck2["default"])(this, HtmlSub);
    return _super92.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlSub);
}(HtmlType), (0, _defineProperty2["default"])(_class92, "tagName", 'sub'), _class92);
exports.HtmlSummary = (_class93 = /*#__PURE__*/function (_HtmlType93) {
  (0, _inherits2["default"])(HtmlSummary, _HtmlType93);
  var _super93 = _createSuper(HtmlSummary);
  function HtmlSummary() {
    (0, _classCallCheck2["default"])(this, HtmlSummary);
    return _super93.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlSummary);
}(HtmlType), (0, _defineProperty2["default"])(_class93, "tagName", 'summary'), _class93);
exports.HtmlSup = (_class94 = /*#__PURE__*/function (_HtmlType94) {
  (0, _inherits2["default"])(HtmlSup, _HtmlType94);
  var _super94 = _createSuper(HtmlSup);
  function HtmlSup() {
    (0, _classCallCheck2["default"])(this, HtmlSup);
    return _super94.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlSup);
}(HtmlType), (0, _defineProperty2["default"])(_class94, "tagName", 'sup'), _class94);
exports.HtmlTBody = (_class95 = /*#__PURE__*/function (_HtmlType95) {
  (0, _inherits2["default"])(HtmlTBody, _HtmlType95);
  var _super95 = _createSuper(HtmlTBody);
  function HtmlTBody() {
    (0, _classCallCheck2["default"])(this, HtmlTBody);
    return _super95.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlTBody);
}(HtmlType), (0, _defineProperty2["default"])(_class95, "tagName", 'tbody'), _class95);
exports.HtmlTFoot = (_class96 = /*#__PURE__*/function (_HtmlType96) {
  (0, _inherits2["default"])(HtmlTFoot, _HtmlType96);
  var _super96 = _createSuper(HtmlTFoot);
  function HtmlTFoot() {
    (0, _classCallCheck2["default"])(this, HtmlTFoot);
    return _super96.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlTFoot);
}(HtmlType), (0, _defineProperty2["default"])(_class96, "tagName", 'tfoot'), _class96);
exports.HtmlTHead = (_class97 = /*#__PURE__*/function (_HtmlType97) {
  (0, _inherits2["default"])(HtmlTHead, _HtmlType97);
  var _super97 = _createSuper(HtmlTHead);
  function HtmlTHead() {
    (0, _classCallCheck2["default"])(this, HtmlTHead);
    return _super97.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlTHead);
}(HtmlType), (0, _defineProperty2["default"])(_class97, "tagName", 'thead'), _class97);
exports.HtmlTable = (_class98 = /*#__PURE__*/function (_HtmlType98) {
  (0, _inherits2["default"])(HtmlTable, _HtmlType98);
  var _super98 = _createSuper(HtmlTable);
  function HtmlTable() {
    (0, _classCallCheck2["default"])(this, HtmlTable);
    return _super98.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlTable);
}(HtmlType), (0, _defineProperty2["default"])(_class98, "tagName", 'table'), _class98);
exports.HtmlTd = (_class99 = /*#__PURE__*/function (_HtmlType99) {
  (0, _inherits2["default"])(HtmlTd, _HtmlType99);
  var _super99 = _createSuper(HtmlTd);
  function HtmlTd() {
    (0, _classCallCheck2["default"])(this, HtmlTd);
    return _super99.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlTd);
}(HtmlType), (0, _defineProperty2["default"])(_class99, "tagName", 'td'), (0, _defineProperty2["default"])(_class99, "props", {
  colSpan: number('colspan'),
  headers: attr('headers'),
  rowSpan: number('rowspan')
}), _class99);
exports.HtmlTemplate = (_class100 = /*#__PURE__*/function (_HtmlType100) {
  (0, _inherits2["default"])(HtmlTemplate, _HtmlType100);
  var _super100 = _createSuper(HtmlTemplate);
  function HtmlTemplate() {
    (0, _classCallCheck2["default"])(this, HtmlTemplate);
    return _super100.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlTemplate);
}(HtmlType), (0, _defineProperty2["default"])(_class100, "tagName", 'template'), _class100);
exports.HtmlTextArea = (_class101 = /*#__PURE__*/function (_HtmlType101) {
  (0, _inherits2["default"])(HtmlTextArea, _HtmlType101);
  var _super101 = _createSuper(HtmlTextArea);
  function HtmlTextArea() {
    (0, _classCallCheck2["default"])(this, HtmlTextArea);
    return _super101.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlTextArea);
}(HtmlType), (0, _defineProperty2["default"])(_class101, "tagName", 'textarea'), (0, _defineProperty2["default"])(_class101, "props", {
  autocomplete: attr('autocomplete'),
  cols: number('cols'),
  defaultValue: PropType,
  dirName: attr('dirname'),
  disabled: _boolean('disabled'),
  inputMode: attr('inputmode'),
  maxLength: number('maxlength'),
  minLength: number('minlength'),
  name: attr('name'),
  placeholder: attr('placeholder'),
  readOnly: _boolean('readonly'),
  required: _boolean('required'),
  rows: number('rows'),
  selectionDirection: PropType,
  selectionEnd: PropType,
  selectionStart: PropType,
  step: attr('step'),
  value: PropType,
  wrap: attr('wrap')
}), _class101);
exports.HtmlTh = (_class102 = /*#__PURE__*/function (_HtmlType102) {
  (0, _inherits2["default"])(HtmlTh, _HtmlType102);
  var _super102 = _createSuper(HtmlTh);
  function HtmlTh() {
    (0, _classCallCheck2["default"])(this, HtmlTh);
    return _super102.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlTh);
}(HtmlType), (0, _defineProperty2["default"])(_class102, "tagName", 'th'), (0, _defineProperty2["default"])(_class102, "props", {
  abbr: attr('abbr'),
  colSpan: number('colspan'),
  headers: attr('headers'),
  rowSpan: number('rowspan'),
  scope: attr('scope')
}), _class102);
exports.HtmlTime = (_class103 = /*#__PURE__*/function (_HtmlType103) {
  (0, _inherits2["default"])(HtmlTime, _HtmlType103);
  var _super103 = _createSuper(HtmlTime);
  function HtmlTime() {
    (0, _classCallCheck2["default"])(this, HtmlTime);
    return _super103.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlTime);
}(HtmlType), (0, _defineProperty2["default"])(_class103, "tagName", 'time'), (0, _defineProperty2["default"])(_class103, "props", {
  dateTime: attr('datetime')
}), _class103);
exports.HtmlTitle = (_class104 = /*#__PURE__*/function (_HtmlType104) {
  (0, _inherits2["default"])(HtmlTitle, _HtmlType104);
  var _super104 = _createSuper(HtmlTitle);
  function HtmlTitle() {
    (0, _classCallCheck2["default"])(this, HtmlTitle);
    return _super104.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlTitle);
}(HtmlType), (0, _defineProperty2["default"])(_class104, "tagName", 'title'), (0, _defineProperty2["default"])(_class104, "props", {
  text: attr('text')
}), _class104);
exports.HtmlTr = (_class105 = /*#__PURE__*/function (_HtmlType105) {
  (0, _inherits2["default"])(HtmlTr, _HtmlType105);
  var _super105 = _createSuper(HtmlTr);
  function HtmlTr() {
    (0, _classCallCheck2["default"])(this, HtmlTr);
    return _super105.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlTr);
}(HtmlType), (0, _defineProperty2["default"])(_class105, "tagName", 'tr'), _class105);
exports.HtmlTrack = (_class106 = /*#__PURE__*/function (_HtmlType106) {
  (0, _inherits2["default"])(HtmlTrack, _HtmlType106);
  var _super106 = _createSuper(HtmlTrack);
  function HtmlTrack() {
    (0, _classCallCheck2["default"])(this, HtmlTrack);
    return _super106.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlTrack);
}(HtmlType), (0, _defineProperty2["default"])(_class106, "tagName", 'track'), (0, _defineProperty2["default"])(_class106, "props", {
  "default": _boolean('default'),
  kind: attr('kind'),
  label: attr('label'),
  src: attr('src'),
  srclang: attr('srclang')
}), _class106);
exports.HtmlU = (_class107 = /*#__PURE__*/function (_HtmlType107) {
  (0, _inherits2["default"])(HtmlU, _HtmlType107);
  var _super107 = _createSuper(HtmlU);
  function HtmlU() {
    (0, _classCallCheck2["default"])(this, HtmlU);
    return _super107.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlU);
}(HtmlType), (0, _defineProperty2["default"])(_class107, "tagName", 'u'), _class107);
exports.HtmlUl = (_class108 = /*#__PURE__*/function (_HtmlType108) {
  (0, _inherits2["default"])(HtmlUl, _HtmlType108);
  var _super108 = _createSuper(HtmlUl);
  function HtmlUl() {
    (0, _classCallCheck2["default"])(this, HtmlUl);
    return _super108.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlUl);
}(HtmlType), (0, _defineProperty2["default"])(_class108, "tagName", 'ul'), _class108);
exports.HtmlVar = (_class109 = /*#__PURE__*/function (_HtmlType109) {
  (0, _inherits2["default"])(HtmlVar, _HtmlType109);
  var _super109 = _createSuper(HtmlVar);
  function HtmlVar() {
    (0, _classCallCheck2["default"])(this, HtmlVar);
    return _super109.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlVar);
}(HtmlType), (0, _defineProperty2["default"])(_class109, "tagName", 'var'), _class109);
exports.HtmlVideo = (_class110 = /*#__PURE__*/function (_HtmlType110) {
  (0, _inherits2["default"])(HtmlVideo, _HtmlType110);
  var _super110 = _createSuper(HtmlVideo);
  function HtmlVideo() {
    (0, _classCallCheck2["default"])(this, HtmlVideo);
    return _super110.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlVideo);
}(HtmlType), (0, _defineProperty2["default"])(_class110, "tagName", 'video'), (0, _defineProperty2["default"])(_class110, "props", {
  autoplay: _boolean('autoplay'),
  controls: _boolean('controls'),
  crossOrigin: attr('crossorigin'),
  currentTime: PropType,
  defaultMuted: PropType,
  defaultPlaybackRate: PropType,
  height: number('height'),
  loop: _boolean('loop'),
  muted: PropType,
  playbackRate: PropType,
  playsinline: _boolean('playsInline'),
  poster: attr('poster'),
  preload: attr('preload'),
  src: attr('src'),
  srcObject: PropType,
  volume: PropType,
  width: number('width')
}), _class110);
exports.HtmlWbr = (_class111 = /*#__PURE__*/function (_HtmlType111) {
  (0, _inherits2["default"])(HtmlWbr, _HtmlType111);
  var _super111 = _createSuper(HtmlWbr);
  function HtmlWbr() {
    (0, _classCallCheck2["default"])(this, HtmlWbr);
    return _super111.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlWbr);
}(HtmlType), (0, _defineProperty2["default"])(_class111, "tagName", 'wbr'), _class111);

/***/ }),
/* 4 */
/***/ ((module) => {



function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 5 */
/***/ ((module) => {



function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 6 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var setPrototypeOf = __webpack_require__(7);
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 7 */
/***/ ((module) => {



function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 8 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _typeof = (__webpack_require__(9)["default"]);
var assertThisInitialized = __webpack_require__(10);
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 9 */
/***/ ((module) => {



function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 10 */
/***/ ((module) => {



function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 11 */
/***/ ((module) => {



function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(1);
var _inherits2 = _interopRequireDefault(__webpack_require__(6));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(11));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));
var _createClass2 = _interopRequireDefault(__webpack_require__(4));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(2));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/**
 * @abstract
 */
var AttrType = /*#__PURE__*/function () {
  function AttrType() {
    (0, _classCallCheck2["default"])(this, AttrType);
  }
  (0, _createClass2["default"])(AttrType, null, [{
    key: "get",
    value:
    /**
     * @param {ElemType} elem
     * @param {string} propName
     * @returns {string|null|*}
     */
    function get(elem, propName) {
      var _elem$node$getAttribu;
      return (_elem$node$getAttribu = elem.node.getAttribute(this.nodeName)) !== null && _elem$node$getAttribu !== void 0 ? _elem$node$getAttribu : this.defaultValue;
    }

    /**
     * @param {ElemType} elem
     * @param {string} propName
     * @param {string|null|*} value
     */
  }, {
    key: "set",
    value: function set(elem, propName, value) {
      elem.vnode[propName] = value;
    }

    /**
     * @param {ElemType} elem
     * @param {string} propName
     * @param {*} value
     */
  }, {
    key: "update",
    value: function update(elem, propName, value) {
      if (value === null || value === this.defaultValue) {
        elem.node.removeAttribute(this.nodeName);
      } else if (value != elem.node.getAttribute(this.nodeName)) {
        elem.node.setAttribute(this.nodeName, value);
      }
    }

    /**
     * @param {ElemType} elem
     * @param {string} propName
     */
  }, {
    key: "reset",
    value: function reset(elem, propName) {
      if (!elem.vnode.hasOwnProperty(propName)) {
        elem.node.removeAttribute(this.nodeName);
      }
    }

    /**
     * @param {string} nodeName
     * @param {*} [defaultValue]
     * @return {constructor @link AttrType}
     */
  }, {
    key: "define",
    value: function define(nodeName) {
      var _class;
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.defaultValue;
      return _class = /*#__PURE__*/function (_this) {
        (0, _inherits2["default"])(_class, _this);
        var _super = _createSuper(_class);
        function _class() {
          (0, _classCallCheck2["default"])(this, _class);
          return _super.apply(this, arguments);
        }
        return (0, _createClass2["default"])(_class);
      }(this), (0, _defineProperty2["default"])(_class, "nodeName", nodeName), (0, _defineProperty2["default"])(_class, "defaultValue", defaultValue), _class;
    }
  }]);
  return AttrType;
}();
(0, _defineProperty2["default"])(AttrType, "nodeName", null);
(0, _defineProperty2["default"])(AttrType, "defaultValue", '');
module.exports = AttrType;

/***/ }),
/* 13 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(1);
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));
var _createClass2 = _interopRequireDefault(__webpack_require__(4));
var _get2 = _interopRequireDefault(__webpack_require__(14));
var _inherits2 = _interopRequireDefault(__webpack_require__(6));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(11));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(2));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var AttrType = __webpack_require__(12);
var BooleanType = /*#__PURE__*/function (_AttrType) {
  (0, _inherits2["default"])(BooleanType, _AttrType);
  var _super = _createSuper(BooleanType);
  function BooleanType() {
    (0, _classCallCheck2["default"])(this, BooleanType);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(BooleanType, null, [{
    key: "get",
    value:
    /**
     * @param {ElemType} elem
     * @param {string} propName
     * @returns {boolean}
     */
    function get(elem, propName) {
      var value = (0, _get2["default"])((0, _getPrototypeOf2["default"])(BooleanType), "get", this).call(this, elem, propName);
      return value === this.nodeValue || value !== 'false' && !!value;
    }

    /**
     * @param {ElemType} elem
     * @param {string} propName
     * @param {boolean} value
     */
  }, {
    key: "update",
    value: function update(elem, propName, value) {
      if (value === this.get(elem, propName)) {
        return;
      }
      if (value) {
        elem.node.setAttribute(this.nodeName, this.nodeValue);
      } else elem.node.removeAttribute(this.nodeName);
    }

    /**
     * @param {string} nodeName
     * @param {string} [nodeValue]
     * @return {constructor @link BooleanType}
     */
  }, {
    key: "define",
    value: function define(nodeName) {
      var _class;
      var nodeValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.nodeValue;
      return _class = /*#__PURE__*/function (_this) {
        (0, _inherits2["default"])(_class, _this);
        var _super2 = _createSuper(_class);
        function _class() {
          (0, _classCallCheck2["default"])(this, _class);
          return _super2.apply(this, arguments);
        }
        return (0, _createClass2["default"])(_class);
      }(this), (0, _defineProperty2["default"])(_class, "nodeName", nodeName), (0, _defineProperty2["default"])(_class, "nodeValue", nodeValue), _class;
    }
  }]);
  return BooleanType;
}(AttrType);
(0, _defineProperty2["default"])(BooleanType, "defaultValue", false);
(0, _defineProperty2["default"])(BooleanType, "nodeValue", '');
module.exports = BooleanType;

/***/ }),
/* 14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var superPropBase = __webpack_require__(15);
function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
  return _get.apply(this, arguments);
}
module.exports = _get, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 15 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var getPrototypeOf = __webpack_require__(11);
function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }
  return object;
}
module.exports = _superPropBase, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 16 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(1);
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));
var _createClass2 = _interopRequireDefault(__webpack_require__(4));
var _inherits2 = _interopRequireDefault(__webpack_require__(6));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(11));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(2));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var AttrType = __webpack_require__(12);
var NumberType = /*#__PURE__*/function (_AttrType) {
  (0, _inherits2["default"])(NumberType, _AttrType);
  var _super = _createSuper(NumberType);
  function NumberType() {
    (0, _classCallCheck2["default"])(this, NumberType);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(NumberType, null, [{
    key: "get",
    value:
    /**
     * @param {ElemType} elem
     * @param {string} propName
     * @returns {number}
     */
    function get(elem, propName) {
      var value = elem.node.getAttribute(this.nodeName);
      return value === null ? this.defaultValue : +value;
    }
  }]);
  return NumberType;
}(AttrType);
(0, _defineProperty2["default"])(NumberType, "defaultValue", 0);
module.exports = NumberType;

/***/ }),
/* 17 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(1);
var _createClass2 = _interopRequireDefault(__webpack_require__(4));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));
var _inherits2 = _interopRequireDefault(__webpack_require__(6));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(11));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(2));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var BooleanType = __webpack_require__(13);
var ElemType = __webpack_require__(18);
var RoleType = __webpack_require__(42);

/**
 * @abstract
 */
var HtmlType = /*#__PURE__*/function (_ElemType) {
  (0, _inherits2["default"])(HtmlType, _ElemType);
  var _super = _createSuper(HtmlType);
  function HtmlType() {
    (0, _classCallCheck2["default"])(this, HtmlType);
    return _super.apply(this, arguments);
  }
  return (0, _createClass2["default"])(HtmlType);
}(ElemType);
(0, _defineProperty2["default"])(HtmlType, "props", _objectSpread(_objectSpread({}, RoleType.props), {}, {
  hidden: BooleanType.define('hidden')
}));
module.exports = HtmlType;

/***/ }),
/* 18 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(1);
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(19));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(25));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));
var _createClass2 = _interopRequireDefault(__webpack_require__(4));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(2));
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _require = __webpack_require__(29),
  Comment = _require.Comment,
  CustomEvent = _require.CustomEvent,
  document = _require.document;
var AriaType = __webpack_require__(30);
var AttrType = __webpack_require__(12);
var Attributes = __webpack_require__(32);
var Class = __webpack_require__(34);
var ClassList = __webpack_require__(35);
var Dataset = __webpack_require__(36);
var EventType = __webpack_require__(37);
var Id = __webpack_require__(38);
var InnerHTML = __webpack_require__(39);
var PropType = __webpack_require__(33);
var Style = __webpack_require__(40);
var TextType = __webpack_require__(41);
var indexOf = Array.prototype.indexOf;
var specialProps = {
  children: true,
  "class": true,
  node: true,
  parent: true,
  tagName: true
};
var nullDescriptor = {
  writable: true,
  value: null
};
var descriptors = {
  __vnode: nullDescriptor,
  __node: nullDescriptor,
  __children: nullDescriptor,
  __parent: nullDescriptor,
  __index: nullDescriptor,
  __ref: nullDescriptor,
  __handlers: nullDescriptor,
  __sampleNode: nullDescriptor,
  vnode: nullDescriptor,
  node: nullDescriptor,
  children: nullDescriptor,
  parent: {
    writable: true,
    value: undefined
  }
};

/**
 * @abstract
 */
var ElemType = /*#__PURE__*/function () {
  /**
   * @param {*} [props]
   */
  function ElemType(props) {
    (0, _classCallCheck2["default"])(this, ElemType);
    this.constructor.__init();
    Object.defineProperties(this, descriptors);
    Object.defineProperty(this, 'props', {
      writable: true,
      value: _objectSpread({
        children: null
      }, this.constructor.defaultProps)
    });
    if ((props === null || props === void 0 ? void 0 : props.constructor) === Object) {
      Object.assign(this.props, props);
    } else if (props !== undefined) {
      this.props.children = props;
    }
  }

  /**
   * @return {string}
   */
  (0, _createClass2["default"])(ElemType, [{
    key: "toString",
    value: function toString() {
      this.__init();
      return this.node.outerHTML;
    }

    /**
     * @param {{}|function} [state]
     */
  }, {
    key: "setState",
    value: function setState(state) {
      var prevState = _objectSpread({}, this.state);
      if (!this.state) {
        this.state = {};
      }
      if (typeof state === 'function') {
        state = state(this.state);
      }
      Object.assign(this.state, state);
      this.vnode = this.__createVNode();
      this.__assignProps();
      this.__update();
      this.update(this.props, prevState);
    }

    /**
     * @param {constructor @link ElemType} type
     * @param {function} [filter]
     * @return {null|ElemType|*}
     */
  }, {
    key: "find",
    value: function find(type, filter) {
      var child;
      var _iterator = _createForOfIteratorHelper(this.children),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          child = _step.value;
          if (!child.props) {
            continue;
          }
          if (child instanceof type) {
            if (!filter || filter(child)) {
              return child;
            }
          }
          if (child = child.find(type, filter)) {
            return child;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return null;
    }

    /**
     * @param {constructor @link ElemType} type
     * @param {function} [filter]
     * @return {(null|ElemType|*)[]}
     */
  }, {
    key: "findAll",
    value: function findAll(type, filter) {
      var result = [];
      var child;
      var _iterator2 = _createForOfIteratorHelper(this.children),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          child = _step2.value;
          if (!child.props) {
            continue;
          }
          if (child instanceof type) {
            if (!filter || filter(child)) {
              result.push(child);
            }
          }
          result.push.apply(result, (0, _toConsumableArray2["default"])(child.findAll(type, filter)));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return result;
    }

    /**
     * @param {Element} node
     * @return {ElemType|*|null}
     */
  }, {
    key: "getElemByNode",
    value: function getElemByNode(node) {
      return node === this.node ? this : this.find(ElemType, function (elem) {
        return elem.node === node;
      });
    }

    /**
     * @param {constructor @link ElemType} type
     * @param {function} [filter]
     * @return {ElemType|*|null}
     */
  }, {
    key: "closest",
    value: function closest(type, filter) {
      var _this$__parent;
      if (this instanceof type) {
        if (!filter || filter(this)) {
          return this;
        }
      }
      return ((_this$__parent = this.__parent) === null || _this$__parent === void 0 ? void 0 : _this$__parent.closest(type, filter)) || null;
    }

    /**
     * @public
     */
  }, {
    key: "blur",
    value: function blur() {
      this.node.blur();
    }

    /**
     * @public
     */
  }, {
    key: "click",
    value: function click() {
      this.node.click();
    }

    /**
     * @public
     */
  }, {
    key: "focus",
    value: function focus() {
      this.node.focus();
    }

    /**
     * @param {Event|string|*} event
     * @param {CustomEventInit|EventInit|{}|*} [dict]
     * @returns {boolean}
     */
  }, {
    key: "emit",
    value: function emit(event, dict) {
      if (typeof event !== 'string') {
        return this.node.dispatchEvent(event);
      }
      var desc = EventType.types[event];
      event = desc ? new desc.constructor(event, _objectSpread(_objectSpread({}, desc.dict), dict)) : new CustomEvent(event, dict);
      return this.node.dispatchEvent(event);
    }

    /**
     * @param {string} type
     * @param {function} callback
     * @param {{capture,once,passive}|boolean|*} [options]
     * @param {boolean} [options.capture=false]
     * @param {boolean} [options.once=false]
     * @param {boolean} [options.passive=false]
     * @protected
     */
  }, {
    key: "on",
    value: function on(type, callback) {
      var _this = this;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      if (!this.__handlers) {
        this.__handlers = new Map();
      }
      if (typeof options === 'boolean') {
        options = {
          capture: options
        };
      }
      var listeners = this.__handlers.get(type);
      if (!listeners) {
        this.__handlers.set(type, listeners = new Map());
      }
      var listener = listeners.get(callback);
      if (listener) {
        return;
      }
      listener = function listener(e) {
        var event = new EventType(e, _this);
        callback.call(_this, event, _this.getElemByNode(e.target));
        options.once && listeners["delete"](callback);
      };
      listener.__options = options;
      listeners.set(callback, listener);
      this.node.addEventListener(type, listener, options);
    }

    /**
     * @param {string} type
     * @param {function} callback
     * @param {{capture}|boolean|*} [options]
     * @param {boolean} [options.capture=false]
     * @protected
     */
  }, {
    key: "off",
    value: function off(type, callback) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      if (!this.__handlers) {
        return;
      }
      if (typeof options === 'boolean') {
        options = {
          capture: options
        };
      }
      var listeners = this.__handlers.get(type);
      var listener = listeners === null || listeners === void 0 ? void 0 : listeners.get(callback);
      if (listener) {
        this.node.removeEventListener(type, listener, options);
        listeners["delete"](callback);
        listeners.size || this.__handlers["delete"](type);
      }
    }

    /**
     * @protected
     */
  }, {
    key: "removeAllListeners",
    value: function removeAllListeners() {
      if (!this.__handlers) {
        return;
      }
      var type, listeners, callback, listener;
      var _iterator3 = _createForOfIteratorHelper(this.__handlers.entries()),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _step3$value = (0, _slicedToArray2["default"])(_step3.value, 2);
          type = _step3$value[0];
          listeners = _step3$value[1];
          var _iterator4 = _createForOfIteratorHelper(listeners.entries()),
            _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var _step4$value = (0, _slicedToArray2["default"])(_step4.value, 2);
              callback = _step4$value[0];
              listener = _step4$value[1];
              this.node.removeEventListener(type, listener, listener.__options);
              listeners["delete"](callback);
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
          this.__handlers["delete"](type);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      this.__handlers = null;
    }

    /**
     * @protected
     * @abstract
     */
  }, {
    key: "init",
    value: function init() {
      void null;
    }

    /**
     * @protected
     * @abstract
     */
  }, {
    key: "assign",
    value: function assign() {
      void null;
    }

    /**
     * @return {*}
     * @protected
     * @abstract
     */
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }

    /**
     * @protected
     * @abstract
     */
  }, {
    key: "mount",
    value: function mount() {
      void null;
    }

    /**
     * @param {{}} prevProps
     * @param {{}} prevState
     * @protected
     * @abstract
     */
  }, {
    key: "update",
    value: function update(prevProps, prevState) {
      void null;
    }

    /**
     * @protected
     * @abstract
     */
  }, {
    key: "destroy",
    value: function destroy() {
      void null;
    }

    /**
     * @param {Element} [node]
     * @param {Element} [parentNode]
     * @private
     */
  }, {
    key: "__init",
    value: function __init(node, parentNode) {
      if (this.node) {
        return;
      }
      this.node = node || this.__createNode();
      this.__sampleNode = this.props.tagName ? this.__createNode() : this.constructor.__sampleNode;
      this.vnode = this.__createVNode();
      this.state && Object.defineProperty(this, 'state', {
        enumerable: false,
        value: this.state
      });
      this.init();
      this.__assignProps();
      this.assign();
      this.__children = this.render();
      this.__setRefs();
      if (this.parent === undefined) {
        node || (parentNode === null || parentNode === void 0 ? void 0 : parentNode.append(this.node));
        this.__setProps();
        this.__setChildren();
        node && this.__mount();
        return;
      }
      if (this.parent === null) {
        this.__node = new Comment(this.constructor.name);
        if (node !== null && node !== void 0 && node.parentNode) {
          node.replaceWith(this.__node);
        } else parentNode === null || parentNode === void 0 ? void 0 : parentNode.append(this.__node);
        this.children = [];
        node && this.__mount();
        return;
      }
      this.__setProps();
      this.__setChildren();
      this.__node = new Comment(this.constructor.name);
      this.node.replaceWith(this.__node);
      this.parent.append(this.node);
      node && this.__mount();
    }

    /**
     * @private
     */
  }, {
    key: "__mount",
    value: function __mount() {
      var child;
      var _iterator5 = _createForOfIteratorHelper(this.children),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          child = _step5.value;
          child.props && child.__mount();
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      this.mount();
    }

    /**
     * @private
     */
  }, {
    key: "__assignProps",
    value: function __assignProps() {
      var props = this.props;
      var name;
      for (name in props) {
        if (!specialProps[name] && name in this) {
          this[name] = props[name];
        }
      }
    }

    /**
     * @return {Element|*}
     * @private
     */
  }, {
    key: "__createNode",
    value: function __createNode() {
      return this.constructor.__createNode(this.props.tagName);
    }

    /**
     * @private
     * @return {{role,className,classList}}
     */
  }, {
    key: "__createVNode",
    value: function __createVNode() {
      var vnode = {
        role: this.constructor.role,
        className: Class.generate(this.constructor)
      };
      Object.defineProperty(vnode, 'classList', nullDescriptor);
      return vnode;
    }

    /**
     * @private
     */
  }, {
    key: "__setProps",
    value: function __setProps() {
      if (this.__vnode) {
        this.__resetProps();
      }
      var map = this.constructor.__props;
      var vnode = this.vnode;
      var name, type;
      for (name in vnode) {
        type = map[name];
        type.update(this, name, vnode[name]);
      }
      this.__vnode = this.vnode;
    }

    /**
     * @private
     */
  }, {
    key: "__resetProps",
    value: function __resetProps() {
      var map = this.constructor.__props;
      var vnode = this.__vnode;
      var name, type;
      for (name in vnode) {
        type = map[name];
        type.reset(this, name, vnode[name]);
      }
    }

    /**
     * @private
     */
  }, {
    key: "__setChildren",
    value: function __setChildren() {
      var _this2 = this;
      if (this.__children === undefined) {
        this.children = this.children || [];
        return;
      }
      var node = this.node;
      var childrenA = this.children;
      var childrenB = [];
      var indexA = this.__index;
      var indexB = {};
      var childB, key;
      var forEach = function forEach(childB) {
        if (!PropType.filter(childB)) {
          return;
        }
        if (Array.isArray(childB)) {
          childB.forEach(forEach);
          return;
        }
        if (!childB.props && !childB.__init) {
          childB = new TextType(childB);
          indexB = null;
        }
        childrenB.push(childB);
        if (!childrenA) {
          childB.__parent = _this2;
          childB.__init();
          node.append(childB.__node || childB.node);
        }
        if (!indexB) {
          return;
        }
        key = childB.props.key;
        if (key === undefined) {
          indexB = null;
        } else if (indexB[key]) {
          indexB = null;
          console.warn('Duplicate key detected', key, childB, _this2);
        } else indexB[key] = childB;
      };
      forEach(this.__children);
      this.__children = childrenB;
      this.__index = indexB;
      if (!childrenA) {
        this.children = childrenB;
        return;
      }
      if (!indexA || !indexB) {
        this.__setChildNodes();
        this.children = childrenB;
        return;
      }
      var childNodes = node.childNodes;
      var length = childrenB.length;
      var childA, nodeA, nextA, i, j;
      var _iterator6 = _createForOfIteratorHelper(childrenA),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          childA = _step6.value;
          if (!indexB[childA.props.key]) {
            childA.__destroy();
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      for (i = 0; i < length; i++) {
        childB = childrenB[i];
        if (indexA[childB.props.key]) {
          continue;
        }
        nextA = childNodes[i];
        childB.__parent = this;
        childB.__init();
        if (nextA) {
          nextA.before(childB.__node || childB.node);
        } else {
          node.append(childB.__node || childB.node);
        }
        childB.__mount();
      }
      for (i = 0; i < length; i++) {
        childB = childrenB[i];
        key = childB.props.key;
        childA = indexA[key];
        if (!childA) {
          continue;
        }
        nodeA = childA.__node || childA.node;
        j = indexOf.call(childNodes, nodeA);
        if (i !== j) {
          nextA = childNodes[i].nextSibling;
          if (nextA) {
            if (nodeA !== nextA && nodeA.nextSibling !== nextA) {
              nextA.before(nodeA);
            }
          } else node.append(nodeA);
        }
        if (childA.constructor !== childB.constructor) {
          childA.__replaceElem(childB);
          continue;
        }
        childrenB[i] = childA;
        indexB[key] = childA;
        childA.__parent = this;
        childA.__updateElem(childB);
      }
      this.children = childrenB;
    }

    /**
     * @private
     */
  }, {
    key: "__setChildNodes",
    value: function __setChildNodes() {
      var childrenA = this.children;
      var childrenB = this.__children;
      var length = Math.max(childrenA.length, childrenB.length);
      var i, nodeA, childA, childB;
      for (i = 0; i < length; i++) {
        var _childB$__mount2, _childB2;
        childA = childrenA[i];
        childB = childrenB[i];
        if (childA === undefined) {
          var _childB$__mount, _childB;
          childB.__parent = this;
          childB.__init();
          this.node.append(childB.__node || childB.node);
          (_childB$__mount = (_childB = childB).__mount) === null || _childB$__mount === void 0 ? void 0 : _childB$__mount.call(_childB);
          continue;
        }
        if (childB === undefined) {
          childA.__destroy();
          continue;
        }
        if (!childA.props && !childB.props) {
          if (childA.node.data !== childB.data) {
            childA.node.data = childB.data;
          }
          childrenB[i] = childA;
          continue;
        }
        if (childA.props && childB.props) {
          if (childA.tagName === childB.tagName && childA.props.key === childB.props.key) {
            if (childA.constructor !== childB.constructor) {
              childA.__replaceElem(childB);
              continue;
            }
            childrenB[i] = childA;
            childA.__parent = this;
            childA.__updateElem(childB);
            continue;
          }
        }
        nodeA = childA.node;
        childA.__destroy(true);
        childB.__parent = this;
        childB.__init();
        nodeA.replaceWith(childB.__node || childB.node);
        (_childB$__mount2 = (_childB2 = childB).__mount) === null || _childB$__mount2 === void 0 ? void 0 : _childB$__mount2.call(_childB2);
      }
    }

    /**
     * @param {ElemType} elem
     * @private
     */
  }, {
    key: "__updateElem",
    value: function __updateElem(elem) {
      var prevProps = this.props;
      var refA = this.__ref;
      var refB = elem.__ref;
      this.props = elem.props;
      this.vnode = this.__createVNode();
      this.__assignProps();
      this.__update();
      if (refA && refB) {
        refB.ctx[refB.name] = this;
      }
      this.update(prevProps, this.state);
    }

    /**
     * @param {ElemType} elem
     * @private
     */
  }, {
    key: "__replaceElem",
    value: function __replaceElem(elem) {
      var node = this.node;
      var children = this.children;
      var parent = this.__parent;
      this.children = [];
      this.vnode = this.__createVNode();
      this.__resetProps();
      this.__destroy(true);
      this.node = this.__createNode();
      elem.children = children;
      elem.__parent = parent;
      elem.__init(node);
    }

    /**
     * @private
     */
  }, {
    key: "__setRefs",
    value: function __setRefs() {
      var name, item;
      for (name in this) {
        var _item;
        item = this[name];
        if ((_item = item) !== null && _item !== void 0 && _item.props) {
          item.__ref = {
            name: name,
            ctx: this
          };
        }
      }
    }

    /**
     * @private
     */
  }, {
    key: "__update",
    value: function __update() {
      this.parent = undefined;
      this.assign();
      this.__children = this.render();
      this.__setRefs();
      if (this.parent === undefined) {
        if (this.__node) {
          this.__node.replaceWith(this.node);
          this.__node = null;
        }
        this.__setProps();
        this.__setChildren();
        return;
      }
      if (this.parent === null) {
        if (!this.__node) {
          this.__node = new Comment(this.constructor.name);
          this.node.replaceWith(this.__node);
        } else this.node.remove();
        return;
      }
      if (!this.__node) {
        this.__node = new Comment(this.constructor.name);
        this.node.replaceWith(this.__node);
      }
      this.__setProps();
      this.__setChildren();
      if (this.node.parentNode !== this.parent) {
        this.parent.append(this.node);
      }
    }

    /**
     * @param {boolean} [keepNode]
     * @private
     */
  }, {
    key: "__destroy",
    value: function __destroy() {
      var keepNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.destroy();
      this.removeAllListeners();
      this.children.forEach(function (child) {
        return child.__destroy(true);
      });
      if (this.__node) {
        this.__node.replaceWith(this.node);
        this.__node = null;
      }
      this.__parent = null;
      this.__ref = null;
      keepNode || this.node.remove();
    }

    /**
     * @private
     */
  }, {
    key: "__debug",
    value: function __debug() {
      init.apply(this, arguments);
      this.node.__elem = this;
    }

    /**
     * @return {string}
     */
  }, {
    key: "tagName",
    get: function get() {
      return this.props.tagName || this.constructor.tagName;
    }

    /**
     * @return {ElemType|*}
     */
  }, {
    key: "rootElem",
    get: function get() {
      var parent = this;
      while (parent.__parent) {
        parent = parent.__parent;
      }
      return parent;
    }

    /**
     * @param {*} [props]
     * @param {ParentNode} [parentNode]
     * @return {ElemType|*}
     */
  }], [{
    key: "render",
    value: function render(props, parentNode) {
      var elem = new this(props);
      var node = elem.props.node;
      if (node !== null && node !== void 0 && node.hasChildNodes()) {
        node.innerHTML = '';
      }
      elem.__init(node, parentNode);
      node || elem.__mount();
      return elem;
    }

    /**
     * @param {ElemType} [elem]
     * @param {boolean} [keepNode]
     */
  }, {
    key: "destroy",
    value: function destroy(elem, keepNode) {
      elem === null || elem === void 0 ? void 0 : elem.__destroy(keepNode);
    }

    /**
     * @param {boolean} value
     */
  }, {
    key: "setDebugMode",
    value: function setDebugMode(value) {
      ElemType.prototype.__init = value ? ElemType.prototype.__debug : init;
    }

    /**
     * @param {string} prop
     * @param {constructor @link PropType|constructor @link AttrType|constructor @link EventType|*} type
     * @private
     */
  }, {
    key: "__defineProp",
    value: function __defineProp(prop, type) {
      if (typeof type !== 'function') {
        Object.defineProperty(this.prototype, prop, {
          configurable: true,
          writable: true,
          value: type
        });
        return;
      }
      Object.defineProperty(this.prototype, prop, {
        configurable: true,
        get: function get() {
          return type.get(this, prop);
        },
        set: function set(value) {
          type.set(this, prop, value);
        }
      });
    }

    /**
     * @param {{}} props
     */
  }, {
    key: "__defineProps",
    value: function __defineProps(props) {
      var prop, type;
      for (prop in props) {
        type = props[prop];
        this.__defineProp(prop, type);
      }
    }

    /**
     * @private
     */
  }, {
    key: "__init",
    value: function __init() {
      if (this.hasOwnProperty('__props')) {
        return;
      }
      if (this !== ElemType) {
        Object.getPrototypeOf(this).__init();
      }
      if (this.hasOwnProperty('props')) {
        this.__defineProps(this.props);
      }
      Object.defineProperties(this, {
        __props: {
          value: _objectSpread(_objectSpread({}, this.__props), this.props)
        },
        __sampleNode: {
          value: this.__createNode()
        }
      });
    }

    /**
     * @param {string} [tagName]
     * @return {HTMLElement|*}
     * @private
     */
  }, {
    key: "__createNode",
    value: function __createNode() {
      var tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.tagName;
      return this.namespace === null ? document.createElement(tagName) : document.createElementNS(this.namespace, tagName);
    }
  }]);
  return ElemType;
}();
(0, _defineProperty2["default"])(ElemType, "namespace", null);
(0, _defineProperty2["default"])(ElemType, "tagName", 'div');
(0, _defineProperty2["default"])(ElemType, "role", null);
(0, _defineProperty2["default"])(ElemType, "class", null);
(0, _defineProperty2["default"])(ElemType, "className", null);
(0, _defineProperty2["default"])(ElemType, "props", _objectSpread(_objectSpread({
  role: AttrType.define('role'),
  className: Class,
  classList: ClassList,
  id: Id,
  style: Style,
  dataset: Dataset,
  attributes: Attributes,
  innerHTML: InnerHTML,
  textContent: PropType
}, EventType.props), AriaType.props));
(0, _defineProperty2["default"])(ElemType, "defaultProps", null);
var init = ElemType.prototype.__init;
module.exports = EventType.ElemType = ElemType;

/***/ }),
/* 19 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var arrayWithHoles = __webpack_require__(20);
var iterableToArrayLimit = __webpack_require__(21);
var unsupportedIterableToArray = __webpack_require__(22);
var nonIterableRest = __webpack_require__(24);
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 20 */
/***/ ((module) => {



function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 21 */
/***/ ((module) => {



function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 22 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var arrayLikeToArray = __webpack_require__(23);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 23 */
/***/ ((module) => {



function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 24 */
/***/ ((module) => {



function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 25 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var arrayWithoutHoles = __webpack_require__(26);
var iterableToArray = __webpack_require__(27);
var unsupportedIterableToArray = __webpack_require__(22);
var nonIterableSpread = __webpack_require__(28);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 26 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var arrayLikeToArray = __webpack_require__(23);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 27 */
/***/ ((module) => {



function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 28 */
/***/ ((module) => {



function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 29 */
/***/ ((module) => {



/**
 * @module xwindow
 * @author Vyacheslav Aristov <vv.aristov@gmail.com>
 */
if (typeof window === 'undefined') {
  // Calling via eval() prevents jsdom extraction when using a module bundler
  var _eval = eval('require("jsdom")'),
    JSDOM = _eval.JSDOM;
  var _JSDOM = new JSDOM(),
    _window = _JSDOM.window;
  module.exports = _window;
} else module.exports = window;

/***/ }),
/* 30 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(1);
var _createClass2 = _interopRequireDefault(__webpack_require__(4));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(2));
var AttrType = __webpack_require__(12);
var BooleanType = __webpack_require__(13);
var NumberType = __webpack_require__(16);
var TokenType = __webpack_require__(31);

/**
 * @mixin
 */
var AriaType = /*#__PURE__*/(0, _createClass2["default"])(function AriaType() {
  (0, _classCallCheck2["default"])(this, AriaType);
});
(0, _defineProperty2["default"])(AriaType, "props", {
  activeDescendant: AttrType.define('aria-activedescendant'),
  atomic: BooleanType.define('aria-atomic', 'true'),
  autoComplete: TokenType.define('aria-autocomplete', 'none'),
  busy: BooleanType.define('aria-busy', 'true'),
  checked: TokenType.define('aria-checked'),
  colCount: NumberType.define('aria-colcount'),
  colIndex: NumberType.define('aria-colindex'),
  colSpan: NumberType.define('aria-colspan'),
  controls: AttrType.define('aria-controls'),
  current: TokenType.define('aria-current', false),
  describedBy: AttrType.define('aria-describedby'),
  details: AttrType.define('aria-details'),
  disabled: BooleanType.define('aria-disabled', 'true'),
  dropEffect: AttrType.define('aria-dropeffect', 'none'),
  errorMessage: AttrType.define('aria-errormessage'),
  expanded: TokenType.define('aria-expanded'),
  flowTo: AttrType.define('aria-flowto'),
  grabbed: TokenType.define('aria-grabbed'),
  hasPopup: TokenType.define('aria-haspopup', false),
  hidden: TokenType.define('aria-hidden'),
  invalid: TokenType.define('aria-invalid', false),
  keyShortcuts: AttrType.define('aria-keyshortcuts'),
  label: AttrType.define('aria-label'),
  labelledBy: AttrType.define('aria-labelledby'),
  level: NumberType.define('aria-level'),
  live: TokenType.define('aria-live', 'off'),
  modal: BooleanType.define('aria-modal', 'true'),
  multiLine: BooleanType.define('aria-multiline', 'true'),
  multiSelectable: BooleanType.define('aria-multiselectable', 'true'),
  orientation: TokenType.define('aria-orientation'),
  owns: AttrType.define('aria-owns'),
  placeholder: AttrType.define('aria-placeholder'),
  posInSet: NumberType.define('aria-posinset'),
  pressed: TokenType.define('aria-pressed'),
  readOnly: BooleanType.define('aria-readonly', 'true'),
  relevant: AttrType.define('aria-relevant', 'additions text'),
  required: BooleanType.define('aria-required', 'true'),
  roleDescription: AttrType.define('aria-roledescription'),
  rowCount: NumberType.define('aria-rowcount'),
  rowIndex: NumberType.define('aria-rowindex'),
  rowSpan: NumberType.define('aria-rowspan'),
  selected: TokenType.define('aria-selected'),
  setSize: NumberType.define('aria-setsize'),
  sort: TokenType.define('aria-sort', 'none'),
  valueMax: NumberType.define('aria-valuemax'),
  valueMin: NumberType.define('aria-valuemin'),
  valueNow: NumberType.define('aria-valuenow'),
  valueText: AttrType.define('aria-valuetext')
});
module.exports = AriaType;

/***/ }),
/* 31 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(1);
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));
var _createClass2 = _interopRequireDefault(__webpack_require__(4));
var _get2 = _interopRequireDefault(__webpack_require__(14));
var _inherits2 = _interopRequireDefault(__webpack_require__(6));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(11));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(2));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var AttrType = __webpack_require__(12);
var TokenType = /*#__PURE__*/function (_AttrType) {
  (0, _inherits2["default"])(TokenType, _AttrType);
  var _super = _createSuper(TokenType);
  function TokenType() {
    (0, _classCallCheck2["default"])(this, TokenType);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(TokenType, null, [{
    key: "get",
    value:
    /**
     * @param {ElemType} elem
     * @param {string} propName
     * @returns {string|boolean|undefined}
     */
    function get(elem, propName) {
      var value = (0, _get2["default"])((0, _getPrototypeOf2["default"])(TokenType), "get", this).call(this, elem, propName);
      return value === 'true' || value !== 'false' && value;
    }

    /**
     * @param {ElemType} elem
     * @param {string} propName
     * @param {string|boolean|null|undefined} value
     */
  }, {
    key: "update",
    value: function update(elem, propName, value) {
      if (value === null || value === this.defaultValue) {
        elem.node.removeAttribute(this.nodeName);
      } else if (String(value) !== elem.node.getAttribute(this.nodeName)) {
        elem.node.setAttribute(this.nodeName, value);
      }
    }
  }]);
  return TokenType;
}(AttrType);
(0, _defineProperty2["default"])(TokenType, "defaultValue", undefined);
module.exports = TokenType;

/***/ }),
/* 32 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(1);
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));
var _createClass2 = _interopRequireDefault(__webpack_require__(4));
var _inherits2 = _interopRequireDefault(__webpack_require__(6));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(11));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var PropType = __webpack_require__(33);
var Attributes = /*#__PURE__*/function (_PropType) {
  (0, _inherits2["default"])(Attributes, _PropType);
  var _super = _createSuper(Attributes);
  function Attributes() {
    (0, _classCallCheck2["default"])(this, Attributes);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(Attributes, null, [{
    key: "set",
    value:
    /**
     * @param {ElemType} elem
     * @param {string} name
     * @param {{}|null} value
     */
    function set(elem, name, value) {
      var vnode = elem.vnode;
      if (!value) {
        delete vnode.attributes;
        return;
      }
      if (vnode.attributes) {
        value = Object.assign(vnode.attributes, value);
      }
      delete vnode.attributes;
      vnode.attributes = value;
    }

    /**
     * @param {ElemType} elem
     * @param {string} name
     * @param {*} attributes
     */
  }, {
    key: "update",
    value: function update(elem, name, attributes) {
      var attr, value;
      for (attr in attributes) {
        value = attributes[attr];
        if (value === null) {
          elem.node.removeAttribute(attr);
        } else if (value !== elem.node.getAttribute(attr)) {
          elem.node.setAttribute(attr, value);
        }
      }
    }

    /**
     * @param {ElemType} elem
     * @param {string} name
     * @param {{}} attributes
     */
  }, {
    key: "reset",
    value: function reset(elem, name, attributes) {
      var attr;
      for (attr in attributes) {
        var _elem$vnode$attribute;
        if (!((_elem$vnode$attribute = elem.vnode.attributes) !== null && _elem$vnode$attribute !== void 0 && _elem$vnode$attribute.hasOwnProperty(attr))) {
          elem.node.removeAttribute(attr);
        }
      }
    }
  }]);
  return Attributes;
}(PropType);
module.exports = Attributes;

/***/ }),
/* 33 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(1);
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));
var _createClass2 = _interopRequireDefault(__webpack_require__(4));
var filterTypes = {
  '[object Null]': true,
  '[object Boolean]': true,
  '[object Undefined]': true
};

/**
 * @abstract
 */
var PropType = /*#__PURE__*/function () {
  function PropType() {
    (0, _classCallCheck2["default"])(this, PropType);
  }
  (0, _createClass2["default"])(PropType, null, [{
    key: "get",
    value:
    /**
     * @param {ElemType} elem
     * @param {string} name
     * @returns {string|null|*}
     */
    function get(elem, name) {
      return elem.node[name];
    }

    /**
     * @param {ElemType} elem
     * @param {string} name
     * @param {string|null|*} value
     */
  }, {
    key: "set",
    value: function set(elem, name, value) {
      elem.vnode[name] = value;
    }

    /**
     * @param {ElemType} elem
     * @param {string} name
     * @param {*} value
     */
  }, {
    key: "update",
    value: function update(elem, name, value) {
      if (value !== elem.node[name]) {
        elem.node[name] = value;
      }
    }

    /**
     * @param {ElemType} elem
     * @param {string} name
     */
  }, {
    key: "reset",
    value: function reset(elem, name) {
      if (!elem.vnode.hasOwnProperty(name)) {
        elem.node[name] = elem.__sampleNode[name];
      }
    }

    /**
     * @param {*} value
     * @return {boolean}
     */
  }, {
    key: "filter",
    value: function filter(value) {
      return !filterTypes[toString.call(value)];
    }
  }]);
  return PropType;
}();
module.exports = PropType;

/***/ }),
/* 34 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(1);
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(25));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));
var _createClass2 = _interopRequireDefault(__webpack_require__(4));
var _get2 = _interopRequireDefault(__webpack_require__(14));
var _inherits2 = _interopRequireDefault(__webpack_require__(6));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(11));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(2));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var AttrType = __webpack_require__(12);
var Class = /*#__PURE__*/function (_AttrType) {
  (0, _inherits2["default"])(Class, _AttrType);
  var _super = _createSuper(Class);
  function Class() {
    (0, _classCallCheck2["default"])(this, Class);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(Class, null, [{
    key: "update",
    value:
    /**
     * @param {ElemType} elem
     */
    function update(elem) {
      var arr = [elem.vnode.className];
      var classList = elem.vnode.classList;
      if (classList) {
        arr.push.apply(arr, (0, _toConsumableArray2["default"])(classList));
      }
      var className = arr.filter(Boolean).join(' ');
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Class), "update", this).call(this, elem, this.nodeName, className || null);
    }

    /**
     * @param {constructor @link ElemType} constructor
     * @return {string}
     */
  }, {
    key: "generate",
    value: function generate(constructor) {
      if (constructor.hasOwnProperty('className')) {
        return constructor.className;
      }
      var set = new Set();
      var proto = constructor;
      while (proto["class"] !== null) {
        set.add(proto["class"]);
        proto = Object.getPrototypeOf(proto);
      }
      var className = Array.from(set).join(' ');
      return constructor.className = className || null;
    }
  }]);
  return Class;
}(AttrType);
(0, _defineProperty2["default"])(Class, "nodeName", 'class');
module.exports = Class;

/***/ }),
/* 35 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(1);
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));
var _createClass2 = _interopRequireDefault(__webpack_require__(4));
var _inherits2 = _interopRequireDefault(__webpack_require__(6));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(11));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var PropType = __webpack_require__(33);
var ClassList = /*#__PURE__*/function (_PropType) {
  (0, _inherits2["default"])(ClassList, _PropType);
  var _super = _createSuper(ClassList);
  function ClassList() {
    (0, _classCallCheck2["default"])(this, ClassList);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(ClassList, null, [{
    key: "set",
    value:
    /**
     * @param {ElemType} elem
     * @param {string} name
     * @param {string|null|*} value
     */
    function set(elem, name, value) {
      elem.vnode.classList = [elem.vnode.classList, value].flat();
    }
  }]);
  return ClassList;
}(PropType);
module.exports = ClassList;

/***/ }),
/* 36 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(1);
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));
var _createClass2 = _interopRequireDefault(__webpack_require__(4));
var _inherits2 = _interopRequireDefault(__webpack_require__(6));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(11));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var PropType = __webpack_require__(33);
var Dataset = /*#__PURE__*/function (_PropType) {
  (0, _inherits2["default"])(Dataset, _PropType);
  var _super = _createSuper(Dataset);
  function Dataset() {
    (0, _classCallCheck2["default"])(this, Dataset);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(Dataset, null, [{
    key: "update",
    value:
    /**
     * @param {ElemType} elem
     * @param {string} name
     * @param {*} dataset
     */
    function update(elem, name, dataset) {
      var attr, value;
      for (attr in dataset) {
        value = dataset[attr];
        if (value === null) {
          delete elem.node.dataset[attr];
        } else if (value !== elem.node.dataset[attr]) {
          elem.node.dataset[attr] = value;
        }
      }
    }

    /**
     * @param {ElemType} elem
     * @param {string} name
     * @param {{}} dataset
     */
  }, {
    key: "reset",
    value: function reset(elem, name, dataset) {
      var attr;
      for (attr in dataset) {
        var _elem$vnode$dataset;
        if (!((_elem$vnode$dataset = elem.vnode.dataset) !== null && _elem$vnode$dataset !== void 0 && _elem$vnode$dataset.hasOwnProperty(attr))) {
          delete elem.node.dataset[attr];
        }
      }
    }
  }]);
  return Dataset;
}(PropType);
module.exports = Dataset;

/***/ }),
/* 37 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(1);
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));
var _createClass2 = _interopRequireDefault(__webpack_require__(4));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(2));
var window = __webpack_require__(29);
var HTMLElement = window.HTMLElement;
var EventType = /*#__PURE__*/function () {
  /**
   * @param {Event|*} e
   * @param {ElemType|*} context
   */
  function EventType(e, context) {
    (0, _classCallCheck2["default"])(this, EventType);
    this.nativeEvent = e;
    this.currentTarget = context;
  }

  /**
   * @return {ElemType|*}
   */
  (0, _createClass2["default"])(EventType, [{
    key: "target",
    get: function get() {
      var elem = this.currentTarget;
      var node = this.nativeEvent.target;
      var target = elem.getElemByNode(node);
      if (target) {
        return target;
      }
      target = EventType.ElemType.render({
        node: node
      });
      do {
        node = node.parentNode;
        target.__parent = elem.getElemByNode(node);
      } while (node && !target.__parent);
      return target;
    }

    /**
     * @return {ElemType|*|null}
     */
  }, {
    key: "relatedTarget",
    get: function get() {
      var node = this.nativeEvent.relatedTarget;
      return node && this.currentTarget.rootElem.getElemByNode(node);
    }

    /**
     * @return {ElemType|*|null}
     */
  }, {
    key: "submitter",
    get: function get() {
      var node = this.nativeEvent.submitter;
      return node && this.currentTarget.getElemByNode(node);
    }

    /**
     * @param {ElemType} elem
     * @param {string} name
     * @return {function|null}
     */
  }], [{
    key: "get",
    value: function get(elem, name) {
      return elem.node[name];
    }

    /**
     * @param {ElemType} elem
     * @param {string} name
     * @param {function|null} callback
     */
  }, {
    key: "set",
    value: function set(elem, name, callback) {
      if (!callback) {
        delete elem.vnode[name];
        return;
      }
      elem.vnode[name] = function (e) {
        var event = new EventType(e, elem);
        return callback.call(elem, event, elem.getElemByNode(e.target));
      };
    }

    /**
     * @param {ElemType} elem
     * @param {string} name
     * @param {function} callback
     */
  }, {
    key: "update",
    value: function update(elem, name, callback) {
      elem.node[name] = callback;
    }

    /**
     * @param {ElemType} elem
     * @param {string} name
     */
  }, {
    key: "reset",
    value: function reset(elem, name) {
      if (!elem.vnode.hasOwnProperty(name)) {
        elem.node[name] = null;
      }
    }

    /**
     * @return {{string: constructor @link EventType}}
     */
  }]);
  return EventType;
}();
/**
 * @param {constructor @link Event} constructor
 * @param {boolean} [bubbles=false]
 * @param {boolean} [cancelable=false]
 * @return {{constructor, dict: {cancelable, bubbles}}}
 */
(0, _defineProperty2["default"])(EventType, "ElemType", void 0);
(0, _defineProperty2["default"])(EventType, "types", {
  afterprint: define(window.Event),
  animationcancel: define(window.AnimationEvent, true),
  animationend: define(window.AnimationEvent, true),
  animationiteration: define(window.AnimationEvent, true),
  animationstart: define(window.AnimationEvent, true),
  auxclick: define(window.MouseEvent, true, true),
  beforeinput: define(window.Event, true, true),
  beforematch: define(window.Event),
  beforeprint: define(window.Event),
  beforeunload: define(window.Event),
  blur: define(window.FocusEvent),
  cancel: define(window.Event, false, true),
  canplay: define(window.Event),
  canplaythrough: define(window.Event),
  change: define(window.Event, true),
  click: define(window.MouseEvent, true, true),
  close: define(window.Event),
  contextlost: define(window.Event),
  contextmenu: define(window.MouseEvent, true, true),
  contextrestored: define(window.Event),
  copy: define(window.ClipboardEvent, true, true),
  cuechange: define(window.Event),
  cut: define(window.ClipboardEvent, true, true),
  dblclick: define(window.MouseEvent, true, true),
  drag: define(window.DragEvent, true, true),
  dragend: define(window.DragEvent, true),
  dragenter: define(window.DragEvent, true, true),
  dragleave: define(window.DragEvent, true),
  dragover: define(window.DragEvent, true, true),
  dragstart: define(window.DragEvent, true, true),
  drop: define(window.DragEvent, true, true),
  durationchange: define(window.Event),
  emptied: define(window.Event),
  ended: define(window.Event),
  error: define(window.Event),
  focus: define(window.FocusEvent),
  focusin: define(window.FocusEvent, true),
  focusout: define(window.FocusEvent, true),
  formdata: define(window.FormDataEvent),
  gotpointercapture: define(window.PointerEvent, true),
  hashchange: define(window.HashChangeEvent),
  input: define(window.InputEvent, true),
  invalid: define(window.Event, false, true),
  keydown: define(window.KeyboardEvent, true, true),
  keypress: define(window.KeyboardEvent, true, true),
  keyup: define(window.KeyboardEvent, true, true),
  languagechange: define(window.Event),
  load: define(window.Event),
  loadeddata: define(window.Event),
  loadedmetadata: define(window.Event),
  loadstart: define(window.Event),
  lostpointercapture: define(window.PointerEvent, true),
  message: define(window.MessageEvent),
  messageerror: define(window.MessageEvent),
  mousedown: define(window.MouseEvent, true, true),
  mouseenter: define(window.MouseEvent),
  mouseleave: define(window.MouseEvent),
  mousemove: define(window.MouseEvent, true, true),
  mouseout: define(window.MouseEvent, true, true),
  mouseover: define(window.MouseEvent, true, true),
  mouseup: define(window.MouseEvent, true, true),
  offline: define(window.Event),
  online: define(window.Event),
  pagehide: define(window.PageTransitionEvent),
  pageshow: define(window.PageTransitionEvent),
  paste: define(window.ClipboardEvent, true, true),
  pause: define(window.Event),
  play: define(window.Event),
  playing: define(window.Event),
  pointercancel: define(window.PointerEvent, true),
  pointerdown: define(window.PointerEvent, true, true),
  pointerenter: define(window.PointerEvent),
  pointerleave: define(window.PointerEvent),
  pointermove: define(window.PointerEvent, true, true),
  pointerout: define(window.PointerEvent, true, true),
  pointerover: define(window.PointerEvent, true, true),
  pointerrawupdate: define(window.PointerEvent, true),
  pointerup: define(window.PointerEvent, true, true),
  popstate: define(window.PopStateEvent),
  progress: define(window.ProgressEvent),
  ratechange: define(window.Event),
  reset: define(window.Event, true, true),
  resize: define(window.UIEvent),
  rejectionhandled: define(window.PromiseRejectionEvent),
  scroll: define(window.Event, true),
  securitypolicyviolation: define(window.SecurityPolicyViolationEvent, true),
  seeked: define(window.Event),
  seeking: define(window.Event),
  select: define(window.UIEvent, true),
  slotchange: define(window.Event, true),
  stalled: define(window.Event),
  storage: define(window.StorageEvent),
  submit: define(window.SubmitEvent, true, true),
  suspend: define(window.Event),
  timeupdate: define(window.Event),
  toggle: define(window.Event),
  touchcancel: define(window.TouchEvent, true),
  touchend: define(window.TouchEvent, true, true),
  touchmove: define(window.TouchEvent, true, true),
  touchstart: define(window.TouchEvent, true, true),
  transitioncancel: define(window.TransitionEvent, true),
  transitionend: define(window.TransitionEvent, true, true),
  transitionrun: define(window.TransitionEvent, true),
  transitionstart: define(window.TransitionEvent, true),
  unhandledrejection: define(window.PromiseRejectionEvent),
  unload: define(window.Event),
  volumechange: define(window.Event),
  waiting: define(window.Event),
  wheel: define(window.WheelEvent, true, true)
});
(0, _defineProperty2["default"])(EventType, "props", {});
(function () {
  var type, prop;
  for (type in EventType.types) {
    prop = 'on' + type;
    if (prop in HTMLElement.prototype) {
      EventType.props[prop] = EventType;
    }
  }
})();
(0, _defineProperty2["default"])(EventType, "members", {
  AT_TARGET: true,
  BUBBLING_PHASE: true,
  CAPTURING_PHASE: true,
  DOM_DELTA_LINE: true,
  DOM_DELTA_PAGE: true,
  DOM_DELTA_PIXEL: true,
  DOM_KEY_LOCATION_LEFT: true,
  DOM_KEY_LOCATION_NUMPAD: true,
  DOM_KEY_LOCATION_RIGHT: true,
  DOM_KEY_LOCATION_STANDARD: true,
  NONE: true,
  altKey: true,
  altitudeAngle: true,
  animationName: true,
  azimuthAngle: true,
  blockedURI: true,
  bubbles: true,
  button: true,
  buttons: true,
  cancelable: true,
  changedTouches: true,
  charCode: true,
  clientX: true,
  clientY: true,
  clipboardData: true,
  code: true,
  columnNumber: true,
  composed: true,
  composedPath: false,
  ctrlKey: true,
  data: true,
  dataTransfer: true,
  defaultPrevented: true,
  deltaMode: true,
  deltaX: true,
  deltaY: true,
  deltaZ: true,
  detail: true,
  disposition: true,
  documentURI: true,
  effectiveDirective: true,
  elapsedTime: true,
  eventPhase: true,
  formData: true,
  getCoalescedEvents: false,
  getModifierState: false,
  getPredictedEvents: false,
  getTargetRanges: false,
  height: true,
  inputType: true,
  isComposing: true,
  isPrimary: true,
  isTrusted: true,
  key: true,
  keyCode: true,
  lastEventId: true,
  layerX: true,
  layerY: true,
  lengthComputable: true,
  lineNumber: true,
  loaded: true,
  location: true,
  metaKey: true,
  movementX: true,
  movementY: true,
  newURL: true,
  newValue: true,
  offsetX: true,
  offsetY: true,
  oldURL: true,
  oldValue: true,
  origin: true,
  originalPolicy: true,
  pageX: true,
  pageY: true,
  path: true,
  persisted: true,
  pointerId: true,
  pointerType: true,
  ports: true,
  pressure: true,
  preventDefault: false,
  promise: true,
  propertyName: true,
  pseudoElement: true,
  reason: true,
  referrer: true,
  repeat: true,
  sample: true,
  screenX: true,
  screenY: true,
  shiftKey: true,
  source: true,
  sourceCapabilities: true,
  sourceFile: true,
  state: true,
  statusCode: true,
  stopImmediatePropagation: false,
  stopPropagation: false,
  storageArea: true,
  tangentialPressure: true,
  targetTouches: true,
  tiltX: true,
  tiltY: true,
  timeStamp: true,
  total: true,
  touches: true,
  twist: true,
  type: true,
  url: true,
  userActivation: true,
  view: true,
  violatedDirective: true,
  wheelDelta: true,
  wheelDeltaX: true,
  wheelDeltaY: true,
  which: true,
  width: true,
  x: true,
  y: true
});
(function () {
  var desc;
  var _loop = function _loop(name) {
    desc = EventType.members[name] ? {
      get: function get() {
        return this.nativeEvent[name];
      }
    } : {
      value: function value() {
        var _this$nativeEvent;
        return (_this$nativeEvent = this.nativeEvent)[name].apply(_this$nativeEvent, arguments);
      }
    };
    Object.defineProperty(EventType.prototype, name, desc);
  };
  for (var name in EventType.members) {
    _loop(name);
  }
})();
function define(constructor) {
  var bubbles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var cancelable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return {
    constructor: constructor,
    dict: {
      bubbles: bubbles,
      cancelable: cancelable
    }
  };
}
module.exports = EventType;

/***/ }),
/* 38 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(1);
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));
var _createClass2 = _interopRequireDefault(__webpack_require__(4));
var _inherits2 = _interopRequireDefault(__webpack_require__(6));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(11));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(2));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var AttrType = __webpack_require__(12);
var counter = 0;
var Id = /*#__PURE__*/function (_AttrType) {
  (0, _inherits2["default"])(Id, _AttrType);
  var _super = _createSuper(Id);
  function Id() {
    (0, _classCallCheck2["default"])(this, Id);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(Id, null, [{
    key: "generate",
    value: function generate() {
      var str = (counter++).toString(36);
      return 'ID_' + str.padStart(4, '0');
    }
  }]);
  return Id;
}(AttrType);
(0, _defineProperty2["default"])(Id, "nodeName", 'id');
module.exports = Id;

/***/ }),
/* 39 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(1);
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));
var _createClass2 = _interopRequireDefault(__webpack_require__(4));
var _inherits2 = _interopRequireDefault(__webpack_require__(6));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(11));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var PropType = __webpack_require__(33);
var InnerHTML = /*#__PURE__*/function (_PropType) {
  (0, _inherits2["default"])(InnerHTML, _PropType);
  var _super = _createSuper(InnerHTML);
  function InnerHTML() {
    (0, _classCallCheck2["default"])(this, InnerHTML);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(InnerHTML, null, [{
    key: "set",
    value:
    /**
     * @param {ElemType} elem
     * @param {string} name
     * @param {string|null|*[]|*} value
     */
    function set(elem, name, value) {
      elem.vnode[name] = Array.isArray(value) ? value.filter(PropType.filter).join('') : value;
    }
  }]);
  return InnerHTML;
}(PropType);
module.exports = InnerHTML;

/***/ }),
/* 40 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(1);
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));
var _createClass2 = _interopRequireDefault(__webpack_require__(4));
var _inherits2 = _interopRequireDefault(__webpack_require__(6));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(11));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(2));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var _require = __webpack_require__(29),
  document = _require.document;
var AttrType = __webpack_require__(12);
var sampleNode = document.createElement('div');
var Style = /*#__PURE__*/function (_AttrType) {
  (0, _inherits2["default"])(Style, _AttrType);
  var _super = _createSuper(Style);
  function Style() {
    (0, _classCallCheck2["default"])(this, Style);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(Style, null, [{
    key: "set",
    value: function set(elem, prop, value) {
      if (typeof value === 'string' || value === null) {
        elem.vnode.style = value || null;
        return;
      }
      Object.assign(sampleNode.style, value);
      elem.vnode.style = sampleNode.getAttribute('style') || null;
      sampleNode.style = '';
    }
  }]);
  return Style;
}(AttrType);
(0, _defineProperty2["default"])(Style, "nodeName", 'style');
module.exports = Style;

/***/ }),
/* 41 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(1);
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));
var _createClass2 = _interopRequireDefault(__webpack_require__(4));
var _require = __webpack_require__(29),
  Text = _require.Text;
var TextType = /*#__PURE__*/function () {
  /**
   * @param {string|number|*} data
   */
  function TextType(data) {
    (0, _classCallCheck2["default"])(this, TextType);
    this.data = String(data);
    this.node = null;
  }

  /**
   * @param {Text} [node]
   * @private
   */
  (0, _createClass2["default"])(TextType, [{
    key: "__init",
    value: function __init(node) {
      this.node = node || new Text(this.data);
    }

    /**
     * @param {boolean} [keepNode]
     * @private
     */
  }, {
    key: "__destroy",
    value: function __destroy(keepNode) {
      keepNode || this.node.remove();
    }
  }]);
  return TextType;
}();
module.exports = TextType;

/***/ }),
/* 42 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(1);
var _createClass2 = _interopRequireDefault(__webpack_require__(4));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));
var _inherits2 = _interopRequireDefault(__webpack_require__(6));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(11));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(2));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var AttrType = __webpack_require__(12);
var BooleanType = __webpack_require__(13);
var NumberType = __webpack_require__(16);
var ElemType = __webpack_require__(18);
var InnerText = __webpack_require__(43);

/**
 * @abstract
 */
var RoleType = /*#__PURE__*/function (_ElemType) {
  (0, _inherits2["default"])(RoleType, _ElemType);
  var _super = _createSuper(RoleType);
  function RoleType() {
    (0, _classCallCheck2["default"])(this, RoleType);
    return _super.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleType);
}(ElemType);
(0, _defineProperty2["default"])(RoleType, "props", {
  accessKey: AttrType.define('accesskey'),
  autocapitalize: AttrType.define('autocapitalize'),
  autofocus: BooleanType.define('autofocus'),
  contentEditable: AttrType.define('contenteditable'),
  dir: AttrType.define('dir'),
  draggable: BooleanType.define('draggable'),
  enterKeyHint: AttrType.define('enterkeyhint'),
  inputMode: AttrType.define('inputmode'),
  lang: AttrType.define('lang'),
  spellcheck: BooleanType.define('spellcheck'),
  tabIndex: NumberType.define('tabindex', NaN),
  title: AttrType.define('title'),
  translate: BooleanType.define('translate'),
  innerText: InnerText
});
module.exports = RoleType;

/***/ }),
/* 43 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(1);
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));
var _createClass2 = _interopRequireDefault(__webpack_require__(4));
var _inherits2 = _interopRequireDefault(__webpack_require__(6));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(11));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var PropType = __webpack_require__(33);
var InnerText = /*#__PURE__*/function (_PropType) {
  (0, _inherits2["default"])(InnerText, _PropType);
  var _super = _createSuper(InnerText);
  function InnerText() {
    (0, _classCallCheck2["default"])(this, InnerText);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(InnerText, null, [{
    key: "set",
    value:
    /**
     * @param {ElemType} elem
     * @param {string} name
     * @param {string|null|*[]|*} value
     */
    function set(elem, name, value) {
      elem.vnode[name] = Array.isArray(value) ? value.filter(PropType.filter).join('\n') : value;
    }
  }]);
  return InnerText;
}(PropType);
module.exports = InnerText;

/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(1);
var _createClass2 = _interopRequireDefault(__webpack_require__(4));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));
var _inherits2 = _interopRequireDefault(__webpack_require__(6));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(11));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(2));
var _class, _class2, _class3, _class4, _class5, _class6, _class7, _class8, _class9, _class10, _class11, _class12, _class13, _class14, _class15, _class16, _class17, _class18, _class19, _class20, _class21, _class22, _class23, _class24, _class25, _class26, _class27, _class28, _class29, _class30, _class31, _class32, _class33, _class34, _class35, _class36, _class37, _class38, _class39, _class40, _class41, _class42, _class43, _class44, _class45, _class46, _class47, _class48, _class49, _class50, _class51, _class52, _class53, _class54, _class55, _class56, _class57, _class58, _class59, _class60, _class61, _class62, _class63, _class64, _class65, _class66, _class67, _class68, _class69, _class70, _class71, _class72, _class73, _class74;
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var RoleType = __webpack_require__(42);
exports.RoleAlert = (_class = /*#__PURE__*/function (_RoleType) {
  (0, _inherits2["default"])(RoleAlert, _RoleType);
  var _super = _createSuper(RoleAlert);
  function RoleAlert() {
    (0, _classCallCheck2["default"])(this, RoleAlert);
    return _super.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleAlert);
}(RoleType), (0, _defineProperty2["default"])(_class, "role", 'Alert'), _class);
exports.RoleAlertDialog = (_class2 = /*#__PURE__*/function (_RoleType2) {
  (0, _inherits2["default"])(RoleAlertDialog, _RoleType2);
  var _super2 = _createSuper(RoleAlertDialog);
  function RoleAlertDialog() {
    (0, _classCallCheck2["default"])(this, RoleAlertDialog);
    return _super2.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleAlertDialog);
}(RoleType), (0, _defineProperty2["default"])(_class2, "role", 'AlertDialog'), _class2);
exports.RoleApplication = (_class3 = /*#__PURE__*/function (_RoleType3) {
  (0, _inherits2["default"])(RoleApplication, _RoleType3);
  var _super3 = _createSuper(RoleApplication);
  function RoleApplication() {
    (0, _classCallCheck2["default"])(this, RoleApplication);
    return _super3.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleApplication);
}(RoleType), (0, _defineProperty2["default"])(_class3, "role", 'Application'), _class3);
exports.RoleArticle = (_class4 = /*#__PURE__*/function (_RoleType4) {
  (0, _inherits2["default"])(RoleArticle, _RoleType4);
  var _super4 = _createSuper(RoleArticle);
  function RoleArticle() {
    (0, _classCallCheck2["default"])(this, RoleArticle);
    return _super4.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleArticle);
}(RoleType), (0, _defineProperty2["default"])(_class4, "role", 'Article'), _class4);
exports.RoleBanner = (_class5 = /*#__PURE__*/function (_RoleType5) {
  (0, _inherits2["default"])(RoleBanner, _RoleType5);
  var _super5 = _createSuper(RoleBanner);
  function RoleBanner() {
    (0, _classCallCheck2["default"])(this, RoleBanner);
    return _super5.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleBanner);
}(RoleType), (0, _defineProperty2["default"])(_class5, "role", 'Banner'), _class5);
exports.RoleBlockQuote = (_class6 = /*#__PURE__*/function (_RoleType6) {
  (0, _inherits2["default"])(RoleBlockQuote, _RoleType6);
  var _super6 = _createSuper(RoleBlockQuote);
  function RoleBlockQuote() {
    (0, _classCallCheck2["default"])(this, RoleBlockQuote);
    return _super6.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleBlockQuote);
}(RoleType), (0, _defineProperty2["default"])(_class6, "role", 'BlockQuote'), _class6);
exports.RoleButton = (_class7 = /*#__PURE__*/function (_RoleType7) {
  (0, _inherits2["default"])(RoleButton, _RoleType7);
  var _super7 = _createSuper(RoleButton);
  function RoleButton() {
    (0, _classCallCheck2["default"])(this, RoleButton);
    return _super7.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleButton);
}(RoleType), (0, _defineProperty2["default"])(_class7, "role", 'Button'), _class7);
exports.RoleCaption = (_class8 = /*#__PURE__*/function (_RoleType8) {
  (0, _inherits2["default"])(RoleCaption, _RoleType8);
  var _super8 = _createSuper(RoleCaption);
  function RoleCaption() {
    (0, _classCallCheck2["default"])(this, RoleCaption);
    return _super8.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleCaption);
}(RoleType), (0, _defineProperty2["default"])(_class8, "role", 'Caption'), _class8);
exports.RoleCell = (_class9 = /*#__PURE__*/function (_RoleType9) {
  (0, _inherits2["default"])(RoleCell, _RoleType9);
  var _super9 = _createSuper(RoleCell);
  function RoleCell() {
    (0, _classCallCheck2["default"])(this, RoleCell);
    return _super9.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleCell);
}(RoleType), (0, _defineProperty2["default"])(_class9, "role", 'Cell'), _class9);
exports.RoleCheckBox = (_class10 = /*#__PURE__*/function (_RoleType10) {
  (0, _inherits2["default"])(RoleCheckBox, _RoleType10);
  var _super10 = _createSuper(RoleCheckBox);
  function RoleCheckBox() {
    (0, _classCallCheck2["default"])(this, RoleCheckBox);
    return _super10.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleCheckBox);
}(RoleType), (0, _defineProperty2["default"])(_class10, "role", 'CheckBox'), _class10);
exports.RoleColumnHeader = (_class11 = /*#__PURE__*/function (_RoleType11) {
  (0, _inherits2["default"])(RoleColumnHeader, _RoleType11);
  var _super11 = _createSuper(RoleColumnHeader);
  function RoleColumnHeader() {
    (0, _classCallCheck2["default"])(this, RoleColumnHeader);
    return _super11.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleColumnHeader);
}(RoleType), (0, _defineProperty2["default"])(_class11, "role", 'ColumnHeader'), _class11);
exports.RoleComboBox = (_class12 = /*#__PURE__*/function (_RoleType12) {
  (0, _inherits2["default"])(RoleComboBox, _RoleType12);
  var _super12 = _createSuper(RoleComboBox);
  function RoleComboBox() {
    (0, _classCallCheck2["default"])(this, RoleComboBox);
    return _super12.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleComboBox);
}(RoleType), (0, _defineProperty2["default"])(_class12, "role", 'ComboBox'), _class12);
exports.RoleComplementary = (_class13 = /*#__PURE__*/function (_RoleType13) {
  (0, _inherits2["default"])(RoleComplementary, _RoleType13);
  var _super13 = _createSuper(RoleComplementary);
  function RoleComplementary() {
    (0, _classCallCheck2["default"])(this, RoleComplementary);
    return _super13.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleComplementary);
}(RoleType), (0, _defineProperty2["default"])(_class13, "role", 'Complementary'), _class13);
exports.RoleContentInfo = (_class14 = /*#__PURE__*/function (_RoleType14) {
  (0, _inherits2["default"])(RoleContentInfo, _RoleType14);
  var _super14 = _createSuper(RoleContentInfo);
  function RoleContentInfo() {
    (0, _classCallCheck2["default"])(this, RoleContentInfo);
    return _super14.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleContentInfo);
}(RoleType), (0, _defineProperty2["default"])(_class14, "role", 'ContentInfo'), _class14);
exports.RoleDefinition = (_class15 = /*#__PURE__*/function (_RoleType15) {
  (0, _inherits2["default"])(RoleDefinition, _RoleType15);
  var _super15 = _createSuper(RoleDefinition);
  function RoleDefinition() {
    (0, _classCallCheck2["default"])(this, RoleDefinition);
    return _super15.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleDefinition);
}(RoleType), (0, _defineProperty2["default"])(_class15, "role", 'Definition'), _class15);
exports.RoleDialog = (_class16 = /*#__PURE__*/function (_RoleType16) {
  (0, _inherits2["default"])(RoleDialog, _RoleType16);
  var _super16 = _createSuper(RoleDialog);
  function RoleDialog() {
    (0, _classCallCheck2["default"])(this, RoleDialog);
    return _super16.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleDialog);
}(RoleType), (0, _defineProperty2["default"])(_class16, "role", 'Dialog'), _class16);
exports.RoleDirectory = (_class17 = /*#__PURE__*/function (_RoleType17) {
  (0, _inherits2["default"])(RoleDirectory, _RoleType17);
  var _super17 = _createSuper(RoleDirectory);
  function RoleDirectory() {
    (0, _classCallCheck2["default"])(this, RoleDirectory);
    return _super17.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleDirectory);
}(RoleType), (0, _defineProperty2["default"])(_class17, "role", 'Directory'), _class17);
exports.RoleDocument = (_class18 = /*#__PURE__*/function (_RoleType18) {
  (0, _inherits2["default"])(RoleDocument, _RoleType18);
  var _super18 = _createSuper(RoleDocument);
  function RoleDocument() {
    (0, _classCallCheck2["default"])(this, RoleDocument);
    return _super18.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleDocument);
}(RoleType), (0, _defineProperty2["default"])(_class18, "role", 'Document'), _class18);
exports.RoleFeed = (_class19 = /*#__PURE__*/function (_RoleType19) {
  (0, _inherits2["default"])(RoleFeed, _RoleType19);
  var _super19 = _createSuper(RoleFeed);
  function RoleFeed() {
    (0, _classCallCheck2["default"])(this, RoleFeed);
    return _super19.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleFeed);
}(RoleType), (0, _defineProperty2["default"])(_class19, "role", 'Feed'), _class19);
exports.RoleFigure = (_class20 = /*#__PURE__*/function (_RoleType20) {
  (0, _inherits2["default"])(RoleFigure, _RoleType20);
  var _super20 = _createSuper(RoleFigure);
  function RoleFigure() {
    (0, _classCallCheck2["default"])(this, RoleFigure);
    return _super20.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleFigure);
}(RoleType), (0, _defineProperty2["default"])(_class20, "role", 'Figure'), _class20);
exports.RoleForm = (_class21 = /*#__PURE__*/function (_RoleType21) {
  (0, _inherits2["default"])(RoleForm, _RoleType21);
  var _super21 = _createSuper(RoleForm);
  function RoleForm() {
    (0, _classCallCheck2["default"])(this, RoleForm);
    return _super21.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleForm);
}(RoleType), (0, _defineProperty2["default"])(_class21, "role", 'Form'), _class21);
exports.RoleGrid = (_class22 = /*#__PURE__*/function (_RoleType22) {
  (0, _inherits2["default"])(RoleGrid, _RoleType22);
  var _super22 = _createSuper(RoleGrid);
  function RoleGrid() {
    (0, _classCallCheck2["default"])(this, RoleGrid);
    return _super22.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleGrid);
}(RoleType), (0, _defineProperty2["default"])(_class22, "role", 'Grid'), _class22);
exports.RoleGridCell = (_class23 = /*#__PURE__*/function (_RoleType23) {
  (0, _inherits2["default"])(RoleGridCell, _RoleType23);
  var _super23 = _createSuper(RoleGridCell);
  function RoleGridCell() {
    (0, _classCallCheck2["default"])(this, RoleGridCell);
    return _super23.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleGridCell);
}(RoleType), (0, _defineProperty2["default"])(_class23, "role", 'GridCell'), _class23);
exports.RoleGroup = (_class24 = /*#__PURE__*/function (_RoleType24) {
  (0, _inherits2["default"])(RoleGroup, _RoleType24);
  var _super24 = _createSuper(RoleGroup);
  function RoleGroup() {
    (0, _classCallCheck2["default"])(this, RoleGroup);
    return _super24.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleGroup);
}(RoleType), (0, _defineProperty2["default"])(_class24, "role", 'Group'), _class24);
exports.RoleHeading = (_class25 = /*#__PURE__*/function (_RoleType25) {
  (0, _inherits2["default"])(RoleHeading, _RoleType25);
  var _super25 = _createSuper(RoleHeading);
  function RoleHeading() {
    (0, _classCallCheck2["default"])(this, RoleHeading);
    return _super25.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleHeading);
}(RoleType), (0, _defineProperty2["default"])(_class25, "role", 'Heading'), _class25);
exports.RoleImg = (_class26 = /*#__PURE__*/function (_RoleType26) {
  (0, _inherits2["default"])(RoleImg, _RoleType26);
  var _super26 = _createSuper(RoleImg);
  function RoleImg() {
    (0, _classCallCheck2["default"])(this, RoleImg);
    return _super26.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleImg);
}(RoleType), (0, _defineProperty2["default"])(_class26, "role", 'Img'), _class26);
exports.RoleLink = (_class27 = /*#__PURE__*/function (_RoleType27) {
  (0, _inherits2["default"])(RoleLink, _RoleType27);
  var _super27 = _createSuper(RoleLink);
  function RoleLink() {
    (0, _classCallCheck2["default"])(this, RoleLink);
    return _super27.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleLink);
}(RoleType), (0, _defineProperty2["default"])(_class27, "role", 'Link'), _class27);
exports.RoleList = (_class28 = /*#__PURE__*/function (_RoleType28) {
  (0, _inherits2["default"])(RoleList, _RoleType28);
  var _super28 = _createSuper(RoleList);
  function RoleList() {
    (0, _classCallCheck2["default"])(this, RoleList);
    return _super28.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleList);
}(RoleType), (0, _defineProperty2["default"])(_class28, "role", 'List'), _class28);
exports.RoleListBox = (_class29 = /*#__PURE__*/function (_RoleType29) {
  (0, _inherits2["default"])(RoleListBox, _RoleType29);
  var _super29 = _createSuper(RoleListBox);
  function RoleListBox() {
    (0, _classCallCheck2["default"])(this, RoleListBox);
    return _super29.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleListBox);
}(RoleType), (0, _defineProperty2["default"])(_class29, "role", 'ListBox'), _class29);
exports.RoleListItem = (_class30 = /*#__PURE__*/function (_RoleType30) {
  (0, _inherits2["default"])(RoleListItem, _RoleType30);
  var _super30 = _createSuper(RoleListItem);
  function RoleListItem() {
    (0, _classCallCheck2["default"])(this, RoleListItem);
    return _super30.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleListItem);
}(RoleType), (0, _defineProperty2["default"])(_class30, "role", 'ListItem'), _class30);
exports.RoleLog = (_class31 = /*#__PURE__*/function (_RoleType31) {
  (0, _inherits2["default"])(RoleLog, _RoleType31);
  var _super31 = _createSuper(RoleLog);
  function RoleLog() {
    (0, _classCallCheck2["default"])(this, RoleLog);
    return _super31.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleLog);
}(RoleType), (0, _defineProperty2["default"])(_class31, "role", 'Log'), _class31);
exports.RoleMain = (_class32 = /*#__PURE__*/function (_RoleType32) {
  (0, _inherits2["default"])(RoleMain, _RoleType32);
  var _super32 = _createSuper(RoleMain);
  function RoleMain() {
    (0, _classCallCheck2["default"])(this, RoleMain);
    return _super32.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleMain);
}(RoleType), (0, _defineProperty2["default"])(_class32, "role", 'Main'), _class32);
exports.RoleMarquee = (_class33 = /*#__PURE__*/function (_RoleType33) {
  (0, _inherits2["default"])(RoleMarquee, _RoleType33);
  var _super33 = _createSuper(RoleMarquee);
  function RoleMarquee() {
    (0, _classCallCheck2["default"])(this, RoleMarquee);
    return _super33.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleMarquee);
}(RoleType), (0, _defineProperty2["default"])(_class33, "role", 'Marquee'), _class33);
exports.RoleMath = (_class34 = /*#__PURE__*/function (_RoleType34) {
  (0, _inherits2["default"])(RoleMath, _RoleType34);
  var _super34 = _createSuper(RoleMath);
  function RoleMath() {
    (0, _classCallCheck2["default"])(this, RoleMath);
    return _super34.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleMath);
}(RoleType), (0, _defineProperty2["default"])(_class34, "role", 'Math'), _class34);
exports.RoleMenu = (_class35 = /*#__PURE__*/function (_RoleType35) {
  (0, _inherits2["default"])(RoleMenu, _RoleType35);
  var _super35 = _createSuper(RoleMenu);
  function RoleMenu() {
    (0, _classCallCheck2["default"])(this, RoleMenu);
    return _super35.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleMenu);
}(RoleType), (0, _defineProperty2["default"])(_class35, "role", 'Menu'), _class35);
exports.RoleMenuBar = (_class36 = /*#__PURE__*/function (_RoleType36) {
  (0, _inherits2["default"])(RoleMenuBar, _RoleType36);
  var _super36 = _createSuper(RoleMenuBar);
  function RoleMenuBar() {
    (0, _classCallCheck2["default"])(this, RoleMenuBar);
    return _super36.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleMenuBar);
}(RoleType), (0, _defineProperty2["default"])(_class36, "role", 'MenuBar'), _class36);
exports.RoleMenuItem = (_class37 = /*#__PURE__*/function (_RoleType37) {
  (0, _inherits2["default"])(RoleMenuItem, _RoleType37);
  var _super37 = _createSuper(RoleMenuItem);
  function RoleMenuItem() {
    (0, _classCallCheck2["default"])(this, RoleMenuItem);
    return _super37.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleMenuItem);
}(RoleType), (0, _defineProperty2["default"])(_class37, "role", 'MenuItem'), _class37);
exports.RoleMenuItemCheckBox = (_class38 = /*#__PURE__*/function (_RoleType38) {
  (0, _inherits2["default"])(RoleMenuItemCheckBox, _RoleType38);
  var _super38 = _createSuper(RoleMenuItemCheckBox);
  function RoleMenuItemCheckBox() {
    (0, _classCallCheck2["default"])(this, RoleMenuItemCheckBox);
    return _super38.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleMenuItemCheckBox);
}(RoleType), (0, _defineProperty2["default"])(_class38, "role", 'MenuItemCheckBox'), _class38);
exports.RoleMenuItemRadio = (_class39 = /*#__PURE__*/function (_RoleType39) {
  (0, _inherits2["default"])(RoleMenuItemRadio, _RoleType39);
  var _super39 = _createSuper(RoleMenuItemRadio);
  function RoleMenuItemRadio() {
    (0, _classCallCheck2["default"])(this, RoleMenuItemRadio);
    return _super39.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleMenuItemRadio);
}(RoleType), (0, _defineProperty2["default"])(_class39, "role", 'MenuItemRadio'), _class39);
exports.RoleNavigation = (_class40 = /*#__PURE__*/function (_RoleType40) {
  (0, _inherits2["default"])(RoleNavigation, _RoleType40);
  var _super40 = _createSuper(RoleNavigation);
  function RoleNavigation() {
    (0, _classCallCheck2["default"])(this, RoleNavigation);
    return _super40.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleNavigation);
}(RoleType), (0, _defineProperty2["default"])(_class40, "role", 'Navigation'), _class40);
exports.RoleNone = (_class41 = /*#__PURE__*/function (_RoleType41) {
  (0, _inherits2["default"])(RoleNone, _RoleType41);
  var _super41 = _createSuper(RoleNone);
  function RoleNone() {
    (0, _classCallCheck2["default"])(this, RoleNone);
    return _super41.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleNone);
}(RoleType), (0, _defineProperty2["default"])(_class41, "role", 'None'), _class41);
exports.RoleNote = (_class42 = /*#__PURE__*/function (_RoleType42) {
  (0, _inherits2["default"])(RoleNote, _RoleType42);
  var _super42 = _createSuper(RoleNote);
  function RoleNote() {
    (0, _classCallCheck2["default"])(this, RoleNote);
    return _super42.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleNote);
}(RoleType), (0, _defineProperty2["default"])(_class42, "role", 'Note'), _class42);
exports.RoleOption = (_class43 = /*#__PURE__*/function (_RoleType43) {
  (0, _inherits2["default"])(RoleOption, _RoleType43);
  var _super43 = _createSuper(RoleOption);
  function RoleOption() {
    (0, _classCallCheck2["default"])(this, RoleOption);
    return _super43.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleOption);
}(RoleType), (0, _defineProperty2["default"])(_class43, "role", 'Option'), _class43);
exports.RoleParagraph = (_class44 = /*#__PURE__*/function (_RoleType44) {
  (0, _inherits2["default"])(RoleParagraph, _RoleType44);
  var _super44 = _createSuper(RoleParagraph);
  function RoleParagraph() {
    (0, _classCallCheck2["default"])(this, RoleParagraph);
    return _super44.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleParagraph);
}(RoleType), (0, _defineProperty2["default"])(_class44, "role", 'Paragraph'), _class44);
exports.RolePresentation = (_class45 = /*#__PURE__*/function (_RoleType45) {
  (0, _inherits2["default"])(RolePresentation, _RoleType45);
  var _super45 = _createSuper(RolePresentation);
  function RolePresentation() {
    (0, _classCallCheck2["default"])(this, RolePresentation);
    return _super45.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RolePresentation);
}(RoleType), (0, _defineProperty2["default"])(_class45, "role", 'Presentation'), _class45);
exports.RoleProgressBar = (_class46 = /*#__PURE__*/function (_RoleType46) {
  (0, _inherits2["default"])(RoleProgressBar, _RoleType46);
  var _super46 = _createSuper(RoleProgressBar);
  function RoleProgressBar() {
    (0, _classCallCheck2["default"])(this, RoleProgressBar);
    return _super46.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleProgressBar);
}(RoleType), (0, _defineProperty2["default"])(_class46, "role", 'ProgressBar'), _class46);
exports.RoleRadio = (_class47 = /*#__PURE__*/function (_RoleType47) {
  (0, _inherits2["default"])(RoleRadio, _RoleType47);
  var _super47 = _createSuper(RoleRadio);
  function RoleRadio() {
    (0, _classCallCheck2["default"])(this, RoleRadio);
    return _super47.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleRadio);
}(RoleType), (0, _defineProperty2["default"])(_class47, "role", 'Radio'), _class47);
exports.RoleRadioGroup = (_class48 = /*#__PURE__*/function (_RoleType48) {
  (0, _inherits2["default"])(RoleRadioGroup, _RoleType48);
  var _super48 = _createSuper(RoleRadioGroup);
  function RoleRadioGroup() {
    (0, _classCallCheck2["default"])(this, RoleRadioGroup);
    return _super48.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleRadioGroup);
}(RoleType), (0, _defineProperty2["default"])(_class48, "role", 'RadioGroup'), _class48);
exports.RoleRegion = (_class49 = /*#__PURE__*/function (_RoleType49) {
  (0, _inherits2["default"])(RoleRegion, _RoleType49);
  var _super49 = _createSuper(RoleRegion);
  function RoleRegion() {
    (0, _classCallCheck2["default"])(this, RoleRegion);
    return _super49.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleRegion);
}(RoleType), (0, _defineProperty2["default"])(_class49, "role", 'Region'), _class49);
exports.RoleRow = (_class50 = /*#__PURE__*/function (_RoleType50) {
  (0, _inherits2["default"])(RoleRow, _RoleType50);
  var _super50 = _createSuper(RoleRow);
  function RoleRow() {
    (0, _classCallCheck2["default"])(this, RoleRow);
    return _super50.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleRow);
}(RoleType), (0, _defineProperty2["default"])(_class50, "role", 'Row'), _class50);
exports.RoleRowGroup = (_class51 = /*#__PURE__*/function (_RoleType51) {
  (0, _inherits2["default"])(RoleRowGroup, _RoleType51);
  var _super51 = _createSuper(RoleRowGroup);
  function RoleRowGroup() {
    (0, _classCallCheck2["default"])(this, RoleRowGroup);
    return _super51.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleRowGroup);
}(RoleType), (0, _defineProperty2["default"])(_class51, "role", 'RowGroup'), _class51);
exports.RoleRowHeader = (_class52 = /*#__PURE__*/function (_RoleType52) {
  (0, _inherits2["default"])(RoleRowHeader, _RoleType52);
  var _super52 = _createSuper(RoleRowHeader);
  function RoleRowHeader() {
    (0, _classCallCheck2["default"])(this, RoleRowHeader);
    return _super52.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleRowHeader);
}(RoleType), (0, _defineProperty2["default"])(_class52, "role", 'RowHeader'), _class52);
exports.RoleScrollBar = (_class53 = /*#__PURE__*/function (_RoleType53) {
  (0, _inherits2["default"])(RoleScrollBar, _RoleType53);
  var _super53 = _createSuper(RoleScrollBar);
  function RoleScrollBar() {
    (0, _classCallCheck2["default"])(this, RoleScrollBar);
    return _super53.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleScrollBar);
}(RoleType), (0, _defineProperty2["default"])(_class53, "role", 'ScrollBar'), _class53);
exports.RoleSearch = (_class54 = /*#__PURE__*/function (_RoleType54) {
  (0, _inherits2["default"])(RoleSearch, _RoleType54);
  var _super54 = _createSuper(RoleSearch);
  function RoleSearch() {
    (0, _classCallCheck2["default"])(this, RoleSearch);
    return _super54.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleSearch);
}(RoleType), (0, _defineProperty2["default"])(_class54, "role", 'Search'), _class54);
exports.RoleSearchBox = (_class55 = /*#__PURE__*/function (_RoleType55) {
  (0, _inherits2["default"])(RoleSearchBox, _RoleType55);
  var _super55 = _createSuper(RoleSearchBox);
  function RoleSearchBox() {
    (0, _classCallCheck2["default"])(this, RoleSearchBox);
    return _super55.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleSearchBox);
}(RoleType), (0, _defineProperty2["default"])(_class55, "role", 'SearchBox'), _class55);
exports.RoleSectionHead = (_class56 = /*#__PURE__*/function (_RoleType56) {
  (0, _inherits2["default"])(RoleSectionHead, _RoleType56);
  var _super56 = _createSuper(RoleSectionHead);
  function RoleSectionHead() {
    (0, _classCallCheck2["default"])(this, RoleSectionHead);
    return _super56.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleSectionHead);
}(RoleType), (0, _defineProperty2["default"])(_class56, "role", 'SectionHead'), _class56);
exports.RoleSeparator = (_class57 = /*#__PURE__*/function (_RoleType57) {
  (0, _inherits2["default"])(RoleSeparator, _RoleType57);
  var _super57 = _createSuper(RoleSeparator);
  function RoleSeparator() {
    (0, _classCallCheck2["default"])(this, RoleSeparator);
    return _super57.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleSeparator);
}(RoleType), (0, _defineProperty2["default"])(_class57, "role", 'Separator'), _class57);
exports.RoleSlider = (_class58 = /*#__PURE__*/function (_RoleType58) {
  (0, _inherits2["default"])(RoleSlider, _RoleType58);
  var _super58 = _createSuper(RoleSlider);
  function RoleSlider() {
    (0, _classCallCheck2["default"])(this, RoleSlider);
    return _super58.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleSlider);
}(RoleType), (0, _defineProperty2["default"])(_class58, "role", 'Slider'), _class58);
exports.RoleSpinButton = (_class59 = /*#__PURE__*/function (_RoleType59) {
  (0, _inherits2["default"])(RoleSpinButton, _RoleType59);
  var _super59 = _createSuper(RoleSpinButton);
  function RoleSpinButton() {
    (0, _classCallCheck2["default"])(this, RoleSpinButton);
    return _super59.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleSpinButton);
}(RoleType), (0, _defineProperty2["default"])(_class59, "role", 'SpinButton'), _class59);
exports.RoleStatus = (_class60 = /*#__PURE__*/function (_RoleType60) {
  (0, _inherits2["default"])(RoleStatus, _RoleType60);
  var _super60 = _createSuper(RoleStatus);
  function RoleStatus() {
    (0, _classCallCheck2["default"])(this, RoleStatus);
    return _super60.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleStatus);
}(RoleType), (0, _defineProperty2["default"])(_class60, "role", 'Status'), _class60);
exports.RoleStrong = (_class61 = /*#__PURE__*/function (_RoleType61) {
  (0, _inherits2["default"])(RoleStrong, _RoleType61);
  var _super61 = _createSuper(RoleStrong);
  function RoleStrong() {
    (0, _classCallCheck2["default"])(this, RoleStrong);
    return _super61.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleStrong);
}(RoleType), (0, _defineProperty2["default"])(_class61, "role", 'Strong'), _class61);
exports.RoleSwitch = (_class62 = /*#__PURE__*/function (_RoleType62) {
  (0, _inherits2["default"])(RoleSwitch, _RoleType62);
  var _super62 = _createSuper(RoleSwitch);
  function RoleSwitch() {
    (0, _classCallCheck2["default"])(this, RoleSwitch);
    return _super62.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleSwitch);
}(RoleType), (0, _defineProperty2["default"])(_class62, "role", 'Switch'), _class62);
exports.RoleTab = (_class63 = /*#__PURE__*/function (_RoleType63) {
  (0, _inherits2["default"])(RoleTab, _RoleType63);
  var _super63 = _createSuper(RoleTab);
  function RoleTab() {
    (0, _classCallCheck2["default"])(this, RoleTab);
    return _super63.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleTab);
}(RoleType), (0, _defineProperty2["default"])(_class63, "role", 'Tab'), _class63);
exports.RoleTabList = (_class64 = /*#__PURE__*/function (_RoleType64) {
  (0, _inherits2["default"])(RoleTabList, _RoleType64);
  var _super64 = _createSuper(RoleTabList);
  function RoleTabList() {
    (0, _classCallCheck2["default"])(this, RoleTabList);
    return _super64.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleTabList);
}(RoleType), (0, _defineProperty2["default"])(_class64, "role", 'TabList'), _class64);
exports.RoleTabPanel = (_class65 = /*#__PURE__*/function (_RoleType65) {
  (0, _inherits2["default"])(RoleTabPanel, _RoleType65);
  var _super65 = _createSuper(RoleTabPanel);
  function RoleTabPanel() {
    (0, _classCallCheck2["default"])(this, RoleTabPanel);
    return _super65.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleTabPanel);
}(RoleType), (0, _defineProperty2["default"])(_class65, "role", 'TabPanel'), _class65);
exports.RoleTable = (_class66 = /*#__PURE__*/function (_RoleType66) {
  (0, _inherits2["default"])(RoleTable, _RoleType66);
  var _super66 = _createSuper(RoleTable);
  function RoleTable() {
    (0, _classCallCheck2["default"])(this, RoleTable);
    return _super66.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleTable);
}(RoleType), (0, _defineProperty2["default"])(_class66, "role", 'Table'), _class66);
exports.RoleTerm = (_class67 = /*#__PURE__*/function (_RoleType67) {
  (0, _inherits2["default"])(RoleTerm, _RoleType67);
  var _super67 = _createSuper(RoleTerm);
  function RoleTerm() {
    (0, _classCallCheck2["default"])(this, RoleTerm);
    return _super67.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleTerm);
}(RoleType), (0, _defineProperty2["default"])(_class67, "role", 'Term'), _class67);
exports.RoleTextBox = (_class68 = /*#__PURE__*/function (_RoleType68) {
  (0, _inherits2["default"])(RoleTextBox, _RoleType68);
  var _super68 = _createSuper(RoleTextBox);
  function RoleTextBox() {
    (0, _classCallCheck2["default"])(this, RoleTextBox);
    return _super68.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleTextBox);
}(RoleType), (0, _defineProperty2["default"])(_class68, "role", 'TextBox'), _class68);
exports.RoleTimer = (_class69 = /*#__PURE__*/function (_RoleType69) {
  (0, _inherits2["default"])(RoleTimer, _RoleType69);
  var _super69 = _createSuper(RoleTimer);
  function RoleTimer() {
    (0, _classCallCheck2["default"])(this, RoleTimer);
    return _super69.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleTimer);
}(RoleType), (0, _defineProperty2["default"])(_class69, "role", 'Timer'), _class69);
exports.RoleToolBar = (_class70 = /*#__PURE__*/function (_RoleType70) {
  (0, _inherits2["default"])(RoleToolBar, _RoleType70);
  var _super70 = _createSuper(RoleToolBar);
  function RoleToolBar() {
    (0, _classCallCheck2["default"])(this, RoleToolBar);
    return _super70.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleToolBar);
}(RoleType), (0, _defineProperty2["default"])(_class70, "role", 'ToolBar'), _class70);
exports.RoleToolTip = (_class71 = /*#__PURE__*/function (_RoleType71) {
  (0, _inherits2["default"])(RoleToolTip, _RoleType71);
  var _super71 = _createSuper(RoleToolTip);
  function RoleToolTip() {
    (0, _classCallCheck2["default"])(this, RoleToolTip);
    return _super71.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleToolTip);
}(RoleType), (0, _defineProperty2["default"])(_class71, "role", 'ToolTip'), _class71);
exports.RoleTree = (_class72 = /*#__PURE__*/function (_RoleType72) {
  (0, _inherits2["default"])(RoleTree, _RoleType72);
  var _super72 = _createSuper(RoleTree);
  function RoleTree() {
    (0, _classCallCheck2["default"])(this, RoleTree);
    return _super72.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleTree);
}(RoleType), (0, _defineProperty2["default"])(_class72, "role", 'Tree'), _class72);
exports.RoleTreeGrid = (_class73 = /*#__PURE__*/function (_RoleType73) {
  (0, _inherits2["default"])(RoleTreeGrid, _RoleType73);
  var _super73 = _createSuper(RoleTreeGrid);
  function RoleTreeGrid() {
    (0, _classCallCheck2["default"])(this, RoleTreeGrid);
    return _super73.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleTreeGrid);
}(RoleType), (0, _defineProperty2["default"])(_class73, "role", 'TreeGrid'), _class73);
exports.RoleTreeItem = (_class74 = /*#__PURE__*/function (_RoleType74) {
  (0, _inherits2["default"])(RoleTreeItem, _RoleType74);
  var _super74 = _createSuper(RoleTreeItem);
  function RoleTreeItem() {
    (0, _classCallCheck2["default"])(this, RoleTreeItem);
    return _super74.apply(this, arguments);
  }
  return (0, _createClass2["default"])(RoleTreeItem);
}(RoleType), (0, _defineProperty2["default"])(_class74, "role", 'TreeItem'), _class74);

/***/ }),
/* 45 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(1);
var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(46));
var _createClass2 = _interopRequireDefault(__webpack_require__(4));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));
var _excluded = ["children"];
var Context = /*#__PURE__*/(0, _createClass2["default"])(
/**
 * @param {*} props
 * @constructor
 */
function Context(props) {
  (0, _classCallCheck2["default"])(this, Context);
  /**
   * @param {*} newProps
   * @param {*} children
   * @return {*}
   */
  this.Provider = function (_ref) {
    var children = _ref.children,
      newProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
    props = newProps;
    return children;
  };
  /**
   * @param {function} render
   */
  this.Consumer = function (render) {
    return render(props);
  };
});
module.exports = Context;

/***/ }),
/* 46 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var objectWithoutPropertiesLoose = __webpack_require__(47);
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 47 */
/***/ ((module) => {



function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});