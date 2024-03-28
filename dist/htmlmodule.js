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
/* harmony export */   RoleAlert: () => (/* binding */ RoleAlert),
/* harmony export */   RoleAlertDialog: () => (/* binding */ RoleAlertDialog),
/* harmony export */   RoleApplication: () => (/* binding */ RoleApplication),
/* harmony export */   RoleArticle: () => (/* binding */ RoleArticle),
/* harmony export */   RoleBanner: () => (/* binding */ RoleBanner),
/* harmony export */   RoleBlockQuote: () => (/* binding */ RoleBlockQuote),
/* harmony export */   RoleButton: () => (/* binding */ RoleButton),
/* harmony export */   RoleCaption: () => (/* binding */ RoleCaption),
/* harmony export */   RoleCell: () => (/* binding */ RoleCell),
/* harmony export */   RoleCheckBox: () => (/* binding */ RoleCheckBox),
/* harmony export */   RoleCode: () => (/* binding */ RoleCode),
/* harmony export */   RoleColumnHeader: () => (/* binding */ RoleColumnHeader),
/* harmony export */   RoleComboBox: () => (/* binding */ RoleComboBox),
/* harmony export */   RoleComplementary: () => (/* binding */ RoleComplementary),
/* harmony export */   RoleContentInfo: () => (/* binding */ RoleContentInfo),
/* harmony export */   RoleDefinition: () => (/* binding */ RoleDefinition),
/* harmony export */   RoleDeletion: () => (/* binding */ RoleDeletion),
/* harmony export */   RoleDialog: () => (/* binding */ RoleDialog),
/* harmony export */   RoleDirectory: () => (/* binding */ RoleDirectory),
/* harmony export */   RoleDocument: () => (/* binding */ RoleDocument),
/* harmony export */   RoleEmphasis: () => (/* binding */ RoleEmphasis),
/* harmony export */   RoleFeed: () => (/* binding */ RoleFeed),
/* harmony export */   RoleFigure: () => (/* binding */ RoleFigure),
/* harmony export */   RoleForm: () => (/* binding */ RoleForm),
/* harmony export */   RoleGeneric: () => (/* binding */ RoleGeneric),
/* harmony export */   RoleGrid: () => (/* binding */ RoleGrid),
/* harmony export */   RoleGridCell: () => (/* binding */ RoleGridCell),
/* harmony export */   RoleGroup: () => (/* binding */ RoleGroup),
/* harmony export */   RoleHeading: () => (/* binding */ RoleHeading),
/* harmony export */   RoleImg: () => (/* binding */ RoleImg),
/* harmony export */   RoleInsertion: () => (/* binding */ RoleInsertion),
/* harmony export */   RoleLink: () => (/* binding */ RoleLink),
/* harmony export */   RoleList: () => (/* binding */ RoleList),
/* harmony export */   RoleListBox: () => (/* binding */ RoleListBox),
/* harmony export */   RoleListItem: () => (/* binding */ RoleListItem),
/* harmony export */   RoleLog: () => (/* binding */ RoleLog),
/* harmony export */   RoleMain: () => (/* binding */ RoleMain),
/* harmony export */   RoleMarquee: () => (/* binding */ RoleMarquee),
/* harmony export */   RoleMath: () => (/* binding */ RoleMath),
/* harmony export */   RoleMenu: () => (/* binding */ RoleMenu),
/* harmony export */   RoleMenuBar: () => (/* binding */ RoleMenuBar),
/* harmony export */   RoleMenuItem: () => (/* binding */ RoleMenuItem),
/* harmony export */   RoleMenuItemCheckBox: () => (/* binding */ RoleMenuItemCheckBox),
/* harmony export */   RoleMenuItemRadio: () => (/* binding */ RoleMenuItemRadio),
/* harmony export */   RoleMeter: () => (/* binding */ RoleMeter),
/* harmony export */   RoleNavigation: () => (/* binding */ RoleNavigation),
/* harmony export */   RoleNone: () => (/* binding */ RoleNone),
/* harmony export */   RoleNote: () => (/* binding */ RoleNote),
/* harmony export */   RoleOption: () => (/* binding */ RoleOption),
/* harmony export */   RoleParagraph: () => (/* binding */ RoleParagraph),
/* harmony export */   RolePresentation: () => (/* binding */ RolePresentation),
/* harmony export */   RoleProgressBar: () => (/* binding */ RoleProgressBar),
/* harmony export */   RoleRadio: () => (/* binding */ RoleRadio),
/* harmony export */   RoleRadioGroup: () => (/* binding */ RoleRadioGroup),
/* harmony export */   RoleRegion: () => (/* binding */ RoleRegion),
/* harmony export */   RoleRow: () => (/* binding */ RoleRow),
/* harmony export */   RoleRowGroup: () => (/* binding */ RoleRowGroup),
/* harmony export */   RoleRowHeader: () => (/* binding */ RoleRowHeader),
/* harmony export */   RoleScrollBar: () => (/* binding */ RoleScrollBar),
/* harmony export */   RoleSearch: () => (/* binding */ RoleSearch),
/* harmony export */   RoleSearchBox: () => (/* binding */ RoleSearchBox),
/* harmony export */   RoleSectionHead: () => (/* binding */ RoleSectionHead),
/* harmony export */   RoleSeparator: () => (/* binding */ RoleSeparator),
/* harmony export */   RoleSlider: () => (/* binding */ RoleSlider),
/* harmony export */   RoleSpinButton: () => (/* binding */ RoleSpinButton),
/* harmony export */   RoleStatus: () => (/* binding */ RoleStatus),
/* harmony export */   RoleStrong: () => (/* binding */ RoleStrong),
/* harmony export */   RoleSubscript: () => (/* binding */ RoleSubscript),
/* harmony export */   RoleSuperscript: () => (/* binding */ RoleSuperscript),
/* harmony export */   RoleSwitch: () => (/* binding */ RoleSwitch),
/* harmony export */   RoleTab: () => (/* binding */ RoleTab),
/* harmony export */   RoleTabList: () => (/* binding */ RoleTabList),
/* harmony export */   RoleTabPanel: () => (/* binding */ RoleTabPanel),
/* harmony export */   RoleTable: () => (/* binding */ RoleTable),
/* harmony export */   RoleTerm: () => (/* binding */ RoleTerm),
/* harmony export */   RoleTextBox: () => (/* binding */ RoleTextBox),
/* harmony export */   RoleTime: () => (/* binding */ RoleTime),
/* harmony export */   RoleTimer: () => (/* binding */ RoleTimer),
/* harmony export */   RoleToolBar: () => (/* binding */ RoleToolBar),
/* harmony export */   RoleToolTip: () => (/* binding */ RoleToolTip),
/* harmony export */   RoleTree: () => (/* binding */ RoleTree),
/* harmony export */   RoleTreeGrid: () => (/* binding */ RoleTreeGrid),
/* harmony export */   RoleTreeItem: () => (/* binding */ RoleTreeItem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var _RoleType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var _BooleanType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15);
/* harmony import */ var _NumberType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18);
/* harmony import */ var _TokenType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32);






function _callSuper(_this, derived, args) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e) {
      return false;
    }
  }
  derived = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(derived);
  return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_this).constructor) : derived.apply(_this, args));
}




var RoleAlert = /*#__PURE__*/function (_RoleType) {
  function RoleAlert() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleAlert);
    return _callSuper(this, RoleAlert, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleAlert, _RoleType);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleAlert);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleAlert, "role", 'alert');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleAlert, "props", {
  live: _TokenType_js__WEBPACK_IMPORTED_MODULE_9__.TokenType.define('aria-live', 'assertive'),
  atomic: _BooleanType_js__WEBPACK_IMPORTED_MODULE_7__.BooleanType.define('aria-atomic', true)
});
var RoleAlertDialog = /*#__PURE__*/function (_RoleType2) {
  function RoleAlertDialog() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleAlertDialog);
    return _callSuper(this, RoleAlertDialog, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleAlertDialog, _RoleType2);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleAlertDialog);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleAlertDialog, "role", 'alertdialog');
var RoleApplication = /*#__PURE__*/function (_RoleType3) {
  function RoleApplication() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleApplication);
    return _callSuper(this, RoleApplication, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleApplication, _RoleType3);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleApplication);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleApplication, "role", 'application');
var RoleArticle = /*#__PURE__*/function (_RoleType4) {
  function RoleArticle() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleArticle);
    return _callSuper(this, RoleArticle, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleArticle, _RoleType4);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleArticle);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleArticle, "role", 'article');
var RoleBanner = /*#__PURE__*/function (_RoleType5) {
  function RoleBanner() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleBanner);
    return _callSuper(this, RoleBanner, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleBanner, _RoleType5);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleBanner);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleBanner, "role", 'banner');
var RoleBlockQuote = /*#__PURE__*/function (_RoleType6) {
  function RoleBlockQuote() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleBlockQuote);
    return _callSuper(this, RoleBlockQuote, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleBlockQuote, _RoleType6);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleBlockQuote);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleBlockQuote, "role", 'blockquote');
var RoleButton = /*#__PURE__*/function (_RoleType7) {
  function RoleButton() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleButton);
    return _callSuper(this, RoleButton, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleButton, _RoleType7);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleButton);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleButton, "role", 'button');
var RoleCaption = /*#__PURE__*/function (_RoleType8) {
  function RoleCaption() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleCaption);
    return _callSuper(this, RoleCaption, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleCaption, _RoleType8);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleCaption);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleCaption, "role", 'caption');
var RoleCell = /*#__PURE__*/function (_RoleType9) {
  function RoleCell() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleCell);
    return _callSuper(this, RoleCell, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleCell, _RoleType9);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleCell);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleCell, "role", 'cell');
var RoleCheckBox = /*#__PURE__*/function (_RoleType10) {
  function RoleCheckBox() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleCheckBox);
    return _callSuper(this, RoleCheckBox, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleCheckBox, _RoleType10);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleCheckBox);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleCheckBox, "role", 'checkbox');
var RoleCode = /*#__PURE__*/function (_RoleType11) {
  function RoleCode() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleCode);
    return _callSuper(this, RoleCode, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleCode, _RoleType11);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleCode);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleCode, "role", 'code');
var RoleColumnHeader = /*#__PURE__*/function (_RoleType12) {
  function RoleColumnHeader() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleColumnHeader);
    return _callSuper(this, RoleColumnHeader, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleColumnHeader, _RoleType12);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleColumnHeader);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleColumnHeader, "role", 'columnheader');
var RoleComboBox = /*#__PURE__*/function (_RoleType13) {
  function RoleComboBox() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleComboBox);
    return _callSuper(this, RoleComboBox, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleComboBox, _RoleType13);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleComboBox);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleComboBox, "role", 'combobox');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleComboBox, "props", {
  hasPopup: _TokenType_js__WEBPACK_IMPORTED_MODULE_9__.TokenType.define('aria-haspopup', 'listbox')
});
var RoleComplementary = /*#__PURE__*/function (_RoleType14) {
  function RoleComplementary() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleComplementary);
    return _callSuper(this, RoleComplementary, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleComplementary, _RoleType14);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleComplementary);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleComplementary, "role", 'complementary');
var RoleContentInfo = /*#__PURE__*/function (_RoleType15) {
  function RoleContentInfo() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleContentInfo);
    return _callSuper(this, RoleContentInfo, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleContentInfo, _RoleType15);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleContentInfo);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleContentInfo, "role", 'contentinfo');
var RoleDefinition = /*#__PURE__*/function (_RoleType16) {
  function RoleDefinition() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleDefinition);
    return _callSuper(this, RoleDefinition, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleDefinition, _RoleType16);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleDefinition);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleDefinition, "role", 'definition');
var RoleDeletion = /*#__PURE__*/function (_RoleType17) {
  function RoleDeletion() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleDeletion);
    return _callSuper(this, RoleDeletion, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleDeletion, _RoleType17);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleDeletion);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleDeletion, "role", 'deletion');
var RoleDialog = /*#__PURE__*/function (_RoleType18) {
  function RoleDialog() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleDialog);
    return _callSuper(this, RoleDialog, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleDialog, _RoleType18);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleDialog);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);

/**
 * @deprecated
 */
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleDialog, "role", 'dialog');
var RoleDirectory = /*#__PURE__*/function (_RoleType19) {
  function RoleDirectory() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleDirectory);
    return _callSuper(this, RoleDirectory, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleDirectory, _RoleType19);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleDirectory);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleDirectory, "role", 'directory');
