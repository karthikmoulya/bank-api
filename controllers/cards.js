const Card = require('../models/Card');

//Get all my Cards
exports.getMyCards = (req, res, next) => {
  Card.find({ owner: req.user._id })
    .then(cards => {
      if (!cards) {
        const error = new Error('No Cards found');
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json(cards);
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 422;
      }
      next(err);
    });
};

//get Single Card
exports.getSingle = (req, res, next) => {
  Card.findOne({ _id: req.params.id, owner: req.user._id })
    .then(card => {
      if (!card) {
        const error = new Error('No Card found');
        error.statusCode = 404;
        throw error;
      }
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 422;
      }
      next(err);
    });
};
