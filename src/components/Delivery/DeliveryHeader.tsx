import React from "react";
import Image from "next/image";

function DeliveryHeader() {
  return (
    <div>
      <div className="border-b-2 border-solid py-3 shadow-md">
        <ul className="flex justify-between px-3">
          <li>
            <Image
              width={25}
              height={25}
              src="https://img.icons8.com/?size=100&id=60636&format=png&color=000000"
              alt="왼쪽 화살표"
            ></Image>
          </li>
          <li className="font-bold">배송지 등록</li>
          <li>
            <Image
              width={25}
              height={25}
              src="https://img.icons8.com/?size=100&id=YHPR5PC37QJp&format=png&color=000000"
              alt="창 닫기"
            ></Image>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DeliveryHeader;
