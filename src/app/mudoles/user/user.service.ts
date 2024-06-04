import httpStatus from 'http-status';
import AppError from '../../../Errors/AppError';
import config from '../../config';
import { AcademicSemister } from '../academicSemester/academicSemester.model';
import { Student } from '../student.model';
import { TStudent } from '../student/student.inerface';
import { TUser } from './user.interface';
import { User } from './user.model';
import { generateStudentId } from './user.utils';
import mongoose from 'mongoose';

const createStudentInToDb = async (password: string, payload: TStudent) => {
  const userData: Partial<TUser> = {};

  userData.password = password || (config.default_pass as string);
  userData.role = 'student';

  const admissionSemester = await AcademicSemister.findById(
    payload.admissionSemester,
  );
  if (!admissionSemester) {
    throw new AppError(httpStatus.NOT_FOUND, 'admession semester not Found');
  }
  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    userData.id = await generateStudentId(admissionSemester);

    const NewUser = await User.create([userData], { session });

    if (!NewUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Faild to Create User');
    }

    payload.id = NewUser[0].id;
    payload.user = NewUser[0]._id;

    const newStudent = await Student.create([payload], { session });
    if (!newStudent.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Faild to create Student');
    }
    await session.commitTransaction();
    await session.endSession();

    return newStudent;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error('Faild to create Student');
  }
};

export const UserService = {
  createStudentInToDb,
};
