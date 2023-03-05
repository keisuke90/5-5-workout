import express from "express";
import {
  getAllUsers,
  getUserFromId,
  insertUser,
} from "../controllers/usersController";
import { body } from "express-validator";
export const usersRouter = express.Router();

usersRouter.get("/", getAllUsers);
usersRouter.get("/:id", getUserFromId);
usersRouter.post(
  "/create",
  body("name").trim().escape(),
  body("email").isEmail(),
  body("password").trim().isLength({ min: 5 }),
  insertUser
);
