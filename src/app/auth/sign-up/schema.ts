import { z } from 'zod';

export const signUpSchema = z.object({
  name: z.string().min(5, { message: 'Name must be at least 5 characters long' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
});