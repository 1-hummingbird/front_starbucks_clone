"use client";
import { PayItemType } from "@/types/responseType";
import Image from "next/image";
import React from "react";

const PayPurchase = () => {
  // const totalItems = order.items.reduce(
  //   (total, item) => total + item.quantity,
  //   0,
  // );

  return (
    <>
      <div className="ml-8 py-5">
        {/* <div className="flex">
          <div>
            <h4 className="text-xl font-bold">주문내역</h4>
          </div>
          <div className="px-3 font-[2]">
            배송지 {order.shippingAddresses} 곳 / 상품 {totalItems}개
          </div>
        </div> */}

        {/* <div>
          {PayItemDatas.items.map((item) => (
            <div key={PayItemDatas.id} className="mt-5">
              <div className="flex">
                <Image width={64} height={64} src={item.img} alt="사진" />
                <ul className="ml-4">
                  <li>
                    {PayItemDatas.name} {PayItemDatas.price}
                  </li>
                  <li>{item.price.toLocaleString()}원</li>
                </ul>
              </div>
            </div>
          ))}
        </div> */}
      </div>
      <hr className="border-border-solid z-20 mx-6 border-t-[1px] border-t-slate-400" />
    </>
  );
};

export default PayPurchase;
