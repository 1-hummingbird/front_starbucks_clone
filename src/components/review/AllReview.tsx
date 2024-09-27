import React from "react";
import Image from "next/image";
import ButtonReview from "./ButtonReview";

const dummyData = [
  {
    id: 1,
    name: "아메리카노",
    price: "4,500",
    imageUrl:
      "https://image.istarbucks.co.kr/upload/store/skuimg/2024/08/[11156004]_20240813124102988.jpg",
  },
  {
    id: 2,
    name: "카페 라떼",
    price: "5,000",
    imageUrl:
      "https://image.istarbucks.co.kr/upload/store/skuimg/2022/10/[9300000000689]_20221011130103847.jpg ",
  },
  {
    id: 3,
    name: "카라멜 마끼아또",
    price: "5,500",
    imageUrl:
      "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9300000001927]_20210422101307127.jpg",
  },
];

function AllReview() {
  return (
    <>
      <div className="py-24">
        {dummyData.map((product) => (
          <div key={product.id}>
            <div className="mb-4 flex flex-row items-center gap-4">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={60}
                height={60}
              />
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-lg">가격: {product.price} 원</p>
                <ButtonReview />
              </div>
            </div>
            <hr className="border-border-solid z-20 mb-4 border-t-[1px] border-t-slate-400" />
          </div>
        ))}
      </div>
    </>
  );
}

export default AllReview;
