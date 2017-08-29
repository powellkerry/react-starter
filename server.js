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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var merge = __webpack_require__(6);

var configs = {},
    config = {};

Object.defineProperties(configs, {
	local: {
		get: function get() {
			return __webpack_require__(24);
		}
	},
	dev: {
		get: function get() {
			return __webpack_require__(23);
		}
	},
	test: {
		get: function get() {
			return __webpack_require__(27);
		}
	},
	stage: {
		get: function get() {
			return __webpack_require__(26);
		}
	},
	prod: {
		get: function get() {
			return __webpack_require__(25);
		}
	}
});

config = configs[process.env.NODE_ENV || 'local'];

var vcap = process.env.NO_VCAP ? {} : __webpack_require__(52);

var envConfig = process.env.config || '{}';

config = merge(config, JSON.parse(envConfig));

var mergedConfig = merge(config, vcap);

exports.init = function (options) {
	options = options || {};

	var mappings = options.mappings || {},
	    mergedConfig,
	    merged = {};

	for (var prop in vcap) {
		merged[prop] = merge(config[mappings[prop] || prop], vcap[prop].credentials);
	}

	mergedConfig = merge(config, merged);
	var env = process.env.NODE_ENV || 'local';
	console.log('******* Configuration %s *******\nNODE_ENV=%s\n\n%s', env, env, JSON.stringify(mergedConfig, null, 2));
	return mergedConfig;
};

module.exports = exports.init();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./columns/index.js": 29,
	"./confirm/index.js": 8,
	"./content-block/index.js": 30,
	"./form-component/index.js": 31,
	"./form-field/index.js": 32,
	"./icon/index.js": 9,
	"./page-title/index.js": 33,
	"./referral/index.js": 34,
	"./section/index.js": 35
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
webpackContext.id = 4;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(3);

var _app = __webpack_require__(28);

var _app2 = _interopRequireDefault(_app);

var _main = __webpack_require__(7);

var _main2 = _interopRequireDefault(_main);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, res, data) {

    data.dtm = _config2.default.dtm;
    data.dtm.properties.locale = req.query.lang || 'eng';
    data.dtm.properties.pageType = data.meta && data.meta.pageType ? data.meta.pageType : 'unknown';

    if (data.pageMeta) {
        data.pageMeta.map(function (meta) {
            if (meta.isTitle) {
                data.dtm.properties.pageName = meta.value;
            }
        });
    }

    if (req.query.hasOwnProperty('json')) {
        res.json(data);
    } else {
        var platform = data.platform || '';
        if (data.platform) {
            // React doesn't like to have extra things in state
            delete data.platform;
        }
        var appString = (0, _server.renderToString)(_react2.default.createElement(_app2.default, data));
        res.send((0, _main2.default)({
            body: appString,
            initialState: data,
            platform: platform
        }));
    }
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("merge");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(3);

var _main = __webpack_require__(50);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var body = _ref.body,
        title = _ref.title,
        platform = _ref.platform,
        initialState = _ref.initialState;
    return '\n<!DOCTYPE html>\n<html>\n\n    <head>\n        <script>window.__APP_INITIAL_STATE__ = ' + JSON.stringify(initialState) + '</script>\n\n        <meta property="og:type" content="non_profit">\n        <meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui" />\n        <meta charset="utf-8" />\n\n        ' + (platform && platform.headHTML ? platform.headHTML : '') + '\n\n        <link rel="stylesheet" href="/missionaries/static/assets/app.css" />\n\n    </head>\n\n    <body>\n        ' + (platform && platform.header ? platform.header : '') + '\n        <main id="root" class="lumen-content">\n            <div>\n                ' + body + '\n            </div>\n        </main>\n        ' + (platform && platform.footer ? platform.footer : '') + '\n        <script src="/missionaries/static/assets/bundle.js"></script>\n    </body>\n</html>\n';
};

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

var _style = __webpack_require__(41);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Icon = function (_Component) {
    _inherits(Icon, _Component);

    function Icon() {
        _classCallCheck(this, Icon);

        return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
    }

    _createClass(Icon, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: '' + _style2.default['confirm'] },
                _react2.default.createElement(
                    'h3',
                    { className: '' + _style2.default['confirm__title'] },
                    this.props.title
                ),
                _react2.default.createElement('div', { className: '' + _style2.default['confirm__message'], dangerouslySetInnerHTML: { __html: this.props.message } }),
                _react2.default.createElement(
                    'div',
                    { className: '' + _style2.default['confirm__controls'] },
                    _react2.default.createElement(
                        'button',
                        { type: 'button', className: '' + _style2.default['confirm__continue'], onClick: this.props.continue },
                        this.props.continueText
                    ),
                    _react2.default.createElement(
                        'button',
                        { type: 'button', className: '' + _style2.default['confirm__cancel'], onClick: this.props.cancel },
                        this.props.cancelText
                    )
                )
            );
        }
    }]);

    return Icon;
}(_react.Component);

