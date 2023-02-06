import express from "express";
import { fiveByFive } from "../controllers/workoutController";
export const workoutRouter = express.Router();

workoutRouter.get("/5x5", fiveByFive);
