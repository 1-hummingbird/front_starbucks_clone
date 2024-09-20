import React from "react";

function ServiceList() {
  return (
    <div className="bg-gray-200 min-h-dvh">
      <h2 className="font-bold p-5 text-lg">서비스</h2>
      <ul className="space-y-4 px-3">
        {" "}
        {/* 각 li 사이에 일정한 간격을 주는 클래스 */}
        <li className="flex items-center justify-between">
          {" "}
          {/* 가로 정렬 및 아이템 간격 설정 */}
          <div className="flex items-center space-x-2">
            {" "}
            {/* 첫 번째와 두 번째 요소 간 간격 */}
            <img
              className="w-8 h-8"
              src="https://img.icons8.com/?size=100&id=16408&format=png&color=000000"
              alt="주문내역"
            />
            <span>주문내역</span>
          </div>
          <img
            className="w-8 h-8"
            src="https://img.icons8.com/?size=100&id=15812&format=png&color=000000"
            alt="화살표"
          />
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              className="w-8 h-8"
              src="https://img.icons8.com/?size=100&id=15895&format=png&color=000000"
              alt="선물함"
            />
            <span>선물함</span>
          </div>
          <img
            className="w-8 h-8"
            src="https://img.icons8.com/?size=100&id=15812&format=png&color=000000"
            alt="화살표"
          />
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              className="w-8 h-8"
              src="https://img.icons8.com/?size=100&id=24472&format=png&color=000000"
              alt="쿠폰"
            />
            <span>쿠폰</span>
          </div>
          <img
            className="w-8 h-8"
            src="https://img.icons8.com/?size=100&id=15812&format=png&color=000000"
            alt="화살표"
          />
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              className="w-8 h-8"
              src="https://img.icons8.com/?size=100&id=14598&format=png&color=000000"
              alt="배송지"
            />
            <span>배송지 관리</span>
          </div>
          <img
            className="w-8 h-8"
            src="https://img.icons8.com/?size=100&id=15812&format=png&color=000000"
            alt="화살표"
          />
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              className="w-8 h-8"
              src="https://img.icons8.com/?size=100&id=16008&format=png&color=000000"
              alt="알림"
            />
            <span>입고 알림내역</span>
          </div>
          <img
            className="w-8 h-8"
            src="https://img.icons8.com/?size=100&id=15812&format=png&color=000000"
            alt="화살표"
          />
        </li>
        <li className="font-bold mt-4">약관 및 정책</li>
        <li className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              className="w-8 h-8"
              src="https://img.icons8.com/?size=100&id=X91T6MIy7d9E&format=png&color=000000"
              alt="이용동의"
            />
            <span>배송지 정보 수집 및 이용 동의</span>
          </div>
          <img
            className="w-8 h-8"
            src="https://img.icons8.com/?size=100&id=15812&format=png&color=000000"
            alt="화살표"
          />
        </li>
      </ul>
    </div>
  );
}

export default ServiceList;
