import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../../app';
import template from '../../main.js';

export default (req, res, data) => {
    if (req.query.hasOwnProperty('json')) {
        res.json(data);
    } else {
        const appString = renderToString(<App {...data}/>);
        res.send(template({
          body: appString,
          initialState: data
        }));
    }
};
