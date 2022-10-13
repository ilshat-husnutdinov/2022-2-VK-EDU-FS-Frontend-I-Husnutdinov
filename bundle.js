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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./index.css?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n // Закрыть меню доп. информации в блоке .more при нажатии вне блока .more\n\nwindow.addEventListener('click', function (event) {\n  if (!event.target.matches('.material-icons')) {\n    var dropdowns = document.getElementsByClassName(\"dropdown-content\");\n    var i;\n\n    for (i = 0; i < dropdowns.length; i++) {\n      var openDropdown = dropdowns[i];\n\n      if (openDropdown.classList.contains('show')) {\n        openDropdown.classList.remove('show');\n      }\n    }\n  }\n}); // Автоматический скролл вниз при отправке нового сообщения\n\nfunction scroll() {\n  document.querySelector('.message').scrollTop = document.querySelector('.message').scrollHeight;\n} // Модель информации о сообщении для сохранения в LocaleStorage\n\n\nvar InfoMessage = /*#__PURE__*/_createClass(function InfoMessage(message, author, dateTime) {\n  _classCallCheck(this, InfoMessage);\n\n  this.message = message; // сообщение   \n\n  this.author = author; // автор\n\n  this.dateTime = dateTime; // время отправки\n});\n\nvar form = document.querySelector('form');\nvar input = document.querySelector('.form-input');\nvar message = document.querySelector('.message');\nvar messageStoreKey = 'message_store_key';\nvar infoMessages = getInfoMessagesFromLocStore();\nrefresh();\nform.addEventListener('submit', handleSubmit.bind(undefined)); // form.addEventListener('keypress', this.handleKeyPress.bind(this));\n// отправить сообщение\n\nfunction handleSubmit(event) {\n  event.preventDefault();\n\n  if (input.value.trim() === '') {\n    input.value = '';\n    return;\n  }\n\n  var info = new InfoMessage(input.value, 'ilshat', new Date());\n  createBlockMessage(info);\n  scroll();\n  setInfoMessagesToLocStore(info);\n  input.value = '';\n} // получить сообщения из LocaleStorage\n\n\nfunction getInfoMessagesFromLocStore() {\n  var infoMessagesFromLocalStore = localStorage.getItem(messageStoreKey);\n  return JSON.parse(infoMessagesFromLocalStore);\n} // сохранить информацию о сообщении в LocaleStorage\n\n\nfunction setInfoMessagesToLocStore(info) {\n  infoMessages.push(info);\n  localStorage.setItem(messageStoreKey, JSON.stringify(infoMessages));\n} // создать блок сообщения\n\n\nfunction createBlockMessage(info) {\n  var container = document.createElement('div');\n  container.className = 'message-container';\n  var message_text = document.createElement('div');\n  message_text.className = 'message-text';\n  message_text.innerHTML = info.message;\n  var message_time = document.createElement('div');\n  message_time.className = 'message-time';\n  var dateTime = new Date(info.dateTime);\n  var res = [dateTime.getHours(), dateTime.getMinutes()].map(function (x) {\n    return x < 10 ? \"0\" + x : x;\n  }).join(\":\");\n  message_time.innerHTML = '<p>' + res + '</p>';\n  var message_status = document.createElement('span');\n  message_status.className = 'material-icons';\n  message_status.innerHTML = 'done_all';\n  message_time.appendChild(message_status);\n  container.appendChild(message_text);\n  container.appendChild(message_time);\n  message.appendChild(container);\n} // получить сообщения при обновлении\n\n\nfunction refresh() {\n  if (!infoMessages) {\n    infoMessages = new Array();\n    return;\n  }\n\n  infoMessages.forEach(function (x) {\n    createBlockMessage(x);\n  });\n} // Раскрыть меню доп. информации в блоке .more\n// function myFunction() {\n//     document.getElementById(\"myDropdown\").classList.toggle(\"show\");\n// }\n// document.querySelector(\"dropbtn\").addEventListener(\"click\", myFunction(this));\n// событие нажатия клавиши Enter\n\n\nfunction handleKeyPress(event) {\n  if (event.keyCode === 13) {\n    form.dispatchEvent(new Event('submit'));\n    console.log('kyepresss');\n  }\n}\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });