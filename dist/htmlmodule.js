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
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleAlert": () => (/* binding */ RoleAlert),
/* harmony export */   "RoleAlertDialog": () => (/* binding */ RoleAlertDialog),
/* harmony export */   "RoleApplication": () => (/* binding */ RoleApplication),
/* harmony export */   "RoleArticle": () => (/* binding */ RoleArticle),
/* harmony export */   "RoleBanner": () => (/* binding */ RoleBanner),
/* harmony export */   "RoleBlockQuote": () => (/* binding */ RoleBlockQuote),
/* harmony export */   "RoleButton": () => (/* binding */ RoleButton),
/* harmony export */   "RoleCaption": () => (/* binding */ RoleCaption),
/* harmony export */   "RoleCell": () => (/* binding */ RoleCell),
/* harmony export */   "RoleCheckBox": () => (/* binding */ RoleCheckBox),
/* harmony export */   "RoleCode": () => (/* binding */ RoleCode),
/* harmony export */   "RoleColumnHeader": () => (/* binding */ RoleColumnHeader),
/* harmony export */   "RoleComboBox": () => (/* binding */ RoleComboBox),
/* harmony export */   "RoleComplementary": () => (/* binding */ RoleComplementary),
/* harmony export */   "RoleContentInfo": () => (/* binding */ RoleContentInfo),
/* harmony export */   "RoleDefinition": () => (/* binding */ RoleDefinition),
/* harmony export */   "RoleDeletion": () => (/* binding */ RoleDeletion),
/* harmony export */   "RoleDialog": () => (/* binding */ RoleDialog),
/* harmony export */   "RoleDirectory": () => (/* binding */ RoleDirectory),
/* harmony export */   "RoleDocument": () => (/* binding */ RoleDocument),
/* harmony export */   "RoleEmphasis": () => (/* binding */ RoleEmphasis),
/* harmony export */   "RoleFeed": () => (/* binding */ RoleFeed),
/* harmony export */   "RoleFigure": () => (/* binding */ RoleFigure),
/* harmony export */   "RoleForm": () => (/* binding */ RoleForm),
/* harmony export */   "RoleGeneric": () => (/* binding */ RoleGeneric),
/* harmony export */   "RoleGrid": () => (/* binding */ RoleGrid),
/* harmony export */   "RoleGridCell": () => (/* binding */ RoleGridCell),
/* harmony export */   "RoleGroup": () => (/* binding */ RoleGroup),
/* harmony export */   "RoleHeading": () => (/* binding */ RoleHeading),
/* harmony export */   "RoleImg": () => (/* binding */ RoleImg),
/* harmony export */   "RoleInsertion": () => (/* binding */ RoleInsertion),
/* harmony export */   "RoleLink": () => (/* binding */ RoleLink),
/* harmony export */   "RoleList": () => (/* binding */ RoleList),
/* harmony export */   "RoleListBox": () => (/* binding */ RoleListBox),
/* harmony export */   "RoleListItem": () => (/* binding */ RoleListItem),
/* harmony export */   "RoleLog": () => (/* binding */ RoleLog),
/* harmony export */   "RoleMain": () => (/* binding */ RoleMain),
/* harmony export */   "RoleMarquee": () => (/* binding */ RoleMarquee),
/* harmony export */   "RoleMath": () => (/* binding */ RoleMath),
/* harmony export */   "RoleMenu": () => (/* binding */ RoleMenu),
/* harmony export */   "RoleMenuBar": () => (/* binding */ RoleMenuBar),
/* harmony export */   "RoleMenuItem": () => (/* binding */ RoleMenuItem),
/* harmony export */   "RoleMenuItemCheckBox": () => (/* binding */ RoleMenuItemCheckBox),
/* harmony export */   "RoleMenuItemRadio": () => (/* binding */ RoleMenuItemRadio),
/* harmony export */   "RoleMeter": () => (/* binding */ RoleMeter),
/* harmony export */   "RoleNavigation": () => (/* binding */ RoleNavigation),
/* harmony export */   "RoleNone": () => (/* binding */ RoleNone),
/* harmony export */   "RoleNote": () => (/* binding */ RoleNote),
/* harmony export */   "RoleOption": () => (/* binding */ RoleOption),
/* harmony export */   "RoleParagraph": () => (/* binding */ RoleParagraph),
/* harmony export */   "RolePresentation": () => (/* binding */ RolePresentation),
/* harmony export */   "RoleProgressBar": () => (/* binding */ RoleProgressBar),
/* harmony export */   "RoleRadio": () => (/* binding */ RoleRadio),
/* harmony export */   "RoleRadioGroup": () => (/* binding */ RoleRadioGroup),
/* harmony export */   "RoleRegion": () => (/* binding */ RoleRegion),
/* harmony export */   "RoleRow": () => (/* binding */ RoleRow),
/* harmony export */   "RoleRowGroup": () => (/* binding */ RoleRowGroup),
/* harmony export */   "RoleRowHeader": () => (/* binding */ RoleRowHeader),
/* harmony export */   "RoleScrollBar": () => (/* binding */ RoleScrollBar),
/* harmony export */   "RoleSearch": () => (/* binding */ RoleSearch),
/* harmony export */   "RoleSearchBox": () => (/* binding */ RoleSearchBox),
/* harmony export */   "RoleSectionHead": () => (/* binding */ RoleSectionHead),
/* harmony export */   "RoleSeparator": () => (/* binding */ RoleSeparator),
/* harmony export */   "RoleSlider": () => (/* binding */ RoleSlider),
/* harmony export */   "RoleSpinButton": () => (/* binding */ RoleSpinButton),
/* harmony export */   "RoleStatus": () => (/* binding */ RoleStatus),
/* harmony export */   "RoleStrong": () => (/* binding */ RoleStrong),
/* harmony export */   "RoleSubscript": () => (/* binding */ RoleSubscript),
/* harmony export */   "RoleSuperscript": () => (/* binding */ RoleSuperscript),
/* harmony export */   "RoleSwitch": () => (/* binding */ RoleSwitch),
/* harmony export */   "RoleTab": () => (/* binding */ RoleTab),
/* harmony export */   "RoleTabList": () => (/* binding */ RoleTabList),
/* harmony export */   "RoleTabPanel": () => (/* binding */ RoleTabPanel),
/* harmony export */   "RoleTable": () => (/* binding */ RoleTable),
/* harmony export */   "RoleTerm": () => (/* binding */ RoleTerm),
/* harmony export */   "RoleTextBox": () => (/* binding */ RoleTextBox),
/* harmony export */   "RoleTime": () => (/* binding */ RoleTime),
/* harmony export */   "RoleTimer": () => (/* binding */ RoleTimer),
/* harmony export */   "RoleToolBar": () => (/* binding */ RoleToolBar),
/* harmony export */   "RoleToolTip": () => (/* binding */ RoleToolTip),
/* harmony export */   "RoleTree": () => (/* binding */ RoleTree),
/* harmony export */   "RoleTreeGrid": () => (/* binding */ RoleTreeGrid),
/* harmony export */   "RoleTreeItem": () => (/* binding */ RoleTreeItem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _RoleType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11);
/* harmony import */ var _BooleanType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13);
/* harmony import */ var _NumberType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16);
/* harmony import */ var _TokenType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(30);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var RoleAlert = /*#__PURE__*/function (_RoleType) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleAlert, _RoleType);
  var _super = _createSuper(RoleAlert);
  function RoleAlert() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleAlert);
    return _super.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleAlert);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleAlert, "role", 'alert');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleAlert, "props", {
  live: _TokenType_js__WEBPACK_IMPORTED_MODULE_9__.TokenType.define('aria-live', 'assertive'),
  atomic: _BooleanType_js__WEBPACK_IMPORTED_MODULE_7__.BooleanType.define('aria-atomic', true)
});
var RoleAlertDialog = /*#__PURE__*/function (_RoleType2) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleAlertDialog, _RoleType2);
  var _super2 = _createSuper(RoleAlertDialog);
  function RoleAlertDialog() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleAlertDialog);
    return _super2.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleAlertDialog);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleAlertDialog, "role", 'alertdialog');
var RoleApplication = /*#__PURE__*/function (_RoleType3) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleApplication, _RoleType3);
  var _super3 = _createSuper(RoleApplication);
  function RoleApplication() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleApplication);
    return _super3.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleApplication);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleApplication, "role", 'application');
var RoleArticle = /*#__PURE__*/function (_RoleType4) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleArticle, _RoleType4);
  var _super4 = _createSuper(RoleArticle);
  function RoleArticle() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleArticle);
    return _super4.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleArticle);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleArticle, "role", 'article');
var RoleBanner = /*#__PURE__*/function (_RoleType5) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleBanner, _RoleType5);
  var _super5 = _createSuper(RoleBanner);
  function RoleBanner() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleBanner);
    return _super5.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleBanner);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleBanner, "role", 'banner');
var RoleBlockQuote = /*#__PURE__*/function (_RoleType6) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleBlockQuote, _RoleType6);
  var _super6 = _createSuper(RoleBlockQuote);
  function RoleBlockQuote() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleBlockQuote);
    return _super6.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleBlockQuote);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleBlockQuote, "role", 'blockquote');
var RoleButton = /*#__PURE__*/function (_RoleType7) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleButton, _RoleType7);
  var _super7 = _createSuper(RoleButton);
  function RoleButton() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleButton);
    return _super7.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleButton);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleButton, "role", 'button');
var RoleCaption = /*#__PURE__*/function (_RoleType8) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleCaption, _RoleType8);
  var _super8 = _createSuper(RoleCaption);
  function RoleCaption() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleCaption);
    return _super8.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleCaption);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleCaption, "role", 'caption');
var RoleCell = /*#__PURE__*/function (_RoleType9) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleCell, _RoleType9);
  var _super9 = _createSuper(RoleCell);
  function RoleCell() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleCell);
    return _super9.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleCell);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleCell, "role", 'cell');
var RoleCheckBox = /*#__PURE__*/function (_RoleType10) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleCheckBox, _RoleType10);
  var _super10 = _createSuper(RoleCheckBox);
  function RoleCheckBox() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleCheckBox);
    return _super10.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleCheckBox);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleCheckBox, "role", 'checkbox');
var RoleCode = /*#__PURE__*/function (_RoleType11) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleCode, _RoleType11);
  var _super11 = _createSuper(RoleCode);
  function RoleCode() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleCode);
    return _super11.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleCode);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleCode, "role", 'code');
var RoleColumnHeader = /*#__PURE__*/function (_RoleType12) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleColumnHeader, _RoleType12);
  var _super12 = _createSuper(RoleColumnHeader);
  function RoleColumnHeader() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleColumnHeader);
    return _super12.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleColumnHeader);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleColumnHeader, "role", 'columnheader');
var RoleComboBox = /*#__PURE__*/function (_RoleType13) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleComboBox, _RoleType13);
  var _super13 = _createSuper(RoleComboBox);
  function RoleComboBox() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleComboBox);
    return _super13.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleComboBox);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleComboBox, "role", 'combobox');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleComboBox, "props", {
  hasPopup: _TokenType_js__WEBPACK_IMPORTED_MODULE_9__.TokenType.define('aria-haspopup', 'listbox')
});
var RoleComplementary = /*#__PURE__*/function (_RoleType14) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleComplementary, _RoleType14);
  var _super14 = _createSuper(RoleComplementary);
  function RoleComplementary() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleComplementary);
    return _super14.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleComplementary);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleComplementary, "role", 'complementary');
var RoleContentInfo = /*#__PURE__*/function (_RoleType15) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleContentInfo, _RoleType15);
  var _super15 = _createSuper(RoleContentInfo);
  function RoleContentInfo() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleContentInfo);
    return _super15.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleContentInfo);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleContentInfo, "role", 'contentinfo');
var RoleDefinition = /*#__PURE__*/function (_RoleType16) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleDefinition, _RoleType16);
  var _super16 = _createSuper(RoleDefinition);
  function RoleDefinition() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleDefinition);
    return _super16.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleDefinition);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleDefinition, "role", 'definition');
var RoleDeletion = /*#__PURE__*/function (_RoleType17) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleDeletion, _RoleType17);
  var _super17 = _createSuper(RoleDeletion);
  function RoleDeletion() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleDeletion);
    return _super17.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleDeletion);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleDeletion, "role", 'deletion');
var RoleDialog = /*#__PURE__*/function (_RoleType18) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleDialog, _RoleType18);
  var _super18 = _createSuper(RoleDialog);
  function RoleDialog() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleDialog);
    return _super18.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleDialog);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);

/**
 * @deprecated
 */
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleDialog, "role", 'dialog');
var RoleDirectory = /*#__PURE__*/function (_RoleType19) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleDirectory, _RoleType19);
  var _super19 = _createSuper(RoleDirectory);
  function RoleDirectory() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleDirectory);
    return _super19.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleDirectory);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleDirectory, "role", 'directory');
var RoleDocument = /*#__PURE__*/function (_RoleType20) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleDocument, _RoleType20);
  var _super20 = _createSuper(RoleDocument);
  function RoleDocument() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleDocument);
    return _super20.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleDocument);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleDocument, "role", 'document');
var RoleEmphasis = /*#__PURE__*/function (_RoleType21) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleEmphasis, _RoleType21);
  var _super21 = _createSuper(RoleEmphasis);
  function RoleEmphasis() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleEmphasis);
    return _super21.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleEmphasis);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleEmphasis, "role", 'emphasis');
var RoleFeed = /*#__PURE__*/function (_RoleType22) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleFeed, _RoleType22);
  var _super22 = _createSuper(RoleFeed);
  function RoleFeed() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleFeed);
    return _super22.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleFeed);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleFeed, "role", 'feed');
var RoleFigure = /*#__PURE__*/function (_RoleType23) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleFigure, _RoleType23);
  var _super23 = _createSuper(RoleFigure);
  function RoleFigure() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleFigure);
    return _super23.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleFigure);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleFigure, "role", 'figure');
var RoleForm = /*#__PURE__*/function (_RoleType24) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleForm, _RoleType24);
  var _super24 = _createSuper(RoleForm);
  function RoleForm() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleForm);
    return _super24.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleForm);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleForm, "role", 'form');
var RoleGeneric = /*#__PURE__*/function (_RoleType25) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleGeneric, _RoleType25);
  var _super25 = _createSuper(RoleGeneric);
  function RoleGeneric() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleGeneric);
    return _super25.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleGeneric);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleGeneric, "role", 'generic');
var RoleGrid = /*#__PURE__*/function (_RoleType26) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleGrid, _RoleType26);
  var _super26 = _createSuper(RoleGrid);
  function RoleGrid() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleGrid);
    return _super26.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleGrid);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleGrid, "role", 'grid');
var RoleGridCell = /*#__PURE__*/function (_RoleType27) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleGridCell, _RoleType27);
  var _super27 = _createSuper(RoleGridCell);
  function RoleGridCell() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleGridCell);
    return _super27.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleGridCell);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleGridCell, "role", 'gridcell');
var RoleGroup = /*#__PURE__*/function (_RoleType28) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleGroup, _RoleType28);
  var _super28 = _createSuper(RoleGroup);
  function RoleGroup() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleGroup);
    return _super28.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleGroup);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleGroup, "role", 'group');
var RoleHeading = /*#__PURE__*/function (_RoleType29) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleHeading, _RoleType29);
  var _super29 = _createSuper(RoleHeading);
  function RoleHeading() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleHeading);
    return _super29.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleHeading);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleHeading, "role", 'heading');
var RoleImg = /*#__PURE__*/function (_RoleType30) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleImg, _RoleType30);
  var _super30 = _createSuper(RoleImg);
  function RoleImg() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleImg);
    return _super30.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleImg);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleImg, "role", 'img');
var RoleInsertion = /*#__PURE__*/function (_RoleType31) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleInsertion, _RoleType31);
  var _super31 = _createSuper(RoleInsertion);
  function RoleInsertion() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleInsertion);
    return _super31.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleInsertion);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleInsertion, "role", 'insertion');
