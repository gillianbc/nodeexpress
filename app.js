const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
// const log = console.log;

// HTTP request logger middleware for node.js
// Launch localhost:3000 to see this
app.use(morgan('tiny'));
// Use my local static files in public or if not, look in node_modules
app.use('/css', express.static(path.join(__dirname, '/public')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/popper.js/dist')));
// Templating engine
app.set('views', './src/views');
app.set('view engine' ,'ejs');


app.get('/', (req, res) => {
  // res.send('Hello from my app');
  // Use path.join to build the url - it takes care of slashes and works out whether they need
  // to be unix or windows slashes
  // res.sendFile(path.join(__dirname,'views','index.html'));  //This works too
  // res.sendFile(path.join(__dirname, 'views/index.html'));
  res.render('index3',{title: 'This is my page', mylist: ['a','b']});
});

app.listen(3000, () => {
  // log(chalk.green('listening on ') + chalk.red('port 3000'));
  // Note the back quotes - don't prefer this syntax actually
  // log(`Just repeating myself - listening on port ${chalk.green('3000')}`);
  debug(`Debug - Just repeating myself a bit more - listening on port ${chalk.green(port)}`);
});
