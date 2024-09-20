"use client";
import Image from "next/image";
import React from "react";

const order = {
  shippingAddresses: 1,
  items: [
    {
      id: 1,
      name: "상품 A",
      quantity: 1,
      price: 50000,
      img: "https://sitem.ssgcdn.com/61/03/56/item/1000541560361_i1_1200.jpg",
      shippingAddresses: 1,
      totalItems: 1,
    },
  ],
};

const PayPurchase = () => {
  const totalItems = order.items.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <>
      <div className="ml-8 text-nowrap py-5">
        <div className="flex justify-between">
          <div>
            <h4 className="text-xl font-bold">주문내역</h4>
          </div>
          <div className="font-xs px-3">
            | 배송지 {order.shippingAddresses} 곳 / 상품 {totalItems}개
          </div>
          {/* PayButton에 상태 변경 함수 전달 */}
        </div>

        {/* 주문 세부 정보 표시 */}

        <div>
          {order.items.map((item) => (
            <div key={item.id} className="mt-5">
              <div className="flex">
                <Image className="h-16 w-16" src={item.img} alt="사진" />
                <ul className="ml-4">
                  <li>
                    {item.name} {item.quantity}
                  </li>
                  <li>{item.price.toLocaleString()}원</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-border-solid z-20 border-t-[1px] border-t-slate-400" />
    </>
  );
};

export default PayPurchase;
