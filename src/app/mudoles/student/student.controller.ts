import { Request, Response } from 'express';
import { StudentService } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student;

    const result = StudentService.createStudentIntoDb(student);
    res.status(200).json({
      success: true,
      massage: 'Student is created successfully',
      data: result,
    });
    // will cal service fun to send this data
  } catch (err) {
    console.log(err);
  }
};
const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.findAllStudentDataFromDb();
    res.status(200).json({
      success: true,
      massage: 'Student are retrieve successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getSingelStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentService.getSingleStudentDataFromDb(studentId);
    res.status(200).json({
      success: true,
      massage: 'Single student data successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentContorollar = {
  createStudent,
  getAllStudent,
  getSingelStudent,
};
