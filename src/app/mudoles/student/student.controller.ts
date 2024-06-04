import { StudentService } from './student.service';
import sentResponse from '../../utils/sentRespont';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync.';

const getAllStudent = catchAsync(async (req, res) => {
  const result = await StudentService.findAllStudentDataFromDb();
  sentResponse(res, {
    statuseCode: httpStatus.OK,
    success: true,
    message: 'Student are retrieve successfully!',
    data: result,
  });
});
const getSingelStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentService.getSingleStudentDataFromDb(studentId);
  sentResponse(res, {
    statuseCode: httpStatus.OK,
    success: true,
    message: 'Get Single Student !!',
    data: result,
  });
});

const updateStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const { student } = req.body;
  const result = await StudentService.updateStudentDataFromDb(
    studentId,
    student,
  );

  sentResponse(res, {
    statuseCode: httpStatus.OK,
    success: true,
    message: 'Student is deleted succesfully',
    data: result,
  });
});

const deleteStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentService.deleteStudentFromDB(studentId);

  sentResponse(res, {
    statuseCode: httpStatus.OK,
    success: true,
    message: 'Student is deleted succesfully',
    data: result,
  });
});

export const StudentContorollar = {
  getAllStudent,
  getSingelStudent,
  deleteStudent,
  updateStudent,
};
