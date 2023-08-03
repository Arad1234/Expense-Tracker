import { Request, Response, NextFunction, json } from "express";
import jwt from "jsonwebtoken";
export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { cookie } = req.headers;
  const token = cookie?.split("=")[1];
  try {
    const userData = jwt.verify(
      token as string,
      process.env.SECRET_KEY as string
    );
    next();
  } catch (error) {
    next(error);
  }
};