var RoleDocument = /*#__PURE__*/function (_RoleType20) {
  function RoleDocument() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleDocument);
    return _callSuper(this, RoleDocument, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleDocument, _RoleType20);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleDocument);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleDocument, "role", 'document');
var RoleEmphasis = /*#__PURE__*/function (_RoleType21) {
  function RoleEmphasis() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleEmphasis);
    return _callSuper(this, RoleEmphasis, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleEmphasis, _RoleType21);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleEmphasis);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleEmphasis, "role", 'emphasis');
var RoleFeed = /*#__PURE__*/function (_RoleType22) {
  function RoleFeed() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleFeed);
    return _callSuper(this, RoleFeed, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleFeed, _RoleType22);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleFeed);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleFeed, "role", 'feed');
var RoleFigure = /*#__PURE__*/function (_RoleType23) {
  function RoleFigure() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleFigure);
    return _callSuper(this, RoleFigure, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleFigure, _RoleType23);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleFigure);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleFigure, "role", 'figure');
var RoleForm = /*#__PURE__*/function (_RoleType24) {
  function RoleForm() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleForm);
    return _callSuper(this, RoleForm, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleForm, _RoleType24);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleForm);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleForm, "role", 'form');
var RoleGeneric = /*#__PURE__*/function (_RoleType25) {
  function RoleGeneric() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleGeneric);
    return _callSuper(this, RoleGeneric, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleGeneric, _RoleType25);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleGeneric);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleGeneric, "role", 'generic');
var RoleGrid = /*#__PURE__*/function (_RoleType26) {
  function RoleGrid() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleGrid);
    return _callSuper(this, RoleGrid, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleGrid, _RoleType26);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleGrid);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleGrid, "role", 'grid');
var RoleGridCell = /*#__PURE__*/function (_RoleType27) {
  function RoleGridCell() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleGridCell);
    return _callSuper(this, RoleGridCell, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleGridCell, _RoleType27);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleGridCell);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleGridCell, "role", 'gridcell');
var RoleGroup = /*#__PURE__*/function (_RoleType28) {
  function RoleGroup() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleGroup);
    return _callSuper(this, RoleGroup, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleGroup, _RoleType28);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleGroup);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleGroup, "role", 'group');
var RoleHeading = /*#__PURE__*/function (_RoleType29) {
  function RoleHeading() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleHeading);
    return _callSuper(this, RoleHeading, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleHeading, _RoleType29);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleHeading);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleHeading, "role", 'heading');
var RoleImg = /*#__PURE__*/function (_RoleType30) {
  function RoleImg() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleImg);
    return _callSuper(this, RoleImg, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleImg, _RoleType30);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleImg);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleImg, "role", 'img');
var RoleInsertion = /*#__PURE__*/function (_RoleType31) {
  function RoleInsertion() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleInsertion);
    return _callSuper(this, RoleInsertion, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleInsertion, _RoleType31);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleInsertion);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleInsertion, "role", 'insertion');
var RoleLink = /*#__PURE__*/function (_RoleType32) {
  function RoleLink() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleLink);
    return _callSuper(this, RoleLink, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleLink, _RoleType32);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleLink);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleLink, "role", 'link');
var RoleList = /*#__PURE__*/function (_RoleType33) {
  function RoleList() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleList);
    return _callSuper(this, RoleList, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleList, _RoleType33);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleList);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleList, "role", 'list');
var RoleListBox = /*#__PURE__*/function (_RoleType34) {
  function RoleListBox() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleListBox);
    return _callSuper(this, RoleListBox, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleListBox, _RoleType34);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleListBox);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleListBox, "role", 'listbox');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleListBox, "props", {
  orientation: _TokenType_js__WEBPACK_IMPORTED_MODULE_9__.TokenType.define('aria-orientation', 'vertical')
});
var RoleListItem = /*#__PURE__*/function (_RoleType35) {
  function RoleListItem() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleListItem);
    return _callSuper(this, RoleListItem, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleListItem, _RoleType35);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleListItem);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleListItem, "role", 'listitem');
var RoleLog = /*#__PURE__*/function (_RoleType36) {
  function RoleLog() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleLog);
    return _callSuper(this, RoleLog, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleLog, _RoleType36);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleLog);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleLog, "role", 'log');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleLog, "props", {
  live: _TokenType_js__WEBPACK_IMPORTED_MODULE_9__.TokenType.define('aria-live', 'polite')
});
var RoleMain = /*#__PURE__*/function (_RoleType37) {
  function RoleMain() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleMain);
    return _callSuper(this, RoleMain, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleMain, _RoleType37);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleMain);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleMain, "role", 'main');
var RoleMarquee = /*#__PURE__*/function (_RoleType38) {
  function RoleMarquee() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleMarquee);
    return _callSuper(this, RoleMarquee, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleMarquee, _RoleType38);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleMarquee);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleMarquee, "role", 'marquee');
var RoleMath = /*#__PURE__*/function (_RoleType39) {
  function RoleMath() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleMath);
    return _callSuper(this, RoleMath, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleMath, _RoleType39);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleMath);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleMath, "role", 'math');
var RoleMenu = /*#__PURE__*/function (_RoleType40) {
  function RoleMenu() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleMenu);
    return _callSuper(this, RoleMenu, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleMenu, _RoleType40);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleMenu);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleMenu, "role", 'menu');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleMenu, "props", {
  orientation: _TokenType_js__WEBPACK_IMPORTED_MODULE_9__.TokenType.define('aria-orientation', 'vertical')
});
var RoleMenuBar = /*#__PURE__*/function (_RoleType41) {
  function RoleMenuBar() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleMenuBar);
    return _callSuper(this, RoleMenuBar, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleMenuBar, _RoleType41);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleMenuBar);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleMenuBar, "role", 'menubar');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleMenuBar, "props", {
  orientation: _TokenType_js__WEBPACK_IMPORTED_MODULE_9__.TokenType.define('aria-orientation', 'horizontal')
});
var RoleMenuItem = /*#__PURE__*/function (_RoleType42) {
  function RoleMenuItem() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleMenuItem);
    return _callSuper(this, RoleMenuItem, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleMenuItem, _RoleType42);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleMenuItem);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleMenuItem, "role", 'menuitem');
var RoleMenuItemCheckBox = /*#__PURE__*/function (_RoleType43) {
  function RoleMenuItemCheckBox() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleMenuItemCheckBox);
    return _callSuper(this, RoleMenuItemCheckBox, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleMenuItemCheckBox, _RoleType43);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleMenuItemCheckBox);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleMenuItemCheckBox, "role", 'menuitemcheckbox');
var RoleMenuItemRadio = /*#__PURE__*/function (_RoleType44) {
  function RoleMenuItemRadio() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleMenuItemRadio);
    return _callSuper(this, RoleMenuItemRadio, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleMenuItemRadio, _RoleType44);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleMenuItemRadio);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleMenuItemRadio, "role", 'menuitemradio');
var RoleMeter = /*#__PURE__*/function (_RoleType45) {
  function RoleMeter() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleMeter);
    return _callSuper(this, RoleMeter, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleMeter, _RoleType45);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleMeter);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleMeter, "role", 'meter');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleMeter, "props", {
  valueMin: _NumberType_js__WEBPACK_IMPORTED_MODULE_8__.NumberType.define('aria-valuemin', 0),
  valueMax: _NumberType_js__WEBPACK_IMPORTED_MODULE_8__.NumberType.define('aria-valuemax', 100)
});
var RoleNavigation = /*#__PURE__*/function (_RoleType46) {
  function RoleNavigation() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleNavigation);
    return _callSuper(this, RoleNavigation, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleNavigation, _RoleType46);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleNavigation);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleNavigation, "role", 'navigation');
var RoleNone = /*#__PURE__*/function (_RoleType47) {
  function RoleNone() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleNone);
    return _callSuper(this, RoleNone, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleNone, _RoleType47);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleNone);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleNone, "role", 'none');
var RoleNote = /*#__PURE__*/function (_RoleType48) {
  function RoleNote() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleNote);
    return _callSuper(this, RoleNote, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleNote, _RoleType48);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleNote);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleNote, "role", 'note');
var RoleOption = /*#__PURE__*/function (_RoleType49) {
  function RoleOption() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleOption);
    return _callSuper(this, RoleOption, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleOption, _RoleType49);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleOption);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleOption, "role", 'option');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleOption, "props", {
  selected: _TokenType_js__WEBPACK_IMPORTED_MODULE_9__.TokenType.define('aria-selected', false)
});
var RoleParagraph = /*#__PURE__*/function (_RoleType50) {
  function RoleParagraph() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleParagraph);
    return _callSuper(this, RoleParagraph, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleParagraph, _RoleType50);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleParagraph);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleParagraph, "role", 'paragraph');
var RolePresentation = /*#__PURE__*/function (_RoleType51) {
  function RolePresentation() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RolePresentation);
    return _callSuper(this, RolePresentation, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RolePresentation, _RoleType51);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RolePresentation);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RolePresentation, "role", 'presentation');
var RoleProgressBar = /*#__PURE__*/function (_RoleType52) {
  function RoleProgressBar() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleProgressBar);
    return _callSuper(this, RoleProgressBar, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleProgressBar, _RoleType52);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleProgressBar);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleProgressBar, "role", 'progressbar');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleProgressBar, "props", {
  valueMin: _NumberType_js__WEBPACK_IMPORTED_MODULE_8__.NumberType.define('aria-valuemin', 0),
  valueMax: _NumberType_js__WEBPACK_IMPORTED_MODULE_8__.NumberType.define('aria-valuemax', 100)
});
var RoleRadio = /*#__PURE__*/function (_RoleType53) {
  function RoleRadio() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleRadio);
    return _callSuper(this, RoleRadio, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleRadio, _RoleType53);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleRadio);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleRadio, "role", 'radio');
var RoleRadioGroup = /*#__PURE__*/function (_RoleType54) {
  function RoleRadioGroup() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleRadioGroup);
    return _callSuper(this, RoleRadioGroup, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleRadioGroup, _RoleType54);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleRadioGroup);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleRadioGroup, "role", 'radiogroup');
var RoleRegion = /*#__PURE__*/function (_RoleType55) {
  function RoleRegion() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleRegion);
    return _callSuper(this, RoleRegion, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleRegion, _RoleType55);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleRegion);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleRegion, "role", 'region');
var RoleRow = /*#__PURE__*/function (_RoleType56) {
  function RoleRow() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleRow);
    return _callSuper(this, RoleRow, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleRow, _RoleType56);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleRow);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleRow, "role", 'row');
var RoleRowGroup = /*#__PURE__*/function (_RoleType57) {
  function RoleRowGroup() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleRowGroup);
    return _callSuper(this, RoleRowGroup, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleRowGroup, _RoleType57);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleRowGroup);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleRowGroup, "role", 'rowgroup');
var RoleRowHeader = /*#__PURE__*/function (_RoleType58) {
  function RoleRowHeader() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleRowHeader);
    return _callSuper(this, RoleRowHeader, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleRowHeader, _RoleType58);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleRowHeader);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleRowHeader, "role", 'rowheader');
var RoleScrollBar = /*#__PURE__*/function (_RoleType59) {
  function RoleScrollBar() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleScrollBar);
    return _callSuper(this, RoleScrollBar, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleScrollBar, _RoleType59);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleScrollBar);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleScrollBar, "role", 'scrollbar');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleScrollBar, "props", {
  orientation: _TokenType_js__WEBPACK_IMPORTED_MODULE_9__.TokenType.define('aria-orientation', 'vertical'),
  valueMin: _NumberType_js__WEBPACK_IMPORTED_MODULE_8__.NumberType.define('aria-valuemin', 0),
  valueMax: _NumberType_js__WEBPACK_IMPORTED_MODULE_8__.NumberType.define('aria-valuemax', 100)
});
var RoleSearch = /*#__PURE__*/function (_RoleType60) {
  function RoleSearch() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleSearch);
    return _callSuper(this, RoleSearch, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleSearch, _RoleType60);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleSearch);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleSearch, "role", 'search');
