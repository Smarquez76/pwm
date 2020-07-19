var express = require('express');
var router = express.Router();

/* GET error page. */
router.get('/', (req, res)=> {
  res.render('err-route', { title: 'Errore di indirizzamento pagina. Riprovare.'});
});

module.exports = router;