var RoleLink = /*#__PURE__*/function (_RoleType32) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleLink, _RoleType32);
  var _super32 = _createSuper(RoleLink);
  function RoleLink() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleLink);
    return _super32.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleLink);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleLink, "role", 'link');
var RoleList = /*#__PURE__*/function (_RoleType33) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleList, _RoleType33);
  var _super33 = _createSuper(RoleList);
  function RoleList() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleList);
    return _super33.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleList);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleList, "role", 'list');
var RoleListBox = /*#__PURE__*/function (_RoleType34) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleListBox, _RoleType34);
  var _super34 = _createSuper(RoleListBox);
  function RoleListBox() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleListBox);
    return _super34.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleListBox);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleListBox, "role", 'listbox');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleListBox, "props", {
  orientation: _TokenType_js__WEBPACK_IMPORTED_MODULE_9__.TokenType.define('aria-orientation', 'vertical')
});
var RoleListItem = /*#__PURE__*/function (_RoleType35) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleListItem, _RoleType35);
  var _super35 = _createSuper(RoleListItem);
  function RoleListItem() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleListItem);
    return _super35.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleListItem);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleListItem, "role", 'listitem');
var RoleLog = /*#__PURE__*/function (_RoleType36) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleLog, _RoleType36);
  var _super36 = _createSuper(RoleLog);
  function RoleLog() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleLog);
    return _super36.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleLog);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleLog, "role", 'log');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleLog, "props", {
  live: _TokenType_js__WEBPACK_IMPORTED_MODULE_9__.TokenType.define('aria-live', 'polite')
});
var RoleMain = /*#__PURE__*/function (_RoleType37) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleMain, _RoleType37);
  var _super37 = _createSuper(RoleMain);
  function RoleMain() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleMain);
    return _super37.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleMain);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleMain, "role", 'main');
var RoleMarquee = /*#__PURE__*/function (_RoleType38) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleMarquee, _RoleType38);
  var _super38 = _createSuper(RoleMarquee);
  function RoleMarquee() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleMarquee);
    return _super38.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleMarquee);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleMarquee, "role", 'marquee');
var RoleMath = /*#__PURE__*/function (_RoleType39) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleMath, _RoleType39);
  var _super39 = _createSuper(RoleMath);
  function RoleMath() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleMath);
    return _super39.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleMath);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleMath, "role", 'math');
var RoleMenu = /*#__PURE__*/function (_RoleType40) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleMenu, _RoleType40);
  var _super40 = _createSuper(RoleMenu);
  function RoleMenu() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleMenu);
    return _super40.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleMenu);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleMenu, "role", 'menu');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleMenu, "props", {
  orientation: _TokenType_js__WEBPACK_IMPORTED_MODULE_9__.TokenType.define('aria-orientation', 'vertical')
});
var RoleMenuBar = /*#__PURE__*/function (_RoleType41) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleMenuBar, _RoleType41);
  var _super41 = _createSuper(RoleMenuBar);
  function RoleMenuBar() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleMenuBar);
    return _super41.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleMenuBar);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleMenuBar, "role", 'menubar');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleMenuBar, "props", {
  orientation: _TokenType_js__WEBPACK_IMPORTED_MODULE_9__.TokenType.define('aria-orientation', 'horizontal')
});
var RoleMenuItem = /*#__PURE__*/function (_RoleType42) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleMenuItem, _RoleType42);
  var _super42 = _createSuper(RoleMenuItem);
  function RoleMenuItem() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleMenuItem);
    return _super42.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleMenuItem);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleMenuItem, "role", 'menuitem');
var RoleMenuItemCheckBox = /*#__PURE__*/function (_RoleType43) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleMenuItemCheckBox, _RoleType43);
  var _super43 = _createSuper(RoleMenuItemCheckBox);
  function RoleMenuItemCheckBox() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleMenuItemCheckBox);
    return _super43.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleMenuItemCheckBox);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleMenuItemCheckBox, "role", 'menuitemcheckbox');
var RoleMenuItemRadio = /*#__PURE__*/function (_RoleType44) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleMenuItemRadio, _RoleType44);
  var _super44 = _createSuper(RoleMenuItemRadio);
  function RoleMenuItemRadio() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleMenuItemRadio);
    return _super44.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleMenuItemRadio);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleMenuItemRadio, "role", 'menuitemradio');
var RoleMeter = /*#__PURE__*/function (_RoleType45) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleMeter, _RoleType45);
  var _super45 = _createSuper(RoleMeter);
  function RoleMeter() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleMeter);
    return _super45.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleMeter);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleMeter, "role", 'meter');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleMeter, "props", {
  valueMin: _NumberType_js__WEBPACK_IMPORTED_MODULE_8__.NumberType.define('aria-valuemin', 0),
  valueMax: _NumberType_js__WEBPACK_IMPORTED_MODULE_8__.NumberType.define('aria-valuemax', 100)
});
var RoleNavigation = /*#__PURE__*/function (_RoleType46) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleNavigation, _RoleType46);
  var _super46 = _createSuper(RoleNavigation);
  function RoleNavigation() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleNavigation);
    return _super46.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleNavigation);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleNavigation, "role", 'navigation');
var RoleNone = /*#__PURE__*/function (_RoleType47) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleNone, _RoleType47);
  var _super47 = _createSuper(RoleNone);
  function RoleNone() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleNone);
    return _super47.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleNone);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleNone, "role", 'none');
var RoleNote = /*#__PURE__*/function (_RoleType48) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleNote, _RoleType48);
  var _super48 = _createSuper(RoleNote);
  function RoleNote() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleNote);
    return _super48.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleNote);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleNote, "role", 'note');
var RoleOption = /*#__PURE__*/function (_RoleType49) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleOption, _RoleType49);
  var _super49 = _createSuper(RoleOption);
  function RoleOption() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleOption);
    return _super49.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleOption);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleOption, "role", 'option');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleOption, "props", {
  selected: _TokenType_js__WEBPACK_IMPORTED_MODULE_9__.TokenType.define('aria-selected', false)
});
var RoleParagraph = /*#__PURE__*/function (_RoleType50) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleParagraph, _RoleType50);
  var _super50 = _createSuper(RoleParagraph);
  function RoleParagraph() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleParagraph);
    return _super50.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleParagraph);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleParagraph, "role", 'paragraph');
var RolePresentation = /*#__PURE__*/function (_RoleType51) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RolePresentation, _RoleType51);
  var _super51 = _createSuper(RolePresentation);
  function RolePresentation() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RolePresentation);
    return _super51.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RolePresentation);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RolePresentation, "role", 'presentation');
var RoleProgressBar = /*#__PURE__*/function (_RoleType52) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleProgressBar, _RoleType52);
  var _super52 = _createSuper(RoleProgressBar);
  function RoleProgressBar() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleProgressBar);
    return _super52.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleProgressBar);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleProgressBar, "role", 'progressbar');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleProgressBar, "props", {
  valueMin: _NumberType_js__WEBPACK_IMPORTED_MODULE_8__.NumberType.define('aria-valuemin', 0),
  valueMax: _NumberType_js__WEBPACK_IMPORTED_MODULE_8__.NumberType.define('aria-valuemax', 100)
});
var RoleRadio = /*#__PURE__*/function (_RoleType53) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleRadio, _RoleType53);
  var _super53 = _createSuper(RoleRadio);
  function RoleRadio() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleRadio);
    return _super53.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleRadio);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleRadio, "role", 'radio');
var RoleRadioGroup = /*#__PURE__*/function (_RoleType54) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleRadioGroup, _RoleType54);
  var _super54 = _createSuper(RoleRadioGroup);
  function RoleRadioGroup() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleRadioGroup);
    return _super54.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleRadioGroup);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleRadioGroup, "role", 'radiogroup');
var RoleRegion = /*#__PURE__*/function (_RoleType55) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleRegion, _RoleType55);
  var _super55 = _createSuper(RoleRegion);
  function RoleRegion() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleRegion);
    return _super55.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleRegion);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleRegion, "role", 'region');
var RoleRow = /*#__PURE__*/function (_RoleType56) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleRow, _RoleType56);
  var _super56 = _createSuper(RoleRow);
  function RoleRow() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleRow);
    return _super56.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleRow);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleRow, "role", 'row');
var RoleRowGroup = /*#__PURE__*/function (_RoleType57) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleRowGroup, _RoleType57);
  var _super57 = _createSuper(RoleRowGroup);
  function RoleRowGroup() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleRowGroup);
    return _super57.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleRowGroup);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleRowGroup, "role", 'rowgroup');
var RoleRowHeader = /*#__PURE__*/function (_RoleType58) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleRowHeader, _RoleType58);
  var _super58 = _createSuper(RoleRowHeader);
  function RoleRowHeader() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleRowHeader);
    return _super58.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleRowHeader);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleRowHeader, "role", 'rowheader');
var RoleScrollBar = /*#__PURE__*/function (_RoleType59) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleScrollBar, _RoleType59);
  var _super59 = _createSuper(RoleScrollBar);
  function RoleScrollBar() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleScrollBar);
    return _super59.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleScrollBar);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleScrollBar, "role", 'scrollbar');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleScrollBar, "props", {
  orientation: _TokenType_js__WEBPACK_IMPORTED_MODULE_9__.TokenType.define('aria-orientation', 'vertical'),
  valueMin: _NumberType_js__WEBPACK_IMPORTED_MODULE_8__.NumberType.define('aria-valuemin', 0),
  valueMax: _NumberType_js__WEBPACK_IMPORTED_MODULE_8__.NumberType.define('aria-valuemax', 100)
});
var RoleSearch = /*#__PURE__*/function (_RoleType60) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleSearch, _RoleType60);
  var _super60 = _createSuper(RoleSearch);
  function RoleSearch() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleSearch);
    return _super60.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleSearch);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleSearch, "role", 'search');
var RoleSearchBox = /*#__PURE__*/function (_RoleType61) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleSearchBox, _RoleType61);
  var _super61 = _createSuper(RoleSearchBox);
  function RoleSearchBox() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleSearchBox);
    return _super61.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleSearchBox);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleSearchBox, "role", 'searchbox');
var RoleSectionHead = /*#__PURE__*/function (_RoleType62) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleSectionHead, _RoleType62);
  var _super62 = _createSuper(RoleSectionHead);
  function RoleSectionHead() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleSectionHead);
    return _super62.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleSectionHead);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleSectionHead, "role", 'sectionhead');
var RoleSeparator = /*#__PURE__*/function (_RoleType63) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleSeparator, _RoleType63);
  var _super63 = _createSuper(RoleSeparator);
  function RoleSeparator() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleSeparator);
    return _super63.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleSeparator);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleSeparator, "role", 'separator');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleSeparator, "props", {
  orientation: _TokenType_js__WEBPACK_IMPORTED_MODULE_9__.TokenType.define('aria-orientation', 'horizontal'),
  valueMin: _NumberType_js__WEBPACK_IMPORTED_MODULE_8__.NumberType.define('aria-valuemin', 0),
  valueMax: _NumberType_js__WEBPACK_IMPORTED_MODULE_8__.NumberType.define('aria-valuemax', 100)
});
var RoleSlider = /*#__PURE__*/function (_RoleType64) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleSlider, _RoleType64);
  var _super64 = _createSuper(RoleSlider);
  function RoleSlider() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleSlider);
    return _super64.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleSlider);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleSlider, "role", 'slider');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleSlider, "props", {
  orientation: _TokenType_js__WEBPACK_IMPORTED_MODULE_9__.TokenType.define('aria-orientation', 'horizontal'),
  valueMin: _NumberType_js__WEBPACK_IMPORTED_MODULE_8__.NumberType.define('aria-valuemin', 0),
  valueMax: _NumberType_js__WEBPACK_IMPORTED_MODULE_8__.NumberType.define('aria-valuemax', 100)
});
var RoleSpinButton = /*#__PURE__*/function (_RoleType65) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleSpinButton, _RoleType65);
  var _super65 = _createSuper(RoleSpinButton);
  function RoleSpinButton() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleSpinButton);
    return _super65.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleSpinButton);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleSpinButton, "role", 'spinbutton');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleSpinButton, "props", {
  valueMin: _NumberType_js__WEBPACK_IMPORTED_MODULE_8__.NumberType.define('aria-valuemin', -Infinity),
  valueMax: _NumberType_js__WEBPACK_IMPORTED_MODULE_8__.NumberType.define('aria-valuemax', Infinity),
  valueNow: _NumberType_js__WEBPACK_IMPORTED_MODULE_8__.NumberType.define('aria-valuenow', 0)
});
var RoleStatus = /*#__PURE__*/function (_RoleType66) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleStatus, _RoleType66);
  var _super66 = _createSuper(RoleStatus);
  function RoleStatus() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleStatus);
    return _super66.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleStatus);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleStatus, "role", 'status');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleStatus, "props", {
  live: _TokenType_js__WEBPACK_IMPORTED_MODULE_9__.TokenType.define('aria-live', 'polite'),
  atomic: _BooleanType_js__WEBPACK_IMPORTED_MODULE_7__.BooleanType.define('aria-atomic', true)
});
var RoleStrong = /*#__PURE__*/function (_RoleType67) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleStrong, _RoleType67);
  var _super67 = _createSuper(RoleStrong);
  function RoleStrong() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleStrong);
    return _super67.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleStrong);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleStrong, "role", 'strong');
var RoleSubscript = /*#__PURE__*/function (_RoleType68) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleSubscript, _RoleType68);
  var _super68 = _createSuper(RoleSubscript);
  function RoleSubscript() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleSubscript);
    return _super68.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleSubscript);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleSubscript, "role", 'subscript');
var RoleSuperscript = /*#__PURE__*/function (_RoleType69) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleSuperscript, _RoleType69);
  var _super69 = _createSuper(RoleSuperscript);
  function RoleSuperscript() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleSuperscript);
    return _super69.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleSuperscript);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleSuperscript, "role", 'superscript');
var RoleSwitch = /*#__PURE__*/function (_RoleType70) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleSwitch, _RoleType70);
  var _super70 = _createSuper(RoleSwitch);
  function RoleSwitch() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleSwitch);
    return _super70.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleSwitch);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleSwitch, "role", 'switch');
var RoleTab = /*#__PURE__*/function (_RoleType71) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleTab, _RoleType71);
  var _super71 = _createSuper(RoleTab);
  function RoleTab() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleTab);
    return _super71.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleTab);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleTab, "role", 'tab');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleTab, "props", {
  selected: _TokenType_js__WEBPACK_IMPORTED_MODULE_9__.TokenType.define('aria-selected', false)
});
var RoleTabList = /*#__PURE__*/function (_RoleType72) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleTabList, _RoleType72);
  var _super72 = _createSuper(RoleTabList);
  function RoleTabList() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleTabList);
    return _super72.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleTabList);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleTabList, "role", 'tablist');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleTabList, "props", {
  orientation: _TokenType_js__WEBPACK_IMPORTED_MODULE_9__.TokenType.define('aria-orientation', 'horizontal')
});
var RoleTabPanel = /*#__PURE__*/function (_RoleType73) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleTabPanel, _RoleType73);
  var _super73 = _createSuper(RoleTabPanel);
  function RoleTabPanel() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleTabPanel);
    return _super73.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleTabPanel);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleTabPanel, "role", 'tabpanel');
var RoleTable = /*#__PURE__*/function (_RoleType74) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleTable, _RoleType74);
  var _super74 = _createSuper(RoleTable);
  function RoleTable() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleTable);
    return _super74.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleTable);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleTable, "role", 'table');
var RoleTerm = /*#__PURE__*/function (_RoleType75) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleTerm, _RoleType75);
  var _super75 = _createSuper(RoleTerm);
  function RoleTerm() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleTerm);
    return _super75.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleTerm);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleTerm, "role", 'term');
var RoleTextBox = /*#__PURE__*/function (_RoleType76) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleTextBox, _RoleType76);
  var _super76 = _createSuper(RoleTextBox);
  function RoleTextBox() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleTextBox);
    return _super76.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleTextBox);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleTextBox, "role", 'textbox');
var RoleTime = /*#__PURE__*/function (_RoleType77) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleTime, _RoleType77);
  var _super77 = _createSuper(RoleTime);
  function RoleTime() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleTime);
    return _super77.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleTime);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleTime, "role", 'time');
