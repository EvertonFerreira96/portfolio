const express = require('express');
const routes = express.Router();


routes.get('/', (req, res) => res.render('index'));




routes.use((req,res) => res.status(404).render('about/index'))

module.exports = routes;