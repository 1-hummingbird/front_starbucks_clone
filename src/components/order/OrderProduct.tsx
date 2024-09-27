import React from "react";
import Image from "next/image";

function OrderProduct() {
  // 예시 데이터
  const orderDate = "2024-09-27"; // 상품 구매 날짜
  const product = {
    name: "상품 이름",
    price: "50,000",
    imageUrl: "https://via.placeholder.com/150",
  };

  return (
    <>
      <h2 className="px-5 pb-3 pt-20 text-2xl font-bold">주문 내역</h2>

      {/* 상품 정보 카드 */}
      <div className="mx-3 border-b-2 border-gray-300 px-3 py-4">
        {/* 구매 날짜 */}
        <p className="mb-2 text-gray-500">구매 날짜: {orderDate}</p>

        <div className="flex items-center">
          {/* 상품 이미지 */}
          <img
            src={product.imageUrl}
            className="mr-4 h-24 w-24"
            alt={product.name}
          />

          {/* 상품 이름과 가격 */}
          <div>
            <h3 className="items-center text-lg font-semibold">
              {product.name}
            </h3>
            <p className="text-gray-700">₩{product.price}원</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderProduct;
