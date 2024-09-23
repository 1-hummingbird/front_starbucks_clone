

import Link from "next/link";
import React from "react";

function DeliveryAddress() {
  return (
    <>
      <div className="container">
        <div>
          <p className="m-1.5 p-3.5 text-5xl">배송지 정보</p>
        </div>

        <div className="m-1.5 p-4">
          <form>
            <div className="form-group w-full">
              <label htmlFor="addressalias">주소 별칭</label>
              <br />
              <input
                type="text"
                id="addressalias"
                name="addressalies"
                className="border-2 border-solid"
                required
              />
            </div>

            <div className="form-group w-full">
              <label htmlFor="name">받는 분</label>
              <br />
              <input
                type="text"
                id="name"
                name="name"
                className="border-2 border-solid"
                required
              />
            </div>

            <div className="form-group w-full">
              <label htmlFor="le address">주소</label>
              <br />
              <input
                type="text"
                id="address"
                name="address"
                className="border-2 border-solid"
                required
              />
            </div>

            <div className="form-group w-full">
              <label htmlFor="phone">연락처</label>
              <br />
              <input
                type="text"
                id="phone"
                name="phone"
                className="border-2 border-solid"
                required
              />
            </div>

            <div className="form-group w-full">
              <label htmlFor="note">배송 매모</label>
              <br />
              <input
                placeholder="배송매모를 남겨주세요."
                type="text"
                id="note"
                name="note"
                className="border-2 border-solid"
                required
              />
            </div>

            <div className="py-3">
              <input type="checkbox" />
              기본 배송지로 저장합니다.
            </div>
          </form>
        </div>
        <div>
          <div>
            <div className="bottom-0 left-0 my-4 ml-9 w-3/4 rounded-full bg-[#02A862] py-4 text-center text-white">
              <Link href="/delivery">등록하기</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DeliveryAddress;
