import React from "react";
import Image from "next/image";

function OrderProduct() {
  // 예시 데이터
  const product = {
    purchaseCode: "202409262542352647",
    purchaseDateorderDate: "2024-09-27",
    totalPrice: 37374,
    purchaseItems: [
      {
        optionId: 112,
        productImage:
          "https://sitem.ssgcdn.com/75/41/08/item/2097001084175_i1_336.jpg",
        optionName: "스타벅스 (새벽배송한정) [스타벅스] B.E.L.T 샌드위치 235g",
        price: 56857,
        qty: 3,
        isReviewable: true,
      },
    ],
  };

  return (
    <>
      <h2 className="px-5 pb-3 pt-20 text-2xl font-bold">주문 내역</h2>

      <div>
        <ul>
          <li>{product.purchaseCode}</li>
          <li>{product.purchaseDateorderDate}</li>
          <li>{product.totalPrice}</li>
        </ul>
        <div>{product.purchaseItems[0].optionId}</div>
      </div>
    </>
  );
}

export default OrderProduct;
