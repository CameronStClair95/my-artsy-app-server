const mongoose = require('mongoose');

const ArtpostSchema = new mongoose.Schema({
  artist: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
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
  art_image: {
    type: String,
    required: true,
  },
},
{
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
  );

const Artpost = mongoose.model('Artpost', ArtpostSchema);

module.exports = Artpost;
