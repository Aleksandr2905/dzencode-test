'use client';

import { useState } from 'react';
import { orders } from '../../../../api';
import { Order } from '../order';
import { OrderDetails } from '../order-details';

export const OrderList = () => {
  const [showOrder, setShowOrder] = useState<number | null>(null);

  const handleSelectOrder = (orderId: number) => {
    setShowOrder(orderId);
  };

  const handleCloseOrderDetails = () => {
    setShowOrder(null);
  };

  return (
    <>
      <div className="ml-[17%]">
        <h2 className="text-2xl font-medium text-title">
          Приходы / {orders.length}
        </h2>
        <div className="flex items-start gap-10 mt-5">
          <ul className="flex flex-col gap-5 w-full">
            {orders.map((order) => (
              <Order
                key={order.id}
                order={order}
                onClick={() => handleSelectOrder(order.id)}
                isSelected={order.id === showOrder}
                isHidden={showOrder !== null}
              />
            ))}
          </ul>

          {showOrder && (
            <OrderDetails
              order={
                orders.find((o) => o.id === showOrder) || {
                  title: '',
                  products: [],
                }
              }
              onClose={handleCloseOrderDetails}
            />
          )}
        </div>
      </div>
    </>
  );
};
