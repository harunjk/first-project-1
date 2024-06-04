import { TAcademicDepartment } from './academicDepartment.interface';
import { AcademicDepartment } from './academicDepartment.model';

const createAcAdemicDepartmentIntoDb = async (payload: TAcademicDepartment) => {
  const result = await AcademicDepartment.create(payload);
  return result;
};

const getAllAcAdemicDepartmentIntoDb = async () => {
  const result = await AcademicDepartment.find().populate('academicFaculty');
  return result;
};

const getSinglecAdemicDepartmentIntoDb = async (id: string) => {
  const result =
    await AcademicDepartment.findById(id).populate('academicFaculty');
  return result;
};
const updateAdemicDepartmentIntoDb = async (
  id: string,
  payLoad: Partial<TAcademicDepartment>,
) => {
  const result = await AcademicDepartment.findByIdAndUpdate(
    { _id: id },
    payLoad,
    {
      new: true,
    },
  );
  return result;
};

export const AcademicDepartmentService = {
  createAcAdemicDepartmentIntoDb,
  getAllAcAdemicDepartmentIntoDb,
  getSinglecAdemicDepartmentIntoDb,
  updateAdemicDepartmentIntoDb,
};
