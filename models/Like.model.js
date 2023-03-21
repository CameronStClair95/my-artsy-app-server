const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    postOrComment: {
      type: Schema.Types.ObjectId,
      required: true
    },
    isPost: {
      type: Boolean,
      required: true
    },
    // check twice this line above! 💔
    isLiked: [{type: Schema.Types.ObjectId, ref: "User"}]
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;