var RoleTimer = /*#__PURE__*/function (_RoleType78) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleTimer, _RoleType78);
  var _super78 = _createSuper(RoleTimer);
  function RoleTimer() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleTimer);
    return _super78.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleTimer);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleTimer, "role", 'timer');
var RoleToolBar = /*#__PURE__*/function (_RoleType79) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleToolBar, _RoleType79);
  var _super79 = _createSuper(RoleToolBar);
  function RoleToolBar() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleToolBar);
    return _super79.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleToolBar);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleToolBar, "role", 'toolbar');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleToolBar, "props", {
  orientation: _TokenType_js__WEBPACK_IMPORTED_MODULE_9__.TokenType.define('aria-orientation', 'horizontal')
});
var RoleToolTip = /*#__PURE__*/function (_RoleType80) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleToolTip, _RoleType80);
  var _super80 = _createSuper(RoleToolTip);
  function RoleToolTip() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleToolTip);
    return _super80.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleToolTip);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleToolTip, "role", 'tooltip');
var RoleTree = /*#__PURE__*/function (_RoleType81) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleTree, _RoleType81);
  var _super81 = _createSuper(RoleTree);
  function RoleTree() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleTree);
    return _super81.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleTree);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleTree, "role", 'tree');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleTree, "props", {
  orientation: _TokenType_js__WEBPACK_IMPORTED_MODULE_9__.TokenType.define('aria-orientation', 'vertical')
});
var RoleTreeGrid = /*#__PURE__*/function (_RoleType82) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleTreeGrid, _RoleType82);
  var _super82 = _createSuper(RoleTreeGrid);
  function RoleTreeGrid() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleTreeGrid);
    return _super82.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleTreeGrid);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleTreeGrid, "role", 'treegrid');
var RoleTreeItem = /*#__PURE__*/function (_RoleType83) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleTreeItem, _RoleType83);
  var _super83 = _createSuper(RoleTreeItem);
  function RoleTreeItem() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleTreeItem);
    return _super83.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleTreeItem);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleTreeItem, "role", 'treeitem');

/***/ }),
/* 2 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
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

/***/ }),
/* 3 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),
/* 4 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

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
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),
/* 5 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ }),
/* 6 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),
/* 7 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ }),
/* 8 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

/***/ }),
/* 9 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),
/* 10 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
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

/***/ }),
/* 11 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleType": () => (/* binding */ RoleType)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _AttrType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var _BooleanType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13);
/* harmony import */ var _NumberType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16);
/* harmony import */ var _ElemType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17);
/* harmony import */ var _InnerText_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(41);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






/**
 * @abstract
 */
var RoleType = /*#__PURE__*/function (_ElemType) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RoleType, _ElemType);
  var _super = _createSuper(RoleType);
  function RoleType() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleType);
    return _super.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleType);
}(_ElemType_js__WEBPACK_IMPORTED_MODULE_9__.ElemType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleType, "props", {
  accessKey: _AttrType_js__WEBPACK_IMPORTED_MODULE_6__.AttrType.define('accesskey'),
  autocapitalize: _AttrType_js__WEBPACK_IMPORTED_MODULE_6__.AttrType.define('autocapitalize'),
  autofocus: _BooleanType_js__WEBPACK_IMPORTED_MODULE_7__.BooleanType.define('autofocus'),
  contentEditable: _AttrType_js__WEBPACK_IMPORTED_MODULE_6__.AttrType.define('contenteditable'),
  dir: _AttrType_js__WEBPACK_IMPORTED_MODULE_6__.AttrType.define('dir'),
  draggable: _BooleanType_js__WEBPACK_IMPORTED_MODULE_7__.BooleanType.define('draggable'),
  enterKeyHint: _AttrType_js__WEBPACK_IMPORTED_MODULE_6__.AttrType.define('enterkeyhint'),
  inputMode: _AttrType_js__WEBPACK_IMPORTED_MODULE_6__.AttrType.define('inputmode'),
  lang: _AttrType_js__WEBPACK_IMPORTED_MODULE_6__.AttrType.define('lang'),
  spellcheck: _BooleanType_js__WEBPACK_IMPORTED_MODULE_7__.BooleanType.define('spellcheck'),
  tabIndex: _NumberType_js__WEBPACK_IMPORTED_MODULE_8__.NumberType.define('tabindex', NaN),
  title: _AttrType_js__WEBPACK_IMPORTED_MODULE_6__.AttrType.define('title'),
  translate: _BooleanType_js__WEBPACK_IMPORTED_MODULE_7__.BooleanType.define('translate'),
  innerText: _InnerText_js__WEBPACK_IMPORTED_MODULE_10__.InnerText
});

/***/ }),
/* 12 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttrType": () => (/* binding */ AttrType)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/**
 * @abstract
 */
var AttrType = /*#__PURE__*/function () {
  function AttrType() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, AttrType);
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(AttrType, null, [{
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
        (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, _this);
        var _super = _createSuper(_class);
        function _class() {
          (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _class);
          return _super.apply(this, arguments);
        }
        return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(_class);
      }(this), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_class, "nodeName", nodeName), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_class, "defaultValue", defaultValue), _class;
    }
  }]);
  return AttrType;
}();
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(AttrType, "nodeName", null);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(AttrType, "defaultValue", '');

/***/ }),
/* 13 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BooleanType": () => (/* binding */ BooleanType)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _AttrType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var BooleanType = /*#__PURE__*/function (_AttrType) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(BooleanType, _AttrType);
  var _super = _createSuper(BooleanType);
  function BooleanType() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BooleanType);
    return _super.apply(this, arguments);
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BooleanType, null, [{
    key: "get",
    value:
    /**
     * @param {ElemType} elem
     * @param {string} propName
     * @returns {boolean}
     */
    function get(elem, propName) {
      var value = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(BooleanType), "get", this).call(this, elem, propName);
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
     * @param {boolean} [defaultValue]
     * @param {string} [nodeValue]
     * @return {constructor @link BooleanType}
     */
  }, {
    key: "define",
    value: function define(nodeName) {
      var _class;
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.defaultValue;
      var nodeValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.nodeValue;
      return _class = /*#__PURE__*/function (_this) {
        (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(_class, _this);
        var _super2 = _createSuper(_class);
        function _class() {
          (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _class);
          return _super2.apply(this, arguments);
        }
        return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_class);
      }(this), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_class, "nodeName", nodeName), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_class, "defaultValue", defaultValue), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_class, "nodeValue", nodeValue), _class;
    }
  }]);
  return BooleanType;
}(_AttrType_js__WEBPACK_IMPORTED_MODULE_7__.AttrType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(BooleanType, "defaultValue", false);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(BooleanType, "nodeValue", '');

/***/ }),
/* 14 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _get)
/* harmony export */ });
/* harmony import */ var _superPropBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);

function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get.bind();
  } else {
    _get = function _get(target, property, receiver) {
      var base = (0,_superPropBase_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    };
  }
  return _get.apply(this, arguments);
}

/***/ }),
/* 15 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _superPropBase)
/* harmony export */ });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object);
    if (object === null) break;
  }
  return object;
}

/***/ }),
/* 16 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumberType": () => (/* binding */ NumberType)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _AttrType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var NumberType = /*#__PURE__*/function (_AttrType) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(NumberType, _AttrType);
  var _super = _createSuper(NumberType);
  function NumberType() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NumberType);
    return _super.apply(this, arguments);
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NumberType, null, [{
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
}(_AttrType_js__WEBPACK_IMPORTED_MODULE_6__.AttrType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(NumberType, "defaultValue", NaN);

/***/ }),
/* 17 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElemType": () => (/* binding */ ElemType)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _window_cjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28);
/* harmony import */ var _AriaType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29);
/* harmony import */ var _AttrType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12);
/* harmony import */ var _Attributes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31);
/* harmony import */ var _Class_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33);
/* harmony import */ var _ClassList_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(34);
/* harmony import */ var _Dataset_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(35);
/* harmony import */ var _EventType_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(36);
/* harmony import */ var _Id_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(37);
/* harmony import */ var _InnerHTML_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(38);
/* harmony import */ var _PropType_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(32);
/* harmony import */ var _Style_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(39);
/* harmony import */ var _TextType_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(40);





function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }













var Comment = _window_cjs__WEBPACK_IMPORTED_MODULE_5__.Comment,
  CustomEvent = _window_cjs__WEBPACK_IMPORTED_MODULE_5__.CustomEvent,
  document = _window_cjs__WEBPACK_IMPORTED_MODULE_5__.document;
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
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ElemType);
    this.constructor.__init();
    Object.defineProperties(this, descriptors);
    Object.defineProperty(this, 'props', {
      writable: true,
      value: _objectSpread({
        children: null
      }, this.constructor.__defaultProps)
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
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ElemType, [{
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
      this.__update();
      this.update(this.props, prevState);
    }

    /**
     * @param {constructor @link ElemType} type
     * @param {function|string|string[]} [filter]
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
            if (!filter || child.__applyFilter(filter)) {
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
     * @param {function|string|string[]} [filter]
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
            if (!filter || child.__applyFilter(filter)) {
              result.push(child);
            }
          }
          result.push.apply(result, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(child.findAll(type, filter)));
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
     * @param {function|string|string[]} [filter]
     * @return {ElemType|*|null}
     */
  }, {
    key: "closest",
    value: function closest(type, filter) {
      var elem = this;
      do if (elem instanceof type) {
        if (!filter || elem.__applyFilter(filter)) {
          return elem;
        }
      } while (elem = elem.__parent);
      return null;
    }

    /**
     * @param {ElemType} elem
     * @return {boolean}
     */
  }, {
    key: "contains",
    value: function contains(elem) {
      var parent = elem.__parent;
      do {
        var _parent;
        if (parent === this) {
          return true;
        }
      } while (parent = (_parent = parent) === null || _parent === void 0 ? void 0 : _parent.__parent);
      return false;
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
      var desc = _EventType_js__WEBPACK_IMPORTED_MODULE_12__.EventType.types[event];
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
        var event = new _EventType_js__WEBPACK_IMPORTED_MODULE_12__.EventType(e, _this);
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
          var _step3$value = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_step3.value, 2);
          type = _step3$value[0];
          listeners = _step3$value[1];
          var _iterator4 = _createForOfIteratorHelper(listeners.entries()),
            _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var _step4$value = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_step4.value, 2);
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
    value: function __init() {
      var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.node;
      var parentNode = arguments.length > 1 ? arguments[1] : undefined;
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
      this.assign();
      this.__assignProps();
      this.__children = this.parent === null ? undefined : this.render();
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
        className: _Class_js__WEBPACK_IMPORTED_MODULE_9__.Class.generate(this.constructor),
        role: this.constructor.role
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
        if (!_PropType_js__WEBPACK_IMPORTED_MODULE_15__.PropType.filter(childB)) {
          return;
        }
        if (Array.isArray(childB)) {
          childB.forEach(forEach);
          return;
        }
        if (!childB.props && !childB.__init) {
          childB = new _TextType_js__WEBPACK_IMPORTED_MODULE_17__.TextType(childB);
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
          childB.__parent = this;
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
              childB.__parent = this;
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
      this.children = [];
      this.vnode = this.__createVNode();
      this.__resetProps();
      this.__destroy(true);
      this.node = this.__createNode();
      elem.children = children;
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
      this.__assignProps();
      this.__children = this.parent === null ? undefined : this.render();
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
     * @param {function|string|string[]} [filter]
     * @return {boolean|*}
     * @private
     */
  }, {
    key: "__applyFilter",
    value: function __applyFilter(filter) {
      if (typeof filter === 'function') {
        return filter(this);
      }
      if (typeof filter === 'string') {
        return this[filter];
      }
      var _filter = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(filter, 2),
        key = _filter[0],
        value = _filter[1];
      return this[key] === value;
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
        __defaultProps: {
          value: _objectSpread(_objectSpread({}, this.__defaultProps), this.defaultProps)
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
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(ElemType, "namespace", null);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(ElemType, "tagName", 'div');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(ElemType, "role", null);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(ElemType, "class", null);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(ElemType, "className", null);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(ElemType, "props", _objectSpread(_objectSpread({
  role: _AttrType_js__WEBPACK_IMPORTED_MODULE_7__.AttrType.define('role'),
  className: _Class_js__WEBPACK_IMPORTED_MODULE_9__.Class,
  classList: _ClassList_js__WEBPACK_IMPORTED_MODULE_10__.ClassList,
  id: _Id_js__WEBPACK_IMPORTED_MODULE_13__.Id,
  style: _Style_js__WEBPACK_IMPORTED_MODULE_16__.Style,
  dataset: _Dataset_js__WEBPACK_IMPORTED_MODULE_11__.Dataset,
  attributes: _Attributes_js__WEBPACK_IMPORTED_MODULE_8__.Attributes,
  innerHTML: _InnerHTML_js__WEBPACK_IMPORTED_MODULE_14__.InnerHTML,
  textContent: _PropType_js__WEBPACK_IMPORTED_MODULE_15__.PropType
}, _EventType_js__WEBPACK_IMPORTED_MODULE_12__.EventType.props), _AriaType_js__WEBPACK_IMPORTED_MODULE_6__.AriaType.props));
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(ElemType, "defaultProps", null);
var init = ElemType.prototype.__init;

/***/ }),
/* 18 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),
/* 19 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),
/* 20 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
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

/***/ }),
/* 21 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),
/* 22 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

/***/ }),
/* 23 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),
/* 24 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),
/* 25 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),
/* 26 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),
/* 27 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),
/* 28 */
/***/ ((module) => {

if(typeof window === 'undefined') {
  // Calling via eval() prevents jsdom extraction when using a module bundler
  const { JSDOM } = eval('require("jsdom")')
  const { window } = new JSDOM
  module.exports = window
}
else module.exports = window


/***/ }),
/* 29 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AriaType": () => (/* binding */ AriaType)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _AttrType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _BooleanType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _NumberType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);
/* harmony import */ var _TokenType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30);








/**
 * @mixin
 */
