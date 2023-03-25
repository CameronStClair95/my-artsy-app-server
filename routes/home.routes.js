const router = require("express").Router()
const mongoose = require("mongoose")
const axios = require("axios")

const User = require("../models/User.model")
const Artpost = require("../models/Artpost.model")
const Post = require("../models/Post.model")
const News = require("../models/News.model")

const { isAuthenticated } = require("../middleware/jwt.middleware.js");
const {isLoggedIn, isLoggedOut} = require("../middleware/route-guard")

// working ✅
router.get("/home", (req, res, next) => {
    
    let posts;
    let artPosts;
    let newsPosts
    Post.find()
    .then(allPosts=>{
        posts=allPosts
        return Artpost.find()
    })
    .then(allArtPosts=>{
        artPosts = allArtPosts
        return News.find()
    })
    .then(allNewsPosts => {
        newsPosts = allNewsPosts
    })
    .then(()=>{
        res.json({posts,artPosts, newsPosts})
    })
})

// working ✅
// page for the user to see it's details and posts
router.get("/user", (req, res, next) => {
    const {userId} = req.params

    User.findById(userId)
    .populate("post")
    .then((posts) => res.json(posts))
})

router.get("/:userId/favorites", (req, res, next) => {
    
})

router.post("/home/userId/:postId/delete", (req, res, next) => {
// route to delete a post
// post.findbyidanddelete
})

router.post("/home/userId/postId/edit", (req, res, next) => {
    // route to edit a post
    // post.findbyidandUpdate
    })

router.get("/home/userId/postId", (req, res, next) => {
    // page to see art post of another user
})





module.exports = router