import type { ReactElement } from 'react';
import {
  Controller,
  type ControllerRenderProps,
  type FieldPath,
  type FieldValues,
  useFormContext,
} from 'react-hook-form';

type FieldProps<T extends FieldValues> = ControllerRenderProps<T> & {
  error?: string;
};

type FormFieldControllerProps<T extends FieldValues> = {
  name: FieldPath<T>;
  render: (props: FieldProps<T>) => ReactElement;
};

export const FormFieldController = <T extends FieldValues>({
  name,
  render,
}: FormFieldControllerProps<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) =>
        render({
          ...field,
          error: fieldState.error?.message,
        })
      }
    />
  );
};
