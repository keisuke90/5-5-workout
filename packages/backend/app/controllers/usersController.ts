import express, { Router, Request, Response, NextFunction } from "express";
import { QueryError, QueryOptions } from "mysql2";
import { MySQLClient } from "../lib/database/client";
import { validationResult, CustomValidator } from "express-validator";

const router: Router = express.Router();

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const getAllUsersSql: QueryOptions = { sql: `SELECT * FROM users` };
    const users = await MySQLClient.executeQuery(getAllUsersSql);
    res.send(users);
  } catch (err) {
    next(err);
  }
};

export const getUserFromId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const getUserFromIdSql: QueryOptions = {
      sql: `SELECT * FROM users WHERE id = ?`,
      values: [req.params.id],
    };
    const user = await MySQLClient.executeQuery(getUserFromIdSql);
    res.send(user);
  } catch (err) {
    next(err);
  }
};

export const insertUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const insertUserSql: QueryOptions = {
      sql: `insert into users values (0, "${req.body.email}", "${req.body.password}", "${req.body.name}")`,
    };
    const result = await MySQLClient.executeQuery(insertUserSql);
    res.status(201).send({ message: "ユーザー登録が完了しました。" });
  } catch (err) {
    next(err);
  }
};

export default router;
