(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Icon(_ref) {
  var _ref$tag = _ref.tag,
      Component = _ref$tag === undefined ? 'i' : _ref$tag,
      className = _ref.className,
      name = _ref.name,
      props = _objectWithoutProperties(_ref, ['tag', 'className', 'name']);

  return _react2.default.createElement(Component, _extends({ className: (0, _classnames2.default)(className, 'fa', 'fa-' + name) }, props));
}

exports.default = Icon;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = __webpack_require__(5);

var _App = __webpack_require__(6);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(
      _reactHotLoader.AppContainer,
      null,
      _react2.default.createElement(Comp, null)
    ), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);

  // Hot Module Replacement
  if (false) {
    module.hot.accept('./App', function () {
      render(require('./App').default);
    });
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(7);

var _reactStaticRoutes = __webpack_require__(8);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

__webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _reactStatic.Router,
    null,
    _react2.default.createElement(_reactStaticRoutes2.default, null)
  );
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(9);

var _Home = __webpack_require__(10);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Template Imports


// Template Map
var templateMap = {
  t_0: _Home2.default

  // Template Tree
};var templateTree = { c: { "404": { t: "t_0" }, "/": { t: "t_0" } }

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  var parts = path === '/' ? ['/'] : path.split('/').filter(function (d) {
    return d;
  });
  var cursor = templateTree;
  try {
    parts.forEach(function (part) {
      cursor = cursor.c[part];
    });
    return templateMap[cursor.t];
  } catch (e) {
    return false;
  }
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;

      var renderProps = {
        templateMap: templateMap,
        templateTree: templateTree,
        getComponentForPath: getComponentForPath
      };
      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }
      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getComponentForPath(props.location.pathname);
          if (!Comp) {
            Comp = getComponentForPath('404');
          }
          return Comp && _react2.default.createElement(Comp, props);
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _Background = __webpack_require__(11);

var _Background2 = _interopRequireDefault(_Background);

var _Section = __webpack_require__(20);

var _Section2 = _interopRequireDefault(_Section);

var _Message = __webpack_require__(21);

var _Message2 = _interopRequireDefault(_Message);

var _Icon = __webpack_require__(2);

var _Icon2 = _interopRequireDefault(_Icon);

var _Meta = __webpack_require__(25);

var _Meta2 = _interopRequireDefault(_Meta);

var _data = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import 'ciser/build/ciser.min.css'


var Home = function (_PureComponent) {
  _inherits(Home, _PureComponent);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      var list = Object.keys(_data.sections);
      return [_react2.default.createElement(_Meta2.default, _extends({
        key: 'meta'
      }, _data.meta, {
        links: [_react2.default.createElement('link', {
          href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,700',
          rel: 'stylesheet'
        }), _react2.default.createElement('link', {
          href: 'https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome-font-awesome.min.css',
          rel: 'stylesheet'
        }), _react2.default.createElement('link', {
          href: 'https://unpkg.com/ciser/build/ciser.css',
          rel: 'stylesheet'
        })]
      })), _react2.default.createElement(
        'div',
        {
          key: 'content',
          'data-component': 'Home',
          className: 'relative',
          style: { backgroundColor: '#f6f9fc' }
        },
        _react2.default.createElement(
          _Background2.default,
          {
            className: 'relative aspect-ratio--16x9-ns aspect-ratio--4x3 bg-center cover',
            image: '//res.cloudinary.com/lh-imagecloud/image/upload/v1515930477/Mesh-Triangles-Surface-Colorful-Angular-WallpapersByte-com-3840x2400_kfsxmi.jpg',
            overlayColor: ['rgba(246, 249, 252, .75)', 'rgba(246, 249, 252, 1)']
          },
          _react2.default.createElement(
            'div',
            { className: 'absolute absolute--fill flex flex-column items-center justify-center w-100 h-100 z-3' },
            _react2.default.createElement(
              'div',
              { className: 'a-wobble mb4-ns mb3 w4-ns w3 ba bw2-ns bw1 b--white overflow-hidden br-100 shadow-l-2' },
              _react2.default.createElement(_Background2.default, {
                className: 'w-100 aspect-ratio--1x1 bg-center cover br-100',
                image: '//res.cloudinary.com/lh-imagecloud/image/upload/v1509441836/me.1114e9a3_igwxff.jpg'
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'f2-ns f3' },
              _react2.default.createElement(
                'span',
                { className: 'dib fw3 dark-gray a-slide-to-right' },
                'Lam Hieu'
              ),
              _react2.default.createElement(
                'span',
                { className: 'dib fw1 gray a-slide-to-left' },
                '\'s a developer'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'mt4-ns mt3 flex flex-wrap items-center justify-center' },
              Object.keys(_data.socialMedia).map(function (k, i) {
                return _react2.default.createElement(
                  'a',
                  {
                    key: k,
                    className: (0, _classnames2.default)(i % 2 === 0 ? 'a-slide-to-top' : 'a-slide-to-bottom', 'flex items-center justify-center mh2-ns mh1s shadow-l-2 bg-white br-100 h2s-ns h2 w2s-ns w2 f3-ns f4 gray hover-dark-gray t-all-ease no-underline'),
                    href: _data.socialMedia[k]
                  },
                  _react2.default.createElement(_Icon2.default, { name: k })
                );
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'absolute-ns bottom-2 mt3' },
              _react2.default.createElement(_Icon2.default, {
                name: 'angle-down',
                className: 'db-ns dn a-slide-to-bottom a-s a-infinite f4-ns f5 gray'
              }),
              _react2.default.createElement(_Icon2.default, { name: 'angle-down', className: 'dn-ns db f4-ns f5 gray' })
            )
          )
        ),
        _react2.default.createElement(
          'main',
          { className: 'w-90 mw6 center' },
          (list || []).map(function (k) {
            var _sections$k = _data.sections[k],
                icon = _sections$k.icon,
                color = _sections$k.color,
                messages = _sections$k.messages;

            return _react2.default.createElement(
              _Section2.default,
              { key: k, icon: icon, color: color },
              (messages || []).map(function (_ref, i) {
                var by = _ref.by,
                    content = _ref.content;
                return _react2.default.createElement(_Message2.default, { key: i, by: by, content: content });
              })
            );
          })
        )
      )];
    }
  }]);

  return Home;
}(_react.PureComponent);

