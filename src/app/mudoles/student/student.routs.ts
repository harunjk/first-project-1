import express from 'express';
import { StudentContorollar } from './student.controller';
const router = express.Router();

// will call controlar funtion
router.post('/create-student', StudentContorollar.createStudent);
router.get('/', StudentContorollar.getAllStudent);
router.get('/:studentId', StudentContorollar.getSingelStudent);

export const StudentRouts = router;
