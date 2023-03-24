const mongoose = require('mongoose');

const NewsArtpostSchema = new mongoose.Schema(
    {
        title: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        art_image: {
          type: String,
          required: true,
        },
        author: [{
          type: mongoose.Schema.Types.ObjectId,
        //   ref: "User", "Admin" ?
          required: true}
        ],
        author: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}]
    },
      {
        timestamps: true,
      }
    );
    
    const NewsArtpost = model("NewsArtpost", NewsArtpostSchema);
    
    module.exports = NewsArtpost;