const Account = require('../models/Account');
const Stats = require('../models/Stats');

exports.getStats = (req, res, next) => {
  Account.findOne({
    _id: accId,
    owner: req.user._id,
  })
    .then(account => {
      if (!account) {
        const error = new Error('You have no access to the stats');
        error.statusCode = 404;
        throw error;
      }
    })
    .then(account => {
      const { type, currency, number } = account;
      const accDetails = { type, currency, number };

      const startingDate = subDays(new Date(), daysPast);

      Stats.find({
        accountId: accId,
        date: { $gt: startingDate },
      }).then(stats =>
        stats.forEach(stat => (stat.date = format(stat.date, 'dd/MM/yyyy')))
      );
      res.status(200).json({ accDetails, data: stats });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 422;
      }
      next(err);
    });
};
