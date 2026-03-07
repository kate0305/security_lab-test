import { z } from 'zod';

import { emailRegex, nameRegex, passwordRegex } from '@/shared/lib';

import { validationErrors } from './validation-errors';

export const personalInfoSchema = z.object({
  firstName: z
    .string()
    .min(2, validationErrors.firstName.min)
    .regex(nameRegex, validationErrors.firstName.invalid),

  lastName: z
    .string()
    .min(2, validationErrors.lastName.min)
    .regex(nameRegex, validationErrors.lastName.invalid),
});

export const credentialsSchema = z.object({
  email: z
    .string()
    .min(1, validationErrors.email.required)
    .regex(emailRegex, validationErrors.email.invalid),

  password: z
    .string()
    .min(8, validationErrors.password.min)
    .regex(passwordRegex, validationErrors.password.weak),
});

export const createUserSchema = personalInfoSchema.extend(credentialsSchema.shape);

export type PersonalInfoFormType = z.infer<typeof personalInfoSchema>;
export type CredentialsFormType = z.infer<typeof credentialsSchema>;
export type CreateUserType = z.infer<typeof createUserSchema>;
