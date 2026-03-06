'use client';

import { type ReactNode, useState } from 'react';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '..';
import { ModalContext, type ModalContextValue, useModalContext } from './modal-context';

type ModalProps = {
  children: ReactNode;
};

type ModalComponentProps = {
  children: ReactNode;
};

type ContentProps = {
  children: ReactNode | ((context: ModalContextValue) => ReactNode);
};

const Trigger = ({ children }: ModalComponentProps) => (
  <DialogTrigger asChild>{children}</DialogTrigger>
);

const Content = ({ children }: ModalComponentProps) => <DialogContent>{children}</DialogContent>;

const Header = ({ children }: ModalComponentProps) => <DialogHeader>{children}</DialogHeader>;

const Title = ({ children }: ModalComponentProps) => <DialogTitle>{children}</DialogTitle>;

const Description = ({ children }: ModalComponentProps) => (
  <DialogDescription>{children}</DialogDescription>
);

const Body = ({ children }: ContentProps) => {
  const context = useModalContext();

  return <div>{typeof children === 'function' ? children(context) : children}</div>;
};

const Footer = ({ children }: ModalComponentProps) => <DialogFooter>{children}</DialogFooter>;

const Close = ({ children }: { children: ReactNode }) => (
  <DialogClose asChild>{children}</DialogClose>
);

export const Modal = ({ children }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ close }}>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        {children}
      </Dialog>
    </ModalContext.Provider>
  );
};

Modal.Trigger = Trigger;
Modal.Content = Content;
Modal.Header = Header;
Modal.Title = Title;
Modal.Description = Description;
Modal.Body = Body;
Modal.Footer = Footer;
Modal.Close = Close;
