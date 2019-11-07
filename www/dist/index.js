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

/***/ "./src/app/login/login.component.js":
/*!******************************************!*\
  !*** ./src/app/login/login.component.js ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoginComponent\", function() { return LoginComponent; });\n/* harmony import */ var _shared_components_title_title_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/title/title.component */ \"./src/shared/components/title/title.component.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n//import { LogoComponent } from \"../../shared/components/logo/logo.component\";\n //import { LoginFormComponent } from \"./login-form/login-form.component\";\n\nvar LoginComponent =\n/*#__PURE__*/\nfunction () {\n  function LoginComponent() {\n    _classCallCheck(this, LoginComponent);\n\n    // this.src = \"?\";\n    // this.alt = \"?\";\n    // this.text = \"?\";\n    // this.loginName = \"?\";\n    // this.registerName = \"?\";\n    // this.user = \"?\";\n    //this.logo = new LogoComponent(\"assets/images/logo/logo.png\",\"Le LOGO de l'application\");\n    this.title = new _shared_components_title_title_component__WEBPACK_IMPORTED_MODULE_0__[\"TitleComponent\"](\"Game session / Worlds of Game\"); //this.loginForm = new LoginFormComponent();\n  }\n\n  _createClass(LoginComponent, [{\n    key: \"display\",\n    value: function display(parent) {\n      // let logoComponent = new LogoComponent();\n      // logoComponent.src = this.src;\n      // logoComponent.alt = this.alt;\n      // logoComponent.display(parent);\n      // let titleComponent = new TitleComponent();\n      // titleComponent.text =  this.text;\n      // titleComponent.display(parent);\n      // let loginFormComponent = new LoginFormComponent();\n      // loginFormComponent.name = this.loginName;\n      // loginFormComponent.user = this.user;\n      // loginFormComponent.display(parent);\n      // let registerButtonComponent = new RegisterButtonComponent();\n      // registerButtonComponent.name = this.registerName;\n      // registerButtonComponent.display(parent);\n      var enTete = document.createElement(\"div\"); //this.logo.display(enTete);\n\n      this.title.display(parent); //this.loginForm.display(parent);\n\n      document.body.appendChild(parent);\n    }\n  }]);\n\n  return LoginComponent;\n}();\n\n//# sourceURL=webpack:///./src/app/login/login.component.js?");

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