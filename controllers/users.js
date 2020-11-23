const { validationResult } = require('express-validator');

const User = require('../models/User');

exports.getMyself = (req, res, next) => {
  User.findById(req.userId)
    .then(user => {
      if (!user) {
        const error = new Error('User Not Found');
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({ status: user.status });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 422;
      }
      next(err);
    });
};

exports.updateMyself = (req, res, next) => {
  const newEmail = req.body.email;
  const newPassword = req.body.password;
  const newPhone = req.body.phone;

  User.findById(req.userId)
    .then(user => {
      if (!user) {
        const error = new Error('User Not Found');
        error.statusCode = 404;
        throw error;
      }
      user.email = newEmail;
      user.password = newPassword;
      user.phone = newPhone;
      return user.save();
    })
    .then(result => {
      res.status(201).json({ message: 'User Updated' });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 422;
      }
      next(err);
    });
};
