const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  artist: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  medium: {
    type: String,
    required: false,
  },
  year: {
    type: Number,
    required: false,
  },
  dimensions: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: true,
  },
},
{
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
  );

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
