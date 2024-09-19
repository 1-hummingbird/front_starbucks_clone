"use client";
import React, { useState } from "react";
import PayButton from "./PayButton";

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
  const [showOrderDetails, setShowOrderDetails] = useState(false);

  const toggleOrderDetails = () => {
    setShowOrderDetails(!showOrderDetails); // 주문 세부 정보 표시 상태 토글
  };

  const totalItems = order.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <div className="ml-8 py-5 text-nowrap">
        <div className="flex justify-between">
          <div>
            <h4 className="text-xl font-bold">주문내역</h4>
          </div>
          <div className="px-3 font-xs">
            | 배송지 {order.shippingAddresses} 곳 / 상품 {totalItems}개
          </div>
          <PayButton toggleOrderDetails={toggleOrderDetails} />{" "}
          {/* PayButton에 상태 변경 함수 전달 */}
        </div>

        {/* 주문 세부 정보 표시 */}
        {showOrderDetails && (
          <div>
            {order.items.map((item) => (
              <div key={item.id} className="mt-5">
                <div className="flex">
                  <img className="w-16 h-16" src={item.img} alt="사진" />
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
        )}
      </div>
      <hr className="border-border-solid border-t-[1px] z-20 border-t-slate-400" />
    </>
  );
};

export default PayPurchase;
