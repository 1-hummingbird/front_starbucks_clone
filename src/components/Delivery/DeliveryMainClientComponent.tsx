'use client';

import React, { useMemo } from "react";
import Link from "next/link";
import { DeliveryDto } from "@/types/deliveryDto";
import { deleteDeliveryAddress, setDefaultDeliveryAddress } from "@/action/deliveryAction";

interface DeliveryClientComponentProps {
  deliveries: DeliveryDto[];
}

const DeliveryClientComponent: React.FC<DeliveryClientComponentProps> = ({ deliveries }) => {
  const handleDelete = async (deliveryId: number) => {
    try {
      await deleteDeliveryAddress(deliveryId);
      window.location.reload();
    } catch (error) {
      console.error('Failed to delete delivery address:', error);
    }
  };

  const handleSetDefault = async (deliveryId: number) => {
    try {
      await setDefaultDeliveryAddress(deliveryId);
      window.location.reload();
    } catch (error) {
      console.error('Failed to set default delivery address:', error);
    }
  };

  const sortedDeliveries = useMemo(() => {
    return [...deliveries].sort((a, b) => {
      if (a.type === "default") return -1;
      if (b.type === "default") return 1;
      return 0;
    });
  }, [deliveries]);

  return (
    <>
      {sortedDeliveries.map((deliveryDto) => (
        <div key={deliveryDto.id} className="p-3">
          <ul className="flex justify-between">
            <div className="flex gap-2">
              <li className="font-bold">{deliveryDto.name}</li>
              <li className="font-bold">({deliveryDto.addressNickname})</li>
              {(deliveryDto.type === "default" && (
                <li className="text-xs italic text-green-500">
                  "기본"
                </li>
              ))}
              {(deliveryDto.type != "default" && (
                <button
                  className="px-2 text-xs text-slate-300"
                  onClick={() => handleSetDefault(deliveryDto.id)}
                >
                  기본배송지로
                </button>
              ))}
            </div>
            <div>
              <button>
              <Link
                href={{
                  pathname: '/delivery/updatedelivery',
                  query: { dto: encodeURIComponent(JSON.stringify(deliveryDto)) }
                }}
                className="px-2 text-xs text-slate-300"
              >
                수정
              </Link>
              </button>
              <button
                className="px-2 text-xs text-slate-300"
                onClick={() => handleDelete(deliveryDto.id)}
              >
                삭제
              </button>
            </div>
          </ul>
          <p className="pt-1">{deliveryDto.address}</p>
          <p className="py-3">{deliveryDto.phone}</p>
          <hr className="border-border-solid z-20 border-t-[1px] border-t-slate-400" />
        </div>
      ))}
    </>
  );
};

export default DeliveryClientComponent;