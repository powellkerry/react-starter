'use strict';

module.exports = {
	cdn: {
		"url": "//test.ldscdn.org"
	},
	"healthcheck": {
		"applicationName": "project-name",
		"dependencies":[
			{
				"applicationName": "S&I API",
				"url": "https://si-api.app.lds.org/si/api/ping",
				"timeout": 4000
			},
			{
				"applicationName": "S&I CMS",
				"url": "https://content.ldschurch.org/si/sites/si/api/v2/ping",
				"timeout": 4000
			}
		]
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
		response: 60*60*3, // In seconds
		endpoints: 60*5 // In seconds
	},

    endpoints: {
        
    }
};
