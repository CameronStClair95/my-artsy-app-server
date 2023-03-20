const router = require("express").Router()
const User = require("../models/User.model")
/* 
const Post = require("")
const Comment = require("")
*/
const mongoose = require("mongoose")
const { isAuthenticated } = require("../middleware/jwt.middleware.js");


const {isLoggedIn, isLoggedOut} = require("../middleware/route-guard")

// working ✅
router.post("/new-post/artpost", (req, res, next) => {
    // page to send information to the database
    // redirect to home page

    const {artist, title, description, medium, year, dimensions, art_image} = req.body
    
    Artpost.create({artist, title, description, medium, year, dimensions, art_image})
        .then(response => res.json(response))
        .catch(error => res.json(error))
})

// working ✅
router.post("/new-post/post", (req, res, next) => {
    const {content, post_image, place} = req.body

    Post.create({content, post_image, place})
        .then(response => res.json(response))
        .catch(error => res.json(error))
})

router.get("/new-post", (req, res, next) => {
    // page to write a new post
})

module.exports = router