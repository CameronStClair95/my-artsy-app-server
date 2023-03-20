const router = require("express").Router()

const User = require("../models/User.model")
const Artpost = require("../models/Artpost.model")
const Post = require("../models/Post.model")

const mongoose = require("mongoose")

const { isAuthenticated } = require("../middleware/jwt.middleware.js");
const {isLoggedIn, isLoggedOut} = require("../middleware/route-guard")


// page for the user to see it's details and posts
router.get("/:userId", (req, res, next) => {

    /* const {userId} = req.params

    User.findById(req.session.currentUser._id)
    .populate("post")
    .then((posts) => {
        res.json()
    }) */
})

router.get("/userId/favorites", (req, res, next) => {
    
})

router.get("/home", (req, res, next) => {

    Artpost.find()
    .then(allArtPosts => res.json(allArtPosts))
    .catch(error => res.json(error))

    Post.find()
    .then(allPosts => res.json(allPosts))
    .catch(error => res.json(error))
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