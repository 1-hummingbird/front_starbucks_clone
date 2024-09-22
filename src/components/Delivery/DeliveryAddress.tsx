import Link from "next/link";
import React from "react";

function DeliveryAddres() {
  return (
    <>
      <div className="container">
        <div>
          <p className="m-1.5 p-3.5 text-5xl">배송지 정보</p>
        </div>

        <div className="m-1.5 p-4">
          <form action={"/delivery"} method="post">
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

            <div className="form-group focus:border-bottom-25 w-full">
              <label htmlFor="address">주소</label>
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
              <label htmlFor="tel">연락처</label>
              <br />
              <input
                type="text"
                id="tel"
                name="tel"
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
              <Link href="/delivery">
                <button type="submit">등록하기</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DeliveryAddres;
