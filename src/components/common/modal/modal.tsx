import { IModalProps } from './types';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { ButtonClose } from '@/components/ui/button-close';

export const Modal = ({ children, onClose, showMenu }: IModalProps) => {
  return (
    <Dialog open={showMenu} onClose={onClose} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="fixed inset-0 flex w-screen items-center justify-center">
        <DialogPanel className="bg-white relative">
          <ButtonClose onClick={onClose} />
          {children}
        </DialogPanel>
      </div>
    </Dialog>
  );
};
