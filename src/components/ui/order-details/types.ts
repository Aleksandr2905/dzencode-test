interface ProductType {
  id: number;
  photo: string;
  type: string;
  title: string;
}

export interface OrderDetailsProps {
  order: {
    title: string;
    products: ProductType[];
  };
  onClose: () => void;
}
