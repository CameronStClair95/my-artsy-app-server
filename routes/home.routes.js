const router = require("express").Router()
const mongoose = require("mongoose")
const axios = require("axios")
const jwt = require("jsonwebtoken");

const User = require("../models/User.model")
const Artpost = require("../models/Artpost.model")
const Post = require("../models/Post.model")
const News = require("../models/News.model")

const { isAuthenticated } = require("../middleware/jwt.middleware.js");
const {isLoggedIn, isLoggedOut} = require("../middleware/route-guard")

// working ✅
router.get("/home", (req, res, next) => {

    // promise.all <- implement in future
    
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
router.get("/user/:userId", (req, res, next) => {
    const {userId} = req.params

    User.findById(userId)
    .select("-password")
    .populate("postsByUser")
    .then((posts) => res.json(posts))
    
})
// updating the user route
router.put("/user/:userId", (req, res, next) => {
    const {userId} = req.params
    const {fullname, username} = req.body

    User.findByIdAndUpdate(userId, {fullname, username}, {new:true})
    .select("-password")
    .then((updatedUser) => {
            // Deconstruct the user object to omit the password
            const { _id, email, fullname, username } = updatedUser;
    
            // Create an object that will be set as the token payload
            const payload = { _id, email, fullname, username };
    
            // Create a JSON Web Token and sign it
            const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
              algorithm: "HS256",
              expiresIn: "6h",
            });
    
            // Send the token as the response
            res.status(200).json({ authToken: authToken });

        
    })
    .then()
    .catch(error => {
        console.log(`Error updating the User: ${error}`)
        /* res.sendStatus(500).json({message: `Error updating User with id ${userId}: ${error}`}) */
    })
})

//deleting the user route
router.delete("/user/:userId/delete", (req, res, next) => {
    const {userId} = req.params

    User.findByIdAndRemove(userId)
    .then((removedUser) => {
        if (removedUser) {
            res.status(204).json({message: `User with id ${userId} was successfully deleted`})
        } else {
            res.status(404).json({message: `User with id ${userId} was now found`})
        }
    })
    .catch((error) => {
        console.log(`Error deleting the user with id ${userId}: ${error}`)
        res.status(500).json({message: "Error deleting User"})
    })
})

router.get("/user/:userId/favorites", (req, res, next) => {
    /* put here the posts and artposts the user liked - sort by the likedBy argument of the model*/
})

router.post("/userId/:postId/delete", (req, res, next) => {
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