var RoleSearchBox = /*#__PURE__*/function (_RoleType61) {
  function RoleSearchBox() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleSearchBox);
    return _callSuper(this, RoleSearchBox, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleSearchBox, _RoleType61);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleSearchBox);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleSearchBox, "role", 'searchbox');
var RoleSectionHead = /*#__PURE__*/function (_RoleType62) {
  function RoleSectionHead() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleSectionHead);
    return _callSuper(this, RoleSectionHead, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleSectionHead, _RoleType62);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleSectionHead);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleSectionHead, "role", 'sectionhead');
var RoleSeparator = /*#__PURE__*/function (_RoleType63) {
  function RoleSeparator() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleSeparator);
    return _callSuper(this, RoleSeparator, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleSeparator, _RoleType63);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleSeparator);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleSeparator, "role", 'separator');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleSeparator, "props", {
  orientation: _TokenType_js__WEBPACK_IMPORTED_MODULE_9__.TokenType.define('aria-orientation', 'horizontal'),
  valueMin: _NumberType_js__WEBPACK_IMPORTED_MODULE_8__.NumberType.define('aria-valuemin', 0),
  valueMax: _NumberType_js__WEBPACK_IMPORTED_MODULE_8__.NumberType.define('aria-valuemax', 100)
});
var RoleSlider = /*#__PURE__*/function (_RoleType64) {
  function RoleSlider() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleSlider);
    return _callSuper(this, RoleSlider, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleSlider, _RoleType64);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleSlider);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleSlider, "role", 'slider');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleSlider, "props", {
  orientation: _TokenType_js__WEBPACK_IMPORTED_MODULE_9__.TokenType.define('aria-orientation', 'horizontal'),
  valueMin: _NumberType_js__WEBPACK_IMPORTED_MODULE_8__.NumberType.define('aria-valuemin', 0),
  valueMax: _NumberType_js__WEBPACK_IMPORTED_MODULE_8__.NumberType.define('aria-valuemax', 100)
});
var RoleSpinButton = /*#__PURE__*/function (_RoleType65) {
  function RoleSpinButton() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleSpinButton);
    return _callSuper(this, RoleSpinButton, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleSpinButton, _RoleType65);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleSpinButton);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleSpinButton, "role", 'spinbutton');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleSpinButton, "props", {
  valueMin: _NumberType_js__WEBPACK_IMPORTED_MODULE_8__.NumberType.define('aria-valuemin', -Infinity),
  valueMax: _NumberType_js__WEBPACK_IMPORTED_MODULE_8__.NumberType.define('aria-valuemax', Infinity),
  valueNow: _NumberType_js__WEBPACK_IMPORTED_MODULE_8__.NumberType.define('aria-valuenow', 0)
});
var RoleStatus = /*#__PURE__*/function (_RoleType66) {
  function RoleStatus() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleStatus);
    return _callSuper(this, RoleStatus, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleStatus, _RoleType66);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleStatus);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleStatus, "role", 'status');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleStatus, "props", {
  live: _TokenType_js__WEBPACK_IMPORTED_MODULE_9__.TokenType.define('aria-live', 'polite'),
  atomic: _BooleanType_js__WEBPACK_IMPORTED_MODULE_7__.BooleanType.define('aria-atomic', true)
});
var RoleStrong = /*#__PURE__*/function (_RoleType67) {
  function RoleStrong() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleStrong);
    return _callSuper(this, RoleStrong, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleStrong, _RoleType67);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleStrong);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleStrong, "role", 'strong');
var RoleSubscript = /*#__PURE__*/function (_RoleType68) {
  function RoleSubscript() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleSubscript);
    return _callSuper(this, RoleSubscript, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleSubscript, _RoleType68);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleSubscript);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleSubscript, "role", 'subscript');
var RoleSuperscript = /*#__PURE__*/function (_RoleType69) {
  function RoleSuperscript() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleSuperscript);
    return _callSuper(this, RoleSuperscript, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleSuperscript, _RoleType69);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleSuperscript);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleSuperscript, "role", 'superscript');
var RoleSwitch = /*#__PURE__*/function (_RoleType70) {
  function RoleSwitch() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleSwitch);
    return _callSuper(this, RoleSwitch, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleSwitch, _RoleType70);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleSwitch);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleSwitch, "role", 'switch');
var RoleTab = /*#__PURE__*/function (_RoleType71) {
  function RoleTab() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleTab);
    return _callSuper(this, RoleTab, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleTab, _RoleType71);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleTab);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleTab, "role", 'tab');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleTab, "props", {
  selected: _TokenType_js__WEBPACK_IMPORTED_MODULE_9__.TokenType.define('aria-selected', false)
});
var RoleTabList = /*#__PURE__*/function (_RoleType72) {
  function RoleTabList() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleTabList);
    return _callSuper(this, RoleTabList, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleTabList, _RoleType72);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleTabList);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleTabList, "role", 'tablist');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleTabList, "props", {
  orientation: _TokenType_js__WEBPACK_IMPORTED_MODULE_9__.TokenType.define('aria-orientation', 'horizontal')
});
var RoleTabPanel = /*#__PURE__*/function (_RoleType73) {
  function RoleTabPanel() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleTabPanel);
    return _callSuper(this, RoleTabPanel, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleTabPanel, _RoleType73);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleTabPanel);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleTabPanel, "role", 'tabpanel');
var RoleTable = /*#__PURE__*/function (_RoleType74) {
  function RoleTable() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleTable);
    return _callSuper(this, RoleTable, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleTable, _RoleType74);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleTable);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleTable, "role", 'table');
var RoleTerm = /*#__PURE__*/function (_RoleType75) {
  function RoleTerm() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleTerm);
    return _callSuper(this, RoleTerm, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleTerm, _RoleType75);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleTerm);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleTerm, "role", 'term');
var RoleTextBox = /*#__PURE__*/function (_RoleType76) {
  function RoleTextBox() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleTextBox);
    return _callSuper(this, RoleTextBox, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleTextBox, _RoleType76);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleTextBox);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleTextBox, "role", 'textbox');
var RoleTime = /*#__PURE__*/function (_RoleType77) {
  function RoleTime() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleTime);
    return _callSuper(this, RoleTime, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleTime, _RoleType77);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleTime);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleTime, "role", 'time');
var RoleTimer = /*#__PURE__*/function (_RoleType78) {
  function RoleTimer() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleTimer);
    return _callSuper(this, RoleTimer, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleTimer, _RoleType78);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleTimer);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleTimer, "role", 'timer');
var RoleToolBar = /*#__PURE__*/function (_RoleType79) {
  function RoleToolBar() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleToolBar);
    return _callSuper(this, RoleToolBar, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleToolBar, _RoleType79);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleToolBar);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleToolBar, "role", 'toolbar');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleToolBar, "props", {
  orientation: _TokenType_js__WEBPACK_IMPORTED_MODULE_9__.TokenType.define('aria-orientation', 'horizontal')
});
var RoleToolTip = /*#__PURE__*/function (_RoleType80) {
  function RoleToolTip() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleToolTip);
    return _callSuper(this, RoleToolTip, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleToolTip, _RoleType80);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleToolTip);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleToolTip, "role", 'tooltip');
var RoleTree = /*#__PURE__*/function (_RoleType81) {
  function RoleTree() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleTree);
    return _callSuper(this, RoleTree, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleTree, _RoleType81);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleTree);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleTree, "role", 'tree');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleTree, "props", {
  orientation: _TokenType_js__WEBPACK_IMPORTED_MODULE_9__.TokenType.define('aria-orientation', 'vertical')
});
var RoleTreeGrid = /*#__PURE__*/function (_RoleType82) {
  function RoleTreeGrid() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleTreeGrid);
    return _callSuper(this, RoleTreeGrid, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleTreeGrid, _RoleType82);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(RoleTreeGrid);
}(_RoleType_js__WEBPACK_IMPORTED_MODULE_6__.RoleType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(RoleTreeGrid, "role", 'treegrid');
var RoleTreeItem = /*#__PURE__*/function (_RoleType83) {
  function RoleTreeItem() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleTreeItem);
    return _callSuper(this, RoleTreeItem, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleTreeItem, _RoleType83);
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
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(descriptor.key), descriptor);
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
/* harmony export */   "default": () => (/* binding */ toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);


function toPropertyKey(t) {
  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t, "string");
  return "symbol" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i) ? i : i + "";
}

/***/ }),
/* 4 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

/***/ }),
/* 5 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

function toPrimitive(t, r) {
  if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

/***/ }),
/* 6 */
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
/* 7 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
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
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);

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
/* 11 */
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
/* 12 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

function _defineProperty(obj, key, value) {
  key = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key);
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
/* 13 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoleType: () => (/* binding */ RoleType)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var _AttrType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14);
/* harmony import */ var _BooleanType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15);
/* harmony import */ var _NumberType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18);
/* harmony import */ var _ElemType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19);
/* harmony import */ var _InnerText_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(43);






function _callSuper(_this, derived, args) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e) {
      return false;
    }
  }
  derived = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(derived);
  return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_this).constructor) : derived.apply(_this, args));
}






/**
 * @abstract
 */
var RoleType = /*#__PURE__*/function (_ElemType) {
  function RoleType() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoleType);
    return _callSuper(this, RoleType, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RoleType, _ElemType);
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
/* 14 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AttrType: () => (/* binding */ AttrType)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);






function _callSuper(_this, derived, args) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e) {
      return false;
    }
  }
  derived = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(derived);
  return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0__["default"])(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(_this).constructor) : derived.apply(_this, args));
}
/**
 * @abstract
 */
var AttrType = /*#__PURE__*/function () {
  function AttrType() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, AttrType);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(AttrType, null, [{
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
      var _Class;
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.defaultValue;
      return _Class = /*#__PURE__*/function (_this) {
        function _Class() {
          (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _Class);
          return _callSuper(this, _Class, arguments);
        }
        (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(_Class, _this);
        return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(_Class);
      }(this), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_Class, "nodeName", nodeName), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_Class, "defaultValue", defaultValue), _Class;
    }
  }]);
}();
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(AttrType, "nodeName", null);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(AttrType, "defaultValue", '');

/***/ }),
/* 15 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BooleanType: () => (/* binding */ BooleanType)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var _AttrType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14);







function _callSuper(_this, derived, args) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e) {
      return false;
    }
  }
  derived = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(derived);
  return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(_this).constructor) : derived.apply(_this, args));
}

var BooleanType = /*#__PURE__*/function (_AttrType) {
  function BooleanType() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BooleanType);
    return _callSuper(this, BooleanType, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(BooleanType, _AttrType);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BooleanType, null, [{
    key: "get",
    value:
    /**
     * @param {ElemType} elem
     * @param {string} propName
     * @returns {boolean}
     */
    function get(elem, propName) {
      var value = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(BooleanType), "get", this).call(this, elem, propName);
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
      var _Class;
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.defaultValue;
      var nodeValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.nodeValue;
      return _Class = /*#__PURE__*/function (_this2) {
        function _Class() {
          (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _Class);
          return _callSuper(this, _Class, arguments);
        }
        (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(_Class, _this2);
        return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_Class);
      }(this), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_Class, "nodeName", nodeName), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_Class, "defaultValue", defaultValue), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_Class, "nodeValue", nodeValue), _Class;
    }
  }]);
}(_AttrType_js__WEBPACK_IMPORTED_MODULE_7__.AttrType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(BooleanType, "defaultValue", false);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(BooleanType, "nodeValue", '');

/***/ }),
/* 16 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _get)
/* harmony export */ });
/* harmony import */ var _superPropBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);

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
/* 17 */
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
/* 18 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NumberType: () => (/* binding */ NumberType)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var _AttrType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14);






function _callSuper(_this, derived, args) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e) {
      return false;
    }
  }
  derived = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(derived);
  return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_this).constructor) : derived.apply(_this, args));
}

