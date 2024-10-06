'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Modal } from '@/components/common/modal';
import avatar from '@/../public/assets/images/avatar.webp';
import SettingsIcon from '@/../public/assets/icons/setting.svg';

export const UserBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="relative">
        <Image
          src={avatar}
          alt="user avatar"
          width={120}
          height={120}
          priority
          className="rounded-full"
        />
        <button
          type="button"
          onClick={toggleMobileMenu}
          aria-label="open settings panel"
          className="bg-white relative bottom-12 left-20 w-10 h-10 flex items-center justify-center rounded-full shadow-lg shadow-gray-200 animation hover:bg-slate-200"
        >
          <SettingsIcon width={20} height={20} className="text-title" />
        </button>
      </div>

      <Modal onClose={toggleMobileMenu} showMenu={isOpen}>
        <div className="w-96 h-64 flex justify-center items-center">
          <p className="text-center">НАСТРОЙКА МЕНЮ ПОЛЬЗОВАТЕЛЯ</p>
        </div>
      </Modal>
    </>
  );
};
