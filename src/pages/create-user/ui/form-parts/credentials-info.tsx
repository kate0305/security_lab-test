import { createUserFields, createUserFormTexts } from '@/pages/create-user/config';
import { FormField } from '@/shared/ui';
import { FormFieldController } from '@/shared/ui/form/form-field-controller';
import { Input } from '@/shared/ui/input';

export const CredentialsInfo = () => (
  <div className="space-y-4">
    <FormFieldController
      name={createUserFields.email}
      render={(field) => (
        <FormField label={createUserFormTexts.email.label} error={field.error}>
          <Input {...field} type="email" placeholder={createUserFormTexts.email.placeholder} />
        </FormField>
      )}
    />

    <FormFieldController
      name={createUserFields.password}
      render={(field) => (
        <FormField label={createUserFormTexts.password.label} error={field.error}>
          <Input
            {...field}
            type="password"
            placeholder={createUserFormTexts.password.placeholder}
          />
        </FormField>
      )}
    />
  </div>
);
