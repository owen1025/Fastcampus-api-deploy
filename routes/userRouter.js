var express = require('express');
var router = express.Router();

const multer = require('multer')();

/**
 * @api public
 * @method POST
 * @description 로그인 API
 * @param {(body) string} [email] 유저 이메일
 * @param {(body) string} [password] 유저 패스워드
 */
router.post('/login', multer.array(), (req, res) => {
  const { email, password } = req.body;

  res
    .sendStatus(200);
});

/**
 * @api public
 * @method POST
 * @description 회원가입 API
 * @param {(body) string} [email] 유저 이메일
 * @param {(body) string} [password] 유저 패스워드
 */
router.post('/join', multer.array(), (req, res) => {
  const { email, password } = req.body;

  res
    .sendStatus(201);
});

module.exports = router;