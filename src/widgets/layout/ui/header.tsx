import { Code2 } from 'lucide-react';

export const Header = () => (
  <header className="bg-background border-b">
    <div className="container mx-auto flex items-center gap-2 px-4 py-4">
      <Code2 className="text-primary h-6 w-6" />
      <h1 className="text-lg font-semibold">Create User</h1>
    </div>
  </header>
);
