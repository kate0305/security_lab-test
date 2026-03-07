import { createUserFields, createUserFormTexts } from '@/pages/create-user/config';
import { FormField } from '@/shared/ui';
import { FormFieldController } from '@/shared/ui/form/form-field-controller';
import { Input } from '@/shared/ui/input';

export const PersonalInfo = () => (
  <div className="space-y-4">
    <FormFieldController
      name={createUserFields.firstName}
      render={(field) => (
        <FormField label={createUserFormTexts.firstName.label} error={field.error}>
          <Input {...field} placeholder={createUserFormTexts.firstName.placeholder} />
        </FormField>
      )}
    />

    <FormFieldController
      name={createUserFields.lastName}
      render={(field) => (
        <FormField label={createUserFormTexts.lastName.label} error={field.error}>
          <Input {...field} placeholder={createUserFormTexts.lastName.placeholder} />
        </FormField>
      )}
    />
  </div>
);
