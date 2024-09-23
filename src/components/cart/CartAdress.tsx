"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

interface ShippingData {
  name: string;
  addressNickname: string;
  address: string;
  memo: string;
  phone: string;
}

const CartAdress = () => {
  const [shippingData, setShippingData] = useState<ShippingData | null>(null);

  const fetchShippingData = async () => {
    const response = await fetch(
      "https://api.team-hummingbird.shop/api/v1/shipping/get-default",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    console.log(response);
    console.log(setShippingData);

    const data = await response.json();

    //   if (data.isSuccess) {
    //     setShippingData(data.result);
    //   } else {
    //     console.error("Error fetching shipping data:", data.message);
    //   }
    // } catch (error) {
    //   console.error("Error fetching shipping data:", error);
    // }
  };

  useEffect(() => {
    fetchShippingData();
  }, []);

  if (!shippingData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="bg-slate-200 p-3">
        <ul className="flex justify-between">
          <div className="flex gap-2">
            <li className="font-bold">{shippingData.name}</li>
            <li className="font-bold">{shippingData.addressNickname}</li>
            <li className="text-xs italic text-green-500">
              {shippingData.memo}
            </li>{" "}
          </div>
          <div>
            <button className="px-2 text-xs text-rose-900">
              <Link href="/cart/subadress">배송지 변경</Link>
            </button>
          </div>
        </ul>
        <p className="pt-1">{shippingData.address}</p>
        <p className="py-3">{shippingData.phone}</p>
      </div>
    </>
  );
};

export default CartAdress;
