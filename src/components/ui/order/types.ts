export type OrderType = {
  id: number;
  title: string;
  date: string;
  description: string;
  readonly products: {
    id: number;
    serialNumber: number;
    isNew: number;
    photo: string;
    title: string;
    type: string;
    specification: string;
    guarantee: { start: string; end: string };
    price: { symbol: string; value: number }[];
    order: string;
    date: string;
  }[];
};

export type OrderProps = {
  order: OrderType;
  onClick: () => void;
  isSelected: boolean;
  isHidden: boolean;
  onDelete: () => void;
};
