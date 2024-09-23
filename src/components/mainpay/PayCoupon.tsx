import React from "react";
import Image from "next/image";

function PayCoupon() {
  return (
    <>
      <div className="ml-8 py-5">
        <div className="flex justify-between">
          <div>
            <h4 className="text-xl font-bold">쿠폰 및 할인</h4>
          </div>
        </div>
        <div className="my-2 py-1">
          <div className="flex gap-2 text-center">
            <Image
              width={32}
              height={32}
              src="https://img.icons8.com/?size=100&id=24347&format=png&color=000000"
              alt="쿠폰"
            />
            쿠폰
          </div>
        </div>
      </div>
      <hr className="border-border-solid z-20 mx-6 border-t-[1px] border-t-slate-400" />
    </>
  );
}

export default PayCoupon;
