import { Model, Types } from 'mongoose';

export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContact: string;
};
export type TUserNme = {
  firstName: string;
  middleName?: string;
  lastName: string;
};
export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type TStudent = {
  id: string;
  user: Types.ObjectId;
  name: TUserNme;
  gender: 'male' | 'female';
  dateOfBirth?: Date;
  email: string;
  contactNo: string;
  emargencyContact: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  parmanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  admissionSemester: Types.ObjectId;
  academicDepartment: Types.ObjectId;
  profileImg: string;
  isDeleted: boolean;
};

export type StudentMathods = {
  isUserExist(id: string): Promise<TStudent | null>;
};

export type StudentModel = Model<
  TStudent,
  Record<string, never>,
  StudentMathods
>;
