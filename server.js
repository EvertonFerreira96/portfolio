const express = require('express');
const nunjucks = require('nunjucks');

const methodOverride = require('method-override')

const routes = require('./src/routes');

const server = express(); 

server.use(express.static('./src/css'));
server.use(express.static('./src/js'));

server.set('view engine', 'njk');


nunjucks.configure('src/views', {
  express: server,
  autoescape: false,
  noCache: true
});


server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(methodOverride('_method'));
server.use(routes);


server.listen(5000, () => console.log('started at 5000 port 🚀') );

