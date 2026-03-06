'use client';

import { Button, Modal } from '@/shared/ui';

export const CreateUserModal = () => {
  return (
    <Modal>
      <Modal.Trigger>
        <Button>Create user</Button>
      </Modal.Trigger>

      <Modal.Content>
        <Modal.Header>
          <Modal.Title>Create User</Modal.Title>
        </Modal.Header>
        <Modal.Body>{({ close }) => <Button onClick={close}>Close</Button>}</Modal.Body>
      </Modal.Content>
    </Modal>
  );
};
