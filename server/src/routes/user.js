import express from "express";
import {
  createUser,
  login,
  getMe,
  updateUser,
  validateToken,
  getUsers,
} from "../controllers/user.js";
import { protect } from "../middlewares/authMiddleware.js";
const userRouter = express.Router();

userRouter.post("/create", createUser);
userRouter.post("/login", login);
userRouter.get("/me", protect, getMe);
userRouter.post("/validate", validateToken);
userRouter.patch("/update", protect, updateUser);
userRouter.get("/", getUsers);

export default userRouter;
