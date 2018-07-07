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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(5);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = modules;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {"teachers":[{"id":1002,"name":"Alberto Chamorro","accounts":{"facebook":"https://www.facebook.com/profile.php?id=100006691396145","email":"albertchc04@gmail.com","twitter":"alberto.chamorro"}},{"id":1000,"name":"Walger Herrera","accounts":{"facebook":"https://www.facebook.com/walger.herrera","email":"walger.herrera@gmail.com","twitter":"walger.herrera"}},{"id":1010,"name":"Claudia Benavidez Rugama","accounts":{"facebook":"https://www.facebook.com/claudia.benavidezrugama?fref=pb&hc_location=friends_tab","email":"claudia.benavidez@gmail.com","twitter":"claudia.benavidezrugama"}}]}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.render = function (element) {
    document.body.append(element);
};

/***/ }),
/* 5 */
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
    element.setAttribute('font-size', '10px');
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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(16);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _teacher = __webpack_require__(8);

var _teacher2 = _interopRequireDefault(_teacher);

__webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Teachers = function (_Component) {
    _inherits(Teachers, _Component);

    function Teachers() {
        _classCallCheck(this, Teachers);

        return _possibleConstructorReturn(this, (Teachers.__proto__ || Object.getPrototypeOf(Teachers)).apply(this, arguments));
    }

    _createClass(Teachers, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'ul',
                { className: 'Teachers' },
                this.props.data.teachers.map(function (teacher) {
                    return _react2.default.createElement(_teacher2.default, _extends({}, teacher, { key: teacher.id.toString() }));
                })
            );
        }
    }]);

    return Teachers;
}(_react.Component);

exports.default = Teachers;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Teacher(props) {
    return _react2.default.createElement(
        'li',
        { className: 'Teacher' },
        props.name,
        ' ',
        _react2.default.createElement(
            'a',
            { href: 'https://twitter.com/' + props.accounts.twitter },
            props.accounts.twitter
        )
    );
}

exports.default = Teacher;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

var _teachers = __webpack_require__(3);

var _teachers2 = _interopRequireDefault(_teachers);

var _renderDom = __webpack_require__(4);

var _renderDom2 = _interopRequireDefault(_renderDom);

var _builderDom = __webpack_require__(5);

var _builderDom2 = _interopRequireDefault(_builderDom);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(6);

var _teachers3 = __webpack_require__(7);

var _teachers4 = _interopRequireDefault(_teachers3);

__webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(_teachers4.default, { data: _teachers2.default }), document.getElementById('container'));

// data.teachers.forEach(teacher => {
//     console.log(teacher)
//     const item = generator.makeItemList('li', teacher.name)
//     renderToDOM.render(item)    
// })

/***/ })
/******/ ]);