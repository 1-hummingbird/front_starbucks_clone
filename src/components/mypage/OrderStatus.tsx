import React from "react";

function OrderStatus() {
  return (
    <div className="flex flex-col items-center pb-5">
      {/* 주문 상태 숫자와 화살표 */}
      <div className="flex flex-col items-center">
        <ul className="flex items-center gap-8 mb-2">
          {" "}
          {/* 숫자 간의 간격을 더 크게 설정 */}
          <li className="text-center text-2xl font-bold">0</li>{" "}
          {/* 숫자를 더 크게 */}
          <img
            className="w-4 h-4"
            src="https://img.icons8.com/?size=100&id=15812&format=png&color=000000"
            alt="화살표"
          />
          <li className="text-center text-2xl font-bold">0</li>
          <img
            className="w-4 h-4"
            src="https://img.icons8.com/?size=100&id=15812&format=png&color=000000"
            alt="화살표"
          />
          <li className="text-center text-2xl font-bold">0</li>
          <img
            className="w-4 h-4"
            src="https://img.icons8.com/?size=100&id=15812&format=png&color=000000"
            alt="화살표"
          />
          <li className="text-center text-2xl font-bold">0</li>
        </ul>
      </div>

      {/* 주문 상태 텍스트 */}
      <div className="mt-1">
        <ul className="flex items-center justify-between gap-8 text-sm">
          {" "}
          {/* 텍스트를 작게 */}
          <li className="text-center">결제 완료</li>
          <li className="text-center">배송준비중</li>
          <li className="text-center">배송중</li>
          <li className="text-center">배송완료</li>
        </ul>
      </div>
    </div>
  );
}

export default OrderStatus;
