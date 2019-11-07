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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/login/login-form/login-form.component.js":
/*!**********************************************************!*\
  !*** ./src/app/login/login-form/login-form.component.js ***!
  \**********************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoginFormComponent\", function() { return LoginFormComponent; });\n/* harmony import */ var _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/input/input.component */ \"./src/shared/components/input/input.component.js\");\n/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/button/button.component */ \"./src/shared/components/button/button.component.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar LoginFormComponent =\n/*#__PURE__*/\nfunction () {\n  function LoginFormComponent() {\n    _classCallCheck(this, LoginFormComponent);\n\n    this.loginInput = new _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_0__[\"InputComponent\"]({\n      id: \"login\",\n      type: \"mail\",\n      placeholder: \"Your address mail\",\n      value: \"user\"\n    });\n    this.passwordInput = new _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_0__[\"InputComponent\"]({\n      id: \"password\",\n      type: \"password\",\n      placeholder: \"Your password\",\n      value: \"user\"\n    });\n    this.goButton = new _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_1__[\"ButtonComponent\"](\"Go\", {\n      type: \"submit\",\n      value: \"go\"\n    });\n    this.registerButton = new _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_1__[\"ButtonComponent\"](\"Register\", {\n      type: \"submit\",\n      value: \"register\"\n    });\n  }\n\n  _createClass(LoginFormComponent, [{\n    key: \"display\",\n    value: function display(parent) {\n      var element = document.createElement(\"login-form\");\n      this.form = document.createElement(\"form\");\n      var loginZone = document.createElement(\"div\");\n      var passwordZone = document.createElement(\"div\");\n      this.form.setAttribute(\"method\", \"post\");\n      this.form.setAttribute(\"action\", \"\");\n      element.appendChild(this.form);\n      this.form.appendChild(loginZone);\n      this.loginInput.display(this.form);\n      this.form.appendChild(passwordZone);\n      this.passwordInput.display(passwordZone);\n      this.goButton.display(this.form);\n      this.registerButton.display(this.form);\n      parent.appendChild(element);\n    }\n  }]);\n\n  return LoginFormComponent;\n}();\n\n//# sourceURL=webpack:///./src/app/login/login-form/login-form.component.js?");

/***/ }),

/***/ "./src/app/login/login.component.js":
/*!******************************************!*\
  !*** ./src/app/login/login.component.js ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoginComponent\", function() { return LoginComponent; });\n/* harmony import */ var _shared_components_title_title_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/title/title.component */ \"./src/shared/components/title/title.component.js\");\n/* harmony import */ var _shared_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/logo/logo.component */ \"./src/shared/components/logo/logo.component.js\");\n/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-form/login-form.component */ \"./src/app/login/login-form/login-form.component.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar LoginComponent =\n/*#__PURE__*/\nfunction () {\n  function LoginComponent() {\n    _classCallCheck(this, LoginComponent);\n\n    // this.registerName = \"?\";\n    // this.user = \"?\";\n    this.logo = new _shared_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_1__[\"LogoComponent\"](\"../www/assets/images/logo3.png\", \"Le LOGO de l'application\");\n    this.title = new _shared_components_title_title_component__WEBPACK_IMPORTED_MODULE_0__[\"TitleComponent\"](\"Game session / Worlds of Game\");\n    this.loginForm = new _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__[\"LoginFormComponent\"]();\n  }\n\n  _createClass(LoginComponent, [{\n    key: \"display\",\n    value: function display(parent) {\n      this.logo.display(parent);\n      this.title.display(parent);\n      this.loginForm.display(parent);\n      document.body.appendChild(parent);\n    }\n  }]);\n\n  return LoginComponent;\n}();\n\n//# sourceURL=webpack:///./src/app/login/login.component.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/login/login.component */ \"./src/app/login/login.component.js\");\n// import { SearchGameComponent } from \"./app/search-game/search-game.component\";\n //import { RegisterComponent } from \"./app/register/register.component\";\n\nvar parent = document.createElement(\"div\"); // let loginComponent = new LoginComponent();\n// loginComponent.src = \"assets/images/logo/logo.png\";\n// loginComponent.alt = \"Le LOGO de l'application\";\n// loginComponent.text = \"Game Session / Worlds of Game\";\n// loginComponent.loginName = \"Go\";\n// loginComponent.registerName = \"Register\";\n//loginComponent.user = user;\n\nvar loginComponent = new _app_login_login_component__WEBPACK_IMPORTED_MODULE_0__[\"LoginComponent\"]();\nloginComponent.display(parent); // const registerComponent = new RegisterComponent();\n// registerComponent.display(parent);\n// const searchGameComponent = new  SearchGameComponent(user);\n// searchGameComponent.display(parent);\n\ndocument.body.appendChild(parent);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/shared/components/button/button.component.js":
/*!**********************************************************!*\
  !*** ./src/shared/components/button/button.component.js ***!
  \**********************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ButtonComponent\", function() { return ButtonComponent; });\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component */ \"./src/shared/components/component.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\nvar ButtonComponent =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(ButtonComponent, _Component);\n\n  function ButtonComponent(text, attributes) {\n    var _this;\n\n    _classCallCheck(this, ButtonComponent);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(ButtonComponent).call(this));\n    _this.text = text;\n    _this.attributes = attributes;\n    return _this;\n  }\n\n  _createClass(ButtonComponent, [{\n    key: \"display\",\n    value: function display(parent) {\n      this.button = document.createElement(\"button\");\n      var buttonText = document.createTextNode(this.text);\n      this.setAttributesTo(this.button, this.attributes);\n      this.button.appendChild(buttonText);\n      parent.appendChild(this.button);\n    }\n  }, {\n    key: \"hide\",\n    value: function hide() {\n      this.button.parentNode.removeChild(this.button);\n    }\n  }]);\n\n  return ButtonComponent;\n}(_component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n//# sourceURL=webpack:///./src/shared/components/button/button.component.js?");

