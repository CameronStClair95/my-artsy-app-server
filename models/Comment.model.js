const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content:{
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: true
  }
},
{
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;