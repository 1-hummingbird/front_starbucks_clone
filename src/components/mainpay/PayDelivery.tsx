import React from "react";

const data = {
  addressalias: "집",
  name: "길동",
  zipcode: 12345,
  address: "~~~~~~~~",
  deepaddress: "~~~~~~",
  tel: "010-0000-0000",
  note: "문 앞에 놔두세요",
};

const PayDelivery = () => {
  return (
    <div className="flex flex-col justify-between min-h-full">
      <div className="flex justify-between  py-5">
        <h4 className=" ml-9 font-bold text-xl">배송 정보</h4>
        <div>
          <a
            href=""
            className="mx-5 rounded-full border-2	 items-center text-gray-500 "
          >
            변경
          </a>
        </div>
      </div>

      <div className="ml-9 mb-5">
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
      <hr className=" border-border-solid border-t-[1px] z-20 border-t-slate-400" />
    </div>
  );
};

export default PayDelivery;
