import Image from 'next/image';
import { Price, ProductProps } from './types';
import { formatDate } from '@/utils';

export const Product = ({ product }: ProductProps) => {
  return (
    <li className="flex justify-between items-center p-3 border border-slate-400 rounded-lg bg-white">
      <div>
        <Image src={product.photo} alt={product.type} width={60} height={60} />
      </div>
      <p className="text-xl font-medium w-64">{product.title}</p>
      <p className="w-24">{product.type}</p>
      <div className="w-48 flex flex-col">
        <p>с {formatDate(product.guarantee.start)}</p>
        <p>по {formatDate(product.guarantee.end)}</p>
      </div>
      <ul className="w-24">
        {product.price.map((i: Price, index: number) => (
          <li key={index} className="flex gap-1">
            <p>{i.value}</p>
            <p>{i.symbol}</p>
          </li>
        ))}
      </ul>
      <p>{product.order}</p>
    </li>
  );
};
