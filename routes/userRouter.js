var express = require('express');
var router = express.Router();

/**
 * @api public
 * @method GET
 * @description 앨범 리스트 제공 API
 * @returns {json[array]}
 */
router.post('/login', (req, res) => {
  res
    .sendStatus(200);
});

module.exports = router;