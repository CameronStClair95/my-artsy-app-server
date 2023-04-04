const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    elementType: {
      type: mongoose.Schema.Types.ObjectId,
      enum: ["Post", "Artpost"],
      required: true
    },
    elementId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },

  },
);

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;