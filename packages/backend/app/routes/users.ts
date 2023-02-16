import express from "express";
import {
  getAllUsers,
  getUserFromId,
  insertUser,
} from "../controllers/usersController";
export const usersRouter = express.Router();

usersRouter.get("/", getAllUsers);
usersRouter.get("/:id", getUserFromId);
usersRouter.post("/create", insertUser);
