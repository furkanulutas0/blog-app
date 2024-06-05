import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { connect } from "http2";
const prisma = new PrismaClient();

class PostController {
  handleCreatePost = async (req: Request, res: Response) => {
    try {
      const { title, body, short, authorId } = req.body;
      const newPost = await prisma.post.create({
        data: {
          image: "https://picsum.photos/200/300",
          title,
          body,
          slug: title.split(" ").join("-").toLowerCase(),
          short,
          author: {
            connect: {
              id: authorId,
            },
          },
        },
      });
      res.status(201).json(newPost);
    } catch (error) {
      res.status(500).json({ error });
    }
  };

  // handle get all posts
  handleGetAllPosts = async (req: Request, res: Response) => {
    try {
      const posts = await prisma.post.findMany({
        include: {
          author: true,
        },
      });
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error });
    }
  };

  //handle get post by id
  handleGetPostById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const post = await prisma.post.findUnique({
        where: {
          id: id,
        },
        include: {
          author: true,
        },
      });
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error });
    }
  };
  // handle create comment
  handleCreateComment = async (req: Request, res: Response) => {
    try {
      const { comment, postId, authorId } = req.body;
      const newComment = await prisma.comment.create({
        data: {
          comment,
          post: {
            connect: {
              id: postId,
            },
          },
          author: {
            connect: {
              id: authorId,
            },
          },
        },
      });
      res.status(201).json(newComment);
    } catch (error) {
      res.status(500).json({ error });
    }
  };
  // handle get comments by post id
  handleGetCommentsByPostId = async (req: Request, res: Response) => {
    try {
      const { postId } = req.params;
      const comments = await prisma.comment.findMany({
        where: {
          postId: postId,
        },
        include: {
          post: false,
          author: true, 
        },
      });
      res.status(200).json({
        status: "success",
        data: comments,
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        error: error,
      });
    }
  };
}

export default PostController;
