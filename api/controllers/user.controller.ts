import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

class UserController {
  //SignUp Controller
  handleSignUp = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password);

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      return res.status(409).json({ error: "User already exists" });
    }

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return res.status(201).json({
      status: "success",
      message: "User created successfully",
      data: newUser,
    });
  };

  //SignIn Controller
  handleSignIn = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(404).json({ status: false, error: "User not found" });
    }
    if (bcrypt.compareSync(password, user?.password) === false) {
      return res.status(401).json({
        status: false,
        error: "Invalid password",
      });
    }
    return res.status(200).json({
      status: true,
      message: "User signed in successfully",
      data: user,
    });
  };
}

export default UserController;
