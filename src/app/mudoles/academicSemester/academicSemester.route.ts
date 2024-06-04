import express from 'express';
import { AcademicSemesterController } from './academicSemester.controllar';
import validatRequest from '../../middlwar/validatRequest';
import { AcademicSemisterValidation } from './academicSemister.validation';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validatRequest(
    AcademicSemisterValidation.createAcademicSemisterValidationSchema,
  ),
  AcademicSemesterController.createAcademicSemester,
);
router.get(
  '/get-academic-semester',
  AcademicSemesterController.getAllAcademicSemester,
);
router.get('/:semesterId', AcademicSemesterController.getSinglecademicSemester);
router.patch(
  '/:semesterId',
  validatRequest(
    AcademicSemisterValidation.updateAcademicSemesterValidationSchema,
  ),
  AcademicSemesterController.updateAcademicSemester,
);

export const AcademicSemesterRoutes = router;
