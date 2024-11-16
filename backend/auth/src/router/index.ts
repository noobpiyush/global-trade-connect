import express from "express";
import { userRouter } from "./user";
import { CompanyRouter } from "./company";

export const rootRouter = express.Router()

rootRouter.use("/user", userRouter);

rootRouter.use("/company", CompanyRouter)