exports.default = Home;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactSizeme = __webpack_require__(12);

var _reactSizeme2 = _interopRequireDefault(_reactSizeme);

var _reactProgressiveImage = __webpack_require__(13);

var _reactProgressiveImage2 = _interopRequireDefault(_reactProgressiveImage);

var _getImageSource = __webpack_require__(14);

var _getImageSource2 = _interopRequireDefault(_getImageSource);

var _getBackground = __webpack_require__(18);

var _getBackground2 = _interopRequireDefault(_getBackground);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Background(_ref) {
  var _ref$autoSize = _ref.autoSize,
      autoSize = _ref$autoSize === undefined ? true : _ref$autoSize,
      image = _ref.image,
      overlayColor = _ref.overlayColor,
      size = _ref.size,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['autoSize', 'image', 'overlayColor', 'size', 'children']);

  var imageSource = !autoSize ? image : (0, _getImageSource2.default)({ size: size, src: image });
  if (typeof imageSource === 'string') {
    return _react2.default.createElement(
      'div',
      _extends({}, props, {
        style: {
          backgroundImage: (0, _getBackground2.default)({ overlayColor: overlayColor, image: imageSource })
        }
      }),
      children
    );
  }

  var _ref2 = imageSource || {},
      thumbnail = _ref2.thumbnail,
      large = _ref2.large;

  return _react2.default.createElement(
    _reactProgressiveImage2.default,
    { src: large, placeholder: thumbnail },
    function (imageProgressiveSource) {
      return _react2.default.createElement(
        'div',
        _extends({}, props, {
          style: {
            backgroundImage: (0, _getBackground2.default)({
              overlayColor: overlayColor,
              image: imageProgressiveSource
            })
          }
        }),
        children
      );
    }
  );
}

exports.default = (0, _reactSizeme2.default)({
  refreshMode: 'debounce',
  refreshRate: 16,
  monitorHeight: true,
  monitorWidth: true,
  enableSSRBehaviour: true
})(Background);

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-sizeme");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-progressive-image");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _getCloudinaryImage = __webpack_require__(15);

