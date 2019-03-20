var express = require('express');
var router = express.Router();

var db = require("../db-helper");

router.get('/', function(req, res, next) {

    if (req.session.user) {
        db.readOnlyConnection.query(`SELECT id, title FROM productions;`, function(err, rows, fields) {
            res.render('home', { title: 'Whitefox Streaming Video', message: `Welcome, ${req.session.user}!`, user: req.session.user, displayProductions: rows});
        });

    }
    else {
        res.redirect("/");
    }

});

module.exports = router;