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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shared_component_logo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/component/logo.component */ \"./src/shared/component/logo.component.js\");\n/* harmony import */ var _shared_component_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/component/title.component */ \"./src/shared/component/title.component.js\");\n/* harmony import */ var _shared_component_register_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/component/register-button.component */ \"./src/shared/component/register-button.component.js\");\n/* harmony import */ var _shared_component_login_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/component/login-form.component */ \"./src/shared/component/login-form.component.js\");\n/* harmony import */ var _shared_models_user_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/models/user.models */ \"./src/shared/models/user.models.js\");\n\n\n\n\n\nvar user = new _shared_models_user_models__WEBPACK_IMPORTED_MODULE_4__[\"User\"](\"John\", \"secret\");\nvar parent = document.createElement(\"div\");\nnew _shared_component_logo_component__WEBPACK_IMPORTED_MODULE_0__[\"LogoComponent\"](parent);\nnew _shared_component_title_component__WEBPACK_IMPORTED_MODULE_1__[\"TitleComponent\"](parent, \"Game Session / Worlds of Game\");\nnew _shared_component_login_form_component__WEBPACK_IMPORTED_MODULE_3__[\"LoginFormComponent\"](parent, user);\nnew _shared_component_register_button_component__WEBPACK_IMPORTED_MODULE_2__[\"RegisterButtonComponent\"](parent, \"Register\");\ndocument.body.appendChild(parent);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/shared/component/login-form.component.js":
/*!******************************************************!*\
  !*** ./src/shared/component/login-form.component.js ***!
  \******************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoginFormComponent\", function() { return LoginFormComponent; });\n/* harmony import */ var _models_user_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.models */ \"./src/shared/models/user.models.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\nvar LoginFormComponent = function LoginFormComponent(parent, user) {\n  _classCallCheck(this, LoginFormComponent);\n\n  var setAttributesTo = function setAttributesTo(elem, attributes) {\n    for (var key in attributes) {\n      elem.setAttribute(key, attributes[key]);\n    }\n  };\n\n  var containerElement = document.createElement(\"div\");\n  var formElement = document.createElement(\"form\");\n  var emailElement = document.createElement(\"input\");\n  var passwordElement = document.createElement(\"input\");\n  var buttonElement = document.createElement(\"button\");\n  var buttonText = document.createTextNode(\"Go\");\n  setAttributesTo(formElement, {\n    method: \"post\",\n    action: \"\"\n  });\n  setAttributesTo(emailElement, {\n    type: \"mail\",\n    placeholder: \"email\",\n    value: user.login\n  });\n  setAttributesTo(passwordElement, {\n    type: \"password\",\n    placeholder: \"password\",\n    value: user.password\n  });\n  formElement.appendChild(emailElement);\n  formElement.appendChild(passwordElement);\n  buttonElement.appendChild(buttonText);\n  formElement.appendChild(buttonElement);\n  containerElement.appendChild(formElement);\n  parent.appendChild(containerElement);\n};\n\n//# sourceURL=webpack:///./src/shared/component/login-form.component.js?");

/***/ }),

/***/ "./src/shared/component/logo.component.js":
/*!************************************************!*\
  !*** ./src/shared/component/logo.component.js ***!
  \************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LogoComponent\", function() { return LogoComponent; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar LogoComponent = function LogoComponent(parent) {\n  _classCallCheck(this, LogoComponent);\n\n  var containerElement = document.createElement(\"div\");\n  var logoElement = document.createElement(\"img\");\n  logoElement.setAttribute(\"src\", \"images/logo/logo.png\");\n  logoElement.setAttribute(\"alt\", \"logo de l'application\");\n  containerElement.appendChild(logoElement);\n  parent.appendChild(containerElement);\n};\n\n//# sourceURL=webpack:///./src/shared/component/logo.component.js?");

/***/ }),

/***/ "./src/shared/component/register-button.component.js":
/*!***********************************************************!*\
  !*** ./src/shared/component/register-button.component.js ***!
  \***********************************************************/
/*! exports provided: RegisterButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RegisterButtonComponent\", function() { return RegisterButtonComponent; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar RegisterButtonComponent = function RegisterButtonComponent(parent, name) {\n  _classCallCheck(this, RegisterButtonComponent);\n\n  var containerElement = document.createElement(\"div\");\n  var registerButton = document.createElement(\"button\");\n  var registerButtonText = document.createTextNode(name);\n  var attributes = {\n    type: \"submit\",\n    value: registerButtonText\n  };\n\n  var setAttributesTo = function setAttributesTo(registerButton, attributes) {\n    for (var key in attributes) {\n      registerButton.setAttribute(key, attributes[key]);\n    }\n  };\n\n  registerButton.appendChild(registerButtonText);\n  containerElement.appendChild(registerButton);\n  parent.appendChild(containerElement);\n};\n\n//# sourceURL=webpack:///./src/shared/component/register-button.component.js?");

/***/ }),

/***/ "./src/shared/component/title.component.js":
/*!*************************************************!*\
  !*** ./src/shared/component/title.component.js ***!
  \*************************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TitleComponent\", function() { return TitleComponent; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar TitleComponent = function TitleComponent(parent, title) {\n  _classCallCheck(this, TitleComponent);\n\n  var containerElement = document.createElement(\"div\");\n  var titleElement = document.createElement(\"h1\");\n  var titleText = document.createTextNode(title);\n  titleElement.appendChild(titleText);\n  containerElement.appendChild(titleElement);\n  parent.appendChild(containerElement);\n};\n\n//# sourceURL=webpack:///./src/shared/component/title.component.js?");

/***/ }),

/***/ "./src/shared/models/user.models.js":
/*!******************************************!*\
  !*** ./src/shared/models/user.models.js ***!
  \******************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"User\", function() { return User; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar User = function User(login, password, firstName, lastName, mail, phone, address, city, zipCode) {\n  _classCallCheck(this, User);\n\n  this.login = login; //a changer par surname\n\n  this.password = password;\n  this.firstName = firstName;\n  this.lastName = lastName;\n  this.mail = mail;\n  this.phone = phone;\n  this.address = address;\n  this.city = city;\n  this.zipCode = zipCode;\n};\n\n//# sourceURL=webpack:///./src/shared/models/user.models.js?");

/***/ })

/******/ });