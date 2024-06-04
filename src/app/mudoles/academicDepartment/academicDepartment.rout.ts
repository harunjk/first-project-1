import express from 'express';
import { AcademicDepartmentController } from './academicDepartment.controller';
import validatRequest from '../../middlwar/validatRequest';
import { academicDepartmentValidation } from './academicDepartment.validation';
const router = express.Router();

router.post(
  '/create-academic-department',
  validatRequest(
    academicDepartmentValidation.createAcademicDepartmentValidationSchema,
  ),
  AcademicDepartmentController.createAcademicDepartment,
);
router.get('/', AcademicDepartmentController.getAllAcademicDepartment);
router.get(
  '/:departmentId',
  AcademicDepartmentController.getSingleAcademicDepartment,
);
router.patch(
  '/:departmentId',
  AcademicDepartmentController.updateAcademicDepartment,
);

export const AcademicDepartmentRouter = router;
