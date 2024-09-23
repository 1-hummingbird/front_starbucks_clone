import React from "react";
import Link from "next/link";
import fetchDeliveries from "@/action/deliveryAction";
import { Delivery } from "@/types/delivery";


interface ApiResponse {
  result: {
    shippingAddressList: Delivery[];
  };
}

interface DeliveryMainProps {
  deliveries: Delivery[];
}


async function DeliveryMain() {
  const deliveries = await fetchDeliveries();

  return (
    <>
      {deliveries.map((delivery) => (
        <div key={delivery.id} className="p-3">
          <ul className="flex justify-between">
            <div className="flex gap-2">
              <li className="font-bold">{delivery.name}</li>
              <li className="font-bold">({delivery.addressNickname})</li>
              {delivery.type && (
                <li className="text-xs italic text-green-500">
                  {delivery.type}
                </li>
              )}
            </div>
            <div>
              <button>
                <Link
                  href="/delivery/newdelivery/newsubdelivery"
                  className="px-2 text-xs text-slate-300"
                >
                  수정
                </Link>
              </button>
              <button
                className="px-2 text-xs text-slate-300"
                onClick={() => {/* Handle delete */}}
              >
                삭제
              </button>
            </div>
          </ul>
          <p className="pt-1">{delivery.address}</p>
          <p className="py-3">{delivery.phone}</p>
          <hr className="border-border-solid z-20 border-t-[1px] border-t-slate-400" />
        </div>
      ))}
    </>
  );
}

export default DeliveryMain;
