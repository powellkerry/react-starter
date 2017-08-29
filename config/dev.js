'use strict';

module.exports = {
	cdn: {
		"url": "//test.ldscdn.org"
	},
	"healthcheck": {
		"applicationName": "project-name",
		"dependencies":[]
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
		response: 60*60*3, // In seconds
		endpoints: 60*5 // In seconds
	},

    endpoints: {

    }
};
