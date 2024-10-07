export interface Guarantee {
  start: string;
  end: string;
}

export interface ProductType {
  photo: string;
  title: string;
  type: string;
  guarantee: Guarantee;
  price: Price[];
  order: string;
}

export interface ProductProps {
  product: ProductType;
}

export interface Price {
  value: number;
  symbol: string;
}
