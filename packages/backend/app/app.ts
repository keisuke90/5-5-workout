import express, { Request, Response, Errback, NextFunction } from "express";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.json({ id: 1 });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
