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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var merge = __webpack_require__(5);

var configs = {},
    config = {};

Object.defineProperties(configs, {
	local: {
		get: function get() {
			return __webpack_require__(18);
		}
	},
	development: {
		get: function get() {
			return __webpack_require__(17);
		}
	},
	test: {
		get: function get() {
			return __webpack_require__(21);
		}
	},
	staging: {
		get: function get() {
			return __webpack_require__(20);
		}
	},
	production: {
		get: function get() {
			return __webpack_require__(19);
		}
	}
});

config = configs[process.env.NODE_ENV || 'local'];

var envConfig = process.env.config || '{}';

config = merge(config, JSON.parse(envConfig));

var mergedConfig = config;

exports.init = function (options) {
	options = options || {};

	var mappings = options.mappings || {},
	    mergedConfig,
	    merged = {};

	mergedConfig = merge(config, merged);
	var env = process.env.NODE_ENV || 'local';
	console.log('******* Configuration %s *******\nNODE_ENV=%s\n\n%s', env, env, JSON.stringify(mergedConfig, null, 2));
	return mergedConfig;
};

module.exports = exports.init();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(2);

var _app = __webpack_require__(22);

var _app2 = _interopRequireDefault(_app);

var _main = __webpack_require__(6);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, res, data) {
    if (req.query.hasOwnProperty('json')) {
        res.json(data);
    } else {
        var appString = (0, _server.renderToString)(_react2.default.createElement(_app2.default, data));
        res.send((0, _main2.default)({
            body: appString,
            initialState: data
        }));
    }
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("merge");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(2);

var _main = __webpack_require__(30);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var body = _ref.body,
        title = _ref.title,
        platform = _ref.platform,
        initialState = _ref.initialState;
    return '\n<!DOCTYPE html>\n<html>\n\n    <head>\n        <script>window.__APP_INITIAL_STATE__ = ' + JSON.stringify(initialState) + '</script>\n\n        <meta property="og:type" content="non_profit">\n        <meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui" />\n        <meta charset="utf-8" />\n\n        <link rel="stylesheet" href="/static/assets/app.css" />\n\n    </head>\n\n    <body>\n\n        <main id="root">\n            <div>\n                ' + body + '\n            </div>\n        </main>\n\n        <script src="/static/assets/bundle.js"></script>\n    </body>\n</html>\n';
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(1);

var _express2 = _interopRequireDefault(_express);

var _fs = __webpack_require__(7);

var _fs2 = _interopRequireDefault(_fs);

var _renderer = __webpack_require__(4);

var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// This is what adds support for ?format=json, ?json, or Content-Type=application/json

if (process.env.NODE_ENV !== 'stage' || process.env.NODE_ENV !== 'production') {
    router.get('/:componentPath(*)', function (req, res, next) {
        _fs2.default.readFile(__dirname + '/src/components/' + req.params.componentPath + '/data.json', 'utf8', function (err, data) {
            if (!err) {
                data = JSON.parse(data);

                data = {
                    partialName: 'landing',
                    components: [data]
                };

                (0, _renderer2.default)(req, res, data);
            };
        });
    });
}

module.exports = router;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(1);

var _express2 = _interopRequireDefault(_express);

var _fs = __webpack_require__(7);

var _fs2 = _interopRequireDefault(_fs);

var _renderer = __webpack_require__(4);

var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// This is what adds support for ?format=json, ?json, or Content-Type=application/json

if (process.env.NODE_ENV !== 'stage' || process.env.NODE_ENV !== 'production') {
    router.get('/:layoutPath(*)', function (req, res, next) {
        _fs2.default.readFile(__dirname + '/src/layouts/' + req.params.layoutPath + '/data.json', 'utf8', function (err, data) {
            if (!err) {
                data = JSON.parse(data);

                (0, _renderer2.default)(req, res, data);
            };
        });
    });
}

module.exports = router;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _middleware = __webpack_require__(27);

var _middleware2 = _interopRequireDefault(_middleware);

var _merge = __webpack_require__(5);

var _merge2 = _interopRequireDefault(_merge);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(2);

var _renderer = __webpack_require__(4);

var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = __webpack_require__(1),
    router = express.Router();

var render = function render() {
    return function (req, res, next) {
        if (res.locals.data.partialName !== 'error') {
            (0, _renderer2.default)(req, res, res.locals.data);
        } else {
            next();
        }
    };
};

router.get(['^/((?!components|layouts|search)[a-z-]*$)', '/'], function (req, res, next) {
    _middleware2.default.getPage(req, res, function (data) {
        res.locals.data = (0, _merge2.default)(res.locals.data, data);
        next();
    });
}, render());

module.exports = router;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  endpoints: {
    'dynamic': {
      publish: {
        uri: 'endpointURI',
        'timeout': 10000,
        'cache-timeout': 21600
      },
      preview: {
        uri: 'endpointURI',
        'timeout': 10000,
        'cache-timeout': 21600
      }
    }
  }
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  endpoints: {
    'dynamic': {
      publish: {
        uri: 'endpointURI',
        'timeout': 10000,
        'cache-timeout': 21600
      },
      preview: {
        uri: 'endpointURI',
        'timeout': 10000,
        'cache-timeout': 21600
      }
    }
  }
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  endpoints: {
    'dynamic': {
      publish: {
        uri: 'endpointURI',
        'timeout': 10000,
        'cache-timeout': 21600
      },
      preview: {
        uri: 'endpointURI',
        'timeout': 10000,
        'cache-timeout': 21600
      }
    }
  }
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  endpoints: {
    'dynamic': {
      publish: {
        uri: 'endpointURI',
        'timeout': 10000,
        'cache-timeout': 21600
      },
      preview: {
        uri: 'endpointURI',
        'timeout': 10000,
        'cache-timeout': 21600
      }
    }
  }
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  endpoints: {
    'dynamic': {
      publish: {
        uri: 'endpointURI',
        'timeout': 10000,
        'cache-timeout': 21600
      },
      preview: {
        uri: 'endpointURI',
        'timeout': 10000,
        'cache-timeout': 21600
      }
    }
  }
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _landing = __webpack_require__(24);

var _landing2 = _interopRequireDefault(_landing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            switch (this.props.partialName) {
                case 'landing':
                    return _react2.default.createElement(_landing2.default, this.props);
                    break;
                default:
                    return _react2.default.createElement(_landing2.default, this.props);
                    break;
            }
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _style = __webpack_require__(28);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HelloWorld = function (_Component) {
    _inherits(HelloWorld, _Component);

    function HelloWorld() {
        _classCallCheck(this, HelloWorld);

        return _possibleConstructorReturn(this, (HelloWorld.__proto__ || Object.getPrototypeOf(HelloWorld)).apply(this, arguments));
    }

    _createClass(HelloWorld, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'h1',
                { className: _style2.default['hello-world'] + ' ' + this.props.className },
                this.props.title
            );
        }
    }]);

    return HelloWorld;
}(_react.Component);