exports.default = Icon;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _style = __webpack_require__(45);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Icon = function (_Component) {
    _inherits(Icon, _Component);

    function Icon() {
        _classCallCheck(this, Icon);

        return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
    }

    _createClass(Icon, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'svg',
                { className: _style2.default.icon + ' ' + (this.props.className || '') + ' ' + _style2.default['icon__' + this.props['icon-name']], viewBox: '0 0 32 32', preserveAspectRatio: 'xMinYMin meet' },
                _react2.default.createElement('use', { xlinkHref: '/missionaries/static/assets/icons.svg#' + this.props['icon-name'] })
            );
        }
    }]);

    return Icon;
}(_react.Component);

exports.default = Icon;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(2);

var _express2 = _interopRequireDefault(_express);

var _http = __webpack_require__(19);

var _http2 = _interopRequireDefault(_http);

var _https = __webpack_require__(20);

var _https2 = _interopRequireDefault(_https);

var _path = __webpack_require__(22);

var _path2 = _interopRequireDefault(_path);

var _bodyParser = __webpack_require__(16);

var _helmet = __webpack_require__(18);

var _helmet2 = _interopRequireDefault(_helmet);

var _compression = __webpack_require__(17);

var _compression2 = _interopRequireDefault(_compression);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _ldsLogger = __webpack_require__(21);

var _ldsLogger2 = _interopRequireDefault(_ldsLogger);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(3);

var _main = __webpack_require__(7);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = _ldsLogger2.default.createLogger('');

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

server.use('/missionaries/static', _express2.default.static(_path2.default.join(__dirname, '/dist'), { maxAge: oneDay }));

