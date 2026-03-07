'use client';

import { Button, Modal } from '@/shared/ui';

import { CreateUserForm } from '../create-user-form';

export const CreateUserModal = () => (
  <Modal>
    <Modal.Trigger>
      <Button>Create user</Button>
    </Modal.Trigger>

    <Modal.Content>
      <Modal.Header>
        <Modal.Title>Create User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {({ close }) => <CreateUserForm onSuccess={close} onCancel={close} />}
      </Modal.Body>
    </Modal.Content>
  </Modal>
);