var NumberType = /*#__PURE__*/function (_AttrType) {
  function NumberType() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NumberType);
    return _callSuper(this, NumberType, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NumberType, _AttrType);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NumberType, null, [{
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
}(_AttrType_js__WEBPACK_IMPORTED_MODULE_6__.AttrType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(NumberType, "defaultValue", NaN);

/***/ }),
/* 19 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElemType: () => (/* binding */ ElemType)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _window_cjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30);
/* harmony import */ var _AriaType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31);
/* harmony import */ var _AttrType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14);
/* harmony import */ var _Attributes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33);
/* harmony import */ var _Class_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(35);
/* harmony import */ var _ClassList_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(36);
/* harmony import */ var _Dataset_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(37);
/* harmony import */ var _EventType_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(38);
/* harmony import */ var _Id_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(39);
/* harmony import */ var _InnerHTML_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(40);
/* harmony import */ var _PropType_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(34);
/* harmony import */ var _Style_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(41);
/* harmony import */ var _TextType_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(42);





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
  __mounted: {
    writable: true,
    value: false
  },
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
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ElemType, [{
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
        } else parentNode === null || parentNode === void 0 || parentNode.append(this.__node);
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
      if (this.__mounted) {
        return;
      }
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
      this.__mounted = true;
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
        if (this.__mounted) {
          childB.__mount();
        }
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
        childA = childrenA[i];
        childB = childrenB[i];
        if (childA === undefined) {
          childB.__parent = this;
          childB.__init();
          this.node.append(childB.__node || childB.node);
          if (this.__mounted) {
            var _childB$__mount, _childB;
            (_childB$__mount = (_childB = childB).__mount) === null || _childB$__mount === void 0 || _childB$__mount.call(_childB);
          }
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
        if (this.__mounted) {
          var _childB$__mount2, _childB2;
          (_childB$__mount2 = (_childB2 = childB).__mount) === null || _childB$__mount2 === void 0 || _childB$__mount2.call(_childB2);
        }
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
      elem === null || elem === void 0 || elem.__destroy(keepNode);
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
/* 20 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),
/* 21 */
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
/* 22 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}

/***/ }),
/* 23 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),
/* 24 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

/***/ }),
/* 25 */
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
/* 26 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29);




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),
/* 27 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),
/* 28 */
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
/* 29 */
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
/* 30 */
/***/ ((module) => {

if(typeof window === 'undefined') {
  // Calling via eval() prevents jsdom extraction when using a module bundler
  const { JSDOM } = eval('require("jsdom")')
  const { window } = new JSDOM
  module.exports = window
}
else module.exports = window


/***/ }),
/* 31 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AriaType: () => (/* binding */ AriaType)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _AttrType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var _BooleanType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony import */ var _NumberType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18);
/* harmony import */ var _TokenType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32);








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
/* 32 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TokenType: () => (/* binding */ TokenType)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var _AttrType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14);







function _callSuper(_this, derived, args) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e) {
      return false;
    }
  }
  derived = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(derived);
  return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(_this).constructor) : derived.apply(_this, args));
}

var TokenType = /*#__PURE__*/function (_AttrType) {
  function TokenType() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TokenType);
    return _callSuper(this, TokenType, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(TokenType, _AttrType);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TokenType, null, [{
    key: "get",
    value:
    /**
     * @param {ElemType} elem
     * @param {string} propName
     * @returns {string|boolean|undefined}
     */
    function get(elem, propName) {
      var value = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(TokenType), "get", this).call(this, elem, propName);
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
}(_AttrType_js__WEBPACK_IMPORTED_MODULE_7__.AttrType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(TokenType, "defaultValue", undefined);

/***/ }),
/* 33 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Attributes: () => (/* binding */ Attributes)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _PropType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34);





function _callSuper(_this, derived, args) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e) {
      return false;
    }
  }
  derived = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(derived);
  return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_this).constructor) : derived.apply(_this, args));
}

var Attributes = /*#__PURE__*/function (_PropType) {
  function Attributes() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Attributes);
    return _callSuper(this, Attributes, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Attributes, _PropType);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Attributes, null, [{
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
}(_PropType_js__WEBPACK_IMPORTED_MODULE_5__.PropType);

/***/ }),
/* 34 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PropType: () => (/* binding */ PropType)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
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
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PropType, null, [{
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
}();

/***/ }),
/* 35 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Class: () => (/* binding */ Class)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12);
/* harmony import */ var _AttrType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14);








function _callSuper(_this, derived, args) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e) {
      return false;
    }
  }
  derived = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(derived);
  return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(_this).constructor) : derived.apply(_this, args));
}

var Class = /*#__PURE__*/function (_AttrType) {
  function Class() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Class);
    return _callSuper(this, Class, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Class, _AttrType);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Class, null, [{
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
      (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Class), "update", this).call(this, elem, this.nodeName, className || null);
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
}(_AttrType_js__WEBPACK_IMPORTED_MODULE_8__.AttrType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Class, "nodeName", 'class');

/***/ }),
/* 36 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClassList: () => (/* binding */ ClassList)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _PropType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34);





function _callSuper(_this, derived, args) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e) {
      return false;
    }
  }
  derived = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(derived);
  return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_this).constructor) : derived.apply(_this, args));
}

var ClassList = /*#__PURE__*/function (_PropType) {
  function ClassList() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ClassList);
    return _callSuper(this, ClassList, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ClassList, _PropType);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ClassList, null, [{
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
}(_PropType_js__WEBPACK_IMPORTED_MODULE_5__.PropType);

/***/ }),
/* 37 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dataset: () => (/* binding */ Dataset)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _PropType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34);





function _callSuper(_this, derived, args) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e) {
      return false;
    }
  }
  derived = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(derived);
  return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_this).constructor) : derived.apply(_this, args));
}

var Dataset = /*#__PURE__*/function (_PropType) {
  function Dataset() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Dataset);
    return _callSuper(this, Dataset, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Dataset, _PropType);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Dataset, null, [{
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
}(_PropType_js__WEBPACK_IMPORTED_MODULE_5__.PropType);

/***/ }),
/* 38 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventType: () => (/* binding */ EventType)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _window_cjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30);



var _EventType;

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
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EventType, [{
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
}();

/**
 * @param {constructor @link Event} constructor
 * @param {boolean} [bubbles=false]
 * @param {boolean} [cancelable=false]
 * @return {{constructor, dict: {cancelable, bubbles}}}
 */
_EventType = EventType;
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
  for (type in _EventType.types) {
    prop = 'on' + type;
    if (prop in _window_cjs__WEBPACK_IMPORTED_MODULE_3__.HTMLElement.prototype) {
      _EventType.props[prop] = _EventType;
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
    desc = _EventType.members[name] ? {
      get: function get() {
        return this.nativeEvent[name];
      }
    } : {
      value: function value() {
        var _this$nativeEvent;
        return (_this$nativeEvent = this.nativeEvent)[name].apply(_this$nativeEvent, arguments);
      }
    };
    Object.defineProperty(_EventType.prototype, name, desc);
  };
  for (var name in _EventType.members) {
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
/* 39 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Id: () => (/* binding */ Id)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var _AttrType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14);






function _callSuper(_this, derived, args) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e) {
      return false;
    }
  }
  derived = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(derived);
  return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_this).constructor) : derived.apply(_this, args));
}

var counter = 0;
var Id = /*#__PURE__*/function (_AttrType) {
  function Id() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Id);
    return _callSuper(this, Id, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Id, _AttrType);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Id, null, [{
    key: "generate",
    value: function generate() {
      var str = (counter++).toString(36);
      return 'ID_' + str.padStart(4, '0');
    }
  }]);
}(_AttrType_js__WEBPACK_IMPORTED_MODULE_6__.AttrType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Id, "nodeName", 'id');

/***/ }),
/* 40 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InnerHTML: () => (/* binding */ InnerHTML)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _PropType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34);





function _callSuper(_this, derived, args) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e) {
      return false;
    }
  }
  derived = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(derived);
  return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_this).constructor) : derived.apply(_this, args));
}

var InnerHTML = /*#__PURE__*/function (_PropType) {
  function InnerHTML() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InnerHTML);
    return _callSuper(this, InnerHTML, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(InnerHTML, _PropType);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(InnerHTML, null, [{
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
}(_PropType_js__WEBPACK_IMPORTED_MODULE_5__.PropType);

/***/ }),
/* 41 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Style: () => (/* binding */ Style)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var _window_cjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(30);
/* harmony import */ var _AttrType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14);







function _callSuper(_this, derived, args) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e) {
      return false;
    }
  }
  derived = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(derived);
  return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(_this).constructor) : derived.apply(_this, args));
}


var sampleNode = _window_cjs__WEBPACK_IMPORTED_MODULE_7__.document.createElement('div');
var Style = /*#__PURE__*/function (_AttrType) {
  function Style() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Style);
    return _callSuper(this, Style, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Style, _AttrType);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Style, null, [{
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
      (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Style), "update", this).call(this, elem, propName, value);
      sampleNode.style = '';
    }
  }]);
}(_AttrType_js__WEBPACK_IMPORTED_MODULE_8__.AttrType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Style, "nodeName", 'style');

/***/ }),
/* 42 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextType: () => (/* binding */ TextType)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _window_cjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30);



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
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TextType, [{
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
}();

/***/ }),
/* 43 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InnerText: () => (/* binding */ InnerText)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _PropType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34);





function _callSuper(_this, derived, args) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e) {
      return false;
    }
  }
  derived = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(derived);
  return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_this).constructor) : derived.apply(_this, args));
}

