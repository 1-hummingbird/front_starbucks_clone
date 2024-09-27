"use client";
import React, { useState } from "react";
import Image from "next/image";

function WishProduct() {
  const [allChecked, setAllChecked] = useState(false);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "코리아 단청 머그",
      price: 29000,
      image:
        "https://image.istarbucks.co.kr/upload/store/skuimg/2024/08/[9300000005363]_20240806161440187.jpg",
      checked: false,
    },
    {
      id: 2,
      name: "스타벅스 텀블러",
      price: 35000,
      image:
        "https://image.istarbucks.co.kr/upload/store/skuimg/2024/08/[9300000005363]_20240806161440187.jpg",
    },
  ]);

  // 전체 선택 핸들러
  const handleAllChecked = () => {
    const newChecked = !allChecked;
    setAllChecked(newChecked);
    setProducts(
      products.map((product) => ({ ...product, checked: newChecked })),
    );
  };

  // 개별 상품 선택 핸들러
  const handleProductChecked = (id: number) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, checked: !product.checked } : product,
      ),
    );
  };

  return (
    <div className="p-5">
      {/* 전체 선택 체크박스 */}
      <div className="flex justify-between">
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            checked={allChecked}
            onChange={handleAllChecked}
            className="form-checkbox"
          />
          <label className="ml-2 text-lg">전체 선택</label>
        </div>
        <div>
          <button className="pr-2">삭제</button>
        </div>
      </div>

      {/* 상품 리스트 */}
      <div className="space-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center rounded-lg border p-4"
          >
            {/* 개별 상품 체크박스 */}
            <input
              type="checkbox"
              checked={product.checked}
              onChange={() => handleProductChecked(product.id)}
              className="form-checkbox"
            />

            {/* 상품 이미지 */}
            <Image
              src={product.image}
              width={100}
              height={100}
              alt={product.name}
              className="ml-4"
            />

            {/* 상품 정보 */}
            <div className="ml-6 flex-1">
              <div className="text-lg font-bold">{product.name}</div>
              <div className="text-gray-600">
                {product.price.toLocaleString()}원
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WishProduct;