var AriaType = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function AriaType() {
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AriaType);
});
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(AriaType, "props", {
  activeDescendant: _AttrType_js__WEBPACK_IMPORTED_MODULE_3__.AttrType.define('aria-activedescendant'),
  atomic: _BooleanType_js__WEBPACK_IMPORTED_MODULE_4__.BooleanType.define('aria-atomic', false, 'true'),
  autoComplete: _TokenType_js__WEBPACK_IMPORTED_MODULE_6__.TokenType.define('aria-autocomplete', 'none'),
  busy: _BooleanType_js__WEBPACK_IMPORTED_MODULE_4__.BooleanType.define('aria-busy', false, 'true'),
  checked: _TokenType_js__WEBPACK_IMPORTED_MODULE_6__.TokenType.define('aria-checked'),
  colCount: _NumberType_js__WEBPACK_IMPORTED_MODULE_5__.NumberType.define('aria-colcount'),
  colIndex: _NumberType_js__WEBPACK_IMPORTED_MODULE_5__.NumberType.define('aria-colindex'),
  colSpan: _NumberType_js__WEBPACK_IMPORTED_MODULE_5__.NumberType.define('aria-colspan'),
  controls: _AttrType_js__WEBPACK_IMPORTED_MODULE_3__.AttrType.define('aria-controls'),
  current: _TokenType_js__WEBPACK_IMPORTED_MODULE_6__.TokenType.define('aria-current', false),
  describedBy: _AttrType_js__WEBPACK_IMPORTED_MODULE_3__.AttrType.define('aria-describedby'),
  details: _AttrType_js__WEBPACK_IMPORTED_MODULE_3__.AttrType.define('aria-details'),
  disabled: _BooleanType_js__WEBPACK_IMPORTED_MODULE_4__.BooleanType.define('aria-disabled', false, 'true'),
  dropEffect: _AttrType_js__WEBPACK_IMPORTED_MODULE_3__.AttrType.define('aria-dropeffect', 'none'),
  errorMessage: _AttrType_js__WEBPACK_IMPORTED_MODULE_3__.AttrType.define('aria-errormessage'),
  expanded: _TokenType_js__WEBPACK_IMPORTED_MODULE_6__.TokenType.define('aria-expanded'),
  flowTo: _AttrType_js__WEBPACK_IMPORTED_MODULE_3__.AttrType.define('aria-flowto'),
  grabbed: _TokenType_js__WEBPACK_IMPORTED_MODULE_6__.TokenType.define('aria-grabbed'),
  hasPopup: _TokenType_js__WEBPACK_IMPORTED_MODULE_6__.TokenType.define('aria-haspopup', false),
  hidden: _TokenType_js__WEBPACK_IMPORTED_MODULE_6__.TokenType.define('aria-hidden'),
  invalid: _TokenType_js__WEBPACK_IMPORTED_MODULE_6__.TokenType.define('aria-invalid', false),
  keyShortcuts: _AttrType_js__WEBPACK_IMPORTED_MODULE_3__.AttrType.define('aria-keyshortcuts'),
  label: _AttrType_js__WEBPACK_IMPORTED_MODULE_3__.AttrType.define('aria-label'),
  labelledBy: _AttrType_js__WEBPACK_IMPORTED_MODULE_3__.AttrType.define('aria-labelledby'),
  level: _NumberType_js__WEBPACK_IMPORTED_MODULE_5__.NumberType.define('aria-level'),
  live: _TokenType_js__WEBPACK_IMPORTED_MODULE_6__.TokenType.define('aria-live', 'off'),
  modal: _BooleanType_js__WEBPACK_IMPORTED_MODULE_4__.BooleanType.define('aria-modal', false, 'true'),
  multiLine: _BooleanType_js__WEBPACK_IMPORTED_MODULE_4__.BooleanType.define('aria-multiline', false, 'true'),
  multiSelectable: _BooleanType_js__WEBPACK_IMPORTED_MODULE_4__.BooleanType.define('aria-multiselectable', false, 'true'),
  orientation: _TokenType_js__WEBPACK_IMPORTED_MODULE_6__.TokenType.define('aria-orientation'),
  owns: _AttrType_js__WEBPACK_IMPORTED_MODULE_3__.AttrType.define('aria-owns'),
  placeholder: _AttrType_js__WEBPACK_IMPORTED_MODULE_3__.AttrType.define('aria-placeholder'),
  posInSet: _NumberType_js__WEBPACK_IMPORTED_MODULE_5__.NumberType.define('aria-posinset'),
  pressed: _TokenType_js__WEBPACK_IMPORTED_MODULE_6__.TokenType.define('aria-pressed'),
  readOnly: _BooleanType_js__WEBPACK_IMPORTED_MODULE_4__.BooleanType.define('aria-readonly', false, 'true'),
  relevant: _AttrType_js__WEBPACK_IMPORTED_MODULE_3__.AttrType.define('aria-relevant', 'additions text'),
  required: _BooleanType_js__WEBPACK_IMPORTED_MODULE_4__.BooleanType.define('aria-required', false, 'true'),
  roleDescription: _AttrType_js__WEBPACK_IMPORTED_MODULE_3__.AttrType.define('aria-roledescription'),
  rowCount: _NumberType_js__WEBPACK_IMPORTED_MODULE_5__.NumberType.define('aria-rowcount'),
  rowIndex: _NumberType_js__WEBPACK_IMPORTED_MODULE_5__.NumberType.define('aria-rowindex'),
  rowSpan: _NumberType_js__WEBPACK_IMPORTED_MODULE_5__.NumberType.define('aria-rowspan'),
  selected: _TokenType_js__WEBPACK_IMPORTED_MODULE_6__.TokenType.define('aria-selected'),
  setSize: _NumberType_js__WEBPACK_IMPORTED_MODULE_5__.NumberType.define('aria-setsize'),
  sort: _TokenType_js__WEBPACK_IMPORTED_MODULE_6__.TokenType.define('aria-sort', 'none'),
  valueMax: _NumberType_js__WEBPACK_IMPORTED_MODULE_5__.NumberType.define('aria-valuemax'),
  valueMin: _NumberType_js__WEBPACK_IMPORTED_MODULE_5__.NumberType.define('aria-valuemin'),
  valueNow: _NumberType_js__WEBPACK_IMPORTED_MODULE_5__.NumberType.define('aria-valuenow'),
  valueText: _AttrType_js__WEBPACK_IMPORTED_MODULE_3__.AttrType.define('aria-valuetext')
});

/***/ }),
/* 30 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenType": () => (/* binding */ TokenType)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _AttrType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var TokenType = /*#__PURE__*/function (_AttrType) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(TokenType, _AttrType);
  var _super = _createSuper(TokenType);
  function TokenType() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TokenType);
    return _super.apply(this, arguments);
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TokenType, null, [{
    key: "get",
    value:
    /**
     * @param {ElemType} elem
     * @param {string} propName
     * @returns {string|boolean|undefined}
     */
    function get(elem, propName) {
      var value = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(TokenType), "get", this).call(this, elem, propName);
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
}(_AttrType_js__WEBPACK_IMPORTED_MODULE_7__.AttrType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(TokenType, "defaultValue", undefined);

/***/ }),
/* 31 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Attributes": () => (/* binding */ Attributes)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _PropType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32);





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Attributes = /*#__PURE__*/function (_PropType) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Attributes, _PropType);
  var _super = _createSuper(Attributes);
  function Attributes() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Attributes);
    return _super.apply(this, arguments);
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Attributes, null, [{
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
}(_PropType_js__WEBPACK_IMPORTED_MODULE_5__.PropType);

/***/ }),
/* 32 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropType": () => (/* binding */ PropType)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


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
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PropType);
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PropType, null, [{
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

/***/ }),
/* 33 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Class": () => (/* binding */ Class)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10);
/* harmony import */ var _AttrType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Class = /*#__PURE__*/function (_AttrType) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Class, _AttrType);
  var _super = _createSuper(Class);
  function Class() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Class);
    return _super.apply(this, arguments);
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Class, null, [{
    key: "update",
    value:
    /**
     * @param {ElemType} elem
     */
    function update(elem) {
      var arr = [elem.vnode.className];
      var classList = elem.vnode.classList;
      if (classList) {
        arr.push.apply(arr, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(classList));
      }
      var className = arr.filter(Boolean).join(' ');
      (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Class), "update", this).call(this, elem, this.nodeName, className || null);
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
}(_AttrType_js__WEBPACK_IMPORTED_MODULE_8__.AttrType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Class, "nodeName", 'class');

/***/ }),
/* 34 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassList": () => (/* binding */ ClassList)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _PropType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32);





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ClassList = /*#__PURE__*/function (_PropType) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(ClassList, _PropType);
  var _super = _createSuper(ClassList);
  function ClassList() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ClassList);
    return _super.apply(this, arguments);
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ClassList, null, [{
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
}(_PropType_js__WEBPACK_IMPORTED_MODULE_5__.PropType);

/***/ }),
/* 35 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dataset": () => (/* binding */ Dataset)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _PropType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32);





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Dataset = /*#__PURE__*/function (_PropType) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Dataset, _PropType);
  var _super = _createSuper(Dataset);
  function Dataset() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Dataset);
    return _super.apply(this, arguments);
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Dataset, null, [{
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
}(_PropType_js__WEBPACK_IMPORTED_MODULE_5__.PropType);

/***/ }),
/* 36 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventType": () => (/* binding */ EventType)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _window_cjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);




var EventType = /*#__PURE__*/function () {
  /**
   * @param {Event|*} e
   * @param {ElemType|*} context
   */
  function EventType(e, context) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EventType);
    this.nativeEvent = e;
    this.currentTarget = context;
  }

  /**
   * @return {ElemType|*}
   */
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EventType, [{
    key: "target",
    get: function get() {
      var elem = this.currentTarget;
      var node = this.nativeEvent.target;
      var target = elem.getElemByNode(node);
      if (target) {
        return target;
      }
      do {
        node = node.parentNode;
        target = elem.getElemByNode(node);
      } while (node && !target);
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
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(EventType, "ElemType", void 0);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(EventType, "types", {
  afterprint: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.Event),
  animationcancel: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.AnimationEvent, true),
  animationend: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.AnimationEvent, true),
  animationiteration: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.AnimationEvent, true),
  animationstart: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.AnimationEvent, true),
  auxclick: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.MouseEvent, true, true),
  beforeinput: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.Event, true, true),
  beforematch: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.Event),
  beforeprint: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.Event),
  beforeunload: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.Event),
  blur: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.FocusEvent),
  cancel: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.Event, false, true),
  canplay: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.Event),
  canplaythrough: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.Event),
  change: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.Event, true),
  click: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.MouseEvent, true, true),
  close: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.Event),
  contextlost: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.Event),
  contextmenu: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.MouseEvent, true, true),
  contextrestored: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.Event),
  copy: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.ClipboardEvent, true, true),
  cuechange: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.Event),
  cut: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.ClipboardEvent, true, true),
  dblclick: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.MouseEvent, true, true),
  drag: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.DragEvent, true, true),
  dragend: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.DragEvent, true),
  dragenter: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.DragEvent, true, true),
  dragleave: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.DragEvent, true),
  dragover: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.DragEvent, true, true),
  dragstart: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.DragEvent, true, true),
  drop: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.DragEvent, true, true),
  durationchange: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.Event),
  emptied: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.Event),
  ended: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.Event),
  error: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.Event),
  focus: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.FocusEvent),
  focusin: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.FocusEvent, true),
  focusout: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.FocusEvent, true),
  formdata: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.FormDataEvent),
  gotpointercapture: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.PointerEvent, true),
  hashchange: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.HashChangeEvent),
  input: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.InputEvent, true),
  invalid: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.Event, false, true),
  keydown: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.KeyboardEvent, true, true),
  keypress: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.KeyboardEvent, true, true),
  keyup: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.KeyboardEvent, true, true),
  languagechange: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.Event),
  load: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.Event),
  loadeddata: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.Event),
  loadedmetadata: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.Event),
  loadstart: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.Event),
  lostpointercapture: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.PointerEvent, true),
  message: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.MessageEvent),
  messageerror: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.MessageEvent),
  mousedown: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.MouseEvent, true, true),
  mouseenter: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.MouseEvent),
  mouseleave: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.MouseEvent),
  mousemove: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.MouseEvent, true, true),
  mouseout: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.MouseEvent, true, true),
  mouseover: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.MouseEvent, true, true),
  mouseup: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.MouseEvent, true, true),
  offline: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.Event),
  online: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.Event),
  pagehide: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.PageTransitionEvent),
  pageshow: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.PageTransitionEvent),
  paste: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.ClipboardEvent, true, true),
  pause: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.Event),
  play: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.Event),
  playing: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.Event),
  pointercancel: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.PointerEvent, true),
  pointerdown: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.PointerEvent, true, true),
  pointerenter: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.PointerEvent),
  pointerleave: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.PointerEvent),
  pointermove: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.PointerEvent, true, true),
  pointerout: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.PointerEvent, true, true),
  pointerover: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.PointerEvent, true, true),
  pointerrawupdate: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.PointerEvent, true),
  pointerup: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.PointerEvent, true, true),
  popstate: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.PopStateEvent),
  progress: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.ProgressEvent),
  ratechange: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.Event),
  reset: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.Event, true, true),
  resize: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.UIEvent),
  rejectionhandled: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.PromiseRejectionEvent),
  scroll: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.Event, true),
  securitypolicyviolation: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.SecurityPolicyViolationEvent, true),
  seeked: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.Event),
  seeking: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.Event),
  select: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.UIEvent, true),
  slotchange: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.Event, true),
  stalled: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.Event),
  storage: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.StorageEvent),
  submit: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.SubmitEvent, true, true),
  suspend: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.Event),
  timeupdate: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.Event),
  toggle: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.Event),
  touchcancel: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.TouchEvent, true),
  touchend: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.TouchEvent, true, true),
  touchmove: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.TouchEvent, true, true),
  touchstart: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.TouchEvent, true, true),
  transitioncancel: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.TransitionEvent, true),
  transitionend: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.TransitionEvent, true, true),
  transitionrun: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.TransitionEvent, true),
  transitionstart: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.TransitionEvent, true),
  unhandledrejection: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.PromiseRejectionEvent),
  unload: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.Event),
  volumechange: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.Event),
  waiting: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.Event),
  wheel: define(_window_cjs__WEBPACK_IMPORTED_MODULE_3__.WheelEvent, true, true)
});
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(EventType, "props", {});
(function () {
  var type, prop;
  for (type in EventType.types) {
    prop = 'on' + type;
    if (prop in _window_cjs__WEBPACK_IMPORTED_MODULE_3__.HTMLElement.prototype) {
      EventType.props[prop] = EventType;
    }
  }
})();
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(EventType, "members", {
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

/***/ }),
/* 37 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Id": () => (/* binding */ Id)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _AttrType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var counter = 0;
var Id = /*#__PURE__*/function (_AttrType) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Id, _AttrType);
  var _super = _createSuper(Id);
  function Id() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Id);
    return _super.apply(this, arguments);
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Id, null, [{
    key: "generate",
    value: function generate() {
      var str = (counter++).toString(36);
      return 'ID_' + str.padStart(4, '0');
    }
  }]);
  return Id;
}(_AttrType_js__WEBPACK_IMPORTED_MODULE_6__.AttrType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Id, "nodeName", 'id');

/***/ }),
/* 38 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InnerHTML": () => (/* binding */ InnerHTML)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _PropType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32);





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var InnerHTML = /*#__PURE__*/function (_PropType) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(InnerHTML, _PropType);
  var _super = _createSuper(InnerHTML);
  function InnerHTML() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InnerHTML);
    return _super.apply(this, arguments);
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(InnerHTML, null, [{
    key: "set",
    value:
    /**
     * @param {ElemType} elem
     * @param {string} name
     * @param {string|null|*[]|*} value
     */
    function set(elem, name, value) {
      elem.vnode[name] = Array.isArray(value) ? value.filter(_PropType_js__WEBPACK_IMPORTED_MODULE_5__.PropType.filter).join('') : value;
    }
  }]);
  return InnerHTML;
}(_PropType_js__WEBPACK_IMPORTED_MODULE_5__.PropType);

/***/ }),
/* 39 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Style": () => (/* binding */ Style)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _window_cjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28);
/* harmony import */ var _AttrType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


var sampleNode = _window_cjs__WEBPACK_IMPORTED_MODULE_7__.document.createElement('div');
var Style = /*#__PURE__*/function (_AttrType) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Style, _AttrType);
  var _super = _createSuper(Style);
  function Style() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Style);
    return _super.apply(this, arguments);
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Style, null, [{
    key: "get",
    value:
    /**
     * @param {ElemType} elem
     * @param {string} prop
     * @return {CSSStyleDeclaration}
     */
    function get(elem, prop) {
      return elem.node.style;
    }

    /**
     * @param {ElemType} elem
     * @param {string} prop
     * @param {string|{}|null} value
     */
  }, {
    key: "set",
    value: function set(elem, prop, value) {
      if (typeof value === 'string' || value === null) {
        sampleNode.style = value || '';
      } else Object.assign(sampleNode.style, value);
      elem.vnode.style = sampleNode.getAttribute('style') || null;
    }

    /**
     * @param {ElemType} elem
     * @param {string} propName
     * @param {*} value
     */
  }, {
    key: "update",
    value: function update(elem, propName, value) {
      (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Style), "update", this).call(this, elem, propName, value);
      sampleNode.style = '';
    }
  }]);
  return Style;
}(_AttrType_js__WEBPACK_IMPORTED_MODULE_8__.AttrType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Style, "nodeName", 'style');

/***/ }),
/* 40 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextType": () => (/* binding */ TextType)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _window_cjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);



