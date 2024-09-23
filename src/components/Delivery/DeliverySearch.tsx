
import React from "react";

function DeliverySearch() {
  return (
    <>
      <h1 className="p-3 text-2xl font-bold">어디로 배송할까요</h1>

      <div className="m-3">
        <input
          className="w-full rounded-md bg-slate-200"
          placeholder="지번,도로명 건물명을 입력하세요"
          type="text"
        />

        <button className="my-5 w-full rounded-lg bg-slate-300 py-1">
          주소검색
        </button>
      </div>
    </>
  );
}

export default DeliverySearch;
