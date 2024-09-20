import React from "react";

const data = {
  id: 1,
  name: "홍길동",
  star: "집",
  address: "경남 김해시 장유로 000번지 000동 000호",
  type: "기본",
  number: "010-0000-0000",
};

const PayDelivery = () => {
  return (
    <>
      <h1 className="ml-7 text-2xl font-bold">결제하기 </h1>
      <div key={data.id} className="ml-8 py-5">
        <ul className="flex justify-between">
          <div className="flex gap-2">
            <li className="font-bold">{data.name}</li>
            <li className="font-bold">({data.star})</li>
            {data.type && (
              <li className="text-xs italic text-green-500">{data.type}</li>
            )}
          </div>
          <button className="mr-10 rounded-xl border-2 px-1 text-slate-400">
            변경
          </button>
        </ul>
        <p className="pt-1">{data.address}</p>
        <p className="py-3">{data.number}</p>
      </div>
      <hr className="border-border-solid z-20 border-t-[1px] border-t-slate-400" />
    </>
  );
};

export default PayDelivery;
