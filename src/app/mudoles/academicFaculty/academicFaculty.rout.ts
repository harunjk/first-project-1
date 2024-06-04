import express from 'express';
import { academicFacultyController } from './academicFaculty.controller';
import validatRequest from '../../middlwar/validatRequest';
import { AcademicFacultyValidation } from './academicFaculty.validation';
const router = express.Router();

router.post(
  '/create-academic-faculty',
  validatRequest(
    AcademicFacultyValidation.createAcademicFacultyValidationSchema,
  ),
  academicFacultyController.createAcademicFaculty,
);

router.get('/:facultyId', academicFacultyController.getSingleAcademicFaculty);
router.patch('/:facultyId', academicFacultyController.updateAcademicFaculty);
router.get('/', academicFacultyController.getAllAcademicFaculty);

export const AcademicFacultyRouters = router;
