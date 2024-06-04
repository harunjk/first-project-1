import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync.';
import { AcademicDepartmentService } from './academicDepartment.service';
import sentResponse from '../../utils/sentRespont';
import httpStatus from 'http-status';

const createAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await AcademicDepartmentService.createAcAdemicDepartmentIntoDb(req.body);
    sentResponse(res, {
      statuseCode: httpStatus.OK,
      success: true,
      message: 'Create Academic Department!',
      data: result,
    });
  },
);

const getAllAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await AcademicDepartmentService.getAllAcAdemicDepartmentIntoDb();
    sentResponse(res, {
      statuseCode: httpStatus.OK,
      success: true,
      message: 'Get All Academic Department!',
      data: result,
    });
  },
);
const getSingleAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const { departmentId } = req.params;
    const result =
      await AcademicDepartmentService.getSinglecAdemicDepartmentIntoDb(
        departmentId,
      );
    sentResponse(res, {
      statuseCode: httpStatus.OK,
      success: true,
      message: 'Get Single Academic Department!',
      data: result,
    });
  },
);

const updateAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const { departmentId } = req.params;
    const result = await AcademicDepartmentService.updateAdemicDepartmentIntoDb(
      departmentId,
      req.body,
    );
    sentResponse(res, {
      statuseCode: httpStatus.OK,
      success: true,
      message: 'Update Academic Department!',
      data: result,
    });
  },
);

export const AcademicDepartmentController = {
  createAcademicDepartment,
  getAllAcademicDepartment,
  getSingleAcademicDepartment,
  updateAcademicDepartment,
};
