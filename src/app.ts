import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRouts } from './app/mudoles/student/student.routs';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

app.use('/api/v1/students', StudentRouts);

app.get('/', (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
});

export default app;
