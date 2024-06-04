import sentResponse from '../../utils/sentRespont';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync.';
import { AcademicSemesterService } from './academicSemester.service';

const createAcademicSemester = catchAsync(async (req, res) => {
  //   const { password, student: studentData } = req.body;

  const result = AcademicSemesterService.createAcademicSemesterIntoDb(req.body);
  sentResponse(res, {
    statuseCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester is created successful !!',
    data: result,
  });
});

const getAllAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterService.getAllAcademicSemesterIntoDb();
  sentResponse(res, {
    statuseCode: httpStatus.OK,
    success: true,
    message: 'Get All Academic Semester!',
    data: result,
  });
});
const getSinglecademicSemester = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  const result =
    await AcademicSemesterService.getSingleAcademicSemesterIntoDb(semesterId);
  sentResponse(res, {
    statuseCode: httpStatus.OK,
    success: true,
    message: 'Get All Academic Semester!',
    data: result,
  });
});

const updateAcademicSemester = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  const result = await AcademicSemesterService.updateAcademicSemesterIntoDB(
    semesterId,
    req.body,
  );

  sentResponse(res, {
    statuseCode: httpStatus.OK,
    success: true,
    message: 'Academic semester is retrieved succesfully',
    data: result,
  });
});

export const AcademicSemesterController = {
  createAcademicSemester,
  getAllAcademicSemester,
  getSinglecademicSemester,
  updateAcademicSemester,
};
