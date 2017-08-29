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
	dev: {
		get: function(){
			return require('./dev');
		}
	},
	test: {
		get: function(){
			return require('./test');
		}
	},
	stage: {
		get: function(){
			return require('./stage');
		}
	},
	prod: {
		get: function(){
			return require('./prod');
		}
	}
});

config = configs[process.env.NODE_ENV || 'local'];

var vcap = process.env.NO_VCAP ? {} : require('lds-cf-service-config');

var envConfig = process.env.config || '{}';

config = merge(config, JSON.parse(envConfig));

var mergedConfig = merge(config, vcap);

exports.init = function(options){
	options = options || {};

	var mappings = options.mappings || {},
		mergedConfig,
		merged = {};

	for(var prop in vcap){
		merged[prop] = merge(config[(mappings[prop] || prop)], vcap[prop].credentials);
	}

	mergedConfig = merge(config, merged);
	var env = (process.env.NODE_ENV || 'local');
	console.log('******* Configuration %s *******\nNODE_ENV=%s\n\n%s', env, env, JSON.stringify(mergedConfig, null, 2));
	return mergedConfig;
};

module.exports = exports.init();