var _getCloudinaryImage2 = _interopRequireDefault(_getCloudinaryImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var regexCloudinary = /^(((http|https):)?(\/\/)(res.cloudinary.com)\/([\w-.]+)\/image\/upload\/(([\w,]+)\/)?([\S]+))$/i;

function getImageSource(_ref) {
  var _ref$src = _ref.src,
      src = _ref$src === undefined ? '' : _ref$src,
      size = _ref.size;

  if (src && src.match(regexCloudinary)) {
    var matchArr = src.match(regexCloudinary) || [];
    var cloudinary = {
      username: matchArr && matchArr[6] || '',
      id: matchArr && matchArr[9] || ''
    };
    return {
      thumbnail: (0, _getCloudinaryImage2.default)(_extends({}, cloudinary, {
        size: size,
        useMinimum: true
      })),
      large: (0, _getCloudinaryImage2.default)(_extends({}, cloudinary, {
        size: size,
        useMinimum: false
      }))
    };
  }
  return src;
}

exports.default = getImageSource;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _interpolate = __webpack_require__(16);

var _interpolate2 = _interopRequireDefault(_interpolate);

var _getImageSize = __webpack_require__(17);

var _getImageSize2 = _interopRequireDefault(_getImageSize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getParams(size) {
  if (!size) return [];
  var width = size.width,
      height = size.height;

  return ['c_scale', 'q_auto', width && 'w_' + width, height && 'h_' + height].filter(function (x) {
    return x;
  });
}

function getCloudinaryImage(_ref) {
  var username = _ref.username,
      id = _ref.id,
      _size = _ref.size,
      _ref$useMinimum = _ref.useMinimum,
      useMinimum = _ref$useMinimum === undefined ? false : _ref$useMinimum;

  var template = '//res.cloudinary.com/{username}/image/upload/{transform}{id}';
  var size = (0, _getImageSize2.default)({ size: _size, useMinimum: useMinimum });
  var params = getParams(size);
  var transform = params.length > 0 ? params.join(',') + '/' : '';
  return (0, _interpolate2.default)(template, {
    username: username,
    id: id,
    transform: transform
  });
}

exports.default = getCloudinaryImage;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("interpolate");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getImageSize;
var steps = [50, 100, 200, 400, 800, 1200];
var lastStep = steps[steps.length - 1];

function getImageSize(_ref) {
  var _size = _ref.size,
      useMinimum = _ref.useMinimum;

  var size = _size;
  if (useMinimum) size = { width: steps[0], height: steps[0] };

  if (!size) return null;

  var _size2 = size,
      _size2$width = _size2.width,
      width = _size2$width === undefined ? 0 : _size2$width,
      _size2$height = _size2.height,
      height = _size2$height === undefined ? 0 : _size2$height;


  if (!width && !height || width + height === 0) return null;

  if (width >= height) {
    return { width: steps.find(function (step) {
        return step >= width;
      }) || lastStep };
  }
  return { height: steps.find(function (step) {
      return step >= height;
    }) || lastStep };
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getGradientColor = __webpack_require__(19);

var _getGradientColor2 = _interopRequireDefault(_getGradientColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getBackground(_ref) {
  var overlayColor = _ref.overlayColor,
      image = _ref.image;

  var gradientColor = overlayColor && (0, _getGradientColor2.default)(overlayColor) || 'linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0))';
  return !image ? gradientColor : gradientColor + ', url(' + (image || '') + ')';
}

exports.default = getBackground;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function getGradientColor(color) {
  return typeof color === 'string' ? 'linear-gradient(' + color + ', ' + color + ')' : 'linear-gradient(' + color[0] + ', ' + color[1] + ')';
}

exports.default = getGradientColor;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Icon = __webpack_require__(2);

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultTheme = {
  root: 'pv4-ns pv3-ml pv4 w-100',
  header: 'flex flex-wrap items-center justify-center w-100',
  iconWrapper: 'a-shake flex items-center justify-center w3s-ns w3 h3s-ns h3 bg-white br-100 shadow-l-2 t-all-ease',
  icon: 'dib f1-ns f2 gray',
  content: 'pv4-ns pv3 relative flex flex-wrap w-100 center'
};

function Section(_ref) {
  var icon = _ref.icon,
      color = _ref.color,
      children = _ref.children,
      _ref$theme = _ref.theme,
      theme = _ref$theme === undefined ? defaultTheme : _ref$theme;

  return _react2.default.createElement(
    'section',
    { className: theme.root },
    _react2.default.createElement(
      'div',
      { className: theme.header },
      _react2.default.createElement(
        'div',
        { className: theme.iconWrapper },
        _react2.default.createElement(_Icon2.default, { className: theme.icon, style: { color: color }, name: icon })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: theme.content },
      children
    )
  );
}

exports.default = Section;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactMarkdown = __webpack_require__(22);

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

var _reactChartjs = __webpack_require__(23);

var _render = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultTheme = {
  line: 'pv1 flex flex-wrap items-end',
  avatar: 'h1s-ns h1 w1s-ns w1 ba bw1 b--white br-100 shadow-l-2 t-all-ease a-f',
  list: 'flex flex-wrap max-w-60-ns max-w-75',
  message: 'mv1s-ns mv1 w-auto pa3 bg-white br3 shadow-l-2 f5-ns f6 fw3 gray t-all-ease a-f',
  lineAuthor: 'justify-start mv3-ns mv2 w-100',
  avatarAuthor: 'bg-blue mr2',
  listAuthor: '',
  messageAuthor: '',
  lineGuest: 'justify-end mv3-ns mv2 w-100',
  avatarGuest: 'bg-green ml2 order-1',
  listGuest: '',
  messageGuest: ''
};

var Message = function (_PureComponent) {
  _inherits(Message, _PureComponent);

  function Message() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Message);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Message.__proto__ || Object.getPrototypeOf(Message)).call.apply(_ref, [this].concat(args))), _this), _this.renderMsg = function (_ref2, idx) {
      var type = _ref2.type,
          data = _ref2.data;

      var list = {
        markdown: function markdown() {
          return _react2.default.createElement(_reactMarkdown2.default, { key: idx, className: 'md', source: data, skipHtml: true });
        },
        radar: function radar() {
          return _react2.default.createElement(
            'div',
            { key: idx, className: 'radar w-100' },
            _react2.default.createElement(_reactChartjs.Radar, { data: data })
          );
        },
        pie: function pie() {
          return _react2.default.createElement(
            'div',
            { key: idx, className: 'pie w-100' },
            _react2.default.createElement(_reactChartjs.Pie, {
              data: data,
              legend: {
                display: true,
                position: 'top',
                fullWidth: true,
                reverse: false,
                labels: {
                  fontColor: '#555'
                }
              },
              redraw: true
            })
          );
        },
        progress: function progress() {
          var _ref3 = data || {},
              title = _ref3.title,
              items = _ref3.items;

          return _react2.default.createElement(
            'div',
            { key: idx, className: 'progress w-100' },
            title && _react2.default.createElement(
              'span',
              { className: 'f3-ns f4 fw4 dark-gray' },
              title
            ),
            items && _react2.default.createElement(
              'div',
              { className: 'mt2s-ns mt2' },
              (items || []).map(function (_ref4) {
                var name = _ref4.name,
                    value = _ref4.value;
                return _react2.default.createElement(_render.ProgressLine, {
                  key: name,
                  name: name,
                  value: value,
                  className: 'pv2s-ns pv2'
                });
              })
            )
          );
        },
        timeline: function timeline() {
          return _react2.default.createElement(
            'div',
            { key: idx, className: 'timeline w-100' },
            (data || []).map(function (_ref5) {
              var title = _ref5.title,
                  subtitle = _ref5.subtitle,
                  date = _ref5.date,
                  description = _ref5.description;
              return _react2.default.createElement(_render.TimeLine, {
                key: title,
                title: title,
                subtitle: subtitle,
                date: date,
                description: description,
                className: 'pv2s-ns pv2'
              });
            })
          );
        },
        contact: function contact() {
          return _react2.default.createElement(
            'div',
            { key: idx, className: 'contact w-100' },
            (data || []).map(function (_ref6) {
              var icon = _ref6.icon,
                  href = _ref6.href,
                  label = _ref6.label,
                  value = _ref6.value;
              return _react2.default.createElement(_render.IconItem, {
                key: value,
                icon: icon,
                href: href,
                label: label,
                value: value,
                className: 'pv1s-ns pv1'
              });
            })
          );
        }
      };
      return list[type] && list[type](data) || null;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Message, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // console.log(this.message)
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          by = _props.by,
          _props$content = _props.content,
          content = _props$content === undefined ? [] : _props$content,
          _props$theme = _props.theme,
          theme = _props$theme === undefined ? defaultTheme : _props$theme;

      var messageTheme = {
        author: {
          list: (0, _classnames2.default)(theme.list, theme.listAuthor),
          line: (0, _classnames2.default)(theme.line, theme.lineAuthor),
          avatar: (0, _classnames2.default)(theme.avatar, theme.avatarAuthor),
          message: (0, _classnames2.default)(theme.message, theme.messageAuthor)
        },
        guest: {
          list: (0, _classnames2.default)(theme.list, theme.listGuest),
          line: (0, _classnames2.default)(theme.line, theme.lineGuest),
          avatar: (0, _classnames2.default)(theme.avatar, theme.avatarGuest),
          message: (0, _classnames2.default)(theme.message, theme.messageGuest)
        }
      };
      return _react2.default.createElement(
        'div',
        {
          ref: function ref(_ref7) {
            _this2.message = _ref7;
            return true;
          },
          'data-component': 'Message',
          className: (0, _classnames2.default)('message', messageTheme[by].line, by === 'author' ? 'a-slide-to-right' : 'a-slide-to-left')
        },
        _react2.default.createElement('div', { className: messageTheme[by].avatar }),
        _react2.default.createElement(
          'div',
          { className: messageTheme[by].list },
          (content || []).map(function (msg, i) {
            return _react2.default.createElement(
              'div',
              { key: i, className: messageTheme[by].message },
              Object.keys(msg).map(function (t, y) {
                return _this2.renderMsg({ type: t, data: msg[t] }, y);
              })
            );
          })
        )
      );
    }
  }]);

  return Message;
}(_react.PureComponent);

