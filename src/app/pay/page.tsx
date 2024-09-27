import React from "react";
import PayDelivery from "../../components/mainpay/PayDelivery";
import PayPurchase from "../../components/mainpay/PayPurchase";
import PayCoupon from "../../components/mainpay/PayCoupon";
import PayM from "../../components/mainpay/PayM";
import PaySummation from "../../components/mainpay/PaySummation";
import PayHeader from "@/components/mainpay/PayHeader";
import { getCartDatas } from "@/action/cartDataFetch";
import { getPayItemDatas } from "@/action/payDataFetch";

async function page() {
  console.log(getPayItemDatas);

  return (
    <>
      <PayHeader />
      <PayDelivery />
      <PayPurchase />
      <PayCoupon />
      <PayM />
      <PaySummation />
    </>
  );
}

export default page;
