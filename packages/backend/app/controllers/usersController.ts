import express, { Router, Request, Response, NextFunction } from "express";
import { QueryError, QueryOptions } from "mysql2";
import { MySQLClient } from "../lib/database/client";

const router: Router = express.Router();
type USER_TYPE = {
  id: null;
  email: string;
  password: string;
  name: string;
};

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const getAllUsersSql: QueryOptions = { sql: `SELECT * FROM users` };
    await MySQLClient.connect();
    const users = await MySQLClient.query(getAllUsersSql);
    res.send(users);
  } catch (err) {
    next(err);
  } finally {
    await MySQLClient.end();
  }
});

router.post(
  "/create",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const insertUserSql: QueryOptions = {
        sql: `insert into users values (0, "${req.body.email}", "${req.body.password}", "${req.body.name}")`,
      };
      await MySQLClient.connect();
      const result = await MySQLClient.query(insertUserSql);
      res.status(201).send(result);
    } catch (err) {
      next(err);
    } finally {
      await MySQLClient.end();
    }
  }
);

export default router;
