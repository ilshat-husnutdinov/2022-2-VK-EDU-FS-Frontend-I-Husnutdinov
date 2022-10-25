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
/******/ 	return __webpack_require__(__webpack_require__.s = "./chats.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./chats.css":
/*!*******************!*\
  !*** ./chats.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./chats.css?");

/***/ }),

/***/ "./chats.js":
/*!******************!*\
  !*** ./chats.js ***!
  \******************/
/*! exports provided: textBlock, timeBlock, conditionBlock, getLastMessageFromLocStore, parseTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"textBlock\", function() { return textBlock; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"timeBlock\", function() { return timeBlock; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conditionBlock\", function() { return conditionBlock; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLastMessageFromLocStore\", function() { return getLastMessageFromLocStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseTime\", function() { return parseTime; });\n/* harmony import */ var _chats_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chats.css */ \"./chats.css\");\n/* harmony import */ var _chats_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chats_css__WEBPACK_IMPORTED_MODULE_0__);\n // НАЧАЛО КОДА JS ДЛЯ СТРАНИЦЫ С ЧАТАМИ (ДЛЯ МАКЕТА ИЗ ДЗ-3) \n\nvar messageStoreKey = 'message_store_key';\nvar chat = document.querySelector('.chat');\nvar textBlock = document.querySelector('.text');\nvar timeBlock = document.querySelector('.time');\nvar conditionBlock = document.querySelector('.condition');\n/* Делает переход на чат с сообщениями */\n\nchat.addEventListener('click', function (event) {\n  document.getElementById('page2').style.display = 'none';\n  document.getElementById('page1').style.display = 'flex';\n}); // получить последнее сообщение из LocaleStorage\n\nfunction getLastMessageFromLocStore() {\n  var infoMessagesFromLocalStore = localStorage.getItem(messageStoreKey);\n  var parseMessagesInfo = JSON.parse(infoMessagesFromLocalStore);\n\n  if (parseMessagesInfo !== null && Array.isArray(parseMessagesInfo)) {\n    return parseMessagesInfo[parseMessagesInfo.length - 1];\n  }\n\n  return null;\n} // парсит время на часы и минут HH:MM\n\nfunction parseTime(dateTime) {\n  return [dateTime.getHours(), dateTime.getMinutes()].map(function (x) {\n    return x < 10 ? \"0\" + x : x;\n  }).join(\":\");\n} // КОНЕЦ КОДА JS ДЛЯ СТРАНИЦЫ С ЧАТАМИ (ДЛЯ МАКЕТА ИЗ ДЗ-3)\n\n//# sourceURL=webpack:///./chats.js?");

/***/ })

/******/ });