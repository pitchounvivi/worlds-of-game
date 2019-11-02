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

/***/ "./src/app/register/register-form/register-form.component.js":
/*!*******************************************************************!*\
  !*** ./src/app/register/register-form/register-form.component.js ***!
  \*******************************************************************/
/*! exports provided: RegisterFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RegisterFormComponent\", function() { return RegisterFormComponent; });\n/* harmony import */ var _shared_components_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/component */ \"./src/shared/components/component.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\nvar RegisterFormComponent =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(RegisterFormComponent, _Component);\n\n  function RegisterFormComponent(user) {\n    var _this;\n\n    _classCallCheck(this, RegisterFormComponent);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(RegisterFormComponent).call(this));\n    _this.user = user;\n    return _this;\n  }\n\n  _createClass(RegisterFormComponent, [{\n    key: \"display\",\n    value: function display(parent) {\n      var containerElement = document.createElement(\"div\");\n      var formElement = document.createElement(\"form\");\n      var kindZone = document.createElement(\"div\");\n      var kindMrLabel = document.createElement(\"label\");\n      var kindMrInput = document.createElement(\"input\");\n      var kindMmeLabel = document.createElement(\"label\");\n      var kindMmeInput = document.createElement(\"input\");\n      var surnameZone = document.createElement(\"div\");\n      var surnameLabel = document.createElement(\"label\");\n      var surnameInput = document.createElement(\"input\");\n      var firstnameZone = document.createElement(\"div\");\n      var firstnameLabel = document.createElement(\"label\");\n      var firstnameInput = document.createElement(\"input\");\n      var lastnameZone = document.createElement(\"div\");\n      var lastnameLabel = document.createElement(\"label\");\n      var lastnameInput = document.createElement(\"input\");\n      var mailZone = document.createElement(\"div\");\n      var mailLabel = document.createElement(\"label\");\n      var mailInput = document.createElement(\"input\");\n      var phoneZone = document.createElement(\"div\");\n      var phoneLabel = document.createElement(\"label\");\n      var phoneInput = document.createElement(\"input\");\n      var addressZone = document.createElement(\"div\");\n      var addressLabel = document.createElement(\"label\");\n      var addressInput = document.createElement(\"input\");\n      var cityZone = document.createElement(\"div\");\n      var cityLabel = document.createElement(\"label\");\n      var cityInput = document.createElement(\"input\");\n      var zipCodeZone = document.createElement(\"div\");\n      var zipCodeLabel = document.createElement(\"label\");\n      var zipCodeInput = document.createElement(\"input\");\n      var passwordZone = document.createElement(\"div\");\n      var passwordLabel = document.createElement(\"label\");\n      var passwordInput = document.createElement(\"input\");\n      var buttonZone = document.createElement(\"div\");\n      var clearButton = document.createElement(\"button\");\n      var saveButton = document.createElement(\"button\");\n      this.setAttributesTo(formElement, {\n        method: \"post\",\n        action: \"\"\n      });\n      this.setAttributesTo(kindMrInput, {\n        type: \"radio\",\n        name: \"kind\",\n        value: \"Mr\"\n      });\n      this.setAttributesTo(kindMmeInput, {\n        type: \"radio\",\n        name: \"kind\",\n        value: \"Mme\"\n      });\n      this.setAttributesTo(surnameInput, {\n        type: \"text\",\n        placeholder: \"surname\",\n        value: this.user.surname\n      });\n      this.setAttributesTo(firstnameInput, {\n        type: \"text\",\n        placeholder: \"firstname\",\n        value: this.user.firstname\n      });\n      this.setAttributesTo(lastnameInput, {\n        type: \"text\",\n        placeholder: \"lastname\",\n        value: this.user.lastname\n      });\n      this.setAttributesTo(mailInput, {\n        type: \"mail\",\n        placeholder: \"email\",\n        value: this.user.mail\n      });\n      this.setAttributesTo(phoneInput, {\n        type: \"phone\",\n        placeholder: \"phone\",\n        value: this.user.phone\n      });\n      this.setAttributesTo(addressInput, {\n        type: \"text\",\n        placeholder: \"address\",\n        value: this.user.address\n      });\n      this.setAttributesTo(cityInput, {\n        type: \"text\",\n        placeholder: \"city\",\n        value: this.user.city\n      });\n      this.setAttributesTo(zipCodeInput, {\n        type: \"text\",\n        placeholder: \"Zip Code\",\n        value: this.user.zipCode\n      });\n      this.setAttributesTo(passwordInput, {\n        type: \"password\",\n        placeholder: \"password\",\n        value: this.user.password\n      });\n      this.setAttributesTo(clearButton, {\n        type: \"submit\",\n        name: \"clear\"\n      });\n      this.setAttributesTo(saveButton, {\n        type: \"submit\",\n        name: \"save\"\n      });\n      kindZone.appendChild(kindMrLabel.appendChild(document.createTextNode(\"Mr : \")));\n      kindZone.appendChild(kindMrInput);\n      kindZone.appendChild(kindMmeLabel.appendChild(document.createTextNode(\" Mme : \")));\n      kindZone.appendChild(kindMmeInput);\n      formElement.appendChild(kindZone);\n      surnameZone.appendChild(surnameLabel.appendChild(document.createTextNode(\"Surname : \")));\n      surnameZone.appendChild(surnameInput);\n      formElement.appendChild(surnameZone);\n      firstnameZone.appendChild(firstnameLabel.appendChild(document.createTextNode(\"Firstname : \")));\n      firstnameZone.appendChild(firstnameInput);\n      formElement.appendChild(firstnameZone);\n      lastnameZone.appendChild(lastnameLabel.appendChild(document.createTextNode(\"Lastname : \")));\n      lastnameZone.appendChild(lastnameInput);\n      formElement.appendChild(lastnameZone);\n      mailZone.appendChild(mailLabel.appendChild(document.createTextNode(\"Mail : \")));\n      mailZone.appendChild(mailInput);\n      formElement.appendChild(mailZone);\n      phoneZone.appendChild(phoneLabel.appendChild(document.createTextNode(\"Phone : \")));\n      phoneZone.appendChild(phoneInput);\n      formElement.appendChild(phoneZone);\n      addressZone.appendChild(addressLabel.appendChild(document.createTextNode(\"Address : \")));\n      addressZone.appendChild(addressInput);\n      formElement.appendChild(addressZone);\n      cityZone.appendChild(cityLabel.appendChild(document.createTextNode(\"City : \")));\n      cityZone.appendChild(cityInput);\n      formElement.appendChild(cityZone);\n      zipCodeZone.appendChild(zipCodeLabel.appendChild(document.createTextNode(\"Zip Code : \")));\n      zipCodeZone.appendChild(zipCodeInput);\n      formElement.appendChild(zipCodeZone);\n      passwordZone.appendChild(passwordLabel.appendChild(document.createTextNode(\"Password : \")));\n      passwordZone.appendChild(passwordInput);\n      formElement.appendChild(passwordZone);\n      clearButton.appendChild(document.createTextNode(\"Clear\"));\n      buttonZone.appendChild(clearButton);\n      saveButton.appendChild(document.createTextNode(\"Save\"));\n      buttonZone.appendChild(saveButton);\n      formElement.appendChild(buttonZone);\n      containerElement.appendChild(formElement);\n      parent.appendChild(containerElement);\n    }\n  }]);\n\n  return RegisterFormComponent;\n}(_shared_components_component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n//# sourceURL=webpack:///./src/app/register/register-form/register-form.component.js?");

