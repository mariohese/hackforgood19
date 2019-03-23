var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET login. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

/* GET registro. */
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

/* GET clasificacion. */
router.get('/clasificacion', function(req, res, next) {
  res.render('clasificacion', { title: 'Express' });
});

/* GET news1. */
router.get('/news1', function(req, res, next) {
  res.render('news1', { title: 'Express' });
});

/* GET review-tips. */
router.get('/review-tips', function(req, res, next) {
  res.render('review-tips', { title: 'Express' });
});





module.exports = router;
