import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class PostController {
  handleCreatePost = async (req: Request, res: Response) => {
    try {
      const { title, body, authorId } = req.body;
      const newPost = await prisma.post.create({
        data: {
          title,
          body,
          slug: title.split(" ").join("-").toLowerCase(),
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
}

export default PostController;