exports.default = HelloWorld;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _style = __webpack_require__(29);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CampaignLanding = function (_Component) {
    _inherits(CampaignLanding, _Component);

    function CampaignLanding() {
        _classCallCheck(this, CampaignLanding);

        return _possibleConstructorReturn(this, (CampaignLanding.__proto__ || Object.getPrototypeOf(CampaignLanding)).apply(this, arguments));
    }

    _createClass(CampaignLanding, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: '' + _style2.default['landing'] },
                this.props.components.map(function (component, index) {
                    var Comp = __webpack_require__(31)("./" + component.partialName + '/index.js').default;
                    return _react2.default.createElement(Comp, _extends({ key: index }, component));
                })
            );
        }
    }]);

    return CampaignLanding;
}(_react.Component);

exports.default = CampaignLanding;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(1);

var _express2 = _interopRequireDefault(_express);

var _http = __webpack_require__(14);

var _http2 = _interopRequireDefault(_http);

var _https = __webpack_require__(15);

var _https2 = _interopRequireDefault(_https);

var _path = __webpack_require__(16);

var _path2 = _interopRequireDefault(_path);

var _bodyParser = __webpack_require__(11);

var _helmet = __webpack_require__(13);

var _helmet2 = _interopRequireDefault(_helmet);

var _compression = __webpack_require__(12);

var _compression2 = _interopRequireDefault(_compression);

var _config = __webpack_require__(3);

var _config2 = _interopRequireDefault(_config);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(2);