var InnerText = /*#__PURE__*/function (_PropType) {
  function InnerText() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InnerText);
    return _callSuper(this, InnerText, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(InnerText, _PropType);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(InnerText, null, [{
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
}(_PropType_js__WEBPACK_IMPORTED_MODULE_5__.PropType);

/***/ }),
/* 44 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Context: () => (/* binding */ Context)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);



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
/* 45 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutProperties)
/* harmony export */ });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);

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
/* 46 */
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
/* 47 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HtmlA: () => (/* binding */ HtmlA),
/* harmony export */   HtmlAbbr: () => (/* binding */ HtmlAbbr),
/* harmony export */   HtmlAddress: () => (/* binding */ HtmlAddress),
/* harmony export */   HtmlArea: () => (/* binding */ HtmlArea),
/* harmony export */   HtmlArticle: () => (/* binding */ HtmlArticle),
/* harmony export */   HtmlAside: () => (/* binding */ HtmlAside),
/* harmony export */   HtmlAudio: () => (/* binding */ HtmlAudio),
/* harmony export */   HtmlB: () => (/* binding */ HtmlB),
/* harmony export */   HtmlBase: () => (/* binding */ HtmlBase),
/* harmony export */   HtmlBdi: () => (/* binding */ HtmlBdi),
/* harmony export */   HtmlBdo: () => (/* binding */ HtmlBdo),
/* harmony export */   HtmlBlockQuote: () => (/* binding */ HtmlBlockQuote),
/* harmony export */   HtmlBody: () => (/* binding */ HtmlBody),
/* harmony export */   HtmlBr: () => (/* binding */ HtmlBr),
/* harmony export */   HtmlButton: () => (/* binding */ HtmlButton),
/* harmony export */   HtmlCanvas: () => (/* binding */ HtmlCanvas),
/* harmony export */   HtmlCaption: () => (/* binding */ HtmlCaption),
/* harmony export */   HtmlCite: () => (/* binding */ HtmlCite),
/* harmony export */   HtmlCode: () => (/* binding */ HtmlCode),
/* harmony export */   HtmlCol: () => (/* binding */ HtmlCol),
/* harmony export */   HtmlColGroup: () => (/* binding */ HtmlColGroup),
/* harmony export */   HtmlData: () => (/* binding */ HtmlData),
/* harmony export */   HtmlDataList: () => (/* binding */ HtmlDataList),
/* harmony export */   HtmlDd: () => (/* binding */ HtmlDd),
/* harmony export */   HtmlDel: () => (/* binding */ HtmlDel),
/* harmony export */   HtmlDetails: () => (/* binding */ HtmlDetails),
/* harmony export */   HtmlDfn: () => (/* binding */ HtmlDfn),
/* harmony export */   HtmlDialog: () => (/* binding */ HtmlDialog),
/* harmony export */   HtmlDiv: () => (/* binding */ HtmlDiv),
/* harmony export */   HtmlDl: () => (/* binding */ HtmlDl),
/* harmony export */   HtmlDt: () => (/* binding */ HtmlDt),
/* harmony export */   HtmlEm: () => (/* binding */ HtmlEm),
/* harmony export */   HtmlEmbed: () => (/* binding */ HtmlEmbed),
/* harmony export */   HtmlFieldSet: () => (/* binding */ HtmlFieldSet),
/* harmony export */   HtmlFigCaption: () => (/* binding */ HtmlFigCaption),
/* harmony export */   HtmlFigure: () => (/* binding */ HtmlFigure),
/* harmony export */   HtmlFooter: () => (/* binding */ HtmlFooter),
/* harmony export */   HtmlForm: () => (/* binding */ HtmlForm),
/* harmony export */   HtmlH1: () => (/* binding */ HtmlH1),
/* harmony export */   HtmlH2: () => (/* binding */ HtmlH2),
/* harmony export */   HtmlH3: () => (/* binding */ HtmlH3),
/* harmony export */   HtmlH4: () => (/* binding */ HtmlH4),
/* harmony export */   HtmlH5: () => (/* binding */ HtmlH5),
/* harmony export */   HtmlH6: () => (/* binding */ HtmlH6),
/* harmony export */   HtmlHGroup: () => (/* binding */ HtmlHGroup),
/* harmony export */   HtmlHead: () => (/* binding */ HtmlHead),
/* harmony export */   HtmlHeader: () => (/* binding */ HtmlHeader),
/* harmony export */   HtmlHr: () => (/* binding */ HtmlHr),
/* harmony export */   HtmlHtml: () => (/* binding */ HtmlHtml),
/* harmony export */   HtmlI: () => (/* binding */ HtmlI),
/* harmony export */   HtmlIFrame: () => (/* binding */ HtmlIFrame),
/* harmony export */   HtmlImg: () => (/* binding */ HtmlImg),
/* harmony export */   HtmlInput: () => (/* binding */ HtmlInput),
/* harmony export */   HtmlIns: () => (/* binding */ HtmlIns),
/* harmony export */   HtmlKbd: () => (/* binding */ HtmlKbd),
/* harmony export */   HtmlLabel: () => (/* binding */ HtmlLabel),
/* harmony export */   HtmlLegend: () => (/* binding */ HtmlLegend),
/* harmony export */   HtmlLi: () => (/* binding */ HtmlLi),
/* harmony export */   HtmlLink: () => (/* binding */ HtmlLink),
/* harmony export */   HtmlMain: () => (/* binding */ HtmlMain),
/* harmony export */   HtmlMap: () => (/* binding */ HtmlMap),
/* harmony export */   HtmlMark: () => (/* binding */ HtmlMark),
/* harmony export */   HtmlMenu: () => (/* binding */ HtmlMenu),
/* harmony export */   HtmlMeta: () => (/* binding */ HtmlMeta),
/* harmony export */   HtmlMeter: () => (/* binding */ HtmlMeter),
/* harmony export */   HtmlNav: () => (/* binding */ HtmlNav),
/* harmony export */   HtmlNoScript: () => (/* binding */ HtmlNoScript),
/* harmony export */   HtmlObject: () => (/* binding */ HtmlObject),
/* harmony export */   HtmlOl: () => (/* binding */ HtmlOl),
/* harmony export */   HtmlOptGroup: () => (/* binding */ HtmlOptGroup),
/* harmony export */   HtmlOption: () => (/* binding */ HtmlOption),
/* harmony export */   HtmlOutput: () => (/* binding */ HtmlOutput),
/* harmony export */   HtmlP: () => (/* binding */ HtmlP),
/* harmony export */   HtmlParam: () => (/* binding */ HtmlParam),
/* harmony export */   HtmlPicture: () => (/* binding */ HtmlPicture),
/* harmony export */   HtmlPre: () => (/* binding */ HtmlPre),
/* harmony export */   HtmlProgress: () => (/* binding */ HtmlProgress),
/* harmony export */   HtmlQ: () => (/* binding */ HtmlQ),
/* harmony export */   HtmlRp: () => (/* binding */ HtmlRp),
/* harmony export */   HtmlRt: () => (/* binding */ HtmlRt),
/* harmony export */   HtmlRuby: () => (/* binding */ HtmlRuby),
/* harmony export */   HtmlS: () => (/* binding */ HtmlS),
/* harmony export */   HtmlSamp: () => (/* binding */ HtmlSamp),
/* harmony export */   HtmlScript: () => (/* binding */ HtmlScript),
/* harmony export */   HtmlSection: () => (/* binding */ HtmlSection),
/* harmony export */   HtmlSelect: () => (/* binding */ HtmlSelect),
/* harmony export */   HtmlSmall: () => (/* binding */ HtmlSmall),
/* harmony export */   HtmlSource: () => (/* binding */ HtmlSource),
/* harmony export */   HtmlSpan: () => (/* binding */ HtmlSpan),
/* harmony export */   HtmlStrong: () => (/* binding */ HtmlStrong),
/* harmony export */   HtmlStyle: () => (/* binding */ HtmlStyle),
/* harmony export */   HtmlSub: () => (/* binding */ HtmlSub),
/* harmony export */   HtmlSummary: () => (/* binding */ HtmlSummary),
/* harmony export */   HtmlSup: () => (/* binding */ HtmlSup),
/* harmony export */   HtmlTBody: () => (/* binding */ HtmlTBody),
/* harmony export */   HtmlTFoot: () => (/* binding */ HtmlTFoot),
/* harmony export */   HtmlTHead: () => (/* binding */ HtmlTHead),
/* harmony export */   HtmlTable: () => (/* binding */ HtmlTable),
/* harmony export */   HtmlTd: () => (/* binding */ HtmlTd),
/* harmony export */   HtmlTemplate: () => (/* binding */ HtmlTemplate),
/* harmony export */   HtmlTextArea: () => (/* binding */ HtmlTextArea),
/* harmony export */   HtmlTh: () => (/* binding */ HtmlTh),
/* harmony export */   HtmlTime: () => (/* binding */ HtmlTime),
/* harmony export */   HtmlTitle: () => (/* binding */ HtmlTitle),
/* harmony export */   HtmlTr: () => (/* binding */ HtmlTr),
/* harmony export */   HtmlTrack: () => (/* binding */ HtmlTrack),
/* harmony export */   HtmlU: () => (/* binding */ HtmlU),
/* harmony export */   HtmlUl: () => (/* binding */ HtmlUl),
/* harmony export */   HtmlVar: () => (/* binding */ HtmlVar),
/* harmony export */   HtmlVideo: () => (/* binding */ HtmlVideo),
/* harmony export */   HtmlWbr: () => (/* binding */ HtmlWbr)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var _AttrType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14);
/* harmony import */ var _BooleanType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15);
/* harmony import */ var _NumberType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18);
/* harmony import */ var _HtmlType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(48);
/* harmony import */ var _PropType_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(34);






function _callSuper(_this, derived, args) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e) {
      return false;
    }
  }
  derived = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(derived);
  return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_this).constructor) : derived.apply(_this, args));
}





var attr = _AttrType_js__WEBPACK_IMPORTED_MODULE_6__.AttrType.define.bind(_AttrType_js__WEBPACK_IMPORTED_MODULE_6__.AttrType);
var _boolean = _BooleanType_js__WEBPACK_IMPORTED_MODULE_7__.BooleanType.define.bind(_BooleanType_js__WEBPACK_IMPORTED_MODULE_7__.BooleanType);
var number = _NumberType_js__WEBPACK_IMPORTED_MODULE_8__.NumberType.define.bind(_NumberType_js__WEBPACK_IMPORTED_MODULE_8__.NumberType);
var HtmlA = /*#__PURE__*/function (_HtmlType) {
  function HtmlA() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlA);
    return _callSuper(this, HtmlA, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlA, _HtmlType);
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
  function HtmlAbbr() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlAbbr);
    return _callSuper(this, HtmlAbbr, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlAbbr, _HtmlType2);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlAbbr);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlAbbr, "tagName", 'abbr');
var HtmlAddress = /*#__PURE__*/function (_HtmlType3) {
  function HtmlAddress() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlAddress);
    return _callSuper(this, HtmlAddress, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlAddress, _HtmlType3);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlAddress);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlAddress, "tagName", 'address');
var HtmlArea = /*#__PURE__*/function (_HtmlType4) {
  function HtmlArea() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlArea);
    return _callSuper(this, HtmlArea, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlArea, _HtmlType4);
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
  function HtmlArticle() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlArticle);
    return _callSuper(this, HtmlArticle, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlArticle, _HtmlType5);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlArticle);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlArticle, "tagName", 'article');
var HtmlAside = /*#__PURE__*/function (_HtmlType6) {
  function HtmlAside() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlAside);
    return _callSuper(this, HtmlAside, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlAside, _HtmlType6);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlAside);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlAside, "tagName", 'aside');
var HtmlAudio = /*#__PURE__*/function (_HtmlType7) {
  function HtmlAudio() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlAudio);
    return _callSuper(this, HtmlAudio, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlAudio, _HtmlType7);
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
  function HtmlB() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlB);
    return _callSuper(this, HtmlB, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlB, _HtmlType8);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlB);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlB, "tagName", 'b');
var HtmlBase = /*#__PURE__*/function (_HtmlType9) {
  function HtmlBase() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlBase);
    return _callSuper(this, HtmlBase, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlBase, _HtmlType9);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlBase);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlBase, "tagName", 'base');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlBase, "props", {
  href: attr('href'),
  target: attr('target')
});
var HtmlBdi = /*#__PURE__*/function (_HtmlType10) {
  function HtmlBdi() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlBdi);
    return _callSuper(this, HtmlBdi, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlBdi, _HtmlType10);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlBdi);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlBdi, "tagName", 'bdi');
var HtmlBdo = /*#__PURE__*/function (_HtmlType11) {
  function HtmlBdo() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlBdo);
    return _callSuper(this, HtmlBdo, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlBdo, _HtmlType11);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlBdo);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlBdo, "tagName", 'bdo');
var HtmlBlockQuote = /*#__PURE__*/function (_HtmlType12) {
  function HtmlBlockQuote() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlBlockQuote);
    return _callSuper(this, HtmlBlockQuote, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlBlockQuote, _HtmlType12);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlBlockQuote);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlBlockQuote, "tagName", 'blockquote');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlBlockQuote, "props", {
  cite: attr('cite')
});
var HtmlBody = /*#__PURE__*/function (_HtmlType13) {
  function HtmlBody() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlBody);
    return _callSuper(this, HtmlBody, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlBody, _HtmlType13);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlBody);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlBody, "tagName", 'body');
var HtmlBr = /*#__PURE__*/function (_HtmlType14) {
  function HtmlBr() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlBr);
    return _callSuper(this, HtmlBr, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlBr, _HtmlType14);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlBr);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlBr, "tagName", 'br');
var HtmlButton = /*#__PURE__*/function (_HtmlType15) {
  function HtmlButton() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlButton);
    return _callSuper(this, HtmlButton, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlButton, _HtmlType15);
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
  function HtmlCanvas() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlCanvas);
    return _callSuper(this, HtmlCanvas, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlCanvas, _HtmlType16);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlCanvas);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlCanvas, "tagName", 'canvas');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlCanvas, "props", {
  height: number('height'),
  width: number('width')
});
var HtmlCaption = /*#__PURE__*/function (_HtmlType17) {
  function HtmlCaption() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlCaption);
    return _callSuper(this, HtmlCaption, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlCaption, _HtmlType17);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlCaption);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlCaption, "tagName", 'caption');
var HtmlCite = /*#__PURE__*/function (_HtmlType18) {
  function HtmlCite() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlCite);
    return _callSuper(this, HtmlCite, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlCite, _HtmlType18);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlCite);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlCite, "tagName", 'cite');
var HtmlCode = /*#__PURE__*/function (_HtmlType19) {
  function HtmlCode() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlCode);
    return _callSuper(this, HtmlCode, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlCode, _HtmlType19);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlCode);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlCode, "tagName", 'code');
var HtmlCol = /*#__PURE__*/function (_HtmlType20) {
  function HtmlCol() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlCol);
    return _callSuper(this, HtmlCol, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlCol, _HtmlType20);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlCol);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlCol, "tagName", 'col');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlCol, "props", {
  span: number('span')
});
var HtmlColGroup = /*#__PURE__*/function (_HtmlType21) {
  function HtmlColGroup() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlColGroup);
    return _callSuper(this, HtmlColGroup, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlColGroup, _HtmlType21);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlColGroup);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlColGroup, "tagName", 'colgroup');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlColGroup, "props", {
  span: number('span')
});
var HtmlData = /*#__PURE__*/function (_HtmlType22) {
  function HtmlData() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlData);
    return _callSuper(this, HtmlData, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlData, _HtmlType22);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlData);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlData, "tagName", 'data');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlData, "props", {
  value: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType
});
var HtmlDataList = /*#__PURE__*/function (_HtmlType23) {
  function HtmlDataList() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlDataList);
    return _callSuper(this, HtmlDataList, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlDataList, _HtmlType23);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlDataList);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlDataList, "tagName", 'datalist');
