import { Schema, model } from 'mongoose';
import {
  TGuardian,
  TLocalGuardian,
  TStudent,
  StudentMathods,
  StudentModel,
  TUserNme,
} from './student/student.inerface';
import validator from 'validator';

const UserNameSchema = new Schema<TUserNme>({
  firstName: {
    type: String,
    required: [true, 'First Name is required'],
    trim: true,
    validate: {
      validator: function (value: string) {
        const nameStr = value.charAt(0).toUpperCase() + value.slice(1);
        return value === nameStr;
      },
      message: '{VALUE} is not capitalize format',
    },
    maxlength: [20, 'first name is not allowed more then 20 charector'],
  },
  middleName: { type: String },
  lastName: {
    type: String,
    trim: true,
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: '{VALUE} is not valied',
    },
    required: [true, 'Lats Name is required'],
  },
});

const GuardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    trim: true,
    required: [true, 'Father Name is required'],
  },
  fatherOccupation: {
    type: String,
    trim: true,
    required: [true, 'Father Occupation is required'],
  },
  fatherContact: {
    type: String,
    trim: true,
    required: [true, 'Father contact is required'],
  },
});

const LocalGuardianSchema = new Schema<TLocalGuardian>({
  name: { type: String, required: true },
  occupation: {
    type: String,
    trim: true,
    required: [true, 'Occupation is required'],
  },
  contactNo: {
    type: String,
    trim: true,
    required: [true, 'Contact is required'],
  },
  address: { type: String, required: [true, 'Address is required'] },
});

const studentSchema = new Schema<TStudent, StudentModel, StudentMathods>({
  id: { type: String, required: true, unique: true },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, ' User id is required'],
    unique: true,
    ref: 'User',
  },
  name: { type: UserNameSchema, required: [true, ' Name is required'] },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: '{VALUE} is not valid',
    },
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: [true, 'Email is required'],
    unique: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: '{VALUE} is not valid email',
    },
  },
  dateOfBirth: { type: Date },
  contactNo: { type: String, required: [true, 'Contact is required'] },
  emargencyContact: {
    type: String,
    required: [true, 'Emargency contact num is required'],
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message: '{VALUE} is not valied',
    },
  },
  presentAddress: { type: String, required: [true, 'Presnt is required'] },
  parmanentAddress: { type: String, required: [true, 'Parmanent is required'] },
  guardian: { type: GuardianSchema, required: [true, 'Guardian is required'] },
  localGuardian: {
    type: LocalGuardianSchema,
    required: [true, 'Local Guardian is required'],
  },
  admissionSemester: {
    type: Schema.Types.ObjectId,
    ref: 'academicSemister',
  },
  academicDepartment: {
    type: Schema.Types.ObjectId,
    ref: 'academicDepartment',
  },
  profileImg: {
    type: String,
    trim: true,
    required: [true, 'Images Link is required'],
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

studentSchema.methods.isUserExist = async function (id: string) {
  const existingUser = await Student.findOne({ id });
  return existingUser;
};

// Create a model
export const Student = model<TStudent, StudentModel>('Student', studentSchema);
