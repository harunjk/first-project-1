import { Schema, model } from 'mongoose';
import { TAcademicSemester } from './academicSemester.interface';
import {
  AcademicSemisterCode,
  AcademicSemisterName,
  Months,
} from './academicSemister.constant';
import AppError from '../../../Errors/AppError';
import httpStatus from 'http-status';

const academicSemisterSchema = new Schema<TAcademicSemester>({
  name: { type: String, required: true, enum: AcademicSemisterName },
  code: { type: String, required: true, enum: AcademicSemisterCode },
  year: { type: String, required: true },
  startMonth: { type: String, enum: Months },
  endMonth: { type: String, enum: Months },
});

academicSemisterSchema.pre('save', async function (next) {
  const isSemesterExist = await AcademicSemister.findOne({
    year: this.year,
    name: this.name,
  });
  if (isSemesterExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Semester already Exist');
  } else {
    next();
  }
});

export const AcademicSemister = model<TAcademicSemester>(
  'academicSemister',
  academicSemisterSchema,
);
