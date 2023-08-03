import { Request, Response, NextFunction } from "express";
import { INTERNAL_SERVER_ERROR } from "../../../utils/constants";

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(error.message);
  res.status(INTERNAL_SERVER_ERROR).json({ error: error.message });
};
