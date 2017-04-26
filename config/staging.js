'use strict';

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
