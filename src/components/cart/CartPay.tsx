"use client";
import React, { useEffect, useState } from "react";

interface ProductOption {
  price: number;
  discountRate: number;
}

function CartPay() {
  const [productData, setProductData] = useState<ProductOption>({
    price: 0,
    discountRate: 0,
  });

  const productId = 1;
  useEffect(() => {
    // API 호출 함수
    const fetchProductData = async () => {
      try {
        const response = await fetch(
          `https://api.team-hummingbird.shop/api/v1/cart/items/member`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1dWlkIjoiMzc4YmU1NjAtZTk5Yy00Yjg3LTgzMDEtYzQ4MDVhNTY2MjgxIiwiaWF0IjoxNzI3MDc2MDg4fQ.tPFgYQJwngn7M_xHJ3y8g9x1yUCW8UU-vXZg1NcNSmHpfgjp__9HhugieDiPNlM4hE1afaMBYOm_VWHMmthARg`,
            },
          },
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setProductData({
            price: data.price,
            discountRate: data.discountRate,
          });
        } else {
          console.error("Failed to fetch product data");
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, [productId]);

  const { price, discountRate } = productData;
  const discountAmount = (price * discountRate) / 100;
  const finalPrice = price - discountAmount - 3000; // 상품 금액 - 할인 금액 + 배송비

  return (
    <>
      <div className="p-3">
        <ul className="flex items-center justify-between">
          <li>상품 금액</li>
          <li className="text-lg font-bold">원</li>
        </ul>
        <ul className="flex items-center justify-between">
          <li>할인 금액</li>
          <li className="text-lg font-bold">원</li>
        </ul>
        <ul className="flex items-center justify-between">
          <li>배송비</li>
          <li className="text-lg font-bold">3000원</li>
        </ul>
        <ul className="flex items-center justify-between py-3">
          <li>총 결제예정금액</li>
          <li className="text-xl font-bold">원</li>
        </ul>
      </div>
    </>
  );
}

export default CartPay;
