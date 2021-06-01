import { NextFunction, Request, Response } from "express";
import "express-async-errors";

import { AppError } from "../../../../Errors/AppError";

const errorMiddleware = (
  error: Error,
  _request: Request,
  response: Response,
  _next: NextFunction
): Response<any, Record<string, any>> => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({ error: error.message });
  }

  return response.status(500).json({
    error: `Internal server error.`,
  });
};

export { errorMiddleware };