var HtmlDd = /*#__PURE__*/function (_HtmlType24) {
  function HtmlDd() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlDd);
    return _callSuper(this, HtmlDd, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlDd, _HtmlType24);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlDd);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlDd, "tagName", 'dd');
var HtmlDel = /*#__PURE__*/function (_HtmlType25) {
  function HtmlDel() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlDel);
    return _callSuper(this, HtmlDel, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlDel, _HtmlType25);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlDel);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlDel, "tagName", 'del');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlDel, "props", {
  cite: attr('cite'),
  dateTime: attr('datetime')
});
var HtmlDetails = /*#__PURE__*/function (_HtmlType26) {
  function HtmlDetails() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlDetails);
    return _callSuper(this, HtmlDetails, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlDetails, _HtmlType26);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlDetails);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlDetails, "tagName", 'details');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlDetails, "props", {
  open: _boolean('open')
});
var HtmlDfn = /*#__PURE__*/function (_HtmlType27) {
  function HtmlDfn() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlDfn);
    return _callSuper(this, HtmlDfn, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlDfn, _HtmlType27);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlDfn);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlDfn, "tagName", 'dfn');
var HtmlDialog = /*#__PURE__*/function (_HtmlType28) {
  function HtmlDialog() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlDialog);
    return _callSuper(this, HtmlDialog, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlDialog, _HtmlType28);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlDialog);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlDialog, "tagName", 'dialog');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlDialog, "props", {
  open: _boolean('open'),
  returnValue: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType
});
var HtmlDiv = /*#__PURE__*/function (_HtmlType29) {
  function HtmlDiv() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlDiv);
    return _callSuper(this, HtmlDiv, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlDiv, _HtmlType29);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlDiv);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlDiv, "tagName", 'div');
var HtmlDl = /*#__PURE__*/function (_HtmlType30) {
  function HtmlDl() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlDl);
    return _callSuper(this, HtmlDl, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlDl, _HtmlType30);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlDl);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlDl, "tagName", 'dl');
var HtmlDt = /*#__PURE__*/function (_HtmlType31) {
  function HtmlDt() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlDt);
    return _callSuper(this, HtmlDt, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlDt, _HtmlType31);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlDt);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlDt, "tagName", 'dt');
var HtmlEm = /*#__PURE__*/function (_HtmlType32) {
  function HtmlEm() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlEm);
    return _callSuper(this, HtmlEm, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlEm, _HtmlType32);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlEm);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlEm, "tagName", 'em');
var HtmlEmbed = /*#__PURE__*/function (_HtmlType33) {
  function HtmlEmbed() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlEmbed);
    return _callSuper(this, HtmlEmbed, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlEmbed, _HtmlType33);
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
  function HtmlFieldSet() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlFieldSet);
    return _callSuper(this, HtmlFieldSet, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlFieldSet, _HtmlType34);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlFieldSet);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlFieldSet, "tagName", 'fieldset');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlFieldSet, "props", {
  disabled: _boolean('disabled'),
  name: attr('name')
});
var HtmlFigCaption = /*#__PURE__*/function (_HtmlType35) {
  function HtmlFigCaption() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlFigCaption);
    return _callSuper(this, HtmlFigCaption, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlFigCaption, _HtmlType35);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlFigCaption);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlFigCaption, "tagName", 'figcaption');
var HtmlFigure = /*#__PURE__*/function (_HtmlType36) {
  function HtmlFigure() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlFigure);
    return _callSuper(this, HtmlFigure, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlFigure, _HtmlType36);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlFigure);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlFigure, "tagName", 'figure');
var HtmlFooter = /*#__PURE__*/function (_HtmlType37) {
  function HtmlFooter() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlFooter);
    return _callSuper(this, HtmlFooter, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlFooter, _HtmlType37);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlFooter);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlFooter, "tagName", 'footer');
var HtmlForm = /*#__PURE__*/function (_HtmlType38) {
  function HtmlForm() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlForm);
    return _callSuper(this, HtmlForm, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlForm, _HtmlType38);
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
  function HtmlH1() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlH1);
    return _callSuper(this, HtmlH1, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlH1, _HtmlType39);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlH1);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlH1, "tagName", 'h1');
var HtmlH2 = /*#__PURE__*/function (_HtmlType40) {
  function HtmlH2() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlH2);
    return _callSuper(this, HtmlH2, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlH2, _HtmlType40);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlH2);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlH2, "tagName", 'h2');
var HtmlH3 = /*#__PURE__*/function (_HtmlType41) {
  function HtmlH3() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlH3);
    return _callSuper(this, HtmlH3, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlH3, _HtmlType41);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlH3);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlH3, "tagName", 'h3');
var HtmlH4 = /*#__PURE__*/function (_HtmlType42) {
  function HtmlH4() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlH4);
    return _callSuper(this, HtmlH4, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlH4, _HtmlType42);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlH4);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlH4, "tagName", 'h4');
var HtmlH5 = /*#__PURE__*/function (_HtmlType43) {
  function HtmlH5() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlH5);
    return _callSuper(this, HtmlH5, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlH5, _HtmlType43);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlH5);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlH5, "tagName", 'h5');
var HtmlH6 = /*#__PURE__*/function (_HtmlType44) {
  function HtmlH6() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlH6);
    return _callSuper(this, HtmlH6, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlH6, _HtmlType44);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlH6);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlH6, "tagName", 'h6');
var HtmlHGroup = /*#__PURE__*/function (_HtmlType45) {
  function HtmlHGroup() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlHGroup);
    return _callSuper(this, HtmlHGroup, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlHGroup, _HtmlType45);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlHGroup);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlHGroup, "tagName", 'hgroup');
var HtmlHead = /*#__PURE__*/function (_HtmlType46) {
  function HtmlHead() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlHead);
    return _callSuper(this, HtmlHead, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlHead, _HtmlType46);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlHead);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlHead, "tagName", 'head');
var HtmlHeader = /*#__PURE__*/function (_HtmlType47) {
  function HtmlHeader() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlHeader);
    return _callSuper(this, HtmlHeader, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlHeader, _HtmlType47);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlHeader);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlHeader, "tagName", 'header');
var HtmlHr = /*#__PURE__*/function (_HtmlType48) {
  function HtmlHr() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlHr);
    return _callSuper(this, HtmlHr, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlHr, _HtmlType48);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlHr);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlHr, "tagName", 'hr');
var HtmlHtml = /*#__PURE__*/function (_HtmlType49) {
  function HtmlHtml() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlHtml);
    return _callSuper(this, HtmlHtml, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlHtml, _HtmlType49);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlHtml);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlHtml, "tagName", 'html');
var HtmlI = /*#__PURE__*/function (_HtmlType50) {
  function HtmlI() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlI);
    return _callSuper(this, HtmlI, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlI, _HtmlType50);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlI);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlI, "tagName", 'i');
var HtmlIFrame = /*#__PURE__*/function (_HtmlType51) {
  function HtmlIFrame() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlIFrame);
    return _callSuper(this, HtmlIFrame, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlIFrame, _HtmlType51);
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
  function HtmlImg() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlImg);
    return _callSuper(this, HtmlImg, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlImg, _HtmlType52);
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
  function HtmlInput() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlInput);
    return _callSuper(this, HtmlInput, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlInput, _HtmlType53);
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
  function HtmlIns() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlIns);
    return _callSuper(this, HtmlIns, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlIns, _HtmlType54);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlIns);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlIns, "tagName", 'ins');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlIns, "props", {
  cite: attr('cite'),
  dateTime: attr('datetime')
});
var HtmlKbd = /*#__PURE__*/function (_HtmlType55) {
  function HtmlKbd() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlKbd);
    return _callSuper(this, HtmlKbd, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlKbd, _HtmlType55);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlKbd);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlKbd, "tagName", 'kbd');
var HtmlLabel = /*#__PURE__*/function (_HtmlType56) {
  function HtmlLabel() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlLabel);
    return _callSuper(this, HtmlLabel, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlLabel, _HtmlType56);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlLabel);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlLabel, "tagName", 'label');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlLabel, "props", {
  htmlFor: attr('for')
});
var HtmlLegend = /*#__PURE__*/function (_HtmlType57) {
  function HtmlLegend() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlLegend);
    return _callSuper(this, HtmlLegend, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlLegend, _HtmlType57);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlLegend);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlLegend, "tagName", 'legend');
var HtmlLi = /*#__PURE__*/function (_HtmlType58) {
  function HtmlLi() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlLi);
    return _callSuper(this, HtmlLi, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlLi, _HtmlType58);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlLi);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlLi, "tagName", 'li');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlLi, "props", {
  value: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType
});
var HtmlLink = /*#__PURE__*/function (_HtmlType59) {
  function HtmlLink() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlLink);
    return _callSuper(this, HtmlLink, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlLink, _HtmlType59);
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
  function HtmlMain() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlMain);
    return _callSuper(this, HtmlMain, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlMain, _HtmlType60);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlMain);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlMain, "tagName", 'main');
var HtmlMap = /*#__PURE__*/function (_HtmlType61) {
  function HtmlMap() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlMap);
    return _callSuper(this, HtmlMap, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlMap, _HtmlType61);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlMap);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlMap, "tagName", 'map');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlMap, "props", {
  name: attr('name')
});
var HtmlMark = /*#__PURE__*/function (_HtmlType62) {
  function HtmlMark() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlMark);
    return _callSuper(this, HtmlMark, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlMark, _HtmlType62);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlMark);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlMark, "tagName", 'mark');
var HtmlMenu = /*#__PURE__*/function (_HtmlType63) {
  function HtmlMenu() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlMenu);
    return _callSuper(this, HtmlMenu, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlMenu, _HtmlType63);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlMenu);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlMenu, "tagName", 'menu');
var HtmlMeta = /*#__PURE__*/function (_HtmlType64) {
  function HtmlMeta() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlMeta);
    return _callSuper(this, HtmlMeta, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlMeta, _HtmlType64);
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
  function HtmlMeter() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlMeter);
    return _callSuper(this, HtmlMeter, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlMeter, _HtmlType65);
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
  function HtmlNav() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlNav);
    return _callSuper(this, HtmlNav, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlNav, _HtmlType66);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlNav);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlNav, "tagName", 'nav');
var HtmlNoScript = /*#__PURE__*/function (_HtmlType67) {
  function HtmlNoScript() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlNoScript);
    return _callSuper(this, HtmlNoScript, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlNoScript, _HtmlType67);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlNoScript);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlNoScript, "tagName", 'noscript');
var HtmlObject = /*#__PURE__*/function (_HtmlType68) {
  function HtmlObject() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlObject);
    return _callSuper(this, HtmlObject, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlObject, _HtmlType68);
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
  function HtmlOl() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlOl);
    return _callSuper(this, HtmlOl, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlOl, _HtmlType69);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlOl);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlOl, "tagName", 'ol');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlOl, "props", {
  reversed: _boolean('reversed'),
  start: number('start'),
  type: attr('type')
});
var HtmlOptGroup = /*#__PURE__*/function (_HtmlType70) {
  function HtmlOptGroup() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlOptGroup);
    return _callSuper(this, HtmlOptGroup, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlOptGroup, _HtmlType70);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlOptGroup);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlOptGroup, "tagName", 'optgroup');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlOptGroup, "props", {
  disabled: _boolean('disabled'),
  label: attr('label')
});
var HtmlOption = /*#__PURE__*/function (_HtmlType71) {
  function HtmlOption() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlOption);
    return _callSuper(this, HtmlOption, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlOption, _HtmlType71);
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
  function HtmlOutput() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlOutput);
    return _callSuper(this, HtmlOutput, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlOutput, _HtmlType72);
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
  function HtmlP() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlP);
    return _callSuper(this, HtmlP, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlP, _HtmlType73);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlP);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlP, "tagName", 'p');
var HtmlParam = /*#__PURE__*/function (_HtmlType74) {
  function HtmlParam() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlParam);
    return _callSuper(this, HtmlParam, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlParam, _HtmlType74);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlParam);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlParam, "tagName", 'param');
