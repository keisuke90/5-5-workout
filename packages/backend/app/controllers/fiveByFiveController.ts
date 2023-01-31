import { Request, Response } from "express";

exports.calc = (req: Request, res: Response) => {
  const number: number = req.body.number;
  const result = number * 5;
  res.json({ result: result });
};
