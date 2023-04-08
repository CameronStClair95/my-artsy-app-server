const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  post_image: {
    type: String,
    /* required: true, */
  },
  place: {
    type: String,
    required: true,
  },
  likedBy: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
  author: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
  postComments: [{type: mongoose.Schema.Types.ObjectId, ref: "Comment"}],
}, {
  // this second object adds extra properties: `createdAt` and `updatedAt`
  timestamps: true,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;