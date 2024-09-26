
/*File Name: contact.ejs
Student Name: Fazlur Rahman
Student ID: 301342012
Date: 25 September 2024 --*/

var express = require('express');
var router = express.Router();

// Home Page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

// About Me Page
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

// Projects Page
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

// Services Page
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

// Contact Me Page
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

// Thank you Page
router.get('/thankyou', function(req, res, next) {
  res.render('thankyou', { title: 'Thank you' });
});

module.exports = router;