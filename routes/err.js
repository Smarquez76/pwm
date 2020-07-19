var express = require('express');
var router = express.Router();

/* GET error page. */
router.get('/', function(req, res, next) {
  res.render('err-route', { title: 'Errore di indirizzamento pagina. Riprovare.'});
});

module.exports = router;