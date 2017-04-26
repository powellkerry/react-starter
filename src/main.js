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

        <link rel="stylesheet" href="/static/assets/app.css" />

    </head>

    <body>

        <main id="root">
            <div>
                ${body}
            </div>
        </main>

        <script src="/static/assets/bundle.js"></script>
    </body>
</html>
`;
