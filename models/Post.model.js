const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
}, {
  // this second object adds extra properties: `createdAt` and `updatedAt`
  timestamps: true,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;