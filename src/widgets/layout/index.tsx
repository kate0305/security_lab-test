import type { ReactNode } from 'react';

import { Footer } from './ui/footer';
import { Header } from './ui/header';

type LayoutProps = {
  children: ReactNode;
};
export const Layout = ({ children }: LayoutProps) => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="container mx-auto flex flex-1 flex-col justify-center px-4 py-6">
      {children}
    </main>
    <Footer />
  </div>
);
