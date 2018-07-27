var express = require('express');
var router = express.Router();

const listModel = require('../models/listModel');

/**
 * @api public
 * @method GET
 * @description 앨범 리스트 제공 API
 * @returns {json[array]}
 */
router.get('/', function(req, res, next) {
  res
    .status(200)
    .json(listModel.jsonList);
});

module.exports = router;