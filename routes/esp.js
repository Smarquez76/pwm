var express = require('express');
var router = express.Router();

/* GET pagina singola esperienza */
router.get('/:esptext', (req, res, next)=> {
	let param = req.params.esptext;
    res.render('esp', { search: param});
    next()
});

router.get('/', (req, res)=> {
    res.render('index');
});



module.exports = router;