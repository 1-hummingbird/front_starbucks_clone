import React from "react";

function DeliveryManagement() {
  return (
    <>
      <h2 className="p-5 text-3xl font-bold">배송지 관리</h2>

      <div className=" w-4/5 px-5 leading-8 ">
        <ul className="flex justify-between">
          <li>이름 주소별칭 기본배송지 </li>
          <li>수정</li>
        </ul>
        <div>
          <div className="flex">
            <p>우편번호</p>
            <p>주소</p>
            <p>상세주소</p>
          </div>
          <div>
            <p>전화번호</p>
            <p>배송지 메모</p>
          </div>
        </div>
        <hr className="border-border-solid border-t-[1px] z-20 border-t-slate-400" />
      </div>

      {/* Button */}
      <hr className="border-border-solid border-t-[1px] z-20 border-t-slate-400" />
      <div className="">
        <button className="bg-[#01A862] text-white text-center rounded-full w-3/4 py-4 text-2xl absolute ">
          <a href="">+ 새 배송지 추가</a>
        </button>
      </div>
    </>
  );
}

export default DeliveryManagement;
