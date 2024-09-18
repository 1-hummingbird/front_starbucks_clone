import React from "react";

function OrderStatus() {
  return (
    <>
      <div className="flex">
        <ul>
          <li>결제 완료</li>
          <li>배송준비중</li>
          <li>배송중</li>
          <li>배송완료</li>
        </ul>
      </div>
    </>
  );
}

export default OrderStatus;
