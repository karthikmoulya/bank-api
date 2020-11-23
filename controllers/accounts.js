const Accounts = require('../models/Account');

//Get All My Accounts
exports.getMyAccounts = (req, res, next) => {
  Accounts.find({ owner: req.user._id })
    .then(accounts => {
      if (!accounts) {
        const error = new Error('No Accounts found');
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json(accounts);
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 422;
      }
      next(err);
    });
};

//Get Single Account
exports.getSingle = (req, res, next) => {
  Accounts.findOne({ _id: req.params.id, owner: req.user._id })
    .then(account => {
      if (!account) {
        const error = new Error('No Account found');
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json(account);
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 422;
      }
      next(err);
    });
};
