import middleware from '../middleware/middleware.js';
import merge from 'merge';

import React from 'react';
import { renderToString } from 'react-dom/server';

import renderer from '../renderer'

var express = require('express'),
	router = express.Router();


var render = function () {
	return function (req, res, next) {
        if (res.locals.data.partialName !== 'error') {
            renderer(req, res, res.locals.data);
        } else {
            next();
        }
	};
};

router.get(['^missionaries/((?!components|layouts|search)[a-z-]*$)','/missionaries'], function(req, res, next) {
        middleware.getPage(req, res, function(data){
            res.locals.data = merge(res.locals.data, data);
            next();
        })
    },
    render()
);


module.exports = router;
