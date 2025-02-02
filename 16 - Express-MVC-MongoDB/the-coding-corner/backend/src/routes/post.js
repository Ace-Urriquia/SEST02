const express = require("express");
const router = express.Router();
const {createPost, getAllPosts, getPost,deletePost, updatePost} = require("../controllers/post");
const {authMiddleware} = require("../middleware/authMiddleware");

//POST: create a new POST

//POST: https://localhost:3000/api/posts/
router.post("/",createPost);

//GET: https://localhost:3000/api/posts/
router.get("/",getAllPosts);

//GET: https://localhost:3000/api/posts/:id

router.get("/:id",getPost);

//DELETE: https://localhost:3000/api/posts/:id
router.delete("/:id",deletePost);

//PUT: https://localhost:3000/api/posts/:id
router.put("/:id",updatePost);
module.exports = router;

