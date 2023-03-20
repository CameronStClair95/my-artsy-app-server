const router = require("express").Router()

const User = require("../models/User.model")
const Artpost = require("../models/Artpost.model")
const Post = require("../models/Post.model")

const mongoose = require("mongoose")
const { isAuthenticated } = require("../middleware/jwt.middleware.js");


const {isLoggedIn, isLoggedOut} = require("../middleware/route-guard")

// POST route for creating a new post of type "artpost"
router.post("/artpost", (req, res, next) => {
    const { artist, title, description, medium, year, dimensions, art_image } = req.body;
    // Check if all required fields are provided
    if (!artist || !title || !description || !medium || !year || !dimensions || !art_image) {
        console.log("Error: Missing required fields");
        res.status(400).json({ message: "Please provide all required fields" });
        return;
    }
    // Create new Artpost object and save to database
    Artpost.create({ artist, title, description, medium, year, dimensions, art_image })
        .then(response => {
            console.log("Success: Artpost created");
            res.json(response);
        })
        .catch(error => {
            console.log(`Error creating Artpost: ${error}`);
            res.status(500).json({ message: "Error creating Artpost" });
        })
});

// POST route for creating a new post of type "post"
router.post("/post", (req, res, next) => {
    const { content, post_image, place } = req.body;
    // Check if all required fields are provided
    if (!content || !post_image || !place) {
        console.log("Error: Missing required fields");
        res.status(400).json({ message: "Please provide all required fields" });
        return;
    }
    // Create new Post object and save to database
    Post.create({ content, post_image, place })
        .then(response => {
            console.log("Success: Post created");
            res.json(response);
        })
        .catch(error => {
            console.log(`Error creating Post: ${error}`);
            res.status(500).json({ message: "Error creating Post" });
        })
});

module.exports = router
