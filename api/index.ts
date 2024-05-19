import express from "express";
import userRoutes from "./routes/user.route";
import postRoutes from "./routes/post.route";
import apiAuthentication from "./middleware/api_authorization";

// Import required modules

// Create Express app
const app = express();

// Define routes
const router = express.Router();

// Import and use routes
router.use("/user", userRoutes);
router.use("/post", postRoutes);

// Use the router middleware
app.use(express.json());
app.use(apiAuthentication);
app.use("/api", router);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
