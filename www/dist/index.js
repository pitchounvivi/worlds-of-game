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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RegisterFormComponent\", function() { return RegisterFormComponent; });\n/* harmony import */ var _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/input/input.component */ \"./src/shared/components/input/input.component.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar RegisterFormComponent =\n/*#__PURE__*/\nfunction () {\n  function RegisterFormComponent(user) {\n    _classCallCheck(this, RegisterFormComponent);\n\n    this.user = user;\n    this.mail = new _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_0__[\"InputComponent\"]({\n      type: \"mail\",\n      placeholder: \"Email\",\n      value: user.login\n    });\n    this.password = new _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_0__[\"InputComponent\"]({\n      type: \"password\",\n      placeholder: \"Password\",\n      value: user.password\n    });\n  }\n\n  _createClass(RegisterFormComponent, [{\n    key: \"display\",\n    value: function display(parent) {\n      var container = document.createElement(\"register-form\");\n      var form = document.createElement(\"form\"); //const button = document.createElement(\"button\");\n\n      form.setAttribute(\"method\", \"post\");\n      form.setAttribute(\"action\", \"\"); //button.setAttribute(\"type\", \"submit\");\n\n      container.appendChild(form); //form.appendChild(button);\n      //button.appendChild(document.createTextNode(\"Create Account\"));\n\n      this.mail.display(form);\n      this.password.display(form);\n      parent.appendChild(container);\n    }\n  }]);\n\n  return RegisterFormComponent;\n}();\n\n//# sourceURL=webpack:///./src/app/register/register-form/register-form.component.js?");

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

/***/ "./src/shared/components/input/input.component.js":
/*!********************************************************!*\
  !*** ./src/shared/components/input/input.component.js ***!
  \********************************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InputComponent\", function() { return InputComponent; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar InputComponent =\n/*#__PURE__*/\nfunction () {\n  function InputComponent(attributes) {\n    _classCallCheck(this, InputComponent);\n\n    this.attributes = attributes;\n  }\n\n  _createClass(InputComponent, [{\n    key: \"display\",\n    value: function display(parent) {\n      var input = document.createElement(\"input\");\n\n      for (var key in this.attributes) {\n        if (this.attributes.hasOwnProperty(key)) {\n          input.setAttribute(key, this.attributes[key]);\n        }\n      }\n\n      parent.appendChild(input);\n    }\n  }]);\n\n  return InputComponent;\n}();\n\n//# sourceURL=webpack:///./src/shared/components/input/input.component.js?");

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