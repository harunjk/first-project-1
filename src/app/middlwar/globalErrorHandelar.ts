/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

const globalErrorHandelar = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = 500;
  const message = err.message || 'SOmthing want wrong';
  return res.status(statusCode).json({
    success: false,
    message,
    error: err,
  });
};

export default globalErrorHandelar;
