import React from "react";

function DeliveryManagement() {
  return (
    <>
      <h2 className="p-5 text-3xl font-bold">배송지 관리</h2>

      <div className=" w-4/5 px-5 leading-8 ">
        <ul className="flex justify-between">
          <li>
            <p className="font-bold">이름</p> 주소별칭 기본배송지{" "}
          </li>
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
      <div>
        <div className="fixed bottom-0 left-0 w-3/4 text-center bg-[#02A862] text-white py-4 rounded-full ml-9 my-4">
          <a href="./DeliveryAddress.tsx  ">+ 새 배송지 추가</a>
        </div>
      </div>
    </>
  );
}

export default DeliveryManagement;
