import React from "react";
import OrderStatus from "./OrderStatus";

function Order() {
  return (
    <>
      <div className="flex gap-2 text-base p-5  ">
        <span className="font-bold">주문/배송 현황</span>{" "}
        <p className="">최근 3개월 동안 구매한 상품</p>
      </div>

      {/* 현황 표시 */}
      <div>
        <OrderStatus />
      </div>
    </>
  );
}

export default Order;
