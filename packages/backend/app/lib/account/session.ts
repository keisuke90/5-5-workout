import { Request, Response, NextFunction } from "express";
import passport from "passport";

export const initialize = () => {
  return [
    passport.initialize(),
    passport.session(),
    function (req: Request, res: Response, next: NextFunction) {
      if (req.user) {
        res.locals.user = req.user;
      }
      next();
    },
  ];
};
