import httpStatus from 'http-status';
import AppError from '../../../Errors/AppError';
import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemister } from './academicSemester.model';
import { academicSemesterNameCodeMapper } from './academicSemister.constant';

const createAcademicSemesterIntoDb = async (payload: TAcademicSemester) => {
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new AppError(httpStatus.NOT_FOUND, 'Invalied code');
  }

  const result = await AcademicSemister.create(payload);
  return result;
};

const getAllAcademicSemesterIntoDb = async () => {
  const result = await AcademicSemister.find();
  return result;
};
const getSingleAcademicSemesterIntoDb = async (id: string) => {
  const result = await AcademicSemister.findById(id);
  return result;
};

const updateAcademicSemesterIntoDB = async (
  id: string,
  payload: Partial<TAcademicSemester>,
) => {
  if (
    payload.name &&
    payload.code &&
    academicSemesterNameCodeMapper[payload.name] !== payload.code
  ) {
    throw new AppError(httpStatus.NOT_FOUND, 'Invalid Semester Code');
  }

  const result = await AcademicSemister.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const AcademicSemesterService = {
  createAcademicSemesterIntoDb,
  getAllAcademicSemesterIntoDb,
  getSingleAcademicSemesterIntoDb,
  updateAcademicSemesterIntoDB,
};
