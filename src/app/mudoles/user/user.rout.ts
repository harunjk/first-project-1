import express from 'express';
import { UserController } from './user.controllar';
import { StudentValidation } from '../student/student.validation';
import validatRequest from '../../middlwar/validatRequest';
const router = express.Router();

router.post(
  '/create-student',
  validatRequest(StudentValidation.CreateStudentValidationSchema),
  UserController.createStudent,
);

export const UserRouter = router;
