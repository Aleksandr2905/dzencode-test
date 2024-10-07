import { ProductType } from '@/components/ui/product/types';

export const sumPrices = (products: ProductType[]): Record<string, number> => {
  return products.reduce<Record<string, number>>((total, product) => {
    product.price.forEach(({ symbol, value }) => {
      if (!total[symbol]) {
        total[symbol] = 0;
      }
      total[symbol] += value;
    });
    return total;
  }, {});
};
