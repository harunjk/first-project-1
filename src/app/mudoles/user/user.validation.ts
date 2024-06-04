import { z } from 'zod';

const userVelidationSchema = z.object({
  id: z.string(),
  password: z
    .string({
      invalid_type_error: 'Password must be string',
    })
    .max(20, { message: 'password cant be more then 20 characters' })
    .optional(),
});

export const UserVelidation = {
  userVelidationSchema,
};
