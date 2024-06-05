import express from "express";
import PostController from "../controllers/post.controller";

const router = express.Router();
const postContoller = new PostController();

// Get Methods
router.get("/get/all", postContoller.handleGetAllPosts);
router.get("/get/:id", postContoller.handleGetPostById);
router.get("/get/:postId/comments", postContoller.handleGetCommentsByPostId);
// Post Methods
router.post("/add", postContoller.handleCreatePost);
router.post("/comment/add", postContoller.handleCreateComment);

export default router;
