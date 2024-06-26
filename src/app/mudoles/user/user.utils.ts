import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
import { User } from './user.model';

const findLastStudentId = async () => {
  const lastStudent = await User.findOne(
    {
      role: 'student',
    },
    {
      id: 1,
      _id: 0,
    },
  )
    .sort({
      createdAt: -1,
    })
    .lean();
  return lastStudent?.id ? lastStudent.id : undefined;
};

export const generateStudentId = async (payload: TAcademicSemester) => {
  let currentId = (0).toString();

  const lastStudentId = await findLastStudentId();
  const lastStudentSemestreCode = lastStudentId?.substring(4, 6);
  const lastStudentYear = lastStudentId?.substring(0, 4);
  const currentSemesterCode = payload.code;
  const CurrentYear = payload.year;
  if (
    lastStudentId &&
    lastStudentSemestreCode === currentSemesterCode &&
    lastStudentYear === CurrentYear
  ) {
    currentId = lastStudentId.substring(6);
  }

  let incremintId = (Number(currentId) + 1).toString().padStart(4, '0');

  incremintId = `${payload.year}${payload.code}${incremintId}`;

  return incremintId;
};
