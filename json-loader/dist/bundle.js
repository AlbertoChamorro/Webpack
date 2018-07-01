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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _teachers = __webpack_require__(2);

var _teachers2 = _interopRequireDefault(_teachers);

var _renderDom = __webpack_require__(3);

var _renderDom2 = _interopRequireDefault(_renderDom);

var _builderDom = __webpack_require__(4);

var _builderDom2 = _interopRequireDefault(_builderDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_teachers2.default.teachers.forEach(function (teacher) {
    console.log(teacher);
    var item = _builderDom2.default.makeItemList('li', teacher.name);
    _renderDom2.default.render(item);
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {"teachers":[{"name":"Alberto Chamorro","accounts":{"facebook":"https://www.facebook.com/profile.php?id=100006691396145","email":"albertchc04@gmail.com","twitter":"alberto.chamorro"}},{"name":"Walger Herrera","accounts":{"facebook":"https://www.facebook.com/walger.herrera","email":"walger.herrera@gmail.com","twitter":"walger.herrera"}},{"name":"Claudia Benavidez Rugama","accounts":{"facebook":"https://www.facebook.com/claudia.benavidezrugama?fref=pb&hc_location=friends_tab","email":"claudia.benavidez@gmail.com","twitter":"claudia.benavidezrugama"}}]}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.render = function (element) {
    document.body.append(element);
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var builder = function builder(type) {
    return document.createElement(type);
};

var makeMessage = function makeMessage(type, msg) {
    var element = builder(type);
    element.textContent = msg;
    return element;
};

var makeItemList = function makeItemList(type, msg) {
    var element = makeMessage(type, msg);
    element.setAttribute('fontSize', '10px');
    return element;
};

var makeImage = function makeImage(src) {
    var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
    var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : width;

    var element = builder('img');
    element.setAttribute('src', src);
    element.setAttribute('width', width);
    element.setAttribute('height', height);

    return element;
};

var makeVideo = function makeVideo(src) {
    var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 380;
    var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : width;
    var autoPlay = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    var showControl = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

    var element = builder('video');
    element.setAttribute('src', src);
    element.setAttribute('width', width);
    element.setAttribute('height', height);
    element.setAttribute('controls', showControl);
    element.setAttribute('autoplay', autoPlay);

    return element;
};

module.exports = {
    builder: builder,
    makeMessage: makeMessage,
    makeImage: makeImage,
    makeVideo: makeVideo,
    makeItemList: makeItemList
};

/***/ })
/******/ ]);