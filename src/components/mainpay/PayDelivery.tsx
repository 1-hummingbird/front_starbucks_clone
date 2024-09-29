import {
  getDefaultShippingID,
  getShippingDetailByID,
} from '@/action/cartAction';
import React from 'react';

async function PayDelivery() {
  const shippingDefaultID = (await getDefaultShippingID()).shippingDefaultID;
  console.log(shippingDefaultID);

  const shippingDetail = await getShippingDetailByID(shippingDefaultID);
  console.log(shippingDetail);
  return (
    <>
      <section>
        <div className="ml-8 pb-5 pt-16">
          <ul className="flex items-center justify-between">
            <div className="flex items-center justify-center gap-2">
              <li className="font-bold">{shippingDetail.name}</li>
              <li className="text-sm font-bold">
                {shippingDetail.addressNickname}
              </li>
              <li className="flex items-center justify-center bg-[#deefe9] px-[4px] py-[2px] text-[0.6rem] text-[#33b881]">
                기본
              </li>
            </div>
            <div>
              <button className="mr-10 rounded-xl border-2 px-1 text-slate-400">
                변경
              </button>
            </div>
          </ul>
          <p className="py-2 text-sm">{shippingDetail.address}</p>
          <ul>
            <li>{shippingDetail.phone}</li>
            <li>{shippingDetail.memo}</li>
          </ul>
        </div>
      </section>
      <hr className="border-border-solid z-20 mx-6 border-t-[1px] border-t-slate-400" />
    </>
  );
}

export default PayDelivery;
