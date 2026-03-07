'use client';

import { Loader2 } from 'lucide-react';
import { FormProvider } from 'react-hook-form';

import { useCreateUserForm } from '@/pages/create-user/model';
import { Button } from '@/shared/ui/button';

import { CredentialsInfo } from '../form-parts/credentials-info';
import { PersonalInfo } from '../form-parts/personal-info';

type CreateUserFormProps = {
  onSuccess?: () => void;
  onCancel?: () => void;
};

export const CreateUserForm = ({ onSuccess, onCancel }: CreateUserFormProps) => {
  const { methods, handleSubmit, handleCancel, isSubmitting } = useCreateUserForm({
    onSuccess,
    onCancel,
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit} className="max-w-md space-y-6" noValidate>
        <div className="flex flex-col gap-6">
          <PersonalInfo />
          <CredentialsInfo />
        </div>

        <div className="flex gap-2">
          <Button type="button" variant="outline" className="flex-1" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting} className="flex-1">
            {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Create'}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
