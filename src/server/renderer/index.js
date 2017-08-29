import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../../app';
import template from '../../main.js';
import config from '../../../config';

export default (req, res, data) => {

    data.dtm = config.dtm;
    data.dtm.properties.locale = req.query.lang || 'eng';
    data.dtm.properties.pageType = data.meta && data.meta.pageType ? data.meta.pageType : 'unknown';

    if (data.pageMeta) {
        data.pageMeta.map((meta)=> {
            if (meta.isTitle) {
                data.dtm.properties.pageName = meta.value;
            }
        })
    }

    if (req.query.hasOwnProperty('json')) {
        res.json(data);
    } else {
        var platform = data.platform || '';
        if (data.platform) {
            // React doesn't like to have extra things in state
            delete data.platform;
        }
        const appString = renderToString(<App {...data}/>);
        res.send(template({
          body: appString,
          initialState: data,
          platform: platform
        }));
    }
};
