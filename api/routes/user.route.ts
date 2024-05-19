import express from "express";
import UserController from "../controllers/user.controller";

const router = express.Router();
const userController = new UserController();

// Get Methods
router.get("/signin", userController.handleSignIn);
// Post Methods
router.post("/signup", userController.handleSignUp);

export default router;
