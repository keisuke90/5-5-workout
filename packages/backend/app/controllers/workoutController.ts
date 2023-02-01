import { Request, Response } from "express";

export const fiveByFive = (req: Request, res: Response) => {
  const weight: number = req.body.weight;
  const p1 = [
    Math.ceil(weight * 0.55) - (Math.ceil(weight * 0.55) % 2.5),
    Math.ceil(weight * 0.6) - (Math.ceil(weight * 0.6) % 2.5),
    Math.ceil(weight * 0.65) - (Math.ceil(weight * 0.65) % 2.5),
    Math.ceil(weight * 0.7) - (Math.ceil(weight * 0.7) % 2.5),
    Math.ceil(weight * 0.75) - (Math.ceil(weight * 0.75) % 2.5),
  ];
  const p2 = [
    Math.ceil(weight * 0.6) - (Math.ceil(weight * 0.6) % 2.5),
    Math.ceil(weight * 0.65) - (Math.ceil(weight * 0.65) % 2.5),
    Math.ceil(weight * 0.7) - (Math.ceil(weight * 0.7) % 2.5),
    Math.ceil(weight * 0.75) - (Math.ceil(weight * 0.75) % 2.5),
    Math.ceil(weight * 0.8) - (Math.ceil(weight * 0.8) % 2.5),
  ];
  const p3 = [
    Math.ceil(weight * 0.65) - (Math.ceil(weight * 0.65) % 2.5),
    Math.ceil(weight * 0.7) - (Math.ceil(weight * 0.7) % 2.5),
    Math.ceil(weight * 0.75) - (Math.ceil(weight * 0.75) % 2.5),
    Math.ceil(weight * 0.8) - (Math.ceil(weight * 0.8) % 2.5),
    Math.ceil(weight * 0.85) - (Math.ceil(weight * 0.85) % 2.5),
  ];
  const p4 = [
    Math.ceil(weight * 0.7) - (Math.ceil(weight * 0.7) % 2.5),
    Math.ceil(weight * 0.75) - (Math.ceil(weight * 0.75) % 2.5),
    Math.ceil(weight * 0.8) - (Math.ceil(weight * 0.8) % 2.5),
    Math.ceil(weight * 0.85) - (Math.ceil(weight * 0.85) % 2.5),
    Math.ceil(weight * 0.9) - (Math.ceil(weight * 0.9) % 2.5),
  ];
  const p5 = [
    Math.ceil(weight * 0.75) - (Math.ceil(weight * 0.75) % 2.5),
    Math.ceil(weight * 0.8) - (Math.ceil(weight * 0.8) % 2.5),
    Math.ceil(weight * 0.85) - (Math.ceil(weight * 0.85) % 2.5),
    Math.ceil(weight * 0.9) - (Math.ceil(weight * 0.9) % 2.5),
    Math.ceil(weight * 0.95) - (Math.ceil(weight * 0.95) % 2.5),
  ];
  const p6 = [
    Math.ceil(weight * 0.8) - (Math.ceil(weight * 0.8) % 2.5),
    Math.ceil(weight * 0.85) - (Math.ceil(weight * 0.85) % 2.5),
    Math.ceil(weight * 0.9) - (Math.ceil(weight * 0.9) % 2.5),
    Math.ceil(weight * 0.95) - (Math.ceil(weight * 0.95) % 2.5),
    Math.ceil(weight * 1) - (Math.ceil(weight * 1) % 2.5),
  ];
  const result = {
    day1: p1,
    day2: p2,
    day3: p1,
    day4: p2,
    day5: p3,
    day6: p2,
    day7: p3,
    day8: p4,
    day9: p3,
    day10: p4,
    day11: p5,
    day12: p4,
    day13: p5,
    day14: p6,
    day15: p5,
    day16: p6,
  };
  res.json(result);
};
