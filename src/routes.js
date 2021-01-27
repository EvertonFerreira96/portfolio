const express = require('express');
const routes = express.Router();


routes.get('/', (req, res) => res.render('index.html'));

routes.use((req,res) => res.status(404).render('404'))

module.exports = routes;