exports.default = Message;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeLine = exports.ProgressLine = exports.IconItem = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = __webpack_require__(2);

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var IconItem = function IconItem(_ref) {
  var icon = _ref.icon,
      href = _ref.href,
      label = _ref.label,
      value = _ref.value,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['icon', 'href', 'label', 'value', 'className']);

  return _react2.default.createElement(
    'div',
    _extends({}, props, { 'data-component': 'IconItem', className: (0, _classnames2.default)('w-100', className) }),
    _react2.default.createElement(
      'a',
      { className: 'flex items-center w-100 no-underline', href: href },
      _react2.default.createElement(_Icon2.default, {
        className: 'dib pa2 bg-light-gray hover-bg-gray br-100 gray hover-white f3-ns f4 t-all-ease t-vf',
        name: icon
      }),
      _react2.default.createElement(
        'div',
        { className: 'ml2-ns ml1s gray hover-dark-gray fw3 t-all-ease t-vf' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'span',
            { className: 'f7 ttu' },
            label
          )
        ),
        _react2.default.createElement(
          'span',
          { className: 'f6' },
          value
        )
      )
    )
  );
};

exports.IconItem = IconItem;
var ProgressLine = function ProgressLine(_ref2) {
  var name = _ref2.name,
      value = _ref2.value,
      className = _ref2.className,
      props = _objectWithoutProperties(_ref2, ['name', 'value', 'className']);

  return _react2.default.createElement(
    'div',
    _extends({}, props, {
      'data-component': 'ProgressLine',
      className: (0, _classnames2.default)('w-100', className)
    }),
    _react2.default.createElement(
      'div',
      { className: 'flex items-center justify-around f6-ns f7 ttu ph1' },
      _react2.default.createElement(
        'div',
        { className: 'flex-auto tl dark-gray pa1' },
        name
      ),
      _react2.default.createElement(
        'div',
        { className: 'flex-auto tr gray pa1' },
        value,
        '%'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'mt1s-ns mt1 relative min-vw-25 max-w-100 h1 bg-light-gray br3 t-all-ease' },
      _react2.default.createElement('div', {
        className: 'ma1 loaded absolute absolute--fill bg-gray br3 t-all-ease',
        style: { width: value + '%' }
      })
    )
  );
};

