import { Request, Response, NextFunction } from "express";

const checkToken = (req: Request, res: Response, next: NextFunction) => {
  const token: string = req.query.token;
  if (token !== "TOKEN") {
    res.send(401);
    return;
  }
  next();
};

export default checkToken;
