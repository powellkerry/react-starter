import dataService from '../data-services/data-service.js';
import async from 'async';
import config from '../../../config';
import merge from 'merge';


var get = function(req, queryStrings, endpoint) {
	return function(callback) {
		dataService.get(req.hostname, req.headers.cookie, endpoint, queryStrings, function(error, data) {
			if (error) {
				callback(error);
			} else {
				callback(null, data);
			}
		});
	};
};

var getPage = function(req, res, next) {
    var data = {
    	"partialName": "landing",
        "components": [
            {
                "partialName": "hello-world",
                "title": "Hello World"
            }
        ]
    };
    next(data);
};

module.exports = {
	getPage: getPage,
};
