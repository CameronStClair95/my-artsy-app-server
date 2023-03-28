const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  comment:{
    type: String,
    required: true
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: true
  },
  author: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}]
},
{
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;