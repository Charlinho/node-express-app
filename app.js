const express = require('express');
const compression = require('compression');

const _port = 4000;
const _app_folder = 'dist';

const app = express();
app.use(compression());

app.get('*.*', express.static(_app_folder, {maxAge: '1y'}));

app.all('*', function (req, res) {
    res.status(200).sendFile(`/`, {root: _app_folder});
});

app.listen(_port, function () {
    console.log('Node Express server for ' + app.name + ' listening on http://localhost:' + _port);
});