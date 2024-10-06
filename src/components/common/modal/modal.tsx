import { IModalProps } from './types';
import { Dialog, DialogPanel } from '@headlessui/react';
import { ButtonClose } from '@/components/ui/button-close';

export const Modal = ({ children, onClose, showMenu }: IModalProps) => {
  return (
    <Dialog open={showMenu} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center bg-slate-400 opacity-60 ">
        <DialogPanel className="w-auto h-auto bg-white relative">
          <ButtonClose onClick={onClose} />
          {children}
        </DialogPanel>
      </div>
    </Dialog>
  );
};
