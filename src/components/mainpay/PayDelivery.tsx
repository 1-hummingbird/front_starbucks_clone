import React from "react";

const data = {
  addressalias: "집",
  name: "홍길동",
  zipcode: 12345,
  address: "~~~~~~~~",
  deepaddress: "~~~~~~",
  tel: "010-0000-0000",
  note: "문 앞에 놔두세요",
};

const PayDelivery = () => {
  return (
    <>
      <h1 className="ml-8 text-2xl font-bold">결제하기 </h1>
      <div className="ml-8 flex flex-col justify-between pt-5">
        <div className="flex justify-between py-5">
          <h4 className="text-xl font-bold">배송 정보</h4>
          <div>
            <a
              href=""
              className="mx-5 items-center rounded-full border-2 p-1 text-gray-500"
            >
              변경
            </a>
          </div>
        </div>

        <div className="mb-5">
          <div className="flex justify-between">
            <div>
              <p>
                {data.name}({data.addressalias})
              </p>

              <div>
                <p>
                  ({data.zipcode}) {data.address}({data.deepaddress})
                </p>
              </div>

              <div>
                <p>{data.tel}</p>
              </div>

              <div>
                <p>{data.note}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-border-solid z-20 border-t-[1px] border-t-slate-400" />
    </>
  );
};

export default PayDelivery;