server.use('/missionaries/components', __webpack_require__(13));
server.use('/missionaries/layouts', __webpack_require__(14));
server.use('/', __webpack_require__(15));

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
/* 11 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("request");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(2);

var _express2 = _interopRequireDefault(_express);

var _fs = __webpack_require__(11);

var _fs2 = _interopRequireDefault(_fs);

var _renderer = __webpack_require__(5);

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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(2);

var _express2 = _interopRequireDefault(_express);

var _fs = __webpack_require__(11);

var _fs2 = _interopRequireDefault(_fs);

var _renderer = __webpack_require__(5);

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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _middleware = __webpack_require__(39);

var _middleware2 = _interopRequireDefault(_middleware);

var _merge = __webpack_require__(6);

var _merge2 = _interopRequireDefault(_merge);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(3);

var _renderer = __webpack_require__(5);

var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = __webpack_require__(2),
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

router.get(['^missionaries/((?!components|layouts|search)[a-z-]*$)', '/missionaries'], function (req, res, next) {
    _middleware2.default.getPage(req, res, function (data) {
        res.locals.data = (0, _merge2.default)(res.locals.data, data);
        next();
    });
}, render());

module.exports = router;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("lds-logger");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	cdn: {
		"url": "//test.ldscdn.org"
	},
	"healthcheck": {
		"applicationName": "project-name",
		"dependencies": []
	},
	platform: {
		client: "699ffd73a859415fb461fd738279024f",
		secret: "5febdf18f65f44ba82C3E396A11C6644",
		env: "test"
	},

	dtm: {
		src: "https://assets.adobedtm.com/05c94072b1046aef0dc9b195809b4d2429a0d30a/satelliteLib-370d58a2a683541b063faecbf4c74eb1abfed29b.js",
		properties: {
			channel: 'lds.org:si'
		}
	},

	cache: {
		response: 60 * 60 * 3, // In seconds
		endpoints: 60 * 5 // In seconds
	},

	endpoints: {}
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	cdn: {
		"url": "//test.ldscdn.org"
	},
	"healthcheck": {
		"applicationName": "project-name",
		"dependencies": [{
			"applicationName": "S&I API",
			"url": "http://si-api-local.app-local.lds.org/si/api/ping",
			"timeout": 4000
		}, {
			"applicationName": "S&I CMS",
			"url": "http://content-local.ldschurch.org/si/sites/si/api/v2/ping",
			"timeout": 4000
		}]
	},
	platform: {
		client: "699ffd73a859415fb461fd738279024f",
		secret: "5febdf18f65f44ba82C3E396A11C6644",
		env: "test"
	},

	dtm: {
		src: "http://assets.adobedtm.com/05c94072b1046aef0dc9b195809b4d2429a0d30a/satelliteLib-370d58a2a683541b063faecbf4c74eb1abfed29b.js",
		properties: {
			channel: 'lds.org:si'
		}
	},

	cache: {
		response: 60 * 60 * 3, // In seconds
		endpoints: 60 * 5 // In seconds
	},

	endpoints: {}
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	cdn: {
		"url": "//test.ldscdn.org"
	},
	"healthcheck": {
		"applicationName": "project-name",
		"dependencies": [{
			"applicationName": "S&I API",
			"url": "https://si-api.app.lds.org/si/api/ping",
			"timeout": 4000
		}, {
			"applicationName": "S&I CMS",
			"url": "https://content.ldschurch.org/si/sites/si/api/v2/ping",
			"timeout": 4000
		}]
	},
	platform: {
		client: "f53f6b34445146b5922b2cf0f531e0e1",
		secret: "197bc863d096432dA0E428BB3B13C450",
		environment: "production"
	},

	dtm: {
		src: "//assets.adobedtm.com/05c94072b1046aef0dc9b195809b4d2429a0d30a/satelliteLib-370d58a2a683541b063faecbf4c74eb1abfed29b.js",
		properties: {
			channel: 'lds.org:si'
		}
	},

	cache: {
		response: 60 * 60 * 3, // In seconds
		endpoints: 60 * 5 // In seconds
	},

	endpoints: {}
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	cdn: {
		"url": "https://stage.ldscdn.org"
	},
	"healthcheck": {
		"applicationName": "S&I Web",
		"dependencies": [{
			"applicationName": "S&I API",
			"url": "https://si-api.app-stage.lds.org/si/api/ping",
			"timeout": 4000
		}, {
			"applicationName": "S&I CMS",
			"url": "https://content-stage.ldschurch.org/si/sites/si/api/v2/ping",
			"timeout": 4000
		}]
	},
	platform: {
		client: "699ffd73a859415fb461fd738279024f",
		secret: "5febdf18f65f44ba82C3E396A11C6644",
		env: "stage"
	},

	dtm: {
		src: "https://assets.adobedtm.com/05c94072b1046aef0dc9b195809b4d2429a0d30a/satelliteLib-370d58a2a683541b063faecbf4c74eb1abfed29b.js",
		properties: {
			channel: 'lds.org:si'
		}
	},

	cache: {
		response: 60 * 60 * 3, // In seconds
		endpoints: 60 * 5 // In seconds
	},

	endpoints: {}
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	cdn: {
		"url": "//test.ldscdn.org"
	},
	"healthcheck": {
		"applicationName": "project-name",
		"dependencies": [{
			"applicationName": "S&I API",
			"url": "https://si-api.app-test.lds.org/si/api/ping",
			"timeout": 4000
		}, {
			"applicationName": "S&I CMS",
			"url": "https://content-test.ldschurch.org/si/sites/si/api/v2/ping",
			"timeout": 4000
		}]
	},
	platform: {
		client: "699ffd73a859415fb461fd738279024f",
		secret: "5febdf18f65f44ba82C3E396A11C6644",
		env: "test"
	},
	dtm: {
		src: "//assets.adobedtm.com/05c94072b1046aef0dc9b195809b4d2429a0d30a/satelliteLib-370d58a2a683541b063faecbf4c74eb1abfed29b.js",
		properties: {
			channel: 'lds.org:si'
		}
	},

	cache: {
		response: 60, // In seconds
		endpoints: 5 // In seconds
	},

	endpoints: {}
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _landing = __webpack_require__(36);

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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _style = __webpack_require__(40);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Columns = function (_Component) {
    _inherits(Columns, _Component);

    function Columns(props) {
        _classCallCheck(this, Columns);

        var _this = _possibleConstructorReturn(this, (Columns.__proto__ || Object.getPrototypeOf(Columns)).call(this, props));

        _this.state = { expanded: false };
        _this.expand = function () {
            _this.setState({ expanded: true });
        };
        return _this;
    }

    _createClass(Columns, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: _style2.default['columns'] + ' ' + this.props.className },
                this.props.columns.map(function (column, index) {
                    return _react2.default.createElement(
                        'div',
                        { key: index, 'data-order': index, className: '' + _style2.default['columns__column'] },
                        column.expandable ? _react2.default.createElement(
                            'div',
                            { className: '' + _style2.default['columns__column__expand'], 'data-expanded': '' + _this2.state.expanded },
                            _react2.default.createElement(
                                'button',
                                { type: 'button', className: '' + _style2.default['columns__column__expand__button'], onClick: _this2.expand },
                                column.expanderText
                            )
                        ) : '',
                        _react2.default.createElement(
                            'div',
                            { className: '' + _style2.default['columns__column__container'], 'data-expanded': '' + (column.expandable ? _this2.state.expanded : true) },
                            column.components.map(function (component, index) {
                                var Comp = __webpack_require__(4)("./" + component.partialName + '/index.js').default;
                                return _react2.default.createElement(Comp, _extends({ key: index }, component));
                            })
                        )
                    );
                }),
                _react2.default.createElement(
                    'div',
                    { className: '' + _style2.default['columns__footer'], 'data-expanded': '' + this.state.expanded },
                    _react2.default.createElement('input', { className: '' + _style2.default['columns__submit'], type: 'submit', name: this.props.footer.submitText, value: this.props.footer.submitText }),
                    _react2.default.createElement(
                        'div',
                        { className: '' + _style2.default['columns__disclaimer'] },
                        this.props.footer.disclaimerText
                    )
                )
            );
        }
    }]);

    return Columns;
}(_react.Component);

exports.default = Columns;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _style = __webpack_require__(42);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContentBlock = function (_Component) {
    _inherits(ContentBlock, _Component);

    function ContentBlock() {
        _classCallCheck(this, ContentBlock);

        return _possibleConstructorReturn(this, (ContentBlock.__proto__ || Object.getPrototypeOf(ContentBlock)).apply(this, arguments));
    }

    _createClass(ContentBlock, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { className: _style2.default['content-block'] + ' ' + this.props.className, dangerouslySetInnerHTML: { __html: this.props.content } });
        }
    }]);

    return ContentBlock;
}(_react.Component);

exports.default = ContentBlock;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _style = __webpack_require__(43);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormComponent = function (_Component) {
    _inherits(FormComponent, _Component);

    function FormComponent() {
        _classCallCheck(this, FormComponent);

        return _possibleConstructorReturn(this, (FormComponent.__proto__ || Object.getPrototypeOf(FormComponent)).apply(this, arguments));
    }

    _createClass(FormComponent, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'form',
                { className: _style2.default['form'] + ' ' + this.props.className, action: this.props.submitUrl },
                this.props.components.map(function (component, index) {
                    var Comp = __webpack_require__(4)("./" + component.partialName + '/index.js').default;
                    return _react2.default.createElement(Comp, _extends({ key: index }, component));
                })
            );
        }
    }]);

    return FormComponent;
}(_react.Component);

exports.default = FormComponent;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _style = __webpack_require__(44);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormField = function (_Component) {
    _inherits(FormField, _Component);

    function FormField() {
        _classCallCheck(this, FormField);

        return _possibleConstructorReturn(this, (FormField.__proto__ || Object.getPrototypeOf(FormField)).apply(this, arguments));
    }

    _createClass(FormField, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: _style2.default['form-field'] + ' ' + this.props.className },
                _react2.default.createElement(
                    'label',
                    { className: '' + _style2.default['form-field__label'], htmlFor: this.props.name },
                    this.props.label
                ),
                function () {
                    switch (_this2.props.type) {
                        case 'textarea':
                            return _react2.default.createElement('textarea', { className: '' + _style2.default['form-field__input'], rows: '6', id: _this2.props.name, name: _this2.props.name, value: _this2.props.value });
                        case 'select':
                            return _react2.default.createElement(
                                'div',
                                { className: '' + _style2.default['form-field__select'] },
                                _react2.default.createElement(
                                    'select',
                                    { className: '' + _style2.default['form-field__input'], id: _this2.props.name, name: _this2.props.name },
                                    _this2.props.options.map(function (option, index) {
                                        return _react2.default.createElement(
                                            'option',
                                            { key: index, value: option.id },
                                            option.text
                                        );
                                    })
                                )
                            );
                        default:
                            return _this2.props.disabled ? _react2.default.createElement('input', { className: '' + _style2.default['form-field__input'], id: _this2.props.name, type: _this2.props.type, name: _this2.props.name, disabled: true, value: _this2.props.value }) : _react2.default.createElement('input', { className: '' + _style2.default['form-field__input'], id: _this2.props.name, type: _this2.props.type, name: _this2.props.name, value: _this2.props.value });
                    }
                }()
            );
        }
    }]);

    return FormField;
}(_react.Component);

exports.default = FormField;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _style = __webpack_require__(46);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageTitle = function (_Component) {
    _inherits(PageTitle, _Component);

    function PageTitle() {
        _classCallCheck(this, PageTitle);

        return _possibleConstructorReturn(this, (PageTitle.__proto__ || Object.getPrototypeOf(PageTitle)).apply(this, arguments));
    }

    _createClass(PageTitle, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'h1',
                { className: _style2.default['page-title'] + ' ' + this.props.className },
                this.props.title
            );
        }
    }]);

    return PageTitle;
}(_react.Component);

exports.default = PageTitle;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(55);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _style = __webpack_require__(47);

var _style2 = _interopRequireDefault(_style);

var _icon = __webpack_require__(9);

var _icon2 = _interopRequireDefault(_icon);

var _confirm = __webpack_require__(8);

var _confirm2 = _interopRequireDefault(_confirm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Referral = function (_Component) {
    _inherits(Referral, _Component);

    function Referral(props) {
        _classCallCheck(this, Referral);

        var _this = _possibleConstructorReturn(this, (Referral.__proto__ || Object.getPrototypeOf(Referral)).call(this, props));

        _this.state = { detailsExpanded: false };
        _this.toggleDetails = function () {
            _this.setState({ detailsExpanded: !_this.state.detailsExpanded });
        };

        _this.confirmDelete = function () {
            _this.referral.setAttribute('data-hidden', 'true');
            _this.confirmation.setAttribute('data-hidden', 'false');
        };

        _this.cancelDelete = function () {
            _this.referral.setAttribute('data-hidden', 'false');
            _this.confirmation.setAttribute('data-hidden', 'true');
        };

        _this.delete = function () {
            _this.setState({ detailsExpanded: _this.state.detailsExpanded || false, deleted: true });
        };
        return _this;
    }

    _createClass(Referral, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return !this.state.deleted ? _react2.default.createElement(
                'div',
                { className: _style2.default['referral'] + ' ' + this.props.className },
                _react2.default.createElement(
                    'div',
                    { className: '' + _style2.default['referral__container'], ref: function ref(referral) {
                            _this2.referral = referral;
                        } },
                    _react2.default.createElement(
                        'h3',
                        { className: '' + _style2.default['referral__name'] },
                        this.props.firstName,
                        ' ',
                        this.props.lastName,
                        ' ',
                        _react2.default.createElement(
                            'button',
                            { className: '' + _style2.default['referral__delete'], type: 'button', onClick: this.confirmDelete },
                            _react2.default.createElement(_icon2.default, { 'icon-name': 'delete' })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: '' + _style2.default['referral__status'] },
                        this.props.referralAssignedDateLabel,
                        ' ',
                        this.props.referralAssignedDate,
                        ', ',
                        this.props.referralStatusName
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: '' + _style2.default['referral__mission'] },
                        this.props.missionNameLabel,
                        ' ',
                        this.props.missionName
                    ),
                    this.props.missionaries ? this.props.missionaries.map(function (missionary, key) {
                        return _react2.default.createElement(
                            'div',
                            { className: '' + _style2.default['referral__missionary'], key: key },
                            _react2.default.createElement('img', { className: '' + _style2.default['referral__missionary__image'], src: missionary.photoUrl }),
                            _react2.default.createElement(
                                'span',
                                { className: '' + _style2.default['referral__missionary__name'] },
                                missionary.genderCode,
                                ' ',
                                missionary.firstName,
                                ' ',
                                missionary.lastName
                            )
                        );
                    }) : '',
                    this.props.areaNumbers ? this.props.areaNumbers.map(function (number, key) {
                        return _react2.default.createElement(
                            'a',
                            { href: 'tel:' + number, className: '' + _style2.default['referral__area-number'], key: key },
                            number
                        );
                    }) : '',
                    _react2.default.createElement(
                        'a',
                        { href: 'mailto:' + this.props.areaEmail, className: '' + _style2.default['referral__area-email'] },
                        this.props.areaEmail
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: '' + _style2.default['referral__details'], 'data-expanded': this.state.detailsExpanded },
                        _react2.default.createElement(
                            'div',
                            { className: '' + _style2.default['referral__details__container'] },
                            _react2.default.createElement(
                                'section',
                                { className: '' + _style2.default['referral__section'] },
                                _react2.default.createElement(
                                    'header',
                                    { className: '' + _style2.default['referral__section__header'] },
                                    this.props.bishopLabel
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: '' + _style2.default['referral__section__text'] },
                                    this.props.bishopFirstName,
                                    ' ',
                                    this.props.bishopLastName
                                ),
                                _react2.default.createElement(
                                    'a',
                                    { href: 'tel:' + this.props.bishopPhone, className: '' + _style2.default['referral__section__link'] },
                                    this.props.bishopPhone
                                )
                            ),
                            _react2.default.createElement(
                                'section',
                                { className: '' + _style2.default['referral__section'] },
                                _react2.default.createElement(
                                    'header',
                                    { className: '' + _style2.default['referral__section__header'] },
                                    this.props.wardMissionLeaderLabel
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: '' + _style2.default['referral__section__text'] },
                                    this.props.wardMissionLeaderFirstName,
                                    ' ',
                                    this.props.wardMissionLeaderLastName
                                ),
                                _react2.default.createElement(
                                    'a',
                                    { href: 'tel:' + this.props.wardMissionLeaderPhone, className: '' + _style2.default['referral__section__link'] },
                                    this.props.wardMissionLeaderPhone
                                )
                            ),
                            _react2.default.createElement(
                                'section',
                                { className: '' + _style2.default['referral__section'] },
                                _react2.default.createElement(
                                    'header',
                                    { className: '' + _style2.default['referral__section__header'] },
                                    this.props.missionOfficeName
                                ),
                                _react2.default.createElement(
                                    'a',
                                    { href: 'tel:' + this.props.missionOfficePhone, className: '' + _style2.default['referral__section__link'] },
                                    this.props.missionOfficePhone
                                ),
                                _react2.default.createElement(
                                    'a',
                                    { href: 'mailto:' + this.props.missionOfficeEmail, className: '' + _style2.default['referral__section__link'] },
                                    this.props.missionOfficeEmail
                                )
                            ),
                            _react2.default.createElement(
                                'section',
                                { className: '' + _style2.default['referral__section'] },
                                _react2.default.createElement(
                                    'header',
                                    { className: '' + _style2.default['referral__section__header'] },
                                    this.props.meetinghouseLabel
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: '' + _style2.default['referral__section__text'] },
                                    this.props.unitName
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: _style2.default['referral__section__text'] + ' ' + _style2.default['referral__space'] },
                                    this.props.unitMeetingTimes
                                ),
                                _react2.default.createElement(
                                    'a',
                                    { target: '_blank', href: 'https://maps.google.com/?q=' + this.props.unitAddress, className: '' + _style2.default['referral__section__link'] },
                                    this.props.unitAddress
                                )
                            ),
                            _react2.default.createElement(
                                'section',
                                { className: '' + _style2.default['referral__section'] },
                                _react2.default.createElement(
                                    'header',
                                    { className: '' + _style2.default['referral__section__header'] },
                                    this.props.noteLabel
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: _style2.default['referral__section__text'] + ' ' + _style2.default['referral__space'] },
                                    this.props.note
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'button',
                        { type: 'button', className: '' + _style2.default['referral__details-trigger'], onClick: this.toggleDetails },
                        this.state.detailsExpanded ? this.props.viewLessText : this.props.viewMoreText
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: '' + _style2.default['referral__confirm'], ref: function ref(confirm) {
                            _this2.confirmation = confirm;
                        } },
                    _react2.default.createElement(_confirm2.default, _extends({}, this.props.deleteConfirm, { 'continue': this.delete, cancel: this.cancelDelete }))
                )
            ) : false;
        }
    }]);

    return Referral;
}(_react.Component);

exports.default = Referral;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _style = __webpack_require__(48);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Section = function (_Component) {
    _inherits(Section, _Component);

    function Section() {
        _classCallCheck(this, Section);

        return _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).apply(this, arguments));
    }

    _createClass(Section, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: _style2.default['section'] + ' ' + this.props.className },
                _react2.default.createElement(
                    'h2',
                    { className: '' + _style2.default['section__title'] },
                    this.props.title
                ),
                _react2.default.createElement(
                    'p',
                    { className: '' + _style2.default['section__subtitle'] },
                    this.props.subTitle
                ),
                this.props.components.map(function (component, index) {
                    var Comp = __webpack_require__(4)("./" + component.partialName + '/index.js').default;
                    return _react2.default.createElement(Comp, _extends({ key: index }, component));
                })
            );
        }
    }]);

    return Section;
}(_react.Component);

exports.default = Section;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _style = __webpack_require__(49);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Landing = function (_Component) {
    _inherits(Landing, _Component);

    function Landing() {
        _classCallCheck(this, Landing);

        return _possibleConstructorReturn(this, (Landing.__proto__ || Object.getPrototypeOf(Landing)).apply(this, arguments));
    }

    _createClass(Landing, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: '' + _style2.default['landing'] },
                _react2.default.createElement(
                    'div',
                    { className: '' + _style2.default.landing__container },
                    this.props.components.map(function (component, index) {
                        var Comp = __webpack_require__(4)("./" + component.partialName + '/index.js').default;
                        return _react2.default.createElement(Comp, _extends({ key: index }, component));
                    })
                )
            );
        }
    }]);

    return Landing;
}(_react.Component);

exports.default = Landing;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _request = __webpack_require__(12);

var _request2 = _interopRequireDefault(_request);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _memoizee = __webpack_require__(54);

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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _ldsPlatform = __webpack_require__(53);

var _ldsPlatform2 = _interopRequireDefault(_ldsPlatform);

var _server = __webpack_require__(10);

var _server2 = _interopRequireDefault(_server);

var _request = __webpack_require__(12);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var platform = _ldsPlatform2.default.init(_config2.default.platform);

// INTERNALS
var internals = {};

internals.getPlatform = function (options, callback) {
	platform.get(options).then(function (data) {
		var finalData = {
			platform: {
				header: data.header,
				footer: data.footer,
				headHTML: data.head
			}
		};
		callback(finalData);
	}).catch(function (err) {
		console.log('Error in Getting Platform', err);
		callback({ platform: null });
	});
};

internals.getLayoutData = function (req, res, next, callback) {

	var platformOptions = {
		lang: req.query.lang || 'eng',
		context: res.locals && res.locals._context ? res.locals._context : 'published'
	};

	internals.getPlatform(platformOptions, callback);
};

// EXPORTS
module.exports = {
	getLayoutData: internals.getLayoutData
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _dataService = __webpack_require__(37);

var _dataService2 = _interopRequireDefault(_dataService);

var _platformDataService = __webpack_require__(38);

var _platformDataService2 = _interopRequireDefault(_platformDataService);

var _async = __webpack_require__(51);

var _async2 = _interopRequireDefault(_async);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _merge = __webpack_require__(6);

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
            "partialName": "page-title",
            "title": "Referrals for Missionaries"
        }, {
            "partialName": "content-block",
            "content": "<p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean lacinia bibendum nulla sed consectetur.</p>"
        }, {
            "component": "form-component",
            "partialName": "form-component",
            "submitUrl": "/missionaries/submit",
            "name": "referral",
            "components": [{
                "component": "columns",
                "partialName": "columns",
                "footer": {
                    "submitText": "Send",
                    "disclaimerText": "By selecting \"Send\", I certify that I or the person I am referring give permission to provide contact information to the Church and agree to meet with missionaries."
                },
                "columns": [{
                    "expandable": true,
                    "expanderText": "Send A Referral",
                    "components": [{
                        "component": "section",
                        "partialName": "section",
                        "title": "Your Contact Information",
                        "subTitle": "The missionaries may use this information to contact you.",
                        "components": [{
                            "component": "form-field",
                            "partialName": "form-field",
                            "name": "referrerFirstName",
                            "type": "hidden"
                        }, {
                            "component": "form-field",
                            "partialName": "form-field",
                            "name": "referrerLastName",
                            "type": "hidden"
                        }, {
                            "component": "form-field",
                            "partialName": "form-field",
                            "name": "referrerPhone",
                            "type": "text",
                            "disabled": true,
                            "label": "Phone",
                            "value": "801-234-5678"
                        }, {
                            "component": "form-field",
                            "partialName": "form-field",
                            "name": "referrerEmail",
                            "type": "text",
                            "disabled": true,
                            "label": "Email Address",
                            "value": "alexosmond@ldschurch.org"
                        }]
                    }, {
                        "component": "section",
                        "partialName": "section",
                        "title": "Referral's Contact Information",
                        "subTitle": "Please include as much information as possible",
                        "components": [{
                            "component": "form-field",
                            "partialName": "form-field",
                            "name": "firstName",
                            "type": "text",
                            "label": "First Name"
                        }, {
                            "component": "form-field",
                            "partialName": "form-field",
                            "name": "lastName",
                            "type": "text",
                            "label": "Last Name"
                        }, {
                            "component": "form-field",
                            "partialName": "form-field",
                            "name": "email",
                            "type": "email",
                            "label": "Email Address"
                        }, {
                            "component": "form-field",
                            "partialName": "form-field",
                            "name": "phone",
                            "type": "tel",
                            "label": "Phone"
                        }]
                    }, {
                        "component": "section",
                        "partialName": "section",
                        "title": "Referral's Location",
                        "components": [{
                            "component": "form-field",
                            "partialName": "form-field",
                            "name": "address",
                            "type": "text",
                            "disabled": true,
                            "value": "3740 W Market Center Dr, Riverton, Utah 84065"
                        }, {
                            "component": "form-field",
                            "partialName": "form-field",
                            "name": "addressDescription",
                            "type": "textarea",
                            "label": "Location Description"
                        }]
                    }, {
                        "component": "section",
                        "partialName": "section",
                        "title": "Referral's Preferred Language",
                        "components": [{
                            "component": "form-field",
                            "partialName": "form-field",
                            "name": "languageId",
                            "type": "select",
                            "label": "Preferred Language",
                            "options": [{
                                "lang": "English",
                                "id": "1"
                            }, {
                                "text": "Spanish",
                                "id": "2"
                            }, {
                                "text": "French",
                                "id": "3"
                            }, {
                                "text": "Portuguese",
                                "id": "4"
                            }]
                        }]
                    }, {
                        "component": "section",
                        "partialName": "section",
                        "title": "Helpful Message for the Local Missionaries",
                        "components": [{
                            "component": "form-field",
                            "partialName": "form-field",
                            "name": "note",
                            "type": "textarea"
                        }]
                    }]
                }, {
                    "components": [{
                        "component": "section",
                        "partialName": "section",
                        "title": "Your Referrals",
                        //"subTitle": "After sending the missionaries your referrals, you'll be able to track their progress with that individual here.",
                        "components": [{
                            "component": "referral",
                            "partialName": "referral",
                            "personGuid": "eidt-309c-3029-c9ej-9end",
                            "firstName": "James",
                            "lastName": "Madison",
                            "referralAssignedDateLabel": "Sent",
                            "referralAssignedDate": "30 Aug 2017",
                            "referralStatusName": "Not yet contacted",
                            "missionName": "Canada Calgary Mission",
                            "missionNameLabel": "Assigned to",
                            "missionaries": [{
                                "firstName": "Todd",
                                "lastName": "Jacobsen",
                                "genderCode": "Elder",
                                "photoUrl": "https://placebear.com/50/50"
                            }, {
                                "firstName": "Ethan",
                                "lastName": "Lowe",
                                "genderCode": "Elder",
                                "photoUrl": "https://placebear.com/50/50"
                            }],
                            "areaNumbers": ["458-965-8569", "235-687-4859"],
                            "areaEmail": "calgary-north-area@myldsmail.net",
                            "bishopLabel": "Bishop",
                            "bishopFirstName": "Barry",
                            "bishopLastName": "Klaven",
                            "bishopPhone": "613-584-6985",
                            "wardMissionLeaderLabel": "Ward Mission Leader",
                            "wardMissionLeaderFirstName": "Joel",
                            "wardMissionLeaderLastName": "Jensen",
                            "wardMissionLeaderPhone": "598-695-3568",
                            "missionOfficeName": "Canada Calgary Mission Office",
                            "missionOfficePhone": "854-854-6957",
                            "missionOfficeEmail": "canada_calgary_mission_office@ldschurch.org",
                            "meetinghouseLabel": "Meetinghouse and Ward",
                            "unitName": "Calgary 1st Ward",
                            "unitMeetingTimes": "9am-12pm",
                            "unitAddress": "2526 24 Ave NW, Calgary, AB T2N 4H9, Canada",
                            "noteLabel": "Your Message",
                            "note": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo.",
                            "viewMoreText": "View More",
                            "viewLessText": "View Less",
                            "deleteConfirm": {
                                "component": "confirm",
                                "partialName": "confirm",
                                "title": "Remove referral from list?",
                                "message": "Removing a referral will <b>not</b> cancel it. Please contact the assigned missionaries if needed.",
                                "continueText": "Remove",
                                "cancelText": "Nevermind"
                            }
                        }]
                    }]
                }]
            }]
        }]
    };
    _platformDataService2.default.getLayoutData(req, res, next, function (platform) {
        data = (0, _merge2.default)(data, platform);
        res.locals.data = data;
        next(data);
    });
};

module.exports = {
    getPage: getPage
};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"columns":"columns","columns__column":"columns__column","columns__column__expand":"columns__column__expand","columns__column__expand__button":"columns__column__expand__button","columns__column__container":"columns__column__container","columns__footer":"columns__footer","columns__submit":"columns__submit","columns__disclaimer":"columns__disclaimer"};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"lumen-content":"lumen-content","lumen-page-scan":"lumen-page-scan","lumen-page-read":"lumen-page-read","full-width":"full-width","confirm":"confirm","confirm__title":"confirm__title","confirm__controls":"confirm__controls","confirm__continue":"confirm__continue","confirm__cancel":"confirm__cancel"};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"content-block":"content-block"};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"form":"form"};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"form-field":"form-field","form-field__label":"form-field__label","form-field__select":"form-field__select","form-field__input":"form-field__input"};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"icon":"icon","icon__facebook":"icon__facebook","icon__twitter":"icon__twitter","icon__pinterest":"icon__pinterest","icon__google_plus":"icon__google_plus","icon__instagram":"icon__instagram","icon__youtube":"icon__youtube","icon__rss_feed":"icon__rss_feed","icon__ok":"icon__ok","icon__vk":"icon__vk","icon__download":"icon__download"};

/***/ }),
/* 46 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"page-title":"page-title"};

/***/ }),
/* 47 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"referral":"referral","referral__container":"referral__container","referral__name":"referral__name","referral__delete":"referral__delete","icon":"icon","referral__status":"referral__status","referral__mission":"referral__mission","referral__missionary":"referral__missionary","referral__missionary__image":"referral__missionary__image","referral__missionary__name":"referral__missionary__name","referral__area-number":"referral__area-number","referral__area-email":"referral__area-email","referral__details":"referral__details","referral__details__container":"referral__details__container","referral__section":"referral__section","referral__section__header":"referral__section__header","referral__section__link":"referral__section__link","referral__details-trigger":"referral__details-trigger","referral__space":"referral__space","referral__confirm":"referral__confirm"};

/***/ }),
/* 48 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"lumen-content":"lumen-content","lumen-page-scan":"lumen-page-scan","lumen-page-read":"lumen-page-read","full-width":"full-width","section":"section","section__title":"section__title"};

/***/ }),
/* 49 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"lumen-content":"lumen-content","lumen-page-scan":"lumen-page-scan","landing__container":"landing__container","lumen-page-read":"lumen-page-read","full-width":"full-width"};

/***/ }),
/* 50 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"lumen-content":"lumen-content","lumen-page-scan":"lumen-page-scan","lumen-page-read":"lumen-page-read","full-width":"full-width"};

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("async");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("lds-cf-service-config");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("lds-platform");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("memoizee");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ })
/******/ ]);