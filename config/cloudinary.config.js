//config/cloudinary.config.js

require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

// Configuration 
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
  });

  const storage = new CloudinaryStorage({
    //Cloudinary:
    cloudinary,
    params: {
        allowed_formats: ['jpg', 'png', 'webp'],// The name of the folder in cloudinary
        // resource_type: 'raw' => this is in case you want to upload other type of files, not just images
        folder: 'Macartsy'
    }
  });

  // Storage: storage
module.exports = multer({ storage });