var _main = __webpack_require__(6);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var oneDay = 86400000,
    oneWeek = 604800000,
    oneYear = 31536000000;

var server = (0, _express2.default)();

server.use('/dist', _express2.default.static('dist'));

// Use gzip compression
server.use((0, _compression2.default)());

//Dont's cap outbound connections
_http2.default.globalAgent.maxSockets = 9999;
_https2.default.globalAgent.maxSockets = 9999;

// all environments
server.set('port', process.env.PORT || 4000);

//Body Parser for dealing with POSTs
server.use((0, _bodyParser.json)());
server.use((0, _bodyParser.urlencoded)({ extended: true }));

//Security stuff for kicks and giggles
if (process.env.NODE_ENV !== 'staging' || process.env.NODE_ENV !== 'production') {
    server.use(_helmet2.default.frameguard({ action: 'deny' }));
    server.use(_helmet2.default.xssFilter());
    server.enable('view cache');
}

server.disable('x-powered-by');

server.use('/static', _express2.default.static(_path2.default.join(__dirname, '/dist'), { maxAge: oneDay }));

server.use('/components', __webpack_require__(8));
server.use('/layouts', __webpack_require__(9));
server.use('/', __webpack_require__(10));

server.use(function (err, req, res, next) {
    console.log(err);
    req.params.err = err;
    logger.error(JSON.stringify(err, null, 4));
    res.status(err.status || 500);
    res.send((0, _main2.default)({
        body: err,
        title: 'Error',
        initialState: {}
    }));
});

module.exports = server;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _request = __webpack_require__(34);

var _request2 = _interopRequireDefault(_request);

var _config = __webpack_require__(3);

var _config2 = _interopRequireDefault(_config);

var _memoizee = __webpack_require__(33);

var _memoizee2 = _interopRequireDefault(_memoizee);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var get = function get(host, cookie, endpointPath, queryStrings, callback) {
	var context = host.indexOf('preview') > -1 ? 'preview' : 'publish';
	var headers = {};
	endpointPath = endpointPath || 'section';

	headers.cookie = cookie;
	if (context) {
		headers.context = context;
	}
	if (queryStrings.lang) {
		headers['Accept-Language'] = queryStrings.lang;
	}
	var options = {
		url: _config2.default.endpoints[endpointPath][context].uri,
		headers: headers,
		timeout: _config2.default.endpoints[endpointPath][context].timeout || 5000,
		qs: queryStrings
	};

	function processError(body, response) {
		var err = new Error(body.message);
		err.name = body.error;
		err.statusCode = response.statusCode;
		return err;
	}
	(0, _request2.default)(options, function (error, response, body) {
		if (error) {
			callback(error);
		} else {
			try {
				body = JSON.parse(body);
				if (!body) {
					callback('No Content Found');
					return;
				}
			} catch (err) {
				callback(err);
				return;
			}
			if (response.statusCode >= 400) {
				callback(processError(body, response));
			} else {
				callback(null, body);
			}
		}
		return;
	});
};

// EXPORTS
module.exports = {
	get: (0, _memoizee2.default)(get, {
		maxAge: 1000 * 60,
		async: true,
		normalizer: function normalizer(args) {
			return JSON.stringify(args);
		}
	})
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _dataService = __webpack_require__(26);

var _dataService2 = _interopRequireDefault(_dataService);

var _async = __webpack_require__(32);

var _async2 = _interopRequireDefault(_async);

var _config = __webpack_require__(3);

var _config2 = _interopRequireDefault(_config);

var _merge = __webpack_require__(5);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var get = function get(req, queryStrings, endpoint) {
  return function (callback) {
    _dataService2.default.get(req.hostname, req.headers.cookie, endpoint, queryStrings, function (error, data) {
      if (error) {
        callback(error);
      } else {
        callback(null, data);
      }
    });
  };
};

var getPage = function getPage(req, res, next) {
  var data = {
    "partialName": "landing",
    "components": [{
      "partialName": "hello-world",
      "title": "Hello World"
    }]
  };
  next(data);
};

module.exports = {
  getPage: getPage
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"hello-world":"hello-world"};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"landing":"landing"};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./hello-world/index.js": 23
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 31;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("async");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("memoizee");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("request");

/***/ })
/******/ ]);