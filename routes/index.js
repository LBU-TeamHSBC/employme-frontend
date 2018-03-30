var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    const title = 'User Sign-In';
    const users = [
        {id:1,name:"userA"},
        {id:2,name:"userB"},
        {id:3,name:"userC"},
        {id:4,name:"userD"}
    ];
    res.render('index', {
        title,
        users
    });
});

module.exports = router;