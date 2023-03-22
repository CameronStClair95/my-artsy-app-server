const router = require("express").Router()

const User = require("../models/User.model")
const Artpost = require("../models/Artpost.model")
const Post = require("../models/Post.model")

const mongoose = require("mongoose")

const { isAuthenticated } = require("../middleware/jwt.middleware.js");
const {isLoggedIn, isLoggedOut} = require("../middleware/route-guard")



router.get("/home", (req, res, next) => {

    const getPost = Post.find()
    const getArtpost = Artpost.find()

    Promise.all([getPost, getArtpost]) 
        .then(allPostsTogether => res.json(allPostsTogether))
        .then(allPostsTogether => console.log(allPostsTogether))
        .catch(error => res.json(error))

    Post.find()
    .then(allPosts => res.json(allPosts))
    .then(console.log())
    .catch(error => res.json(error))

    /* Artpost.find()
    .then(allArtPosts => res.json(allArtPosts))
    .catch(error => res.json(error)) */


    /* promise all method */
})

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