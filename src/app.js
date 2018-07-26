const express = require('express');
import chalk from 'chalk';
const app = express();
const log = console.log;
app.get('/', function(req, res){
    res.send('Hello from my app');
});

app.listen(3000,function () {
    log(chalk.green('listening on ') + chalk.red('port 3000'));
});


