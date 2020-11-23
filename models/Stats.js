const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StatsSchema = new Schema({
  accountId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  income: {
    type: Number,
    required: true,
  },
  expenses: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Stats', StatsSchema);
