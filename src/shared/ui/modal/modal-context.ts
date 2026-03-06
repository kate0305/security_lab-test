import { createContext, useContext } from 'react';

export type ModalContextValue = {
  close: () => void;
};

export const ModalContext = createContext<ModalContextValue | null>(null);

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('Modal components must be used inside ModalWindow');
  }

  return context;
};