var Text = _window_cjs__WEBPACK_IMPORTED_MODULE_2__.Text;
var TextType = /*#__PURE__*/function () {
  /**
   * @param {string|number|*} data
   */
  function TextType(data) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TextType);
    this.data = String(data);
    this.node = null;
  }

  /**
   * @param {Text} [node]
   * @private
   */
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TextType, [{
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

/***/ }),
/* 41 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InnerText": () => (/* binding */ InnerText)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _PropType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32);





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var InnerText = /*#__PURE__*/function (_PropType) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(InnerText, _PropType);
  var _super = _createSuper(InnerText);
  function InnerText() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InnerText);
    return _super.apply(this, arguments);
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(InnerText, null, [{
    key: "set",
    value:
    /**
     * @param {ElemType} elem
     * @param {string} name
     * @param {string|null|*[]|*} value
     */
    function set(elem, name, value) {
      elem.vnode[name] = Array.isArray(value) ? value.filter(_PropType_js__WEBPACK_IMPORTED_MODULE_5__.PropType.filter).join('\n') : value;
    }
  }]);
  return InnerText;
}(_PropType_js__WEBPACK_IMPORTED_MODULE_5__.PropType);

/***/ }),
/* 42 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Context": () => (/* binding */ Context)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);



var _excluded = ["children"];
var Context = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(
/**
 * @param {*} props
 * @constructor
 */
function Context(props) {
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Context);
  /**
   * @param {*} newProps
   * @param {*} children
   * @return {*}
   */
  this.Provider = function (_ref) {
    var children = _ref.children,
      newProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);
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

/***/ }),
/* 43 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutProperties)
/* harmony export */ });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = (0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
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

/***/ }),
/* 44 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
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

/***/ }),
/* 45 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HtmlA": () => (/* binding */ HtmlA),
/* harmony export */   "HtmlAbbr": () => (/* binding */ HtmlAbbr),
/* harmony export */   "HtmlAddress": () => (/* binding */ HtmlAddress),
/* harmony export */   "HtmlArea": () => (/* binding */ HtmlArea),
/* harmony export */   "HtmlArticle": () => (/* binding */ HtmlArticle),
/* harmony export */   "HtmlAside": () => (/* binding */ HtmlAside),
/* harmony export */   "HtmlAudio": () => (/* binding */ HtmlAudio),
/* harmony export */   "HtmlB": () => (/* binding */ HtmlB),
/* harmony export */   "HtmlBase": () => (/* binding */ HtmlBase),
/* harmony export */   "HtmlBdi": () => (/* binding */ HtmlBdi),
/* harmony export */   "HtmlBdo": () => (/* binding */ HtmlBdo),
/* harmony export */   "HtmlBlockQuote": () => (/* binding */ HtmlBlockQuote),
/* harmony export */   "HtmlBody": () => (/* binding */ HtmlBody),
/* harmony export */   "HtmlBr": () => (/* binding */ HtmlBr),
/* harmony export */   "HtmlButton": () => (/* binding */ HtmlButton),
/* harmony export */   "HtmlCanvas": () => (/* binding */ HtmlCanvas),
/* harmony export */   "HtmlCaption": () => (/* binding */ HtmlCaption),
/* harmony export */   "HtmlCite": () => (/* binding */ HtmlCite),
/* harmony export */   "HtmlCode": () => (/* binding */ HtmlCode),
/* harmony export */   "HtmlCol": () => (/* binding */ HtmlCol),
/* harmony export */   "HtmlColGroup": () => (/* binding */ HtmlColGroup),
/* harmony export */   "HtmlData": () => (/* binding */ HtmlData),
/* harmony export */   "HtmlDataList": () => (/* binding */ HtmlDataList),
/* harmony export */   "HtmlDd": () => (/* binding */ HtmlDd),
/* harmony export */   "HtmlDel": () => (/* binding */ HtmlDel),
/* harmony export */   "HtmlDetails": () => (/* binding */ HtmlDetails),
/* harmony export */   "HtmlDfn": () => (/* binding */ HtmlDfn),
/* harmony export */   "HtmlDialog": () => (/* binding */ HtmlDialog),
/* harmony export */   "HtmlDiv": () => (/* binding */ HtmlDiv),
/* harmony export */   "HtmlDl": () => (/* binding */ HtmlDl),
/* harmony export */   "HtmlDt": () => (/* binding */ HtmlDt),
/* harmony export */   "HtmlEm": () => (/* binding */ HtmlEm),
/* harmony export */   "HtmlEmbed": () => (/* binding */ HtmlEmbed),
/* harmony export */   "HtmlFieldSet": () => (/* binding */ HtmlFieldSet),
/* harmony export */   "HtmlFigCaption": () => (/* binding */ HtmlFigCaption),
/* harmony export */   "HtmlFigure": () => (/* binding */ HtmlFigure),
/* harmony export */   "HtmlFooter": () => (/* binding */ HtmlFooter),
/* harmony export */   "HtmlForm": () => (/* binding */ HtmlForm),
/* harmony export */   "HtmlH1": () => (/* binding */ HtmlH1),
/* harmony export */   "HtmlH2": () => (/* binding */ HtmlH2),
/* harmony export */   "HtmlH3": () => (/* binding */ HtmlH3),
/* harmony export */   "HtmlH4": () => (/* binding */ HtmlH4),
/* harmony export */   "HtmlH5": () => (/* binding */ HtmlH5),
/* harmony export */   "HtmlH6": () => (/* binding */ HtmlH6),
/* harmony export */   "HtmlHGroup": () => (/* binding */ HtmlHGroup),
/* harmony export */   "HtmlHead": () => (/* binding */ HtmlHead),
/* harmony export */   "HtmlHeader": () => (/* binding */ HtmlHeader),
/* harmony export */   "HtmlHr": () => (/* binding */ HtmlHr),
/* harmony export */   "HtmlHtml": () => (/* binding */ HtmlHtml),
/* harmony export */   "HtmlI": () => (/* binding */ HtmlI),
/* harmony export */   "HtmlIFrame": () => (/* binding */ HtmlIFrame),
/* harmony export */   "HtmlImg": () => (/* binding */ HtmlImg),
/* harmony export */   "HtmlInput": () => (/* binding */ HtmlInput),
/* harmony export */   "HtmlIns": () => (/* binding */ HtmlIns),
/* harmony export */   "HtmlKbd": () => (/* binding */ HtmlKbd),
/* harmony export */   "HtmlLabel": () => (/* binding */ HtmlLabel),
/* harmony export */   "HtmlLegend": () => (/* binding */ HtmlLegend),
/* harmony export */   "HtmlLi": () => (/* binding */ HtmlLi),
/* harmony export */   "HtmlLink": () => (/* binding */ HtmlLink),
/* harmony export */   "HtmlMain": () => (/* binding */ HtmlMain),
/* harmony export */   "HtmlMap": () => (/* binding */ HtmlMap),
/* harmony export */   "HtmlMark": () => (/* binding */ HtmlMark),
/* harmony export */   "HtmlMenu": () => (/* binding */ HtmlMenu),
/* harmony export */   "HtmlMeta": () => (/* binding */ HtmlMeta),
/* harmony export */   "HtmlMeter": () => (/* binding */ HtmlMeter),
/* harmony export */   "HtmlNav": () => (/* binding */ HtmlNav),
/* harmony export */   "HtmlNoScript": () => (/* binding */ HtmlNoScript),
/* harmony export */   "HtmlObject": () => (/* binding */ HtmlObject),
/* harmony export */   "HtmlOl": () => (/* binding */ HtmlOl),
/* harmony export */   "HtmlOptGroup": () => (/* binding */ HtmlOptGroup),
/* harmony export */   "HtmlOption": () => (/* binding */ HtmlOption),
/* harmony export */   "HtmlOutput": () => (/* binding */ HtmlOutput),
/* harmony export */   "HtmlP": () => (/* binding */ HtmlP),
/* harmony export */   "HtmlParam": () => (/* binding */ HtmlParam),
/* harmony export */   "HtmlPicture": () => (/* binding */ HtmlPicture),
/* harmony export */   "HtmlPre": () => (/* binding */ HtmlPre),
/* harmony export */   "HtmlProgress": () => (/* binding */ HtmlProgress),
/* harmony export */   "HtmlQ": () => (/* binding */ HtmlQ),
/* harmony export */   "HtmlRp": () => (/* binding */ HtmlRp),
/* harmony export */   "HtmlRt": () => (/* binding */ HtmlRt),
/* harmony export */   "HtmlRuby": () => (/* binding */ HtmlRuby),
/* harmony export */   "HtmlS": () => (/* binding */ HtmlS),
/* harmony export */   "HtmlSamp": () => (/* binding */ HtmlSamp),
/* harmony export */   "HtmlScript": () => (/* binding */ HtmlScript),
/* harmony export */   "HtmlSection": () => (/* binding */ HtmlSection),
/* harmony export */   "HtmlSelect": () => (/* binding */ HtmlSelect),
/* harmony export */   "HtmlSmall": () => (/* binding */ HtmlSmall),
/* harmony export */   "HtmlSource": () => (/* binding */ HtmlSource),
/* harmony export */   "HtmlSpan": () => (/* binding */ HtmlSpan),
/* harmony export */   "HtmlStrong": () => (/* binding */ HtmlStrong),
/* harmony export */   "HtmlStyle": () => (/* binding */ HtmlStyle),
/* harmony export */   "HtmlSub": () => (/* binding */ HtmlSub),
/* harmony export */   "HtmlSummary": () => (/* binding */ HtmlSummary),
/* harmony export */   "HtmlSup": () => (/* binding */ HtmlSup),
/* harmony export */   "HtmlTBody": () => (/* binding */ HtmlTBody),
/* harmony export */   "HtmlTFoot": () => (/* binding */ HtmlTFoot),
/* harmony export */   "HtmlTHead": () => (/* binding */ HtmlTHead),
/* harmony export */   "HtmlTable": () => (/* binding */ HtmlTable),
/* harmony export */   "HtmlTd": () => (/* binding */ HtmlTd),
/* harmony export */   "HtmlTemplate": () => (/* binding */ HtmlTemplate),
/* harmony export */   "HtmlTextArea": () => (/* binding */ HtmlTextArea),
/* harmony export */   "HtmlTh": () => (/* binding */ HtmlTh),
/* harmony export */   "HtmlTime": () => (/* binding */ HtmlTime),
/* harmony export */   "HtmlTitle": () => (/* binding */ HtmlTitle),
/* harmony export */   "HtmlTr": () => (/* binding */ HtmlTr),
/* harmony export */   "HtmlTrack": () => (/* binding */ HtmlTrack),
/* harmony export */   "HtmlU": () => (/* binding */ HtmlU),
/* harmony export */   "HtmlUl": () => (/* binding */ HtmlUl),
/* harmony export */   "HtmlVar": () => (/* binding */ HtmlVar),
/* harmony export */   "HtmlVideo": () => (/* binding */ HtmlVideo),
/* harmony export */   "HtmlWbr": () => (/* binding */ HtmlWbr)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _AttrType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var _BooleanType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13);
/* harmony import */ var _NumberType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16);
/* harmony import */ var _HtmlType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(46);
/* harmony import */ var _PropType_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(32);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var attr = _AttrType_js__WEBPACK_IMPORTED_MODULE_6__.AttrType.define.bind(_AttrType_js__WEBPACK_IMPORTED_MODULE_6__.AttrType);
var _boolean = _BooleanType_js__WEBPACK_IMPORTED_MODULE_7__.BooleanType.define.bind(_BooleanType_js__WEBPACK_IMPORTED_MODULE_7__.BooleanType);
var number = _NumberType_js__WEBPACK_IMPORTED_MODULE_8__.NumberType.define.bind(_NumberType_js__WEBPACK_IMPORTED_MODULE_8__.NumberType);
var HtmlA = /*#__PURE__*/function (_HtmlType) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlA, _HtmlType);
  var _super = _createSuper(HtmlA);
  function HtmlA() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlA);
    return _super.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlA);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlA, "tagName", 'a');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlA, "props", {
  download: attr('download'),
  hash: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  host: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  hostname: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  href: attr('href'),
  hreflang: attr('hreflang'),
  password: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  pathname: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  port: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  protocol: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  referrerPolicy: attr('referrerpolicy'),
  rel: attr('rel'),
  rev: attr('rev'),
  search: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  target: attr('target'),
  type: attr('type'),
  username: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType
});
var HtmlAbbr = /*#__PURE__*/function (_HtmlType2) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlAbbr, _HtmlType2);
  var _super2 = _createSuper(HtmlAbbr);
  function HtmlAbbr() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlAbbr);
    return _super2.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlAbbr);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlAbbr, "tagName", 'abbr');
var HtmlAddress = /*#__PURE__*/function (_HtmlType3) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlAddress, _HtmlType3);
  var _super3 = _createSuper(HtmlAddress);
  function HtmlAddress() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlAddress);
    return _super3.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlAddress);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlAddress, "tagName", 'address');
var HtmlArea = /*#__PURE__*/function (_HtmlType4) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlArea, _HtmlType4);
  var _super4 = _createSuper(HtmlArea);
  function HtmlArea() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlArea);
    return _super4.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlArea);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlArea, "tagName", 'area');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlArea, "props", {
  alt: attr('alt'),
  coords: attr('coords'),
  download: attr('download'),
  hash: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  host: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  hostname: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  href: attr('href'),
  password: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  pathname: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  port: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  protocol: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  referrerPolicy: attr('referrerpolicy'),
  rel: attr('rel'),
  search: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  shape: attr('shape'),
  target: attr('target'),
  username: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType
});
var HtmlArticle = /*#__PURE__*/function (_HtmlType5) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlArticle, _HtmlType5);
  var _super5 = _createSuper(HtmlArticle);
  function HtmlArticle() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlArticle);
    return _super5.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlArticle);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlArticle, "tagName", 'article');
var HtmlAside = /*#__PURE__*/function (_HtmlType6) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlAside, _HtmlType6);
  var _super6 = _createSuper(HtmlAside);
  function HtmlAside() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlAside);
    return _super6.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlAside);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlAside, "tagName", 'aside');
var HtmlAudio = /*#__PURE__*/function (_HtmlType7) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlAudio, _HtmlType7);
  var _super7 = _createSuper(HtmlAudio);
  function HtmlAudio() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlAudio);
    return _super7.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlAudio);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlAudio, "tagName", 'audio');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlAudio, "props", {
  autoplay: _boolean('autoplay'),
  controls: _boolean('controls'),
  crossOrigin: attr('crossorigin'),
  currentTime: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  defaultMuted: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  defaultPlaybackRate: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  loop: _boolean('loop'),
  muted: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  playbackRate: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  preload: attr('preload'),
  src: attr('src'),
  srcObject: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  volume: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType
});
var HtmlB = /*#__PURE__*/function (_HtmlType8) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlB, _HtmlType8);
  var _super8 = _createSuper(HtmlB);
  function HtmlB() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlB);
    return _super8.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlB);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlB, "tagName", 'b');
var HtmlBase = /*#__PURE__*/function (_HtmlType9) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlBase, _HtmlType9);
  var _super9 = _createSuper(HtmlBase);
  function HtmlBase() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlBase);
    return _super9.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlBase);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlBase, "tagName", 'base');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlBase, "props", {
  href: attr('href'),
  target: attr('target')
});
var HtmlBdi = /*#__PURE__*/function (_HtmlType10) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlBdi, _HtmlType10);
  var _super10 = _createSuper(HtmlBdi);
  function HtmlBdi() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlBdi);
    return _super10.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlBdi);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlBdi, "tagName", 'bdi');
var HtmlBdo = /*#__PURE__*/function (_HtmlType11) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlBdo, _HtmlType11);
  var _super11 = _createSuper(HtmlBdo);
  function HtmlBdo() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlBdo);
    return _super11.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlBdo);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlBdo, "tagName", 'bdo');
var HtmlBlockQuote = /*#__PURE__*/function (_HtmlType12) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlBlockQuote, _HtmlType12);
  var _super12 = _createSuper(HtmlBlockQuote);
  function HtmlBlockQuote() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlBlockQuote);
    return _super12.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlBlockQuote);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlBlockQuote, "tagName", 'blockquote');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlBlockQuote, "props", {
  cite: attr('cite')
});
var HtmlBody = /*#__PURE__*/function (_HtmlType13) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlBody, _HtmlType13);
  var _super13 = _createSuper(HtmlBody);
  function HtmlBody() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlBody);
    return _super13.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlBody);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlBody, "tagName", 'body');
