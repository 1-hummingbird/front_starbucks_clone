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

            <div className="w-full">
              <label htmlFor="zip code">우편번호</label>
              <br />
              <div className="flex justify-between">
                <input
                  type="text"
                  id="zip code"
                  name="zip code"
                  className="border-2 border-solid"
                  required
                />
                <button className="rounded-full border-2 border-solid border-green-700 p-1 text-emerald-400">
                  주소검색
                </button>
              </div>
            </div>

            <div className="form-group focus:border-bottom-25 w-full">
              <label htmlFor="address">기본주소</label>
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
              <label htmlFor="le address">상세주소</label>
              <br />
              <input
                type="text"
                id="le address"
                name="le address"
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
          <button
            type="button"
            className="mx-auto block w-3/5 rounded-lg bg-green-600 text-center"
          >
            <Link href={"/src/app/delivery/page.tsx"}>등록하기</Link>
          </button>
        </div>
      </div>
    </>
  );
}
export default DeliveryAddres;