exports.ProgressLine = ProgressLine;
var TimeLine = function TimeLine(_ref3) {
  var title = _ref3.title,
      subtitle = _ref3.subtitle,
      date = _ref3.date,
      description = _ref3.description,
      className = _ref3.className,
      props = _objectWithoutProperties(_ref3, ['title', 'subtitle', 'date', 'description', 'className']);

  return _react2.default.createElement(
    'div',
    _extends({}, props, {
      'data-component': 'TimeLine',
      className: (0, _classnames2.default)('max-w-100', className)
    }),
    title && _react2.default.createElement(
      'div',
      { className: 'w-100 bl pl2 bw1 b--light-gray' },
      _react2.default.createElement(
        'span',
        { className: 'fw3 f4-ns f5 dark-gray' },
        title
      )
    ),
    (subtitle || date) && _react2.default.createElement(
      'div',
      { className: 'mt2-ns mt1s flex flex-wrap items-center justify-around' },
      subtitle && _react2.default.createElement(
        'div',
        { className: 'flex-auto-ns w-auto-ns w-100 tl pa1' },
        _react2.default.createElement(
          'span',
          { className: 'fw3 f6 gray ttu' },
          subtitle
        )
      ),
      date && _react2.default.createElement(
        'div',
        { className: 'flex-auto-ns w-auto-ns w-100 tr-ns tl pa1' },
        _react2.default.createElement(
          'span',
          { className: 'fw3 f6-ns f7 gray ttu' },
          date
        )
      )
    ),
    description && _react2.default.createElement(
      'div',
      { className: 'mt2-ns mt1s ph1s w-100' },
      _react2.default.createElement(
        'span',
        { className: 'fw3 f6-ns f7 gray' },
        description
      )
    )
  );
};
exports.TimeLine = TimeLine;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(26);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Meta = function Meta(_ref) {
  var title = _ref.title,
      keywords = _ref.keywords,
      image = _ref.image,
      description = _ref.description,
      favicon = _ref.favicon,
      links = _ref.links;
  return _react2.default.createElement(
    _reactHelmet2.default,
    null,
    links,
    _react2.default.createElement('meta', { charSet: 'utf-8' }),
    _react2.default.createElement('meta', { property: 'keywords', content: keywords }),
    _react2.default.createElement('meta', { itemProp: 'image', content: image }),
    _react2.default.createElement('meta', { itemProp: 'description', content: description }),
    _react2.default.createElement('meta', { itemProp: 'name', content: title }),
    _react2.default.createElement('meta', { name: 'twitter:image', content: image }),
    _react2.default.createElement('meta', { name: 'twitter:description', content: description }),
    _react2.default.createElement('meta', { name: 'twitter:title', content: title }),
    _react2.default.createElement('meta', { name: 'twitter:card', content: 'summary' }),
    _react2.default.createElement('meta', { property: 'og:description', content: description }),
    _react2.default.createElement('meta', { property: 'og:image', content: image }),
    _react2.default.createElement('meta', { property: 'og:title', content: title }),
    _react2.default.createElement('meta', { property: 'og:type', content: 'website' }),
    _react2.default.createElement('meta', { name: 'googlebot', content: 'index,follow' }),
    _react2.default.createElement('meta', { name: 'robots', content: 'index,follow' }),
    _react2.default.createElement('meta', { name: 'subject' }),
    _react2.default.createElement('meta', { name: 'description', content: description }),
    _react2.default.createElement('link', { rel: 'icon', type: 'image/png', href: favicon['32x32'], sizes: '32x32' }),
    _react2.default.createElement('link', { rel: 'icon', type: 'image/png', href: favicon['16x16'], sizes: '16x16' }),
    _react2.default.createElement(
      'title',
      null,
      title
    )
  );
};

exports.default = Meta;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sections = exports.socialMedia = exports.meta = undefined;

var _cover = __webpack_require__(28);

var _cover2 = _interopRequireDefault(_cover);

var _favicon32x = __webpack_require__(29);

var _favicon32x2 = _interopRequireDefault(_favicon32x);

var _favicon16x = __webpack_require__(30);

var _favicon16x2 = _interopRequireDefault(_favicon16x);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var meta = exports.meta = {
  title: 'lamhieu - yep, never give up.',
  keywords: 'lamhieu, never give up, nodejs, react, php, mysql, javascript, es6, mongodb, lap trinh vien, lập trình viên',
  image: _cover2.default,
  description: 'tôi là một lập trình viên, tôi yêu công việc của mình. tôi luôn mong muốn mang đến cho mọi người những sản phẩm hữu ích với chất lượng tốt nhất',
  favicon: {
    '16x16': _favicon16x2.default,
    '32x32': _favicon32x2.default
  }
};

