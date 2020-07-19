var express = require('express');
var router = express.Router();

/* GET pagina singola esperienza */
router.get('/:esptext', function(req, res, next) {
	let param = req.params.esptext;
    res.render('esp', { search: param});
});

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});



module.exports = router;