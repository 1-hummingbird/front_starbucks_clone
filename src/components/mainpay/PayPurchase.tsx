import {} from "react";
import PayButton from "./PayButton";

const order = {
  shippingAddresses: 1,
  items: [
    {
      id: 1,
      name: "상품 A",
      quantity: 1,
      price: 50000,
    },
  ],
};

const PayPurchase = () => {
  const totalItems = order.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <div className="ml-9 py-5">
        <div className="flex justify-between">
          <div>
            <h4 className="text-xl font-bold">주문내역</h4>
          </div>
          <div className="px-3 font-xs">
            | 배송지 {order.shippingAddresses} 곳 / 상품 {totalItems}개
          </div>
          <PayButton />
        </div>

        <div>
          {order.items.map((item) => (
            <div key={item.id} className="mt-5">
              <div className="">
                <p>{item.name}</p>
                <p>수량: {item.quantity}</p>
                <p>가격: {item.price.toLocaleString()}원</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-border-solid border-t-[1px] z-20 border-t-slate-400" />
    </>
  );
};

export default PayPurchase;
