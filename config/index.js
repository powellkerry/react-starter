'use strict';

var merge = require('merge');

var configs = {},
	config = {};

Object.defineProperties(configs, {
	local: {
		get: function(){
			return require('./local');
		}
	},
	development: {
		get: function(){
			return require('./development');
		}
	},
	test: {
		get: function(){
			return require('./test');
		}
	},
	staging: {
		get: function(){
			return require('./staging');
		}
	},
	production: {
		get: function(){
			return require('./production');
		}
	}
});

config = configs[process.env.NODE_ENV || 'local'];

var envConfig = process.env.config || '{}';

config = merge(config, JSON.parse(envConfig));

var mergedConfig = config;

exports.init = function(options){
	options = options || {};

	var mappings = options.mappings || {},
		mergedConfig,
		merged = {};

	mergedConfig = merge(config, merged);
	var env = (process.env.NODE_ENV || 'local');
	console.log('******* Configuration %s *******\nNODE_ENV=%s\n\n%s', env, env, JSON.stringify(mergedConfig, null, 2));
	return mergedConfig;
};

module.exports = exports.init();
