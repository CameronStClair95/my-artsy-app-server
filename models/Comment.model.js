const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  comment:{
    type: String,
    required: true
  },
  commentedPost: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'},
  author: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
},
{
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: () => dayjs().format("HH:mm:ss")
  }
);

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;