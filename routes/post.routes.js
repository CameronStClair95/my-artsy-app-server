const router = require("express").Router()
const User = require("../models/User.model")
/* 
const Post = require("")
const Comment = require("")
*/
const mongoose = require("mongoose")
const { isAuthenticated } = require("../middleware/jwt.middleware.js");


const {isLoggedIn, isLoggedOut} = require("../middleware/route-guard")

module.exports = router