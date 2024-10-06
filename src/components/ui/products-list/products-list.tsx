'use client';

import { useState } from 'react';
import { products } from '../../../../api';
import { Product } from '../product/product';

export const ProductsList = () => {
  const [selectedType, setSelectedType] = useState<string>('');

  const productTypes = Array.from(
    new Set(products.map((product) => product.type))
  );

  const filteredProducts = selectedType
    ? products.filter((product) => product.type === selectedType)
    : products;

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium text-title">
          Продукты / {filteredProducts.length}
        </h2>

        <div className="flex items-end gap-4">
          <label
            htmlFor="productType"
            className="block text-xl font-medium text-title"
          >
            Фильтр по типу:
          </label>
          <select
            id="productType"
            className="block p-2 border border-gray-300 rounded-md"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">All</option>
            {productTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>
      <ul className="flex flex-col gap-5 mt-5">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </>
  );
};
