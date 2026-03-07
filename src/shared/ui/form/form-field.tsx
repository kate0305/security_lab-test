import type { ReactNode } from 'react';

import { Field, FieldContent, FieldError, FieldLabel } from '../field';

type FormFieldProps = {
  label: string;
  children: ReactNode;
  error?: string;
};

export const FormField = ({ label, error, children }: FormFieldProps) => (
  <Field>
    <FieldLabel>{label}</FieldLabel>
    <FieldContent>{children}</FieldContent>
    {error && <FieldError>{error}</FieldError>}
  </Field>
);
