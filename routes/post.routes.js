const router = require("express").Router()

const User = require("../models/User.model")
const Artpost = require("../models/Artpost.model")
const Post = require("../models/Post.model")

const fileUploader = require("../config/cloudinary.config");
const mongoose = require("mongoose")
const { isAuthenticated } = require("../middleware/jwt.middleware.js");

const {isLoggedIn, isLoggedOut, isAdmin} = require("../middleware/route-guard")

// POST "/api/upload" => Route that receives the image, sends it to Cloudinary via the fileUploader and returns the image URL
router.post("/upload", fileUploader.single("imageUrl"), (req, res, next) => {
    if (!req.file) {
      next(new Error("No file uploaded!"));
      return;
    }
    
    res.json({ fileUrl: req.file.path });
  });

// POST route for creating a new post of type "artpost"
router.post("/artpost", (req, res, next) => {
    const { artist, title, description, medium, year, dimensions, art_image, author } = req.body;
    // Check if all required fields are provided
    if (!artist || !title || !description || !medium || !year || !dimensions || !art_image) {
        console.log("Error: Missing required fields");
        res.sendStatus(400).json({ message: "Please provide all required fields" });
        return;
    }
    // Create new Artpost object and save to database
    Artpost.create({ artist, title, description, medium, year, dimensions, art_image, author})
        .then(response => {
            console.log("Success: Artpost created");
            res.json(response);
        })
        .catch(error => {
            console.log(`Error creating Artpost: ${error}`);
            res.sendStatus(500).json({ message: "Error creating Artpost" });
        })
});


// POST route for creating a new post of type "post"
router.post("/post", (req, res, next) => {
    const { content, post_image, place, author } = req.body;
    // Check if all required fields are provided
    if (!content || !post_image || !place) {
        console.log("Error: Missing required fields");
        res.sendStatus(400).json({ message: "Please provide all required fields" });
        return;
    }
    // Create new Post object and save to database
    Post.create({ content, post_image, place, author })
        .then(response => {
            console.log("Success: Post created");
            res.json(response);
        })
        .catch(error => {
            console.log(`Error creating Post: ${error}`);
            res.sendStatus(500).json({ message: "Error creating Post" });
        })
});

// Route to create a new art news post
// router.post("/news-art-posts", isLoggedIn, isAdmin, (req, res, next) => {
    // Your code to create a new art news post
//   });
  
  // Route to edit an art news post
//   router.put("/news-art-posts/:postId/edit", isLoggedIn, isAdmin, (req, res, next) => {
    // Your code to edit an existing art news post
//   });
  
  // Route to delete an art news post
//   router.delete("/news-art-posts/:postId/delete", isLoggedIn, isAdmin, (req, res, next) => {
    // Your code to delete an existing art news post
//   });

module.exports = router
