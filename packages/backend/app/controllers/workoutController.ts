import { Request, Response } from "express";

exports.fiveByFive = (req: Request, res: Response) => {
  const weight: number = req.body.weight;
  const result = weight * 5;
  res.json({ result: result });
};
