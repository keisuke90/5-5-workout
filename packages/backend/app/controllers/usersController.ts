import express, { Router, Request, Response } from "express";
import { QueryError } from "mysql2";
import { connection } from "../lib/database/database";

const router: Router = express.Router();
type USER_TYPE = {
  id: null;
  email: string;
  password: string;
  name: string;
};

connection.connect((err: QueryError | null) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("success");
});

router.get("/", (req: Request, res: Response) => {
  connection.query("SELECT * FROM `users`", (err: string, results: []) => {
    if (err) {
      console.log(err);
      return;
    }
    res.send(results);
  });
});

router.post("/create", (req: Request, res: Response) => {
  connection.query(
    `insert into users values (0, "${req.body.email}", "${req.body.password}", "${req.body.name}")`,
    (err: string, results: []) => {
      if (err) {
        console.log(err);
        return;
      }
      res.send(results);
    }
  );
});

export default router;
