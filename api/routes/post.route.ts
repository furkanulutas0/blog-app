import express from "express";
import PostController from "../controllers/post.controller";

const router = express.Router();
const postContoller = new PostController();

// Get Methods
router.get("/get/all", postContoller.handleGetAllPosts);
router.get("/get/:id", postContoller.handleGetPostById);
// Post Methods
router.post("/add", postContoller.handleCreatePost);
export default router;
