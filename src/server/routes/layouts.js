import express from 'express';
import fs from 'fs';

import renderer from '../renderer';

let	router = express.Router();




// This is what adds support for ?format=json, ?json, or Content-Type=application/json

if (process.env.NODE_ENV !== 'stage' || process.env.NODE_ENV !== 'production') {
	router.get('/:layoutPath(*)',
        function(req, res, next) {
            fs.readFile(`${__dirname}/src/layouts/${req.params.layoutPath}/data.json`, 'utf8', function(err, data) {
                if (!err) {
                    data = JSON.parse(data);

                    renderer(req, res, data);
                };
            })
		}
	);
}

module.exports = router;
