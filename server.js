const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const chalk = require('chalk');
const path = require('path');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/bango_app/build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/bango-app/build', 'index.html'));
 });



app.listen('8000', () => {
    console.log('%s App is running at http://localhost:%d', chalk.green('✓'), 8000);
    console.log('  Press CTRL-C to stop\n'); 
});
