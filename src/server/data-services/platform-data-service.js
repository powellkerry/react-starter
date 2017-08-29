import config from '../../../config/';
import ldsPlatform from 'lds-platform';
import server from '../../server.js';
import request from 'request';

let platform = ldsPlatform.init(config.platform);

// INTERNALS
var internals = {};

internals.getPlatform = function(options, callback) {
    platform.get(options).then(function(data) {
		var finalData = {
			platform: {
				header: data.header,
				footer: data.footer,
                headHTML: data.head
			}
		};
		callback(finalData);
	}).catch(function(err) {
		console.log('Error in Getting Platform', err);
		callback({platform: null})
	});
}

internals.getLayoutData = function(req, res, next, callback) {

    var platformOptions = {
		lang: req.query.lang || 'eng',
		context: res.locals && res.locals._context ? res.locals._context : 'published'
	};

    internals.getPlatform(platformOptions, callback)

};

// EXPORTS
module.exports = {
	getLayoutData: internals.getLayoutData
};