/***/ }),

/***/ "./src/shared/components/component.js":
/*!********************************************!*\
  !*** ./src/shared/components/component.js ***!
  \********************************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Component =\n/*#__PURE__*/\nfunction () {\n  function Component() {\n    _classCallCheck(this, Component);\n  }\n\n  _createClass(Component, [{\n    key: \"setAttributesTo\",\n    value: function setAttributesTo(element, attributes) {\n      for (var key in attributes) {\n        element.setAttribute(key, attributes[key]);\n      }\n    }\n  }]);\n\n  return Component;\n}();\n\n//# sourceURL=webpack:///./src/shared/components/component.js?");

/***/ }),

/***/ "./src/shared/components/input/input.component.js":
/*!********************************************************!*\
  !*** ./src/shared/components/input/input.component.js ***!
  \********************************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InputComponent\", function() { return InputComponent; });\n/* harmony import */ var _label_label_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../label/label.component */ \"./src/shared/components/label/label.component.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar InputComponent =\n/*#__PURE__*/\nfunction () {\n  function InputComponent(attributes) {\n    _classCallCheck(this, InputComponent);\n\n    this.attributes = attributes;\n    this.label = null;\n    this.input = null;\n\n    if (attributes.label) {\n      this.label = new _label_label_component__WEBPACK_IMPORTED_MODULE_0__[\"LabelComponent\"](attributes.label, attributes.label.value);\n    }\n  }\n\n  _createClass(InputComponent, [{\n    key: \"display\",\n    value: function display(parent) {\n      this.input = document.createElement(\"input\");\n\n      for (var key in this.attributes) {\n        if (key === \"label\") {\n          continue; //continue permet de sauter la ligne et passe à la suite des arguments\n        }\n\n        if (this.attributes.hasOwnProperty(key)) {\n          this.input.setAttribute(key, this.attributes[key]);\n        }\n      }\n\n      if (this.label) {\n        this.label.display(parent);\n      }\n\n      parent.appendChild(this.input);\n    }\n  }, {\n    key: \"value\",\n    value: function value() {\n      return this.input.value;\n    }\n  }]);\n\n  return InputComponent;\n}();\n\n//# sourceURL=webpack:///./src/shared/components/input/input.component.js?");

/***/ }),

/***/ "./src/shared/components/label/label.component.js":
/*!********************************************************!*\
  !*** ./src/shared/components/label/label.component.js ***!
  \********************************************************/
/*! exports provided: LabelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LabelComponent\", function() { return LabelComponent; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar LabelComponent =\n/*#__PURE__*/\nfunction () {\n  function LabelComponent(text) {\n    _classCallCheck(this, LabelComponent);\n\n    this.text = text;\n  }\n\n  _createClass(LabelComponent, [{\n    key: \"display\",\n    value: function display(parent) {\n      var label = document.createElement(\"label\");\n      label.appendChild(document.createTextNode(this.text));\n      parent.appendChild(label);\n    }\n  }]);\n\n  return LabelComponent;\n}();\n\n//# sourceURL=webpack:///./src/shared/components/label/label.component.js?");

/***/ }),

/***/ "./src/shared/components/logo/logo.component.js":
/*!******************************************************!*\
  !*** ./src/shared/components/logo/logo.component.js ***!
  \******************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LogoComponent\", function() { return LogoComponent; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar LogoComponent =\n/*#__PURE__*/\nfunction () {\n  function LogoComponent(src, alt) {\n    _classCallCheck(this, LogoComponent);\n\n    this.src = src;\n    this.alt = alt;\n  }\n\n  _createClass(LogoComponent, [{\n    key: \"display\",\n    value: function display(parent) {\n      var containerElement = document.createElement(\"div\");\n      var logoElement = document.createElement(\"img\");\n      logoElement.setAttribute(\"src\", this.src);\n      logoElement.setAttribute(\"alt\", this.alt);\n      containerElement.appendChild(logoElement);\n      parent.appendChild(containerElement);\n    }\n  }]);\n\n  return LogoComponent;\n}();\n\n//# sourceURL=webpack:///./src/shared/components/logo/logo.component.js?");

/***/ }),

/***/ "./src/shared/components/title/title.component.js":
/*!********************************************************!*\
  !*** ./src/shared/components/title/title.component.js ***!
  \********************************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TitleComponent\", function() { return TitleComponent; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar TitleComponent =\n/*#__PURE__*/\nfunction () {\n  function TitleComponent(text) {\n    _classCallCheck(this, TitleComponent);\n\n    this.text = text;\n  }\n\n  _createClass(TitleComponent, [{\n    key: \"display\",\n    value: function display(parent) {\n      var containerElement = document.createElement(\"div\");\n      var titleElement = document.createElement(\"h1\");\n      var titleText = document.createTextNode(this.text);\n      titleElement.appendChild(titleText);\n      containerElement.appendChild(titleElement);\n      parent.appendChild(containerElement);\n    }\n  }]);\n\n  return TitleComponent;\n}();\n\n//# sourceURL=webpack:///./src/shared/components/title/title.component.js?");

/***/ })

/******/ });