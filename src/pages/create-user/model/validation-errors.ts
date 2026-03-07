export const validationErrors = {
  firstName: {
    required: 'First name is required',
    min: 'First name must be at least 2 characters',
    invalid: 'First name may contain only letters, spaces, and hyphens',
  },
  lastName: {
    required: 'Last name is required',
    min: 'Last name must be at least 2 characters',
    invalid: 'Last name may contain only letters, spaces, and hyphens',
  },
  email: {
    required: 'Email is required',
    invalid: 'Invalid email format',
  },
  password: {
    required: 'Password is required',
    min: 'Password must be at least 8 characters',
    weak: 'Password must include letters, numbers, and special characters',
  },
} as const;