var HtmlBr = /*#__PURE__*/function (_HtmlType14) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlBr, _HtmlType14);
  var _super14 = _createSuper(HtmlBr);
  function HtmlBr() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlBr);
    return _super14.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlBr);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlBr, "tagName", 'br');
var HtmlButton = /*#__PURE__*/function (_HtmlType15) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlButton, _HtmlType15);
  var _super15 = _createSuper(HtmlButton);
  function HtmlButton() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlButton);
    return _super15.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlButton);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlButton, "tagName", 'button');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlButton, "props", {
  autofocus: _boolean('autofocus'),
  disabled: _boolean('disabled'),
  formAction: attr('formaction'),
  formEnctype: attr('formenctype'),
  formMethod: attr('formmethod'),
  formNoValidate: _boolean('formnovalidate'),
  formTarget: attr('formtarget'),
  name: attr('name'),
  type: attr('type'),
  value: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType
});
var HtmlCanvas = /*#__PURE__*/function (_HtmlType16) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlCanvas, _HtmlType16);
  var _super16 = _createSuper(HtmlCanvas);
  function HtmlCanvas() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlCanvas);
    return _super16.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlCanvas);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlCanvas, "tagName", 'canvas');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlCanvas, "props", {
  height: number('height'),
  width: number('width')
});
var HtmlCaption = /*#__PURE__*/function (_HtmlType17) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlCaption, _HtmlType17);
  var _super17 = _createSuper(HtmlCaption);
  function HtmlCaption() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlCaption);
    return _super17.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlCaption);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlCaption, "tagName", 'caption');
var HtmlCite = /*#__PURE__*/function (_HtmlType18) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlCite, _HtmlType18);
  var _super18 = _createSuper(HtmlCite);
  function HtmlCite() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlCite);
    return _super18.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlCite);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlCite, "tagName", 'cite');
var HtmlCode = /*#__PURE__*/function (_HtmlType19) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlCode, _HtmlType19);
  var _super19 = _createSuper(HtmlCode);
  function HtmlCode() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlCode);
    return _super19.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlCode);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlCode, "tagName", 'code');
var HtmlCol = /*#__PURE__*/function (_HtmlType20) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlCol, _HtmlType20);
  var _super20 = _createSuper(HtmlCol);
  function HtmlCol() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlCol);
    return _super20.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlCol);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlCol, "tagName", 'col');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlCol, "props", {
  span: number('span')
});
var HtmlColGroup = /*#__PURE__*/function (_HtmlType21) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlColGroup, _HtmlType21);
  var _super21 = _createSuper(HtmlColGroup);
  function HtmlColGroup() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlColGroup);
    return _super21.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlColGroup);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlColGroup, "tagName", 'colgroup');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlColGroup, "props", {
  span: number('span')
});
var HtmlData = /*#__PURE__*/function (_HtmlType22) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlData, _HtmlType22);
  var _super22 = _createSuper(HtmlData);
  function HtmlData() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlData);
    return _super22.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlData);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlData, "tagName", 'data');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlData, "props", {
  value: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType
});
var HtmlDataList = /*#__PURE__*/function (_HtmlType23) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlDataList, _HtmlType23);
  var _super23 = _createSuper(HtmlDataList);
  function HtmlDataList() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlDataList);
    return _super23.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlDataList);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlDataList, "tagName", 'datalist');
var HtmlDd = /*#__PURE__*/function (_HtmlType24) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlDd, _HtmlType24);
  var _super24 = _createSuper(HtmlDd);
  function HtmlDd() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlDd);
    return _super24.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlDd);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlDd, "tagName", 'dd');
var HtmlDel = /*#__PURE__*/function (_HtmlType25) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlDel, _HtmlType25);
  var _super25 = _createSuper(HtmlDel);
  function HtmlDel() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlDel);
    return _super25.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlDel);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlDel, "tagName", 'del');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlDel, "props", {
  cite: attr('cite'),
  dateTime: attr('datetime')
});
var HtmlDetails = /*#__PURE__*/function (_HtmlType26) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlDetails, _HtmlType26);
  var _super26 = _createSuper(HtmlDetails);
  function HtmlDetails() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlDetails);
    return _super26.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlDetails);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlDetails, "tagName", 'details');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlDetails, "props", {
  open: _boolean('open')
});
var HtmlDfn = /*#__PURE__*/function (_HtmlType27) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlDfn, _HtmlType27);
  var _super27 = _createSuper(HtmlDfn);
  function HtmlDfn() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlDfn);
    return _super27.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlDfn);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlDfn, "tagName", 'dfn');
var HtmlDialog = /*#__PURE__*/function (_HtmlType28) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlDialog, _HtmlType28);
  var _super28 = _createSuper(HtmlDialog);
  function HtmlDialog() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlDialog);
    return _super28.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlDialog);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlDialog, "tagName", 'dialog');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlDialog, "props", {
  open: _boolean('open'),
  returnValue: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType
});
var HtmlDiv = /*#__PURE__*/function (_HtmlType29) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlDiv, _HtmlType29);
  var _super29 = _createSuper(HtmlDiv);
  function HtmlDiv() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlDiv);
    return _super29.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlDiv);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlDiv, "tagName", 'div');
var HtmlDl = /*#__PURE__*/function (_HtmlType30) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlDl, _HtmlType30);
  var _super30 = _createSuper(HtmlDl);
  function HtmlDl() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlDl);
    return _super30.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlDl);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlDl, "tagName", 'dl');
var HtmlDt = /*#__PURE__*/function (_HtmlType31) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlDt, _HtmlType31);
  var _super31 = _createSuper(HtmlDt);
  function HtmlDt() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlDt);
    return _super31.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlDt);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlDt, "tagName", 'dt');
var HtmlEm = /*#__PURE__*/function (_HtmlType32) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlEm, _HtmlType32);
  var _super32 = _createSuper(HtmlEm);
  function HtmlEm() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlEm);
    return _super32.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlEm);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlEm, "tagName", 'em');
var HtmlEmbed = /*#__PURE__*/function (_HtmlType33) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlEmbed, _HtmlType33);
  var _super33 = _createSuper(HtmlEmbed);
  function HtmlEmbed() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlEmbed);
    return _super33.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlEmbed);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlEmbed, "tagName", 'embed');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlEmbed, "props", {
  height: number('height'),
  src: attr('src'),
  type: attr('type'),
  width: number('width')
});
var HtmlFieldSet = /*#__PURE__*/function (_HtmlType34) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlFieldSet, _HtmlType34);
  var _super34 = _createSuper(HtmlFieldSet);
  function HtmlFieldSet() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlFieldSet);
    return _super34.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlFieldSet);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlFieldSet, "tagName", 'fieldset');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlFieldSet, "props", {
  disabled: _boolean('disabled'),
  name: attr('name')
});
var HtmlFigCaption = /*#__PURE__*/function (_HtmlType35) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlFigCaption, _HtmlType35);
  var _super35 = _createSuper(HtmlFigCaption);
  function HtmlFigCaption() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlFigCaption);
    return _super35.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlFigCaption);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlFigCaption, "tagName", 'figcaption');
var HtmlFigure = /*#__PURE__*/function (_HtmlType36) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlFigure, _HtmlType36);
  var _super36 = _createSuper(HtmlFigure);
  function HtmlFigure() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlFigure);
    return _super36.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlFigure);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlFigure, "tagName", 'figure');
var HtmlFooter = /*#__PURE__*/function (_HtmlType37) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlFooter, _HtmlType37);
  var _super37 = _createSuper(HtmlFooter);
  function HtmlFooter() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlFooter);
    return _super37.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlFooter);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlFooter, "tagName", 'footer');
var HtmlForm = /*#__PURE__*/function (_HtmlType38) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlForm, _HtmlType38);
  var _super38 = _createSuper(HtmlForm);
  function HtmlForm() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlForm);
    return _super38.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlForm);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlForm, "tagName", 'form');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlForm, "props", {
  acceptCharset: attr('accept-charset'),
  action: attr('action'),
  autocomplete: attr('autocomplete'),
  enctype: attr('enctype'),
  method: attr('method'),
  name: attr('name'),
  noValidate: _boolean('novalidate'),
  target: attr('target')
});
var HtmlH1 = /*#__PURE__*/function (_HtmlType39) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlH1, _HtmlType39);
  var _super39 = _createSuper(HtmlH1);
  function HtmlH1() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlH1);
    return _super39.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlH1);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlH1, "tagName", 'h1');
var HtmlH2 = /*#__PURE__*/function (_HtmlType40) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlH2, _HtmlType40);
  var _super40 = _createSuper(HtmlH2);
  function HtmlH2() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlH2);
    return _super40.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlH2);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlH2, "tagName", 'h2');
var HtmlH3 = /*#__PURE__*/function (_HtmlType41) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlH3, _HtmlType41);
  var _super41 = _createSuper(HtmlH3);
  function HtmlH3() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlH3);
    return _super41.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlH3);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlH3, "tagName", 'h3');
var HtmlH4 = /*#__PURE__*/function (_HtmlType42) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlH4, _HtmlType42);
  var _super42 = _createSuper(HtmlH4);
  function HtmlH4() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlH4);
    return _super42.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlH4);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlH4, "tagName", 'h4');
var HtmlH5 = /*#__PURE__*/function (_HtmlType43) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlH5, _HtmlType43);
  var _super43 = _createSuper(HtmlH5);
  function HtmlH5() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlH5);
    return _super43.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlH5);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlH5, "tagName", 'h5');
var HtmlH6 = /*#__PURE__*/function (_HtmlType44) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlH6, _HtmlType44);
  var _super44 = _createSuper(HtmlH6);
  function HtmlH6() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlH6);
    return _super44.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlH6);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlH6, "tagName", 'h6');
var HtmlHGroup = /*#__PURE__*/function (_HtmlType45) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlHGroup, _HtmlType45);
  var _super45 = _createSuper(HtmlHGroup);
  function HtmlHGroup() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlHGroup);
    return _super45.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlHGroup);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlHGroup, "tagName", 'hgroup');
var HtmlHead = /*#__PURE__*/function (_HtmlType46) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlHead, _HtmlType46);
  var _super46 = _createSuper(HtmlHead);
  function HtmlHead() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlHead);
    return _super46.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlHead);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlHead, "tagName", 'head');
var HtmlHeader = /*#__PURE__*/function (_HtmlType47) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlHeader, _HtmlType47);
  var _super47 = _createSuper(HtmlHeader);
  function HtmlHeader() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlHeader);
    return _super47.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlHeader);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlHeader, "tagName", 'header');
var HtmlHr = /*#__PURE__*/function (_HtmlType48) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlHr, _HtmlType48);
  var _super48 = _createSuper(HtmlHr);
  function HtmlHr() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlHr);
    return _super48.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlHr);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlHr, "tagName", 'hr');
var HtmlHtml = /*#__PURE__*/function (_HtmlType49) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlHtml, _HtmlType49);
  var _super49 = _createSuper(HtmlHtml);
  function HtmlHtml() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlHtml);
    return _super49.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlHtml);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlHtml, "tagName", 'html');
var HtmlI = /*#__PURE__*/function (_HtmlType50) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlI, _HtmlType50);
  var _super50 = _createSuper(HtmlI);
  function HtmlI() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlI);
    return _super50.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlI);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlI, "tagName", 'i');
var HtmlIFrame = /*#__PURE__*/function (_HtmlType51) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlIFrame, _HtmlType51);
  var _super51 = _createSuper(HtmlIFrame);
  function HtmlIFrame() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlIFrame);
    return _super51.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlIFrame);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlIFrame, "tagName", 'iframe');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlIFrame, "props", {
  allowFullScreen: _boolean('allowfullscreen'),
  height: number('height'),
  referrerPolicy: attr('referrerpolicy'),
  src: attr('src'),
  srcdoc: attr('srcdoc'),
  width: number('width')
});
var HtmlImg = /*#__PURE__*/function (_HtmlType52) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlImg, _HtmlType52);
  var _super52 = _createSuper(HtmlImg);
  function HtmlImg() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlImg);
    return _super52.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlImg);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlImg, "tagName", 'img');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlImg, "props", {
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
});
var HtmlInput = /*#__PURE__*/function (_HtmlType53) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlInput, _HtmlType53);
  var _super53 = _createSuper(HtmlInput);
  function HtmlInput() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlInput);
    return _super53.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlInput);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlInput, "tagName", 'input');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlInput, "props", {
  accept: attr('accept'),
  alt: attr('alt'),
  autocomplete: attr('autocomplete'),
  checked: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  defaultChecked: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  defaultValue: attr('value'),
  dirName: attr('dirname'),
  disabled: _boolean('disabled'),
  formAction: attr('formaction'),
  formEnctype: attr('formenctype'),
  formMethod: attr('formmethod'),
  formNoValidate: _boolean('formnovalidate'),
  formTarget: attr('formtarget'),
  height: number('height'),
  indeterminate: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
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
  selectionDirection: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  selectionEnd: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  selectionStart: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  size: number('size'),
  src: attr('src'),
  step: attr('step'),
  type: attr('type'),
  value: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  valueAsDate: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  valueAsNumber: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  width: number('width')
});
var HtmlIns = /*#__PURE__*/function (_HtmlType54) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlIns, _HtmlType54);
  var _super54 = _createSuper(HtmlIns);
  function HtmlIns() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlIns);
    return _super54.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlIns);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlIns, "tagName", 'ins');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlIns, "props", {
  cite: attr('cite'),
  dateTime: attr('datetime')
});
var HtmlKbd = /*#__PURE__*/function (_HtmlType55) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlKbd, _HtmlType55);
  var _super55 = _createSuper(HtmlKbd);
  function HtmlKbd() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlKbd);
    return _super55.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlKbd);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlKbd, "tagName", 'kbd');
var HtmlLabel = /*#__PURE__*/function (_HtmlType56) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlLabel, _HtmlType56);
  var _super56 = _createSuper(HtmlLabel);
  function HtmlLabel() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlLabel);
    return _super56.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlLabel);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlLabel, "tagName", 'label');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlLabel, "props", {
  htmlFor: attr('for')
});
var HtmlLegend = /*#__PURE__*/function (_HtmlType57) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlLegend, _HtmlType57);
  var _super57 = _createSuper(HtmlLegend);
  function HtmlLegend() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlLegend);
    return _super57.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlLegend);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlLegend, "tagName", 'legend');
var HtmlLi = /*#__PURE__*/function (_HtmlType58) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlLi, _HtmlType58);
  var _super58 = _createSuper(HtmlLi);
  function HtmlLi() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlLi);
    return _super58.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlLi);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlLi, "tagName", 'li');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlLi, "props", {
  value: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType
});
var HtmlLink = /*#__PURE__*/function (_HtmlType59) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlLink, _HtmlType59);
  var _super59 = _createSuper(HtmlLink);
  function HtmlLink() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlLink);
    return _super59.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlLink);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlLink, "tagName", 'link');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlLink, "props", {
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
});
var HtmlMain = /*#__PURE__*/function (_HtmlType60) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlMain, _HtmlType60);
  var _super60 = _createSuper(HtmlMain);
  function HtmlMain() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlMain);
    return _super60.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlMain);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlMain, "tagName", 'main');
var HtmlMap = /*#__PURE__*/function (_HtmlType61) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlMap, _HtmlType61);
  var _super61 = _createSuper(HtmlMap);
  function HtmlMap() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlMap);
    return _super61.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlMap);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlMap, "tagName", 'map');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlMap, "props", {
  name: attr('name')
});
var HtmlMark = /*#__PURE__*/function (_HtmlType62) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlMark, _HtmlType62);
  var _super62 = _createSuper(HtmlMark);
  function HtmlMark() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlMark);
    return _super62.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlMark);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlMark, "tagName", 'mark');
var HtmlMenu = /*#__PURE__*/function (_HtmlType63) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlMenu, _HtmlType63);
  var _super63 = _createSuper(HtmlMenu);
  function HtmlMenu() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlMenu);
    return _super63.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlMenu);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlMenu, "tagName", 'menu');