var HtmlPicture = /*#__PURE__*/function (_HtmlType75) {
  function HtmlPicture() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlPicture);
    return _callSuper(this, HtmlPicture, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlPicture, _HtmlType75);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlPicture);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlPicture, "tagName", 'picture');
var HtmlPre = /*#__PURE__*/function (_HtmlType76) {
  function HtmlPre() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlPre);
    return _callSuper(this, HtmlPre, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlPre, _HtmlType76);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlPre);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlPre, "tagName", 'pre');
var HtmlProgress = /*#__PURE__*/function (_HtmlType77) {
  function HtmlProgress() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlProgress);
    return _callSuper(this, HtmlProgress, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlProgress, _HtmlType77);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlProgress);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlProgress, "tagName", 'progress');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlProgress, "props", {
  max: number('max'),
  value: _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType
});
var HtmlQ = /*#__PURE__*/function (_HtmlType78) {
  function HtmlQ() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlQ);
    return _callSuper(this, HtmlQ, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlQ, _HtmlType78);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlQ);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlQ, "tagName", 'q');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlQ, "props", {
  cite: attr('cite')
});
var HtmlRp = /*#__PURE__*/function (_HtmlType79) {
  function HtmlRp() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlRp);
    return _callSuper(this, HtmlRp, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlRp, _HtmlType79);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlRp);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlRp, "tagName", 'rp');
var HtmlRt = /*#__PURE__*/function (_HtmlType80) {
  function HtmlRt() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlRt);
    return _callSuper(this, HtmlRt, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlRt, _HtmlType80);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlRt);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlRt, "tagName", 'rt');
var HtmlRuby = /*#__PURE__*/function (_HtmlType81) {
  function HtmlRuby() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlRuby);
    return _callSuper(this, HtmlRuby, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlRuby, _HtmlType81);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlRuby);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlRuby, "tagName", 'ruby');
var HtmlS = /*#__PURE__*/function (_HtmlType82) {
  function HtmlS() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlS);
    return _callSuper(this, HtmlS, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlS, _HtmlType82);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlS);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlS, "tagName", 's');
var HtmlSamp = /*#__PURE__*/function (_HtmlType83) {
  function HtmlSamp() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlSamp);
    return _callSuper(this, HtmlSamp, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlSamp, _HtmlType83);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlSamp);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlSamp, "tagName", 'samp');
var HtmlScript = /*#__PURE__*/function (_HtmlType84) {
  function HtmlScript() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlScript);
    return _callSuper(this, HtmlScript, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlScript, _HtmlType84);
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
  function HtmlSection() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlSection);
    return _callSuper(this, HtmlSection, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlSection, _HtmlType85);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlSection);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlSection, "tagName", 'section');
var HtmlSelect = /*#__PURE__*/function (_HtmlType86) {
  function HtmlSelect() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlSelect);
    return _callSuper(this, HtmlSelect, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlSelect, _HtmlType86);
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
  function HtmlSmall() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlSmall);
    return _callSuper(this, HtmlSmall, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlSmall, _HtmlType87);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlSmall);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlSmall, "tagName", 'small');
var HtmlSource = /*#__PURE__*/function (_HtmlType88) {
  function HtmlSource() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlSource);
    return _callSuper(this, HtmlSource, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlSource, _HtmlType88);
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
  function HtmlSpan() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlSpan);
    return _callSuper(this, HtmlSpan, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlSpan, _HtmlType89);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlSpan);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlSpan, "tagName", 'span');
var HtmlStrong = /*#__PURE__*/function (_HtmlType90) {
  function HtmlStrong() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlStrong);
    return _callSuper(this, HtmlStrong, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlStrong, _HtmlType90);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlStrong);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlStrong, "tagName", 'strong');
var HtmlStyle = /*#__PURE__*/function (_HtmlType91) {
  function HtmlStyle() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlStyle);
    return _callSuper(this, HtmlStyle, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlStyle, _HtmlType91);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlStyle);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlStyle, "tagName", 'style');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlStyle, "props", {
  media: attr('media'),
  nonce: attr('nonce'),
  type: attr('type')
});
var HtmlSub = /*#__PURE__*/function (_HtmlType92) {
  function HtmlSub() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlSub);
    return _callSuper(this, HtmlSub, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlSub, _HtmlType92);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlSub);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlSub, "tagName", 'sub');
var HtmlSummary = /*#__PURE__*/function (_HtmlType93) {
  function HtmlSummary() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlSummary);
    return _callSuper(this, HtmlSummary, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlSummary, _HtmlType93);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlSummary);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlSummary, "tagName", 'summary');
var HtmlSup = /*#__PURE__*/function (_HtmlType94) {
  function HtmlSup() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlSup);
    return _callSuper(this, HtmlSup, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlSup, _HtmlType94);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlSup);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlSup, "tagName", 'sup');
var HtmlTBody = /*#__PURE__*/function (_HtmlType95) {
  function HtmlTBody() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlTBody);
    return _callSuper(this, HtmlTBody, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlTBody, _HtmlType95);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlTBody);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlTBody, "tagName", 'tbody');
var HtmlTFoot = /*#__PURE__*/function (_HtmlType96) {
  function HtmlTFoot() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlTFoot);
    return _callSuper(this, HtmlTFoot, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlTFoot, _HtmlType96);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlTFoot);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlTFoot, "tagName", 'tfoot');
var HtmlTHead = /*#__PURE__*/function (_HtmlType97) {
  function HtmlTHead() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlTHead);
    return _callSuper(this, HtmlTHead, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlTHead, _HtmlType97);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlTHead);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlTHead, "tagName", 'thead');
var HtmlTable = /*#__PURE__*/function (_HtmlType98) {
  function HtmlTable() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlTable);
    return _callSuper(this, HtmlTable, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlTable, _HtmlType98);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlTable);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlTable, "tagName", 'table');
var HtmlTd = /*#__PURE__*/function (_HtmlType99) {
  function HtmlTd() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlTd);
    return _callSuper(this, HtmlTd, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlTd, _HtmlType99);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlTd);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlTd, "tagName", 'td');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlTd, "props", {
  colSpan: number('colspan'),
  headers: attr('headers'),
  rowSpan: number('rowspan')
});
var HtmlTemplate = /*#__PURE__*/function (_HtmlType100) {
  function HtmlTemplate() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlTemplate);
    return _callSuper(this, HtmlTemplate, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlTemplate, _HtmlType100);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlTemplate);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlTemplate, "tagName", 'template');
var HtmlTextArea = /*#__PURE__*/function (_HtmlType101) {
  function HtmlTextArea() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlTextArea);
    return _callSuper(this, HtmlTextArea, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlTextArea, _HtmlType101);
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
  function HtmlTh() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlTh);
    return _callSuper(this, HtmlTh, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlTh, _HtmlType102);
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
  function HtmlTime() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlTime);
    return _callSuper(this, HtmlTime, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlTime, _HtmlType103);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlTime);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlTime, "tagName", 'time');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlTime, "props", {
  dateTime: attr('datetime')
});
var HtmlTitle = /*#__PURE__*/function (_HtmlType104) {
  function HtmlTitle() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlTitle);
    return _callSuper(this, HtmlTitle, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlTitle, _HtmlType104);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlTitle);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlTitle, "tagName", 'title');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlTitle, "props", {
  text: attr('text')
});
var HtmlTr = /*#__PURE__*/function (_HtmlType105) {
  function HtmlTr() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlTr);
    return _callSuper(this, HtmlTr, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlTr, _HtmlType105);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlTr);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlTr, "tagName", 'tr');
var HtmlTrack = /*#__PURE__*/function (_HtmlType106) {
  function HtmlTrack() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlTrack);
    return _callSuper(this, HtmlTrack, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlTrack, _HtmlType106);
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
  function HtmlU() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlU);
    return _callSuper(this, HtmlU, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlU, _HtmlType107);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlU);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlU, "tagName", 'u');
var HtmlUl = /*#__PURE__*/function (_HtmlType108) {
  function HtmlUl() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlUl);
    return _callSuper(this, HtmlUl, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlUl, _HtmlType108);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlUl);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlUl, "tagName", 'ul');
var HtmlVar = /*#__PURE__*/function (_HtmlType109) {
  function HtmlVar() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlVar);
    return _callSuper(this, HtmlVar, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlVar, _HtmlType109);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlVar);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlVar, "tagName", 'var');
var HtmlVideo = /*#__PURE__*/function (_HtmlType110) {
  function HtmlVideo() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlVideo);
    return _callSuper(this, HtmlVideo, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlVideo, _HtmlType110);
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
  function HtmlWbr() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlWbr);
    return _callSuper(this, HtmlWbr, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlWbr, _HtmlType111);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlWbr);
}(_HtmlType_js__WEBPACK_IMPORTED_MODULE_9__.HtmlType);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(HtmlWbr, "tagName", 'wbr');

/***/ }),
/* 48 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HtmlType: () => (/* binding */ HtmlType)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var _BooleanType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);
/* harmony import */ var _ElemType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19);
/* harmony import */ var _RoleType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13);






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _callSuper(_this, derived, args) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e) {
      return false;
    }
  }
  derived = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(derived);
  return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_this).constructor) : derived.apply(_this, args));
}




/**
 * @abstract
 */
