import { CreateUserModal } from './create-user-modal';

export const CreateUserPage = () => (
  <div className="flex basis-full flex-col items-center justify-center gap-8">
    <div className="basis-full">
      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
        Create New User
      </h1>
    </div>
    <CreateUserModal />
  </div>
);