/***/ }),

/***/ "./src/app/register/register.component.js":
/*!************************************************!*\
  !*** ./src/app/register/register.component.js ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RegisterComponent\", function() { return RegisterComponent; });\n/* harmony import */ var _shared_components_title_title_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/title/title.component */ \"./src/shared/components/title/title.component.js\");\n/* harmony import */ var _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-form/register-form.component */ \"./src/app/register/register-form/register-form.component.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar RegisterComponent =\n/*#__PURE__*/\nfunction () {\n  function RegisterComponent(user) {\n    _classCallCheck(this, RegisterComponent);\n\n    this.user = user;\n    this.title = new _shared_components_title_title_component__WEBPACK_IMPORTED_MODULE_0__[\"TitleComponent\"](\"Register\");\n    this.registerForm = new _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_1__[\"RegisterFormComponent\"](this.user);\n  }\n\n  _createClass(RegisterComponent, [{\n    key: \"display\",\n    value: function display() {\n      var parent = document.createElement(\"div\");\n      this.title.display(parent);\n      this.registerForm.display(parent);\n      document.body.appendChild(parent);\n    }\n  }]);\n\n  return RegisterComponent;\n}();\n\n//# sourceURL=webpack:///./src/app/register/register.component.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/models/user.model */ \"./src/shared/models/user.model.js\");\n/* harmony import */ var _app_register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/register/register.component */ \"./src/app/register/register.component.js\");\n //import { LoginComponent } from \"./app/login/login.component\";\n\n\nvar user = new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"User\"](\"John\", \"secret\");\nvar parent = document.createElement(\"div\"); // let loginComponent = new LoginComponent();\n// loginComponent.src = \"assets/images/logo/logo.png\";\n// loginComponent.alt = \"Le LOGO de l'application\";\n// loginComponent.text = \"Game Session / Worlds of Game\";\n// loginComponent.loginName = \"Go\";\n// loginComponent.registerName = \"Register\";\n// loginComponent.user = user;\n// loginComponent.display(parent);\n\nvar registerComponent = new _app_register_register_component__WEBPACK_IMPORTED_MODULE_1__[\"RegisterComponent\"](user);\nregisterComponent.display(parent);\ndocument.body.appendChild(parent);\nconsole.log(user);\n\n//# sourceURL=webpack:///./src/index.js?");

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

/***/ "./src/shared/components/title/title.component.js":
/*!********************************************************!*\
  !*** ./src/shared/components/title/title.component.js ***!
  \********************************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TitleComponent\", function() { return TitleComponent; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar TitleComponent =\n/*#__PURE__*/\nfunction () {\n  function TitleComponent(text) {\n    _classCallCheck(this, TitleComponent);\n\n    this.text = text;\n  }\n\n  _createClass(TitleComponent, [{\n    key: \"display\",\n    value: function display(parent) {\n      var containerElement = document.createElement(\"div\");\n      var titleElement = document.createElement(\"h1\");\n      var titleText = document.createTextNode(this.text);\n      titleElement.appendChild(titleText);\n      containerElement.appendChild(titleElement);\n      parent.appendChild(containerElement);\n    }\n  }]);\n\n  return TitleComponent;\n}();\n\n//# sourceURL=webpack:///./src/shared/components/title/title.component.js?");

/***/ }),

/***/ "./src/shared/models/user.model.js":
/*!*****************************************!*\
  !*** ./src/shared/models/user.model.js ***!
  \*****************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"User\", function() { return User; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar User = function User(login, password, surname, firstname, lastname, phone, address, city, zipCode) {\n  _classCallCheck(this, User);\n\n  this.surname = surname;\n  this.firstname = firstname;\n  this.lastname = lastname;\n  this.mail = login;\n  this.phone = phone;\n  this.address = address;\n  this.city = city;\n  this.zipCode = zipCode;\n  this.password = password;\n};\n\n//# sourceURL=webpack:///./src/shared/models/user.model.js?");

/***/ })

/******/ });