import { TAcademicFaculty } from './academicFaculty.interface';
import { AcademicFaculty } from './academicFaculty.model';

const createAcademicFecultyIntoDb = async (payLoad: TAcademicFaculty) => {
  const result = await AcademicFaculty.create(payLoad);
  return result;
};

const getAllAcademicFecultyIntoDb = async () => {
  const result = await AcademicFaculty.find();
  return result;
};
const getSingleAcademicFecultyIntoDb = async (id: string) => {
  const result = await AcademicFaculty.findById(id);
  return result;
};
const updateAcademicFecultyIntoDb = async (
  id: string,
  payLoad: Partial<TAcademicFaculty>,
) => {
  const result = await AcademicFaculty.findOneAndUpdate({ _id: id }, payLoad, {
    new: true,
  });
  return result;
};

export const AcademicFacultyService = {
  createAcademicFecultyIntoDb,
  getAllAcademicFecultyIntoDb,
  getSingleAcademicFecultyIntoDb,
  updateAcademicFecultyIntoDb,
};
