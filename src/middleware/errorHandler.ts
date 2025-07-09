import { NextFunction, Request, Response } from "express";
import { CustomError } from "../models/shared/errors/customError.class";
import logger from "../utils/logger";

export async function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (res.headersSent) {
    return next(error);
  }
  logger.error(error.message);
  if (error instanceof CustomError) {
    res.status(error.status).json({ message: error.message });
  } else {
    res.status(500).json({ message: error.message });
  }
}
