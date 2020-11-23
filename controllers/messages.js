const Message = require('../models/Message');

//Get all my messages
exports.getMyMessages = (req, res, next) => {
  Message.find({ recipient: req.user._id })
    .then(message => {
      if (!message) {
        const error = new Error('No Messages found');
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json(messages);
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 422;
      }
      next(err);
    });
};

//Get My Single Meesage
exports.getSingle = (req, res, next) => {
  Message.findOne({ _id: req.params.id, recipient: req.user._id })
    .then(message => {
      if (!message) {
        const error = new Error('No Message found');
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json(message);
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 422;
      }
      next(err);
    });
};
