var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { title: 'User Sign In', condition: true, user: ["userA", "userB", "userC", "userD"]});
});

router.get('/users/:uid', function(req, res, next) {
 res.render('index')  
});


module.exports = router;