import Image from 'next/image';
import { ButtonClose } from '../button-close';
import { OrderDetailsProps } from './types';

export const OrderDetails = ({ order, onClose }: OrderDetailsProps) => {
  return (
    <div className="relative p-5 border border-slate-400 rounded-lg bg-white">
      <ButtonClose onClick={onClose} />

      <p className="text-xl font-medium mb-5">
        Длинное предлинное название прихода {order.title}
      </p>

      <ul className="w-[600px] flex flex-col gap-4">
        {order.products.map((product) => (
          <li key={product.id} className="flex items-center">
            <div>
              <Image
                src={product.photo}
                alt={product.type}
                width={60}
                height={60}
              />
            </div>
            <p className="text-xl font-medium w-64 ml-10">{product.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
