var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

/* GET home page. */
router.get('/registro', function(req, res, next) {
  res.render('registro', { title: 'Express' });
});

/* GET colaboracion. */
router.get('/colaboracion', function(req, res, next) {
  res.render('colaboracion', { title: 'Express' });
});

/* GET contacto. */
router.get('/contacto', function(req, res, next) {
  res.render('contacto', { title: 'Express' });
});
module.exports = router;
