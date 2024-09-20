import React from "react";
import DeliveryButton from "./DeliveryButton";

function DeliveryManagement() {
  const dummyDelivery = [
    {
      id: 1,
      name: "홍길동",
      star: "집",
      address: "경남 김해시 장유로 000번지 000동 000호",
      type: "기본",
      number: "010-0000-0000",
    },
    {
      id: 2,
      name: "가나다",
      star: "회사",
      address: "경남 김해시 장유로 000번지 000동 000호",
      type: null,
      number: "010-0000-0000",
    },
  ];

  return (
    <>
      <h2 className="p-3 text-2xl font-bold">배송지 관리</h2>

      {dummyDelivery.map((delivery) => (
        <div key={delivery.id} className="p-3">
          <ul className="flex justify-between">
            <div className="flex gap-2">
              <li className="font-bold">{delivery.name}</li>
              <li className="font-bold">({delivery.star})</li>
              {delivery.type && (
                <li className="text-xs italic text-green-500">
                  {delivery.type}
                </li>
              )}
            </div>
            <div>
              <button className="px-2 text-xs text-slate-300">수정</button>
              <button className="px-2 text-xs text-slate-300">삭제</button>
            </div>
          </ul>
          <p className="pt-1">{delivery.address}</p>
          <p className="py-3">{delivery.number}</p>
          <hr className="border-border-solid z-20 border-t-[1px] border-t-slate-400" />
        </div>
      ))}

      {/* Button */}
      <div>
        <DeliveryButton />
      </div>
    </>
  );
}

export default DeliveryManagement;
