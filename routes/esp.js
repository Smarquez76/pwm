var express = require('express');
var router = express.Router();

/* GET pagina parametro */
router.get('/:esptext', (req, res, next)=> {
	let param = req.params.esptext;
    res.render('esp', { search: param});
    next()
});

/* In caso di URL dell'endpoint senza parametro reindirizza di nuovo la index */
router.get('/', (req, res)=> {
    res.render('index');
});



module.exports = router;