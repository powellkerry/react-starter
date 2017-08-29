import React from 'react';
import { renderToString } from 'react-dom/server';
import styles from './main.css';

export default ({ body, title, platform, initialState }) => `
<!DOCTYPE html>
<html>

    <head>
        <script>window.__APP_INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>

        <meta property="og:type" content="non_profit">
        <meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui" />
        <meta charset="utf-8" />

        ${platform && platform.headHTML ? platform.headHTML : ''}

        <link rel="stylesheet" href="/missionaries/static/assets/app.css" />

    </head>

    <body>
        ${platform && platform.header ? platform.header : ''}
        <main id="root" class="lumen-content">
            <div>
                ${body}
            </div>
        </main>
        ${platform && platform.footer ? platform.footer : ''}
        <script src="/missionaries/static/assets/bundle.js"></script>
    </body>
</html>
`;
