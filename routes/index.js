var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
