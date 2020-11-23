const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransferSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    payeeName: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    reference: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 20,
    },
    sourceAccountId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Account',
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    recipient: {
      type: String,
      required: true,
      // type: mongoose.Schema.Types.ObjectId,
      // ref: 'User'
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Transfer', TransferSchema);
