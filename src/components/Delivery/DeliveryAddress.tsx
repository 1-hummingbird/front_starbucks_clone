import { Link } from "lucide-react";
import React from "react";

function DeliveryAddres() {
  return (
    <>
      <div className="container">
        <div>
          <p className="text-5xl m-1.5 p-3.5	">배송지 정보</p>
        </div>

        <div className="m-1.5 p-3.5">
          <form>
            <div className="w-full form-group	">
              <label htmlFor="addressalias">주소 별칭</label>
              <br />
              <input
                type="text"
                id="addressalias"
                name="addressalies"
                className="border-solid border-2"
                required
              />
            </div>

            <div className="w-full form-group	">
              <label htmlFor="name">받는 분</label>
              <br />
              <input
                type="text"
                id="name"
                name="name"
                className="border-solid border-2"
                required
              />
            </div>

            <div className="w-full form-group	">
              <label htmlFor="zip code">우편번호</label>
              <br />
              <div>
                <input
                  type="text"
                  id="zip code"
                  name="zip code"
                  className="border-solid	 border-2"
                  required
                />
              </div>
            </div>

            <div className="w-full form-group focus:border-bottom-25	">
              <label htmlFor="address">기본주소</label>
              <br />
              <input
                type="text"
                id="address"
                name="address"
                className="border-solid border-2"
                required
              />
            </div>

            <div className="w-full form-group	">
              <label htmlFor="le address">상세주소</label>
              <br />
              <input
                type="text"
                id="le address"
                name="le address"
                className="border-solid	 border-2"
                required
              />
            </div>

            <div className="w-full form-group	">
              <label htmlFor="tel">연락처</label>
              <br />
              <input
                type="text"
                id="tel"
                name="tel"
                className="border-solid border-2"
                required
              />
            </div>

            <div className="w-full form-group	">
              <label htmlFor="note">배송 매모</label>
              <br />
              <input
                type="text"
                id="note"
                name="note"
                className="border-solid border-2"
                required
              />
            </div>

            <div>
              <input type="checkbox" />
              기본 배송지로 저장합니다.
            </div>
          </form>
        </div>
        <div>
          <button
            type="button"
            className="block bg-green-600 text-center	w-3/5	mx-auto rounded-lg"
          >
            <Link href={""}> 수정하기</Link>
          </button>
        </div>
      </div>
    </>
  );
}
export default DeliveryAddres;