var HtmlMeta = /*#__PURE__*/function (_HtmlType64) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlMeta, _HtmlType64);
  var _super64 = _createSuper(HtmlMeta);
  function HtmlMeta() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlMeta);
    return _super64.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlMeta);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlMeta, "tagName", 'meta');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlMeta, "props", {
  charset: attr('charset'),
  content: attr('content'),
  httpEquiv: attr('http-equiv'),
  name: attr('name')
});
var HtmlMeter = /*#__PURE__*/function (_HtmlType65) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlMeter, _HtmlType65);
  var _super65 = _createSuper(HtmlMeter);
  function HtmlMeter() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlMeter);
    return _super65.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlMeter);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlMeter, "tagName", 'meter');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlMeter, "props", {
  high: number('high'),
  low: number('low'),
  max: number('max'),
  min: number('min'),
  optimum: number('optimum'),
  value: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType
});
var HtmlNav = /*#__PURE__*/function (_HtmlType66) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlNav, _HtmlType66);
  var _super66 = _createSuper(HtmlNav);
  function HtmlNav() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlNav);
    return _super66.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlNav);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlNav, "tagName", 'nav');
var HtmlNoScript = /*#__PURE__*/function (_HtmlType67) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlNoScript, _HtmlType67);
  var _super67 = _createSuper(HtmlNoScript);
  function HtmlNoScript() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlNoScript);
    return _super67.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlNoScript);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlNoScript, "tagName", 'noscript');
var HtmlObject = /*#__PURE__*/function (_HtmlType68) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlObject, _HtmlType68);
  var _super68 = _createSuper(HtmlObject);
  function HtmlObject() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlObject);
    return _super68.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlObject);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlObject, "tagName", 'object');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlObject, "props", {
  data: attr('data'),
  height: number('height'),
  name: attr('name'),
  type: attr('type'),
  useMap: attr('usemap'),
  width: number('width')
});
var HtmlOl = /*#__PURE__*/function (_HtmlType69) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlOl, _HtmlType69);
  var _super69 = _createSuper(HtmlOl);
  function HtmlOl() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlOl);
    return _super69.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlOl);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlOl, "tagName", 'ol');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlOl, "props", {
  reversed: _boolean('reversed'),
  start: number('start'),
  type: attr('type')
});
var HtmlOptGroup = /*#__PURE__*/function (_HtmlType70) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlOptGroup, _HtmlType70);
  var _super70 = _createSuper(HtmlOptGroup);
  function HtmlOptGroup() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlOptGroup);
    return _super70.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlOptGroup);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlOptGroup, "tagName", 'optgroup');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlOptGroup, "props", {
  disabled: _boolean('disabled'),
  label: attr('label')
});
var HtmlOption = /*#__PURE__*/function (_HtmlType71) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlOption, _HtmlType71);
  var _super71 = _createSuper(HtmlOption);
  function HtmlOption() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlOption);
    return _super71.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlOption);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlOption, "tagName", 'option');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlOption, "props", {
  defaultSelected: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  disabled: _boolean('disabled'),
  label: attr('label'),
  selected: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  text: attr('text'),
  value: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType
});
var HtmlOutput = /*#__PURE__*/function (_HtmlType72) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlOutput, _HtmlType72);
  var _super72 = _createSuper(HtmlOutput);
  function HtmlOutput() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlOutput);
    return _super72.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlOutput);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlOutput, "tagName", 'output');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlOutput, "props", {
  defaultValue: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  htmlFor: attr('for'),
  name: attr('name'),
  value: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType
});
var HtmlP = /*#__PURE__*/function (_HtmlType73) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlP, _HtmlType73);
  var _super73 = _createSuper(HtmlP);
  function HtmlP() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlP);
    return _super73.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlP);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlP, "tagName", 'p');
var HtmlParam = /*#__PURE__*/function (_HtmlType74) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlParam, _HtmlType74);
  var _super74 = _createSuper(HtmlParam);
  function HtmlParam() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlParam);
    return _super74.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlParam);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlParam, "tagName", 'param');
var HtmlPicture = /*#__PURE__*/function (_HtmlType75) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlPicture, _HtmlType75);
  var _super75 = _createSuper(HtmlPicture);
  function HtmlPicture() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlPicture);
    return _super75.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlPicture);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlPicture, "tagName", 'picture');
var HtmlPre = /*#__PURE__*/function (_HtmlType76) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlPre, _HtmlType76);
  var _super76 = _createSuper(HtmlPre);
  function HtmlPre() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlPre);
    return _super76.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlPre);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlPre, "tagName", 'pre');
var HtmlProgress = /*#__PURE__*/function (_HtmlType77) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlProgress, _HtmlType77);
  var _super77 = _createSuper(HtmlProgress);
  function HtmlProgress() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlProgress);
    return _super77.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlProgress);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlProgress, "tagName", 'progress');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlProgress, "props", {
  max: number('max'),
  value: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType
});
var HtmlQ = /*#__PURE__*/function (_HtmlType78) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlQ, _HtmlType78);
  var _super78 = _createSuper(HtmlQ);
  function HtmlQ() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlQ);
    return _super78.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlQ);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlQ, "tagName", 'q');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlQ, "props", {
  cite: attr('cite')
});
var HtmlRp = /*#__PURE__*/function (_HtmlType79) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlRp, _HtmlType79);
  var _super79 = _createSuper(HtmlRp);
  function HtmlRp() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlRp);
    return _super79.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlRp);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlRp, "tagName", 'rp');
var HtmlRt = /*#__PURE__*/function (_HtmlType80) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlRt, _HtmlType80);
  var _super80 = _createSuper(HtmlRt);
  function HtmlRt() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlRt);
    return _super80.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlRt);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlRt, "tagName", 'rt');
var HtmlRuby = /*#__PURE__*/function (_HtmlType81) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlRuby, _HtmlType81);
  var _super81 = _createSuper(HtmlRuby);
  function HtmlRuby() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlRuby);
    return _super81.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlRuby);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlRuby, "tagName", 'ruby');
var HtmlS = /*#__PURE__*/function (_HtmlType82) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlS, _HtmlType82);
  var _super82 = _createSuper(HtmlS);
  function HtmlS() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlS);
    return _super82.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlS);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlS, "tagName", 's');
var HtmlSamp = /*#__PURE__*/function (_HtmlType83) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlSamp, _HtmlType83);
  var _super83 = _createSuper(HtmlSamp);
  function HtmlSamp() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlSamp);
    return _super83.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlSamp);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlSamp, "tagName", 'samp');
var HtmlScript = /*#__PURE__*/function (_HtmlType84) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlScript, _HtmlType84);
  var _super84 = _createSuper(HtmlScript);
  function HtmlScript() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlScript);
    return _super84.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlScript);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlScript, "tagName", 'script');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlScript, "props", {
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
});
var HtmlSection = /*#__PURE__*/function (_HtmlType85) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlSection, _HtmlType85);
  var _super85 = _createSuper(HtmlSection);
  function HtmlSection() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlSection);
    return _super85.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlSection);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlSection, "tagName", 'section');
var HtmlSelect = /*#__PURE__*/function (_HtmlType86) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlSelect, _HtmlType86);
  var _super86 = _createSuper(HtmlSelect);
  function HtmlSelect() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlSelect);
    return _super86.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlSelect);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlSelect, "tagName", 'select');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlSelect, "props", {
  autocomplete: attr('autocomplete'),
  disabled: _boolean('disabled'),
  multiple: _boolean('multiple'),
  name: attr('name'),
  required: _boolean('required'),
  selectedIndex: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  size: number('size'),
  value: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType
});
var HtmlSmall = /*#__PURE__*/function (_HtmlType87) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlSmall, _HtmlType87);
  var _super87 = _createSuper(HtmlSmall);
  function HtmlSmall() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlSmall);
    return _super87.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlSmall);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlSmall, "tagName", 'small');
var HtmlSource = /*#__PURE__*/function (_HtmlType88) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlSource, _HtmlType88);
  var _super88 = _createSuper(HtmlSource);
  function HtmlSource() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlSource);
    return _super88.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlSource);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlSource, "tagName", 'source');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlSource, "props", {
  height: number('height'),
  media: attr('media'),
  sizes: attr('sizes'),
  src: attr('src'),
  srcset: attr('srcset'),
  type: attr('type'),
  width: number('width')
});
var HtmlSpan = /*#__PURE__*/function (_HtmlType89) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlSpan, _HtmlType89);
  var _super89 = _createSuper(HtmlSpan);
  function HtmlSpan() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlSpan);
    return _super89.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlSpan);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlSpan, "tagName", 'span');
var HtmlStrong = /*#__PURE__*/function (_HtmlType90) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlStrong, _HtmlType90);
  var _super90 = _createSuper(HtmlStrong);
  function HtmlStrong() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlStrong);
    return _super90.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlStrong);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlStrong, "tagName", 'strong');
var HtmlStyle = /*#__PURE__*/function (_HtmlType91) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlStyle, _HtmlType91);
  var _super91 = _createSuper(HtmlStyle);
  function HtmlStyle() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlStyle);
    return _super91.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlStyle);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlStyle, "tagName", 'style');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlStyle, "props", {
  media: attr('media'),
  nonce: attr('nonce'),
  type: attr('type')
});
var HtmlSub = /*#__PURE__*/function (_HtmlType92) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlSub, _HtmlType92);
  var _super92 = _createSuper(HtmlSub);
  function HtmlSub() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlSub);
    return _super92.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlSub);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlSub, "tagName", 'sub');
var HtmlSummary = /*#__PURE__*/function (_HtmlType93) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlSummary, _HtmlType93);
  var _super93 = _createSuper(HtmlSummary);
  function HtmlSummary() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlSummary);
    return _super93.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlSummary);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlSummary, "tagName", 'summary');
var HtmlSup = /*#__PURE__*/function (_HtmlType94) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlSup, _HtmlType94);
  var _super94 = _createSuper(HtmlSup);
  function HtmlSup() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlSup);
    return _super94.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlSup);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlSup, "tagName", 'sup');
var HtmlTBody = /*#__PURE__*/function (_HtmlType95) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlTBody, _HtmlType95);
  var _super95 = _createSuper(HtmlTBody);
  function HtmlTBody() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlTBody);
    return _super95.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlTBody);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlTBody, "tagName", 'tbody');
var HtmlTFoot = /*#__PURE__*/function (_HtmlType96) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlTFoot, _HtmlType96);
  var _super96 = _createSuper(HtmlTFoot);
  function HtmlTFoot() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlTFoot);
    return _super96.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlTFoot);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlTFoot, "tagName", 'tfoot');
var HtmlTHead = /*#__PURE__*/function (_HtmlType97) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlTHead, _HtmlType97);
  var _super97 = _createSuper(HtmlTHead);
  function HtmlTHead() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlTHead);
    return _super97.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlTHead);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlTHead, "tagName", 'thead');
var HtmlTable = /*#__PURE__*/function (_HtmlType98) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlTable, _HtmlType98);
  var _super98 = _createSuper(HtmlTable);
  function HtmlTable() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlTable);
    return _super98.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlTable);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlTable, "tagName", 'table');
var HtmlTd = /*#__PURE__*/function (_HtmlType99) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlTd, _HtmlType99);
  var _super99 = _createSuper(HtmlTd);
  function HtmlTd() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlTd);
    return _super99.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlTd);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlTd, "tagName", 'td');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlTd, "props", {
  colSpan: number('colspan'),
  headers: attr('headers'),
  rowSpan: number('rowspan')
});
var HtmlTemplate = /*#__PURE__*/function (_HtmlType100) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlTemplate, _HtmlType100);
  var _super100 = _createSuper(HtmlTemplate);
  function HtmlTemplate() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlTemplate);
    return _super100.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlTemplate);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlTemplate, "tagName", 'template');
var HtmlTextArea = /*#__PURE__*/function (_HtmlType101) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlTextArea, _HtmlType101);
  var _super101 = _createSuper(HtmlTextArea);
  function HtmlTextArea() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlTextArea);
    return _super101.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlTextArea);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlTextArea, "tagName", 'textarea');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlTextArea, "props", {
  autocomplete: attr('autocomplete'),
  cols: number('cols'),
  defaultValue: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
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
  selectionDirection: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  selectionEnd: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  selectionStart: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  step: attr('step'),
  value: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  wrap: attr('wrap')
});
var HtmlTh = /*#__PURE__*/function (_HtmlType102) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlTh, _HtmlType102);
  var _super102 = _createSuper(HtmlTh);
  function HtmlTh() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlTh);
    return _super102.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlTh);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlTh, "tagName", 'th');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlTh, "props", {
  abbr: attr('abbr'),
  colSpan: number('colspan'),
  headers: attr('headers'),
  rowSpan: number('rowspan'),
  scope: attr('scope')
});
var HtmlTime = /*#__PURE__*/function (_HtmlType103) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlTime, _HtmlType103);
  var _super103 = _createSuper(HtmlTime);
  function HtmlTime() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlTime);
    return _super103.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlTime);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlTime, "tagName", 'time');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlTime, "props", {
  dateTime: attr('datetime')
});
var HtmlTitle = /*#__PURE__*/function (_HtmlType104) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlTitle, _HtmlType104);
  var _super104 = _createSuper(HtmlTitle);
  function HtmlTitle() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlTitle);
    return _super104.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlTitle);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlTitle, "tagName", 'title');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlTitle, "props", {
  text: attr('text')
});
var HtmlTr = /*#__PURE__*/function (_HtmlType105) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlTr, _HtmlType105);
  var _super105 = _createSuper(HtmlTr);
  function HtmlTr() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlTr);
    return _super105.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlTr);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlTr, "tagName", 'tr');
var HtmlTrack = /*#__PURE__*/function (_HtmlType106) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlTrack, _HtmlType106);
  var _super106 = _createSuper(HtmlTrack);
  function HtmlTrack() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlTrack);
    return _super106.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlTrack);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlTrack, "tagName", 'track');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlTrack, "props", {
  "default": _boolean('default'),
  kind: attr('kind'),
  label: attr('label'),
  src: attr('src'),
  srclang: attr('srclang')
});
var HtmlU = /*#__PURE__*/function (_HtmlType107) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlU, _HtmlType107);
  var _super107 = _createSuper(HtmlU);
  function HtmlU() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlU);
    return _super107.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlU);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlU, "tagName", 'u');
var HtmlUl = /*#__PURE__*/function (_HtmlType108) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlUl, _HtmlType108);
  var _super108 = _createSuper(HtmlUl);
  function HtmlUl() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlUl);
    return _super108.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlUl);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlUl, "tagName", 'ul');
var HtmlVar = /*#__PURE__*/function (_HtmlType109) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlVar, _HtmlType109);
  var _super109 = _createSuper(HtmlVar);
  function HtmlVar() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlVar);
    return _super109.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlVar);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlVar, "tagName", 'var');
var HtmlVideo = /*#__PURE__*/function (_HtmlType110) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlVideo, _HtmlType110);
  var _super110 = _createSuper(HtmlVideo);
  function HtmlVideo() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlVideo);
    return _super110.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlVideo);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlVideo, "tagName", 'video');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlVideo, "props", {
  autoplay: _boolean('autoplay'),
  controls: _boolean('controls'),
  crossOrigin: attr('crossorigin'),
  currentTime: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  defaultMuted: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  defaultPlaybackRate: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  height: number('height'),
  loop: _boolean('loop'),
  muted: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  playbackRate: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  playsinline: _boolean('playsInline'),
  poster: attr('poster'),
  preload: attr('preload'),
  src: attr('src'),
  srcObject: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  volume: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
  width: number('width')
});
var HtmlWbr = /*#__PURE__*/function (_HtmlType111) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlWbr, _HtmlType111);
  var _super111 = _createSuper(HtmlWbr);
  function HtmlWbr() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlWbr);
    return _super111.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlWbr);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlWbr, "tagName", 'wbr');

/***/ }),
/* 46 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HtmlType": () => (/* binding */ HtmlType)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _BooleanType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var _ElemType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17);
/* harmony import */ var _RoleType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11);






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




/**
 * @abstract
 */
