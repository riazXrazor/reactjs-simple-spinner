module.exports =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 68);
/******/ })
/************************************************************************/
/******/ ({

/***/ 44:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 65:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'I:\\NODEJS\\@riazxrazorreact-simple-spinner\\node_modules\\lodash\\lodash.js'");

/***/ }),

/***/ 66:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'I:\\NODEJS\\@riazxrazorreact-simple-spinner\\node_modules\\prop-types\\index.js'");

/***/ }),

/***/ 67:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'I:\\NODEJS\\@riazxrazorreact-simple-spinner\\node_modules\\styled-jsx\\style.js'");

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ReactSimpleSpinner = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = __webpack_require__(67);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(44);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(66);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = __webpack_require__(65);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactSimpleSpinner = function (_React$Component) {
    _inherits(ReactSimpleSpinner, _React$Component);

    function ReactSimpleSpinner(props) {
        _classCallCheck(this, ReactSimpleSpinner);

        var _this = _possibleConstructorReturn(this, (ReactSimpleSpinner.__proto__ || Object.getPrototypeOf(ReactSimpleSpinner)).call(this, props));

        _this.state = {
            styles: {
                'size': 32,
                'lineSize': 3,
                'lineBgColor': '#eee',
                'lineFgColor': '#2196f3',
                'speed': 0.8,
                'spacing': 4,
                'fontSize': 13,
                'textFgColor': '#555'
            },
            'message': '',
            spinner_style: {},
            text_style: {}
        };

        _this.size_px = _this.size_px.bind(_this);
        _this.line_size_px = _this.line_size_px.bind(_this);
        _this.text_margin_top = _this.text_margin_top.bind(_this);
        _this.text_font_size = _this.text_font_size.bind(_this);
        _this.spinner_style = _this.spinner_style.bind(_this);
        _this.text_style = _this.text_style.bind(_this);
        _this.isNumber = _this.isNumber.bind(_this);

        return _this;
    }

    _createClass(ReactSimpleSpinner, [{
        key: 'isNumber',
        value: function isNumber(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }
    }, {
        key: 'size_px',
        value: function size_px() {
            switch (this.state.styles.size) {
                case 'tiny':
                    return 12;
                case 'small':
                    return 16;
                case 'medium':
                    return 32;
                case 'large':
                    return 48;
                case 'big':
                    return 64;
                case 'huge':
                    return 96;
                case 'massive':
                    return 128;
            }
            return this.isNumber(this.state.styles.size) ? this.state.styles.size : 32;
        }
    }, {
        key: 'line_size_px',
        value: function line_size_px() {
            switch (this.state.styles.size) {
                case 'tiny':
                    return 1;
                case 'small':
                    return 2;
                case 'medium':
                    return 3;
                case 'large':
                    return 3;
                case 'big':
                    return 4;
                case 'huge':
                    return 4;
                case 'massive':
                    return 5;
            }
            return this.isNumber(this.state.styles.lineSize) ? this.state.styles.lineSize : 4;
        }
    }, {
        key: 'text_margin_top',
        value: function text_margin_top() {
            switch (this.state.styles.size) {
                case 'tiny':
                case 'small':
                case 'medium':
                case 'large':
                case 'big':
                case 'huge':
                case 'massive':
                    return Math.min(Math.max(Math.ceil(this.size_px() / 8), 3), 12);
            }
            return this.isNumber(this.state.styles.spacing) ? this.state.styles.spacing : 4;
        }
    }, {
        key: 'text_font_size',
        value: function text_font_size() {
            switch (this.state.styles.size) {
                case 'tiny':
                case 'small':
                case 'medium':
                case 'large':
                case 'big':
                case 'huge':
                case 'massive':
                    return Math.min(Math.max(Math.ceil(this.size_px() * 0.4), 11), 32);
            }
            return this.isNumber(this.state.styles.fontSize) ? this.state.styles.fontSize : 13;
        }
    }, {
        key: 'spinner_style',
        value: function spinner_style() {
            return {
                'margin': '0 auto',
                'borderRadius': '100%',
                'border': this.line_size_px() + 'px solid ' + this.state.styles.lineBgColor,
                'borderTop': this.line_size_px() + 'px solid ' + this.state.styles.lineFgColor,
                'width': this.size_px() + 'px',
                'height': this.size_px() + 'px',
                'animation': 'react-simple-spinner-spin ' + this.state.styles.speed + 's linear infinite'
            };
        }
    }, {
        key: 'text_style',
        value: function text_style() {
            return {
                'marginTop': this.text_margin_top() + 'px',
                'color': this.state.styles.textFgColor,
                'fontSize': this.text_font_size() + 'px',
                'textAlign': 'center'
            };
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if (this.props.message) this.setState({ message: this.props.message });

            var newStyles = {};
            _lodash2.default.each(this.state.styles, function (value, key) {
                if (_this2.props[key]) {
                    newStyles[key] = _this2.props[key];
                }
            });

            if (newStyles) this.setState({ styles: Object.assign(this.state.styles, newStyles) });

            this.setState({ text_style: this.text_style() });
            this.setState({ spinner_style: this.spinner_style() });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this3 = this;

            if (nextProps.message !== this.props.message) {
                this.setState({ message: nextProps.message });
            }

            var newStyles = {};
            _lodash2.default.each(this.state.styles, function (value, key) {
                if (_this3.props[key] && nextProps[key]) {
                    if (nextProps[key] !== _this3.props[key]) newStyles[key] = nextProps[key];
                }
            });

            if (newStyles) this.setState({ styles: Object.assign(this.state.styles, newStyles) });

            this.setState({ text_style: this.text_style() });
            this.setState({ spinner_style: this.spinner_style() });
        }
    }, {
        key: 'render',
        value: function render() {
            var msg = '';

            if (this.state.message != '') {
                msg = _react2.default.createElement(
                    'div',
                    { className: 'react-simple-spinner-text', style: this.state.text_style },
                    this.state.message
                );
            }

            //console.log('msg',this.state.message);

            return _react2.default.createElement(
                'div',
                {
                    className: 'jsx-1775160498'
                },
                _react2.default.createElement('div', { style: this.state.spinner_style, className: 'jsx-1775160498' + ' ' + 'react-simple-spinner'
                }),
                msg,
                _react2.default.createElement(
                    'style',
                    { jsx: true.toString() },
                    '\n                  .react-simple-spinner {\n                    transition: all 0.3s linear;\n                  }\n                  @keyframes react-simple-spinner-spin {\n                    0% { transform: rotate(0deg); }\n                    100% { transform: rotate(360deg); }\n                  }\n                '
                )
            );
        }
    }]);

    return ReactSimpleSpinner;
}(_react2.default.Component);

ReactSimpleSpinner.propTypes = {
    'size': _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['tiny', 'small', 'medium', 'large', 'huge', 'massive']), _propTypes2.default.number]),
    'lineSize': _propTypes2.default.number,
    'lineBgColor': _propTypes2.default.string,
    'lineFgColor': _propTypes2.default.string,
    'speed': _propTypes2.default.number,
    'spacing': _propTypes2.default.number,
    'message': _propTypes2.default.string,
    'fontSize': _propTypes2.default.number,
    'textFgColor': _propTypes2.default.string

};
exports.ReactSimpleSpinner = ReactSimpleSpinner;
exports.default = ReactSimpleSpinner;

/***/ })

/******/ });