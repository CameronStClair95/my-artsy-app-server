const router = require("express").Router()

const User = require("../models/User.model")
const Artpost = require("../models/Artpost.model")
const Post = require("../models/Post.model")

const mongoose = require("mongoose")

const { isAuthenticated } = require("../middleware/jwt.middleware.js");
const {isLoggedIn, isLoggedOut} = require("../middleware/route-guard")



router.get("/home", (req, res, next) => {
    
    let posts;
    let artPosts;
    Post.find()
    .then(allPosts=>{
        posts=allPosts
        return Artpost.find()
    })
    .then(allArtPosts=>{
        artPosts = allArtPosts
    })
    .then(()=>{
        res.json({posts,artPosts})
    })

/*     const getPost = Post.find()
    const getArtpost = Artpost.find()

    Promise.all([getArtpost, getPost ]) 
        .then(allPostsTogether => res.json(allPostsTogether))
        .catch(error => res.json(error))

     */
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