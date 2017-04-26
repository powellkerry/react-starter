import express from 'express';
import http from 'http';
import https from 'https';
import path from 'path';
import {json, urlencoded} from 'body-parser';
import helmet from 'helmet';
import compression from 'compression';
import config from '../config';

import React from 'react';
import { renderToString } from 'react-dom/server';
import main from './main';

var oneDay = 86400000,
    oneWeek = 604800000,
    oneYear = 31536000000;

const server = express();

server.use('/dist', express.static('dist'));

// Use gzip compression
server.use(compression());

//Dont's cap outbound connections
http.globalAgent.maxSockets = 9999;
https.globalAgent.maxSockets = 9999;

// all environments
server.set('port', process.env.PORT || 4000);

//Body Parser for dealing with POSTs
server.use(json());
server.use(urlencoded({extended: true}));

//Security stuff for kicks and giggles
if (process.env.NODE_ENV !== 'staging' || process.env.NODE_ENV !== 'production') {
    server.use(helmet.frameguard({action: 'deny'}));
    server.use(helmet.xssFilter());
    server.enable('view cache');
}

server.disable('x-powered-by');

server.use('/static', express.static(path.join(__dirname, '/dist'), {maxAge: oneDay}));

server.use('/components', require('./server/routes/components'));
server.use('/layouts', require('./server/routes/layouts'));
server.use('/', require('./server/routes/routes'));

server.use(function(err, req, res, next) {
    console.log(err);
    req.params.err = err;
    logger.error(JSON.stringify(err, null, 4));
    res.status(err.status || 500);
    res.send(main({
        body: err,
        title: 'Error',
        initialState: {}
    }));
});

module.exports = server;
