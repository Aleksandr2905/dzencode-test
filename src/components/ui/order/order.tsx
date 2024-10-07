import { useState } from 'react';
import { pluralize } from 'numeralize-ru';
import clsx from 'clsx';
import { Modal } from '@/components/common/modal';
import DeleteIcon from '@/../public/assets/icons/delete.svg';
import BurgerIcon from '@/../public/assets/icons/burger.svg';
import ArrowIcon from '@/../public/assets/icons/arrow.svg';
import { formatDate } from '@/utils';
import { sumPrices } from '@/utils/sum-prices';
import { OrderProps } from './types';
import { DeletePopup } from '@/components/delete-popup';

export const Order = ({
  order,
  onClick,
  isHidden,
  isSelected,
  onDelete,
}: OrderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const totalPrices = sumPrices(order.products);

  return (
    <>
      <li
        className={clsx(
          'flex justify-between items-center py-3  border border-slate-400 rounded-lg bg-white animation cursor-pointer hover:bg-slate-100 relative',
          isHidden ? 'pl-7 pr-28' : 'px-5'
        )}
      >
        <div
          onClick={onClick}
          className="flex justify-between items-center w-full"
        >
          {!isHidden && (
            <p className="text-xl font-medium w-96">
              Длинное предлинное название прихода {order.title}
            </p>
          )}
          <div className="flex items-center gap-3">
            <div className="border border-title rounded-full w-12 h-12 flex items-center justify-center">
              <BurgerIcon width={20} height={20} />
            </div>
            <p className="flex flex-col text-sm text-gray-500">
              {' '}
              <span className="text-2xl text-title">
                {order.products.length}
              </span>{' '}
              {pluralize(
                order.products.length,
                'Продукт',
                'Продукта',
                'Продуктов'
              )}
            </p>
          </div>
          <p>{formatDate(order.date)}</p>
          {!isHidden && (
            <ul className="w-24">
              {Object.entries(totalPrices).map(([symbol, value]) => (
                <li key={symbol} className="flex gap-1">
                  {value} {symbol}
                </li>
              ))}
            </ul>
          )}
        </div>
        {!isHidden ? (
          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-label="button delete document"
            className="ml-5 hover:text-text_hover animation hover:border hover:border-text_hover hover:rounded-full w-12 h-12 flex items-center justify-center"
          >
            <DeleteIcon width={24} height={24} />
          </button>
        ) : (
          <button
            type="button"
            onClick={onClick}
            aria-label="button select document"
            className={clsx(
              'absolute top-0 right-0 text-transparent ml-5 hover:bg-slate-300 hover:text-white hover:rounded-r-lg animation  w-12 h-full flex items-center justify-center',
              isSelected && 'bg-slate-300 text-white rounded-r-lg'
            )}
          >
            <ArrowIcon width={24} height={24} />
          </button>
        )}
      </li>

      <Modal onClose={toggleMobileMenu} showMenu={isOpen}>
        <DeletePopup
          onClose={toggleMobileMenu}
          onDelete={onDelete}
          title={order.title}
        />
      </Modal>
    </>
  );
};
