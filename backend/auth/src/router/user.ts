import express from "express";
import { signinSchema, signupSchema } from "../zod-schemas/zod";

import { PrismaClient } from "@prisma/client";

import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

import bcrypt from "bcrypt";

export const userRouter = express.Router();

userRouter.get("/test-pt", async (req, res) => {
  console.log(req.headers);
  res.send("hii there from userRouter");
});

userRouter.post("/sign-up", async (req, res) => {
  const { success } = signupSchema.safeParse(req.body);
  if (!success) {
    res.send({
      msg: "please enter details in correct format",
    });
    return;
  }
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await prisma.user.create({
      data: {
        name: req.body.fullName,
        email: req.body.email,
        password: hashedPassword,
      },
    });
    const payload = user.id;
    const token = jwt.sign(
      {
        payload,
      },
      "piyush"
    );

    res.send({
      msg: "User created sucessfully",
      token,
    });
  } catch (error) {
    console.log(error);
    res.send("error");
    return;
  }
});
userRouter.post("/sign-in", async (req, res) => {
  const { success } = signinSchema.safeParse(req.body);

  if (!success) {
    res.status(411).send({
      msg: "please send data in correct format",
    });

    return;
  }

  try {
    const user = await prisma.user.findFirst({
        where:{
            email:req.body.email,
        }
    });

    if (!user) {
      res.status(411).send({
        msg: "user doesnot exists",
      });
      return;
    }

    if (user && await bcrypt.compare(req.body.password,user.password)) {
        const payload = user.id;
        const token = jwt.sign({
           payload
        },"piyush");

        res.status(200).json({
            token:token
        });

        return;
    }
    res.status(411).json({
        message: "Error while logging in"
    })
    return;
  } catch (error) {
    console.log(error);
    res.send("internal server error")
    return;
  }
});
