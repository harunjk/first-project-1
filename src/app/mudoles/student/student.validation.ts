import { z } from 'zod';

const UserNameSchema = z.object({
  firstName: z
    .string()
    .max(20, { message: 'First name is not allowed more than 20 characters' })
    .min(1, { message: 'First Name is required' }),
  middleName: z.string().optional(),
  lastName: z.string().min(1, { message: 'Last Name is required' }),
});

// Define the Guardian schema
const GuardianSchema = z.object({
  fatherName: z.string().min(1, { message: 'Father Name is required' }).trim(),
  fatherOccupation: z
    .string()
    .min(1, { message: 'Father Occupation is required' })
    .trim(),
  fatherContact: z
    .string()
    .min(1, { message: 'Father contact is required' })
    .trim(),
});

// Define the LocalGuardian schema
const LocalGuardianSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  occupation: z.string().min(1, { message: 'Occupation is required' }).trim(),
  contactNo: z.string().min(1, { message: 'Contact is required' }).trim(),
  address: z.string().min(1, { message: 'Address is required' }),
});

const updateUserNameValidationSchema = z.object({
  firstName: z.string().min(1).max(20).optional(),
  middleName: z.string().optional(),
  lastName: z.string().optional(),
});

const updateGuardianValidationSchema = z.object({
  fatherName: z.string().optional(),
  fatherOccupation: z.string().optional(),
  fatherContactNo: z.string().optional(),
  motherName: z.string().optional(),
  motherOccupation: z.string().optional(),
  motherContactNo: z.string().optional(),
});

const updateLocalGuardianValidationSchema = z.object({
  name: z.string().optional(),
  occupation: z.string().optional(),
  contactNo: z.string().optional(),
  address: z.string().optional(),
});

const CreateStudentValidationSchema = z.object({
  body: z.object({
    student: z.object({
      name: UserNameSchema, // No need for nonempty since individual fields are checked
      gender: z.enum(['male', 'female']),
      email: z
        .string()
        .email({ message: 'Email is not valid' })
        .min(1, { message: 'Email is required' }),
      dateOfBirth: z.string().optional(),
      contactNo: z.string().min(1, { message: 'Contact is required' }),
      emargencyContact: z
        .string()
        .min(1, { message: 'Emergency contact number is required' }),
      bloodGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional(),
      presentAddress: z
        .string()
        .min(1, { message: 'Present address is required' }),
      parmanentAddress: z
        .string()
        .min(1, { message: 'Permanent address is required' }),
      guardian: GuardianSchema,
      localGuardian: LocalGuardianSchema,
      admissionSemester: z.string(),
      academicDepartment: z.string(),
      profileImg: z
        .string()
        .url({ message: 'Image Link must be a valid URL' })
        .min(1, { message: 'Image Link is required' }),
    }),
  }),
});
const UpdtaeStudentValidationSchema = z.object({
  body: z.object({
    student: z.object({
      name: updateUserNameValidationSchema.optional(),
      gender: z.enum(['male', 'female']).optional(),
      email: z.string().email({ message: 'Email is not valid' }).optional(),
      dateOfBirth: z.string().optional(),
      contactNo: z.string().optional(),
      emargencyContact: z.string().optional(),
      bloodGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional(),
      presentAddress: z.string().optional(),
      parmanentAddress: z.string().optional(),
      guardian: updateGuardianValidationSchema.optional(),
      localGuardian: updateLocalGuardianValidationSchema.optional(),
      admissionSemester: z.string().optional(),
      academicDepartment: z.string().optional(),
      profileImg: z
        .string()
        .url({ message: 'Image Link must be a valid URL' })
        .optional(),
    }),
  }),
});

export const StudentValidation = {
  CreateStudentValidationSchema,
  UpdtaeStudentValidationSchema,
};
