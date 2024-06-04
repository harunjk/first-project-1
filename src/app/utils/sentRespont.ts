import { Response } from 'express';

type TResponse<T> = {
  statuseCode: number;
  success: boolean;
  message?: string;
  data: T;
};

const sentResponse = <T>(res: Response, data: TResponse<T>) => {
  res.status(data?.statuseCode).json({
    success: data.success,
    message: data.message,
    data: data.data,
  });
};

export default sentResponse;