var HtmlType = /*#__PURE__*/function (_ElemType) {
  function HtmlType() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HtmlType);
    return _callSuper(this, HtmlType, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HtmlType, _ElemType);
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
/* harmony export */   AriaType: () => (/* reexport safe */ _lib_AriaType_js__WEBPACK_IMPORTED_MODULE_1__.AriaType),
/* harmony export */   AttrType: () => (/* reexport safe */ _lib_AttrType_js__WEBPACK_IMPORTED_MODULE_2__.AttrType),
/* harmony export */   Attributes: () => (/* reexport safe */ _lib_Attributes_js__WEBPACK_IMPORTED_MODULE_3__.Attributes),
/* harmony export */   BooleanType: () => (/* reexport safe */ _lib_BooleanType_js__WEBPACK_IMPORTED_MODULE_4__.BooleanType),
/* harmony export */   Class: () => (/* reexport safe */ _lib_Class_js__WEBPACK_IMPORTED_MODULE_5__.Class),
/* harmony export */   ClassList: () => (/* reexport safe */ _lib_ClassList_js__WEBPACK_IMPORTED_MODULE_6__.ClassList),
/* harmony export */   Context: () => (/* reexport safe */ _lib_Context_js__WEBPACK_IMPORTED_MODULE_7__.Context),
/* harmony export */   Dataset: () => (/* reexport safe */ _lib_Dataset_js__WEBPACK_IMPORTED_MODULE_8__.Dataset),
/* harmony export */   ElemType: () => (/* reexport safe */ _lib_ElemType_js__WEBPACK_IMPORTED_MODULE_9__.ElemType),
/* harmony export */   EventType: () => (/* reexport safe */ _lib_EventType_js__WEBPACK_IMPORTED_MODULE_10__.EventType),
/* harmony export */   HtmlA: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlA),
/* harmony export */   HtmlAbbr: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlAbbr),
/* harmony export */   HtmlAddress: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlAddress),
/* harmony export */   HtmlArea: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlArea),
/* harmony export */   HtmlArticle: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlArticle),
/* harmony export */   HtmlAside: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlAside),
/* harmony export */   HtmlAudio: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlAudio),
/* harmony export */   HtmlB: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlB),
/* harmony export */   HtmlBase: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlBase),
/* harmony export */   HtmlBdi: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlBdi),
/* harmony export */   HtmlBdo: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlBdo),
/* harmony export */   HtmlBlockQuote: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlBlockQuote),
/* harmony export */   HtmlBody: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlBody),
/* harmony export */   HtmlBr: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlBr),
/* harmony export */   HtmlButton: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlButton),
/* harmony export */   HtmlCanvas: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlCanvas),
/* harmony export */   HtmlCaption: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlCaption),
/* harmony export */   HtmlCite: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlCite),
/* harmony export */   HtmlCode: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlCode),
/* harmony export */   HtmlCol: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlCol),
/* harmony export */   HtmlColGroup: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlColGroup),
/* harmony export */   HtmlData: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlData),
/* harmony export */   HtmlDataList: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlDataList),
/* harmony export */   HtmlDd: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlDd),
/* harmony export */   HtmlDel: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlDel),
/* harmony export */   HtmlDetails: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlDetails),
/* harmony export */   HtmlDfn: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlDfn),
/* harmony export */   HtmlDialog: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlDialog),
/* harmony export */   HtmlDiv: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlDiv),
/* harmony export */   HtmlDl: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlDl),
/* harmony export */   HtmlDt: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlDt),
/* harmony export */   HtmlEm: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlEm),
/* harmony export */   HtmlEmbed: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlEmbed),
/* harmony export */   HtmlFieldSet: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlFieldSet),
/* harmony export */   HtmlFigCaption: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlFigCaption),
/* harmony export */   HtmlFigure: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlFigure),
/* harmony export */   HtmlFooter: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlFooter),
/* harmony export */   HtmlForm: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlForm),
/* harmony export */   HtmlH1: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlH1),
/* harmony export */   HtmlH2: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlH2),
/* harmony export */   HtmlH3: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlH3),
/* harmony export */   HtmlH4: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlH4),
/* harmony export */   HtmlH5: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlH5),
/* harmony export */   HtmlH6: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlH6),
/* harmony export */   HtmlHGroup: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlHGroup),
/* harmony export */   HtmlHead: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlHead),
/* harmony export */   HtmlHeader: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlHeader),
/* harmony export */   HtmlHr: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlHr),
/* harmony export */   HtmlHtml: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlHtml),
/* harmony export */   HtmlI: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlI),
/* harmony export */   HtmlIFrame: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlIFrame),
/* harmony export */   HtmlImg: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlImg),
/* harmony export */   HtmlInput: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlInput),
/* harmony export */   HtmlIns: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlIns),
/* harmony export */   HtmlKbd: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlKbd),
/* harmony export */   HtmlLabel: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlLabel),
/* harmony export */   HtmlLegend: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlLegend),
/* harmony export */   HtmlLi: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlLi),
/* harmony export */   HtmlLink: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlLink),
/* harmony export */   HtmlMain: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlMain),
/* harmony export */   HtmlMap: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlMap),
/* harmony export */   HtmlMark: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlMark),
/* harmony export */   HtmlMenu: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlMenu),
/* harmony export */   HtmlMeta: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlMeta),
/* harmony export */   HtmlMeter: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlMeter),
/* harmony export */   HtmlNav: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlNav),
/* harmony export */   HtmlNoScript: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlNoScript),
/* harmony export */   HtmlObject: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlObject),
/* harmony export */   HtmlOl: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlOl),
/* harmony export */   HtmlOptGroup: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlOptGroup),
/* harmony export */   HtmlOption: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlOption),
/* harmony export */   HtmlOutput: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlOutput),
/* harmony export */   HtmlP: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlP),
/* harmony export */   HtmlParam: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlParam),
/* harmony export */   HtmlPicture: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlPicture),
/* harmony export */   HtmlPre: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlPre),
/* harmony export */   HtmlProgress: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlProgress),
/* harmony export */   HtmlQ: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlQ),
/* harmony export */   HtmlRp: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlRp),
/* harmony export */   HtmlRt: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlRt),
/* harmony export */   HtmlRuby: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlRuby),
/* harmony export */   HtmlS: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlS),
/* harmony export */   HtmlSamp: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlSamp),
/* harmony export */   HtmlScript: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlScript),
/* harmony export */   HtmlSection: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlSection),
/* harmony export */   HtmlSelect: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlSelect),
/* harmony export */   HtmlSmall: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlSmall),
/* harmony export */   HtmlSource: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlSource),
/* harmony export */   HtmlSpan: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlSpan),
/* harmony export */   HtmlStrong: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlStrong),
/* harmony export */   HtmlStyle: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlStyle),
/* harmony export */   HtmlSub: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlSub),
/* harmony export */   HtmlSummary: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlSummary),
/* harmony export */   HtmlSup: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlSup),
/* harmony export */   HtmlTBody: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlTBody),
/* harmony export */   HtmlTFoot: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlTFoot),
/* harmony export */   HtmlTHead: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlTHead),
/* harmony export */   HtmlTable: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlTable),
/* harmony export */   HtmlTd: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlTd),
/* harmony export */   HtmlTemplate: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlTemplate),
/* harmony export */   HtmlTextArea: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlTextArea),
/* harmony export */   HtmlTh: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlTh),
/* harmony export */   HtmlTime: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlTime),
/* harmony export */   HtmlTitle: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlTitle),
/* harmony export */   HtmlTr: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlTr),
/* harmony export */   HtmlTrack: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlTrack),
/* harmony export */   HtmlType: () => (/* reexport safe */ _lib_HtmlType_js__WEBPACK_IMPORTED_MODULE_12__.HtmlType),
/* harmony export */   HtmlU: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlU),
/* harmony export */   HtmlUl: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlUl),
/* harmony export */   HtmlVar: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlVar),
/* harmony export */   HtmlVideo: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlVideo),
/* harmony export */   HtmlWbr: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlWbr),
/* harmony export */   Id: () => (/* reexport safe */ _lib_Id_js__WEBPACK_IMPORTED_MODULE_13__.Id),
/* harmony export */   InnerHTML: () => (/* reexport safe */ _lib_InnerHTML_js__WEBPACK_IMPORTED_MODULE_14__.InnerHTML),
/* harmony export */   InnerText: () => (/* reexport safe */ _lib_InnerText_js__WEBPACK_IMPORTED_MODULE_15__.InnerText),
/* harmony export */   NumberType: () => (/* reexport safe */ _lib_NumberType_js__WEBPACK_IMPORTED_MODULE_16__.NumberType),
/* harmony export */   PropType: () => (/* reexport safe */ _lib_PropType_js__WEBPACK_IMPORTED_MODULE_17__.PropType),
/* harmony export */   RoleAlert: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleAlert),
/* harmony export */   RoleAlertDialog: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleAlertDialog),
/* harmony export */   RoleApplication: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleApplication),
/* harmony export */   RoleArticle: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleArticle),
/* harmony export */   RoleBanner: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleBanner),
/* harmony export */   RoleBlockQuote: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleBlockQuote),
/* harmony export */   RoleButton: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleButton),
/* harmony export */   RoleCaption: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleCaption),
/* harmony export */   RoleCell: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleCell),
/* harmony export */   RoleCheckBox: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleCheckBox),
/* harmony export */   RoleCode: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleCode),
/* harmony export */   RoleColumnHeader: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleColumnHeader),
/* harmony export */   RoleComboBox: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleComboBox),
/* harmony export */   RoleComplementary: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleComplementary),
/* harmony export */   RoleContentInfo: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleContentInfo),
/* harmony export */   RoleDefinition: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleDefinition),
/* harmony export */   RoleDeletion: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleDeletion),
/* harmony export */   RoleDialog: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleDialog),
/* harmony export */   RoleDirectory: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleDirectory),
/* harmony export */   RoleDocument: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleDocument),
/* harmony export */   RoleEmphasis: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleEmphasis),
/* harmony export */   RoleFeed: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleFeed),
/* harmony export */   RoleFigure: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleFigure),
/* harmony export */   RoleForm: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleForm),
/* harmony export */   RoleGeneric: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleGeneric),
/* harmony export */   RoleGrid: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleGrid),
/* harmony export */   RoleGridCell: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleGridCell),
/* harmony export */   RoleGroup: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleGroup),
/* harmony export */   RoleHeading: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleHeading),
/* harmony export */   RoleImg: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleImg),
/* harmony export */   RoleInsertion: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleInsertion),
/* harmony export */   RoleLink: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleLink),
/* harmony export */   RoleList: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleList),
/* harmony export */   RoleListBox: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleListBox),
/* harmony export */   RoleListItem: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleListItem),
/* harmony export */   RoleLog: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleLog),
/* harmony export */   RoleMain: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleMain),
/* harmony export */   RoleMarquee: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleMarquee),
/* harmony export */   RoleMath: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleMath),
/* harmony export */   RoleMenu: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleMenu),
/* harmony export */   RoleMenuBar: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleMenuBar),
/* harmony export */   RoleMenuItem: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleMenuItem),
/* harmony export */   RoleMenuItemCheckBox: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleMenuItemCheckBox),
/* harmony export */   RoleMenuItemRadio: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleMenuItemRadio),
/* harmony export */   RoleMeter: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleMeter),
/* harmony export */   RoleNavigation: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleNavigation),
/* harmony export */   RoleNone: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleNone),
/* harmony export */   RoleNote: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleNote),
/* harmony export */   RoleOption: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleOption),
/* harmony export */   RoleParagraph: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleParagraph),
/* harmony export */   RolePresentation: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RolePresentation),
/* harmony export */   RoleProgressBar: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleProgressBar),
/* harmony export */   RoleRadio: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleRadio),
/* harmony export */   RoleRadioGroup: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleRadioGroup),
/* harmony export */   RoleRegion: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleRegion),
/* harmony export */   RoleRow: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleRow),
/* harmony export */   RoleRowGroup: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleRowGroup),
/* harmony export */   RoleRowHeader: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleRowHeader),
/* harmony export */   RoleScrollBar: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleScrollBar),
/* harmony export */   RoleSearch: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleSearch),
/* harmony export */   RoleSearchBox: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleSearchBox),
/* harmony export */   RoleSectionHead: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleSectionHead),
/* harmony export */   RoleSeparator: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleSeparator),
/* harmony export */   RoleSlider: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleSlider),
/* harmony export */   RoleSpinButton: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleSpinButton),
/* harmony export */   RoleStatus: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleStatus),
/* harmony export */   RoleStrong: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleStrong),
/* harmony export */   RoleSubscript: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleSubscript),
/* harmony export */   RoleSuperscript: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleSuperscript),
/* harmony export */   RoleSwitch: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleSwitch),
/* harmony export */   RoleTab: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleTab),
/* harmony export */   RoleTabList: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleTabList),
/* harmony export */   RoleTabPanel: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleTabPanel),
/* harmony export */   RoleTable: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleTable),
/* harmony export */   RoleTerm: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleTerm),
/* harmony export */   RoleTextBox: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleTextBox),
/* harmony export */   RoleTime: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleTime),
/* harmony export */   RoleTimer: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleTimer),
/* harmony export */   RoleToolBar: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleToolBar),
/* harmony export */   RoleToolTip: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleToolTip),
/* harmony export */   RoleTree: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleTree),
/* harmony export */   RoleTreeGrid: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleTreeGrid),
/* harmony export */   RoleTreeItem: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleTreeItem),
/* harmony export */   RoleType: () => (/* reexport safe */ _lib_RoleType_js__WEBPACK_IMPORTED_MODULE_18__.RoleType),
/* harmony export */   Style: () => (/* reexport safe */ _lib_Style_js__WEBPACK_IMPORTED_MODULE_19__.Style),
/* harmony export */   TextType: () => (/* reexport safe */ _lib_TextType_js__WEBPACK_IMPORTED_MODULE_20__.TextType),
/* harmony export */   TokenType: () => (/* reexport safe */ _lib_TokenType_js__WEBPACK_IMPORTED_MODULE_21__.TokenType)
/* harmony export */ });
/* harmony import */ var _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _lib_AriaType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony import */ var _lib_AttrType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _lib_Attributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33);
/* harmony import */ var _lib_BooleanType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony import */ var _lib_Class_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35);
/* harmony import */ var _lib_ClassList_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36);
/* harmony import */ var _lib_Context_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44);
/* harmony import */ var _lib_Dataset_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37);
/* harmony import */ var _lib_ElemType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19);
/* harmony import */ var _lib_EventType_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38);
/* harmony import */ var _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(47);
/* harmony import */ var _lib_HtmlType_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(48);
/* harmony import */ var _lib_Id_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(39);
/* harmony import */ var _lib_InnerHTML_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(40);
/* harmony import */ var _lib_InnerText_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(43);
/* harmony import */ var _lib_NumberType_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(18);
/* harmony import */ var _lib_PropType_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(34);
/* harmony import */ var _lib_RoleType_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(13);
/* harmony import */ var _lib_Style_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(41);
/* harmony import */ var _lib_TextType_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(42);
/* harmony import */ var _lib_TokenType_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(32);
/**
 * @module htmlmodule
 * @author Vyacheslav Aristov <vv.aristov@gmail.com>
 */






















})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});