const router = require("express").Router()
const User = require("../models/User.model")
/* 
const Post = require("")
const Comment = require("")
*/
const mongoose = require("mongoose")
const { isAuthenticated } = require("../middleware/jwt.middleware.js");


const {isLoggedIn, isLoggedOut} = require("../middleware/route-guard")


// page for the user to see it's details and posts
router.get("/userId", isLoggedIn, (req, res, next) => {
    User.findById(req.session.currentUser._id)
    .populate("post")
    .then((posts) => {
        res.json()
    })
})

router.get("/userId/favorites", (req, res, next) => {
    
})

router.get("/home", isLoggedIn, (req, res, next) => {
// we will see the information from the json file = different entries of the artworks

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

router.post("/new-post", (req, res, next) => {
    // page to send information to the database
    // redirect to home page
})

router.get("/new-post", (req, res, next) => {
    // page to write a new post
})



module.exports = router