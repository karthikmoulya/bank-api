const { validationResultconst } = require('express-validator');

const Transfer = require('../models/Transfer');

//Get all my transfers
exports.getMyTransfers = (req, res, next) => {
  Transfer.find({
    $or: [{ sender: req.user._id }, { recipient: req.user._id }],
  })
    .then(transfer => {
      if (!transfer) {
        const error = new Error('No Transfers found');
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json(transfers);
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 422;
      }
      next(err);
    });
};

//get Single Transfer
exports.getSingle = (req, res, next) => {
  Transfer.findOne({
    _id: req.params.id,
    $or: [{ sender: req.user._id }, { recipient: req.user._id }],
  })
    .then(transfer => {
      if (!transfer) {
        const error = new Error('No Transfer found');
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json(transfer);
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 422;
      }
      next(err);
    });
};

//create new Transfer
exports.create = (req, res, next) => {
  const transfer = new Transfer(req.body);
  transfer
    .save()
    .then(transfer => {
      if (!transfer) {
        const error = new Error('Problems sending a transfer');
        error.statusCode = 404;
        throw error;
      }
      res.status(201).json({ message: 'Transfer sent' });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 422;
      }
      next(err);
    });
};
