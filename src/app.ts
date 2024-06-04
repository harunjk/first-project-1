/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { StudentRouts } from './app/mudoles/student/student.routs';
import { UserRouter } from './app/mudoles/user/user.rout';
import { error } from 'console';
import globalErrorHandelar from './app/middlwar/globalErrorHandelar';
import notFount from './app/middlwar/notFound';
import router from './routers';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
});

app.use(globalErrorHandelar);
app.use(notFount);

export default app;
