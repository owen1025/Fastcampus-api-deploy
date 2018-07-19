var express = require('express');
var router = express.Router();

const multer = require('multer')();

const userModel = require('../models/userModel');

/**
 * @api public
 * @method POST
 * @description 로그인 API
 * @param {(body) string} [email] 유저 이메일
 * @param {(body) string} [password] 유저 패스워드
 */
router.post('/login', multer.array(), async (req, res) => {
  const { email, password } = req.body;

  try {
    const loginResult = await userModel.login(email, password);

    res
      .status(loginResult.statusCode)
      .json(loginResult.msg);
  } catch(error) {
    res
      .sendStatus(500);
  }
});

/**
 * @api public
 * @method POST
 * @description 회원가입 API
 * @param {(body) string} [email] 유저 이메일
 * @param {(body) string} [password] 유저 패스워드
 */
router.post('/join', multer.array(), async (req, res) => {
  const { email, password } = req.body;

  try {
    await userModel
      .join(email, password);

    res
      .sendStatus(201);
  } catch(error) {
    res
      .sendStatus(500);
  }
});

module.exports = router;