var socialMedia = exports.socialMedia = {
  facebook: 'https://fb.com/lamhieu.me',
  twitter: 'https://twitter.com/_lamhieu',
  'github-alt': 'https://github.com/lamhieu-vk',
  skype: 'skype:lamhieu@outlook.com?call',
  envelope: 'mailto:lamhieu.vk@gmail.com'
};

var sections = exports.sections = {
  intro: {
    color: '#1E88E5',
    icon: 'comment',
    title: 'Introducation',
    messages: [{
      by: 'guest',
      content: [{ markdown: 'tìm đến với **lamhieu.info** 😶' }]
    }, {
      by: 'author',
      content: [{ markdown: 'chào mừng đã đến với trang của tôi 😆' }, { markdown: 'chúc bạn một ngày tốt lành!' }, { markdown: 'cơ mà bạn muốn biết gì về tôi nhỉ?' }]
    }, {
      by: 'guest',
      content: [{ markdown: 'eo ơi 😳 cơ mà bạn là ai í nhỉ?' }]
    }, {
      by: 'author',
      content: [{ markdown: 'tên tôi là **Hiếu**, Lâm Hiếu!' }]
    }, {
      by: 'guest',
      content: [{ markdown: 'nói cho tôi thêm về bạn đi 🤔' }]
    }, {
      by: 'author',
      content: [{ markdown: 'à vâng' }, {
        markdown: 'tôi là một lập trình viên, tôi yêu công việc của mình. tôi luôn mong muốn mang đến cho mọi người những sản phẩm hữu ích với chất lượng tốt nhất. tôi thích tham gia các cộng đồng về lập trình, tôi thích xem những bài diễn thuyết của các bạn đi trước để củng cố thêm mớ kiến thức ít ỏi của mình 🤓 nên thật tuyệt nếu được học hỏi thêm gì đó từ bạn 😆'
      }, {
        markdown: 'tôi mang trong mình niềm đam mê về lập trình rất lớn, no dường như đã thấm sâu vào cơ thể tôi ngay từ những ngày tôi biết đến nó, cơ duyên tôi tìm đến lập trình 💻 là một ngày rất tình cờ khi tôi còn là một học sinh tiểu học 👨‍🎓, dần dần thì tôi biết nó là đam mê của đời tôi 👨‍💻'
      }, {
        markdown: 'vì lập trình với tôi là đam mê nên có lẻ tôi rất khó có thể sống nếu thiếu nó 😙'
      }]
    }, {
      by: 'guest',
      content: [{ markdown: 'sở thích của bạn là gì?' }]
    }, {
      by: 'author',
      content: [{
        markdown: 'sở thích của tôi cũng đơn giản thôi, đó là được chụp ảnh nghệ thuật 📸 xem phim 🎞 nghe nhạc 🎶 đọc sách 📚 du lịch 🏍 và nhiều nhiều thứ khác nữa 😝'
      }]
    }]
  },
  info: {
    color: '#00897b',
    icon: 'credit-card',
    title: 'Info',
    messages: [{
      by: 'guest',
      content: [{ markdown: 'bạn đến từ đâu ấy nhỉ? 🤔' }]
    }, {
      by: 'author',
      content: [{ markdown: '**bạc liêu** bạn ơi, nơi ấy hơi có bị đỉnh đó nha 😎' }, {
        markdown: 'à mà sẵn đây khai luôn, tôi là **nam**, tôi là có quốc tịch **việt nam** 🇻🇳 nhưng được gọi là công dân **quốc tế** í ạ 😄'
      }, {
        markdown: 'vì là người việt nên tôi nói tiếng việt rất giỏi 🤪 còn tiếng anh thì tôi đang luyện tập thêm đây ạ 😔'
      }]
    }, {
      by: 'guest',
      content: [{ markdown: 'à mà bạn bao nhiêu tuổi nhỉ?' }]
    }, {
      by: 'author',
      content: [{ markdown: 'già lắm rồi nên không nói đâu bạn ơi 😰' }]
    }, {
      by: 'guest',
      content: [{ markdown: 'trích dẫn yêu thích của bạn là gì?' }]
    }, {
      by: 'author',
      content: [{ markdown: '**yep, never give up.**' }]
    }]
  },
  experience: {
    color: '#f4511e',
    icon: 'object-ungroup',
    title: 'Experience',
    messages: [{
      by: 'guest',
      content: [{
        markdown: 'tôi hơi tò mò về kinh nghiệm trong công việc của bạn đấy 😐'
      }]
    }, {
      by: 'author',
      content: [{
        progress: {
          title: 'front-end',
          items: [{
            name: 'html & css',
            value: 90
          }, {
            name: 'javascript (react, jquery,...) - es6/es7',
            value: 85
          }]
        }
      }, {
        progress: {
          title: 'back-end',
          items: [{
            name: 'php',
            value: 75
          }, {
            name: 'mysql',
            value: 60
          }, {
            name: 'nodejs',
            value: 65
          }, {
            name: 'mongodb',
            value: 45
          }]
        }
      }, {
        progress: {
          title: '...',
          items: [{
            name: 'caching',
            value: 60
          }, {
            name: 'ffmpeg',
            value: 45
          }, {
            name: 'imagick',
            value: 55
          }, {
            name: 'bash',
            value: 25
          }, {
            name: 'flow / eslint',
            value: 70
          }, {
            name: 'graphql',
            value: 55
          }, {
            name: 'git',
            value: 45
          }, {
            name: 'jest / enzyme',
            value: 55
          }, {
            name: 'design / animations',
            value: 45
          }]
        }
      }, {
        markdown: 'nói thêm một chút, những thứ tôi liệt kê là những thứ đã làm qua và tôi không ngại nếu được học hỏi thêm về những công nghệ mới nếu các dự án của tôi thực hiện cần đến nó, học hỏi thêm những thứ mới là một trong những điều tuyệt vời ấy mà tôi thích 🤩. ngoài ra, tôi còn là người lập kiêm hỗ trợ của [ciser](https://github.com/lamhieu-vk/ciser), một công cụ giúp rút ngắn thời gian thiết kế giao diện đa màn hình trong lập trình, một công cụ rất hữu ít nếu bạn sử dụng 😆'
      }]
    }]
  },
  skills: {
    color: '#ffb300',
    icon: 'lightbulb-o',
    title: 'Skills',
    messages: [{
      by: 'guest',
      content: [{
        markdown: 'ngoài những thứ kể trên, bạn còn có gì cho tôi biết thêm không?'
      }]
    }, {
      by: 'author',
      content: [{
        markdown: 'à, tôi còn có vài kỹ năng mềm cơ bản nữa ấy... 😅'
      }, {
        progress: {
          items: [{
            name: 'giao tiếp',
            value: 85
          }, {
            name: 'sáng tạo',
            value: 90
          }, {
            name: 'tư duy phản biện',
            value: 75
          }, {
            name: 'tinh thần học hỏi',
            value: 85
          }, {
            name: 'kỹ năng phân tích',
            value: 80
          }, {
            name: 'làm việc nhóm',
            value: 77.5
          }]
        }
      }]
    }]
  },
  education: {
    color: '#5e35b1',
    icon: 'university',
    title: 'Education',
    messages: [{
      by: 'guest',
      content: [{
        markdown: 'cơ mà hình như bạn chưa nói về việc học của mình thì phải? 🤔'
      }]
    }, {
      by: 'author',
      content: [{
        markdown: 'thật ra thì việc học của tôi cũng chẳng có gì đặt biệt cả và nó thế này...'
      }, {
        timeline: [{
          title: 'tốt nghiệp trung học',
          subtitle: 'trường thpt gành hào',
          date: '🤷‍♂️ - 07/2017'
        }]
      }]
    }]
  },
  workplaces: {
    color: '#546e7a',
    icon: 'suitcase',
    title: 'Workplaces',
    messages: [{
      by: 'guest',
      content: [{
        markdown: 'thế còn công việc của bạn thì sao?'
      }]
    }, {
      by: 'author',
      content: [{
        markdown: 'sau khi học xong trung học, tôi quyết định tạm dừng con đường học tập mà đi theo đuổi đam mê ngay lúc đó... đến tận hôm nay luôn ạ 🤓'
      }, {
        timeline: [{
          title: 'người sáng lập & phát triển',
          subtitle: 'giccos',
          date: '03/2015 - 10/2016',
          description: 'đây là dự án phát triển mã nguồn mạng xã hội được thực hiện bởi cá nhân tôi nhầm phân tích, tìm hiểu cách thức hoạt động của hệ thống lớn, phục vụ như người người dùng với số lượng truy cập cao, đảm bảo tính ổn định và trãi nghiệm người dùng tốt nhất. đây là dự án cá nhân trong lúc tôi còn là một học sinh cấp ba, nó mở ra cho tôi một cách nhìn mới về lập trình hướng đối tượng'
        }],
        progress: {
          items: [{
            name: 'front-end (html & css, js, jquery,...)',
            value: 35
          }, {
            name: 'back-end (php & mysql)',
            value: 50
          }, {
            name: '... (imagick, ffmpeg, bash,...)',
            value: 15
          }]
        }
      }, {
        timeline: [{
          title: 'lập trình viên',
          subtitle: 'connected jsc',
          date: '07/2017 - 02/2018',
          description: 'tại môi trường làm việc nơi đây tôi được học hỏi thêm rất nhiều về mặt kiến thức lẫn khả năng tư duy phân tích vấn đề. chúng tôi (tôi + 1) cùng nhau làm việc hơn 20 dự án lớn nhỏ khác nhau, chúng tôi phát triển công cụ giúp đơn giản hóa việc phát triển một website nhưng vẫn tối ưu hóa những tính năng và hiệu năng cần thiết'
        }],
        progress: {
          items: [{
            name: 'front-end (html & css, js, react,...)',
            value: 70
          }, {
            name: 'back-end (nodejs & mongodb)',
            value: 30
          }]
        }
      }, {
        markdown: 'hiện tại tôi đang nghiên cứu và trao dồi thêm kinh nghiệm làm việc của mình, nếu bạn muốn hợp tác với tôi thì có thể liên lạc với tôi theo thông tin cuối trang 🤙 và thật tuyệt vời nếu được học hỏi thêm những điều thú vị từ bạn 👏'
      }]
    }]
  },
  contact: {
    color: '#6D4C41',
    icon: 'user',
    title: 'Contact',
    messages: [{
      by: 'guest',
      content: [{
        markdown: 'tôi có thể liên lạc với bạn bằng cách nào? 🤔'
      }]
    }, {
      by: 'author',
      content: [{
        markdown: 'à vâng 😶 đây là thông tin liên lạc của tôi...'
      }, {
        markdown: '### thông tin liên lạc',
        contact: [{
          icon: 'phone',
          href: 'tel:0946083033',
          label: 'phone',
          value: '+84 946 083 033'
        }, {
          icon: 'envelope',
          href: 'mailto:lamhieu.vk@gmail.com',
          label: 'email',
          value: 'lamhieu.vk@gmail.com'
        }, {
          icon: 'facebook',
          href: 'https://fb.com/lamhieu.me',
          label: 'facebook',
          value: 'fb/lamhieu.me'
        }, {
          icon: 'twitter',
          href: 'https://twitter.com/_lamhieu',
          label: 'twitter',
          value: 'twitter/_lamhieu'
        }, {
          icon: 'github-alt',
          href: 'https://github.com/lamhieu-vk',
          label: 'github',
          value: 'github/lamhieu-vk'
        }, {
          icon: 'skype',
          href: 'skype:lamhieu@outlook.com?call',
          label: 'skype',
          value: 'lamhieu@outlook.com'
        }]
      }, {
        markdown: 'liên lạc với tôi khi bạn cần sự giúp đỡ 👍'
      }]
    }, {
      by: 'guest',
      content: [{
        markdown: 'à vâng, tôi sẽ liên lạc với bạn sớm thôi...'
      }]
    }, {
      by: 'author',
      content: [{
        markdown: 'ohh yeah, cảm ơn vì đã ghé thăm nhà tôi 😆'
      }]
    }]
  }
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/cover.23dcbf12.jpg";

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB50lEQVRYhdVWS0tCQRg9Pq6p9/Ywu6WU0gOLEiIoEHFTmyDaRLtaBe36P21a1NJdQUEQrYKIgqIi6WUPMtIsM7UUzawW+bjiWE4UY2d15575vu/MHGbmk6lnTO9gCDnL4mUhQDllm8gOnPsLeIyHAQADLQ501lsKAm6f7jB/uExMNtY9Ap2mpuD/ns+FDc82AMAgiBi1DucEiLw+O1DIFdlvoYKHlMsg/poouhqdpoYYw6v4XEG5Mm8Ocwtk9qWh7Ck4vHcjkV6huboReq0OANBW2wxrQwcA4PklitPABTFZl2iBmlMD+Nx2T+gGAOCPBuCN3AIAeE6L9rrWnIBSjqHd1ItBSz/VyhaPVrDrc307j7kFStqAp8QzDvzHRK7HaIWW0/ytgFA8gtWzNSJn0bdQC/h/FqgUHJqqjESOk1OnoxfQIIiY7BunLlQMzC1gLiDvIpqyTRDvcimuw17M7jiJ3E/ime8AcwHUp8AgiJD2EFKQeoFfF8ApuG99psH/syAYC2H9aovIDbQ6UFkh/K2AaDJW9J23m/uoBZSXBXs+V14DSULqLQW7qZfInQTO4X64/DI+lO66MyipJZOiqcpY9DGa3pxDIBakSVdmFpSCl1QS12EvkUu+vVILoLbgt8HcAuYCPgBldIQ/I4Q31gAAAABJRU5ErkJggg=="

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABhklEQVQ4jaWQS0sCYRiFH2skL5iGXdTGxlVmoUVRq3ZBRBD0+/oB7doEEW6CIIjaSFAYFUQ2aKWTl5wZL+W0qAaiPit6N+8H5+V85zkO10bU4h8jzY/OcK+XyFVUJofH8To9AFyXc5SMRwCGvYMoARmAeksnW7wkFogy5A0ircaXOFYz5Coqi8oCYd8IANvZtG2gBGRW40sA3FbzZIuXJEMJZiNJHLHNOctoG9SadYKeAeT+COuTK1QaNcy2CYDH6cHv8rF1tkOhdo9mlvH3+XA73Uh39QebRzPKuCUXAJ1Oh+fOy9vbetsl/RHNLANQbT5RbT4hico5uDkiUzgFYH50xkb4UqLIYDo8heyPADDkDYrOxAZKQLab7zYO10bU+i7idjbdFeFDFyaIDYwh9Uh2mj8jpEIJUqHEjwhCg/3rQ86LVwBMjcRZVBbEBvWWzm01/0kw2w2knl4AjLb5RddbBvBe4nfOaxPLzEaSAByrGXYv9v6GcFI4Q33/tahrojNxgt/OKwkCl/We8YkmAAAAAElFTkSuQmCC"

/***/ }),
/* 31 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=app.static.91e615de.js.map