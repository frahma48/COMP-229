
/*File Name: contact.ejs
Student Name: Fazlur Rahman
Student ID: 301342012
Date: 25 September 2024 --*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET user profile */
router.get('/:id', function(req, res, next) {
  res.send(`User profile for user ID: ${req.params.id}`);
});
module.exports = router;
