import { Router } from "express";
import { deleteUsers, getUser, getUsers, patchUsers, postUsers } from "../controllers/user.controllers";

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", getUser);
userRouter.post("/", postUsers);
userRouter.patch("/:id", patchUsers);
userRouter.delete("/:id", deleteUsers);

export default userRouter;