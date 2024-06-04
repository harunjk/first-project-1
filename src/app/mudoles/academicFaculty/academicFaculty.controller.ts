import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync.';
import { AcademicFacultyService } from './academicFaculty.service';
import httpStatus from 'http-status';
import sentResponse from '../../utils/sentRespont';

const createAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AcademicFacultyService.createAcademicFecultyIntoDb(
      req.body,
    );
    sentResponse(res, {
      statuseCode: httpStatus.OK,
      success: true,
      message: 'Created done Academic Faculty!',
      data: result,
    });
  },
);

const getAllAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AcademicFacultyService.getAllAcademicFecultyIntoDb();
    sentResponse(res, {
      statuseCode: httpStatus.OK,
      success: true,
      message: 'Get All Academic Faculty!',
      data: result,
    });
  },
);
const getSingleAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const { facultyId } = req.params;
    const result =
      await AcademicFacultyService.getSingleAcademicFecultyIntoDb(facultyId);
    sentResponse(res, {
      statuseCode: httpStatus.OK,
      success: true,
      message: 'Get Single Academic Faculty!',
      data: result,
    });
  },
);

const updateAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const { facultyId } = req.params;
    const result = await AcademicFacultyService.updateAcademicFecultyIntoDb(
      facultyId,
      req.body,
    );
    sentResponse(res, {
      statuseCode: httpStatus.OK,
      success: true,
      message: 'Update done Faculty!',
      data: result,
    });
  },
);

export const academicFacultyController = {
  createAcademicFaculty,
  getAllAcademicFaculty,
  getSingleAcademicFaculty,
  updateAcademicFaculty,
};
