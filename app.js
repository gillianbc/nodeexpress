const express = require('express');
import chalk from 'chalk';
const app = express();
const log = console.log;
//or, so that we don't do console logging
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

//HTTP request logger middleware for node.js
//Launch localhost:3000 to see this
app.use(morgan('combined'));

app.get('/', function(req, res){
    // res.send('Hello from my app');
  //Use path.join to build the url - it takes care of slashes and works out whether they need to be unix or windows slashes
  // res.sendFile(path.join(__dirname,'views','index.html'));  //This works too
  res.sendFile(path.join(__dirname,'views/index.html'));
});

app.listen(3000,function () {
    log(chalk.green('listening on ') + chalk.red('port 3000'));
    //Note the back quotes - don't prefer this syntax actually
    log(`Just repeating myself - listening on port ${chalk.green('3000')}`);
    debug(`Debug - Just repeating myself - listening on port ${chalk.green('3000')}`);
});


