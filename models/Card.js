const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    accountId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Account',
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    number: {
      type: Number,
      required: true,
    },
    pin: {
      type: Number,
      required: true,
    },
    expiresMonth: {
      type: Number,
      required: true,
    },
    expiresYear: {
      type: Number,
      required: true,
    },
    dailyOnlineLimit: {
      type: Number,
      required: true,
      default: 20000,
    },
    dailyWithdrawalLimit: {
      type: Number,
      required: true,
      default: 20000,
    },
    monthlyOnlineLimit: {
      type: Number,
      required: true,
      default: 100000,
    },
    monthlyWithdrawalLimit: {
      type: Number,
      required: true,
      default: 100000,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Card', CardSchema);
