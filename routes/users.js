const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const {
  getCurrentUserInfo,
  updateUserInfo,
} = require('../controllers/users');

router.get('/me', getCurrentUserInfo);

router.patch(
  '/me',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().min(2).max(30),
      email: Joi.string().min(2).email(),
    }),
  }),
  updateUserInfo,
);

module.exports = router;
