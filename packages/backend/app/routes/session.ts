import express from "express";
import jwt from "jsonwebtoken";
import passport from "../lib/account/session";

export const sessionRouter = express.Router();

sessionRouter.post(
  "/login",
  passport.authenticate("local", { session: false }),
  (req, res, next) => {
    const user = req.user;
    const payload = { user: req.user };
    const token = jwt.sign(payload, "secret", { expiresIn: "1m" });
    res.json({ user, token });
  }
);
