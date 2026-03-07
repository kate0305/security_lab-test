import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type UseFormReturn } from 'react-hook-form';

import { createUserDefaultValues } from '../config';
import { createUserSchema, type CreateUserType } from './create-user-schema';

type UseCreateUserFormParams = {
  onSuccess?: () => void;
  onCancel?: () => void;
};

type UseCreateUserFormResult = {
  methods: UseFormReturn<CreateUserType>;
  handleSubmit: () => Promise<void>;
  handleCancel: () => void;
  isSubmitting: boolean;
};

export const useCreateUserForm = ({
  onSuccess,
  onCancel,
}: UseCreateUserFormParams = {}): UseCreateUserFormResult => {
  const methods = useForm<CreateUserType>({
    resolver: zodResolver(createUserSchema),
    mode: 'onBlur',
    defaultValues: createUserDefaultValues,
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data: CreateUserType) => {
    console.info('User data:', data);
    await new Promise((resolve) => setTimeout(resolve, 700));
    onSuccess?.();
  });

  const handleCancel = () => {
    reset();
    onCancel?.();
  };

  return {
    methods,
    handleSubmit: onSubmit,
    handleCancel,
    isSubmitting,
  };
};
