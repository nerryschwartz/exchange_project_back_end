const mongoose = require('mongoose');

const ProposalSchema = new mongoose.Schema({
  offeredItems: [
    {
      item: String,
      quantity: Number,
    },
  ],
  desiredItems: [
    {
      item: String,
      quantity: Number,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('Proposal', ProposalSchema);
