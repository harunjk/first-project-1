import { UserService } from './user.service';
import sentResponse from '../../utils/sentRespont';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync.';

const createStudent = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;

  const result = UserService.createStudentInToDb(password, studentData);
  sentResponse(res, {
    statuseCode: httpStatus.OK,
    success: true,
    message: 'Student is created successful !!',
    data: result,
  });
});

export const UserController = {
  createStudent,
};
