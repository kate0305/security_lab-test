import type { CreateUserType } from '../model/create-user-schema';

export const createUserFields = {
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  password: 'password',
} as const satisfies Record<keyof CreateUserType, string>;

export const createUserFormTexts = {
  firstName: {
    label: 'First Name',
    placeholder: 'First Name',
  },
  lastName: {
    label: 'Last Name',
    placeholder: 'Last Name',
  },
  email: {
    label: 'Email',
    placeholder: 'Email',
  },
  password: {
    label: 'Password',
    placeholder: 'Password',
  },
};

export const personalInfoDefaultValues = {
  firstName: '',
  lastName: '',
};

export const credentialsDefaultValues = {
  email: '',
  password: '',
};

export const createUserDefaultValues: CreateUserType = {
  ...personalInfoDefaultValues,
  ...credentialsDefaultValues,
};
