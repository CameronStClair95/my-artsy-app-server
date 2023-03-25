const mongoose = require('mongoose');

const NewsArtpostSchema = new mongoose.Schema(
  {
    News_title: {
      type: String,
      required: true,
    },
    News_description: {
      type: String,
      required: true,
    },
    News_art_image: {
      type: String,
      required: true,
    },
    News_source: {
      type: String,
      required: true
    },
    News_date: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
  }
);

const NewsArtpost = mongoose.model("NewsArtpost", NewsArtpostSchema);

module.exports = NewsArtpost;
