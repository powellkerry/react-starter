import request from 'request';
import configs from '../../../config/';
import memoize from 'memoizee';

var get = function( host, cookie, endpointPath, queryStrings, callback) {
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
		url: configs.endpoints[endpointPath][context].uri,
		headers: headers,
		timeout: configs.endpoints[endpointPath][context].timeout || 5000,
		qs: queryStrings
	};

	function processError(body, response) {
		var err = new Error(body.message);
		err.name = body.error;
		err.statusCode = response.statusCode;
		return err;
	}
	request(options, function (error, response, body) {
		if (error) {
			callback(error);
		} else {
			try {
				body = JSON.parse(body);
				if(!body) {
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
	get: memoize(get, {
		maxAge: 1000*60,
		async: true,
		normalizer: function(args) {
			return JSON.stringify(args);
		}
	})
};
