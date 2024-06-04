import express from 'express';
import { StudentContorollar } from './student.controller';
import validatRequest from '../../middlwar/validatRequest';
import { StudentValidation } from './student.validation';
const router = express.Router();

// will call controlar funtion
router.get('/', StudentContorollar.getAllStudent);
router.get('/:studentId', StudentContorollar.getSingelStudent);
router.patch(
  '/:studentId',
  validatRequest(StudentValidation.UpdtaeStudentValidationSchema),
  StudentContorollar.updateStudent,
);
router.delete('/:studentId', StudentContorollar.deleteStudent);

export const StudentRouts = router;
