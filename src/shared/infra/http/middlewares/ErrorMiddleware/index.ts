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
    return response
      .status(error.statusCode)
      .json({ status: "error", error: error.message });
  }

  return response.status(500).json({
    status: "error",
    messsage: `Internal server error - ${error.message}`,
  });
};

export { errorMiddleware };
