import { StudentModel } from '../student.model';
import { Student } from './student.inerface';

const createStudentIntoDb = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};
const findAllStudentDataFromDb = async () => {
  const result = await StudentModel.find();
  return result;
};
const getSingleStudentDataFromDb = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const StudentService = {
  createStudentIntoDb,
  findAllStudentDataFromDb,
  getSingleStudentDataFromDb,
};
