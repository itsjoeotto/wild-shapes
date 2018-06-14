let express = require('express');
let router = express.Router();
let Shape = require('../models/shapes');


router.get('/', function (req, res) {
    Shape.find({}, function (err, shapes) {
        if (err) {
            console.log("ERROR! : ", err);
            res.sendStatus(500);
        } else {
            console.log('/=============== SHAPES ===============/');
            console.log(shapes);
            res.send(shapes);
        }
    });
});

module.exports = router;