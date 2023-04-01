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

router.get("/artposts/:Id", (req, res, next) => {
  Artpost.findById(req.params.Id)
.then(response => {
  res.json(response)
})
.catch(error => {
  console.log(`Error creating Artpost: ${error}`);
  res.sendStatus(500).json({ message: "Error Getting Artpost" });
})
})

// POST route for creating a new post of type "post"
router.post("/", (req, res, next) => {
    const { content, post_image, place, author } = req.body;
    // Check if all required fields are provided
    if (!content || !post_image || !place) {
      console.log("Error: Missing required fields");
      res.status(400).json({ message: "Please provide all required fields" });
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

//   update post
router.put('/:id/update', fileUploader.single("post_image"), (req, res, next) => {
  const { id } = req.params;
  const { content, place } = req.body;
  const post_image = req.file ? req.file.path : undefined;

  const updateData = { content, place };

  if (post_image) {
    updateData.post_image = post_image;
  }

  Post.findByIdAndUpdate(id, updateData, { new: true })
    .then(updatedPost => {
      res.json(updatedPost);
    })
    .catch(error => {
      console.log(`Error updating Post: ${error}`);
      res.status(500).json({ message: "Error updating Post" });
    });
}); 

// delte post 
router.delete("/:id", (req, res, next) => {
  const { id } = req.params;

  Post.findByIdAndRemove(id)
    .then((removedPost) => {
      if (removedPost) {
        res.status(204).json({ message: `Post with id ${id} was deleted successfully.` });
      } else {
        res.status(404).json({ message: `Post with id ${id} was not found.` });
      }
    })
    .catch((error) => {
      console.log(`Error deleting Post: ${error}`);
      res.status(500).json({ message: "Error deleting Post." });
    });
});





// GET route for retrieving a single post by ID
router.get('/:id', (req, res, next) => {
    const postId = req.params.id;
    Post.findById(postId)
      .populate('author')
      .then(post => {
        if (!post) {
          res.status(404).json({ message: `Post with ID ${postId} not found` });
        } else {
          res.json({ post: post });
        }
      })
      .catch(error => {
        console.log(`Error retrieving post with ID ${postId}: ${error}`);
        res.status(500).json({ message: 'Error retrieving post' });
      });
  });


// protect routes for the update and delete posts for the users
// footer mock up
//  fix image sizinfg of news art posts
// check ironhack to make sure we are on track for functionality.

  
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
