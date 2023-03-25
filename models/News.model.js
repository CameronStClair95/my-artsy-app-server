const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    News_image: {
      type: String,
      required: true,
    },
    source: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
  }
);

const News = mongoose.model("News", NewsSchema);

module.exports = News;