var HtmlType = /*#__PURE__*/function (_ElemType) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HtmlType, _ElemType);
  var _super = _createSuper(HtmlType);
  function HtmlType() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlType);
    return _super.apply(this, arguments);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlType);
}(_ElemType_js__WEBPACK_IMPORTED_MODULE_7__.ElemType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlType, "props", _objectSpread(_objectSpread({}, _RoleType_js__WEBPACK_IMPORTED_MODULE_8__.RoleType.props), {}, {
  hidden: _BooleanType_js__WEBPACK_IMPORTED_MODULE_6__.BooleanType.define('hidden')
}));

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AriaType": () => (/* reexport safe */ _lib_AriaType_js__WEBPACK_IMPORTED_MODULE_1__.AriaType),
/* harmony export */   "AttrType": () => (/* reexport safe */ _lib_AttrType_js__WEBPACK_IMPORTED_MODULE_2__.AttrType),
/* harmony export */   "Attributes": () => (/* reexport safe */ _lib_Attributes_js__WEBPACK_IMPORTED_MODULE_3__.Attributes),
/* harmony export */   "BooleanType": () => (/* reexport safe */ _lib_BooleanType_js__WEBPACK_IMPORTED_MODULE_4__.BooleanType),
/* harmony export */   "Class": () => (/* reexport safe */ _lib_Class_js__WEBPACK_IMPORTED_MODULE_5__.Class),
/* harmony export */   "ClassList": () => (/* reexport safe */ _lib_ClassList_js__WEBPACK_IMPORTED_MODULE_6__.ClassList),
/* harmony export */   "Context": () => (/* reexport safe */ _lib_Context_js__WEBPACK_IMPORTED_MODULE_7__.Context),
/* harmony export */   "Dataset": () => (/* reexport safe */ _lib_Dataset_js__WEBPACK_IMPORTED_MODULE_8__.Dataset),
/* harmony export */   "ElemType": () => (/* reexport safe */ _lib_ElemType_js__WEBPACK_IMPORTED_MODULE_9__.ElemType),
/* harmony export */   "EventType": () => (/* reexport safe */ _lib_EventType_js__WEBPACK_IMPORTED_MODULE_10__.EventType),
/* harmony export */   "HtmlA": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlA),
/* harmony export */   "HtmlAbbr": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlAbbr),
/* harmony export */   "HtmlAddress": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlAddress),
/* harmony export */   "HtmlArea": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlArea),
/* harmony export */   "HtmlArticle": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlArticle),
/* harmony export */   "HtmlAside": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlAside),
/* harmony export */   "HtmlAudio": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlAudio),
/* harmony export */   "HtmlB": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlB),
/* harmony export */   "HtmlBase": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlBase),
/* harmony export */   "HtmlBdi": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlBdi),
/* harmony export */   "HtmlBdo": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlBdo),
/* harmony export */   "HtmlBlockQuote": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlBlockQuote),
/* harmony export */   "HtmlBody": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlBody),
/* harmony export */   "HtmlBr": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlBr),
/* harmony export */   "HtmlButton": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlButton),
/* harmony export */   "HtmlCanvas": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlCanvas),
/* harmony export */   "HtmlCaption": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlCaption),
/* harmony export */   "HtmlCite": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlCite),
/* harmony export */   "HtmlCode": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlCode),
/* harmony export */   "HtmlCol": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlCol),
/* harmony export */   "HtmlColGroup": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlColGroup),
/* harmony export */   "HtmlData": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlData),
/* harmony export */   "HtmlDataList": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlDataList),
/* harmony export */   "HtmlDd": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlDd),
/* harmony export */   "HtmlDel": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlDel),
/* harmony export */   "HtmlDetails": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlDetails),
/* harmony export */   "HtmlDfn": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlDfn),
/* harmony export */   "HtmlDialog": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlDialog),
/* harmony export */   "HtmlDiv": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlDiv),
/* harmony export */   "HtmlDl": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlDl),
/* harmony export */   "HtmlDt": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlDt),
/* harmony export */   "HtmlEm": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlEm),
/* harmony export */   "HtmlEmbed": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlEmbed),
/* harmony export */   "HtmlFieldSet": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlFieldSet),
/* harmony export */   "HtmlFigCaption": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlFigCaption),
/* harmony export */   "HtmlFigure": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlFigure),
/* harmony export */   "HtmlFooter": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlFooter),
/* harmony export */   "HtmlForm": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlForm),
/* harmony export */   "HtmlH1": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlH1),
/* harmony export */   "HtmlH2": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlH2),
/* harmony export */   "HtmlH3": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlH3),
/* harmony export */   "HtmlH4": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlH4),
/* harmony export */   "HtmlH5": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlH5),
/* harmony export */   "HtmlH6": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlH6),
/* harmony export */   "HtmlHGroup": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlHGroup),
/* harmony export */   "HtmlHead": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlHead),
/* harmony export */   "HtmlHeader": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlHeader),
/* harmony export */   "HtmlHr": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlHr),
/* harmony export */   "HtmlHtml": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlHtml),
/* harmony export */   "HtmlI": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlI),
/* harmony export */   "HtmlIFrame": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlIFrame),
/* harmony export */   "HtmlImg": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlImg),
/* harmony export */   "HtmlInput": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlInput),
/* harmony export */   "HtmlIns": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlIns),
/* harmony export */   "HtmlKbd": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlKbd),
/* harmony export */   "HtmlLabel": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlLabel),
/* harmony export */   "HtmlLegend": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlLegend),
/* harmony export */   "HtmlLi": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlLi),
/* harmony export */   "HtmlLink": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlLink),
/* harmony export */   "HtmlMain": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlMain),
/* harmony export */   "HtmlMap": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlMap),
/* harmony export */   "HtmlMark": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlMark),
/* harmony export */   "HtmlMenu": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlMenu),
/* harmony export */   "HtmlMeta": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlMeta),
/* harmony export */   "HtmlMeter": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlMeter),
/* harmony export */   "HtmlNav": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlNav),
/* harmony export */   "HtmlNoScript": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlNoScript),
/* harmony export */   "HtmlObject": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlObject),
/* harmony export */   "HtmlOl": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlOl),
/* harmony export */   "HtmlOptGroup": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlOptGroup),
/* harmony export */   "HtmlOption": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlOption),
/* harmony export */   "HtmlOutput": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlOutput),
/* harmony export */   "HtmlP": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlP),
/* harmony export */   "HtmlParam": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlParam),
/* harmony export */   "HtmlPicture": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlPicture),
/* harmony export */   "HtmlPre": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlPre),
/* harmony export */   "HtmlProgress": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlProgress),
/* harmony export */   "HtmlQ": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlQ),
/* harmony export */   "HtmlRp": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlRp),
/* harmony export */   "HtmlRt": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlRt),
/* harmony export */   "HtmlRuby": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlRuby),
/* harmony export */   "HtmlS": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlS),
/* harmony export */   "HtmlSamp": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlSamp),
/* harmony export */   "HtmlScript": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlScript),
/* harmony export */   "HtmlSection": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlSection),
/* harmony export */   "HtmlSelect": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlSelect),
/* harmony export */   "HtmlSmall": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlSmall),
/* harmony export */   "HtmlSource": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlSource),
/* harmony export */   "HtmlSpan": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlSpan),
/* harmony export */   "HtmlStrong": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlStrong),
/* harmony export */   "HtmlStyle": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlStyle),
/* harmony export */   "HtmlSub": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlSub),
/* harmony export */   "HtmlSummary": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlSummary),
/* harmony export */   "HtmlSup": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlSup),
/* harmony export */   "HtmlTBody": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlTBody),
/* harmony export */   "HtmlTFoot": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlTFoot),
/* harmony export */   "HtmlTHead": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlTHead),
/* harmony export */   "HtmlTable": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlTable),
/* harmony export */   "HtmlTd": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlTd),
/* harmony export */   "HtmlTemplate": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlTemplate),
/* harmony export */   "HtmlTextArea": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlTextArea),
/* harmony export */   "HtmlTh": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlTh),
/* harmony export */   "HtmlTime": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlTime),
/* harmony export */   "HtmlTitle": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlTitle),
/* harmony export */   "HtmlTr": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlTr),
/* harmony export */   "HtmlTrack": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlTrack),
/* harmony export */   "HtmlType": () => (/* reexport safe */ _lib_HtmlType_js__WEBPACK_IMPORTED_MODULE_12__.HtmlType),
/* harmony export */   "HtmlU": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlU),
/* harmony export */   "HtmlUl": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlUl),
/* harmony export */   "HtmlVar": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlVar),
/* harmony export */   "HtmlVideo": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlVideo),
/* harmony export */   "HtmlWbr": () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlWbr),
/* harmony export */   "Id": () => (/* reexport safe */ _lib_Id_js__WEBPACK_IMPORTED_MODULE_13__.Id),
/* harmony export */   "InnerHTML": () => (/* reexport safe */ _lib_InnerHTML_js__WEBPACK_IMPORTED_MODULE_14__.InnerHTML),
/* harmony export */   "InnerText": () => (/* reexport safe */ _lib_InnerText_js__WEBPACK_IMPORTED_MODULE_15__.InnerText),
/* harmony export */   "NumberType": () => (/* reexport safe */ _lib_NumberType_js__WEBPACK_IMPORTED_MODULE_16__.NumberType),
/* harmony export */   "PropType": () => (/* reexport safe */ _lib_PropType_js__WEBPACK_IMPORTED_MODULE_17__.PropType),
/* harmony export */   "RoleAlert": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleAlert),
/* harmony export */   "RoleAlertDialog": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleAlertDialog),
/* harmony export */   "RoleApplication": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleApplication),
/* harmony export */   "RoleArticle": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleArticle),
/* harmony export */   "RoleBanner": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleBanner),
/* harmony export */   "RoleBlockQuote": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleBlockQuote),
/* harmony export */   "RoleButton": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleButton),
/* harmony export */   "RoleCaption": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleCaption),
/* harmony export */   "RoleCell": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleCell),
/* harmony export */   "RoleCheckBox": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleCheckBox),
/* harmony export */   "RoleCode": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleCode),
/* harmony export */   "RoleColumnHeader": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleColumnHeader),
/* harmony export */   "RoleComboBox": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleComboBox),
/* harmony export */   "RoleComplementary": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleComplementary),
/* harmony export */   "RoleContentInfo": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleContentInfo),
/* harmony export */   "RoleDefinition": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleDefinition),
/* harmony export */   "RoleDeletion": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleDeletion),
/* harmony export */   "RoleDialog": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleDialog),
/* harmony export */   "RoleDirectory": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleDirectory),
/* harmony export */   "RoleDocument": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleDocument),
/* harmony export */   "RoleEmphasis": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleEmphasis),
/* harmony export */   "RoleFeed": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleFeed),
/* harmony export */   "RoleFigure": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleFigure),
/* harmony export */   "RoleForm": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleForm),
/* harmony export */   "RoleGeneric": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleGeneric),
/* harmony export */   "RoleGrid": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleGrid),
/* harmony export */   "RoleGridCell": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleGridCell),
/* harmony export */   "RoleGroup": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleGroup),
/* harmony export */   "RoleHeading": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleHeading),
/* harmony export */   "RoleImg": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleImg),
/* harmony export */   "RoleInsertion": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleInsertion),
/* harmony export */   "RoleLink": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleLink),
/* harmony export */   "RoleList": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleList),
/* harmony export */   "RoleListBox": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleListBox),
/* harmony export */   "RoleListItem": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleListItem),
/* harmony export */   "RoleLog": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleLog),
/* harmony export */   "RoleMain": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleMain),
/* harmony export */   "RoleMarquee": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleMarquee),
/* harmony export */   "RoleMath": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleMath),
/* harmony export */   "RoleMenu": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleMenu),
/* harmony export */   "RoleMenuBar": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleMenuBar),
/* harmony export */   "RoleMenuItem": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleMenuItem),
/* harmony export */   "RoleMenuItemCheckBox": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleMenuItemCheckBox),
/* harmony export */   "RoleMenuItemRadio": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleMenuItemRadio),
/* harmony export */   "RoleMeter": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleMeter),
/* harmony export */   "RoleNavigation": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleNavigation),
/* harmony export */   "RoleNone": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleNone),
/* harmony export */   "RoleNote": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleNote),
/* harmony export */   "RoleOption": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleOption),
/* harmony export */   "RoleParagraph": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleParagraph),
/* harmony export */   "RolePresentation": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RolePresentation),
/* harmony export */   "RoleProgressBar": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleProgressBar),
/* harmony export */   "RoleRadio": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleRadio),
/* harmony export */   "RoleRadioGroup": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleRadioGroup),
/* harmony export */   "RoleRegion": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleRegion),
/* harmony export */   "RoleRow": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleRow),
/* harmony export */   "RoleRowGroup": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleRowGroup),
/* harmony export */   "RoleRowHeader": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleRowHeader),
/* harmony export */   "RoleScrollBar": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleScrollBar),
/* harmony export */   "RoleSearch": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleSearch),
/* harmony export */   "RoleSearchBox": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleSearchBox),
/* harmony export */   "RoleSectionHead": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleSectionHead),
/* harmony export */   "RoleSeparator": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleSeparator),
/* harmony export */   "RoleSlider": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleSlider),
/* harmony export */   "RoleSpinButton": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleSpinButton),
/* harmony export */   "RoleStatus": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleStatus),
/* harmony export */   "RoleStrong": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleStrong),
/* harmony export */   "RoleSubscript": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleSubscript),
/* harmony export */   "RoleSuperscript": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleSuperscript),
/* harmony export */   "RoleSwitch": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleSwitch),
/* harmony export */   "RoleTab": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleTab),
/* harmony export */   "RoleTabList": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleTabList),
/* harmony export */   "RoleTabPanel": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleTabPanel),
/* harmony export */   "RoleTable": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleTable),
/* harmony export */   "RoleTerm": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleTerm),
/* harmony export */   "RoleTextBox": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleTextBox),
/* harmony export */   "RoleTime": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleTime),
/* harmony export */   "RoleTimer": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleTimer),
/* harmony export */   "RoleToolBar": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleToolBar),
/* harmony export */   "RoleToolTip": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleToolTip),
/* harmony export */   "RoleTree": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleTree),
/* harmony export */   "RoleTreeGrid": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleTreeGrid),
/* harmony export */   "RoleTreeItem": () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleTreeItem),
/* harmony export */   "RoleType": () => (/* reexport safe */ _lib_RoleType_js__WEBPACK_IMPORTED_MODULE_18__.RoleType),
/* harmony export */   "Style": () => (/* reexport safe */ _lib_Style_js__WEBPACK_IMPORTED_MODULE_19__.Style),
/* harmony export */   "TextType": () => (/* reexport safe */ _lib_TextType_js__WEBPACK_IMPORTED_MODULE_20__.TextType),
/* harmony export */   "TokenType": () => (/* reexport safe */ _lib_TokenType_js__WEBPACK_IMPORTED_MODULE_21__.TokenType)
/* harmony export */ });
/* harmony import */ var _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _lib_AriaType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var _lib_AttrType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _lib_Attributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);
/* harmony import */ var _lib_BooleanType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _lib_Class_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33);
/* harmony import */ var _lib_ClassList_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34);
/* harmony import */ var _lib_Context_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42);
/* harmony import */ var _lib_Dataset_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35);
/* harmony import */ var _lib_ElemType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17);
/* harmony import */ var _lib_EventType_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(36);
/* harmony import */ var _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(45);
/* harmony import */ var _lib_HtmlType_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(46);
/* harmony import */ var _lib_Id_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(37);
/* harmony import */ var _lib_InnerHTML_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(38);
/* harmony import */ var _lib_InnerText_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(41);
/* harmony import */ var _lib_NumberType_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(16);
/* harmony import */ var _lib_PropType_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(32);
/* harmony import */ var _lib_RoleType_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(11);
/* harmony import */ var _lib_Style_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(39);
/* harmony import */ var _lib_TextType_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(40);
/* harmony import */ var _lib_TokenType_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(30);
/**
 * @module htmlmodule
 * @author Vyacheslav Aristov <vv.aristov@gmail.com>
 */






















})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});