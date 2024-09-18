import React from "react";
import OrderStatus from "./OrderStatus";

function Order() {
  return (
    <>
      <div className="flex items-center gap-2 p-5">
        {" "}
        {/* items-center로 수직 가운데 정렬 */}
        <span className="font-bold text-lg">주문/배송 현황</span>{" "}
        {/* 큰 텍스트 */}
        <p className="text-xs text-gray-600">
          최근 3개월 동안 구매한 상품
        </p>{" "}
        {/* 작은 텍스트 */}
      </div>

      {/* 현황 표시 */}
      <div>
        <OrderStatus />
      </div>
    </>
  );
}

export default Order;
